import React from 'react'
import glob from "./Global.module.css"

const GlobalModel = ({modelName}) => {
    return (
        <div className={glob.globalContainer}>
        {modelName}
        </div>
    )
}

export default GlobalModel