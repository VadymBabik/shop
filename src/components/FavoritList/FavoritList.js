import React from "react";
import Card from "../Card/Card";
import style from "./FavoritList.module.scss";
import Empty from "../Emty/Emty";

const FavoritList = ({productList, favorites, addToCart, selectFavorite}) => {

    const favoritesUser = productList.filter(user => {
        if (favorites.includes(user.vendorСod)) {
            return true;
        }
        return false;
    })

    return (
        <div className={`${style.wrapper} container`}>
            {favoritesUser.length === 0 ? <Empty text={'favorites list is empty'}/> : favoritesUser.map((product) => {
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



export default FavoritList;
