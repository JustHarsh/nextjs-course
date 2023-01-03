import AllEvents from './events-page';

const EventsPage = ({ data }) => {
 return <AllEvents data={data}/>
}

export default EventsPage;

export async function getStaticProps() { // data is procured and rendered on to the page here
 const { events_categories } = await import('/data/data.json')

 console.log(events_categories)

 return {
  props: {
   data: events_categories,
  },
 };
}
 