import React from 'react';
import { motion } from 'framer-motion';
import { SEO } from '../components/SEO';

export const CookiesPage = () => {
  return (
    <div className="pt-32 pb-24 bg-white min-h-screen">
      <SEO 
        title="Política de Cookies | Inyecta Group"
        description="Política detallada sobre el uso de dispositivos de almacenamiento y recuperación de datos (cookies) en inyectagroup.com."
      />
      <div className="potion-container px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="potion-badge mb-8">Uso de Cookies</div>
            <h1 className="text-5xl md:text-7xl font-black tracking-tighter mb-12 leading-[0.9] text-black">
              Política de <span className="text-blue-600">Cookies</span>.
            </h1>
            
            <div className="prose prose-slate prose-lg max-w-none text-slate-600 tracking-tight leading-relaxed space-y-12 text-justify">
              <section className="space-y-6">
                <h2 className="text-3xl font-black text-black tracking-tighter border-b-2 border-slate-100 pb-4">1. Objeto y Alcance</h2>
                <p>
                  En cumplimiento de lo dispuesto en el artículo 22.2 de la Ley 34/2002, de 11 de julio, de Servicios de la Sociedad de la Información y de Comercio Electrónico (LSSI-CE), y de acuerdo con las directrices de la Agencia Española de Protección de Datos (AEPD), la presente Política de Cookies tiene por objeto informarle de manera clara y exhaustiva sobre el uso de dispositivos de almacenamiento y recuperación de datos (en adelante, "cookies") en el dominio inyectagroup.com.
                </p>
                <p>
                  El sitio web utiliza cookies propias y de terceros para garantizar el funcionamiento técnico del mismo, así como para mejorar su experiencia de usuario y realizar análisis estadísticos sobre el comportamiento de navegación.
                </p>
              </section>

              <section className="space-y-6">
                <h2 className="text-3xl font-black text-black tracking-tighter border-b-2 border-slate-100 pb-4">2. Clasificación Exhaustiva de las Cookies</h2>
                <p>Las cookies utilizadas en este sitio web se clasifican según criterios técnicos y de finalidad:</p>
                
                <div className="space-y-10">
                  <div className="bg-slate-50 p-8 rounded-2xl border border-slate-100">
                    <h3 className="text-xl font-bold text-black mb-4">A. Cookies Técnicas y Estrictamente Necesarias</h3>
                    <p className="text-sm italic mb-4">Finalidad: Garantizar la operatividad del sitio.</p>
                    <p>Son aquellas que permiten al usuario la navegación a través de la página web y la utilización de las diferentes opciones o servicios que en ella existen, como controlar el tráfico y la comunicación de datos, identificar la sesión, acceder a partes de acceso restringido, recordar los elementos que integran un pedido, gestionar el pago, etc.</p>
                    <p className="text-xs text-slate-400 mt-2"><strong>Nota Legal:</strong> Estas cookies no requieren el consentimiento del usuario para su instalación.</p>
                  </div>

                  <div className="bg-slate-50 p-8 rounded-2xl border border-slate-100">
                    <h3 className="text-xl font-bold text-black mb-4">B. Cookies de Análisis y Medición (Stat-Cookies)</h3>
                    <p className="text-sm italic mb-4">Finalidad: Cuantificar audiencia y analizar comportamiento.</p>
                    <p>Permiten al responsable de las mismas el seguimiento y análisis del comportamiento de los usuarios de los sitios web a los que están vinculadas. La información recogida mediante este tipo de cookies se utiliza en la medición de la actividad del sitio web para la elaboración de perfiles de navegación de los usuarios, con el fin de introducir mejoras en función del análisis de los datos de uso de los usuarios.</p>
                    <p className="text-sm mt-4 font-bold">Terceros asociados: Google Analytics (Google Ireland Ltd.).</p>
                  </div>

                  <div className="bg-slate-50 p-8 rounded-2xl border border-slate-100">
                    <h3 className="text-xl font-bold text-black mb-4">C. Cookies de Personalización</h3>
                    <p className="text-sm italic mb-4">Finalidad: Recordar preferencias (idioma, región).</p>
                    <p>Permiten al usuario acceder al servicio con algunas características de carácter general predefinidas en función de una serie de criterios en el terminal del usuario (ej. configuración estética del sitio).</p>
                  </div>
                </div>
              </section>

              <section className="space-y-6">
                <h2 className="text-3xl font-black text-black tracking-tighter border-b-2 border-slate-100 pb-4">3. Gestión, Bloqueo y Eliminación</h2>
                <p>
                  Usted tiene el derecho de aceptar, denegar o revocar su consentimiento para el uso de cookies en cualquier momento. A continuación le explicamos cómo gestionar las cookies a través de los ajustes de configuración de su navegador:
                </p>
                <div className="grid grid-cols-1 gap-6">
                  <div className="p-6 border border-slate-100 rounded-xl">
                    <h4 className="font-bold text-black mb-2">Google Chrome</h4>
                    <p className="text-sm">Configuración {'>'} Privacidad y Seguridad {'>'} Cookies y otros datos de sitios. <a href="https://support.google.com/chrome/answer/95647" className="text-blue-600 underline" target="_blank">Ver guía oficial</a>.</p>
                  </div>
                  <div className="p-6 border border-slate-100 rounded-xl">
                    <h4 className="font-bold text-black mb-2">Mozilla Firefox</h4>
                    <p className="text-sm">Ajustes {'>'} Privacidad y Seguridad {'>'} Cookies y datos del sitio. <a href="https://support.mozilla.org/es/kb/habilitar-y-deshabilitar-cookies-sitios-web-rastrear-preferencias" className="text-blue-600 underline" target="_blank">Ver guía oficial</a>.</p>
                  </div>
                  <div className="p-6 border border-slate-100 rounded-xl">
                    <h4 className="font-bold text-black mb-2">Safari (Apple)</h4>
                    <p className="text-sm">Ajustes {'>'} Privacidad {'>'} Bloquear todas las cookies. <a href="https://support.apple.com/es-es/guide/safari/sfri11471/mac" className="text-blue-600 underline" target="_blank">Ver guía oficial</a>.</p>
                  </div>
                  <div className="p-6 border border-slate-100 rounded-xl">
                    <h4 className="font-bold text-black mb-2">Microsoft Edge</h4>
                    <p className="text-sm">Configuración {'>'} Cookies y permisos del sitio. <a href="https://support.microsoft.com/es-es/windows/eliminar-y-administrar-cookies-168dab11-0753-043d-7c16-ede5947fc64d" className="text-blue-600 underline" target="_blank">Ver guía oficial</a>.</p>
                  </div>
                </div>
              </section>

              <section className="space-y-6">
                <h2 className="text-3xl font-black text-black tracking-tighter border-b-2 border-slate-100 pb-4">4. Transferencias Internacionales y Tratamiento por Terceros</h2>
                <p>
                  Al utilizar cookies de terceros (como Google Analytics), es posible que sus datos personales sean transferidos a países fuera del Espacio Económico Europeo (EEE), principalmente a Estados Unidos.
                </p>
                <p>
                  Nos aseguramos de que el tratamiento por parte de estos terceros se realice con las garantías adecuadas (ej. Cláusulas Contractuales Tipo o marcos de adecuación reconocidos por la Comisión Europea).
                </p>
              </section>

              <section className="space-y-6">
                <h2 className="text-3xl font-black text-black tracking-tighter border-b-2 border-slate-100 pb-4">5. Plazo de Conservación</h2>
                <p>
                  Las cookies se mantendrán instaladas durante el tiempo necesario para la finalidad descrita, que puede variar desde el tiempo que dure la sesión (cookies de sesión) hasta una duración máxima de 2 años (cookies persistentes), siempre que no sean eliminadas manualmente por el usuario.
                </p>
              </section>

              <div className="pt-12 border-t border-slate-100">
                <p className="text-sm text-slate-400 font-mono italic">
                  Última revisión: 20 de abril de 2024. Versión 3.0 (Especialista Digital).
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};
