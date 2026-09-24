export interface MediaCoverageItem {
  title: string
  source: string
  date: string
  category: 'נדל״ן בישראל' | 'היבט משפטי' | 'נדל״ן בחו״ל' | 'עסקים ומסחר'
  url: string
}

export const MEDIA_COVERAGE: MediaCoverageItem[] = [
  {
    category: 'נדל״ן בישראל',
    source: 'גלובס',
    date: '07.08.2025',
    title: 'עסקת נדל״ן ענקית לרפאל: כחצי מיליארד שקל על מרכז לוגיסטי בעכו',
    url: 'https://www.globes.co.il/news/article.aspx?did=1001518364',
  },
  {
    category: 'נדל״ן בישראל',
    source: 'גלובס',
    date: '24.08.2025',
    title: 'עסקה חריגה ברמת גן: דירת ענק במגדל פיבקו נמכרה ב־9.45 מיליון שקל',
    url: 'https://en.globes.co.il/news/article.aspx?did=1001519370',
  },
  {
    category: 'היבט משפטי',
    source: 'גלובס',
    date: '08.04.2025',
    title: 'בית המשפט ביטל הסכם רכישה לאחר שנקבע כי הייתה הטעיה מכוונת בעסקה',
    url: 'https://en.globes.co.il/news/article.aspx?did=1001506738',
  },
  {
    category: 'נדל״ן בחו״ל',
    source: 'כלכליסט',
    date: '05.2025',
    title: 'יזמים ישראלים רכשו בניין מגורים בן שבע קומות בניו יורק בכ־28 מיליון דולר',
    url: 'https://www.calcalist.co.il/real-estate/article/sjijscewxx',
  },
  {
    category: 'נדל״ן בחו״ל',
    source: 'גלובס',
    date: '18.05.2025',
    title: 'משקיעים בנדל״ן בחו״ל? היבטי המס בישראל שחשוב להביא בחשבון',
    url: 'https://www.globes.co.il/news/article.aspx?did=1001510267',
  },
  {
    category: 'נדל״ן בחו״ל',
    source: 'גלובס',
    date: '11.05.2025',
    title: 'יוון, קפריסין ופורטוגל: מה קורה למחירי הנדל״ן ביעדים שמושכים משקיעים ישראלים',
    url: 'https://en.globes.co.il/news/article.aspx?did=1001509552',
  },
  {
    category: 'עסקים ומסחר',
    source: 'גלובס',
    date: '06.08.2025',
    title: 'עסקת המיזוג של עזריאלי וצמח המרמן: המהלכים שאפשרו לעסקת הענק לצאת לדרך',
    url: 'https://www.globes.co.il/news/article.aspx?did=1001518369',
  },
  {
    category: 'עסקים ומסחר',
    source: 'כלכליסט',
    date: '31.12.2025',
    title: 'ארי נדל״ן: רכישת מרכז לוגיסטי ב־155 מיליון שקל ושטחי מסחר ב־148 מיליון שקל',
    url: 'https://www.calcalist.co.il/market/article/rjv11ofg4zl',
  },
  {
    category: 'עסקים ומסחר',
    source: 'גלובס',
    date: '06.08.2025',
    title: 'עסקת הענק ב־KSP: 30% מהמניות נמכרו לגופים מוסדיים בכ־700 מיליון שקל',
    url: 'https://www.globes.co.il/news/article.aspx?did=1001518267',
  },
]
