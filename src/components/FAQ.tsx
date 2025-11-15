import { motion, AnimatePresence } from 'motion/react';
import { Plus, Minus } from 'lucide-react';
import { ThemeMode } from '../App';
import { useState } from 'react';

interface FAQProps {
  theme: ThemeMode;
}

const faqs = [
  {
    question: "Quanto tempo leva para implementar o gateway whitelabel?",
    answer: "A implementação completa leva até 48 horas. Nossa equipe cuida de todo o setup técnico, integração com adquirentes e configuração do painel administrativo. Você recebe acesso ao ambiente de produção totalmente funcional."
  },
  {
    question: "Preciso ter conhecimento técnico para operar?",
    answer: "Não é necessário. O painel é intuitivo e desenvolvido para ser usado por qualquer pessoa. Além disso, você tem acesso ao grupo exclusivo no WhatsApp com nossa equipe técnica para tirar dúvidas em tempo real."
  },
  {
    question: "Quais formas de pagamento estão disponíveis?",
    answer: "PIX, cartão de crédito, cartão de débito, boleto bancário e saque em criptomoedas (BTC, ETH, USDT). Você pode ativar ou desativar cada método de pagamento conforme sua necessidade."
  },
  {
    question: "Como funciona o modelo de multi-adquirência?",
    answer: "Nosso sistema trabalha com múltiplos adquirentes simultaneamente. Se uma transação falha em um, o sistema automaticamente tenta processar em outro, aumentando a taxa de aprovação em até 30%. Tudo acontece em menos de 2 segundos."
  },
  {
    question: "O sistema é PCI-DSS certificado e seguro?",
    answer: "Sim, totalmente certificado PCI-DSS Nível 1, o mais alto padrão de segurança da indústria de pagamentos. Todos os dados são criptografados e armazenados em conformidade com LGPD e normas bancárias."
  },
  {
    question: "Como funciona o suporte 24/7?",
    answer: "Você entra em um grupo exclusivo no WhatsApp com nossa equipe técnica e estratégica. Disponível 24 horas por dia, 7 dias por semana. Respostas em minutos, não em dias."
  }
];

export default function FAQ({ theme }: FAQProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="relative py-24 px-6 overflow-hidden">
      <div className="max-w-4xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          {/* Badge removido conforme solicitado */}

          <h2 className="text-white mb-4 font-bold text-[55px] leading-tight">
            <span className="bg-gradient-to-r from-[#EFD9FF] via-[#FED5A7] to-[#FFBF77] bg-clip-text text-transparent text-[55px]">
              Perguntas Frequentes
            </span>
          </h2>
          
          <p className="text-[#A0A0A5] text-lg max-w-2xl mx-auto">
            Tudo que você precisa saber para começar
          </p>
        </motion.div>

        {/* FAQ List */}
        <div className="space-y-3">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="relative group"
              >
                {/* Glow effect on hover */}
                <div 
                  className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl pointer-events-none"
                  style={{ 
                    background: isOpen 
                      ? 'radial-gradient(circle at center, rgba(255,133,52,0.15), transparent)' 
                      : 'radial-gradient(circle at center, rgba(152,16,250,0.1), transparent)'
                  }}
                />
                
                <div 
                  className={`relative bg-[rgba(255,255,255,0.02)] backdrop-blur-sm rounded-2xl border transition-all duration-300 overflow-hidden ${
                    isOpen 
                      ? 'border-[rgba(255,133,52,0.3)] shadow-lg' 
                      : 'border-[rgba(255,255,255,0.08)] hover:border-[rgba(255,255,255,0.15)]'
                  }`}
                >
                  {/* Question Button */}
                  <button
                    onClick={() => setOpenIndex(isOpen ? null : index)}
                    className="w-full px-6 py-5 flex items-center justify-between gap-4 text-left"
                  >
                    <span className={`font-semibold transition-colors ${
                      isOpen ? 'text-white' : 'text-[#E0E0E5]'
                    }`}>
                      {faq.question}
                    </span>
                    
                    <motion.div
                      animate={{ rotate: isOpen ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                      className={`w-8 h-8 rounded-lg flex items-center justify-center shrink-0 transition-all ${
                        isOpen 
                          ? 'bg-gradient-to-r from-[#ff8534] to-[#9810FA] text-white' 
                          : 'bg-[rgba(255,255,255,0.05)] text-[#8696a0] group-hover:bg-[rgba(255,255,255,0.08)]'
                      }`}
                    >
                      {isOpen ? (
                        <Minus className="w-5 h-5" />
                      ) : (
                        <Plus className="w-5 h-5" />
                      )}
                    </motion.div>
                  </button>

                  {/* Answer */}
                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <div className="px-6 pb-5 pt-0">
                          <div className="pt-3 border-t border-[rgba(255,255,255,0.08)]">
                            <p className="text-[#A0A0A5] leading-relaxed">
                              {faq.answer}
                            </p>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* CTA at bottom - REMOVED */}
      </div>
    </section>
  );
}