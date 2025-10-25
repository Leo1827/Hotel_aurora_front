import PropTypes from 'prop-types'

const Range = ({ range}) => {

    return (
        <div className='accordion' id="accordionExample">
            <div className='accordion-item'>
                <h2 className='accordion-header'>
                    <button className='accordion-button' type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                        FILTROS 
                    </button>
                </h2>
                <div id="collapseOne" className='accordion-collapse collapse show' data-bs-parent="#accordionExample">
                    <div className='accordion-body'>
                        <label htmlFor="">Filtrar por nombre</label>
                        <input type="text" />
                        <label htmlFor="">Filtrar por precio</label>
                        <h4 htmlFor="">{range}</h4>
                        <input type="range" className='form-range' />
                    </div>
                </div>
            </div>
            <button type="button" className='btn btn-dark mt-4'>Filtrar</button>
        </div>
    )
}

Range.propTypes = {
    range: PropTypes.string.isRequired,
};

export default Range