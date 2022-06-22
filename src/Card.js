import './App.css';

export default function Card(props) {
  return (
    <div>
    <h2> {props.name} </h2>
     <img  src={props.img} />
<p> Contact Number: {props.contactNumber} </p>
   <p> Email: {props.email} </p> 
    </div>
  );
}


