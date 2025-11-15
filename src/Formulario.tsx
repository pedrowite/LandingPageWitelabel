import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { User, Briefcase, TrendingUp, Target, ArrowRight, ArrowLeft, CheckCircle, Phone, Mail } from 'lucide-react';
import { ImageWithFallback } from './components/figma/ImageWithFallback';
import imgWiteLabelLogo from "figma:asset/bb3f1e4d91d8cb4b6e7deebe33fca6227219583d.png";
import { GoogleTagManager } from './components/GoogleTagManager';

interface FormData {
  // Etapa 1: Contato
  nome: string;
  telefone: string;
  email: string;
  
  // Etapa 2: Experiência
  segmentos: string[];
  
  // Etapa 3: Faturamento
  faturamento: string;
  
  // Etapa 4: Objetivo
  objetivo: string;
}

const steps = [
  {
    id: 1,
    name: 'Contato',
    icon: User,
    description: 'Forneça suas informações de contato'
  },
  {
    id: 2,
    name: 'Experiência',
    icon: Briefcase,
    description: 'Você já tem experiência no mercado digital?'
  },
  {
    id: 3,
    name: 'Faturamento',
    icon: TrendingUp,
    description: 'Qual o faturamento médio mensal'
  },
  {
    id: 4,
    name: 'Objetivo',
    icon: Target,
    description: 'Qual é seu objetivo com uma marca de pagamentos?'
  }
];

const segmentosOptions = [
  { value: 'infoprodutos', label: 'Infoprodutos', icon: 'Book' },
  { value: 'gateway', label: 'Gateway de pagamentos', icon: 'CreditCard' },
  { value: 'saas', label: 'SaaS', icon: 'Cloud' },
  { value: 'ecommerce', label: 'E-commerce', icon: 'ShoppingCart' },
  { value: 'igaming', label: 'iGaming', icon: 'Gamepad2' },
  { value: 'nutra', label: 'Nutra e Suplementos', icon: 'Pill' },
  { value: 'afiliados', label: 'Marketing de Afiliados', icon: 'Handshake' }
];

const objetivosOptions = [
  { 
    value: 'propria-marca', 
    label: 'Criar minha própria marca de pagamentos',
    description: 'Quero ter um gateway completamente whitelabel'
  },
  { 
    value: 'escalar-negocios', 
    label: 'Escalar meus negócios atuais',
    description: 'Aumentar conversão e reduzir custos de processamento'
  },
  { 
    value: 'diversificar-receita', 
    label: 'Diversificar fontes de receita',
    description: 'Adicionar processamento de pagamentos ao meu portfólio'
  },
  { 
    value: 'atender-clientes', 
    label: 'Atender clientes de alto risco',
    description: 'Oferecer soluções para nichos específicos'
  },
  { 
    value: 'reducao-custos', 
    label: 'Reduzir custos operacionais',
    description: 'Diminuir taxas e ter mais controle sobre processos'
  },
  { 
    value: 'autonomia-total', 
    label: 'Ter autonomia total sobre pagamentos',
    description: 'Controle completo de risco, chargeback e aprovação'
  }
];

export default function Formulario() {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState<FormData>({
    nome: '',
    telefone: '',
    email: '',
    segmentos: [],
    faturamento: '',
    objetivo: ''
  });
  const [errors, setErrors] = useState<Record<string, boolean>>({});

  const handleInputChange = (field: keyof FormData, value: string | string[]) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: false }));
    }
  };

  const toggleSegmento = (segmento: string) => {
    const segmentos = formData.segmentos.includes(segmento)
      ? formData.segmentos.filter(s => s !== segmento)
      : [...formData.segmentos, segmento];
    handleInputChange('segmentos', segmentos);
  };

  const validateStep = () => {
    const newErrors: Record<string, boolean> = {};
    
    if (currentStep === 1) {
      if (!formData.nome || formData.nome.length < 3) newErrors.nome = true;
      if (!formData.telefone || formData.telefone.length < 10) newErrors.telefone = true;
      if (!formData.email || !formData.email.includes('@')) newErrors.email = true;
    } else if (currentStep === 2) {
      if (formData.segmentos.length === 0) newErrors.segmentos = true;
    } else if (currentStep === 3) {
      if (!formData.faturamento) newErrors.faturamento = true;
    }
    // Etapa 4 não tem validação obrigatória - objetivo é opcional
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNext = () => {
    if (validateStep()) {
      if (currentStep < 4) {
        setCurrentStep(prev => prev + 1);
      } else {
        // Enviar formulário e redirecionar para página de sucesso
        console.log('Formulário enviado:', formData);
        window.location.href = '/sucesso';
      }
    }
  };

  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep(prev => prev - 1);
    } else {
      window.location.href = '/';
    }
  };

  const hasErrors = Object.values(errors).some(error => error);

  return (
    <div className="min-h-screen bg-[#000000] flex items-center justify-center px-4 py-6 sm:py-8 relative overflow-hidden">
      {/* Google Tag Manager */}
      <GoogleTagManager />
      
      {/* Background effects - Mais claro no mobile */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Purple glow - Top Left */}
        <div 
          className="absolute -top-1/4 -left-1/4 w-[600px] h-[600px] md:w-[800px] md:h-[800px] rounded-full opacity-25 md:opacity-30 blur-[100px]"
          style={{ background: 'radial-gradient(circle, rgba(152,16,250,0.5) 0%, transparent 60%)' }}
        />
        
        {/* Orange glow - Top Right */}
        <div 
          className="absolute -top-1/4 -right-1/4 w-[600px] h-[600px] md:w-[800px] md:h-[800px] rounded-full opacity-25 md:opacity-30 blur-[100px]"
          style={{ background: 'radial-gradient(circle, rgba(255,133,52,0.5) 0%, transparent 60%)' }}
        />

        {/* Purple glow - Bottom Left */}
        <div 
          className="absolute -bottom-1/4 -left-1/4 w-[600px] h-[600px] md:w-[800px] md:h-[800px] rounded-full opacity-20 md:opacity-25 blur-[100px]"
          style={{ background: 'radial-gradient(circle, rgba(152,16,250,0.5) 0%, transparent 60%)' }}
        />
        
        {/* Orange glow - Bottom Right */}
        <div 
          className="absolute -bottom-1/4 -right-1/4 w-[600px] h-[600px] md:w-[800px] md:h-[800px] rounded-full opacity-20 md:opacity-25 blur-[100px]"
          style={{ background: 'radial-gradient(circle, rgba(255,133,52,0.5) 0%, transparent 60%)' }}
        />

        {/* Vignette Effect */}
        <div 
          className="absolute inset-0"
          style={{
            background: 'radial-gradient(circle at center, transparent 0%, rgba(0,0,0,0.5) 50%, rgba(0,0,0,0.9) 100%)'
          }}
        />
      </div>

      {/* Main card */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="relative w-full max-w-4xl bg-[rgba(17,17,20,0.85)] rounded-2xl sm:rounded-3xl border border-[rgba(152,16,250,0.3)] overflow-hidden"
        style={{
          boxShadow: '0 20px 80px rgba(0,0,0,0.5), 0 0 60px rgba(152,16,250,0.15)'
        }}
      >
        {/* Header */}
        <div className="px-6 sm:px-12 pt-8 pb-6 border-b border-[rgba(152,16,250,0.2)]">
          <div className="flex items-center justify-between mb-6">
            {/* Logo */}
            <div className="flex items-center gap-2 sm:gap-3">
              <div className="relative">
                <ImageWithFallback 
                  src={imgWiteLabelLogo} 
                  alt="WiteLabel" 
                  className="w-10 h-10 sm:w-12 sm:h-12 relative rounded-full"
                />
              </div>
              <div>
                <h1 className="font-bold text-lg sm:text-xl text-white">WiteLabel</h1>
                <p className="text-[#A0A0A5] text-xs sm:text-sm hidden sm:block">Comece sua jornada conosco</p>
              </div>
            </div>
            
            {/* Etapa indicator */}
            <div className="flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-[rgba(152,16,250,0.15)] border border-[rgba(152,16,250,0.3)]">
              <span className="text-[#9810FA] font-bold text-xs sm:text-sm">Etapa</span>
              <motion.span 
                key={currentStep}
                initial={{ scale: 1.5, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                className="text-white font-bold text-base sm:text-lg"
              >
                {currentStep}
              </motion.span>
              <span className="text-[#A0A0A5] text-sm sm:text-base">/</span>
              <span className="text-[#A0A0A5] text-base sm:text-lg">4</span>
            </div>
          </div>

          {/* Progress bar */}
          <div className="relative h-2 bg-[rgba(255,255,255,0.05)] rounded-full overflow-hidden">
            <motion.div
              className="absolute top-0 left-0 h-full rounded-full"
              style={{
                background: 'linear-gradient(90deg, #9810FA 0%, #C944FF 50%, #ff8534 100%)'
              }}
              initial={{ width: '0%' }}
              animate={{ width: `${(currentStep / 4) * 100}%` }}
              transition={{ duration: 0.5, ease: 'easeInOut' }}
            />
          </div>
        </div>

        {/* Tabs */}
        <div className="px-6 sm:px-12 py-6 border-b border-[rgba(152,16,250,0.1)]">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {steps.map((step) => {
              const Icon = step.icon;
              const isActive = currentStep === step.id;
              const isCompleted = currentStep > step.id;
              
              return (
                <motion.button
                  key={step.id}
                  onClick={() => {
                    if (step.id < currentStep) {
                      setCurrentStep(step.id);
                    }
                  }}
                  className={`
                    relative flex flex-col sm:flex-row items-center gap-2 sm:gap-3 px-3 py-3 rounded-xl transition-all
                    ${isActive ? 'bg-[rgba(152,16,250,0.2)]' : 'bg-[rgba(255,255,255,0.03)]'}
                    ${isCompleted ? 'cursor-pointer' : 'cursor-default'}
                    border
                    ${isActive ? 'border-[#9810FA]' : isCompleted ? 'border-[rgba(152,16,250,0.3)]' : 'border-[rgba(255,255,255,0.05)]'}
                  `}
                  whileHover={isCompleted || isActive ? { scale: 1.02, y: -2 } : {}}
                  whileTap={isCompleted || isActive ? { scale: 0.98 } : {}}
                >
                  <div className={`
                    relative flex-shrink-0 w-8 h-8 rounded-lg flex items-center justify-center
                    ${isActive ? 'bg-gradient-to-br from-[#9810FA] to-[#C944FF]' : isCompleted ? 'bg-[rgba(152,16,250,0.3)]' : 'bg-[rgba(255,255,255,0.05)]'}
                  `}>
                    {isCompleted ? (
                      <CheckCircle className="w-5 h-5 text-white" />
                    ) : (
                      <Icon className={`w-5 h-5 ${isActive ? 'text-white' : 'text-[#A0A0A5]'}`} />
                    )}
                  </div>
                  <span className={`text-xs sm:text-sm font-bold ${isActive ? 'text-white' : 'text-[#A0A0A5]'}`}>
                    {step.name}
                  </span>
                </motion.button>
              );
            })}
          </div>
        </div>

        {/* Form content */}
        <div className="px-6 sm:px-12 py-8 min-h-[400px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentStep}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
            >
              <h2 className="text-white font-bold text-2xl mb-2">
                {steps[currentStep - 1].name}
              </h2>
              <p className="text-[#A0A0A5] mb-8">
                {steps[currentStep - 1].description}
              </p>

              <div className="space-y-6">
                {/* Etapa 1: Contato */}
                {currentStep === 1 && (
                  <>
                    <div>
                      <label className="block text-white font-bold mb-3">Nome</label>
                      <div className="relative group">
                        <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#A0A0A5] group-focus-within:text-[#9810FA] transition-colors" />
                        <input
                          type="text"
                          placeholder="Digite seu nome completo"
                          value={formData.nome}
                          onChange={(e) => handleInputChange('nome', e.target.value)}
                          className={`
                            w-full pl-12 pr-4 py-4 bg-[rgba(255,255,255,0.03)] border rounded-xl text-white placeholder:text-[#666]
                            focus:outline-none focus:border-[#9810FA] focus:bg-[rgba(152,16,250,0.05)]
                            transition-all
                            ${errors.nome ? 'border-red-500' : 'border-[rgba(255,255,255,0.1)]'}
                          `}
                        />
                      </div>
                      {errors.nome && (
                        <motion.p 
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          className="text-red-400 text-sm mt-2"
                        >
                          Digite seu nome completo (mínimo 3 caracteres)
                        </motion.p>
                      )}
                    </div>

                    <div>
                      <label className="block text-white font-bold mb-3">Telefone</label>
                      <div className="relative group">
                        <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#A0A0A5] group-focus-within:text-[#9810FA] transition-colors" />
                        <input
                          type="tel"
                          placeholder="(00) 00000-0000"
                          value={formData.telefone}
                          onChange={(e) => handleInputChange('telefone', e.target.value)}
                          className={`
                            w-full pl-12 pr-4 py-4 bg-[rgba(255,255,255,0.03)] border rounded-xl text-white placeholder:text-[#666]
                            focus:outline-none focus:border-[#9810FA] focus:bg-[rgba(152,16,250,0.05)]
                            transition-all
                            ${errors.telefone ? 'border-red-500' : 'border-[rgba(255,255,255,0.1)]'}
                          `}
                        />
                      </div>
                      {errors.telefone && (
                        <motion.p 
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          className="text-red-400 text-sm mt-2"
                        >
                          Digite um telefone válido. Exemplo: (11) 98765-4321
                        </motion.p>
                      )}
                    </div>

                    <div>
                      <label className="block text-white font-bold mb-3">E-mail</label>
                      <div className="relative group">
                        <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#A0A0A5] group-focus-within:text-[#9810FA] transition-colors" />
                        <input
                          type="email"
                          placeholder="seu@email.com"
                          value={formData.email}
                          onChange={(e) => handleInputChange('email', e.target.value)}
                          className={`
                            w-full pl-12 pr-4 py-4 bg-[rgba(255,255,255,0.03)] border rounded-xl text-white placeholder:text-[#666]
                            focus:outline-none focus:border-[#9810FA] focus:bg-[rgba(152,16,250,0.05)]
                            transition-all
                            ${errors.email ? 'border-red-500' : 'border-[rgba(255,255,255,0.1)]'}
                          `}
                        />
                      </div>
                      {errors.email && (
                        <motion.p 
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          className="text-red-400 text-sm mt-2"
                        >
                          Insira um e-mail válido. Exemplo: exemplo@email.com
                        </motion.p>
                      )}
                    </div>
                  </>
                )}

                {/* Etapa 2: Experiência */}
                {currentStep === 2 && (
                  <>
                    <p className="text-[#C0C0C5] mb-4">Se sim, em qual segmento? (Múltipla escolha)</p>
                    <div className="grid sm:grid-cols-2 gap-4">
                      {segmentosOptions.map((segmento) => {
                        const isSelected = formData.segmentos.includes(segmento.value);
                        
                        return (
                          <motion.button
                            key={segmento.value}
                            onClick={() => toggleSegmento(segmento.value)}
                            className={`
                              relative p-5 rounded-xl border-2 transition-all text-left
                              ${isSelected 
                                ? 'bg-[rgba(152,16,250,0.15)] border-[#9810FA]' 
                                : 'bg-[rgba(255,255,255,0.03)] border-[rgba(255,255,255,0.1)]'
                              }
                            `}
                            whileHover={{ scale: 1.02, y: -2 }}
                            whileTap={{ scale: 0.98 }}
                          >
                            <div className="relative flex items-center gap-3">
                              <div className={`
                                flex-shrink-0 w-10 h-10 rounded-lg flex items-center justify-center
                                ${isSelected ? 'bg-[rgba(152,16,250,0.3)]' : 'bg-[rgba(255,255,255,0.05)]'}
                              `}>
                                <div className={`w-3 h-3 rounded ${isSelected ? 'bg-[#9810FA]' : 'bg-[#666]'}`} />
                              </div>
                              <span className={`font-bold ${isSelected ? 'text-white' : 'text-[#A0A0A5]'}`}>
                                {segmento.label}
                              </span>
                              {isSelected && (
                                <motion.div
                                  initial={{ scale: 0 }}
                                  animate={{ scale: 1 }}
                                  className="ml-auto"
                                >
                                  <CheckCircle className="w-5 h-5 text-[#9810FA]" />
                                </motion.div>
                              )}
                            </div>
                          </motion.button>
                        );
                      })}
                    </div>
                    {errors.segmentos && (
                      <motion.p 
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-red-400 text-sm mt-4"
                      >
                        Selecione pelo menos um segmento
                      </motion.p>
                    )}
                  </>
                )}

                {/* Etapa 3: Faturamento */}
                {currentStep === 3 && (
                  <>
                    <div>
                      <label className="block text-white font-bold mb-3">Faturamento médio mensal</label>
                      <div className="space-y-3">
                        {[
                          { value: 'menos-100k', label: 'Menos de 100 mil' },
                          { value: '100k-500k', label: 'Entre 100 mil a 500 mil' },
                          { value: '1m-5m', label: 'Entre 1 milhão e 5 milhões' },
                          { value: '5m-10m', label: 'Entre 5 milhões e 10 milhões' },
                          { value: 'acima-10m', label: 'Acima de 10 milhões' }
                        ].map((option) => {
                          const isSelected = formData.faturamento === option.value;
                          
                          return (
                            <motion.button
                              key={option.value}
                              onClick={() => handleInputChange('faturamento', option.value)}
                              className={`
                                relative w-full p-4 rounded-xl border-2 transition-all text-left
                                ${isSelected 
                                  ? 'bg-[rgba(152,16,250,0.15)] border-[#9810FA]' 
                                  : 'bg-[rgba(255,255,255,0.03)] border-[rgba(255,255,255,0.1)]'
                                }
                              `}
                              whileHover={{ scale: 1.01, x: 5 }}
                              whileTap={{ scale: 0.99 }}
                            >
                              <div className="relative flex items-center justify-between">
                                <span className={`font-bold ${isSelected ? 'text-white' : 'text-[#A0A0A5]'}`}>
                                  {option.label}
                                </span>
                                <div className={`
                                  w-5 h-5 rounded-full border-2 flex items-center justify-center
                                  ${isSelected ? 'border-[#9810FA] bg-[#9810FA]' : 'border-[rgba(255,255,255,0.2)]'}
                                `}>
                                  {isSelected && (
                                    <motion.div
                                      initial={{ scale: 0 }}
                                      animate={{ scale: 1 }}
                                      className="w-2 h-2 rounded-full bg-white"
                                    />
                                  )}
                                </div>
                              </div>
                            </motion.button>
                          );
                        })}
                      </div>
                      {errors.faturamento && (
                        <motion.p 
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          className="text-red-400 text-sm mt-3"
                        >
                          Selecione uma faixa de faturamento
                        </motion.p>
                      )}
                    </div>
                  </>
                )}

                {/* Etapa 4: Objetivo */}
                {currentStep === 4 && (
                  <>
                    <div className="space-y-4">
                      {objetivosOptions.map((option) => {
                        const isSelected = formData.objetivo === option.value;
                        
                        return (
                          <motion.button
                            key={option.value}
                            onClick={() => handleInputChange('objetivo', option.value)}
                            className={`
                              relative w-full p-5 rounded-xl border-2 transition-all text-left
                              ${isSelected 
                                ? 'bg-[rgba(152,16,250,0.15)] border-[#9810FA]' 
                                : 'bg-[rgba(255,255,255,0.03)] border-[rgba(255,255,255,0.1)]'
                              }
                            `}
                            whileHover={{ scale: 1.01, y: -2 }}
                            whileTap={{ scale: 0.99 }}
                          >
                            <div className="relative flex items-start justify-between gap-4">
                              <div className="flex-1">
                                <h3 className={`font-bold mb-1 ${isSelected ? 'text-white' : 'text-[#A0A0A5]'}`}>
                                  {option.label}
                                </h3>
                                <p className="text-[#666] text-sm">
                                  {option.description}
                                </p>
                              </div>
                              <div className={`
                                flex-shrink-0 w-6 h-6 rounded-full border-2 flex items-center justify-center
                                ${isSelected ? 'border-[#9810FA] bg-[#9810FA]' : 'border-[rgba(255,255,255,0.2)]'}
                              `}>
                                {isSelected && (
                                  <motion.div
                                    initial={{ scale: 0 }}
                                    animate={{ scale: 1 }}
                                    className="w-3 h-3 rounded-full bg-white"
                                  />
                                )}
                              </div>
                            </div>
                          </motion.button>
                        );
                      })}
                    </div>

                    {/* Campo de texto adicional - OPCIONAL */}
                    <div className="mt-6">
                      <label className="block mb-2">
                        <span className="text-[#A0A0A5] text-sm">
                          Descreva melhor seu objetivo{' '}
                          <span className="text-[#666] italic">(opcional)</span>
                        </span>
                      </label>
                      <textarea
                        value={formData.objetivo || ''}
                        onChange={(e) => handleInputChange('objetivo', e.target.value)}
                        placeholder="Ex: Quero oferecer pagamentos para meus clientes com minha própria marca..."
                        className="w-full px-4 py-3 bg-[rgba(255,255,255,0.03)] border-2 border-[rgba(255,255,255,0.1)] rounded-xl text-white placeholder:text-[#666] focus:outline-none focus:border-[#9810FA] transition-all resize-none"
                        rows={4}
                      />
                    </div>

                    {errors.objetivo && (
                      <motion.p 
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-red-400 text-sm mt-4"
                      >
                        Selecione um objetivo
                      </motion.p>
                    )}
                  </>
                )}
              </div>

              {/* Error message */}
              {hasErrors && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mt-6 px-4 py-3 bg-red-500/10 border border-red-500/30 rounded-xl flex items-center gap-3"
                >
                  <div className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
                  <p className="text-red-400 text-sm">Preencha todos os campos obrigatórios corretamente</p>
                </motion.div>
              )}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Footer buttons */}
        <div className="px-6 sm:px-12 py-6 border-t border-[rgba(152,16,250,0.2)] flex items-center justify-between gap-4">
          <motion.button
            onClick={handleBack}
            className="relative group flex items-center gap-2 px-6 py-3 rounded-xl bg-[rgba(255,255,255,0.03)] border border-[rgba(255,255,255,0.1)] text-white font-bold overflow-hidden"
            whileHover={{ scale: 1.02, x: -5 }}
            whileTap={{ scale: 0.98 }}
          >
            <ArrowLeft className="w-5 h-5 relative z-10" />
            <span className="hidden sm:inline relative z-10">Voltar</span>
          </motion.button>

          <motion.button
            onClick={handleNext}
            className="relative group flex items-center gap-2 px-8 py-3 rounded-xl text-white font-bold overflow-hidden border border-[rgba(152,16,250,0.6)]"
            style={{
              background: 'rgba(152,16,250,0.25)'
            }}
            whileHover={{ 
              scale: 1.05,
              boxShadow: '0 0 30px rgba(152,16,250,0.4)'
            }}
            whileTap={{ scale: 0.98 }}
          >
            {/* Hover gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#9810FA]/40 to-[#7a0dd4]/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            
            <span className="relative z-10">{currentStep === 4 ? 'Finalizar' : 'Continuar'}</span>
            <ArrowRight className="w-5 h-5 relative z-10" />
          </motion.button>
        </div>
      </motion.div>
    </div>
  );
}