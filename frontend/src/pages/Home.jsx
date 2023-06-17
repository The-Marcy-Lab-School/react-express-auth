import { Link } from 'react-router-dom'
export default function HomePage() {
  return <>
    <section className='section is-large' id='landingSection1'>
      <h1 className='has-text-weight-bold is-size-1 has-text-centered'>Empowering Communities for Sustainable Recycling: Inspiring Action and Fostering Change</h1>
    </section>

    <section className='section is-medium has-text-centered' id='landingSection2'>
      <h1 className='is-size-3 has-text-weight-bold'>Discover and join fun community events in any NYC borough! This feature brings you the opportunity to join cleanups, exchanges and more, right at your fingertips!</h1>
      <p className='is-size-4 py-5 pb-5'> Browse curated events, filter by borough or event type, and easily join to make a positive impact in your own neighborhood! Connect with like-minded people, and even organize your own exchange or cleanup event.
      <br></br>
      Join now and become an agent of change in our beloved NYC!</p>
      <Link to='/events'>
        <button id='landingCreateButton' className='button is-rounded'>Browse Events</button>
      </Link>
    </section>

    <section class="section is-medium" id="landingSection3">
     <h1 className='is-size-3 has-text-weight-bold' >Read The Latest News on Enironmentalism</h1>
     <h2 class="subtitle" className='is-size-4'>
     Our NewsFeed brings you the latest updates, informative articles, and statistics on environmental issues. Discover practical tips for sustainable living and join a community of like-minded individuals. Dive into comprehensive statistics highlighting the current state of our environment. Become part of our global movement for a greener, cleaner future!
     </h2>
     <Link to='/newsfeed'>
        <button id='landingCreateButton' className='button is-rounded'>Browse News</button>
      </Link>
    </section>
  </>
}
