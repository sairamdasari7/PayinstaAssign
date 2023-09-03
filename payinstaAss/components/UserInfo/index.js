// Write your JS code here

import './index.css'

const UserInfo = () => (
  <div className="main">
    <div className="card-1">
      <div className="user-info-container">
        <img
          src="https://res.cloudinary.com/diu6enwvi/image/upload/v1693655667/Ellipse_46_br41fr_fcrrlm.jpg"
          className="ellipse-46"
          alt="Ellipse-46"
        />
        <h1 className="user-info-heading">
          Discover the beauty of the tropics
        </h1>
        <p className="user-info-paragraph">
          <span className="highlight-1">Tropical</span>
          <br />

          <span className="highlight-2">Destinations</span>
          <br />

          <span className="highlight-3">For Student</span>
        </p>
        <p className="user-info-paragraph">
          Lorem ipsum dolor sit amet consectetur. Sit mattis donec mi bibendum
          integer rutrum nisi. A nec nisl vitae
        </p>
        <div className="images-container">
          <div className="user-info-img">
            <img
              src="https://res.cloudinary.com/diu6enwvi/image/upload/v1693625833/Subtract_1_ay6ky1.jpg"
              className="subtract"
              alt="Subtract"
            />
          </div>
        </div>
        <button className="btn-card-1" type="button">
          SIGN UP
        </button>
      </div>
      <div>
        <img
          src="https://res.cloudinary.com/diu6enwvi/image/upload/v1693652014/Ellipse_48_g4wqpi.jpg"
          className="ellipse-48"
          alt="Ellipse-48"
        />
        <img
          src="https://res.cloudinary.com/diu6enwvi/image/upload/v1693654882/Group_171_pusy3f_gre8dz.jpg"
          className="ellipse-48"
          alt="Ellipse-48"
        />
        <img
          src="https://res.cloudinary.com/diu6enwvi/image/upload/v1693625754/Subtract_hollyq.jpg"
          className="subtract-1"
          alt="subtract-1"
        />
      </div>
    </div>
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

export default UserInfo
