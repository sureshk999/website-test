import React from 'react';
import { Link } from 'react-router-dom';

function TickCardItem(props) {
  return (
    <>
      <li className='tickcards__item'>
        <Link className='tickcards__item__link' to={props.path}>
          <figure className='tickcards__item__pic-wrap' data-category={props.label}>
            <img
              className='tickcards__item__img'
              alt='Checkmark'
              src={props.src}
            />
          </figure>
          <div className='tickcards__item__info'>
            <h5 className='tickcards__item__header'>{props.header}</h5>
            <h8 className='tickcards__item__text'>{props.text}</h8>
          </div>
        </Link>
      </li>
    </>
  );
}

export default TickCardItem;