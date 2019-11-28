import React from 'react';
import styles from './FormField.module.scss';

const FormField = ({ field, handleChange }) => {
  //   console.log(props);
  return (
    <div className={styles.formField}>
      <label className={styles.formField__label} htmlFor={field.name}>
        {field.label}
      </label>
      <input
        className={styles.formField__input}
        id={field.name}
        type={field.type}
        name={field.name}
        value={field.value}
        onChange={handleChange}
      />
    </div>
  );
};

export default FormField;
