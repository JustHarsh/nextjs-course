import { SingleEvent } from '../../../src/components/events/singleEvent';

const EventPage = ({ data }) => { // line 42
 return <SingleEvent data={data}/>
}

export default EventPage;

export async function getStaticPaths() { // to render the page on server side

 const { allEvents } = await import('/data/data.json')
 // const allEvents = data

 const allPaths = allEvents.map((path) => {
  return {
   params: {
    cat: path.city,
    id: path.id,
   }
  }
 })

 return {
  paths: allPaths,
  fallback: false
 }
}

export async function getStaticProps(context) { // set required props on server side
 const id = context.params.id // from .json file
 const { allEvents } = await import('/data/data.json') // getting events

 const eventData = allEvents.find(ev => id === ev.id) // grabbing data about the event using id

 return {
  props: { data: eventData}
 }
}


/* 
You should use getStaticPaths if you're statically pre-rendering pages that use dynamic routes and:
The data comes from a headless CMS.
The data comes from a database.
The data comes from the filesystem.
The data can be publicly cached (not user-specific) 

*/

/* 
When should I use getStaticProps?
The data required to render the page is available at build time ahead of a user's request.
The data comes from a headless CMS.
The page must be pre-rendered (for SEO) and be very fast — getStaticProps generates HTML and JSON files, both of which can be cached by a CDN for performance. 

*/