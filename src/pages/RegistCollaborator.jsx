import { Field, Form, Formik } from 'formik'
import { useEffect } from 'react'

const RegistCollaborator = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div id="registCollaborator" className="max-w-6xl mx-auto px-4 py-12 mt-10">

      {/* Título principal */}
      <h1 className="text-center text-4xl font-bold text-gray-900 leading-tight">
        CONVIÉRTETE EN COLABORADOR
      </h1>

      {/* Descripción */}
      <p className="text-center text-gray-600 mt-4 max-w-3xl mx-auto text-lg leading-relaxed">
        ¡Conviértete en colaborador de Ximena y comienza a ganar dinero hoy mismo!
        Ofrecemos emocionantes paquetes de viajes y tours que encantarán a tus clientes.
        Únete a nosotros y comienza a ganar dinero con apoyo y variedad de paquetes turísticos.
      </p>

      {/* CONTENEDOR */}
      <div className="bg-white rounded-2xl shadow-lg mt-12 p-8 md:p-12">

        {/* Título del formulario */}
        <h2 className="text-2xl font-semibold pb-4 border-b text-gray-800">
          Regístrate ahora
        </h2>

        <Formik
          initialValues={{
            name: '',
            date: '',
          }}
        >
          {() => (
            <Form className="space-y-16 mt-10">

              {/* DATOS PERSONALES */}
              <section>
                <h3 className="text-xl font-semibold text-gray-800 mb-8 pb-3 border-b">
                  Datos personales
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

                  {/* Campo reutilizable: etiqueta + field */}
                  {[
                    { label: "Nombre", name: "name", required: true },
                    { label: "Apellido", name: "lastName" },
                    { label: "Teléfono", name: "phone" },
                    { label: "Ciudad", name: "city", required: true },
                    { label: "Estado", name: "state" },
                    { label: "Municipio", name: "municipality" },
                    { label: "Domicilio", name: "address", required: true },
                    { label: "Número exterior", name: "outsideNumber" },
                    { label: "Número interior", name: "insideNumber" },
                  ].map((item) => (
                    <div key={item.name}>
                      <label className="block text-sm font-semibold text-gray-700 mb-1">
                        {item.label}
                        {item.required && <span className="text-red-500"> *</span>}
                      </label>
                      <Field
                        name={item.name}
                        className="w-full border border-gray-300 rounded-lg px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-blue-400"
                      />
                    </div>
                  ))}
                </div>

                {/* ARCHIVOS PERSONALES */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
                  {[
                    { label: "Foto del INE", name: "ine" },
                    { label: "Comprobante de domicilio", name: "proofAddress" },
                    { label: "Contrato de arrendamiento o predial", name: "contract" },
                  ].map((item) => (
                    <div key={item.name} className="border rounded-xl p-5">
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        {item.label}
                      </label>
                      <Field
                        type="file"
                        name={item.name}
                        className="w-full border rounded-lg p-2 bg-gray-50"
                      />
                    </div>
                  ))}
                </div>
              </section>

              {/* INFORMACIÓN COMERCIAL */}
              <section>
                <h3 className="text-xl font-semibold text-gray-800 mb-8 pb-3 border-b">
                  Información comercial
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

                  {[
                    { label: "Ciudad", name: "cityCommercial", required: true },
                    { label: "Estado", name: "stateCommercial" },
                    { label: "Municipio", name: "municipalityCommercial" },
                    { label: "Domicilio", name: "addressCommercial" },
                    { label: "Número exterior", name: "outsideNumberCommercial" },
                    { label: "Número interior", name: "insideNumberCommercial" },
                  ].map((item) => (
                    <div key={item.name}>
                      <label className="block text-sm font-semibold text-gray-700 mb-1">
                        {item.label}
                        {item.required && <span className="text-red-500"> *</span>}
                      </label>
                      <Field
                        name={item.name}
                        className="w-full border border-gray-300 rounded-lg px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-blue-400"
                      />
                    </div>
                  ))}
                </div>

                {/* ARCHIVOS COMERCIALES */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
                  {[
                    { label: "RFC (PDF)", name: "rfc" },
                    { label: "Comprobante de domicilio", name: "proofAddressCommercial" },
                    { label: "Contrato de arrendamiento o predial", name: "contractCommercial" },
                  ].map((item) => (
                    <div key={item.name} className="border rounded-xl p-5">
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        {item.label}
                      </label>
                      <Field
                        type="file"
                        name={item.name}
                        className="w-full border rounded-lg p-2 bg-gray-50"
                      />
                    </div>
                  ))}
                </div>
              </section>

              {/* Comentarios */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Comentarios
                </label>
                <Field
                  as="textarea"
                  name="comment"
                  className="w-full h-32 border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
              </div>

              {/* Botón final */}
              <div className="flex justify-center">
                <button
                  type="submit"
                  className="bg-blue-600 text-white px-10 py-3 rounded-lg font-semibold hover:bg-blue-700 transition shadow-md"
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
