import React from 'react';
import { useTranslation } from 'react-i18next';


const Image = () => {
  const { t } = useTranslation();

  return (
      <div className="content-image">
        <img className="imagen" id="contentImage" alt="image" src={t('image')}></img> 
      </div>
  );
};

export default Image;
