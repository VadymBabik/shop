import React, { useState } from "react";
import PropTypes from "prop-types";
import style from "./Card.module.scss";
import { Button } from "../Button/Button";
import Modal from "../Modal/Modal";
import Favorites from "../Favorites/Favorites";
// import Foo from "../Stars/Stars";

export default function Card({
  urlImg,
  alt,
  productName,
  code,
  color,
  price,
  infoTitle,
  onClickSetFavorites,
  favoritesArr,
  addToCart,
}) {
  const [modal, setModal] = useState(false);

  const modalActiv = () => setModal(!modal);
  return (
    <>
      <div className={`${style.card} card hoverable`}>
        <div className="card-image waves-effect waves-block waves-light">
          <h6 className={`${style.code} grey-text text-darken-4 right`}>
            {`code: ${code}`}
          </h6>
          <img className={`${style.img} activator`} src={urlImg} alt={alt} />
        </div>
        <div className={`${style.card_content} card-content`}>
          <span
            className={`${style.card_title} card-title activator grey-text text-darken-4`}
          >
            <h6 className={style.cardTitle}>{productName}</h6>
            <i className="material-icons right">more_vert</i>
          </span>

          <h6 className={`${style.color} grey-text text-darken-4`}>
            {`Color: ${color}`}
          </h6>
          <h5 className={`${style.price} grey-text text-darken-4`}>
            {`\u20B4 ${new Intl.NumberFormat("ua-Ua").format(price)}
              `}
          </h5>
          <p className={style.footer}>
            <Button
              click={modalActiv}
              color={"orange accent-3"}
              icon={<i className="material-icons left">shopping_cart</i>}
              text={"Add to cart"}
            />
            <Favorites
              favoritesArr={favoritesArr}
              onClickSetFavorites={onClickSetFavorites}
              code={code}
            />
          </p>
        </div>
        <div className="card-reveal">
          <span className="card-title grey-text text-darken-4">
            {infoTitle}
            <i className="material-icons right">close</i>
          </span>
          <p>
            iPhone 12 works with existing power adapters, EarPods with Lightning
            Connector, and USB‑A to Lightning cables. Because there are billions
            of those out in the world, new ones often go unused. So we’re
            removing them from the box — across the entire iPhone family. This
            reduces carbon emissions and avoids the mining and use of precious
            materials. It also shrinks the package, allowing more boxes per
            shipment and fewer shipments overall.
          </p>
        </div>
      </div>
      {modal && (
        <Modal
          isOpen={modalActiv}
          header={"Add to cart"}
          closeButton={true}
          textmodal={"Are you sure you want to add this item to your cart?"}
          actions={
            <div className={style.modalFooter}>
              <Button
                size={"l"}
                click={() => {
                  modalActiv();
                  addToCart(code);
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
    </>
  );
}

Card.propTypes = {
  addFavorit: PropTypes.func,
  code: PropTypes.number,
  price: PropTypes.number,
  removeFavorit: PropTypes.func,
  addToCart: PropTypes.func,
  urlImg: PropTypes.string,
  alt: PropTypes.string,
  productName: PropTypes.string,
  color: PropTypes.string,
  infoTitle: PropTypes.string,
};
