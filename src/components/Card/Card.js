import React from 'react';
import CardHeader from './CardHeader';
import CardBody from './CardBody';
import styles from './Card.module.scss';

const Card = () => {
  return (
    <div className={styles.card}>
      <CardHeader />
      <CardBody />
    </div>
  );
};

export default Card;
