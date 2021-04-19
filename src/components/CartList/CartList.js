import React,{useState} from "react";
import Empty from "../Emty/Emty";
import style from "./CartList.module.scss";

import {Button} from "../Button/Button";
import Modal from "../Modal/Modal";

const CartList = ({productList, favorites, addCart, removeOneCart,removeCart}) => {
  const [modal, setModal] = useState(false);
  const modalActiv = () => setModal(!modal);
  const cartList = productList.filter(e => {
    if (favorites.includes(e.vendorСod)) {
      return true;
    }
    return false;
  })

const total=()=>{
  const res = favorites.map((per)=>productList.find((x)=>per===x.vendorСod))
  let total = res.reduce(function(sum, elem) {
    return sum + elem.price;
  }, 0);
  return total
}

  return (
      <div className={`${style.wrapperCart} container`}>
        {cartList.length === 0 ?
            <div className={`${style.wrapper} container`}>
            <Empty text={'your basket is empty'}/>
            </div>
            :
            <ul className="collection with-header">
              <li className="collection-header"><h4>Your purchases</h4></li>
              {cartList.map(product => {return(
                  <li
                      key={product.id}
                      className="collection-item">
                    <div>
                      <div className={`${style.cartToCard}`}>
                        <img className={`${style.img}`} src={product.imgUrl} alt={product.productName} />
                        <div className={'info'}>
                          <h5 className={`${style.productName} grey-text text-darken-4`}>{product.productName}</h5>
                          <div className={`${style.code} grey-text text-darken-4`}> {`Code: ${product.vendorСod}`}</div>
                          <div className={`${style.color} grey-text text-darken-4`}> {`Color: ${product.color}`}</div>
                          <div className={`${style.price} grey-text text-darken-4`}> {`\u20B4 ${new Intl.NumberFormat("ua-Ua").format(product.price)}`}</div>
                        </div>
                        <div className={`${style.calc}`}>
                          <a
                              onClick={()=>addCart(product.vendorСod)}
                              className="btn-flat"><i className={`${style.increment} Tiny material-icons`}>add</i></a>

                          <div className={`${style.value}`}>{favorites.filter(item => item === product.vendorСod).length}</div>
                          <a
                              onClick={()=>removeOneCart(product.vendorСod)}
                              className={`${favorites.filter(item => item === product.vendorСod).length===1 ? "disabled" : null} btn-flat`}><i className={`${style.decrement} Tiny material-icons`}>remove</i></a>

                        </div>
                        <div className={`${style.total}`}>{`\u20B4 ${new Intl.NumberFormat("ua-Ua").format(product.price*favorites.filter(item => item === product.vendorСod).length)}`}</div>
                        <i
                            onClick={modalActiv}
                            className={`${style.remove} material-icons`}>remove_shopping_cart</i>
                      </div>
                    </div>
                    {modal && (
                        <Modal
                            isOpen={modalActiv}
                            header={"Removing an item from the cart?"}
                            closeButton={true}
                            textmodal={"Are you sure you want to remove an item from your cart?"}
                            actions={
                              <div className={style.modalFooter}>
                                <Button
                                    size={"l"}
                                    click={() => {
                                      modalActiv();
                                      removeCart(product.vendorСod);
                                    }}
                                    color={"orange accent-3"}
                                    text={"OK"}
                                />
                                <Button
                                    size={"l"}
                                    click={modalActiv}
                                    color={"orange accent-3"}
                                    text={"Cancel"}
                                />
                              </div>
                            }
                        />
                    )}
                  </li>
              )



              })}
              <li className={`${style.footer} collection-header`}>
                <Button text={'checkout'} size={style.checkout} color={'orange accent-3'}/>
                  <Empty />
                <h4 className={`${style.totalValue}`}>TOTAL:   {`\u20B4 ${new Intl.NumberFormat("ua-Ua").format(total())}`}</h4>
              </li>
            </ul>
        }

      </div>

  );
};
export default CartList;
