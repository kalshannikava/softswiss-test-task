import React from 'react';

import './App.scss';
import './styles/grid.scss';

import { cards, articles } from './data';

import Header from './components/Header/Header';
import Banner from './components/Banner/Banner';
import Footer from './components/Footer/Footer';
import Card from './components/Card/Card';
import Article from './components/Article/Article';

function App() {
  return (
    <div className='app'>
      <div className='grid-0'>
        <Header className='col-sm-8 col-md-12 col-lg-12'/>
        <Banner className='col-sm-8 col-md-12 col-lg-12' />
      </div>
      <main className='content grid'>
        <h2 className='content__title col-sm-8 col-md-12 col-lg-12'>Offers</h2>
        {cards.map(({ id, title, description, backgroundL, backgroundM, backgroundS, classNames, titleSize }) =>
          <div className={classNames} key={`card_container_${id}`}>
            <Card
              title={title}
              description={description}
              backgroundL={backgroundL}
              backgroundM={backgroundM}
              backgroundS={backgroundS}
              titleSize={titleSize}
              key={`card_${id}`}
            />
          </div>)}
        {articles.map(({ id, visibleText, hiddenText, title, classNames }) =>
          <Article title={title} visibleText={visibleText} hiddenText={hiddenText} key={id} className={classNames}  />)}
      </main>
      <div className='grid-0'>
        <Footer className='col-sm-8 col-md-12 col-lg-12' />
      </div>
    </div>
  );
}

export default App;
