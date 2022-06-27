import React from 'react';

import './App.css'

import Card from "../src/components/Card"
import contacts from './Contact';

export default function App() {
    return (
      <div> 
       <h1 className="heading"> Contact Info </h1>
<Card 
        key={contacts[0].id}
        name={contacts[0].Name} 
        img={contacts[0].img} 
        contactNumber={contacts[0].contactNumber} 
        email={contacts[0].email}     
       />
<Card 
        key={contacts[1].id}
        name={contacts[1].Name} 
        img={contacts[1].img} 
        contactNumber={contacts[1].contactNumber} 
        email={contacts[1].email}     
       />
       <Card 
        key={contacts[2].id}
        name={contacts[2].Name} 
        img={contacts[2].img} 
        contactNumber={contacts[2].contactNumber} 
        email={contacts[2].email}     
       />
       </div>
    )
}


