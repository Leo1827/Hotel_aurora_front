import { Field, Form, Formik } from 'formik'
import { useEffect } from 'react'

const RegistCollaborator = () => {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (
        <div id="registCollaborator" className="container mt-5">
            <div className="row">
                <div className="col-md-12">
                    <h1 className="text-center">CONVIERTETE EN COLABORADOR</h1>
                </div>
                <div className="col-md-12">
                    <p className="text-center">
                        ¡Conviértete en colaborador de Ximena y comienza a ganar
                        dinero hoy mismo! Ofrecemos emocionantes paquetes de
                        viajes y tours que encantarán a tus clientes y te
                        permitirán aumentar tus ingresos. Como colaborador de
                        Ximena, tendrás acceso a una amplia variedad de paquetes
                        turísticos y a un equipo de soporte amigable y eficiente
                        que te ayudará en todo lo que necesites. No pierdas más
                        tiempo, ¡únete a nosotros y comienza a ganar dinero hoy
                        mismo!
                    </p>
                </div>
            </div>
            <div className="row">
                <div className="col-md-12">
                    <div className="card">
                        <div className="card-header">
                            <h4 className="card-title">Registrate ahora</h4>
                        </div>
                        <div className="card-body">
                            <Formik
                                initialValues={{
                                    name: '',
                                    date: '',
                                }}
                            >
                                {() => (
                                    <>
                                        <h3 className="border-bottom pb-2 mb-3">
                                            Datos personales
                                        </h3>
                                        <Form>
                                            <div className="row">
                                                <div className="col-md-4">
                                                    <div className="form-group">
                                                        <label htmlFor="name">
                                                            Nombre:{' '}
                                                            <span className="text-danger">
                                                                *
                                                            </span>{' '}
                                                        </label>
                                                        <Field
                                                            className="form-control"
                                                            name={'name'}
                                                        />
                                                    </div>
                                                </div>
                                                <div className="col-md-4">
                                                    <div className="form-group">
                                                        <label htmlFor="lastName">
                                                            Apellido:
                                                        </label>
                                                        <Field
                                                            className="form-control"
                                                            name={'lastName'}
                                                        />
                                                    </div>
                                                </div>
                                                <div className="col-md-4">
                                                    <div className="form-group">
                                                        <label htmlFor="phone">
                                                            Telefono:
                                                        </label>
                                                        <Field
                                                            className="form-control"
                                                            name={'phone'}
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col-md-4">
                                                    <div className="form-group">
                                                        <label htmlFor="city">
                                                            Ciudad:{' '}
                                                            <span className="text-danger">
                                                                *
                                                            </span>{' '}
                                                        </label>
                                                        <Field
                                                            className="form-control"
                                                            name={'city'}
                                                        />
                                                    </div>
                                                </div>
                                                <div className="col-md-4">
                                                    <div className="form-group">
                                                        <label htmlFor="state">
                                                            Estado:
                                                        </label>
                                                        <Field
                                                            className="form-control"
                                                            name={'state'}
                                                        />
                                                    </div>
                                                </div>
                                                <div className="col-md-4">
                                                    <div className="form-group">
                                                        <label htmlFor="municipality">
                                                            Municipio:
                                                        </label>
                                                        <Field
                                                            className="form-control"
                                                            name={
                                                                'municipality'
                                                            }
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col-md-4">
                                                    <div className="form-group">
                                                        <label htmlFor="address">
                                                            Domicilio:{' '}
                                                            <span className="text-danger">
                                                                *
                                                            </span>{' '}
                                                        </label>
                                                        <Field
                                                            className="form-control"
                                                            name={'address'}
                                                        />
                                                    </div>
                                                </div>
                                                <div className="col-md-4">
                                                    <div className="form-group">
                                                        <label htmlFor="outsideNumber">
                                                            Numero exterior:
                                                        </label>
                                                        <Field
                                                            className="form-control"
                                                            name={
                                                                'outsideNumber'
                                                            }
                                                        />
                                                    </div>
                                                </div>
                                                <div className="col-md-4">
                                                    <div className="form-group">
                                                        <label htmlFor="insideNumber">
                                                            Numero Interior:
                                                        </label>
                                                        <Field
                                                            className="form-control"
                                                            name={
                                                                'insideNumber'
                                                            }
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="row mt-3 mb-5">
                                                <div className="col-md-4">
                                                    <div className="form-group border">
                                                        <label
                                                            htmlFor="insideNumber"
                                                            className="pb-2"
                                                        >
                                                            Foto del ine:
                                                        </label>
                                                        <Field
                                                            type="file"
                                                            className="form-control"
                                                            name={
                                                                'insideNumber'
                                                            }
                                                        />
                                                    </div>
                                                </div>
                                                <div className="col-md-4">
                                                    <div className="form-group border">
                                                        <label
                                                            htmlFor="insideNumber"
                                                            className="pb-2"
                                                        >
                                                            Comprobante de
                                                            domicilio:
                                                        </label>
                                                        <Field
                                                            type="file"
                                                            className="form-control"
                                                            name={
                                                                'insideNumber'
                                                            }
                                                        />
                                                    </div>
                                                </div>
                                                <div className="col-md-4">
                                                    <div className="form-group border">
                                                        <label
                                                            htmlFor="insideNumber"
                                                            className="pb-2"
                                                        >
                                                            contrato de
                                                            arrendamiento o
                                                            predial:
                                                        </label>
                                                        <Field
                                                            type="file"
                                                            className="form-control"
                                                            name={
                                                                'insideNumber'
                                                            }
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                            <h3 className="border-bottom pb-2 mb-3">
                                                Información comercial
                                            </h3>
                                            <div className="row">
                                                <div className="col-md-4">
                                                    <div className="form-group">
                                                        <label htmlFor="city">
                                                            Ciudad:{' '}
                                                            <span className="text-danger">
                                                                *
                                                            </span>{' '}
                                                        </label>
                                                        <Field
                                                            className="form-control"
                                                            name={'city'}
                                                        />
                                                    </div>
                                                </div>
                                                <div className="col-md-4">
                                                    <div className="form-group">
                                                        <label htmlFor="state">
                                                            Estado:
                                                        </label>
                                                        <Field
                                                            className="form-control"
                                                            name={'state'}
                                                        />
                                                    </div>
                                                </div>
                                                <div className="col-md-4">
                                                    <div className="form-group">
                                                        <label htmlFor="municipality">
                                                            Municipio:
                                                        </label>
                                                        <Field
                                                            className="form-control"
                                                            name={
                                                                'municipality'
                                                            }
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col-md-4">
                                                    <div className="form-group">
                                                        <label htmlFor="address">
                                                            Domicilio:{' '}
                                                            <span className="text-danger">
                                                                *
                                                            </span>{' '}
                                                        </label>
                                                        <Field
                                                            className="form-control"
                                                            name={'address'}
                                                        />
                                                    </div>
                                                </div>
                                                <div className="col-md-4">
                                                    <div className="form-group">
                                                        <label htmlFor="outsideNumber">
                                                            Numero exterior:
                                                        </label>
                                                        <Field
                                                            className="form-control"
                                                            name={
                                                                'outsideNumber'
                                                            }
                                                        />
                                                    </div>
                                                </div>
                                                <div className="col-md-4">
                                                    <div className="form-group">
                                                        <label htmlFor="insideNumber">
                                                            Numero Interior:
                                                        </label>
                                                        <Field
                                                            className="form-control"
                                                            name={
                                                                'insideNumber'
                                                            }
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="row mt-3 mb-5">
                                                <div className="col-md-4">
                                                    <div className="form-group border">
                                                        <label
                                                            htmlFor="insideNumber"
                                                            className="pb-2"
                                                        >
                                                            RFC (PDF):
                                                        </label>
                                                        <Field
                                                            type="file"
                                                            className="form-control"
                                                            name={
                                                                'insideNumber'
                                                            }
                                                        />
                                                    </div>
                                                </div>
                                                <div className="col-md-4">
                                                    <div className="form-group border">
                                                        <label
                                                            htmlFor="insideNumber"
                                                            className="pb-2"
                                                        >
                                                            Comprobante de
                                                            domicilio:
                                                        </label>
                                                        <Field
                                                            type="file"
                                                            className="form-control"
                                                            name={
                                                                'insideNumber'
                                                            }
                                                        />
                                                    </div>
                                                </div>
                                                <div className="col-md-4">
                                                    <div className="form-group border">
                                                        <label
                                                            htmlFor="insideNumber"
                                                            className="pb-2"
                                                        >
                                                            contrato de
                                                            arrendamiento o
                                                            predial:
                                                        </label>
                                                        <Field
                                                            type="file"
                                                            className="form-control"
                                                            name={
                                                                'insideNumber'
                                                            }
                                                        />
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="row">
                                                <div className="col-md-12">
                                                    <div className="form-group">
                                                        <label htmlFor="comment">
                                                            Comentario
                                                        </label>
                                                        <Field
                                                            as="textarea"
                                                            name="comment"
                                                            className={
                                                                'form-control'
                                                            }
                                                        />
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="row justify-content-center mt-3">
                                                <button
                                                    type="submit"
                                                    className="btn btn-primary"
                                                    style={{ width: '30%' }}
                                                >
                                                    Enviar mi solicitud
                                                </button>
                                            </div>
                                        </Form>
                                    </>
                                )}
                            </Formik>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default RegistCollaborator
