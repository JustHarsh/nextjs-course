import Link from 'next/link'
import Image from 'next/image'

export const Header = () => {
 return (
  <header>
    <div>    
      <div className='topNav'>
      <Image alt= "logo" src={'/images/logo_black.png'} height={50} width={50}/>
      <nav>
        <ul>
          <li>
            <Link href="/" passHref>Home</Link>
          </li>
          <li>
            <Link href="/events" passHref>Events</Link>
          </li>
          <li>
            <Link href="/about-us" passHref>About Us</Link>
          </li>
        </ul>
        <img />
      </nav>
      </div>
    </div>
    <p className='title'>
      Lorem ipsum dolor sit
    </p>
  </header>
 )
}   
      
      
      