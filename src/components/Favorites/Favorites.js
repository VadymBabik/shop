import React from "react";
import PropTypes from "prop-types";
import style from "../Card/Card.module.scss";

export default function Favorites({ code, favoritesArr, onClickSetFavorites }) {
  const isFavorites = favoritesArr.includes(code);
  return (
    <span className={style.favorite}>
      {isFavorites ? (
        <i
          className={`${style.favorite__icon} material-icons`}
          onClick={() => {
            onClickSetFavorites(favoritesArr.filter((n) => n !== code));
          }}
        >
          favorite
        </i>
      ) : (
        <i
          className={`${style.favorite__icon_sel} material-icons`}
          onClick={() => {
            onClickSetFavorites([...favoritesArr, code]);
          }}
        >
          favorite_border
        </i>
      )}
    </span>
  );
}
Favorites.propTypes = {
  code: PropTypes.string,
  favoritesArr: PropTypes.array,
  onClickSetFavorites: PropTypes.func.isRequired,
};

Favorites.defaultProps = {
  favoritesArr: [],
};
