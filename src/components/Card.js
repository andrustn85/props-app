import React from "react";

export default function Card(props) {
    return (
        <div className="card">
        <div className="top">
            <h2 className="name"> {props.name} </h2>
            <img className="circle-img" src={props.img} alt="#" />
            </div>
            <div className="bottom">
            <p className="info"> {props.contactNumber} </p>
            <p className="info"> <span> {props.email} </span> </p>
            </div>
        </div>
    )
}