import React from 'react';
import people from '../../assets/people.png';
import ai from '../../assets/ai.webp';
import './header.css';
// Illustration by Liam Moore from Ouch!

const Header = () => (
  <div className="gpt3__header section__padding" id="home">
    <div className="gpt3__header-content">
      <h1 className="gradient__text">Lets Build Something amazing with React </h1>
      <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Animi fugiat amet earum facilis ex praesentium, maiores voluptatum necessitatibus ipsam accusantium!</p>

      <div className="gpt3__header-content__input">
        <input type="email" placeholder="Your Email Address" />
        <button type="button">Get Started</button>
      </div>

      <div className="gpt3__header-content__people">
        <img src={people} />
        <p>1,600 people requested access a visit in last 24 hours</p>
      </div>
    </div>

    <div className="gpt3__header-image">
      <img src={ai} />
    </div>
  </div>
);

export default Header;