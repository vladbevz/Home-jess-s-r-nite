# CLAUDE.md — Mockup: Home Jess Sérénité

## Контекст проєкту
Це landing page-макет для потенційного клієнта Jessica Lamerand — thérapeute holistique в Німу (Франція).
Мета: показати їй як може виглядати її сайт, щоб вона захотіла його замовити.
Поточний сайт клієнта жахливий і зроблений на конструкторі — цей макет має шокувати різницею.

## Що вона робить
- Soins énergétiques (Reiki, Lahochi)
- Magnétisme
- Hypnose
- Soin du visage énergétique
- Massage relaxant californien
- Guidance cartes / pendule
- Прийом в кабінеті або онлайн (visio)
- Адреса: 6 rue du Rempart Romain, Nîmes 30900

## Естетичний напрямок
**Luxury spiritual wellness** — не містичний хаос, а рафінована духовна практика.
Як spa преміум-класу зустрічається з мінімалістичним wellness-брендом.

### Палітра
- Фон: дуже темний зелено-чорний (`#0a0f0d`) або глибокий смарагд
- Акценти: матове золото / шампань (`#c9a96e`, `#e8d5b0`)
- Текст: кремовий (`#f5f0e8`)
- Другорядний: приглушений sage green (`#7a9e8a`)

### Типографіка
- Заголовки: `Cormorant Garamond` або `Playfair Display` — елегантна, духовна, жіночна
- Тіло: `Lato` або `DM Sans` — читабельний, чистий
- Імпортувати через Google Fonts

### Настрій
Тихо. Повільно. Глибоко. Як вдих перед медитацією.
Багато whitespace, плавні анімації появи, ніякого кричущого контенту.

## Структура сторінки (одна довга landing page)

### 1. Hero
- Повноекранний розділ
- Великий заголовок: `"Retrouvez l'équilibre. Reconnectez-vous à vous-même."`
- Підзаголовок: `"Soins énergétiques & thérapies holistiques à Nîmes"`
- CTA кнопка: `"Prendre rendez-vous"` — золота обводка, hover fill
- Фон: темний з тонким noise texture або subtle gradient mesh
- Тонка анімація появи тексту (fade + slide up)

### 2. À propos (Jessica)
- Коротко хто вона: thérapeute passionnée, bienveillante, à l'écoute
- Цитата з відгуку: `"J'ai pu me libérer de certains fardeaux... Je recommande à 10000%"`
- Placeholder для фото (rounded, з золотою рамкою)

### 3. Soins proposés
Grid 2x3 карточок:
- Reiki
- Lahochi
- Magnétisme
- Soin du visage énergétique
- Massage californien
- Guidance cartes & pendule

Кожна карточка: іконка (SVG або emoji), назва, одне речення опису.
Hover: легкий gold glow.

### 4. Témoignages
2-3 відгуки з реальних платформ (Resalib, Groupon):
- `"Jessica est très compétente, pleine d'empathie et super gentille."` — Claudine D.
- `"Mes maux ont totalement disparu. Vous pouvez y aller les yeux fermés."` — анонім
- `"J'ai ressenti beaucoup d'émotions et pu me libérer de certains fardeaux."` — анонім

### 5. Tarifs / Réservation
- Проста секція з цінами або кнопкою на Crenolibre/телефон
- CTA: `"Réservation par téléphone : 07 66 79 78 75"`
- Або форма контакту (ім'я, email, повідомлення)

### 6. Footer
- Ім'я: Home Jess Sérénité
- Адреса: 20 rue Parmentier, Nîmes
- Телефон: 07 66 79 78 75
- Соцмережі (placeholder)

## Технічні вимоги
- Next.js 14+ App Router
- Tailwind CSS
- Framer Motion для анімацій появи секцій
- Google Fonts: Cormorant Garamond + DM Sans
- Мобільний responsive (mobile-first)
- Деплой на Vercel після завершення

## Що НЕ робити
- Ніякого фіолетового — це кліше для spiritual ніші
- Ніяких стокових зірок, місяців, кристалів як emoji в заголовках
- Ніякого білого фону — має бути темна тема
- Ніяких Lorem ipsum — використовувати реальний французький текст
- Ніякого Inter або Roboto

## Tone of voice (французький)
Спокійний, теплий, довірливий. Не продає агресивно — запрошує.
Приклад: `"Chaque séance est une invitation à ralentir, respirer et se recentrer sur soi."`

## Кінцева мета
Клієнт відкриває посилання на Vercel і каже: `"C'est exactement ce que je veux."`
