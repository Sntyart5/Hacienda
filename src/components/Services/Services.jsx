import './Services.css'
import { Link } from 'react-router-dom'

export function Services(){
    return(
        <>
        <section className="services">
          <h1>Services</h1>
          <div className="imgs">
              <div className="rooms itemS">
            <Link to="/rooms">
                <h2>ROOMS</h2>
            </Link>
              </div>
              <div className="winery itemS">
            <Link  to="/winery">
                <h2>WINERY</h2>
            </Link>
              </div>
              <div className="restaurant itemS">
            <Link  to="/restaurant">
                <h2>RESTAURANT</h2>
            </Link>
              </div>
              <div className="events itemS">
            <Link  to="/events">
                <h2>EVENTS</h2>
            </Link>
              </div>
          </div>
        </section>
        </>
    )
}