/* ==================================================
   School of Nutrition - main.js
   Translations (RU/EN/RO) + GSAP animations + interactions
   ================================================== */

(() => {
  'use strict';

  /* ====================
     TRANSLATIONS
     ==================== */

  const TRANSLATIONS = {
    ru: {
      site_title: "Школа питания — Авторский курс по питанию от Елены Сергеевой",
      site_description: "Школа питания Елены Сергеевой — 8 модулей по нутрициологии + бонусные лекции. Персональный подход к питанию. Запишитесь на консультацию.",
      author_name: "Елена Сергеева",
      nav_about: "Об авторе",
      nav_for_whom: "Для кого",
      nav_program: "Программа",
      nav_pricing: "Тарифы",
      nav_faq: "FAQ",
      nav_contacts: "Контакты",
      nav_cta: "Консультация",
      hero_label: "Авторский курс",
      hero_title: "Школа питания",
      hero_subtitle: "Персональный подход к питанию, основанный на науке и вашем образе жизни",
      hero_cta: "Записаться на консультацию",
      hero_cta2: "Узнать подробнее",
      hero_scroll: "Прокрутите вниз",
      about_label: "Об авторе",
      about_title: "Пару слов обо мне",
      about_role: "Сертифицированный интегративный нутрициолог — натуропат",
      about_bio: "🌱 Выпускница Международной Школы Nutrition Expert\n🌱 Член Ассоциации нутрициологов Молдовы\n🌱 Соавтор курса «Нутрициология с нуля»",
      about_stat_stage: "этапа трансформации",
      about_stat_weeks: "недель программы",
      about_cta: "Выбрать тариф",
      auditoria_label: "Аудитория",
      auditoria_title: "Кому идеально подойдет авторская Школа питания?",
      auditoria_subtitle: "Питание — это фундамент здоровья. Этот курс создан как для тех, кто хочет взять ответственность за самочувствие близких в свои руки, так и для специалистов, которым нужны твердые результаты клиентов.",
      auditoria_1_title: "Женщинам, мамам и беременным",
      auditoria_1_desc: "Здоровье семьи начинается на кухне, ведь именно из женских рук кормятся все домочадцы. Научитесь грамотно составлять рацион, чтобы заложить крепкий иммунитет и управлять здоровьем близких.",
      auditoria_2_title: "Специалистам beauty-сферы",
      auditoria_2_desc: "Косметологам, подологам, мастерам маникюра. Работайте с причиной, а не следствием. Помогайте клиентам избавляться от проблем с кожей, грибком или ломкостью ногтей изнутри, запуская anti-age процессы на клеточном уровне.",
      auditoria_3_title: "Массажистам и реабилитологам",
      auditoria_3_desc: "Усильте эффект от ваших процедур. Узнайте, как питание ускоряет выздоровление, реабилитацию и улучшает эстетику тела.",
      auditoria_4_title: "Тренерам и спортсменам",
      auditoria_4_desc: "Фитнес, йога и другие направления. Дайте клиентам максимальный и безопасный результат за счет управления рационом и коррекции гормонального фона. Усильте собственную эффективность и защитите здоровье при нагрузках.",
      auditoria_5_title: "ЗОЖникам и тем, кто ищет себя в новой нише",
      auditoria_5_desc: "Если вы любите тему здоровья и хотите помогать людям, курс даст вам новую востребованную профессию.",
      auditoria_6_title: "Всем, кто живет или хочет работать с клиентами в Европе",
      auditoria_6_desc: "Получите универсальные инструменты для успешного ведения международной практики.",
      program_label: "Программа",
      program_title: "Программа курса",
      program_subtitle: "Восемь модулей, каждый из которых строится на научных принципах",
      program_mod_1_title: "Вода — скрытый двигатель метаболизма",
      program_mod_1_desc: "Откуда берутся отеки, что такое кислотно-щелочное равновесие и какая вода действительно усваивается клетками.",
      program_mod_2_title: "Белок — строительный материал организма",
      program_mod_2_desc: "Симптомы дефицита, чтение анализов и расчет вашей личной нормы для иммунитета, гормонов и нервной системы.",
      program_mod_3_title: "Углеводы — вся правда без мифов",
      program_mod_3_desc: "Метаболический синдром, реальная правда об инсулине и список анализов для проверки углеводного обмена.",
      program_mod_4_title: "Жиры — жирам рознь",
      program_mod_4_desc: "Вся правда о холестерине. Как правильные жиры защищают клетки и снижают ваш биологический возраст.",
      program_mod_5_title: "Гипоксия — коротко о главном",
      program_mod_5_desc: "Последствия хронической анемии и скрытый железодефицит, который лишает вас энергии.",
      program_mod_6_title: "Гормоны, из-за которых ты не худеешь",
      program_mod_6_desc: "Скрытые причины набора веса. Почему диеты не работают при гормональном дисбалансе.",
      program_mod_7_title: "Щитовидная железа — просто о сложном",
      program_mod_7_desc: "Как поддержать главный «пульт управления» метаболизмом, устранить апатию и вернуть бодрость.",
      program_mod_8_title: "Детокс — необходимость или маркетинг",
      program_mod_8_desc: "Мифы и реальность: как безопасно привести печень в порядок с помощью натуропатических программ очищения.",
      program_bonus_1_title: "🎁 Питание до и после тренировки",
      program_bonus_1_desc: "Как закрепить результат нагрузок и быстро восстановиться.",
      program_bonus_2_title: "🎁 Детское здоровье",
      program_bonus_2_desc: "Что фундаментально влияет на иммунитет и нужно ли сбивать температуру.",
      pricing_label: "Тарифы",
      pricing_title: "Выберите подходящий формат участия",
      pricing_subtitle: "Все тарифы включают доступ к записям лекций и персональную поддержку",
      pricing_basic_title: "Базовый",
      pricing_basic_price: "90 €",
      pricing_basic_feature_1: "Доступ ко всем лекциям курса в записи.",
      pricing_basic_feature_2: "Обучение в любое удобное для вас время.",
      pricing_basic_cta: "Выбрать",
      pricing_recommended: "Рекомендуемый",
      pricing_extended_title: "Расширенный",
      pricing_extended_price: "130 €",
      pricing_extended_features_intro: "Всё, что входит в тариф «Базовый»:",
      pricing_extended_feature_1: "Личная консультация — онлайн или офлайн, 40–60 минут.",
      pricing_extended_feature_2: "Глубокий разбор вашего симптоматического теста.",
      pricing_extended_feature_3: "Расшифровка и разбор ваших анализов.",
      pricing_extended_feature_4: "Индивидуальные рекомендации по питанию.",
      pricing_extended_feature_5: "Составление персональной нутрицевтической программы на 3 месяца.",
      pricing_extended_cta: "Выбрать",
      pricing_vip_title: "VIP",
      pricing_vip_price: "230 €",
      pricing_vip_features_intro: "Всё, что входит в тариф «Расширенный»:",
      pricing_vip_feature_1: "лекции.",
      pricing_vip_feature_2: "консультация.",
      pricing_vip_feature_3: "разбор анализов.",
      pricing_vip_feature_4: "персональная программа.",
      pricing_vip_additional: "Дополнительно:",
      pricing_vip_feature_extra: "Моё личное сопровождение на протяжении 3 месяцев — ответы на вопросы, корректировка программы и поддержка на пути к вашему здоровью.",
      pricing_vip_cta: "Выбрать",
      promo_gift: "🎁",
      promo_title: "Скидка 20 € на любой тариф",
      promo_desc: "При оформлении заказа введите промокод и получите скидку 20 € на абсолютно любой выбранный тариф.",
      faq_label: "FAQ",
      faq_title: "Частые вопросы",
      faq_subtitle: "Ответы на популярные вопросы о курсе",
      faq_q1_question: "Можно ли перейти на более выгодный тариф?",
      faq_q1_answer: "Да, вы можете доплатить в любой момент и получить доступ к более полному курсу. Переход доступен в любое время.",
      faq_q2_question: "Нужна ли специальная техника или оборудование?",
      faq_q2_answer: "Нет. Базовый и расширенный тарифы работают на телефоне. VIP-тариф добавляет видеосвязь для сессий.",
      faq_q3_question: "Можно ли адаптировать меню под аллергии?",
      faq_q3_answer: "Да, мы учитываем аллергии и пищевые непереносимости при составлении вашего персонального плана.",
      faq_q4_question: "Как проходит оплата?",
      faq_q4_answer: "Оплата онлайн картой в любой момент перед стартом. Цены указаны в тарифах и включают все модули курса.",
      faq_q5_question: "Можно ли заниматься с хроническими заболеваниями?",
      faq_q5_answer: "Методика универсальна, однако рекомендуется проконсультироваться с врачом перед началом программы.",
      faq_q6_question: "Как проходит обучение?",
      faq_q6_answer: "Курс сочетает видеоматериалы, интерактивные упражнения и живое общение с экспертом на групповых и индивидуальных сессиях.",
      contacts_label: "Контакты",
      contacts_title: "Свяжитесь со мной",
      contacts_subtitle: "Готовы начать? Оставьте заявку или напишите напрямую",
      contact_phone: "[PHONE]",
      contact_email: "[EMAIL]",
      contact_whatsapp: "[WHATSAPP]",
      contact_instagram: "[INSTAGRAM]",
      contact_telegram: "[TELEGRAM]",
      form_name: "Имя",
      form_email: "Email",
      form_message: "Ваше сообщение",
      form_submit: "Отправить",
      cta_final_title: "Готовы начать путь к здоровью?",
      cta_final_subtitle: "Запишитесь на консультацию и получите персональный план питания",
      cta_final_button: "Записаться сейчас",
      footer_copyright: "© 2025 Школа питания. Все права защищены."
    },

    en: {
      site_title: "School of Nutrition — Author's Nutrition Course by Elena Sergeeva",
      site_description: "Elena Sergeeva's School of Nutrition — 8 modules in nutrition + bonus lectures. Personalized approach to nutrition. Book a consultation.",
      author_name: "Elena Sergeeva",
      nav_about: "About",
      nav_for_whom: "For Whom",
      nav_program: "Program",
      nav_pricing: "Pricing",
      nav_faq: "FAQ",
      nav_contacts: "Contacts",
      nav_cta: "Consultation",
      hero_label: "Author's course",
      hero_title: "School of Nutrition",
      hero_subtitle: "A personalized approach to nutrition based on science and your lifestyle",
      hero_cta: "Book a consultation",
      hero_cta2: "Learn more",
      hero_scroll: "Scroll down",
      about_label: "About",
      about_title: "A few words about me",
      about_role: "Certified Integrative Nutritionist — Naturopath",
      about_bio: "🌱 Graduate of the International School Nutrition Expert\n🌱 Member of the Association of Nutritionists of Moldova\n🌱 Co-author of the course «Nutrition from Scratch»",
      about_stat_stage: "stages of transformation",
      about_stat_weeks: "weeks of the program",
      about_cta: "Choose a plan",
      auditoria_label: "Audience",
      auditoria_title: "Who is the author's School of Nutrition ideal for?",
      auditoria_subtitle: "Nutrition is the foundation of health. This course was created both for those who want to take responsibility for their family's wellbeing into their own hands, and for specialists who need real results with clients.",
      auditoria_1_title: "For women, mothers and pregnant women",
      auditoria_1_desc: "Family health begins in the kitchen, since it's from women's hands that all family members are fed. Learn how to properly compose a diet to build strong immunity and manage the health of your loved ones.",
      auditoria_2_title: "Beauty sphere specialists",
      auditoria_2_desc: "For cosmetologists, podologists and nail technicians. Work with the cause, not the symptoms. Help clients get rid of skin problems, fungus or brittle nails from the inside, launching anti-aging processes at the cellular level.",
      auditoria_3_title: "Massage therapists and rehabilitation specialists",
      auditoria_3_desc: "Enhance the effect of your procedures. Learn how nutrition accelerates recovery, rehabilitation and improves body aesthetics.",
      auditoria_4_title: "Trainers and athletes",
      auditoria_4_desc: "Fitness, yoga and other directions. Give your clients maximum and safe results through diet management and hormone adjustment. Increase your own effectiveness and protect your health under load.",
      auditoria_5_title: "Healthy eating enthusiasts and those looking for themselves in a new niche",
      auditoria_5_desc: "If you love the topic of health and want to help people, the course will give you a new in-demand profession.",
      auditoria_6_title: "Everyone who lives or wants to work with clients in Europe",
      auditoria_6_desc: "Get universal tools for successful international practice.",
      program_label: "Program",
      program_title: "Course program",
      program_subtitle: "Eight modules, each built on scientific principles",
      program_mod_1_title: "Water — the hidden driver of metabolism",
      program_mod_1_desc: "Where swelling comes from, what acid-base balance is and which water is truly absorbed by cells.",
      program_mod_2_title: "Protein — the building material of the body",
      program_mod_2_desc: "Symptoms of deficiency, reading lab results and calculating your personal norm for immunity, hormones and nervous system.",
      program_mod_3_title: "Carbohydrates — all the truth without myths",
      program_mod_3_desc: "Metabolic syndrome, the real truth about insulin and a list of tests to check carbohydrate metabolism.",
      program_mod_4_title: "Fats — not all fats are the same",
      program_mod_4_desc: "The whole truth about cholesterol. How the right fats protect cells and reduce your biological age.",
      program_mod_5_title: "Hypoxia — the essentials",
      program_mod_5_desc: "Consequences of chronic anemia and hidden iron deficiency that rob you of energy.",
      program_mod_6_title: "Hormones that prevent weight loss",
      program_mod_6_desc: "Hidden causes of weight gain. Why diets don't work with hormonal imbalance.",
      program_mod_7_title: "Thyroid gland — simply about the complicated",
      program_mod_7_desc: "How to support the main 'control center' of metabolism, get rid of apathy and regain energy.",
      program_mod_8_title: "Detox — necessity or marketing",
      program_mod_8_desc: "Myths and reality: how to safely clean your liver using naturopathic detox programs.",
      program_bonus_1_title: "🎁 Nutrition during and after training",
      program_bonus_1_desc: "How to consolidate workout results and recover quickly.",
      program_bonus_2_title: "🎁 Child health",
      program_bonus_2_desc: "What fundamentally affects immunity and whether you should reduce fever.",
      pricing_label: "Pricing",
      pricing_title: "Choose the right participation format",
      pricing_subtitle: "All plans include access to lecture recordings and personal support",
      pricing_basic_title: "Basic",
      pricing_basic_price: "90 €",
      pricing_basic_feature_1: "Access to all course lectures in recorded form.",
      pricing_basic_feature_2: "Study at any convenient time for you.",
      pricing_basic_cta: "Choose",
      pricing_recommended: "Recommended",
      pricing_extended_title: "Extended",
      pricing_extended_price: "130 €",
      pricing_extended_features_intro: "Everything included in the Basic plan:",
      pricing_extended_feature_1: "Personal consultation — online or offline, 40–60 minutes.",
      pricing_extended_feature_2: "Deep analysis of your symptom test.",
      pricing_extended_feature_3: "Decoding and analysis of your tests.",
      pricing_extended_feature_4: "Individual nutrition recommendations.",
      pricing_extended_feature_5: "Development of a personalized nutrition program for 3 months.",
      pricing_extended_cta: "Choose",
      pricing_vip_title: "VIP",
      pricing_vip_price: "230 €",
      pricing_vip_features_intro: "Everything included in the Extended plan:",
      pricing_vip_feature_1: "lectures.",
      pricing_vip_feature_2: "consultation.",
      pricing_vip_feature_3: "analysis review.",
      pricing_vip_feature_4: "personal program.",
      pricing_vip_additional: "Additional:",
      pricing_vip_feature_extra: "My personal support for 3 months — answers to questions, program adjustment and support on the way to your health.",
      pricing_vip_cta: "Choose",
      promo_gift: "🎁",
      promo_title: "20 € discount on any plan",
      promo_desc: "Enter the promo code when placing your order and receive a 20 € discount on absolutely any plan you choose.",
      faq_label: "FAQ",
      faq_title: "Frequently Asked Questions",
      faq_subtitle: "Answers to popular questions about the course",
      faq_q1_question: "Can I switch to a more favorable plan?",
      faq_q1_answer: "Yes, you can pay the difference at any time and get access to the more complete course. Upgrading is available at any time.",
      faq_q2_question: "Do I need any special equipment or software?",
      faq_q2_answer: "No. The Basic and Extended plans work on a phone. The VIP plan adds video communication for sessions.",
      faq_q3_question: "Can menus be adapted for allergies?",
      faq_q3_answer: "Yes, we take into account allergies and food intolerances when creating your personalized plan.",
      faq_q4_question: "How does payment work?",
      faq_q4_answer: "Payment is made online by card at any time before the start. Prices are listed in the plans and include all course modules.",
      faq_q5_question: "Can I participate with chronic conditions?",
      faq_q5_answer: "The methodology is universal, however it is recommended to consult a doctor before starting the program.",
      faq_q6_question: "How does the training take place?",
      faq_q6_answer: "The course combines video materials, interactive exercises and live communication with an expert in group and individual sessions.",
      contacts_label: "Contacts",
      contacts_title: "Get in touch",
      contacts_subtitle: "Ready to start? Leave a request or write directly",
      contact_phone: "[PHONE]",
      contact_email: "[EMAIL]",
      contact_whatsapp: "[WHATSAPP]",
      contact_instagram: "[INSTAGRAM]",
      contact_telegram: "[TELEGRAM]",
      form_name: "Name",
      form_email: "Email",
      form_message: "Your message",
      form_submit: "Send",
      cta_final_title: "Ready to start your path to health?",
      cta_final_subtitle: "Book a consultation and receive a personalized nutrition plan",
      cta_final_button: "Book now",
      footer_copyright: "© 2025 School of Nutrition. All rights reserved."
    },

    ro: {
      site_title: "Școala de nutriție — Cursul de nutrție de autor de Elena Sergeeva",
      site_description: "Școala de nutriție de Elena Sergeeva — 8 module de nutrație + lecții bonus. Abordare personalizată în nutriție. Programează o consultație.",
      author_name: "Elena Sergeeva",
      nav_about: "Despre",
      nav_for_whom: "Pentru cine",
      nav_program: "Program",
      nav_pricing: "Prețuri",
      nav_faq: "FAQ",
      nav_contacts: "Contacte",
      nav_cta: "Consultație",
      hero_label: "Curs de autor",
      hero_title: "Școala de nutriție",
      hero_subtitle: "O abordare personalizată în nutriție bazată pe știință și stilul tău de viață",
      hero_cta: "Programează o consultație",
      hero_cta2: "Află mai multe",
      hero_scroll: "Defilează în jos",
      about_label: "Despre",
      about_title: "Câteva cuvinte despre mine",
      about_role: "Nutriționist integrativ certificat — Naturopat",
      about_bio: "O specialistă în nutriție care combină o abordare științifică cu lucrare practică cu oameni. Lucrăm cu nevoile individuale ale organismului, construim obiceiuri alimentare sustenabile și oferim sprijin în fiecare etapă a călătoriei spre sănătate. Metodologia se bazează pe date moderne în domeniul nutriției, metabolei și schimbării comportamentale.",
      about_stat_stage: "etape de transformare",
      about_stat_weeks: "săptămâni ale programului",
      about_cta: "Alege un plan",
      auditoria_label: "Audiență",
      auditoria_title: "Pentru cine este acest curs",
      auditoria_subtitle: "Metodologia este universală și se adaptează la fiecare participant",
      auditoria_1_title: "Dorești să slăbești",
      auditoria_1_desc: "O abordare echilibrată pentru pierderea de greutate fără regimuri stricte și restricții",
      auditoria_2_title: "Dorești să-ți construiești mușchi",
      auditoria_2_desc: "Suport pentru creșterea mușchiilor bazat pe nutriție corectă și macro nutrienți",
      auditoria_3_title: "Dorești să te simți mai bine",
      auditoria_3_desc: "Energie stabilă, claritate mentală și un stărui bun",
      auditoria_4_title: "Dorești să-ți reformulezi obiceiurile alimentare",
      auditoria_4_desc: "Schimbări sustenabile în relația ta cu mâncarea",
      program_label: "Program",
      program_title: "Ce vei primi",
      program_subtitle: "Șapte etape, fiecare bazată pe principii științifice",
      program_mod_1_title: "Bazele nutriției",
      program_mod_1_desc: "Principiile alimentației sănătoase și construcția unui regim echilibrat",
      program_mod_2_title: "Macro și micro nutrienți",
      program_mod_2_desc: "Rolul proteinelor, grăsimilor, carbohidraților și vitaminelor în organism",
      program_mod_3_title: "Metabolism și energie",
      program_mod_3_desc: "Cum organismul procesează energia și cum să îți stimulezi metabolismul",
      program_mod_4_title: "Plan personalizat",
      program_mod_4_desc: "Crearea unui regim individual în funcție de obiective și stil de viață",
      program_mod_5_title: "Rețete și meniuri",
      program_mod_5_desc: "Rețete practice și meniuri gata pregătite pentru fiecare zi",
      program_mod_6_title: "Obiceiuri alimentare",
      program_mod_6_desc: "Cum să-ți dezvolți obiceiuri alimentare sănătoase și sustenabile",
      program_mod_7_title: "Antrenament și sprijin",
      program_mod_7_desc: "Sesiuni live de întrebări și răspunsuri și sprijin în fiecare etapă",
      program_bonus_1_title: "Ghidul produselor",
      program_bonus_1_desc: "Un ghid practic pentru alegerea produselor în fiecare sezon",
      program_bonus_2_title: "Liste de verificare și urmăritori",
      program_bonus_2_desc: "Șabloane pentru monitorizarea progresului",
      pricing_label: "Prețuri",
      pricing_title: "Alege programul tău",
      pricing_subtitle: "Toate planurile includ modulele de bază și suport prin chat",
      pricing_basic_title: "Bază",
      pricing_basic_price: "1 190 €",
      pricing_basic_feature_1: "7 module de curs",
      pricing_basic_feature_2: "Rețete de bază",
      pricing_basic_feature_3: "Suport prin chat",
      pricing_basic_cta: "Alege",
      pricing_recommended: "Recomandat",
      pricing_extended_title: "Extins",
      pricing_extended_price: "2 390 €",
      pricing_extended_feature_1: "Tot din Bază",
      pricing_extended_feature_2: "Meniuri și rețete extinse",
      pricing_extended_feature_3: "Recomandări personale",
      pricing_extended_feature_4: "Webinarii de grup",
      pricing_extended_cta: "Alege",
      pricing_vip_title: "VIP",
      pricing_vip_price: "4 990 €",
      pricing_vip_feature_1: "Tot din Extins",
      pricing_vip_feature_2: "Sesiuni de antrenament 1:1",
      pricing_vip_feature_3: "Verificări săptămânale",
      pricing_vip_feature_4: "Suport cu prioritate",
      pricing_vip_cta: "Alege",
      faq_label: "FAQ",
      faq_title: "Întrebări frecvente",
      faq_subtitle: "Răspunsuri la întrebări populare despre curs",
      faq_q1_question: "Pot să trec pe un plan mai avantajos?",
      faq_q1_answer: "Da, poți plăti diferența oricând și poți accesa cursul complet. Trecerea pe un plan superior este disponibilă oricând.",
      faq_q2_question: "Ai nevoie de echipamente sau software speciale?",
      faq_q2_answer: "Nu. Planurile de bază și extinse funcționează pe telefon. Planul VIP adaugă comunicare video pentru sesiuni.",
      faq_q3_question: "Pot fi adaptate meniurile pentru alergii?",
      faq_q3_answer: "Da, luăm în considerare alergiile și intoleranțele alimentare la elaborarea planului tău personalizat.",
      faq_q4_question: "Cum funcționează plata?",
      faq_q4_answer: "Plata se face online cu cardul oricând înainte de început. Prețurile sunt specificate în planuri și includ toate modulele cursului.",
      faq_q5_question: "Pot să particip cu afecțiuni cronice?",
      faq_q5_answer: "Metodologia este universală, însă se recomandă consultarea unui medic înainte de a începe programul.",
      faq_q6_question: "Cum funcționează învățarea?",
      faq_q6_answer: "Cursul combină materiale video, exerciții interactive și comunicare live cu un expert în sesiuni de grup și individuale.",
      contacts_label: "Contacte",
      contacts_title: "Contactează-mă",
      contacts_subtitle: "Pregătit să începi? Lasă o cerere sau scrie direct",
      contact_phone: "[PHONE]",
      contact_email: "[EMAIL]",
      contact_whatsapp: "[WHATSAPP]",
      contact_instagram: "[INSTAGRAM]",
      contact_telegram: "[TELEGRAM]",
      form_name: "Nume",
      form_email: "Email",
      form_message: "Mesajul dvs.",
      form_submit: "Trimite",
      cta_final_title: "Pregătit să începi călătoria spre sănătate?",
      cta_final_subtitle: "Programează o consultație și primește un plan de nutriție personalizat",
      cta_final_button: "Programează acum",
      footer_copyright: "© 2025 Școala de nutriție. Toate drepturile rezervate."
    }
  };

  /* ====================
     STATE + HELPERS
     ==================== */

  const state = {
    currentLang: 'ru',
    reducedMotion: window.matchMedia('(prefers-reduced-motion: reduce)').matches,
    isLoaded: false
  };

  // Cache DOM
  const $ = (sel, ctx = document) => ctx.querySelector(sel);
  const $$ = (sel, ctx = document) => ctx.querySelectorAll(sel);

  const init = () => {
    loadLanguage();
    setupLanguageSwitcher();
    setupMobileNav();
    setupNavScroll();
    setupFAQ();
    setupForm();
    setupSmoothAnchor();
    setupHeroImagePosition();

    // Entrance animations after fonts + images load
    if (state.reducedMotion) {
      revealAllNow();
    } else {
      if (document.fonts && document.fonts.ready) {
        document.fonts.ready.then(() => {
          startEntrance();
        }).catch(startEntrance);
      } else {
        window.addEventListener('load', startEntrance);
      }
    }
  };

  /* ====================
     TRANSLATIONS
     ==================== */

  function loadLanguage(lang) {
    if (lang) {
      state.currentLang = lang;
    } else {
      const saved = localStorage.getItem('nutriLang');
      if (saved && TRANSLATIONS[saved]) {
        state.currentLang = saved;
      }
    }

    const t = TRANSLATIONS[state.currentLang];
    if (!t) return;

    // Update lang attribute
    document.documentElement.lang = state.currentLang;

    // Update translatable elements
    const elements = document.querySelectorAll('[data-i18n]');
    elements.forEach(el => {
      const key = el.getAttribute('data-i18n');
      if (t[key] !== undefined) {
      if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
        el.placeholder = t[key];
      } else if (el.tagName === 'TITLE') {
        document.title = t[key];
      } else if (el.tagName === 'META') {
        el.content = t[key];
      } else {
        el.textContent = t[key];
      }
      }
    });

    // Update title and meta description
    const titleEl = $('[data-i18n="site_title"]');
    if (titleEl) document.title = titleEl.textContent;

    // Toggle active class on lang buttons
    $$('.lang-btn').forEach(btn => {
      btn.classList.toggle('active', btn.getAttribute('data-lang') === state.currentLang);
    });
  }

  function setupLanguageSwitcher() {
    const langBtns = $$('.lang-btn');
    langBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        const lang = btn.getAttribute('data-lang');
        if (lang === state.currentLang) return;

        // Exit animation on current
        if (!state.reducedMotion && window.gsap) {
          gsap.to('.hero-content > *', {
            opacity: 0,
            y: -20,
            duration: 0.4,
            stagger: 0.06,
            ease: 'power2.in',
            onComplete: () => {
              loadLanguage(lang);
              // Re-animate entrance
              const tl = gsap.timeline();
              tl.to('.hero-content', { opacity: 1, duration: 0.01 })
                .from('.hero-content > *', {
                  opacity: 0,
                  y: 20,
                  duration: 0.7,
                  stagger: 0.08,
                  ease: 'power2.out',
                  delay: 0.1
                });
              // Refresh ScrollTriggers for re-rendered content
              setTimeout(() => {
                if (window.ScrollTrigger) ScrollTrigger.refresh();
              }, 300);
            }
          });
        } else {
          loadLanguage(lang);
          if (window.ScrollTrigger) ScrollTrigger.refresh();
        }

        localStorage.setItem('nutriLang', lang);

        // Scroll to top on mobile hero label (optional - keep position)
      });
    });
  }

  /* ====================
     HERO IMAGE POSITION
     ==================== */

  function setupHeroImagePosition() {
    const heroImg = $('.hero-background-image');
    if (!heroImg) return;

    const updatePos = () => {
      const rect = heroImg.getBoundingClientRect();
      // Keep face visible: bias toward upper-center
      let pos = 'center 30%';
      if (window.matchMedia('(max-width: 768px)').matches) {
        pos = 'center 25%';
      } else if (window.matchMedia('(min-width: 1441px)').matches) {
        pos = 'center 35%';
      }
      heroImg.style.objectPosition = pos;
    };

    updatePos();
    window.addEventListener('resize', updatePos);
  }

  /* ====================
     NAVIGATION SCROLL
     ==================== */

  function setupNavScroll() {
    const nav = $('.nav-container');
    if (!nav) return;

    let lastScroll = 0;
    let ticking = false;

    const onScroll = () => {
      const scrolled = window.scrollY > 60;
      if (scrolled && !nav.classList.contains('scrolled')) {
        nav.classList.add('scrolled');
      } else if (!scrolled && nav.classList.contains('scrolled')) {
        nav.classList.remove('scrolled');
      }
      lastScroll = window.scrollY;
      ticking = false;
    };

    const onScrollThrottled = () => {
      if (!ticking) {
        window.requestAnimationFrame(onScroll);
        ticking = true;
      }
    };

    window.addEventListener('scroll', onScrollThrottled, { passive: true });
  }

  /* ====================
     MOBILE NAVIGATION
     ==================== */

  function setupMobileNav() {
    const toggle = $('#nav-toggle');
    const menu = $('#mobile-nav');
    if (!toggle || !menu) return;

    toggle.addEventListener('click', () => {
      const expanded = toggle.getAttribute('aria-expanded') === 'true';
      toggle.setAttribute('aria-expanded', String(!expanded));
      toggle.classList.toggle('is-active', !expanded);
      menu.classList.toggle('mobile-nav--open');
      menu.setAttribute('aria-hidden', String(expanded));
      document.body.style.overflow = expanded ? '' : 'hidden';
    });

    // Close on link click
    $$('.mobile-nav .nav-link').forEach(link => {
      link.addEventListener('click', () => {
        toggle.setAttribute('aria-expanded', 'false');
        toggle.classList.remove('is-active');
        menu.classList.remove('mobile-nav--open');
        menu.setAttribute('aria-hidden', 'true');
        document.body.style.overflow = '';
      });
    });
  }

  /* ====================
     FAQ ACCORDION
     ==================== */

  function setupFAQ() {
    const questions = $$('.faq-question');
    questions.forEach(btn => {
      btn.addEventListener('click', () => {
        const expanded = btn.getAttribute('aria-expanded') === 'true';
        const answer = btn.nextElementSibling;

        if (!answer) return;

        if (expanded) {
          // Collapse
          btn.setAttribute('aria-expanded', 'false');
          answer.style.maxHeight = '0';
        } else {
          // Expand
          btn.setAttribute('aria-expanded', 'true');
          answer.style.maxHeight = answer.scrollHeight + 'px';
        }
      });
    });
  }

  /* ====================
     CONTACT FORM
     ==================== */

  function setupForm() {
    const form = $('#contact-form');
    if (!form) return;

    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const formData = new FormData(form);
      const name = formData.get('name');
      if (!name) {
        alert('Пожалуйста, укажите имя');
        return;
      }
      // Simple confirmation since there is no backend
      alert('Спасибо! Ваша заявка принята. Мы свяжемся с вами в ближайшее время.');
      form.reset();
    });
  }

  /* ====================
     SMOOTH ANCHOR SCROLL
     ==================== */

  function setupSmoothAnchor() {
    $$('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        const target = $(this.getAttribute('href'));
        if (target) {
          e.preventDefault();
          const offset = target.getBoundingClientRect().top + window.scrollY - 80;
          window.scrollTo({ top: offset, behavior: 'smooth' });
        }
      });
    });
  }

  /* ====================
     REVEAL ALL NOW (Reduced motion / no-JS fallback)
     ==================== */

  function revealAllNow() {
    // Show all animated content immediately (reduced motion / no-JS fallback)
    $$('[data-animate]').forEach(el => {
      el.style.opacity = '1';
      el.style.transform = 'none';
    });
    const heroContent = $('.hero-content');
    if (heroContent) {
      heroContent.style.opacity = '1';
      heroContent.style.transform = 'none';
      const children = heroContent.querySelectorAll('*');
      children.forEach(el => {
        el.style.opacity = '1';
        el.style.transform = 'none';
      });
    }
  }

  /* ====================
     GSAP ENTRANCE + SCROLL ANIMATIONS
     ==================== */

  function startEntrance() {
    if (!window.gsap) {
      revealAllNow();
      return;
    }

    const tl = gsap.timeline({
      defaults: { ease: 'power3.out' },
      onComplete: () => { state.isLoaded = true; }
    });

    // 1 & 2. Background image appears with cinematic scale
    tl.from('.hero-background-image', {
      opacity: 0,
      scale: 1.15,
      duration: 0.9,
      ease: 'power2.out'
    }, 0);

    // 3. Overlay appears
    tl.from('.hero-overlay', {
      opacity: 0,
      duration: 1,
      ease: 'power2.inOut'
    }, 0.3);

    // Reveal the centered content container
    tl.fromTo('.hero-content', { opacity: 0 }, {
      opacity: 1,
      duration: 0.01
    }, 0.4);

    // 4. Label
    tl.from('.hero-label', {
      opacity: 0,
      y: 20,
      duration: 0.7
    }, 0.9);

    // 5. Title
    tl.from('.hero-title', {
      opacity: 0,
      y: 30,
      duration: 1,
      scale: 0.96
    }, 1.1);

    // 6. Subtitle
    tl.from('.hero-subtitle', {
      opacity: 0,
      y: 20,
      duration: 0.8
    }, 1.7);

    // 7. CTA
    tl.from('.hero-cta > *', {
      opacity: 0,
      y: 20,
      duration: 0.7,
      stagger: 0.12
    }, 2.2);

    // 8. Scroll indicator
    tl.from('.scroll-indicator', {
      opacity: 0,
      y: 15,
      duration: 0.6
    }, 2.4);

    // Reveal hero content container
    tl.fromTo('.hero-content', { opacity: 0 }, {
      opacity: 1,
      duration: 0.01
    }, 0);

    // ====================
    //    SCROLLTRIGGER ANIMATIONS
    //    ====================

    if (window.ScrollTrigger) {
      gsap.registerPlugin(ScrollTrigger);

      // About section
      gsap.from('.about-image', {
        opacity: 0,
        x: -60,
        duration: 1.2,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: '.about',
          start: 'top 80%',
          toggleActions: 'play none none reverse'
        }
      });

      gsap.from('.about-content > *', {
        opacity: 0,
        y: 30,
        duration: 1,
        stagger: 0.12,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: '.about-content',
          start: 'top 80%',
          toggleActions: 'play none none reverse'
        }
      });

      // Editorial number reveal
      gsap.from('.editorial-number', {
        opacity: 0,
        scale: 0.8,
        duration: 1.2,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: '.about',
          start: 'top 75%',
          toggleActions: 'play none none reverse'
        }
      });

      // Auditoria items
      gsap.utils.toArray('.auditoria-item').forEach((item, i) => {
        gsap.from(item, {
          opacity: 0,
          y: 40,
          duration: 0.9,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: item,
            start: 'top 80%',
            toggleActions: 'play none none reverse'
          },
          delay: i * 0.12
        });
      });

      // Program steps
      gsap.utils.toArray('.program-step').forEach((step, i) => {
        gsap.from(step, {
          opacity: 0,
          y: 30,
          x: i % 2 === 0 ? -20 : 20,
          duration: 0.9,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: step,
            start: 'top 82%',
            toggleActions: 'play none none reverse'
          },
          delay: i * 0.08
        });

        // Line draw
        const line = $('.step-line', step);
        if (line) {
          gsap.from(line, {
            scaleX: 0,
            duration: 0.8,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: step,
              start: 'top 82%',
              toggleActions: 'play none none reverse'
            },
            delay: i * 0.08
          });
        }
      });

      // Program bonus
      if ($('.program-bonus')) {
        gsap.from('.program-bonus__item', {
          opacity: 0,
          y: 40,
          duration: 1,
          stagger: 0.15,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: '.program-bonus',
            start: 'top 85%',
            toggleActions: 'play none none reverse'
          }
        });
      }

      // Pricing plans
      gsap.utils.toArray('.pricing-plan').forEach((plan, i) => {
        gsap.from(plan, {
          opacity: 0,
          y: 30,
          duration: 1,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: plan,
            start: 'top 85%',
            toggleActions: 'play none none reverse'
          },
          delay: i * 0.12
        });

        // Feature items
        const features = $$('.feature', plan);
        gsap.from(features, {
          opacity: 0,
          x: -20,
          duration: 0.6,
          stagger: 0.06,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: plan,
            start: 'top 85%',
            toggleActions: 'play none none reverse'
          },
          delay: 0.15
        });
      });

      // FAQ items
      gsap.utils.toArray('.faq-item').forEach((item, i) => {
        gsap.from(item, {
          opacity: 0,
          y: 20,
          duration: 0.7,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: item,
            start: 'top 88%',
            toggleActions: 'play none none reverse'
          },
          delay: i * 0.08
        });
      });

      // Contacts
      gsap.from('.contacts-info .contact-item', {
        opacity: 0,
        x: -30,
        duration: 0.8,
        stagger: 0.1,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: '.contacts-info',
          start: 'top 85%',
          toggleActions: 'play none none reverse'
        }
      });

      gsap.from('.contact-form', {
        opacity: 0,
        y: 30,
        duration: 1,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: '.contact-form',
          start: 'top 85%',
          toggleActions: 'play none none reverse'
        }
      });

      // Final CTA
      gsap.from('.final-cta-title', {
        opacity: 0,
        y: 30,
        duration: 1,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: '.final-cta',
          start: 'top 80%',
          toggleActions: 'play none none reverse'
        }
      });

      gsap.from('.final-cta-subtitle', {
        opacity: 0,
        y: 20,
        duration: 0.8,
        delay: 0.15,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: '.final-cta',
          start: 'top 80%',
          toggleActions: 'play none none reverse'
        }
      });

      gsap.from('.final-cta-content > .btn', {
        opacity: 0,
        y: 20,
        duration: 0.7,
        delay: 0.3,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: '.final-cta',
          start: 'top 80%',
          toggleActions: 'play none none reverse'
        }
      });

      // Background parallax (subtle vertical translate only — no horizontal overflow)
      const heroParallax = gsap.to('.hero-background-image', {
        y: -40,
        ease: 'none',
        scrollTrigger: {
          trigger: '.hero',
          start: 'top top',
          end: 'bottom top',
          scrub: 0.8
        }
      });

      const ctaParallax = gsap.to('.final-cta-image', {
        y: -30,
        ease: 'none',
        scrollTrigger: {
          trigger: '.final-cta',
          start: 'top 85%',
          end: 'bottom top',
          scrub: 0.6
        }
      });
    }

    // Refresh ScrollTriggers on resize (device rotation) for robustness
    let resizeTimer;
    window.addEventListener('resize', () => {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(() => {
        if (window.ScrollTrigger) ScrollTrigger.refresh();
      }, 150);
    });

    // Button arrow micro-interaction already in CSS
  }

  /* ====================
     INIT
     ==================== */

  let setupDone = false;
  let entranceDone = false;

  function doSetup() {
    if (setupDone) return;
    setupDone = true;

    loadLanguage();
    setupLanguageSwitcher();
    setupMobileNav();
    setupNavScroll();
    setupFAQ();
    setupForm();
    setupSmoothAnchor();
    setupHeroImagePosition();
  }

  function startEntranceWhenReady() {
    if (entranceDone) return;
    if (state.reducedMotion) {
      entranceDone = true;
      revealAllNow();
      return;
    }
    if (window.gsap) {
      entranceDone = true;
      startEntrance();
      return;
    }
    // GSAP not yet available — poll (safety net for slow/failed CDN)
    let checks = 0;
    const poll = setInterval(() => {
      checks++;
      if (window.gsap) {
        clearInterval(poll);
        entranceDone = true;
        startEntrance();
      } else if (checks >= 40) {
        clearInterval(poll);
        entranceDone = true;
        revealAllNow();
      }
    }, 100);
  }

  function bootstrap() {
    doSetup();
    startEntranceWhenReady();
  }

  // Script is at end of body, so DOM is already parsed in nearly all cases.
  if (document.readyState !== 'loading') {
    bootstrap();
  } else {
    document.addEventListener('DOMContentLoaded', bootstrap);
  }
})();
