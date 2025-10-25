import React from 'react'
import PropTypes from 'prop-types'
import { Outlet } from 'react-router-dom'
import Menu from '../components/Menu'
import Footer from '../components/Footer'

const PublicRoute = ({isAuthenticated=true}) => {
    if (isAuthenticated) {
        return (
            <h2>estas autenticado</h2>
        )
    }else{
        return (
            <>
                <Menu/>
                <Outlet/>

                <Footer />
            </>
          )
    }
  
}

PublicRoute.propTypes = {
    isAuthenticated: PropTypes.bool
}

export default PublicRoute