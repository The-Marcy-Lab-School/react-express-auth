export default function AboutUsPage() {
    return <>
        <h1 className="title has-text-centered my-6">
            About Us
        </h1>
        <h1 className='has-text-centered mx-6 px-6'>
            At Recyclique, we firmly believe that each of us has the power to make a positive impact on the planet through our daily choices. We aim to empower individuals and communities by providing valuable information, resources, and opportunities to actively participate in recycling initiatives. Through our webpage, we aim to educate and inspire people to embrace the principles of reduce, reuse, and recycle. We strive to be a reliable source of knowledge, offering practical tips, guidelines, and insights into waste management, recycling techniques, and eco-friendly lifestyle choices. The vision of a cleaner, greener future drives our passionate team. We are dedicated to organizing engaging events, workshops, and campaigns that raise awareness and foster a sense of responsibility toward the environment. By creating a vibrant community of like-minded individuals, we aim to amplify our collective impact and drive positive change.
        </h1>
        <hr className='my-6 hrStyle'></hr>
        <div className="columns mb-6" id='aboutColumns'>
            <div className="column">
                <figure >
                    <img className='aboutImg' src='./src/assets/Mag.jpg'></img>
                    <p className='has-text-centered is-size-4 my-3'>Magdalena</p>
                </figure>
            </div>
            <div className="column">
                <figure className='figureStyle'>
                    <img className='aboutImg' src='./src/assets/Randy.jpg'></img>
                    <p className='has-text-centered is-size-4 my-3'>Randy</p>
                </figure>
            </div>
            <div className="column">
                <figure className='figureStyle'>
                    <img className='aboutImg' src='./src/assets/Shaina.jpeg'></img>
                    <p className='has-text-centered is-size-4 my-3'>Shaina</p>
                </figure>
            </div>
            <div className="column">
                <figure className='figureStyle'>
                    <img className='aboutImg' src='./src/assets/Jason.jpg'></img>
                    <p className='has-text-centered is-size-4 my-3'>Jason</p>
                </figure>
            </div>
            <div className="column">
                <figure className='figureStyle'>
                    <img className='aboutImg' src='./src/assets/Stacey.jpg'></img>
                    <p className='has-text-centered is-size-4 my-3'>Staceyann</p>
                </figure>
            </div>
        </div>
    </>;
}