import './index.css'

const Schedules = () => (
  <div className="main-2">
    <div className="schedules-images-card">
      <img
        src="
https://res.cloudinary.com/diu6enwvi/image/upload/v1693726592/Group_167_1_el2fdu.jpg"
        className="schedules-image"
        alt="card-img"
      />

      <img
        src="https://res.cloudinary.com/diu6enwvi/image/upload/v1693722373/Subtract_2_do6hsh.jpg"
        className="offers-card-img"
        alt="card-img"
      />
    </div>
    <div className="book-now-card">
      <form className="form-edit">
        <h1 className="book-now-card-heading">Book Now</h1>
        <p className="book-now-card-para">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit
        </p>
        <label className="label-name">
          CITY
          <br />
          <input className="input-box" type="text" placeholder="Placeholder" />
        </label>
        <div className="form-small">
          <label className="label-name">
            ARRIVAL
            <br />
            <input
              className="input-box-1"
              type="text"
              placeholder="10 October"
            />
          </label>
          <label className="label-name">
            DEPARTURE
            <br />
            <input
              className="input-box-1"
              type="text"
              placeholder="11 October"
            />
          </label>
        </div>
        <div className="form-small">
          <label className="label-name">
            STAR
            <br />
            <input className="input-box-2" type="text" placeholder="4" />
          </label>
          <label className="label-name">
            ROOM
            <br />
            <input className="input-box-2" type="text" placeholder="1" />
          </label>
        </div>
      </form>
      <button type="button" className="book-button">
        Book Now
      </button>
    </div>
  </div>
)

export default Schedules
