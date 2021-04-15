import React, { useState } from "react";
import style from "./CardList.module.scss";
import Card from "../Card/Card";
import PropTypes from "prop-types";

export default function CardList({ productList }) {
  const [cards, setCards] = useState(
    JSON.parse(localStorage.getItem("cards")) || []
  );
  const [favorites, setfavorites] = useState(
    JSON.parse(localStorage.getItem("favorites")) || []
  );

  const addToCart = (code) => {
    let card = [...cards, code];
    setCards(card);
    localStorage.setItem("cards", JSON.stringify(card));
  };

  const selectFavorite = (isFavorites) => {
    setfavorites(isFavorites);
    localStorage.setItem("favorites", JSON.stringify(isFavorites));
  };

  return (
    <div className={`${style.wrapper} container`}>
      {productList.map((product) => {
        return (
          <Card
            key={product.id}
            urlImg={product.imgUrl}
            alt={product.productName}
            productName={product.productName}
            code={product.vendorСod}
            color={product.color}
            price={product.price}
            infoTitle={product.productName}
            addToCart={addToCart}
            favoritesArr={favorites}
            onClickSetFavorites={selectFavorite}
          />
        );
      })}
    </div>
  );
}

Card.propTypes = {
  productList: PropTypes.array,
};
