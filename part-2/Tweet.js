"use strict";

function Tweet({username, name, date, msg}) {
    const myStyle = {
        border: "1px black solid",
        backgroundColor: "blue",
    }
    
    return(
        <div style={myStyle}>
            <div>{username}</div>
            <div>{name} {date}</div>
            <div>{msg}</div>
        </div>
    )
}