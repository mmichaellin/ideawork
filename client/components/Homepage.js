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
    const content = [
      {
        name: 'article6',
        date: 'FEBRUARY 10 2017',
        title: 'Bureaux exquisite delightful carefully curated soft power.',
        author: 'LOREM IPSUM',
        sortDate: '02-10-2017'
      },
      {
        name: 'article3',
        date: 'JANUARY 21 2017',
        title: 'Esse airport veniam ryokan soft power',
        author: 'LOREM IPSUM',
        sortDate: '01-21-2017'
      },
      {
        name: 'article5',
        date: 'FEBRUARY 2 2017',
        title: 'Sharp bureaux sleepy K-pop carefully curated.',
        author: 'LOREM IPSUM',
        sortDate: '02-02-2017'
      },
      {
        name: 'article2',
        date: 'JANUARY 18 2017',
        title: 'K-pop extraordinary.',
        author: 'LOREM IPSUM',
        sortDate: '01-18-2017'
      },
      {
        name: 'article4',
        date: 'JANUARY 27 2017',
        title: 'St Moritz uniform Beams.',
        author: 'LOREM IPSUM',
        sortDate: '01-27-2017'
      },
      {
        name: 'article1',
        date: 'JANUARY 12 2017',
        title: 'Artisanal iconic cutting-edge business class.',
        author: 'LOREM IPSUM',
        sortDate: '01-12-2017'
      }
    ]
    const parseDate = (obj) => {
      let arr = obj.sortDate.split('-')
      return new Date(arr[2], arr[0], arr[1])
    }
    content.sort((a,b)=>{
      return parseDate(b) - parseDate(a)
    })
    return (
      <div>
        <Navbar />
        <Carousel
          showArrows={false}
          showStatus={false}
          showThumbs={false}
          stopOnHover={false}
          infiniteLoop={true}
          autoPlay={true}
        >
          <div>
            <img src={window.location.origin + '/image1.png'} className="carousel-img" />
            {/* <p className="legend">image1</p> */}
          </div>
          <div>
            <img src={window.location.origin + '/image2.png'} className="carousel-img" />
            {/* <p className="legend">image2</p> */}
          </div>
          <div>
            <img src={window.location.origin + '/image3.png'} className="carousel-img" />
            {/* <p className="legend">image3</p> */}
          </div>
        </Carousel>
        <div className="container">
          {content.map((article, idx) => (
            <div key={idx} className='card' >
              <img src={`${window.location.origin}/${article.name}.png`} className='article-img' />
              <div className='article-date' >{article.date}</div>
              <div className='article-title' >{article.title}</div>
              <div className='article-author'>Presented by: <u>{article.author}</u></div>
            </div>
          ))}
        </div>
        <Footer />
      </div>
    )
  }
}
