import React from 'react'

const Message = ({errorMessage,successMessage}) =>
{
    if(errorMessage)
    {
        return(
            <div className="errorMessage">
                <h2>{errorMessage}</h2>
            </div>
        )
    }

    else if(successMessage)
    {
        return(
            <div className="successMessage">
                <h2>{successMessage}</h2>
            </div>
        )
    }

    return(
        null
    ) 
}

export default Message