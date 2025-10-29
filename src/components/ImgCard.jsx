import React, { useState } from 'react'
import PropTypes from 'prop-types'

const ImgCard = ({ imgSrc, title }) => {
  const [showTitle, setShowTitle] = useState(false)

  const toggleTitle = () => setShowTitle(!showTitle)

  return (
    <div
      onClick={toggleTitle}
      className="relative w-full sm:w-[90%] md:w-[30%] lg:w-[22%] cursor-pointer md:rounded-[15px] overflow-hidden group transition-transform duration-300 hover:scale-[1.03] mx-auto"
    >
      {/* Imagen con efecto blur al hover */}
      <img
        src={imgSrc}
        alt={title}
        className="w-full h-56 md:h-60 object-cover transition duration-300 ease-in-out group-hover:blur-[2px]"
      />

      {/* Texto superpuesto al hacer clic */}
      {showTitle && (
        <div className="absolute inset-0 flex items-center justify-center bg-black/40 transition duration-300">
          <h3 className="text-white text-lg md:text-xl font-semibold text-center px-3">
            {title}
          </h3>
        </div>
      )}
    </div>
  )
}

ImgCard.propTypes = {
  imgSrc: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
}

export default ImgCard
