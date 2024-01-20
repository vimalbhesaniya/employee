import React from 'react'

const FormButton = ({ className, onClick,  text , isDisabled}) => {
    return (
        <>
            <button
                className={className}
                onClick={onClick}
                disabled={isDisabled}
            >{text}</button>
        </>
    )
}

export default FormButton