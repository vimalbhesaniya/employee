require("./db");
const express = require("express");
const {
    User,
    Address,
    Education,
    WorkExperience,
    Company,
    JobPost,
    SavedJob,
    Connection,
} = require("./model");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();
const jwt = require("jsonwebtoken");
const key = "jobduniya";
const encrypt = require("bcrypt");
const crypto = require("crypto");
const { sendMail } = require("./mailServices");
// const multer = require("multer");

//
app.use(cors());
app.use(express.json());

function generateOTP(length = 6) {
    const buffer = crypto.randomBytes(Math.ceil(length / 2));
    const OTP = buffer.toString("hex").slice(0, length);
    return OTP;
}

// const handleFileUpload = (event) => {
//     const selectedFile = event;
//     if (selectedFile) {
//         const storageRef = firebase.storage().ref();
//         const fileRef = storageRef.child(selectedFile.name)

//         fileRef.put(selectedFile).then((snapshot) => {
//             snapshot.ref.getDownloadURL().then((downloadURL) => {
//                 console.log(downloadURL);
//                 return downloadURL;
//             })
//         })
//     } else {
//         console.log("No File Selected, soo Select One!");
//     }
// }

// admin.initializeApp({
//     // credential: admin.credential.cert(serviceAccount),
//     storageBucket: "jobduniya-13f13.appspot.com"
// });

//   const upload = multer({ dest: 'uploads/' }); // Temporary storage for uploaded files

// app.post('/upload', async (req, res) => {
//     try {
//         // Check if req.body contains any data
//         if (req.body && Object.keys(req.body).length > 0) {
//             console.log('File posted:', req.body);
//             res.send('File uploaded successfully.');
//         } else {
//             console.log('No file posted.');
//             res.status(400).send('No file uploaded.');
//         }
//     } catch (error) {
//         console.error('Error uploading logo:', error);
//         return res.status(500).send('Error uploading logo.');
//     }
// });

// Login Authentication api
app.post("/login", async (req, res) => {
    if (req.body.password && req.body.email) {
        const email = req.body.email;
        const data = await User.findOne({ "email": email })
        if (data) {
            const pwdMatch = await encrypt.compare(req.body.password, data.password);
            if (pwdMatch) {
                jwt.sign({ data }, key, { expiresIn: "1d" }, (err, token) => {
                    err ? res.send("something went wrong") : res.send({ data, token: token, id: data._id })
                })
            }
            else {
                res.send({ error: "Password incorrect" })
            }
        } else {
            res.send({ error: "User not found" })
        }
    } else {
        res.send({ serverError: "Somthing went wrong" })
        console.log(req.body);
        if (req.body.password && req.body.email) {
            let data = await User.findOne(req.body).select("-password")
            if (data) {
                jwt.sign({ data }, key, { expiresIn: "1d" }, (err, token) => {
                    err ? res.send("something went wrong") : res.send({ data, token: token })
                })
            }
            else {
                res.send({ result: "User  not found" })
            }
        }
        else {
            res.send({ result: "Something Missing" });
        }
    }
})


// get all users
const verifyToken = (req, res, next) => {
    let token = req.headers["authorization"];
    console.warn("called ", token);
    if (token) {
        jwt.verify(token, key, (err, valid) => {
            err ? res.send({ unauthorized: "invalid token" }) : next();
        });
    } else {
        res.send({ result: "provide a token from headers" });
    }
};

app.get("/users", verifyToken, async (req, res) => {
    const users = await User.find().select("-password");
    res.send(users);
});

app.get("/profile/:ID", verifyToken, async (req, res) => {
    const id = req.params.ID;
    const user = await User.find({ _id: id }).select("-password");
    res.send(user);
});

app.get("/checkisvalid", verifyToken, async (req, res) => {
    res.send({ authorized: "You are Authorized" });
});

// user registration api
app.post("/addUser", async (req, res) => {
    req.body.password = await encrypt.hash(req.body.password, 10);
    const email = req.body.email;
    const user = await User.find({ email: email });
    if (user.length) {
        res.send({
            success: false,
            messge: "Email ID is alerady exits, PLease Enter Unique Id",
        });
    } else {
        const finaldata = new User(req.body);
        User.insertMany(finaldata)
            .then((e) => {
                res.status(201).send({ _id: e[0]._id });
            })
            .catch((e) => {
                res.status(400).send(e);
            });
    }
});
app.post("/addCompany", async (req, res) => {
    req.body.Password = await encrypt.hash(req.body.Password, 10);
    const email = req.body.Email;
    const company = await Company.find({ Email: email });
    if (company.length) {
        res.send({
            success: false,
            messge: "Email ID is alerady exits, PLease Enter Unique Id",
        });
    } else {
        const finaldata = new Company(req.body);
        Company.insertMany(finaldata)
            .then((e) => {
                res.status(201).send({ _id: e[0]._id });
            })
            .catch((e) => {
                res.status(400).send(e);
            });
    }
});

app.post("/addJob", async (req, res) => {
    const finaldata = new JobPost(req.body);
    JobPost.insertMany(finaldata)
        .then((e) => {
            res.status(201).send({ _id: e[0]._id });
        })
        .catch((e) => {
            res.status(400).send(e);
        });
});

// app.put("/personaldetail", async (req, res) => {
//     // const finaldata = new data(req.body);
//     const list = await User.find({ "_id": "65cc6967cdc9223fc6e2de04" });
//     if (list) {
//         await User.updateOne(
//             { "_id": "65cc6967cdc9223fc6e2de04" },
//             { $set: { "firstName": req.body.firstName, "lastName": req.body.lastName } }
//         )
//         res.send({ success: true, message: "Updated data" });
//     } else {
//         res.send({ success: false, message: "Data Not Found" })
//     }
// })
// app.put("/Otherdetail", async (req, res) => {
//     // const finaldata = new data(req.body);
//     const list = await User.find({ "_id": "65cc6967cdc9223fc6e2de04" });
//     if (list) {
//         await User.updateOne(
//             { "_id": "65cc6967cdc9223fc6e2de04" },
//             { $set: { "langauges": req.body.langauges, "skills": req.body.skills, "profession": req.body.profession } }
//         )
//         res.send({ success: true, message: "Updated data" });
//     } else {
//         res.send({ success: false, message: "Data Not Found" })
//     }
// })
// app.post("/address", async (req, res) => {
//     // const list=await Address.
//     // const finaldata=new Address(req.body);
//     // Address.insertMany(finaldata).then((e)=>{
//     //     res.status(201).send(e);
//     // }).catch((e)=>{
//     //     res.status(404).send(e);
//     // })
// })
// app.post("/Education", async (req, res) => {
//     const finaldata = new Education(req.body);
//     Education.insertMany(finaldata).then((e) => {
//         res.status(201).send(e);
//     }).catch((e) => {
//         res.status(404).send(e);
//     })
// })
// app.post("/WorkExperience", async (req, res) => {
//     const finaldata = new WorkExperience(req.body);
//     WorkExperience.insertMany(finaldata).then((e) => {
//         res.status(201).send(e);
//     }).catch((e) => {
//         res.status(404).send(e);
//     })
// })
// app.get("/search",async(req,res) => {
//     const srch=req.body.srch;
//     const tablename=req.body.tablename;
//     const Model = mongoose.model(tablename);
//     if(srch){
//         const list=await Model.find({$or:[{"email":{$regex: new RegExp(srch, 'i')}},{"firstName":{$regex: new RegExp(srch, 'i')}},{"lastName":{$regex: new RegExp(srch, 'i')}}]});
//         res.send(list);
//     }else{
//         res.send("Data ot found");
//     }
// })

// Update api
app.patch("/updateDetails", async (req, res) => {
    const tablename = req.body.COLLECTION_NAME;
    if (!tablename) {
        return res.status(400).send("Table name not provided");
    }
    const Model = mongoose.model(tablename);
    if (!Model) {
        return res.status(404).send("Model not found");
    }
    const { _id, COLUMNS } = req.body;
    console.log(COLUMNS);
    if (!_id) {
        return res.status(400).send("Document ID not provided");
    }
    try {
        const updatedDocument = await Model.findByIdAndUpdate(
            _id,
            { $set: COLUMNS },
            { new: true }
        );

        if (updatedDocument) {
            return res.send({
                success: true,
                message: "Updated data successfully",
                updatedDocument
            });
        } else {
            return res.status(404).send("Document not found");
        }
    } catch (error) {
        console.error("Error updating document:", error);
        return res.status(500).send("Internal Server Error");
    }
});


// Search Api
app.get("/search/:tbl/:keyword/:location", async (req, res) => {
    const keyword = req.params.keyword;
    const location = req.params.location;
    const tablename = req.params.tbl;
    if (!tablename) {
        return res.status(400).send("Table name not provided");
    }
    const Model = mongoose.model(tablename);
    if (!Model) {
        return res.status(404).send("Model not found");
    }

    try {
        if (tablename === "jobs") {
            const list = await Model.aggregate([
                {
                    $match: {
                        $or: [
                            { "Title": { $regex: new RegExp(keyword, "i") } },
                            { "company.Address.city": { $regex: new RegExp(location, "i") } }
                        ]
                    }
                }
            ]);
            res.send(list);
        } else {
            const schema = Model.schema.paths;
            const orQuery = Object.keys(schema)
                .filter((key) => schema[key].instance === "String")
                .map((key) => ({ [key]: { $regex: new RegExp(keyword, "i") } }));

            if (orQuery.length === 0) {
                return res.status(400).send("No searchable string fields in the schema");
            }
            const list = await Model.find({ $or: orQuery });
            res.send(list);
        }
    } catch (error) {
        console.error(error);
        res.status(500).send("Internal Server Error");
    }
});

app.get('/jobs', async (req, res) => {
    try {
        const { title , id} = req.query;
        let query = {};
        if (title) {
            query.Title = { $regex: title, $options: 'i' };
        }
        if (id) {
            query._id = id;
        }
        const jobs = await JobPost.find(query);
        res.json(jobs);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Server Error' });
    }
});

// Data Listing api
app.get("/fetchall/:tbl/:limit/:skip", async (req, res) => {
    const tablename = req.params.tbl;
    if (!tablename) {
        return res.status(400).send("Table name not provided");
    }
    const Model = mongoose.model(tablename);
    if (!Model) {
        return res.status(404).send("Model not found");
    } else {
        const list = await Model.find(req.body.where).limit(req.params.limit).skip(req.params.skip)
        res.status(201).send(list);
    }
});

app.get("/fetchConnectedComany", async (req, res) => {
    const status = req.body.status;
    const id2 = req.body.id2;
    if (!status || !id2) {
        res.send({ success: false, message: "Please Enter Both Id1 and Id2" });
    } else {
        const list = await Connection.find({ "userId": id2, "status": status });
        if (list) {
            res.send(list);
        } else {
            res.send({ success: false, message: "Couldn't find any data." })
        }
    }
})
// company registration api
app.post("/Insert/:tbl", async (req, res) => {
    const tablename = req.params.tbl;
    if (!tablename) {
        return res.status(400).send("Table name not provided");
    }
    const Model = mongoose.model(tablename);
    if (!Model) {
        return res.status(404).send("Model not found");
    }
    const finaldata = new Model(req.body);
    Model.insertMany(finaldata)
        .then((e) => {
            res.status(201).send(e);
        })
        .catch((e) => {
            res.status(400).send(e);
        });
});

// app.post('/jobPost', async (req, res) => {
//     const tablename = req.body.tablename;
//     if (!tablename) {
//         return res.status(400).send("Table name not provided");
//     }
//     const Model = mongoose.model(tablename);
//     if (!Model) {
//         return res.status(404).send("Model not found");
//     }
//     const finaldata = new Model(req.body);
//     Model.insertMany(finaldata).then((e) => {
//         res.status(201).send(e);
//     }).catch((e) => {
//         res.status(400).send(e);
//     })
// })

app.post("/savedJob", async (req, res) => {
    const UserID = req.body.userId;
    const JobID = req.body.jobId;
    if (!UserID || !JobID) {
        return res.status(400).send("User Id and Job Id are not provided");
    } else {
        const finaldata = new SavedJob(req.body);
        SavedJob.insertMany(finaldata)
            .then((e) => {
                res.status(201).send(e);
            })
            .catch((e) => {
                res.status(400).send(e);
            });
    }
});

app.post("/deleteSaveJob", async (req, res) => {
    const ID = req.body.id;
    SavedJob.deleteOne({ _id: ID })
        .then((e) => {
            res.status(201).send(e);
        })
        .catch((e) => {
            res.status(400).send(e);
        });
    // }
});

app.get("/ListJob/:status", async (req, res) => {
    const status = req.params.status;
    const list = await SavedJob.find({ "userId": req.body.userId, "Status": status });
    // const data = [];
    // if (list) {
    //   for (let j of list) {
    //     if (j.Status === status) {
    //       data.push(j);
    //     }
    //   }
    if (list) {
        res.send(list);
    } else {
        res.send("Not Found Saved Jobs");
    }
});

// app.post("/Follow", async (req, res) => {
//   const userid = req.body.userId;
//   const companyid = req.body.companyId;
//   if (!userid || !companyid) {
//     return res.status(400).send("User Id and Comapny Id are not provided");
//   } else {
//     const finaldata = new Connection(req.body);
//     Connection.insertMany(finaldata)
//       .then((e) => {
//         res.status(201).send(e);
//       })
//       .catch((e) => {
//         res.status(400).send(e);
//       });
//   }
// });

app.post("/Follow", async (req, res) => {
    const userid = req.body.userId;
    const companyid = req.body.companyId;
    if (!userid || !companyid) {
        return res.status(400).send("User Id and Comapny Id are not provided");
    } else {
        const finaldata = new Connection(req.body);
        Connection.insertMany(finaldata)
            .then((e) => {
                res.status(201).send(e);
            })
            .catch((e) => {
                res.status(400).send(e);
            });
    }
});

// app.get("/Listing", async (req, res) => {
//     const tablename = req.body.tablename;
//     if (!tablename) {
//         return res.status(400).send("Table name not provided");
//     }
//     const Model = mongoose.model(tablename);
//     if (!Model) {
//         return res.status(404).send("Model not found");
//     }
//     else {
//         // res.send(req.body.where);
//         const id=[];
//         const list = await Model.find(req.body.where);
//         if(req.body.where==="Comapny_ID") {
//             id.push(list.User_ID);
//         }
//         else{
//             id.push(list.Company_ID);
//         }
//         res.status(201).send(id);
//     }
// })

app.get("/UserListing", async (req, res) => {
    const companyId = req.body.companyId;
    // res.send(companyId);
    if (!companyId) {
        return res.status(400).send("Company ID not provided");
    }
    try {
        // Find connections for the given companyID
        const connections = await Connection.find({ companyId: companyId });

        // Extract user IDs from connections
        const userIDs = connections.map((connection) => connection.userId);

        // Find users who have followed the given company
        const users = await User.find({ _id: { $in: userIDs } });

        res.status(200).json(users);
    } catch (error) {
        console.error("Error:", error);
        res.status(500).send("Internal Server Error");
    }
});

app.get("/CompanyListing", async (req, res) => {
    const userId = req.body.userId;
    // res.send(companyId);
    if (!userId) {
        return res.status(400).send("User ID not provided");
    }
    try {
        // Find connections for the given companyID
        const connections = await Connection.find({ userId: userId });

        // Extract user IDs from connections
        const companyIDs = connections.map((connection) => connection.companyId);

        // Find users who have followed the given company
        const company = await Company.find({ _id: { $in: companyIDs } });

        res.status(200).json(company);
    } catch (error) {
        console.error("Error:", error);
        res.status(500).send("Internal Server Error");
    }
});

app.post("/Clogin", async (req, res) => {
    const to = req.body.email;
    const oneTimeOTP = generateOTP();
    const comapny = await Company.findOne({ Email_ID: to });
    if (comapny) {
        await Company.updateOne(
            { Email_ID: to },
            { $set: { secretKey: oneTimeOTP } }
        );
        const subject = "Sending Email";
        const html = "<p>One Time OTP : <b>" + oneTimeOTP + "</b></p>";
        const result = await sendMail(to, subject, html);
        res.send(result);
    } else {
        res.send({ message: "Company is not available" });
    }
});

app.post("/forgot", async (req, res) => {
    const oneTimeOTP = generateOTP();
    const to = req.body.email;
    const user = await User.findOne({ email: req.body.email });
    if (user) {
        await User.updateOne(
            { email: req.body.email },
            { $set: { secretKey: oneTimeOTP } }
        );
        const subject = " Password Reset Verification Code";
        const html =
            "<p>dear ,</p>" + req.body.email
            +
            "<p>You have requested to change password of your account. Please use the following One-Time Password (OTP) to proceed:</p><p>OTP: <b>" +
            oneTimeOTP +
            "</b><p>This OTP is valid for a limited time only. Do not share this OTP with anyone for security reasons.</p>" +
            "<p><b>Thank you for choosing JobDuniya!,</b></p><p><b>regards ,<br/> jobDuniya & Team</b></p>";


        const result = await sendMail(to, subject, html);
        console.log(result);
        res.send({ status: true, result });
    } else {
        res.send({ status: false, message: "user not found" });
    }
});

app.post("/checkOTP", async (req, res) => {
    const ConOTP = req.body.otp;
    const user = await User.findOne({ email: req.body.email });
    // res.send(user)
    if (ConOTP === user.secretKey) {
        res.send({ success: true });
    } else {
        res.send({ success: false });
    }
});

app.put("/changePwd", async (req, res) => {
    try {
        if (req.body.password && req.body.email) {
            req.body.password = await encrypt.hash(req.body.password, 10);
            const user = await User.findOne({ email: req.body.email });
            if (user) {
                await User.updateOne(
                    { email: req.body.email },
                    { $set: { password: req.body.password, secretKey: "" } }
                );
                res.send({ success: true });
            } else {
                res.send({ success: false, message: "User Not Found" });
            }
        } else {
            res.send({ success: false, message: "Not get data in body" });
        }
    } catch (error) {
        console.error("Error fetching data:", error);
    }
});

app.post("/verify", async (req, res) => {
    const ConOTP = req.body.otp;
    const email = req.body.email;
    const company = await Company.findOne({
        Email_ID: req.body.email,
        secretKey: req.body.otp,
    });
    // res.send(user)
    if (company) {
        jwt.sign({ company }, key, { expiresIn: "1d" }, async (err, token) => {
            err
                ? res.send("something went wrong")
                : await Company.updateOne(
                    { Email_ID: req.body.email },
                    { $set: { secretKey: "" } }
                );
            res.send({ company, token: token, id: company._id });
        });
    } else {
        res.send({ result: "Company not found" });
    }
});

app.post("/FileUpload", async (req, res) => {
    const file = req.body.file;
    res.send(file);
    // handleFileUpload(file);
})

app.listen(5500, () => console.log("server started..."))   