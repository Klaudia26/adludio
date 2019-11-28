import React from 'react';
import Form from '../Form/Form';
import image from '../../assets/images/asset3.png';
import styles from './Card.module.scss';

const CardBody = () => {
  return (
    <>
      <div className={styles.card__body}>
        <img className={styles.card__body__logo} src={image} alt="img" />
        <h3 className={styles.card__body__title}>Register</h3>
        <Form />
      </div>
    </>
  );
};

export default CardBody;
