import React from 'react';
import '../../styles/Banner.scss';

function Banner({ page }) {
  return (
    <div className={`banner-${page}`}>
      <div className="banner__content">
        <h1 className="banner__title">Chez vous, partout et ailleurs</h1>
      </div>
    </div>
  );
}

export default Banner;

