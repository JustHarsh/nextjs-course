import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

const AllEvents = ({ data }) => {
  return (
   <div>
   <div className='events_page'>
    <br />

     {data.map(ev => (
     <Link className='card' key={ev.id} href={`/events/${ev.id}`} passHref> {/* when user clicks on Link they are rerouted to [cat] */}
      <Image alt={ev.title} src={ev.image} width={300} height={300}/><h2>{ev.title}</h2>
      </Link>))
      }
    </div>
   </div> 
  )
}

export default AllEvents;
