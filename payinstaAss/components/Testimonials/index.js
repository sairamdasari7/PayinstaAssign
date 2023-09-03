import './index.css'

const Testimonials = () => (
  <div className="main-testimonials">
    <h1 className="Testimonials-Heading">Testimonials</h1>
    <div className="card-profile-comment">
      <li className="blog-item-container">
        <div className="testimonial-card-container">
          <div className="pic-container">
            <img
              src="https://res.cloudinary.com/diu6enwvi/image/upload/v1693621897/Avatar_5_lc7l2p.jpg"
              className="testimonials-card-img"
              alt="card-img"
            />
            <h1 className="testimonials-card-heading">Corey Korsgaard</h1>
          </div>
          <p className="card-paragraph">
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout.
          </p>
        </div>
      </li>
      <li className="blog-item-container">
        <div className="testimonial-card-container">
          <div className="pic-container">
            <img
              src="https://res.cloudinary.com/diu6enwvi/image/upload/v1693621897/Avatar_4_cahwki.jpg"
              className="testimonials-card-img"
              alt="card-img"
            />
            <h1 className="testimonials-card-heading">Jakob Aminoff</h1>
          </div>
          <p className="card-paragraph">
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout.
          </p>
        </div>
      </li>
      <li className="blog-item-container">
        <div className="testimonial-card-container">
          <div className="pic-container">
            <img
              src="
              https://res.cloudinary.com/diu6enwvi/image/upload/v1693621895/Avatar_3_rz5vdo.jpg"
              className="testimonials-card-img"
              alt="card-img"
            />
            <h1 className="testimonials-card-heading">Carla Press</h1>
            <p className="card-paragraph">
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout.
            </p>
          </div>
        </div>
      </li>
    </div>
  </div>
)
export default Testimonials
