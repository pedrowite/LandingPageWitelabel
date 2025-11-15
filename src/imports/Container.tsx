import svgPaths from "./svg-x5t0p7abwq";
import imgImageWiteLabel from "figma:asset/bb3f1e4d91d8cb4b6e7deebe33fca6227219583d.png";

function Support() {
  return (
    <div className="h-[20px] overflow-clip relative shrink-0 w-full" data-name="Support">
      <div className="absolute bottom-1/4 left-[37.5%] right-[37.5%] top-1/4" data-name="Vector">
        <div className="absolute inset-[-5.89%_-11.79%_-5.89%_-23.57%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7 12">
            <path d={svgPaths.pf367b00} id="Vector" stroke="var(--stroke-0, #8696A0)" strokeWidth="1.66667" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Button() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-0 size-[20px] top-[10px]" data-name="Button">
      <Support />
    </div>
  );
}

function Heading() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="Heading 4">
      <p className="absolute font-['Plus_Jakarta_Sans:SemiBold',sans-serif] leading-[20px] left-0 not-italic text-[14px] text-nowrap text-white top-0 whitespace-pre">WiteLabel x Sua empresa</p>
    </div>
  );
}

function Text() {
  return (
    <div className="absolute content-stretch flex h-[16px] items-start left-0 top-0 w-[10.734px]" data-name="Text">
      <p className="font-['Plus_Jakarta_Sans:Regular',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#00c950] text-[12px] text-nowrap whitespace-pre">●</p>
    </div>
  );
}

function Paragraph() {
  return (
    <div className="h-[16px] relative shrink-0 w-full" data-name="Paragraph">
      <Text />
      <p className="absolute font-['Plus_Jakarta_Sans:Regular',sans-serif] leading-[16px] left-[14.73px] not-italic text-[#8696a0] text-[12px] text-nowrap top-[-1px] whitespace-pre">Você, Carlos, Ana +3</p>
    </div>
  );
}

function Container() {
  return (
    <div className="absolute content-stretch flex flex-col h-[36px] items-start left-[84px] top-[2px] w-[168.625px]" data-name="Container">
      <Heading />
      <Paragraph />
    </div>
  );
}

function Container1() {
  return <div className="absolute bg-gradient-to-b blur-lg filter from-[#ffffff] left-0 opacity-0 rounded-[3.35544e+07px] size-[40px] to-[#ffffff] top-0 via-50% via-[#fed5a7]" data-name="Container" />;
}

function ImageWiteLabel() {
  return (
    <div className="absolute left-0 rounded-[3.35544e+07px] size-[40px] top-0" data-name="Image (WiteLabel)">
      <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none rounded-[3.35544e+07px] size-full" src={imgImageWiteLabel} />
    </div>
  );
}

function Navbar() {
  return (
    <div className="absolute left-0 size-[40px] top-0" data-name="Navbar">
      <Container1 />
      <ImageWiteLabel />
    </div>
  );
}

function Container2() {
  return (
    <div className="absolute bg-[#00c950] left-[30px] rounded-[3.35544e+07px] size-[12px] top-[30px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-2 border-[#1f2c33] border-solid inset-0 pointer-events-none rounded-[3.35544e+07px]" />
    </div>
  );
}

function Container3() {
  return (
    <div className="absolute left-[32px] size-[40px] top-0" data-name="Container">
      <Navbar />
      <Container2 />
    </div>
  );
}

function Container4() {
  return (
    <div className="h-[40px] relative shrink-0 w-[252.625px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[40px] relative w-[252.625px]">
        <Button />
        <Container />
        <Container3 />
      </div>
    </div>
  );
}

function Support1() {
  return (
    <div className="h-[18px] overflow-clip relative shrink-0 w-full" data-name="Support">
      <div className="absolute inset-[45.83%]" data-name="Vector">
        <div className="absolute inset-[-50%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3 3">
            <path d={svgPaths.p216ece80} id="Vector" stroke="var(--stroke-0, #8696A0)" strokeWidth="1.5" />
          </svg>
        </div>
      </div>
      <div className="absolute bottom-3/4 left-[45.83%] right-[45.83%] top-[16.67%]" data-name="Vector">
        <div className="absolute inset-[-50%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3 3">
            <path d={svgPaths.p216ece80} id="Vector" stroke="var(--stroke-0, #8696A0)" strokeWidth="1.5" />
          </svg>
        </div>
      </div>
      <div className="absolute bottom-[16.67%] left-[45.83%] right-[45.83%] top-3/4" data-name="Vector">
        <div className="absolute inset-[-50%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3 3">
            <path d={svgPaths.p216ece80} id="Vector" stroke="var(--stroke-0, #8696A0)" strokeWidth="1.5" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Button1() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col items-start relative size-[18px]">
        <Support1 />
      </div>
    </div>
  );
}

function Container5() {
  return (
    <div className="content-stretch flex h-[40px] items-center justify-between relative shrink-0 w-full" data-name="Container">
      <Container4 />
      <Button1 />
    </div>
  );
}

function Container6() {
  return (
    <div className="absolute bg-[#1f2c33] box-border content-stretch flex flex-col h-[84px] items-start left-[14px] pb-0 pt-[32px] px-[16px] rounded-tl-[40px] rounded-tr-[40px] top-[14px] w-[420px]" data-name="Container">
      <Container5 />
    </div>
  );
}

function Text1() {
  return (
    <div className="content-stretch flex h-[15px] items-start relative shrink-0 w-full" data-name="Text">
      <p className="font-['Plus_Jakarta_Sans:Regular',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#8696a0] text-[12px] text-nowrap whitespace-pre">HOJE</p>
    </div>
  );
}

function Container7() {
  return (
    <div className="absolute bg-[#1f2c33] box-border content-stretch flex flex-col h-[32px] items-start left-[182.34px] pb-0 pt-[10px] px-[12px] rounded-[10px] top-[24px] w-[55.313px]" data-name="Container">
      <Text1 />
    </div>
  );
}

function Paragraph1() {
  return (
    <div className="absolute content-stretch flex h-[16px] items-start left-[12px] top-[8px] w-[286.391px]" data-name="Paragraph">
      <p className="basis-0 font-['Plus_Jakarta_Sans:SemiBold',sans-serif] grow leading-[16px] min-h-px min-w-px not-italic relative shrink-0 text-[#00c950] text-[12px]">Carlos (Suporte Técnico)</p>
    </div>
  );
}

function Paragraph2() {
  return (
    <div className="absolute h-[40px] left-[12px] top-[28px] w-[286.391px]" data-name="Paragraph">
      <p className="absolute font-['Plus_Jakarta_Sans:Regular',sans-serif] leading-[20px] left-0 not-italic text-[14px] text-white top-0 w-[229px]">Oi! Bem-vindo ao grupo da equipe WiteLabel 👋</p>
    </div>
  );
}

function Text2() {
  return (
    <div className="absolute content-stretch flex h-[12px] items-start left-[12px] top-[80px] w-[24.969px]" data-name="Text">
      <p className="font-['Plus_Jakarta_Sans:Regular',sans-serif] leading-[15px] not-italic relative shrink-0 text-[#8696a0] text-[10px] text-nowrap whitespace-pre">14:32</p>
    </div>
  );
}

function Container8() {
  return (
    <div className="absolute bg-[#1f2c33] h-[104px] left-0 rounded-bl-[14px] rounded-br-[14px] rounded-tr-[14px] shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)] top-0 w-[310.391px]" data-name="Container">
      <Paragraph1 />
      <Paragraph2 />
      <Text2 />
    </div>
  );
}

function Paragraph3() {
  return (
    <div className="absolute content-stretch flex h-[16px] items-start left-[12px] top-[8px] w-[286.391px]" data-name="Paragraph">
      <p className="basis-0 font-['Plus_Jakarta_Sans:SemiBold',sans-serif] grow leading-[16px] min-h-px min-w-px not-italic relative shrink-0 text-[#00c950] text-[12px]">Ana (Estratégia)</p>
    </div>
  );
}

function Paragraph4() {
  return (
    <div className="absolute h-[40px] left-[12px] top-[28px] w-[286.391px]" data-name="Paragraph">
      <p className="absolute font-['Plus_Jakarta_Sans:Regular',sans-serif] leading-[20px] left-0 not-italic text-[14px] text-white top-0 w-[246px]">Qualquer dúvida sobre integração ou configuração, estamos aqui! 🚀</p>
    </div>
  );
}

function Text3() {
  return (
    <div className="absolute content-stretch flex h-[12px] items-start left-[12px] top-[80px] w-[25.063px]" data-name="Text">
      <p className="font-['Plus_Jakarta_Sans:Regular',sans-serif] leading-[15px] not-italic relative shrink-0 text-[#8696a0] text-[10px] text-nowrap whitespace-pre">14:33</p>
    </div>
  );
}

function Container9() {
  return (
    <div className="absolute bg-[#1f2c33] h-[104px] left-0 rounded-bl-[14px] rounded-br-[14px] rounded-tr-[14px] shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)] top-[116px] w-[310.391px]" data-name="Container">
      <Paragraph3 />
      <Paragraph4 />
      <Text3 />
    </div>
  );
}

function Paragraph5() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Plus_Jakarta_Sans:Regular',sans-serif] leading-[20px] left-0 not-italic text-[14px] text-nowrap text-white top-0 whitespace-pre">Perfeito! Como faço o setup inicial?</p>
    </div>
  );
}

function Text4() {
  return (
    <div className="h-[15px] relative shrink-0 w-[25.266px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[15px] relative w-[25.266px]">
        <p className="absolute font-['Plus_Jakarta_Sans:Regular',sans-serif] leading-[15px] left-0 not-italic text-[#a5c9c1] text-[10px] text-nowrap top-0 whitespace-pre">14:34</p>
      </div>
    </div>
  );
}

function Icon() {
  return (
    <div className="h-[10px] relative shrink-0 w-[16px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 10">
        <g id="Icon">
          <path d={svgPaths.p34355c00} fill="var(--fill-0, #00C950)" id="Vector" />
          <path d={svgPaths.p377cec00} fill="var(--fill-0, #00C950)" id="Vector_2" />
        </g>
      </svg>
    </div>
  );
}

function Container10() {
  return (
    <div className="content-stretch flex gap-[4px] h-[15px] items-center justify-end relative shrink-0 w-full" data-name="Container">
      <Text4 />
      <Icon />
    </div>
  );
}

function Container11() {
  return (
    <div className="absolute bg-[#005c4b] box-border content-stretch flex flex-col gap-[4px] h-[55px] items-start left-[130.42px] pb-0 pt-[8px] px-[12px] rounded-bl-[14px] rounded-br-[14px] rounded-tl-[14px] shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)] top-[232px] w-[257.578px]" data-name="Container">
      <Paragraph5 />
      <Container10 />
    </div>
  );
}

function Paragraph6() {
  return (
    <div className="absolute content-stretch flex h-[16px] items-start left-[12px] top-[8px] w-[282.797px]" data-name="Paragraph">
      <p className="basis-0 font-['Plus_Jakarta_Sans:SemiBold',sans-serif] grow leading-[16px] min-h-px min-w-px not-italic relative shrink-0 text-[#00c950] text-[12px]">Carlos (Suporte Técnico)</p>
    </div>
  );
}

function Paragraph7() {
  return (
    <div className="absolute h-[20px] left-[12px] top-[28px] w-[282.797px]" data-name="Paragraph">
      <p className="absolute font-['Plus_Jakarta_Sans:Regular',sans-serif] leading-[20px] left-0 not-italic text-[14px] text-nowrap text-white top-0 whitespace-pre">Vou te enviar o passo a passo completo! 📋</p>
    </div>
  );
}

function Text5() {
  return (
    <div className="absolute content-stretch flex h-[12px] items-start left-[12px] top-[60px] w-[25.266px]" data-name="Text">
      <p className="font-['Plus_Jakarta_Sans:Regular',sans-serif] leading-[15px] not-italic relative shrink-0 text-[#8696a0] text-[10px] text-nowrap whitespace-pre">14:34</p>
    </div>
  );
}

function Container12() {
  return (
    <div className="absolute bg-[#1f2c33] h-[84px] left-0 rounded-bl-[14px] rounded-br-[14px] rounded-tr-[14px] shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)] top-[299px] w-[306.797px]" data-name="Container">
      <Paragraph6 />
      <Paragraph7 />
      <Text5 />
    </div>
  );
}

function Container13() {
  return (
    <div className="bg-[#8696a0] opacity-[0.898] relative rounded-[3.35544e+07px] shrink-0 size-[8px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border size-[8px]" />
    </div>
  );
}

function Container14() {
  return (
    <div className="bg-[#8696a0] opacity-[0.832] relative rounded-[3.35544e+07px] shrink-0 size-[8px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border size-[8px]" />
    </div>
  );
}

function Container15() {
  return (
    <div className="basis-0 bg-[#8696a0] grow h-[8px] min-h-px min-w-px opacity-[0.528] relative rounded-[3.35544e+07px] shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[8px] w-full" />
    </div>
  );
}

function Container16() {
  return (
    <div className="content-stretch flex gap-[6px] h-[8px] items-start relative shrink-0 w-full" data-name="Container">
      <Container13 />
      <Container14 />
      <Container15 />
    </div>
  );
}

function Container17() {
  return (
    <div className="absolute bg-[#1f2c33] box-border content-stretch flex flex-col h-[32px] items-start left-0 pb-0 pt-[12px] px-[16px] rounded-bl-[14px] rounded-br-[14px] rounded-tr-[14px] shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)] top-[395px] w-[68px]" data-name="Container">
      <Container16 />
    </div>
  );
}

function Container18() {
  return (
    <div className="absolute h-[427px] left-[16px] top-[72px] w-[388px]" data-name="Container">
      <Container8 />
      <Container9 />
      <Container11 />
      <Container12 />
      <Container17 />
    </div>
  );
}

function Container19() {
  return (
    <div className="absolute bg-[#0b141a] h-[523px] left-[14px] top-[98px] w-[420px]" data-name="Container">
      <Container7 />
      <Container18 />
    </div>
  );
}

function Icon1() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g clipPath="url(#clip0_38_5140)" id="Icon">
          <path d={svgPaths.p14d24500} id="Vector" stroke="var(--stroke-0, #8696A0)" strokeWidth="1.66667" />
          <path d={svgPaths.p312228b0} id="Vector_2" stroke="var(--stroke-0, #8696A0)" strokeLinecap="round" strokeWidth="1.66667" />
        </g>
        <defs>
          <clipPath id="clip0_38_5140">
            <rect fill="white" height="20" width="20" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Container20() {
  return (
    <div className="basis-0 grow h-[20px] min-h-px min-w-px relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[20px] relative w-full">
        <p className="absolute font-['Plus_Jakarta_Sans:Regular',sans-serif] leading-[20px] left-0 not-italic text-[#8696a0] text-[14px] text-nowrap top-0 whitespace-pre">Mensagem</p>
      </div>
    </div>
  );
}

function Icon2() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon">
          <path d={svgPaths.p7d05600} id="Vector" stroke="var(--stroke-0, #8696A0)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function Container21() {
  return (
    <div className="bg-[#2a3942] h-[40px] relative rounded-[3.35544e+07px] shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[8px] h-[40px] items-center px-[16px] py-0 relative w-full">
          <Icon1 />
          <Container20 />
          <Icon2 />
        </div>
      </div>
    </div>
  );
}

function Container22() {
  return (
    <div className="absolute bg-[#1f2c33] box-border content-stretch flex flex-col h-[64px] items-start left-[14px] pb-0 pt-[12px] px-[16px] rounded-bl-[40px] rounded-br-[40px] top-[621px] w-[420px]" data-name="Container">
      <Container21 />
    </div>
  );
}

function Container23() {
  return <div className="absolute bg-[#0d141a] h-[28px] left-[160px] rounded-bl-[24px] rounded-br-[24px] top-[2px] w-[128px]" data-name="Container" />;
}

function Container24() {
  return (
    <div className="absolute bg-[#0d141a] h-[699px] left-0 rounded-[48px] top-0 w-[448px]" data-name="Container">
      <div className="h-[699px] overflow-clip relative rounded-[inherit] w-[448px]">
        <Container6 />
        <Container19 />
        <Container22 />
        <Container23 />
      </div>
      <div aria-hidden="true" className="absolute border-2 border-[rgba(255,255,255,0.1)] border-solid inset-0 pointer-events-none rounded-[48px] shadow-[0px_0px_50px_0px_rgba(0,201,80,0.25)]" />
    </div>
  );
}

function Container25() {
  return <div className="absolute bg-[#00c950] blur-xl filter h-[76px] left-0 opacity-60 rounded-[16px] top-0 w-[121.172px]" data-name="Container" />;
}

function Icon3() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g clipPath="url(#clip0_38_5144)" id="Icon">
          <path d={svgPaths.p2df3ad80} fill="var(--fill-0, #00C950)" id="Vector" />
        </g>
        <defs>
          <clipPath id="clip0_38_5144">
            <rect fill="white" height="24" width="24" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Container26() {
  return (
    <div className="basis-0 bg-white grow h-[40px] min-h-px min-w-px relative rounded-[14px] shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-[40px] items-center justify-center relative w-full">
        <Icon3 />
      </div>
    </div>
  );
}

function Paragraph8() {
  return (
    <div className="h-[14px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Plus_Jakarta_Sans:Bold',sans-serif] leading-[14px] left-0 not-italic text-[20px] text-nowrap text-white top-0 whitespace-pre">24/7</p>
    </div>
  );
}

function Paragraph9() {
  return (
    <div className="h-[12px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Plus_Jakarta_Sans:Regular',sans-serif] leading-[12px] left-0 not-italic text-[12px] text-[rgba(255,255,255,0.8)] text-nowrap top-[-1px] whitespace-pre">Online</p>
    </div>
  );
}

function Container27() {
  return (
    <div className="h-[40px] relative shrink-0 w-[37px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col h-[40px] items-start justify-between relative w-[37px]">
        <Paragraph8 />
        <Paragraph9 />
      </div>
    </div>
  );
}

function Container28() {
  return (
    <div className="absolute content-stretch flex gap-[8px] h-[40px] items-center left-[18px] top-[18px] w-[85.172px]" data-name="Container">
      <Container26 />
      <Container27 />
    </div>
  );
}

function Container29() {
  return (
    <div className="bg-[#00c950] opacity-[0.72] relative rounded-[3.35544e+07px] shrink-0 size-[8px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border size-[8px]" />
    </div>
  );
}

function Container30() {
  return (
    <div className="absolute bg-white content-stretch flex items-center justify-center left-[132px] rounded-[3.35544e+07px] size-[16px] top-[-2px]" data-name="Container">
      <Container29 />
    </div>
  );
}

function Container31() {
  return (
    <div className="absolute bg-gradient-to-b from-[#00c950] h-[76px] left-[-26.83px] rounded-[16px] to-[#00bc7d] top-[0.02px] w-[148px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-2 border-solid border-white inset-0 pointer-events-none rounded-[16px] shadow-[0px_25px_50px_-12px_rgba(0,0,0,0.25)]" />
      <Container28 />
      <Container30 />
    </div>
  );
}

function Container32() {
  return (
    <div className="absolute h-[76px] left-[350.83px] top-[-25.27px] w-[121.172px]" data-name="Container">
      <Container25 />
      <Container31 />
    </div>
  );
}

export default function Container33() {
  return (
    <div className="relative size-full" data-name="Container">
      <Container24 />
      <Container32 />
    </div>
  );
}
