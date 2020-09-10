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
          <Product />
          <Product />
        </section>
        <section className='home__row'>
          {/* Product */}
          {/* Product */}
          {/* Product */}
        </section>
        <section className='home__row'>{/* Product */}</section>
      </section>
    </section>
  );
}

export default Home;
