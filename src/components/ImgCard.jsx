import React, { useState } from 'react';
import { Card, CardImg, CardTitle, CardBody } from 'reactstrap';
import PropTypes from 'prop-types';

const ImgCard = ({ imgSrc, title }) => {
  const [showTitle, setShowTitle] = useState(false);

  const toggleTitle = () => {
    setShowTitle(!showTitle);
  };

  return (
    <div className='imgCard w-25 m-4 border-0'>
      <Card className='mi-card border-0' onClick={toggleTitle}>
        <CardBody className='position-absolute mx-4 my-4 text-white text-imgCard'>
          {showTitle && <CardTitle>{title}</CardTitle>}
        </CardBody>
        <CardImg className='hover-img' top src={imgSrc} alt={title} />
      </Card>
    </div>
  );
};

ImgCard.propTypes = {
  imgSrc: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default ImgCard;