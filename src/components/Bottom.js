import React from "react";

export default function Bottom(props) {
    return (
            <div className="bottom">
            <p className="info"> {props.contactNumber} </p>
            <p className="info"> <span> {props.email} </span> </p>
            </div>
    )
}