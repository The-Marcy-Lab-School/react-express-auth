import { Link } from 'react-router-dom'
export default function HomePage() {
  return <>
    <section className='section is-large' id='landingSection1'>
      <h1 className='has-text-weight-bold is-size-1 has-text-centered'>Empowering Communities for Sustainable Recycling: Inspiring Action, Fostering Change</h1>
    </section>
    <section className='section is-medium has-text-centered' id='landingSection2'>
      <h1 className='is-size-3 has-text-weight-bold'>Together, we create a passionate community focused on recycling, preserving resources, and building a sustainable planet through engaging events.</h1>
      <p className='is-size-4 py-5 pb-5'>Join us in driving positive change!</p>
      <Link to='/events'>
        <button id='landingCreateButton' className='button'>Create an Event</button>
      </Link>
    </section>
    <section className='section is-medium' id='landingSection3'>
      <div className='text-3'>
      <p className='is-size-4 py-5 pb-5 has-text-weight-semibold'>Every year, millions of tons of recyclable materials end up in landfills, causing environmental harm and contributing to pollution. By increasing recycling efforts, we can help reduce this waste and prevent the loss of valuable resources, making a difference in the health of our planet.</p>
      <br/> 
      <p>Our mission is to create an online platform that empowers individuals and communities to actively participate in sustainable recycling practices. Through our recycling event webpage, we aim to inspire action, raise awareness, and foster a sense of responsibility towards the environment.</p>
      <br/>
      <Link to='/about' className='aboutLink'>
      <p className='is-size-5 py-4 pb-4 is-underlined'>Learn more about us</p>
      </Link>
      </div>
      <figure className="image">
        <img src='https://images.pexels.com/photos/7772006/pexels-photo-7772006.jpeg'/>
      </figure>
    </section>
    <section className='section is-medium has-text-centered' id='landingSection4'>
      <h1 className='is-size-3 has-text-weight-bold'>Read The Latest News on Enironmentalism</h1>
      <p className='is-size-4 py-5 pb-5'>Our NewsFeed brings you the latest updates, informative articles, and statistics on environmental issues. Discover practical tips for sustainable living and join a community of like-minded individuals. Dive into comprehensive statistics highlighting the current state of our environment. Become part of our global movement for a greener, cleaner future!</p>
      <Link to='/news'>
        <button id='landingCreateButton' className='button'>Read the News</button>
      </Link>
    </section>
  </>
}
