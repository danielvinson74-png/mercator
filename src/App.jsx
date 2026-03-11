import React from 'react';

function App() {
  return (
    <div className="font-display overflow-x-hidden antialiased text-slate-100 bg-background-dark">
      {/* 1. HERO SECTION */}
<div className="relative min-h-screen w-full flex flex-col">
<div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden z-0">
<h1 className="huge-text font-black text-white/10 uppercase">ФЛОТ</h1>
</div>
<header className="relative z-50 flex items-center justify-between px-6 lg:px-16 py-8">
<div className="flex items-center gap-3">
<div className="bg-white text-marine p-2 rounded-full flex items-center justify-center">
<span className="material-symbols-outlined text-2xl">directions_boat</span>
</div>
<h2 className="text-white text-2xl font-black tracking-tighter">MERCATOR</h2>
</div>
<nav className="hidden md:flex items-center gap-10">
<a className="text-white/80 hover:text-white text-sm font-medium transition-colors" href="#">Услуги</a>
<a className="text-white/80 hover:text-white text-sm font-medium transition-colors" href="#">Флот</a>
<a className="text-white/80 hover:text-white text-sm font-medium transition-colors" href="#">Кейсы</a>
<a className="text-white/80 hover:text-white text-sm font-medium transition-colors" href="#">Контакты</a>
</nav>
<button className="border border-white/40 hover:border-white text-white px-8 py-2 rounded-full text-sm font-bold transition-all bg-white/5">
                Оставить заявку
            </button>
</header>
<main className="flex-grow flex items-center relative z-10 px-6 lg:px-16 pb-20">
<div className="max-w-7xl mx-auto w-full magazine-grid gap-12 lg:gap-20">
<div className="relative z-40">
<div className="inline-block px-4 py-1 bg-white/10 backdrop-blur-md border border-white/20 rounded-full mb-8">
<span className="text-xs font-bold uppercase tracking-[0.2em] text-primary">Direct Shipowner Access</span>
</div>
<h2 className="text-white text-5xl lg:text-[5.5rem] font-black leading-[1] mb-8 tracking-tight">
                        Устали от <br/>
<span className="text-white/40">посредников?</span><br/>
                        Ваш груз — <br/>
<span className="text-primary">наш флот.</span>
</h2>
<p className="text-white/70 text-lg lg:text-xl font-medium max-w-lg mb-10 leading-relaxed">
                        Прямое фрахтование судов из портов ДВ и ЮВА. Мы убрали лишние звенья, чтобы вы получили лучшую ставку на рынке.
                    </p>
<div className="flex flex-wrap items-center gap-6">
<button className="bg-primary text-slate-900 px-10 py-5 rounded-full text-sm font-black uppercase tracking-widest hover:scale-105 transition-transform shadow-2xl flex items-center gap-3">
<span>Рассчитать ставку</span>
<span className="material-symbols-outlined font-bold">arrow_forward</span>
</button>
<div className="flex items-center gap-3 text-white/60">
<span className="material-symbols-outlined text-primary">verified_user</span>
<span className="text-xs font-bold uppercase tracking-wider">Прямой контракт</span>
</div>
</div>
</div>
<div className="relative">
<div className="relative z-30 group">
<div className="bg-white/5 backdrop-blur-sm p-4 rounded-xl border border-white/10 shadow-2xl overflow-hidden aspect-[4/5] flex items-center justify-center">
<img alt="Massive cargo container ship" className="w-full h-full object-cover rounded-lg grayscale hover:grayscale-0 transition-all duration-700" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCzGGvXzwHp7PD5NTCj2c0TZPqDQHpj7jjVWw2XCTk7AIwzpbK2ih1XWhMXKK62I-VURg_CxZgnCLWjZtyrjkyEbWEoOr-UZeOkfpv2SRiZVuwgnJMcKneCCbLYNuW90_W55fdiL6Phgj4Qr5f6KPsGxzSMiUtNxgef-uF1GS6oGFyX75mbIzWUvqplqJ5rqW165c4Pp5H5N8prPu7SMDDaMWDaAhzjeLruhzmAnoXsPOnAz2bEgSRLSwLOpg9feKyNpARoDeqBGBH7"/>
</div>
<div className="absolute -top-6 -right-6 z-40">
<div className="bg-slate-900 text-white w-32 h-32 rounded-full flex flex-col items-center justify-center text-center p-4 border border-white/10 shadow-2xl rotate-12">
<span className="text-[8px] uppercase tracking-widest font-bold opacity-60">Logistics</span>
<span className="text-xs font-black leading-tight uppercase">Premium<br/>Carrier</span>
<span className="material-symbols-outlined text-primary text-lg mt-1 fill-1">stars</span>
</div>
</div>
<div className="absolute -bottom-4 -left-4 bg-white p-6 rounded-lg shadow-2xl max-w-[200px]">
<p className="text-marine font-black text-2xl leading-none mb-1">200+</p>
<p className="text-slate-500 text-[10px] uppercase font-bold tracking-wider leading-tight">Рейсов совершено за последний месяц</p>
</div>
</div>
<div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] border border-white/5 rounded-full"></div>
</div>
</div>
</main>
<section className="relative z-20 bg-[#003685] border-t border-white/10 py-10 px-6 lg:px-16">
<div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
<div className="flex flex-col gap-1">
<span className="text-primary font-black text-3xl">0%</span>
<p className="text-white/40 text-[10px] uppercase font-bold tracking-widest">Агентская комиссия</p>
</div>
<div className="flex flex-col gap-1">
<span className="text-white font-black text-3xl">48ч</span>
<p className="text-white/40 text-[10px] uppercase font-bold tracking-widest">Среднее время подачи</p>
</div>
<div className="flex flex-col gap-1">
<span className="text-white font-black text-3xl">15</span>
<p className="text-white/40 text-[10px] uppercase font-bold tracking-widest">Собственных судов</p>
</div>
<div className="flex flex-col gap-1">
<span className="text-white font-black text-3xl">HQ</span>
<p className="text-white/40 text-[10px] uppercase font-bold tracking-widest">Контроль погрузки</p>
</div>
</div>
</section>
<div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-primary/10 blur-[180px] rounded-full pointer-events-none"></div>
</div>

      {/* 2. TRUST SECTION */}
      <section className="relative flex h-auto min-h-screen w-full flex-col bg-marine items-center justify-center overflow-hidden py-24">
        <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-20">
          <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-white/20 blur-[120px]"></div>
          <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] rounded-full bg-primary/10 blur-[150px]"></div>
        </div>
        <div className="relative z-10 flex h-full grow flex-col w-full max-w-[1200px] px-8">
          <div className="flex flex-col items-center mb-16">
            <span className="text-white/70 uppercase tracking-widest text-sm font-bold mb-4">Наш опыт</span>
            <h2 className="text-white text-5xl md:text-7xl font-bold leading-tight tracking-tight text-center">Доверие</h2>
          </div>
          <div className="flex flex-wrap lg:flex-nowrap gap-8 items-center justify-center min-h-[500px]">
            <div className="flex-1 min-w-[300px] -translate-y-8">
              <div className="rounded-[3rem] p-10 flex flex-col gap-6 group hover:bg-white/10 transition-all duration-300" style={{ background: "rgba(255, 255, 255, 0.05)", backdropFilter: "blur(12px)", border: "1px solid rgba(255, 255, 255, 0.1)" }}>
                <div className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-primary text-3xl">sailing</span>
                  <div className="h-[1px] flex-1 bg-white/20"></div>
                </div>
                <div className="flex flex-col gap-2">
                  <h3 className="text-primary text-6xl md:text-7xl font-bold tracking-tighter">12 лет</h3>
                  <p className="text-white text-lg leading-relaxed font-medium opacity-90">
                    безаварийной работы в акваториях Тихого и Северного Ледовитого океанов.
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-white/40 text-sm font-bold tracking-widest uppercase">Reliability Index</span>
                  <span className="bg-primary/20 text-primary text-xs px-2 py-1 rounded-full font-bold">100%</span>
                </div>
              </div>
            </div>

            <div className="flex-1 min-w-[300px] translate-y-8">
              <div className="rounded-[3rem] p-10 flex flex-col gap-6 group hover:bg-white/10 transition-all duration-300" style={{ background: "rgba(255, 255, 255, 0.05)", backdropFilter: "blur(12px)", border: "1px solid rgba(255, 255, 255, 0.1)" }}>
                <div className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-primary text-3xl">schedule</span>
                  <div className="h-[1px] flex-1 bg-white/20"></div>
                </div>
                <div className="flex flex-col gap-2">
                  <h3 className="text-primary text-6xl md:text-7xl font-bold tracking-tighter">450+</h3>
                  <span className="text-primary text-2xl font-bold -mt-2">рейсов</span>
                  <p className="text-white text-lg leading-relaxed font-medium opacity-90">
                    выполнено за прошлый год с точностью соблюдения графика прихода (ETA) 96%.
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-white/40 text-sm font-bold tracking-widest uppercase">Efficiency</span>
                  <span className="bg-primary/20 text-primary text-xs px-2 py-1 rounded-full font-bold">TOP</span>
                </div>
              </div>
            </div>

            <div className="flex-1 min-w-[300px] -translate-y-8">
              <div className="rounded-[3rem] p-10 flex flex-col gap-6 group hover:bg-white/10 transition-all duration-300" style={{ background: "rgba(255, 255, 255, 0.05)", backdropFilter: "blur(12px)", border: "1px solid rgba(255, 255, 255, 0.1)" }}>
                <div className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-primary text-3xl">precision_manufacturing</span>
                  <div className="h-[1px] flex-1 bg-white/20"></div>
                </div>
                <div className="flex flex-col gap-2">
                  <h3 className="text-primary text-6xl md:text-7xl font-bold tracking-tighter">300</h3>
                  <span className="text-primary text-2xl font-bold -mt-2">тонн</span>
                  <p className="text-white text-lg leading-relaxed font-medium opacity-90">
                    грузоподъемность собственных судовых кранов, что позволяет выгружаться без ожидания очереди.
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-white/40 text-sm font-bold tracking-widest uppercase">Capabilities</span>
                  <span className="bg-primary/20 text-primary text-xs px-2 py-1 rounded-full font-bold">MAX</span>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-20 flex justify-center">
            <div className="flex items-center gap-8">
              <div className="flex -space-x-4">
                <div className="w-12 h-12 rounded-full border-4 border-marine bg-white overflow-hidden flex items-center justify-center">
                  <span className="text-2xl">🇷🇺</span>
                </div>
                <div className="w-12 h-12 rounded-full border-4 border-marine bg-white overflow-hidden flex items-center justify-center">
                  <span className="text-2xl">🇨🇳</span>
                </div>
                <div className="w-12 h-12 rounded-full border-4 border-marine bg-white overflow-hidden flex items-center justify-center">
                  <span className="text-2xl">🇦🇪</span>
                </div>
              </div>
              <p className="text-white/80 font-medium">Работаем с крупнейшими портами мира</p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. SERVICES SECTION */}
      <section className="relative min-h-screen w-full flex flex-col items-center justify-center py-24 px-6 lg:px-20 bg-background-light">
        <div className="max-w-7xl w-full mb-20 text-center">
          <div className="flex flex-col gap-4">
            <h2 className="text-5xl lg:text-7xl font-bold text-[#001B3D] tracking-tighter">
              Услуги<span className="text-orange-500">.</span>
            </h2>
            <p className="text-slate-600 max-w-xl mx-auto text-lg mt-2">
              Премиальная морская логистика с гарантией результата и полной прозрачностью на каждом этапе пути.
            </p>
          </div>
        </div>
        <div className="max-w-7xl w-full flex flex-col gap-12 z-10 text-[#001B3D]">

          <div className="flex justify-start w-full group">
            <div className="rounded-xl p-8 lg:p-12 w-full lg:w-4/5 flex flex-col lg:flex-row gap-8 items-center transition-all duration-300 hover:border-orange-400 hover:shadow-lg hover:shadow-orange-100" style={{ background: "rgba(241, 245, 249, 0.7)", backdropFilter: "blur(12px)", border: "1px solid rgba(0, 27, 61, 0.1)", boxShadow: "0 10px 30px -10px rgba(0, 0, 0, 0.05)" }}>
              <div className="flex-1 space-y-6">
                <div className="flex items-center gap-4">
                  <span className="text-orange-500/80 font-mono text-xl">01</span>
                  <h3 className="text-3xl lg:text-4xl font-bold text-orange-500 italic leading-tight">Трамповые перевозки "под ключ"</h3>
                </div>
                <p className="text-slate-700 text-xl leading-relaxed">
                  <span className="text-slate-500 block mb-2 text-sm uppercase tracking-wide">Проблема &amp; Решение</span>
                  Боль: Скрытые условия по демереджу и простою. <br />
                  <span className="text-[#001B3D] font-medium">Результат: Прозрачные чартеры с фиксированной ставкой и юридической защитой.</span>
                </p>
                <button className="group/btn flex items-center gap-2 text-[#001B3D] font-semibold hover:text-orange-500 transition-colors">
                  <span>Узнать спецификации</span>
                  <span className="material-symbols-outlined transform group-hover/btn:translate-x-1 transition-transform">arrow_forward</span>
                </button>
              </div>
              <div className="w-full lg:w-72 h-48 rounded-lg bg-cover bg-center overflow-hidden border border-slate-200" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuC4b-w6ogM2X2xrKtZJ1sH4IIkSF8TKxjbxlfEjiFqQitXr20BPZANSdmRKwsm_fwd3KahkXVHsr7EO1SMCtY_KE5phbK0jDeKNyee1c6v8h6OUQgKJJ_IiBd3fQTE973fnwq0ySdH2fXtxfS_gWPa4lm-Tbz6xosuBid_uo7CjcfKU1vNnhaPss6mkWJSuvvXd4rL3S8hIQ__ltLSfcsiKygzeqxMBxCyk3Vji5uYpJoej3Q2QDmDJV2D_qwDe_wQdaCcbOSb5Jehr')" }}>
              </div>
            </div>
          </div>

          <div className="flex justify-end w-full group">
            <div className="rounded-xl p-8 lg:p-12 w-full lg:w-4/5 flex flex-col lg:flex-row-reverse gap-8 items-center transition-all duration-300 hover:border-orange-400 hover:shadow-lg hover:shadow-orange-100" style={{ background: "rgba(241, 245, 249, 0.7)", backdropFilter: "blur(12px)", border: "1px solid rgba(0, 27, 61, 0.1)", boxShadow: "0 10px 30px -10px rgba(0, 0, 0, 0.05)" }}>
              <div className="flex-1 space-y-6 text-right lg:text-left">
                <div className="flex items-center justify-end lg:justify-start gap-4 flex-row-reverse lg:flex-row">
                  <span className="text-orange-500/80 font-mono text-xl">02</span>
                  <h3 className="text-3xl lg:text-4xl font-bold text-orange-500 italic leading-tight">Экспедирование и сюрвей в порту</h3>
                </div>
                <p className="text-slate-700 text-xl leading-relaxed">
                  <span className="text-slate-500 block mb-2 text-sm uppercase tracking-wide">Проблема &amp; Решение</span>
                  Боль: Техника приходит поврежденной. <br />
                  <span className="text-[#001B3D] font-medium">Результат: Личный контроль и 20+ фото каждого этапа погрузки.</span>
                </p>
                <div className="flex justify-end lg:justify-start">
                  <button className="group/btn flex items-center gap-2 text-[#001B3D] font-semibold hover:text-orange-500 transition-colors">
                    <span>Протоколы осмотра</span>
                    <span className="material-symbols-outlined transform group-hover/btn:translate-x-1 transition-transform">arrow_forward</span>
                  </button>
                </div>
              </div>
              <div className="w-full lg:w-72 h-48 rounded-lg bg-cover bg-center overflow-hidden border border-slate-200" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBoIi9UY6S9C3COBxgpkFtQRVheC19R6VDtVyM9aAfpqd9wywviKS2jSXhDiT_qXzt8-3bn5dKA8yGnKs5pSxzNy2UqC-kzbTIrvQsHMUGYCttlajx3wpRsgz9A6srTpeXj_o_cSA16jdseUPc8JrHpWRmVxbeYzbeFuY7Uie-3QKsfabCApEK4BzusXGId8TGm0dBghupS7Zw2ZIpzDzgax4Xi5wMhWwk7U_eigZJInFNm6t8K28YWfwyB6mS6YcH3Hwe3fxliDVJe')" }}>
              </div>
            </div>
          </div>

          <div className="flex justify-start w-full group">
            <div className="rounded-xl p-8 lg:p-12 w-full lg:w-4/5 flex flex-col lg:flex-row gap-8 items-center transition-all duration-300 hover:border-orange-400 hover:shadow-lg hover:shadow-orange-100" style={{ background: "rgba(241, 245, 249, 0.7)", backdropFilter: "blur(12px)", border: "1px solid rgba(0, 27, 61, 0.1)", boxShadow: "0 10px 30px -10px rgba(0, 0, 0, 0.05)" }}>
              <div className="flex-1 space-y-6">
                <div className="flex items-center gap-4">
                  <span className="text-orange-500/80 font-mono text-xl">03</span>
                  <h3 className="text-3xl lg:text-4xl font-bold text-orange-500 italic leading-tight">Прямой мониторинг 24/7</h3>
                </div>
                <p className="text-slate-700 text-xl leading-relaxed">
                  <span className="text-slate-500 block mb-2 text-sm uppercase tracking-wide">Проблема &amp; Решение</span>
                  Боль: Логисты молчат неделями. <br />
                  <span className="text-[#001B3D] font-medium">Результат: Ежедневный статус-репорт в мессенджер в 09:00.</span>
                </p>
                <button className="group/btn flex items-center gap-2 text-[#001B3D] font-semibold hover:text-orange-500 transition-colors">
                  <span>Пример отчета</span>
                  <span className="material-symbols-outlined transform group-hover/btn:translate-x-1 transition-transform">arrow_forward</span>
                </button>
              </div>
              <div className="w-full lg:w-72 h-48 rounded-lg bg-cover bg-center overflow-hidden border border-slate-200" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDQdLQ7prwBIAOspUHeZzkv2LH8BRCNesU9m2QU9yY6kxpLZEJzY_71-6mPQuqeXXrH4GXQCos0rVtqZTPF8Fs9mpzK0qYuK3kssdSlNrHVhO22EpLcb_4h8_g-PXFk2wc4OCyjjPxCEksAiYqZC8rYGWt-sah6k8xeV0Meu9EV92x4rDY-QAY6Rb_LA2gUrVOXsB3KU7XUer7eI4NxW3FOT8kx4wJ0Q5SDSRcr03tPetCIDBiBUvZDYigIEXbltjRD3bQnSO8gfx9A')" }}>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. FLEET & CASES SECTION */}
      <div className="relative flex min-h-[120vh] w-full flex-col items-center py-20 px-4 md:px-10 lg:px-20 overflow-hidden bg-marine">
        <div className="max-w-7xl w-full mb-20 text-white">
          <div className="flex items-center gap-4 mb-10 px-4">
            <div className="h-1 w-12 bg-primary"></div>
            <h2 className="text-primary text-3xl font-bold tracking-wider uppercase">ФЛОТ</h2>
            <span className="text-primary/40 text-xs font-mono tracking-widest uppercase ml-auto">SYSTEM_LOG: ACTIVE</span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 px-4">
            <div className="group relative bg-[#000d26] border border-primary/30 rounded-xl p-8 flex flex-col gap-6 transition-all hover:border-primary">
              <div className="flex justify-between items-start">
                <div className="p-3 rounded-lg bg-primary/10 border border-primary/20" style={{ filter: "drop-shadow(0 0 8px rgba(244, 244, 37, 0.4))" }}>
                  <span className="material-symbols-outlined text-primary text-4xl">architecture</span>
                </div>
                <span className="px-3 py-1 bg-primary text-background-dark text-[10px] font-bold rounded-full tracking-tighter">STATUS: OPERATIONAL</span>
              </div>
              <div>
                <h3 className="text-xl font-bold text-white mb-2 leading-tight">Автономность и крановое оборудование</h3>
                <p className="text-slate-400 text-sm leading-relaxed">Краны до 300 тонн. Выгрузка на необорудованный берег в экстремальных условиях.</p>
              </div>
            </div>
            <div className="group relative bg-[#000d26] border border-primary/30 rounded-xl p-8 flex flex-col gap-6 transition-all hover:border-primary">
              <div className="flex justify-between items-start">
                <div className="p-3 rounded-lg bg-primary/10 border border-primary/20" style={{ filter: "drop-shadow(0 0 8px rgba(244, 244, 37, 0.4))" }}>
                  <span className="material-symbols-outlined text-primary text-4xl">ac_unit</span>
                </div>
                <span className="px-3 py-1 bg-primary text-background-dark text-[10px] font-bold rounded-full tracking-tighter">CLASS: ARC 4</span>
              </div>
              <div>
                <h3 className="text-xl font-bold text-white mb-2 leading-tight">Ледовый класс</h3>
                <p className="text-slate-400 text-sm leading-relaxed">Класс Arc4 и выше для круглогодичной навигации по Северному морскому пути.</p>
              </div>
            </div>
            <div className="group relative bg-[#000d26] border border-primary/30 rounded-xl p-8 flex flex-col gap-6 transition-all hover:border-primary">
              <div className="flex justify-between items-start">
                <div className="p-3 rounded-lg bg-primary/10 border border-primary/20" style={{ filter: "drop-shadow(0 0 8px rgba(244, 244, 37, 0.4))" }}>
                  <span className="material-symbols-outlined text-primary text-4xl">satellite_alt</span>
                </div>
                <span className="px-3 py-1 bg-primary text-background-dark text-[10px] font-bold rounded-full tracking-tighter">SYSTEM: ACTIVE</span>
              </div>
              <div>
                <h3 className="text-xl font-bold text-white mb-2 leading-tight">Контроль ГСМ и остойчивости</h3>
                <p className="text-slate-400 text-sm leading-relaxed">Спутниковый мониторинг 24/7. Штормоустойчивость 6 баллов и выше.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-7xl w-full text-white">
          <div className="flex items-center gap-4 mb-10 px-4">
            <div className="h-1 w-12 bg-primary"></div>
            <h2 className="text-primary text-3xl font-bold tracking-wider uppercase">ЖУРНАЛ ПРОЕКТОВ</h2>
            <div className="flex-1 border-b border-primary/10 ml-4 mb-1"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 px-4">
            <div className="md:col-span-4 relative group overflow-hidden bg-[#000d26] border border-primary/10 rounded-xl p-8 min-h-[300px] flex flex-col" style={{ backgroundImage: "radial-gradient(circle at 2px 2px, rgba(244, 244, 37, 0.05) 1px, transparent 0)", backgroundSize: "24px 24px" }}>
              <div className="absolute inset-0 opacity-10 pointer-events-none flex items-center justify-center p-10">
                <span className="material-symbols-outlined text-[200px] rotate-12">directions_boat</span>
              </div>
              <div className="relative z-10 flex flex-col h-full">
                <p className="text-slate-400 text-sm font-medium uppercase tracking-widest mb-2">Логистика Чукотки</p>
                <h4 className="text-xl text-white font-bold max-w-[200px]">12 экскаваторов в Эгвекинот</h4>
                <div className="mt-auto">
                  <div className="text-primary text-6xl font-bold tracking-tighter leading-none mb-1">9 ДНЕЙ</div>
                  <div className="h-1 w-20 bg-primary/40"></div>
                </div>
              </div>
            </div>

            <div className="md:col-span-8 relative group overflow-hidden bg-[#000d26] border border-primary/10 rounded-xl p-8 min-h-[300px] flex flex-col" style={{ backgroundImage: "radial-gradient(circle at 2px 2px, rgba(244, 244, 37, 0.05) 1px, transparent 0)", backgroundSize: "24px 24px" }}>
              <div className="absolute right-0 top-0 h-full w-1/2 opacity-10 pointer-events-none flex items-center justify-center overflow-hidden">
                <span className="material-symbols-outlined text-[300px] -mr-20">language</span>
              </div>
              <div className="relative z-10 flex flex-col h-full">
                <p className="text-slate-400 text-sm font-medium uppercase tracking-widest mb-2">Экспорт в КНР</p>
                <h4 className="text-2xl text-white font-bold max-w-sm">Прямая поставка 2500 тонн рыбопродукции</h4>
                <div className="mt-auto flex items-end justify-between">
                  <div>
                    <div className="text-primary text-7xl font-bold tracking-tighter leading-none mb-1">-1.2 МЛН</div>
                    <p className="text-primary/60 text-xs font-mono italic">OPTIMIZED_LOGISTICS_SAVINGS</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 5. CONTACT & FOOTER SECTION */}
      <div className="relative min-h-screen py-24 flex flex-col justify-center items-center bg-marine-blue selection:bg-primary selection:text-background-dark">
        <main className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:py-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">

            <div className="lg:col-span-7 flex flex-col gap-12">
              <div className="space-y-6">
                <h1 className="text-5xl lg:text-7xl font-black leading-[1.1] tracking-tight text-white font-inter">
                  Получите расчет фрахта с точностью до <span className="text-primary">1%</span>
                </h1>
                <p className="text-lg lg:text-xl text-slate-300 max-w-xl leading-relaxed">
                  Профессиональный расчет стоимости морских перевозок с учетом всех портовых сборов и актуальных тарифов в режиме реального времени.
                </p>
              </div>

              <div className="relative w-full aspect-square max-w-md lg:max-w-lg group">
                <div className="absolute inset-0 bg-primary/20 rounded-full blur-3xl opacity-20 group-hover:opacity-40 transition-opacity"></div>
                <div className="relative w-full h-full rounded-xl bg-center bg-no-repeat bg-contain" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDdVViYXQeH2JvFZ179Z0MPgSdjNTN-3KexDQV9HUN5jRhOiDv7_TiAn2Pz4Hyj9Rr0TsQOaHzMf6pissW3IDdqOfqjtV3AZ7p_XSrPprs-D1FGM5MJW4b7rJ2HF5JglqJSCOv4tzTLY0fPet-Je6MpnZxc1MIBMgEuooDfvMjFf-61-_GIOyGcVbT0706RY8hr5q-Yj3tdEEUd87QhThEvl4P4jSmNSuXy0ab7Sy25Q3UMRx9mgp1lghnw7fGf8NVnWWSG8yTlLySw')" }}>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 flex flex-col">
              <div className="flex flex-col gap-5 w-full">
                <div className="space-y-4">
                  <label className="block">
                    <span className="text-sm font-medium text-slate-400 ml-2 mb-1 block uppercase tracking-wider font-inter">Имя</span>
                    <input className="w-full h-16 px-6 rounded-xl text-white placeholder:text-slate-500 outline-none transition-all focus:ring-2 focus:ring-primary/20" style={{ background: "rgba(255, 255, 255, 0.05)", backdropFilter: "blur(10px)", border: "1px solid rgba(255, 255, 255, 0.1)" }} placeholder="Иван Иванов" type="text" />
                  </label>
                  <label className="block">
                    <span className="text-sm font-medium text-slate-400 ml-2 mb-1 block uppercase tracking-wider font-inter">Телефон</span>
                    <div className="relative">
                      <span className="absolute left-6 top-1/2 -translate-y-1/2 text-slate-500 material-symbols-outlined">call</span>
                      <input className="w-full h-16 pl-14 pr-6 rounded-xl text-white placeholder:text-slate-500 outline-none transition-all focus:ring-2 focus:ring-primary/20" style={{ background: "rgba(255, 255, 255, 0.05)", backdropFilter: "blur(10px)", border: "1px solid rgba(255, 255, 255, 0.1)" }} placeholder="+7 (___) ___-__-__" type="tel" />
                    </div>
                  </label>
                  <label className="block">
                    <span className="text-sm font-medium text-slate-400 ml-2 mb-1 block uppercase tracking-wider font-inter">Параметры груза</span>
                    <div className="relative">
                      <span className="absolute left-6 top-1/2 -translate-y-1/2 text-slate-500 material-symbols-outlined">package_2</span>
                      <input className="w-full h-16 pl-14 pr-6 rounded-xl text-white placeholder:text-slate-500 outline-none transition-all focus:ring-2 focus:ring-primary/20" style={{ background: "rgba(255, 255, 255, 0.05)", backdropFilter: "blur(10px)", border: "1px solid rgba(255, 255, 255, 0.1)" }} placeholder="Вес, габариты, тип контейнера" type="text" />
                    </div>
                  </label>
                  <label className="block">
                    <span className="text-sm font-medium text-slate-400 ml-2 mb-1 block uppercase tracking-wider font-inter">Порт назначения</span>
                    <div className="relative">
                      <span className="absolute left-6 top-1/2 -translate-y-1/2 text-slate-500 material-symbols-outlined">location_on</span>
                      <input className="w-full h-16 pl-14 pr-6 rounded-xl text-white placeholder:text-slate-500 outline-none transition-all focus:ring-2 focus:ring-primary/20" style={{ background: "rgba(255, 255, 255, 0.05)", backdropFilter: "blur(10px)", border: "1px solid rgba(255, 255, 255, 0.1)" }} placeholder="Укажите город или код порта" type="text" />
                    </div>
                  </label>
                </div>
                <button className="w-full mt-4 h-20 bg-primary hover:bg-white text-marine-blue font-black text-xl uppercase tracking-widest rounded-full transition-all flex items-center justify-center gap-3 shadow-[0_0_40px_rgba(244,244,37,0.3)] hover:shadow-[0_0_60px_rgba(244,244,37,0.5)] font-inter">
                  Рассчитать фрахт
                  <span className="material-symbols-outlined font-bold">arrow_forward</span>
                </button>
                <p className="text-xs text-slate-500 text-center px-8 font-inter">
                  Нажимая на кнопку, вы соглашаетесь с условиями обработки персональных данных.
                </p>
              </div>
            </div>
          </div>
        </main>

        <footer className="w-full mt-auto mt-20 py-10 px-6 border-t border-white/5 font-inter absolute bottom-0">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="text-slate-500 text-sm">
              © 2024 Maritime Freight Solutions. Все права защищены.
            </div>
            <div className="flex flex-wrap justify-center gap-8">
              <a className="text-slate-400 hover:text-white text-sm transition-colors" href="#">Политика конфиденциальности</a>
              <a className="text-slate-400 hover:text-white text-sm transition-colors" href="#">Условия использования</a>
              <a className="text-slate-400 hover:text-white text-sm transition-colors" href="#">Лицензии</a>
            </div>
          </div>
        </footer>
      </div>

    </div>
  );
}

export default App;
