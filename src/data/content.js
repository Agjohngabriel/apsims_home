export const HEADLINES = {
  ledger: {
    h1: 'The ledger that lives in WhatsApp.',
    h1Em: 'lives',
    lede: "APSIMS is your shop's brain inside the chat you already use all day. Type a sale, ask for a profit summary, get a PDF report — no app, no login, no training.",
  },
  shop: {
    h1: "Your shop's brain. Inside WhatsApp.",
    h1Accent: 'brain.',
    lede: 'Nigerian traders log ₦200B a year on paper. APSIMS does it in chat — sales, stock, credit, AI reports — exactly where business already happens.',
  },
  sell: {
    h1: 'Sell it. Type it. Sorted.',
    lede: "One WhatsApp message replaces the ledger, the calculator, the missed sale, and the \"I'll remember it later.\" APSIMS understands plain English and naira.",
  },
};

export const TICKER = [
  { tag: 'SOLD',    text: '30 bags of rice for',   amt: '₦48,000' },
  { tag: 'STOCK',   text: 'Indomie cartons left:',  amt: '47' },
  { tag: 'REPORT',  text: 'Weekly profit:',          amt: '₦43,200' },
  { tag: 'SOLD',    text: '5 bottles palm oil for',  amt: '₦9,500' },
  { tag: 'CREDIT',  text: 'Mrs Ade balance:',        amt: '₦12,000' },
  { tag: 'MARGIN',  text: 'This week:',              amt: '23.4%' },
  { tag: 'SOLD',    text: '12 cartons milk for',     amt: '₦26,400' },
  { tag: 'RESTOCK', text: 'Rice supplier:',          amt: '₦185,000' },
];

export const STEPS = [
  {
    tag: 'Step 01 · No download',
    title: 'Open WhatsApp like you already do',
    body: 'Save the APSIMS number, send /start, name your business. You\'re in. The bot lives where your phone is — no app store, no install, no friction.',
    chat: [
      { side: 'out', text: '/start' },
      { side: 'in',  text: '👋 Welcome to APSIMS! What\'s your business called?' },
      { side: 'out', text: 'Mama Ade Provisions' },
    ],
  },
  {
    tag: 'Step 02 · Plain language',
    title: 'Speak naira. The bot understands.',
    body: 'Type sales the way you\'d say them. Multi-item lines, expenses, restocks — APSIMS parses it, logs it, updates inventory in real time, and echoes back what it understood.',
    chat: [
      { side: 'out', text: 'Sold 5 bags rice, 3 tins tomato — ₦12,500' },
      { side: 'in',  text: 'Logged ✓  5 bags rice + 3 tins tomato  Revenue ₦12,500' },
    ],
  },
  {
    tag: 'Step 03 · AI reports',
    title: 'Ask for a report. Get a PDF.',
    body: 'Type "report for March" or "what\'s my profit this week?" — APSIMS replies in plain English, then sends a full PDF you can forward to your accountant, bank, or microfinance officer.',
    chat: [
      { side: 'out', text: 'Report this week' },
      { side: 'in',  text: '₦184k revenue. 23.4% margin. PDF coming…' },
    ],
  },
];

export const FEATURES = [
  {
    cls: 'hero-feat',
    icon: 'ti-messages',
    title: 'Your channel, your choice.',
    body: 'Pick WhatsApp or Telegram — whichever you already use for your business. Each account is independent. If you ever need to switch channels, just reach out and we\'ll handle it.',
    mock: true,
  },
  { cls: 'med', icon: 'ti-brain',           title: 'Natural language entry',    body: '"Sold 5 cartons Indomie for ₦9,500" — the bot parses qty, item, price, and updates inventory.' },
  { cls: 'med', icon: 'ti-package',         title: 'Live stock + alerts',       body: 'Auto-updated on every sale. Proactive low-stock pings before you run out. Restock with one message.' },
  { cls: 'med', icon: 'ti-chart-bar',       title: 'AI weekly reports',         body: '"Profit this week?" returns plain English summary + a PDF you can forward to your accountant or bank.' },
  { cls: 'med', icon: 'ti-users',           title: 'Credit & owe-book',         body: '"Mrs Ade took ₦12k on credit." Track customer debt, overdue accounts, and collect payments in chat.' },
  { cls: 'med', icon: 'ti-coin-naira',      title: 'Naira-native',              body: 'Built for ₦, not converted. Local units (bags, crates, tins), Nigerian business language, kobo precision.' },
  { cls: 'med', icon: 'ti-shield-lock',     title: 'Five-layer security',       body: 'PIN protection + DB encryption + web portal + recovery contact. Lose your phone, keep your data.' },
];

export const COMPARE_ROWS = [
  ['WhatsApp-native interface',   'no', 'partial', 'no', 'no', 'yes-us'],
  ['Telegram channel',            'no', 'no', 'no', 'no', 'yes-us'],
  ['AI conversational input',     'no', 'no', 'partial', 'no', 'yes-us'],
  ['AI-generated reports',        'no', 'no', 'yes', 'partial', 'yes-us'],
  ['Naira-native',                'yes', 'yes', 'yes', 'yes', 'yes-us'],
  ['Built for informal traders',  'yes', 'yes', 'no', 'yes', 'yes-us'],
  ['Zero-install, zero-training', 'no', 'no', 'no', 'no', 'yes-us'],
];
export const COMPARE_COLS = ['Kippa', 'Bumpa', 'Tyms AI', 'TracePOS', 'APSIMS'];

export const SEC_LAYERS = [
  { n: 'L1', icon: 'ti-brand-whatsapp', title: 'WhatsApp verification', body: 'End-to-end encryption + phone-number OTP handled by Meta. The number IS the identity.' },
  { n: 'L2', icon: 'ti-lock',           title: 'Session PIN',           body: '4-digit PIN required for reports and sensitive ops. Auto-locks after 4–8 hrs. 3 fails = 30 min lockout.' },
  { n: 'L3', icon: 'ti-database',       title: 'DB encryption',         body: 'All inventory, sales, credit data encrypted at rest. Keyed to your phone number. Recoverable via email.' },
  { n: 'L4', icon: 'ti-browser',        title: 'Web portal',            body: 'Email + PIN login gives full access independent of WhatsApp. CSV / PDF export anytime.' },
  { n: 'L5', icon: 'ti-user-shield',    title: 'Recovery contact',      body: 'Trusted contact + registered email lets you migrate to a new number with zero data loss.' },
];

export const CHANNELS = [
  {
    icon: 'ti-brand-whatsapp',
    title: 'WhatsApp',
    body: 'The most familiar option for most traders. Send /start to the APSIMS number, name your business, and you\'re live. No app to download — it runs in the chat you already have open.',
    tag: 'Available now',
    color: 'green',
  },
  {
    icon: 'ti-brand-telegram',
    title: 'Telegram',
    body: 'Prefer Telegram? Full feature parity — same AI, same data engine, same PDF reports. Richer interactive menus and no limits on proactive messages from us to you.',
    tag: 'Available now',
    color: 'blue',
  },
  {
    icon: 'ti-browser',
    title: 'Web portal',
    body: 'Log in at any browser with your email and PIN. Full dashboard, CSV exports, PDF history, and account management — independent of your messaging app.',
    tag: 'Available now',
    color: 'green',
  },
  {
    icon: 'ti-device-mobile',
    title: 'Mobile & desktop apps',
    body: 'Native iOS, Android, and desktop apps for a richer view — charts, multi-location, team management. Available for download alongside your chat channel.',
    tag: 'Available now',
    color: 'green',
  },
];

export const TESTI_SMALL = [
  { q: 'Before APSIMS my notebook was always missing pages. Now I just type and it remembers everything.', name: 'Chinwe O.', role: 'Provision store · Aba',    color: 'a' },
  { q: 'The PDF report saved my loan application. My bank accepted it the same day.',                      name: 'Tunde I.',  role: 'Fashion vendor · Lagos', color: 'b' },
];

export const FAQS = [
  { q: 'Do I need to download anything?',            a: 'No. APSIMS lives entirely inside WhatsApp (and Telegram). Save the number, send /start, and you\'re in. No app store, no installation, nothing to learn.' },
  { q: 'How does APSIMS understand my messages?',    a: 'We use task-specific AI tuned for inventory and sales language — naira amounts, local units (bags, crates, tins), Nigerian business vocabulary. It echoes back what it understood so you can correct mistakes immediately.' },
  { q: 'What if I lose my phone?',                   a: 'Your data is safe. Everything lives in APSIMS\'s encrypted database, keyed to your phone number — not on your phone. Get a new SIM with the same number, reinstall WhatsApp, and message the bot. You\'re back in seconds.' },
  { q: 'Is this allowed under WhatsApp\'s rules?',   a: 'Yes. Meta\'s January 2026 policy bans general-purpose AI chatbots, but task-specific business tools — like inventory management — are explicitly compliant. APSIMS routes through an approved WhatsApp Business Solution Provider.' },
  { q: 'How much does it cost?',                     a: 'Free to start — up to 50 entries per month. Basic at ₦1,500/month gets unlimited entries and monthly PDF reports. Pro at ₦3,500/month adds credit tracking, AI insights, and the web portal. See full pricing →' },
  { q: 'Can I switch between WhatsApp and Telegram?', a: 'Each APSIMS account lives on one channel — your data is tied to the account you opened, not to both at once. If you need to move to a different channel, contact us and we\'ll migrate your data. Most traders pick one and stick with it.' },
];

export const SAMPLE_PROMPTS = [
  { label: 'Sold 12 bags of garri for ₦15,000', icon: 'ti-shopping-cart' },
  { label: 'How many crates of malt left?',      icon: 'ti-package' },
  { label: 'Report this week',                   icon: 'ti-chart-bar' },
  { label: 'How much does Mrs Ade owe me?',      icon: 'ti-users' },
];

export const STOCK_DB = {
  rice:    { left: 58, unit: 'bags',    trend: 'ok' },
  garri:   { left: 22, unit: 'bags',    trend: 'ok' },
  oil:     { left: 14, unit: 'bottles', trend: 'low' },
  malt:    { left: 9,  unit: 'crates',  trend: 'low' },
  indomie: { left: 47, unit: 'cartons', trend: 'ok' },
  beans:   { left: 31, unit: 'bags',    trend: 'ok' },
  tomato:  { left: 6,  unit: 'tins',    trend: 'low' },
};
