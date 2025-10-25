import React from 'react'
import PropTypes from 'prop-types'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
    faCartShopping,
    faCheckCircle,
    faUser,
    faXmarkCircle

} from "@fortawesome/free-solid-svg-icons"

import { faHeart } from "@fortawesome/free-regular-svg-icons"

//import { faHeart} from "@fortawesome/free-regular-svg-icons"
//import { SizeProp } from "@fortawesome/fontawesome-svg-core"
//import {SizeProp} from '@fortawesome/react-fontawesome';


function IconList({ icon, color, size }) {
    let iconTag;

    switch (icon) {
        case 'cart-shopping':

            iconTag = <FontAwesomeIcon icon={faCartShopping} color={color} size={size} />
            break;
        case 'xmark-circle':

            iconTag = <FontAwesomeIcon icon={faXmarkCircle} color={color} size={size} />
            break;
        case 'check-circle':

            iconTag = <FontAwesomeIcon icon={faCheckCircle} color={color} size={size} />
            break;
        case 'user':

            iconTag = <FontAwesomeIcon icon={faUser} color={color} size={size} />
            break;
        
        case 'favorite':

            iconTag = <FontAwesomeIcon icon={faHeart} color={color} size={size} />
            break;
       
        default:
            iconTag = <div></div>
            break;
    }
    return (
        iconTag
    )
}

IconList.propTypes = {
    icon: PropTypes.string.isRequired,
    color: PropTypes.string.isRequired,
    size: PropTypes.string.isRequired,
  };


export default IconList