import Card from 'react-bootstrap/Card'
const CardTour = () => {
    return (
        <Card className="col-md-3 border mt-5 p-0" style={{ width: '16rem' }}>
            <img
                src="Images/check-cart-tours.png"
                alt=""
                className="position-absolute end-0 m-2 bg-white"
                style={{
                    width: '22px',
                    border: '1px solid #fff',
                    borderRadius: '15px',
                }}
            />
            <Card.Img variant="top" src="Images/image-dolphin.png" />
            <Card.Body className="px-2">
                <a href="/store-tours">
                    <Card.Title className="w-75" style={{ color: '#00AA96' }}>
                        Dolphin Signature Swim
                    </Card.Title>
                </a>
            </Card.Body>
        </Card>
    )
}

export default CardTour
