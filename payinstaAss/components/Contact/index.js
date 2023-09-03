import './index.css'

const Contact = () => (
  <div className="main-2">
    <div className="sub-card-2">
      <div className="hollow-ellipse-container">
        <img
          src="https://res.cloudinary.com/diu6enwvi/image/upload/v1693625407/Ellipse_46_br41fr.jpg"
          className="sub-card-ellipse-46"
          alt="Ellipse-46"
        />
        <img
          src="https://res.cloudinary.com/diu6enwvi/image/upload/v1693722373/Subtract_2_do6hsh.jpg"
          className="offers-card-img"
          alt="card-img"
        />
      </div>
      <div className="sub-sub-card">
        <p className="sub-card-para-1">Get 20% off for student</p>
        <h1 className="sub-card-heading">
          Student discounts available.
          <br />{' '}
          <spam className="sub-card-spam">
            Get ready for some fun in the sun!
          </spam>
        </h1>

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
    <div className="round-image-container">
      <img
        src="https://res.cloudinary.com/diu6enwvi/image/upload/v1693625406/Ellipse_55_hholv2.jpg"
        className="card-2-ellipse-55-img"
        alt="card-img"
      />
    </div>
    <div className="sub-card-2">
      <img
        src="https://res.cloudinary.com/diu6enwvi/image/upload/v1693621897/Mask_group_olcrkh.jpg"
        className="sub-card-2-woman-img"
        alt="card-img"
      />
      <img
        src="https://res.cloudinary.com/diu6enwvi/image/upload/v1693625833/Subtract_1_ay6ky1.jpg"
        className="card-2-subtract-img"
        alt="card-img"
      />
    </div>
  </div>
)

export default Contact
