import React from 'react'
import IconList from './IconList'
import { Link, useNavigate } from 'react-router-dom';

const Menu = () => {
  const navigate = useNavigate();

  const handleSelectChange = (event) => {
    // menu select
    const value = event.target.value;
    if (value === "Destino 1") {
      navigate('/landing');
    } else if (value === "Destino 2"){
      navigate('/cart');
    }
  };

  return (
    <nav className="navbar menu navbar-expand-lg bg-body-tertiary w-100 border-bottom shadow-sm">
      <div className="container-fluid">

        <div className='col-md-3 d-flex justify-content-center'>
          <Link className='navbar-brand' to={"/"}>
            Aurora APP
          </Link>

        </div>

        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">

          <div className="col-md-7 mx-5 pt-3 pb-3 select-main-phone">
            <select className="form-select select-main" aria-label="Default select example" onChange={handleSelectChange}>
              <option value="1">Encuentra tu destino ideal</option>
              <option value="Destino 1" >Destino 1 </option>
              <option value="Destino 2" >Destino 2 </option>
              <option value="3">Destino 3</option>
            </select>
          </div>

          <div className="col-md-4 d-flex justify-content-center btns-session">

            <div className="m-3">
              <a href="#" className='mx-4 link-main'>
                <IconList icon={"cart-shopping"} color={"#00AA96"} size={"sm"} />
                <span className='mx-2'>Cesta</span>
              </a>
              <a href="#" className='link-main'>
                <IconList icon={"user"} color={"#00AA96"} size={"sm"} />
                <span className='mx-2'>Tu cuenta</span>
              </a>
            </div>

          </div>

        </div>

      </div>
    </nav>
  )
}

export default Menu