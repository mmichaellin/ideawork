import React, {Component} from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import {Carousel} from 'react-responsive-carousel'

export default class Homepage extends Component {
  constructor() {
    super()
    this.state = {}
  }
  render() {
    return (
      <div>
        <Navbar />
        <Carousel showArrows={false} showStatus={false} showThumbs={false} stopOnHover={false} infiniteLoop={true} autoPlay={true} >
          <div>
            <img src={window.location.origin + '/image1.png'} />
            {/* <p className="legend">image1</p> */}
          </div>
          <div>
            <img src={window.location.origin + '/image2.png'} />
            {/* <p className="legend">image2</p> */}
          </div>
          <div>
            <img src={window.location.origin + '/image3.png'} />
            {/* <p className="legend">image3</p> */}
          </div>
        </Carousel>
        <Footer />
      </div>
    )
  }
}
