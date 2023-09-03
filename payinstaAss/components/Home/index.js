import BlogList from '../BlogList'
import UserInfo from '../UserInfo'
import Contact from '../Contact'
import Schedules from '../Schedules'
import Testimonials from '../Testimonials'
import Footer from '../Footer'
import './index.css'

const Home = () => (
  <div className="home-container">
    <UserInfo />
    <BlogList />
    <Contact />
    <Schedules />
    <Testimonials />
    <Footer />
  </div>
)

export default Home
