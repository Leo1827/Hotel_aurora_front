import { Field, Form, Formik } from 'formik'
import { useEffect } from 'react'

const RegistCollaborator = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div id="registCollaborator" className="max-w-7xl mt-14 mx-auto px-4 py-10">
      
      {/* Titulo */}
      <h1 className="text-center text-3xl font-bold text-gray-800">
        CONVIÉRTETE EN COLABORADOR
      </h1>

      {/* Descripción */}
      <p className="text-center text-gray-600 mt-4 max-w-4xl mx-auto leading-relaxed">
        ¡Conviértete en colaborador de Ximena y comienza a ganar dinero hoy mismo!
        Ofrecemos emocionantes paquetes de viajes y tours que encantarán a tus clientes.
        Únete a nosotros y comienza a ganar dinero hoy mismo con apoyo y variedad de paquetes turísticos.
      </p>

      {/* Card */}
      <div className="bg-white rounded-xl mt-10 p-8 ">
        <h3 className="text-xl font-semibold mb-4 p-8 border-b pb-2">
          Regístrate ahora
        </h3>

        <Formik
          initialValues={{
            name: '',
            date: '',
          }}
        >
          {() => (
            <Form className="space-y-10">

              {/* DATOS PERSONALES */}
              <section>
                <h3 className="text-lg font-semibold text-gray-800 border-b pb-2 p-4 mb-6">
                  Datos personales
                </h3>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

                  {/* Nombre */}
                  <div>
                    <label className="block text-sm font-medium mb-1">
                      Nombre <span className="text-red-500">*</span>
                    </label>
                    <Field
                      name="name"
                      className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring focus:ring-blue-300"
                    />
                  </div>

                  {/* Apellido */}
                  <div>
                    <label className="block text-sm font-medium mb-1">
                      Apellido
                    </label>
                    <Field
                      name="lastName"
                      className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring focus:ring-blue-300"
                    />
                  </div>

                  {/* Teléfono */}
                  <div>
                    <label className="block text-sm font-medium mb-1">
                      Teléfono
                    </label>
                    <Field
                      name="phone"
                      className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring focus:ring-blue-300"
                    />
                  </div>

                  {/* Ciudad */}
                  <div>
                    <label className="block text-sm font-medium mb-1">
                      Ciudad <span className="text-red-500">*</span>
                    </label>
                    <Field
                      name="city"
                      className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring focus:ring-blue-300"
                    />
                  </div>

                  {/* Estado */}
                  <div>
                    <label className="block text-sm font-medium mb-1">
                      Estado
                    </label>
                    <Field
                      name="state"
                      className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring focus:ring-blue-300"
                    />
                  </div>

                  {/* Municipio */}
                  <div>
                    <label className="block text-sm font-medium mb-1">
                      Municipio
                    </label>
                    <Field
                      name="municipality"
                      className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring focus:ring-blue-300"
                    />
                  </div>

                  {/* Domicilio */}
                  <div>
                    <label className="block text-sm font-medium mb-1">
                      Domicilio <span className="text-red-500">*</span>
                    </label>
                    <Field
                      name="address"
                      className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring focus:ring-blue-300"
                    />
                  </div>

                  {/* Número exterior */}
                  <div>
                    <label className="block text-sm font-medium mb-1">
                      Número exterior
                    </label>
                    <Field
                      name="outsideNumber"
                      className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring focus:ring-blue-300"
                    />
                  </div>

                  {/* Número interior */}
                  <div>
                    <label className="block text-sm font-medium mb-1">
                      Número interior
                    </label>
                    <Field
                      name="insideNumber"
                      className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring focus:ring-blue-300"
                    />
                  </div>
                </div>

                {/* Archivos */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">

                  <div className="border p-4 rounded-lg">
                    <label className="block text-sm font-medium mb-2">
                      Foto del INE
                    </label>
                    <Field
                      type="file"
                      name="ine"
                      className="w-full border rounded-lg p-2"
                    />
                  </div>

                  <div className="border p-4 rounded-lg">
                    <label className="block text-sm font-medium mb-2">
                      Comprobante de domicilio
                    </label>
                    <Field
                      type="file"
                      name="proofAddress"
                      className="w-full border rounded-lg p-2"
                    />
                  </div>

                  <div className="border p-4 rounded-lg">
                    <label className="block text-sm font-medium mb-2">
                      Contrato de arrendamiento o predial
                    </label>
                    <Field
                      type="file"
                      name="contract"
                      className="w-full border rounded-lg p-2"
                    />
                  </div>
                </div>
              </section>

              {/* INFORMACIÓN COMERCIAL */}
              <section>
                <h3 className="text-lg font-semibold text-gray-800 border-b pb-2 mb-6">
                  Información comercial
                </h3>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

                  <div>
                    <label className="block text-sm font-medium mb-1">
                      Ciudad <span className="text-red-500">*</span>
                    </label>
                    <Field
                      name="cityCommercial"
                      className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring focus:ring-blue-300"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-1">
                      Estado
                    </label>
                    <Field
                      name="stateCommercial"
                      className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring focus:ring-blue-300"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-1">
                      Municipio
                    </label>
                    <Field
                      name="municipalityCommercial"
                      className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring focus:ring-blue-300"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-1">
                      Domicilio
                    </label>
                    <Field
                      name="addressCommercial"
                      className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring focus:ring-blue-300"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-1">
                      Número exterior
                    </label>
                    <Field
                      name="outsideNumberCommercial"
                      className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring focus:ring-blue-300"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-1">
                      Número interior
                    </label>
                    <Field
                      name="insideNumberCommercial"
                      className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring focus:ring-blue-300"
                    />
                  </div>
                </div>

                {/* Archivos comerciales */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">

                  <div className="border p-4 rounded-lg">
                    <label className="block text-sm font-medium mb-2">
                      RFC (PDF)
                    </label>
                    <Field
                      type="file"
                      name="rfc"
                      className="w-full border rounded-lg p-2"
                    />
                  </div>

                  <div className="border p-4 rounded-lg">
                    <label className="block text-sm font-medium mb-2">
                      Comprobante de domicilio
                    </label>
                    <Field
                      type="file"
                      name="proofAddressCommercial"
                      className="w-full border rounded-lg p-2"
                    />
                  </div>

                  <div className="border p-4 rounded-lg">
                    <label className="block text-sm font-medium mb-2">
                      Contrato de arrendamiento o predial
                    </label>
                    <Field
                      type="file"
                      name="contractCommercial"
                      className="w-full border rounded-lg p-2"
                    />
                  </div>
                </div>
              </section>

              {/* Comentarios */}
              <div>
                <label className="block text-sm font-medium mb-1">
                  Comentario
                </label>
                <Field
                  as="textarea"
                  name="comment"
                  className="w-full h-28 border rounded-lg px-3 py-2 focus:outline-none focus:ring focus:ring-blue-300"
                />
              </div>

              {/* Botón */}
              <div className="flex justify-center">
                <button
                  type="submit"
                  className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition shadow-md"
                >
                  Enviar mi solicitud
                </button>
              </div>

            </Form>
          )}
        </Formik>
      </div>
    </div>
  )
}

export default RegistCollaborator
