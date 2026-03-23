import React from 'react';
import { motion } from 'framer-motion';

export const TermsPage = () => {
  return (
    <div className="pt-32 pb-24 bg-white min-h-screen">
      <div className="potion-container px-6">
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="potion-badge mb-8">Legal</div>
            <h1 className="text-5xl md:text-7xl font-black tracking-tighter mb-12 leading-[0.9] text-black">
              Términos y <span className="text-blue-600">Condiciones</span>.
            </h1>
            
            <div className="prose prose-slate prose-lg max-w-none font-bold text-slate-500 tracking-tight leading-relaxed space-y-8">
              <section>
                <h2 className="text-2xl font-black text-black tracking-tight mb-4">1. Aceptación de los términos</h2>
                <p>
                  Al acceder y utilizar este sitio web, usted acepta estar sujeto a estos Términos y Condiciones y a todas las leyes y regulaciones aplicables. Si no está de acuerdo con alguno de estos términos, tiene prohibido utilizar o acceder a este sitio.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-black text-black tracking-tight mb-4">2. Licencia de uso</h2>
                <p>
                  Se concede permiso para descargar temporalmente una copia de los materiales (información o software) en el sitio web de Inyecta Group para visualización transitoria personal y no comercial únicamente.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-black text-black tracking-tight mb-4">3. Descargo de responsabilidad</h2>
                <p>
                  Los materiales en el sitio web de Inyecta Group se proporcionan "tal cual". Inyecta Group no ofrece garantías, expresas o implícitas, y por la presente renuncia y niega todas las demás garantías, incluyendo, sin limitación, las garantías implícitas o condiciones de comerciabilidad, idoneidad para un propósito particular o no infracción de propiedad intelectual u otra violación de derechos.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-black text-black tracking-tight mb-4">4. Limitaciones</h2>
                <p>
                  En ningún caso Inyecta Group o sus proveedores serán responsables de cualquier daño (incluyendo, sin limitación, daños por pérdida de datos o beneficios, o debido a la interrupción del negocio) que surja del uso o la incapacidad de usar los materiales en el sitio web de Inyecta Group.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-black text-black tracking-tight mb-4">5. Revisiones y erratas</h2>
                <p>
                  Los materiales que aparecen en el sitio web de Inyecta Group podrían incluir errores técnicos, tipográficos o fotográficos. Inyecta Group no garantiza que ninguno de los materiales en su sitio web sea preciso, completo o actual.
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
