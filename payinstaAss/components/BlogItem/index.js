// Write your JS code here
import './index.css'

const BlogItem = props => {
  const {blogDetails} = props
  const {image, title, description} = blogDetails

  return (
    <div>
      <h1 className="main-heading">Our Destinations</h1>
      <div className="blog-list">
        <div className="main-card">
          <div className="image-container">
            <img
              src="https://res.cloudinary.com/diu6enwvi/image/upload/v1693623534/card-image_4_mwmki9.jpg"
              className="card-2-subtract-img-c"
              alt="card-img"
            />

            <h1 className="blog-item-heading">Harvard University</h1>
          </div>
          <div className="para-icon-container">
            <p className="blog-item-paragraph">Cambridge, Massachusetts, UK</p>
            <img
              src="https://res.cloudinary.com/diu6enwvi/image/upload/v1693716890/Icons_dvkmx7.jpg"
              className="icon-img"
              alt="icon-img"
            />
          </div>
        </div>
        <div className="main-card">
          <div className="image-container">
            <img
              src="https://res.cloudinary.com/diu6enwvi/image/upload/v1693621896/card-image_v3mdf3.jpg"
              className="card-2-subtract-img-c"
              alt="card-img"
            />

            <h1 className="blog-item-heading">Oxford University</h1>
          </div>
          <div className="para-icon-container">
            <p className="blog-item-paragraph">Oxford, England</p>
            <img
              src="https://res.cloudinary.com/diu6enwvi/image/upload/v1693716890/Icons_dvkmx7.jpg"
              className="icon-img"
              alt="icon-img"
            />
          </div>
        </div>
        <div className="main-card">
          <div className="image-container">
            <img
              src="https://res.cloudinary.com/diu6enwvi/image/upload/v1693621896/card-image_1_wtqg0g.jpg"
              className="card-2-subtract-img-c"
              alt="card-img"
            />

            <h1 className="blog-item-heading">Stanford University</h1>
          </div>
          <div className="para-icon-container">
            <p className="blog-item-paragraph">Stanford, California</p>
            <img
              src="https://res.cloudinary.com/diu6enwvi/image/upload/v1693716890/Icons_dvkmx7.jpg"
              className="icon-img"
              alt="icon-img"
            />
          </div>
        </div>
        <div className="main-card">
          <div className="image-container">
            <img
              src="https://res.cloudinary.com/diu6enwvi/image/upload/v1693621897/card-image_2_sretdt.jpg"
              className="card-2-subtract-img-c"
              alt="card-img"
            />

            <h1 className="blog-item-heading">
              Nanyang Technological University
            </h1>
          </div>
          <div className="para-icon-container">
            <p className="blog-item-paragraph">Nanyang Ave, Singapura</p>
            <img
              src="https://res.cloudinary.com/diu6enwvi/image/upload/v1693716890/Icons_dvkmx7.jpg"
              className="icon-img"
              alt="icon-img"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default BlogItem
