import React from 'react';
import { motion } from 'framer-motion';
import { SEO } from '../components/SEO';

export const TermsPage = () => {
  return (
    <div className="pt-32 pb-24 bg-white min-h-screen">
      <SEO 
        title="Aviso Legal | Inyecta Group"
        description="Aviso legal detallado y términos de uso de conformidad con la LSSI-CE y normativa española."
      />
      <div className="potion-container px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="potion-badge mb-8">Información Legal</div>
            <h1 className="text-5xl md:text-7xl font-black tracking-tighter mb-12 leading-[0.9] text-black">
              Aviso <span className="text-blue-600">Legal</span>.
            </h1>
            
            <div className="prose prose-slate prose-lg max-w-none text-slate-600 tracking-tight leading-relaxed space-y-12 text-justify">
              <section className="space-y-6">
                <h2 className="text-3xl font-black text-black tracking-tighter border-b-2 border-slate-100 pb-4">Art. 1: Información Identificativa de conformidad con la LSSI-CE</h2>
                <p>
                  En cumplimiento de lo establecido en el artículo 10 de la Ley 34/2002, de 11 de julio, de servicios de la sociedad de la información y de comercio electrónico, se informa a los usuarios de este sitio web (enyactagroup.com) de los siguientes datos identificativos del titular del servicio:
                </p>
                <div className="bg-slate-50 p-8 rounded-2xl border border-slate-100 space-y-4 font-medium text-slate-800">
                  <p><span className="text-slate-400 mr-2 uppercase text-xs tracking-widest">Titular:</span> [COMPLETAR CON NOMBRE COMPLETO O RAZÓN SOCIAL, EJ. INYECTA GROUP S.L.]</p>
                  <p><span className="text-slate-400 mr-2 uppercase text-xs tracking-widest">CIF / NIF:</span> [46400 / COMPLETAR SI ES DIFERENTE]</p>
                  <p><span className="text-slate-400 mr-2 uppercase text-xs tracking-widest">Domicilio Legal:</span> [Rambla San Isidro 11, CP, CIUDAD, ESPAÑA]</p>
                  <p><span className="text-slate-400 mr-2 uppercase text-xs tracking-widest">Datos Registrales:</span> [COMPLETAR CON DATOS DE INSCRIPCIÓN EN EL REGISTRO MERCANTIL: TOMO, LIBRO, FOLIO, HOJA, ETC.]</p>
                  <p><span className="text-slate-400 mr-2 uppercase text-xs tracking-widest">Contacto Electrónico:</span> inyectasoporte@gmail.com</p>
                  <p><span className="text-slate-400 mr-2 uppercase text-xs tracking-widest">Contacto Telefónico:</span> [COMPLETAR CON TELÉFONO DE CONTACTO]</p>
                </div>
              </section>

              <section className="space-y-6">
                <h2 className="text-3xl font-black text-black tracking-tighter border-b-2 border-slate-100 pb-4">Art. 2: Objeto y Ámbito de Aplicación</h2>
                <p>
                  Las presentes Condiciones Generales tienen por objeto regular el acceso, navegación y uso del portal web inyectagroup.com, así como las responsabilidades derivadas de la utilización de sus contenidos (entendiendo por estos, a título enunciativo, textos, gráficos, dibujos, diseños, códigos, software, fotografías, música, vídeos, sonidos, bases de datos, imágenes, expresiones e informaciones, así como cualquier otra creación protegida por las leyes nacionales e internacionales sobre propiedad intelectual e industrial).
                </p>
                <p>
                  El acceso o la mera utilización del portal por parte del usuario implica la adhesión de este a las condiciones generales que el titular tenga publicadas en cada momento. En consecuencia, el usuario debe leer atentamente estas condiciones generales periódicamente.
                </p>
              </section>

              <section className="space-y-6">
                <h2 className="text-3xl font-black text-black tracking-tighter border-b-2 border-slate-100 pb-4">Art. 3: Acceso y Uso del Sitio Web</h2>
                <p>
                  El acceso a los servicios de inyectagroup.com tiene, por regla general, carácter gratuito para los Usuarios. No obstante, algunos de los servicios suministrados por el titular o por terceros a través del Portal pueden estar sujetos al pago de un precio, en cuyo caso se estará a lo que se establezca en las correspondientes Condiciones Particulares.
                </p>
                <p>
                  El USUARIO se compromete a:
                </p>
                <ul className="list-disc pl-8 space-y-4">
                  <li>No utilizar el sitio web para la realización de actividades contrarias a las leyes, a la moral, al orden público y, en general, a hacer un uso conforme a las presentes condiciones.</li>
                  <li>No realizar actividades publicitarias o de explotación comercial remitiendo mensajes que utilicen una identidad falsa.</li>
                  <li>No dañar, inutilizar, sobrecargar o deteriorar el Portal o impedir la normal utilización o disfrute del mismo.</li>
                  <li>No reproducir, copiar, distribuir, comunicar públicamente, transformar o modificar los contenidos, a menos que se cuente con la autorización del titular de los correspondientes derechos o ello resulte legalmente permitido.</li>
                </ul>
              </section>

              <section className="space-y-6">
                <h2 className="text-3xl font-black text-black tracking-tighter border-b-2 border-slate-100 pb-4">Art. 4: Propiedad Intelectual e Industrial</h2>
                <p>
                  El titular del sitio web es propietario de todos los derechos de propiedad intelectual e industrial de su página web, así como de los elementos contenidos en la misma. Todos los derechos reservados.
                </p>
                <p>
                  Queda expresamente prohibida la reproducción, la distribución y la comunicación pública, incluida su modalidad de puesta a disposición, de la totalidad o parte de los contenidos de esta página web, con fines comerciales, en cualquier soporte y por cualquier medio técnico, sin la autorización del titular. 
                </p>
                <p>
                  Cualquier uso no autorizado previamente por el titular será considerado un incumplimiento grave de los derechos de propiedad intelectual o industrial del autor y podrá dar lugar a las acciones legales pertinentes.
                </p>
              </section>

              <section className="space-y-6">
                <h2 className="text-3xl font-black text-black tracking-tighter border-b-2 border-slate-100 pb-4">Art. 5: Exclusión de Garantías y Responsabilidad</h2>
                <p>
                  El titular manifiesta que ha adoptado las medidas necesarias que, dentro de sus posibilidades y el estado de la tecnología, permitan el correcto funcionamiento de su sitio web, así como la ausencia de virus y componentes dañinos. Sin embargo, no puede hacerse responsable de:
                </p>
                <ul className="list-disc pl-8 space-y-4">
                  <li>La continuidad y disponibilidad de los contenidos y servicios.</li>
                  <li>La ausencia de errores en dichos contenidos ni la corrección de cualquier defecto que pudiera ocurrir.</li>
                  <li>La ausencia de virus y/o demás componentes dañinos.</li>
                  <li>Los daños o perjuicios que cause cualquier persona que vulnere los sistemas de seguridad del sitio web.</li>
                </ul>
              </section>

              <section className="space-y-6">
                <h2 className="text-3xl font-black text-black tracking-tighter border-b-2 border-slate-100 pb-4">Art. 6: Enlaces a Terceros</h2>
                <p>
                  En el caso de enlaces a sitios web de terceros, el Usuario pasará a estar regido por los Términos de Uso y Política de Privacidad del nuevo sitio web, aceptando que el titular no será responsable ni tiene obligación legal por el uso de tales sitios.
                </p>
              </section>

              <section className="space-y-6">
                <h2 className="text-3xl font-black text-black tracking-tighter border-b-2 border-slate-100 pb-4">Art. 7: Duración y Modificación</h2>
                <p>
                  El titular podrá modificar los términos y condiciones aquí estipulados, total o parcialmente, publicando cualquier cambio en la misma forma en que aparecen estas condiciones generales. La vigencia temporal de estas condiciones generales coincide, por lo tanto, con el tiempo de su exposición, hasta que sean modificadas total o parcialmente.
                </p>
              </section>

              <section className="space-y-6">
                <h2 className="text-3xl font-black text-black tracking-tighter border-b-2 border-slate-100 pb-4">Art. 8: Jurisdicción y Ley Aplicable</h2>
                <p>
                  Para la resolución de todas las controversias o cuestiones relacionadas con el presente sitio web o de las actividades en él desarrolladas, será de aplicación la legislación española, a la que se someten expresamente las partes, siendo competentes para la resolución de todos los conflictos derivados o relacionados con su uso los Juzgados y Tribunales de [COMPLETAR CON CIUDAD, POR EJEMPLO VALENCIA, MADRID O BARCELONA].
                </p>
              </section>

              <div className="pt-12 border-t border-slate-100">
                <p className="text-sm text-slate-400 font-mono italic">
                  Última actualización: 20 de abril de 2024. Versión 3.0 (Especialista Legal).
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};
