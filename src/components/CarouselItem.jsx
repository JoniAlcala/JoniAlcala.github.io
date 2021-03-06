/* eslint-disable import/order */
import React from 'react';
import { connect } from 'react-redux';
import { setFavorite, deleteFavorite } from '../actions';
import '../assets/components/CarouselItem.scss';
import { Link } from 'react-router-dom';
import play from '../assets/static/play.png';
import mas from '../assets/static/add-image.png';
import remove from '../assets/static/remove.png';
import premium from '../assets/static/p.png';

const CarouselItem = (props) => {
  const { id, cover, title, year, contentRating, duration, isList, isPremium } = props;
  const handleSetFavorite = () => {
    props.setFavorite({ id, cover, title, year, contentRating, duration, isList });
  };

  const handleDeleteFavorite = (itemId) => {
    props.deleteFavorite(itemId);
  };

  return (
    <div className='carousel-item'>
      <img className='carousel-item__img' src={cover} alt='' />
      <div className='carousel-item__details'>
        <div>
          <Link to={`/player/${id}`}>
            <img
              className='carousel-item__details--img'
              src={play}
              alt='Play Icon'
            />

          </Link>
          {isList ? (
            <img
              className='carousel-item__details--img'
              src={remove}
              alt='Plus Icon'
              onClick={() => handleDeleteFavorite(id)}
            />
          ) : (
            <img
              className='carousel-item__details--img'
              src={mas}
              alt='Plus Icon'
              onClick={handleSetFavorite}
            />
          )}
          {isPremium ? (
            <img
              className='carousel-item__details--img'
              src={premium}
              alt='Plus Icon'

            />
          ) : (
            <img
              className='carousel-item__details--img'
              src={mas}
              alt='Plus Icon'

            />
          )}

        </div>
        <p className='carousel-item__details--title'>{title}</p>
        <p className='carousel-item__details--subtitle'>
          {
            `${year}${contentRating}${duration}`
          }
        </p>
      </div>
    </div>
  );
};
const mapDispatchToProps = {
  setFavorite,
  deleteFavorite,
};

export default connect(null, mapDispatchToProps)(CarouselItem);
