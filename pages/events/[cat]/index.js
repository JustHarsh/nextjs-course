import CatEvent from '../../../src/components/events/catEvent';

const EventsCatPage = ({ data, pageName }) => {
 return <CatEvent data={data} pageName={pageName} />
}

export default EventsCatPage;

export async function getStaticPaths() { // generates events/id which is later used by [id].js

  // GREAT for generating profile pages which usually have user-id's
 
 const { events_categories } = await import('/data/data.json')
 const allPaths = events_categories.map((ev) => {
  return {
   params: {
    cat: ev.id.toString(),
   },
  };
 });

 return {
     paths: allPaths,
     fallback: false,
   }
 }


export async function getStaticProps(context) {
 console.log(context)
 const id = context?.params.cat
 const { allEvents } = await import('/data/data.json')

 const data = allEvents.filter(ev => ev.city.toLowerCase() === id)
 //  console.log(id)

 return {
  props: { data, pageName: id }
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