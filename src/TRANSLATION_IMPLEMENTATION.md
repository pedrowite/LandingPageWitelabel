# Translation Implementation Guide

## ✅ Already Implemented:

1. **Created Context System:**
   - `/contexts/LanguageContext.tsx` - Language context provider
   
2. **Created Translation Files:**
   - `/translations/pt-BR.ts` - Portuguese translations
   - `/translations/en.ts` - English translations
   - `/translations/index.ts` - Translations export

3. **Updated App.tsx:**
   - Wrapped with `<LanguageProvider>`
   - All routes now support translations

4. **Updated Footer:**
   - Uses `useLanguage()` hook
   - Language selector with flags 🇧🇷 🇺🇸
   - One translation applied: `t.footer.description`

## 🔧 To Complete Implementation:

### Apply translations to Footer.tsx:

```tsx
// Navigation title
<h4>{t.footer.navigation}</h4>

// Navigation items
const navItems = [
  { label: t.footer.nav.howItWorks, id: 'como-funciona' },
  { label: t.footer.nav.revenue, id: 'receita' },
  { label: t.footer.nav.app, id: 'app' },
  { label: t.footer.nav.integrations, id: 'integracoes' },
  { label: t.footer.nav.support, id: 'suporte' },
  { label: t.footer.nav.security, id: 'seguranca' }
];

// Contact title
<h4>{t.footer.contact}</h4>

// Legal links
const legalItems = [t.footer.legal.terms, t.footer.legal.privacy, t.footer.legal.cookies];

// Copyright
<p>© {currentYear} {t.footer.copyright}</p>
```

### Update all component files to use translations:

1. Import hook: `import { useLanguage } from '../contexts/LanguageContext';`
2. Use hook: `const { t } = useLanguage();`
3. Replace hardcoded text with: `{t.section.key}`

### Components that need translation updates:

- `/components/Hero.tsx` → `t.hero.*`
- `/components/HowItWorks.tsx` → `t.howItWorks.*`
- `/components/RevenueModels.tsx` → `t.revenue.*`
- `/components/MobileAppNew.tsx` → `t.mobileApp.*`
- `/components/WiteEcosystemNew.tsx` → `t.ecosystem.*`
- `/components/Integrations.tsx` → `t.integrations.*`
- `/components/SupportMinimal.tsx` → `t.support.*`
- `/components/Security.tsx` → `t.security.*`
- `/components/TemplateCarouselMoving.tsx` → `t.templates.*`
- `/components/FinalCTA.tsx` → `t.cta.*`
- `/Formulario.tsx` → `t.form.*`
- `/Sucesso.tsx` → `t.success.*`

## Translation Keys Structure:

Check `/translations/pt-BR.ts` for the complete structure. All keys are already defined for both PT-BR and EN.

Example for Hero component:
```tsx
const { t } = useLanguage();

<h1>{t.hero.title} <span>{t.hero.titleGradient}</span></h1>
<p>{t.hero.subtitle}</p>
<button>{t.hero.cta}</button>
```

## Language Selector Features:

✅ Flags in dropdown: 🇧🇷 🇺🇸
✅ Language state management
✅ Smooth animations
✅ Highlight active language
✅ Close on selection
✅ Responsive design
