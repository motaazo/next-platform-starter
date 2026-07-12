import Link from 'next/link';

export const metadata = {
    title: 'أجنحة رواق — حيث تصبح الإقامة تجربة تليق بك'
};

const whatsappUrl = 'https://wa.me/966500000000'; // ضع رقم الواتساب الفعلي هنا

const features = [
    {
        icon: '🏙️',
        title: 'موقع استراتيجي',
        text: 'دقائق تفصلك عن أهم الوجهات والمراكز التجارية في المدينة'
    },
    {
        icon: '🛋️',
        title: 'أجنحة واسعة بتصميم عصري',
        text: 'غرفة معيشة منفصلة ومطبخ مجهّز بالكامل لإقامة تشبه بيتك'
    },
    {
        icon: '🕐',
        title: 'استقبال على مدار الساعة',
        text: 'تسجيل وصول سريع وخدمة ضيوف لا تنام، في أي وقت تصل'
    },
    {
        icon: '🧺',
        title: 'خدمات فندقية متكاملة',
        text: 'تنظيف يومي، مواقف خاصة، وواي فاي فائق السرعة'
    },
    {
        icon: '👨‍👩‍👧',
        title: 'خصوصية تامة للعائلات',
        text: 'مداخل مستقلة وأجنحة مصمّمة لراحة عائلتك وخصوصيتها'
    },
    {
        icon: '💳',
        title: 'أسعار تنافسية وحجز مرن',
        text: 'إلغاء مجاني وعروض خاصة للإقامات الطويلة'
    }
];

const suites = [
    {
        name: 'جناح رواق التنفيذي',
        desc: 'مساحة عمل أنيقة وغرفة نوم رئيسية — مثالي لرحلات الأعمال',
        price: '450',
        gradient: 'from-rawaq-navy via-[#2E4368] to-rawaq-olive'
    },
    {
        name: 'جناح رواق العائلي',
        desc: 'غرفتا نوم وصالة واسعة ومطبخ متكامل — مساحة تتسع لعائلتك',
        price: '650',
        gradient: 'from-rawaq-olive via-[#8A9B7A] to-rawaq-gold-light'
    },
    {
        name: 'جناح رواق الملكي',
        desc: 'أفخم أجنحتنا: إطلالة بانورامية وجلسة خارجية خاصة',
        price: '950',
        gradient: 'from-rawaq-gold via-[#A8823B] to-rawaq-navy'
    }
];

const testimonials = [
    {
        name: 'عبدالله المطيري',
        stars: 5,
        text: 'من أفضل الإقامات اللي جربتها. الجناح نظيف وواسع والاستقبال راقي جداً. صار خياري الدائم في كل زيارة.'
    },
    {
        name: 'نورة الشمري',
        stars: 5,
        text: 'حجزنا الجناح العائلي وكانت التجربة ممتازة — خصوصية كاملة والموقع قريب من كل شي. العيال ما ودهم يطلعون!'
    },
    {
        name: 'محمد الحربي',
        stars: 5,
        text: 'تعامل احترافي وسرعة في الرد على الواتساب. وصلت متأخر بالليل ولقيت كل شي جاهز. يستاهلون كل نجمة.'
    }
];

function Stars({ count }) {
    return <div className="text-rawaq-gold text-lg tracking-wider">{'★'.repeat(count)}</div>;
}

function CtaButton({ href, children, outline = false }) {
    return (
        <Link
            href={href}
            className={`no-underline inline-block rounded-full px-8 py-4 text-lg font-bold transition hover:scale-105 ${
                outline
                    ? 'border-2 border-rawaq-gold text-rawaq-gold hover:bg-rawaq-gold hover:text-rawaq-navy'
                    : 'bg-rawaq-gold text-rawaq-navy shadow-lg shadow-rawaq-gold/30 hover:bg-rawaq-gold-light'
            }`}
        >
            {children}
        </Link>
    );
}

export default function Page() {
    return (
        <main className="font-arabic bg-rawaq-ivory text-rawaq-charcoal">
            {/* شريط التنقل */}
            <nav className="fixed top-0 z-50 w-full bg-rawaq-navy/90 backdrop-blur border-b border-white/10">
                <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
                    <Link href="/" className="no-underline font-arabic-display text-3xl font-extrabold text-rawaq-gold">
                        رواق
                    </Link>
                    <ul className="hidden items-center gap-8 text-white md:flex">
                        {[
                            ['الأجنحة', '#suites'],
                            ['المميزات', '#features'],
                            ['الموقع', '#location'],
                            ['تواصل معنا', '#contact']
                        ].map(([label, href]) => (
                            <li key={href}>
                                <a href={href} className="no-underline transition hover:text-rawaq-gold-light">
                                    {label}
                                </a>
                            </li>
                        ))}
                    </ul>
                    <a
                        href="#contact"
                        className="no-underline rounded-full bg-rawaq-gold px-6 py-2 font-bold text-rawaq-navy transition hover:bg-rawaq-gold-light"
                    >
                        احجز الآن
                    </a>
                </div>
            </nav>

            {/* قسم البطل */}
            <section className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-rawaq-navy px-6 pt-24 text-center">
                <div
                    className="pointer-events-none absolute inset-0 opacity-40"
                    style={{
                        backgroundImage:
                            'radial-gradient(ellipse 60% 40% at 70% 20%, rgba(201,162,39,0.25), transparent), radial-gradient(ellipse 50% 50% at 20% 80%, rgba(107,127,94,0.3), transparent)'
                    }}
                />
                <div className="relative z-10 max-w-3xl">
                    <p className="mb-4 font-bold tracking-widest text-rawaq-gold-light">أجنحة فندقية فاخرة</p>
                    <h1 className="font-arabic-display mb-6 text-4xl font-extrabold leading-tight text-white md:text-6xl">
                        رواق… حيث تصبح الإقامة{' '}
                        <span className="text-rawaq-gold">تجربة تليق بك</span>
                    </h1>
                    <p className="mx-auto mb-10 max-w-2xl text-lg leading-relaxed text-white/80 md:text-xl">
                        أجنحة فندقية فاخرة تجمع بين خصوصية المنزل ورفاهية الفندق — لإقامة لا تشبه إلا ذوقك.
                    </p>
                    <div className="flex flex-wrap items-center justify-center gap-4">
                        <CtaButton href="#contact">احجز الآن — خصم 15% على أول إقامة</CtaButton>
                        <CtaButton href="#suites" outline>
                            استعرض الأجنحة
                        </CtaButton>
                    </div>
                </div>
                {/* شريط الثقة */}
                <div className="relative z-10 mt-16 flex w-full max-w-3xl flex-wrap items-center justify-center gap-x-10 gap-y-3 rounded-2xl bg-white/5 px-8 py-5 text-sm text-white/70 backdrop-blur">
                    <span>⭐ 4.9 تقييم النزلاء</span>
                    <span>🛏️ +5000 نزيل سعيد</span>
                    <span>🔒 دفع آمن وحجز فوري</span>
                    <span>📞 دعم 24/7</span>
                </div>
            </section>

            {/* النص التعريفي */}
            <section className="mx-auto max-w-3xl px-6 py-20 text-center">
                <h2 className="font-arabic-display mb-6 text-3xl font-extrabold text-rawaq-navy">
                    أخيراً… وصلت
                </h2>
                <p className="text-lg leading-loose text-rawaq-charcoal/80">
                    في أجنحة رواق، صمّمنا كل تفصيلة لتمنحك شعور &quot;أخيراً وصلت&quot;. أجنحة واسعة بتصميم عصري أنيق،
                    وخدمة تسبق طلبك، وموقع يضعك في قلب المدينة وعلى مسافة هدوء منها في آنٍ واحد. سواء كانت زيارتك
                    للعمل، أو للعائلة، أو لاستراحة تستحقها — رواق ليست مجرد مكان تنام فيه، بل عنوان تفخر بأن
                    تُستقبل فيه.
                </p>
            </section>

            {/* المميزات */}
            <section id="features" className="bg-white px-6 py-20">
                <div className="mx-auto max-w-6xl">
                    <h2 className="font-arabic-display mb-12 text-center text-3xl font-extrabold text-rawaq-navy">
                        لماذا يختارنا ضيوفنا؟
                    </h2>
                    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                        {features.map((f) => (
                            <div
                                key={f.title}
                                className="rounded-2xl border border-rawaq-navy/10 bg-rawaq-ivory p-8 transition hover:-translate-y-1 hover:shadow-xl"
                            >
                                <div className="mb-4 text-4xl">{f.icon}</div>
                                <h3 className="mb-2 text-xl font-bold text-rawaq-navy">{f.title}</h3>
                                <p className="leading-relaxed text-rawaq-charcoal/70">{f.text}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* الأجنحة */}
            <section id="suites" className="px-6 py-20">
                <div className="mx-auto max-w-6xl">
                    <h2 className="font-arabic-display mb-3 text-center text-3xl font-extrabold text-rawaq-navy">
                        أجنحتنا
                    </h2>
                    <p className="mb-12 text-center text-rawaq-charcoal/60">
                        اختر الجناح الذي يناسب إقامتك — كلها مجهّزة بأعلى معايير الضيافة
                    </p>
                    <div className="grid gap-8 md:grid-cols-3">
                        {suites.map((s) => (
                            <div key={s.name} className="overflow-hidden rounded-2xl bg-white shadow-lg transition hover:shadow-2xl">
                                <div className={`flex h-52 items-end bg-gradient-to-bl ${s.gradient} p-4`}>
                                    <span className="rounded-full bg-rawaq-navy/70 px-4 py-1 text-sm text-white backdrop-blur">
                                        صورة الجناح
                                    </span>
                                </div>
                                <div className="p-6">
                                    <h3 className="mb-2 text-xl font-bold text-rawaq-navy">{s.name}</h3>
                                    <p className="mb-4 min-h-12 leading-relaxed text-rawaq-charcoal/70">{s.desc}</p>
                                    <div className="flex items-center justify-between">
                                        <div>
                                            <span className="text-2xl font-extrabold text-rawaq-gold">{s.price}</span>
                                            <span className="text-sm text-rawaq-charcoal/60"> ر.س / الليلة</span>
                                        </div>
                                        <a
                                            href="#contact"
                                            className="no-underline rounded-full border border-rawaq-navy px-5 py-2 text-sm font-bold text-rawaq-navy transition hover:bg-rawaq-navy hover:text-white"
                                        >
                                            التفاصيل والحجز
                                        </a>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* آراء النزلاء */}
            <section className="bg-rawaq-navy px-6 py-20">
                <div className="mx-auto max-w-6xl">
                    <h2 className="font-arabic-display mb-12 text-center text-3xl font-extrabold text-white">
                        ماذا يقول ضيوفنا؟
                    </h2>
                    <div className="grid gap-6 md:grid-cols-3">
                        {testimonials.map((t) => (
                            <div key={t.name} className="rounded-2xl bg-white p-8">
                                <Stars count={t.stars} />
                                <p className="my-4 leading-relaxed text-rawaq-charcoal/80">&quot;{t.text}&quot;</p>
                                <p className="font-bold text-rawaq-navy">{t.name}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* الموقع */}
            <section id="location" className="px-6 py-20">
                <div className="mx-auto grid max-w-6xl items-center gap-10 md:grid-cols-2">
                    <div>
                        <h2 className="font-arabic-display mb-6 text-3xl font-extrabold text-rawaq-navy">
                            في قلب المدينة… وعلى مسافة هدوء منها
                        </h2>
                        <ul className="space-y-4 text-lg text-rawaq-charcoal/80">
                            <li>📍 5 دقائق من المراكز التجارية الرئيسية</li>
                            <li>📍 10 دقائق من الواجهة والمطاعم</li>
                            <li>📍 20 دقيقة من المطار</li>
                            <li>📍 مواقف خاصة مجانية لكل جناح</li>
                        </ul>
                    </div>
                    <div className="flex h-72 items-center justify-center rounded-2xl bg-gradient-to-bl from-rawaq-navy/10 to-rawaq-olive/20 text-rawaq-charcoal/50">
                        خريطة الموقع التفاعلية
                    </div>
                </div>
            </section>

            {/* دعوة ختامية */}
            <section id="contact" className="relative overflow-hidden bg-rawaq-navy px-6 py-24 text-center">
                <div
                    className="pointer-events-none absolute inset-0 opacity-30"
                    style={{
                        backgroundImage:
                            'radial-gradient(ellipse 50% 60% at 50% 100%, rgba(201,162,39,0.3), transparent)'
                    }}
                />
                <div className="relative z-10 mx-auto max-w-2xl">
                    <h2 className="font-arabic-display mb-4 text-4xl font-extrabold text-white">
                        جناحك جاهز… فمتى تصل؟
                    </h2>
                    <p className="mb-10 text-lg text-white/70">
                        احجز الآن واحصل على خصم 15% على أول إقامة — الرد خلال دقائق، على مدار الساعة
                    </p>
                    <div className="flex flex-wrap items-center justify-center gap-4">
                        <CtaButton href={whatsappUrl}>💬 احجز عبر الواتساب</CtaButton>
                        <CtaButton href="tel:+966500000000" outline>
                            📞 اتصل بنا
                        </CtaButton>
                    </div>
                </div>
            </section>

            {/* التذييل */}
            <footer className="bg-rawaq-navy-dark px-6 py-10 text-center text-sm text-white/50">
                <p className="font-arabic-display mb-2 text-2xl font-extrabold text-rawaq-gold">رواق</p>
                <p className="mb-4">أجنحة فندقية فاخرة — إقامة تليق بك</p>
                <p>
                    سجل تجاري: 0000000000 · رخصة وزارة السياحة: 000000 · جميع الحقوق محفوظة © {new Date().getFullYear()}
                </p>
            </footer>
        </main>
    );
}
