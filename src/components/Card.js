import React from "react";
import Avatar from "../components/Avatar"
import Bottom from "../components/Bottom"

export default function Card(props) {
    return (
        <div className="card">
        <div className="top">
        <p className="name"> {props.id} </p>
            <h2 className="name"> {props.name} </h2>
            <Avatar img={props.img}  />
            </div>
            <Bottom 
                contactNumber={props.contactNumber} 
                email={props.email}
            />
        </div>
    )
}