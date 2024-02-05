export default function HomeHeader() {
  return (
    <>
      <section id="home-section1" className="home-section1-left">
        <section className="home-content">
          <h1 className="main-heading">
            The Enchanting Journey of Maternal Grace
          </h1>
          <p className="sub-text">
            Improving healthcare outcomes by enabling patients to track and
            document their symptoms accurately.
          </p>
          <button className="learn-more-btn">Learn More</button>
        </section>

        <section className="home-image">
          <img src="./images/woman_stretching" alt="" />
          <p>Image goes here</p>
        </section>
      </section>
    </>
  );
}
