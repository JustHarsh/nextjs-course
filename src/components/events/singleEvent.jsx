import Image from 'next/image'
import { useRef, useState } from 'react'
import { useRouter } from 'next/router'

export const SingleEvent = ({ data }) => {
 const inputEmail = useRef()
 const router = useRouter()
 const [message, setMessage] = useState('');


 const onSubmit = async (e) => {
   e.preventDefault()
   const emailValue = inputEmail.current.value
   const eventId = router?.query.id

   const validRegEx = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

   if (!emailValue.match(validRegEx)) {
    setMessage("Enter a valid email address.")
   }

   try {
     const response = await fetch('/api/email-registration', {
       method: 'POST',
       headers: {
         'Content-Type': 'application/json',
       },
       body: JSON.stringify({ email: emailValue, eventId }),
     });

     // console.log(response);
     if (!response.ok) throw new Error(`Error: ${response.status}`);
     const data = await response.json();
     // console.log('POST', data)
     setMessage(data.message);
     inputEmail.current.value = '';
   } catch (e) {
     console.log('ERROR', e);
   }
 }

 return (
  <div className='event_single_page'>
   <Image src={data.image} width={1000} height={1000}alt={data.title} />
   <h1>{data.title}</h1>
   <p>{data.description}</p>
   <form onSubmit={onSubmit} className='email_registration'>
    <label>Register to the event: </label>
    <input ref={inputEmail} type="email" id='email' placeholder='123@example.com'
    /> <button type='submit'>Submit</button>
   </form>
   <p>{message}</p>
  </div>
 )
}
