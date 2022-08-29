"use strict";

function Tweet({username, name, date, msg}) {
    return(
        <div>
            <div>{username}</div>
            <div>{name} {date}</div>
            <div>{msg}</div>
        </div>
    )
}