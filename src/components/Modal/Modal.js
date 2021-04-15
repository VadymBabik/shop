import React from "react";
import styles from "./Modal.module.scss";
import PropTypes from "prop-types";
import { Button } from "../Button/Button";

export default function Modal({
  isOpen,
  header,
  closeButton,
  textmodal,
  actions,
}) {
  return (
    <div onClick={isOpen} className={styles.modal}>
      <div
        onClick={(event) => event.stopPropagation()}
        className={styles.modal__content}
      >
        <div className={styles.modal__header}>
          <h5 className={styles.modal__title}>{header}</h5>
          {closeButton && <span onClick={isOpen}>&#10761;</span>}
        </div>
        <div className={styles.modal__body}>
          <p className={styles.body__text}>{textmodal}</p>
        </div>
        {actions}
      </div>
    </div>
  );
}

Button.propTypes = {
  isOpen: PropTypes.func,
  header: PropTypes.string,
  textmodal: PropTypes.string,
  closeButton: PropTypes.bool,
  actions: PropTypes.object,
};
Button.defaultProps = {
  closeButton: true,
};
