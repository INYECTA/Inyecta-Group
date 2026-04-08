import React from 'react';
import { motion } from 'framer-motion';
import { SEO } from '../components/SEO';

export const PrivacyPage = () => {
  return (
    <div className="pt-32 pb-24 bg-white min-h-screen">
      <SEO 
        title="Política de Privacidad"
        description="Información sobre cómo Inyecta Group protege y trata tus datos personales."
      />
      <div className="potion-container px-6">
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="potion-badge mb-8">Legal</div>
            <h1 className="text-5xl md:text-7xl font-black tracking-tighter mb-12 leading-[0.9] text-black">
              Política de <span className="text-blue-600">Privacidad</span>.
            </h1>
            
            <div className="prose prose-slate prose-lg max-w-none font-bold text-slate-500 tracking-tight leading-relaxed space-y-8">
              <section>
                <h2 className="text-2xl font-black text-black tracking-tight mb-4">1. Información que recopilamos</h2>
                <p>
                  En Inyecta Group, recopilamos información personal que usted nos proporciona directamente cuando utiliza nuestro sitio web, se comunica con nosotros o contrata nuestros servicios. Esto puede incluir su nombre, dirección de correo electrónico, número de teléfono y detalles sobre su clínica o negocio.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-black text-black tracking-tight mb-4">2. Cómo utilizamos su información</h2>
                <p>
                  Utilizamos la información recopilada para proporcionar, mantener y mejorar nuestros servicios, para comunicarnos con usted, para procesar transacciones y para enviarle información promocional que consideremos de su interés.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-black text-black tracking-tight mb-4">3. Protección de datos</h2>
                <p>
                  Implementamos medidas de seguridad técnicas y organizativas para proteger sus datos personales contra el acceso no autorizado, la pérdida o la alteración. Sus datos son tratados con la máxima confidencialidad.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-black text-black tracking-tight mb-4">4. Sus derechos</h2>
                <p>
                  Usted tiene derecho a acceder, rectificar o eliminar sus datos personales en cualquier momento. Para ejercer estos derechos, puede ponerse en contacto con nosotros a través de nuestro correo electrónico de soporte.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-black text-black tracking-tight mb-4">5. Cookies</h2>
                <p>
                  Nuestro sitio web utiliza cookies para mejorar la experiencia del usuario y analizar el tráfico. Puede configurar su navegador para rechazar las cookies, aunque esto puede afectar la funcionalidad del sitio.
                </p>
              </section>

              <p className="pt-12 text-sm text-slate-400">
                Última actualización: Marzo 2024
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};
