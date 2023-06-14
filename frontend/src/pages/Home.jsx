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
        <button id='landingCreateButton' className='button is-rounded'>Create an event!</button>
      </Link>
    </section>
  </>
}
