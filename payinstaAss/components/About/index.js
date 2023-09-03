import './index.css'

const About = () => (
  <div className="about-container">
    <div className="card-2">
      <div className="sub-card-1">
        <li className="blog-item-container">
          <div className="card-2-container">
            <img
              src="https://res.cloudinary.com/diu6enwvi/image/upload/v1693621897/avatar_klhzlh.jpg
              "
              className="card-2-img"
              alt="card-img"
            />
            <p className="card-paragraph">
              Lorem ipsum dolor sit amet, consectetur adipiscing...
            </p>
          </div>
        </li>
        <li className="blog-item-container">
          <div className="card-2-container">
            <img
              src="https://res.cloudinary.com/diu6enwvi/image/upload/v1693621896/avatar_1_wirksp.jpg"
              className="card-2-img"
              alt="card-img"
            />
            <p className="card-paragraph">
              Lorem ipsum dolor sit amet, consectetur adipiscing...
            </p>
          </div>
        </li>
        <li className="blog-item-container">
          <div className="card-2-container">
            <img
              src="
              https://res.cloudinary.com/diu6enwvi/image/upload/v1693621896/avatar_2_qivilm.jpg"
              className="card-2-img"
              alt="card-img"
            />
            <p className="card-paragraph">
              Lorem ipsum dolor sit amet, consectetur adipiscing...
            </p>
          </div>
        </li>
      </div>
      <div className="sub-card-2">
        <img
          src="https://res.cloudinary.com/diu6enwvi/image/upload/v1693625833/Subtract_1_ay6ky1.jpg"
          className="card-2-subtract-img"
          alt="card-img"
        />
        <img
          src="https://res.cloudinary.com/diu6enwvi/image/upload/v1693625407/Ellipse_46_br41fr.jpg"
          className="sub-card-ellipse-46"
          alt="Ellipse-46"
        />
        <div className="sub-sub-card">
          <h1 className="sub-card-heading">
            Tropical Adventure
            <br /> <spam className="sub-card-spam">for Students.</spam>
          </h1>
          <p className="sub-card-para">
            Student Tropical Vacation: Relax and Recharge
          </p>
          <ul className="un-ord-list">
            <li className="sub-card-li">Lorem ipsum dolor sit amet </li>
            <li className="sub-card-li">Massa quis natoque sit quam </li>
            <li className="sub-card-li">Eros non pellentesque elit</li>{' '}
            <li className="sub-card-li"> tortor id euismod habitant </li>
            <li className="sub-card-li">Sed suspendisse id in ultrices</li>
          </ul>
          <button type="button" className="sub-sub-button">
            Explore More
          </button>
        </div>
      </div>
    </div>
  </div>
)

export default About
