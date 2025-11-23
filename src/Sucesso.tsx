import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { CheckCircle, ArrowRight, Home, Zap, Shield, TrendingUp, BarChart3, Clock, Users, CreditCard, Bitcoin, Building2, Repeat } from 'lucide-react';
import { ImageWithFallback } from './components/figma/ImageWithFallback';
import imgWiteLabelLogo from "figma:asset/bb3f1e4d91d8cb4b6e7deebe33fca6227219583d.png";
import witeTecLogo from 'figma:asset/1970b026f93cdcc158933fadd66255ca5224952d.png';
import witeRecuperationLogo from 'figma:asset/8de5c722d923d02ee50ac7ce4627e11b6d171631.png';
import { GoogleTagManager } from './components/GoogleTagManager';

export default function Sucesso() {
  return (
    <div className="min-h-screen bg-[#000000] flex items-center justify-center px-4 py-8 sm:py-12 relative overflow-hidden">
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

      {/* Main content */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="relative w-full max-w-6xl"
      >
        {/* Success Header */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-center mb-8 sm:mb-12"
        >
          {/* Success Icon */}
          <motion.div
            className="inline-flex items-center justify-center mb-6"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.3, type: 'spring', bounce: 0.5 }}
          >
            <div className="relative">
              {/* Icon container */}
              <div className="relative w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-gradient-to-br from-[#9810FA] to-[#C944FF] flex items-center justify-center">
                <CheckCircle className="w-10 h-10 sm:w-12 sm:h-12 text-white" strokeWidth={2.5} />
              </div>
            </div>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-white font-bold text-2xl sm:text-3xl lg:text-4xl mb-4 px-4"
          >
            Formulário enviado{' '}
            <span className="bg-gradient-to-r from-[#FFFFFF] via-[#FED5A7] to-[#FFBF77] bg-clip-text text-transparent">
              com sucesso!
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="text-[#A0A0A5] text-base sm:text-lg max-w-2xl mx-auto px-4"
          >
            Nossa equipe entrará em contato em breve. Conheça nossos outros produtos:
          </motion.p>
        </motion.div>

        {/* Upsell Cards */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="grid sm:grid-cols-2 gap-6 sm:gap-8 mb-8 sm:mb-12"
        >
          {/* WiteTec Card */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.7 }}
            className="relative group bg-[rgba(17,17,20,0.85)] rounded-2xl sm:rounded-3xl border border-[rgba(255,133,52,0.3)] overflow-hidden p-6 sm:p-8"
            style={{
              boxShadow: '0 20px 80px rgba(0,0,0,0.5), 0 0 60px rgba(255,133,52,0.15)'
            }}
            whileHover={{ y: -5, boxShadow: '0 25px 100px rgba(255,133,52,0.3)' }}
          >
            {/* Gradient overlay on hover */}
            <div className="absolute inset-0 bg-gradient-to-br from-[rgba(255,133,52,0.1)] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            
            {/* Logo + Icon */}
            <div className="relative mb-6 flex items-center gap-4">
              <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-[rgba(17,17,20,0.6)] border border-[rgba(255,133,52,0.3)] flex items-center justify-center overflow-hidden">
                <ImageWithFallback
                  src={witeTecLogo}
                  alt="WiteTec Logo"
                  className="w-full h-full object-contain p-2"
                />
              </div>
            </div>

            {/* Title */}
            <h3 className="relative text-white font-bold text-xl sm:text-2xl lg:text-3xl mb-1">
              WiteTec
            </h3>
            <p className="relative text-[#ff8534] font-bold text-sm sm:text-base mb-4">
              Subadquirência B2B
            </p>

            {/* Description */}
            <p className="relative text-[#A0A0A5] text-sm sm:text-base mb-6">
              Infraestrutura completa de pagamentos com PIX, cartão e boleto. Saque via cripto e conformidade total com Banco Central.
            </p>

            {/* Features */}
            <div className="relative space-y-3 mb-6">
              {[
                { icon: CreditCard, label: 'API de pix, cartão e boleto' },
                { icon: Bitcoin, label: 'Saque via cripto' },
                { icon: Building2, label: 'Conformidade com Banco Central' },
                { icon: Repeat, label: 'BaaS (PIX IN & OUT)' }
              ].map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.8 + index * 0.1 }}
                  className="flex items-center gap-3"
                >
                  <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-[rgba(255,133,52,0.2)] flex items-center justify-center">
                    <feature.icon className="w-4 h-4 text-[#ff8534]" />
                  </div>
                  <span className="text-[#C0C0C5] text-sm">{feature.label}</span>
                </motion.div>
              ))}
            </div>

            {/* CTA Button */}
            <motion.button
              className="relative w-full px-6 py-3 rounded-xl border border-[rgba(255,133,52,0.6)] bg-[rgba(255,133,52,0.15)] text-white font-bold text-sm sm:text-base overflow-hidden group/btn"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-[#ff8534]/30 to-[#D74B18]/30 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300" />
              <span className="relative flex items-center justify-center gap-2">
                Saiba mais sobre WiteTec
                <ArrowRight className="w-4 h-4" />
              </span>
            </motion.button>
          </motion.div>

          {/* Wite Recuperation Card */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.8 }}
            className="relative group bg-[rgba(17,17,20,0.85)] rounded-2xl sm:rounded-3xl border border-[rgba(20,184,166,0.3)] overflow-hidden p-6 sm:p-8"
            style={{
              boxShadow: '0 20px 80px rgba(0,0,0,0.5), 0 0 60px rgba(20,184,166,0.15)'
            }}
            whileHover={{ y: -5, boxShadow: '0 25px 100px rgba(20,184,166,0.3)' }}
          >
            {/* Gradient overlay on hover */}
            <div className="absolute inset-0 bg-gradient-to-br from-[rgba(20,184,166,0.1)] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            
            {/* Logo */}
            <div className="relative mb-6 flex items-center gap-4">
              <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-[rgba(17,17,20,0.6)] border border-[rgba(20,184,166,0.3)] flex items-center justify-center overflow-hidden">
                <ImageWithFallback
                  src={witeRecuperationLogo}
                  alt="Wite Recuperation Logo"
                  className="w-full h-full object-contain p-2"
                />
              </div>
            </div>

            {/* Title */}
            <h3 className="relative text-white font-bold text-xl sm:text-2xl lg:text-3xl mb-3">
              Wite Recuperation
            </h3>

            {/* Description */}
            <p className="relative text-[#A0A0A5] text-sm sm:text-base mb-6">
              Sistema inteligente de recuperação de pagamentos recusados com automação completa e aumento de até 35% na aprovação.
            </p>

            {/* Features */}
            <div className="relative space-y-3 mb-6">
              {[
                { icon: Clock, label: 'Retentativa automática em 48h' },
                { icon: Users, label: 'Comunicação personalizada' },
                { icon: TrendingUp, label: '+35% de recuperação média' }
              ].map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.9 + index * 0.1 }}
                  className="flex items-center gap-3"
                >
                  <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-[rgba(20,184,166,0.2)] flex items-center justify-center">
                    <feature.icon className="w-4 h-4 text-[#14B8A6]" />
                  </div>
                  <span className="text-[#C0C0C5] text-sm">{feature.label}</span>
                </motion.div>
              ))}
            </div>

            {/* CTA Button */}
            <motion.button
              className="relative w-full px-6 py-3 rounded-xl border border-[rgba(20,184,166,0.6)] bg-[rgba(20,184,166,0.15)] text-white font-bold text-sm sm:text-base overflow-hidden group/btn"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-[#14B8A6]/30 to-[#0D9488]/30 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300" />
              <span className="relative flex items-center justify-center gap-2">
                Saiba mais sobre Wite Recuperation
                <ArrowRight className="w-4 h-4" />
              </span>
            </motion.button>
          </motion.div>
        </motion.div>

        {/* Back to home button - Minimalista e Moderno */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2 }}
          className="text-center"
        >
          <motion.button
            onClick={() => window.location.href = '/'}
            className="group relative inline-flex items-center gap-2 sm:gap-3 px-6 sm:px-8 py-3 sm:py-4 rounded-xl overflow-hidden border border-[rgba(152,16,250,0.6)]"
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
            
            <Home className="w-4 h-4 sm:w-5 sm:h-5 relative z-10 text-white" />
            <span className="relative z-10 text-white font-bold text-sm sm:text-base lg:text-lg">
              Voltar para a Landing Page
            </span>
            <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 relative z-10 text-white group-hover:translate-x-1 transition-transform" />
          </motion.button>
        </motion.div>
      </motion.div>
    </div>
  );
}