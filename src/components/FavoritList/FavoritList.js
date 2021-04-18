import React from "react";
// import React, {useEffect} from "react";
import Card from "../Card/Card";
import style from "./FavoritList.module.scss";
import Empty from "../Emty/Emty";

const FavoritList = ({productList, favorites, addToCart, selectFavorite}) => {

    // let favoriteList =[]
    //     useEffect(() => {
    //     favoriteList = productList.filter(e => {
    //         if (favorites.includes(e.vendorСod)) {
    //             return true;
    //         }else{
    //             return false;
    //         }
    //     })
    // },[productList,favorites])

   const favoriteList = productList.filter(e => {
        if (favorites.includes(e.vendorСod)) {
            return true;
        }else{
            return false;
        }
    })

    return (
        <div className={`${style.wrapper} container`}>
            {favoriteList.length === 0 ? <Empty text={'favorites list is empty'}/> : favoriteList.map((product) => {
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
