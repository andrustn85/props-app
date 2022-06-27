import React from 'react';

import './App.css'

import Card from "../src/components/Card"
import contacts from './Contact';

function createCard(contact) {
    return (
        <Card
        key={contact.id}
        id={contact.id}
name={contact.Name}
img={contact.img}
contactNumber={contact.contactNumber}
email={contact.email}
/>
    );
}



export default function App() {
    return (
      <div> 
       <h1 className="heading"> Contact Info </h1>
{contacts.map(createCard)}
</div>
    )
}


