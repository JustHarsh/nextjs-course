import React from 'react'
import Image from 'next/image'
import Link from 'next/link'


const CatEvent = ({ data, pageName }) => {
  return (
  <div className='cat_events'>
   <h1>Events in {pageName}</h1>
   <div className='content'>
    {data.map((ev) => (
      // when user clicks 'Link' they get routed to another page which renders [id].js
    <Link className='card' key={ev.id} href={`/events/${ev.city}/${ev.id}`} passHref> 
      <Image alt={ev.title} src={ev.image} width={200} height={200}/>
      <h2>{ev.title}</h2>
      <p>{ev.description}</p>
     </Link>))}
   </div>
  </div>
  )
}

export default CatEvent;
