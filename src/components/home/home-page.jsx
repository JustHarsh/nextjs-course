import Link from 'next/link';
import Image from 'next/image';

export const HomePage = ({ data }) => { // comes from pages/index.js -> line 25
return (
 <div className='home_body'>
   {data.map((ev) => (
     <Link className='card' key={ev.id} href={`events/${ev.id}`} passHref>
    <div>
      <Image className="image" width={1000} height={200} src={ev.image} alt={ev.title}/>
     </div>
     <div className='content'>
      <h2>{ev.title}</h2> <p>{ev.description}</p>
     </div>
     </Link>
   ))}
 </div>
)
}