import React from 'react';

import Product from '../../sharedComponents/Product/Product';

import './Home.scss';

function Home() {
  return (
    <section className='home'>
      <section className='home__container'>
        <img
          src='https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg?fbclid=IwAR1j5lBdNgn0v2h7GBA14wwQRCPQtKuiXbvskjvfqmnpUu3wx5y-hUdhHa8'
          alt='Amazon Prime Poster'
          className='home__image'
        />

        <section className='home__row'>
          <Product
            id='21314'
            title='The Lean Startup Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis deserunt maiores veritatis aut debitis earum adipisci repudiandae.'
            imageUrl='https://images-na.ssl-images-amazon.com/images/I/81-QB7nDh4L.jpg'
            imageDesc='The Lean Startup'
            price={65.0}
            rating={5}
          />
          <Product
            id='5645gd'
            title='iPhone 11 Pro Max Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis deserunt maiores veritatis aut debitis earum adipisci repudiandae.'
            imageUrl='https://www.att.com/idpassets/global/devices/phones/apple/iphone-11-pro-max/carousel/midnightgreen/iPhone_11_Pro_Max_MG_5_carousel.png'
            imageDesc='iPhone 11 Pro Max'
            price={724.99}
            rating={5}
          />
        </section>

        <section className='home__row'>
          <Product
            id='756he'
            title='Samsung TV Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis deserunt maiores veritatis aut debitis earum adipisci repudiandae.'
            imageUrl='https://stg-images.samsung.com/is/image/samsung/my-uhdtv-tu8500-ua65tu8500kxxm-Black-221415220?scl=1&fmt=png-alpha'
            imageDesc='Samsung TV'
            price={768.32}
            rating={3}
          />

          <Product
            id='8797jttf'
            title='Alien Gaming LaptopLorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis deserunt maiores veritatis aut debitis earum adipisci repudiandae.'
            imageUrl='https://images-na.ssl-images-amazon.com/images/I/71GIfE5U54L._AC_SX466_.jpg'
            imageDesc='Alien Gaming Laptop'
            price={675.22}
            rating={4}
          />
          <Product
            id='43547fgv'
            title='Big Monitor LaptopLorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis deserunt maiores veritatis aut debitis earum adipisci repudiandae.'
            imageUrl='https://assets.hardwarezone.com/img/2020/01/MAG342CQR.jpg'
            imageDesc='Big Monitor'
            price={815.99}
            rating={5}
          />
        </section>

        <section className='home__row'>
          <Product
            id='4436ggc'
            title='Nike Shoes LaptopLorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis deserunt maiores veritatis aut debitis earum adipisci repudiandae deserunt maiores veritatis aut debitis earum adipisci repudiandae.'
            imageUrl='https://rukminim1.flixcart.com/image/714/857/k1i6ikw0/shoe/r/m/g/bq3204-002-7-nike-black-white-anthracite-original-imafh2hv38ygyyfy.jpeg?q=50'
            imageDesc='Nike Shoes'
            price={184.99}
            rating={5}
          />
        </section>
      </section>
    </section>
  );
}

export default Home;
