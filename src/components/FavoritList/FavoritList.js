import React from "react";
import {NavLink} from "react-router-dom";
import Card from "../Card/Card";
import style from "./FavoritList.module.scss";

const FavoritList = ({productList, favorites, addToCart, selectFavorite}) => {

    const favoritesUser = productList.filter(user => {
        if (favorites.includes(user.vendorСod)) {
            return true;
        }
        return false;
    })

    return (
        <div className={`${style.wrapper} container`}>
            {favoritesUser.length === 0 ? <FavoritesEmpty/> : favoritesUser.map((product) => {
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
};

const FavoritesEmpty = () => {
    return (<div>
            <div className={`${style.favoritesEmpty} center`}>favorites list is empty</div>
            <NavLink to='/' className={style.toHome}>
                <i className="material-icons ">keyboard_backspace</i>
                Back to home page
                <i className="material-icons">done</i>
            </NavLink>
        </div>
    )
}

export default FavoritList;
