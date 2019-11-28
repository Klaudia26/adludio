import React from 'react';
import styles from './Card.module.scss';

const CardHeader = () => {
  return (
    <>
      <div className={styles.card__header}>
        <h1 className={styles.card__header__heading}>
          Redefining mobile advertising
        </h1>
        <p className={styles.card__header__description}>
          Please use this form to register.
        </p>
        <p className={styles.card__header__description}>
          If you are a member, please{' '}
          <a className={styles.card__header__description__link} href="#">
            login
          </a>
          .
        </p>
      </div>
    </>
  );
};

export default CardHeader;
