import React from 'react';
import { motion } from 'framer-motion';
import { SEO } from '../components/SEO';

export const PrivacyPage = () => {
  return (
    <div className="pt-32 pb-24 bg-white min-h-screen">
      <SEO 
        title="Política de Privacidad | Inyecta Group"
        description="Información exhaustiva sobre el tratamiento de datos personales de conformidad con el RGPD y la LOPDGDD."
      />
      <div className="potion-container px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="potion-badge mb-8">Privacidad y Protección de Datos</div>
            <h1 className="text-5xl md:text-7xl font-black tracking-tighter mb-12 leading-[0.9] text-black">
              Política de <span className="text-blue-600">Privacidad</span>.
            </h1>
            
            <div className="prose prose-slate prose-lg max-w-none text-slate-600 tracking-tight leading-relaxed space-y-12 text-justify">
              <section className="space-y-6">
                <h2 className="text-3xl font-black text-black tracking-tighter border-b-2 border-slate-100 pb-4">1. Identidad del Responsable del Tratamiento</h2>
                <p>
                  En cumplimiento del Reglamento (UE) 2016/679 del Parlamento Europeo y del Consejo, de 27 de abril de 2016 (RGPD) y de la Ley Orgánica 3/2018, de 5 de diciembre, de Protección de Datos Personales y garantía de los derechos digitales (LOPDGDD), le informamos que el Responsable del Tratamiento de sus datos personales es:
                </p>
                <div className="bg-slate-50 p-8 rounded-2xl border border-slate-100 space-y-4 font-medium text-slate-800">
                  <p><span className="text-slate-400 mr-2 uppercase text-xs tracking-widest">Responsable:</span> [COMPLETAR CON NOMBRE COMPLETO O RAZÓN SOCIAL]</p>
                  <p><span className="text-slate-400 mr-2 uppercase text-xs tracking-widest">NIF / CIF:</span> [46400 / COMPLETAR SI ES DIFERENTE]</p>
                  <p><span className="text-slate-400 mr-2 uppercase text-xs tracking-widest">Domicilio Legal:</span> [Rambla San Isidro 11, CIUDAD, C.P., ESPAÑA]</p>
                  <p><span className="text-slate-400 mr-2 uppercase text-xs tracking-widest">Delegado de Protección de Datos (DPD):</span> inyectasoporte@gmail.com</p>
                </div>
              </section>

              <section className="space-y-6">
                <h2 className="text-3xl font-black text-black tracking-tighter border-b-2 border-slate-100 pb-4">2. Datos Objeto de Tratamiento</h2>
                <p>
                  Los datos personales que tratamos proceden directamente de la información facilitada por usted a través de los formularios habilitados en el sitio web, así como de la navegación que realice por el mismo. Las categorías de datos que tratamos son:
                </p>
                <ul className="list-disc pl-8 space-y-4">
                  <li><strong>Datos Identificativos:</strong> Nombre, apellidos, dirección IP.</li>
                  <li><strong>Datos de Contacto:</strong> Correo electrónico, número de teléfono.</li>
                  <li><strong>Datos de Información Profesional:</strong> Empresa, cargo, sector (si se facilitan en el formulario).</li>
                  <li><strong>Datos de Navegación:</strong> Cookies, metadatos de conexión facilitados por su navegador.</li>
                </ul>
              </section>

              <section className="space-y-6">
                <h2 className="text-3xl font-black text-black tracking-tighter border-b-2 border-slate-100 pb-4">3. Finalidades y Bases Legales del Tratamiento</h2>
                <p>
                  Sus datos personales serán tratados para las siguientes finalidades específicas basándonos en las legitimaciones indicadas:
                </p>
                <table className="min-w-full border-collapse border border-slate-200">
                  <thead>
                    <tr className="bg-slate-50">
                      <th className="border border-slate-200 p-4 text-left">Finalidad</th>
                      <th className="border border-slate-200 p-4 text-left">Base Legal (Legitimación)</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-slate-200 p-4 font-bold">Gestión de Consultas y Soporte</td>
                      <td className="border border-slate-200 p-4 text-sm italic">Art. 6.1.a RGPD: Consentimiento del interesado al enviar la solicitud.</td>
                    </tr>
                    <tr>
                      <td className="border border-slate-200 p-4 font-bold">Reserva de Consultoría / Agenda</td>
                      <td className="border border-slate-200 p-4 text-sm italic">Art. 6.1.b RGPD: Aplicación de medidas precontractuales a petición del interesado.</td>
                    </tr>
                    <tr>
                      <td className="border border-slate-200 p-4 font-bold">Envío de Comunicaciones Comerciales</td>
                      <td className="border border-slate-200 p-4 text-sm italic">Art. 6.1.a RGPD: Consentimiento explícito previo.</td>
                    </tr>
                    <tr>
                      <td className="border border-slate-200 p-4 font-bold">Seguridad y Análisis Web</td>
                      <td className="border border-slate-200 p-4 text-sm italic">Art. 6.1.f RGPD: Interés legítimo para garantizar la seguridad del sitio.</td>
                    </tr>
                  </tbody>
                </table>
              </section>

              <section className="space-y-6">
                <h2 className="text-3xl font-black text-black tracking-tighter border-b-2 border-slate-100 pb-4">4. Plazos de Conservación de los Datos</h2>
                <p>
                  El Responsable conservará sus datos durante el tiempo estrictamente necesario para la finalidad para la cual fueron recabados:
                </p>
                <ul className="list-disc pl-8 space-y-4">
                  <li><strong>Datos de Solicitudes:</strong> Se conservarán hasta que se resuelva la consulta y, en caso de no contratación, durante un máximo de 12 meses.</li>
                  <li><strong>Datos de Clientes:</strong> Durante la vigencia de la prestación del servicio y, una vez finalizado, durante el plazo de prescripción de las acciones legales (generalmente 5 años).</li>
                  <li><strong>Datos para Marketing:</strong> Hasta que el interesado solicite la baja o revoque su consentimiento.</li>
                </ul>
              </section>

              <section className="space-y-6">
                <h2 className="text-3xl font-black text-black tracking-tighter border-b-2 border-slate-100 pb-4">5. Destinatarios de los Datos</h2>
                <p>
                  Sus datos personales no serán cedidos a terceros, salvo en los siguientes supuestos:
                </p>
                <ol className="list-decimal pl-8 space-y-4">
                  <li><strong>Obligación Legal:</strong> A las Administraciones Públicas, Juzgados y Tribunales cuando así lo exija la normativa vigente.</li>
                  <li><strong>Encargados del Tratamiento:</strong> Terceros proveedores que prestan servicios necesarios para la actividad de Inyecta Group (alojamiento web, CRM, servicios de marketing analítico). Se garantiza que estos proveedores cumplen con las cláusulas contractuales tipo o marcos de privacidad equivalentes (ej. [COMPLETAR CON PROVEEDORES COMO AWS, GOOGLE, ETC.]).</li>
                </ol>
              </section>

              <section className="space-y-6">
                <h2 className="text-3xl font-black text-black tracking-tighter border-b-2 border-slate-100 pb-4">6. Ejercicio de Derechos (Procedimiento Detallado)</h2>
                <p>
                  Usted tiene derecho a ejercer los derechos de Acceso, Rectificación, Supresión, Portabilidad, Limitación del Tratamiento y Oposición. Para ello, debe seguir el siguiente procedimiento:
                </p>
                <div className="bg-blue-50/50 p-8 rounded-2xl border border-blue-100 space-y-4">
                  <p className="font-bold">Pasos para ejercer sus derechos:</p>
                  <ol className="list-decimal pl-6 space-y-2 text-sm">
                    <li>Redacte un correo electrónico dirigido a <strong>inyectasoporte@gmail.com</strong>.</li>
                    <li>Indique en el asunto "Ejercicio de Derechos Protección de Datos".</li>
                    <li>Especifique claramente el derecho que desea ejercer en el cuerpo del mensaje.</li>
                    <li>Adjunte una copia de su DNI, Pasaporte u otro documento oficial de identificación (dato necesario para evitar suplantaciones de identidad).</li>
                    <li>En un plazo máximo de 30 días, recibirá una respuesta detallada con la resolución de su solicitud.</li>
                  </ol>
                </div>
                <p>
                  Si considera que no ha obtenido satisfacción en el ejercicio de sus derechos, puede presentar una reclamación ante la Autoridad de Control competente, que en España es la <strong>Agencia Española de Protección de Datos (AEPD)</strong> a través de su sede electrónica: <a href="https://www.aepd.es" className="text-blue-600 underline">www.aepd.es</a>.
                </p>
              </section>

              <section className="space-y-6">
                <h2 className="text-3xl font-black text-black tracking-tighter border-b-2 border-slate-100 pb-4">7. Medidas de Seguridad Técnicas y Organizativas</h2>
                <p>
                  Para garantizar la integridad y confidencialidad de la información, el Responsable ha implementado medidas de seguridad tales como cifrado de datos (SSL), controles de acceso físico y lógico, y políticas internas de gestión de riesgos, asegurando que sus datos reciban un tratamiento conforme al estado actual de la tecnología.
                </p>
              </section>

              <div className="pt-12 border-t border-slate-100">
                <p className="text-sm text-slate-400 font-mono italic">
                  Última actualización: 20 de abril de 2024. Versión 3.0 (Jurídico Senior).
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};
