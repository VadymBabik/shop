import React from "react";
import Empty from "../Emty/Emty";
import Card from "../Card/Card";
import style from "./CartList.module.scss";

const CartList = ({productList, favorites, addToCart, selectFavorite}) => {
  const favoritesUser = productList.filter(user => {
    if (favorites.includes(user.vendorСod)) {
      return true;
    }
    return false;
  })


  return (
      <div className={`${style.wrapper} container`}>
        {favoritesUser.length === 0 ? <Empty text={'your basket is empty'}/> :
            <ul className="collection with-header">
              {/*<li className="collection-header"><h4>Your basket</h4></li>*/}
              <li className="collection-item">
                <div>
                  <div className={`${style.cartToCard}`}>
                  <img className={`${style.img}`} src={'https://i.citrus.ua/imgcache/size_800/uploads/shop/f/0/f08b26b4064f92efff805758096263d6.jpg'} alt={'alt'} />
                    <div className={'info'}>info</div>
                    <div className={'calc'}>calc</div>
                    <div className={'total'}>total</div>
                    <a href="#!" className="secondary-content"><i className="material-icons">remove_shopping_cart</i></a>
                  </div>

                </div>
              </li>
            </ul>
        }

      </div>
  );
};
export default CartList;
