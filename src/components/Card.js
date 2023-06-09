import PropTypes from 'prop-types';
import React from 'react';

class Card extends React.Component {
  render() {
    const {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
    } = this.props;

    return (
      <div>
        <p data-testid="name-card">
          { cardName }
        </p>

        <img src={ cardImage } alt={ cardName } data-testid="image-card" />

        <p data-testid="description-card">
          {cardDescription}
        </p>

        <p data-testid="attr1-card">
          {cardAttr1}
        </p>

        <p data-testid="attr2-card">
          {cardAttr2}
        </p>

        <p data-testid="attr3-card">
          {cardAttr3}
        </p>

        <p data-testid="rare-card">
          {cardRare}
        </p>

        {cardTrunfo
        && <div data-testid="trunfo-card" className="st"> Super Trunfo </div> }

      </div>
    );
  }
}

Card.propTypes = {
  cardName: PropTypes.string.isRequired,
  cardDescription: PropTypes.string.isRequired,
  cardAttr1: PropTypes.number.isRequired,
  cardAttr2: PropTypes.number.isRequired,
  cardAttr3: PropTypes.number.isRequired,
  cardImage: PropTypes.string.isRequired,
  cardRare: PropTypes.string.isRequired,
  cardTrunfo: PropTypes.bool.isRequired,
};

export default Card;
