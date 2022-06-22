import React from 'react';
import ReactDOM from 'react-dom/client';
import Card from './Card';

import data from '../src/Contact'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  <h1> Contact Info </h1>
    <Card name="Persona 1"
      img="https://lamenteesmaravillosa.com/wp-content/uploads/2021/01/mujer-sonriendo-pensando-felicidad-1024x683.jpg?auto=webp&quality=45&width=268&crop=16:9,smart,safe"
      contactNumber="+1 234 523 342"
      email="random@gmail.com"
    />
     <Card name="Persona 2"
      img="https://t2.pb.ltmcdn.com/es/posts/3/0/1/como_saber_si_le_gustas_a_una_persona_por_whatsapp_5103_orig.jpg"
      contactNumber="+1 932 345 021"
      email="ran2@gmail.com"
    />
      <Card 
         id = {item.id}
         
    />
  </React.StrictMode>
);

