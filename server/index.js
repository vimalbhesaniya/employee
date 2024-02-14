require("./db")
const express = require("express");
const data = require("./model");
const cors = require("cors")
const app = express()
const jwt = require("jsonwebtoken")
const key = "jobduniya"
const encrypt = require("bcrypt")
// 
app.use(cors())
app.use(express.json())

// Login Authentication api 
app.post("/login", async (req, res) => {
    console.log(req.body);
    if (req.body.password && req.body.email) {
        let auth = await data.findOne(req.body).select("-password")
        if (auth) {
            jwt.sign({ auth }, key, { expiresIn: "1d" }, (err, token) => {
                err ? res.send("something went wrong") : res.send({ auth, token: token })
            })
        }
        else {
            res.send({ result: "User  not found" })
        }
    }
    else {
        res.send({ result: "Something Missing" });
    }
})

// get all users 
const verifyToken = (req, res, next) => {
    let token = req.headers['authorization']
    if (token) {
        jwt.verify(token, key, (err, valid) => {
            err ? res.send({ unauthorized: "invalid token" }) : next()
        })
    }
    else {
        res.send({ result: "provide a token from headers" })
    }
}

app.get("/users", verifyToken, async (req, res) => {
    const users = await data.find().select("-password");
    res.send(users);
})
app.get("/checkisvalid", verifyToken, async (req, res) => {
    res.send({ authorized: "You are Authorized" });
})

// user registration api 
app.post("/add", async (req, res) => {
    req.body.password = await encrypt.hash(req.body.password, 10);
    const finaldata = new data(req.body);
    data.insertMany(finaldata).then((e) => {
        res.status(201).send(e);
    }).catch((e) => {
        res.status(400).send(e)
    })
})

app.put("/personaldetail", async (req, res) => {
    // const finaldata = new data(req.body);
    const list = await data.find({ "_id": "65b67332bb141c6371a58e05" });
    if (list) {
        await data.updateOne(
            { "_id": "65b67332bb141c6371a58e05" },
            { $set: { "firstName":req.body.firstName,"lastName":req.body.lastName } }
        )
        res.send({ success: true, message: "Update data" });
    } else {
        res.send({ success: false, message: "Data Not Found" })
    }
})

app.put("/location", async (req, res) => {
    const list = await data.find({ "_id": "65b67332bb141c6371a58e05" });
    if (list) {
        await data.updateOne(
            { "_id": "65b67332bb141c6371a58e05" },
            { $set: { "personalAddress":req.body.personalAddress,"state":req.body.state,"city":req.body.city,"pinCode":req.body.pinCode } }
        )
        res.send({ success: true, message: "Update data" });
    } else {
        res.send({ success: false, message: "Data Not Found" })
    }
})

app.put("/location", async (req, res) => {
    const list = await data.find({ "_id": "65b67332bb141c6371a58e05" });
    if (list) {
        await data.updateOne(
            { "_id": "65b67332bb141c6371a58e05" },
            { $set: { "personalAddress":req.body.personalAddress,"state":req.body.state,"city":req.body.city,"pinCode":req.body.pinCode } },
            { new: true },
        )
        res.send({ success: true, message: "Update data" });
    } else {
        res.send({ success: false, message: "Data Not Found" })
    }
})

app.listen(5500, () => console.log("server started..."))