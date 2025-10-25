import React from "react";

const CardProductVerifyDescription = () => {
  //
  const [isDescriptionVisible, setDescriptionVisible] = React.useState(false);

  const handleClick = () => {
    setDescriptionVisible(!isDescriptionVisible);
  };

  const [isPackageVisible, setPackageVisible] = React.useState(false);

  const handleClick2 = () => {
    setPackageVisible(!isPackageVisible);
  };

  const [isProductVisible, setProductVisible] = React.useState(false);

  const handleClick3 = () => {
    setProductVisible(!isProductVisible);
  };

  return (
    <>
      <div>
        
        <div className="item mt-1 mb-1 ">

            <table className="table" onClick={handleClick}>

              <thead className="" style={{color: "#006464"}} >
                <tr className="">
                  <th scope="col" className="w-25">
                    <svg width="25" height="25" viewBox="10 0 30 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M17.9489 32.5046C25.7729 32.5046 32.1156 25.9754 32.1156 17.9212C32.1156 9.86707 25.7729 3.33789 17.9489 3.33789C10.1249 3.33789 3.78223 9.86707 3.78223 17.9212C3.78223 25.9754 10.1249 32.5046 17.9489 32.5046Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M12.2822 17.9219L17.9489 23.7552L23.6156 17.9219" stroke="#006464" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M17.9492 12.0879V23.7546" stroke="#006464" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    <span>Paquete Hotel</span>
                  </th>
                  <th scope="col">Precio </th>
                  <th scope="col">Cantidad</th>
                  <th scope="col">Total</th>
                </tr>
              </thead>
              {isDescriptionVisible && (
              <tbody>
                <tr>
                  <td className="w-50">Paquete turistico a vallarta, 3 días y 2 noches.</td>
                  <td >12000</td>
                  <td>2</td>
                  <th>24000</th>
                </tr>
              </tbody>
              )}
            </table>
      
        </div>

        <div className="item mt-1 mb-1">

            <table className="table" onClick={handleClick2}>

              <thead className="" style={{color: "#006464", borderRadius: "15px"}}>
                <tr>
                  <th scope="col" className="w-25">
                    <svg width="25" height="25" viewBox="10 0 30 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M17.9489 32.5046C25.7729 32.5046 32.1156 25.9754 32.1156 17.9212C32.1156 9.86707 25.7729 3.33789 17.9489 3.33789C10.1249 3.33789 3.78223 9.86707 3.78223 17.9212C3.78223 25.9754 10.1249 32.5046 17.9489 32.5046Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M12.2822 17.9219L17.9489 23.7552L23.6156 17.9219" stroke="#006464" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M17.9492 12.0879V23.7546" stroke="#006464" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    Paquete Tour
                  </th>
                  <th scope="col">Precio</th>
                  <th scope="col">Cantidad</th>
                  <th scope="col">Total</th>
                </tr>
              </thead>
              {isPackageVisible && (
              <tbody>
                <tr>
                  <td className="w-50">Frente a la playa en la Bahía de Banderas, nadar con delfines.</td>
                  <td>5000</td>
                  <td>2</td>
                  <th>10000</th>
                </tr>
              </tbody>
              )}
            </table>
      
        </div>

        <div className="item mt-1 mb-1" >

            <table className="table"  onClick={handleClick3}>

              <thead className="" style={{color: "#006464", borderRadius: "15px"}}>
                <tr>
                  <th scope="col" className="w-25">
                    <svg width="25" height="25" viewBox="10 0 30 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M17.9489 32.5046C25.7729 32.5046 32.1156 25.9754 32.1156 17.9212C32.1156 9.86707 25.7729 3.33789 17.9489 3.33789C10.1249 3.33789 3.78223 9.86707 3.78223 17.9212C3.78223 25.9754 10.1249 32.5046 17.9489 32.5046Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M12.2822 17.9219L17.9489 23.7552L23.6156 17.9219" stroke="#006464" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M17.9492 12.0879V23.7546" stroke="#006464" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    Productos
                  </th>
                  <th scope="col ">Precio</th>
                  <th scope="col">Cantidad</th>
                  <th scope="col">Total</th>
                </tr>
              </thead>
              {isProductVisible && (
              <tbody>
                <tr>
                  <td className="w-50">Toalla de mano</td>
                  <td>70</td>
                  <td>2</td>
                  <th>140</th>
                </tr>
                <tr>
                  <td className="w-50">Protector solar</td>
                  <td>500</td>
                  <td>2</td>
                  <th>1000</th>
                </tr>
              </tbody>
              
              )}
            </table>
      
        </div>

      </div>
    </>
  );
};

export default CardProductVerifyDescription;
