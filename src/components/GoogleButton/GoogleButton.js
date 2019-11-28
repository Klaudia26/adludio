import React from 'react';
import GoogleIcon from './GoogleIcon';
import style from './GoogleButton.module.scss';

const GoogleButton = () => (
  <div className={style.googleButton}>
    <div className={style.googleButtonWrap}>
      <div className={style.googleButtonIconWrap}>
        <div className={style.googleButtonIcon}>
          <GoogleIcon />
        </div>
      </div>
      <a href="/auth/google" className={style.googleButtonContent}>
        Sign in with Google
      </a>
    </div>
  </div>
);

export default GoogleButton;
