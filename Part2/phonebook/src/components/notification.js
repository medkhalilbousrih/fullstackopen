import React from "react";

const Notification = ({message}) => {
    if(message === null) {
        return null
    }
    return(
        <div className="message">
            <p>{message}</p>
        </div>

    )
}


export default Notification;