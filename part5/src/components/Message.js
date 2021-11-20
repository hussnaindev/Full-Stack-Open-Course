import React from 'react'

const Message = ({errorMessage,successMessage}) =>
{
    if(errorMessage)
    {
        return(
            <div>
                <h2>{errorMessage}</h2>
            </div>
        )
    }

    else if(successMessage)
    {
        return(
            <div>
                <h2>{successMessage}</h2>
            </div>
        )
    }

    return(
        null
    ) 
}

export default Message