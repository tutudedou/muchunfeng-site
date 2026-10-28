/**
 * 站点所有可编辑内容集中在这里。
 * 带有「待补充」字样的字段是占位信息，上线前请替换为真实内容。
 */

export const site = {
  // 品牌名取自门头招牌「沐椿风」；如需改为「沐春风」，只改这里一处即可
  name: '沐椿风',
  fullName: '沐椿风 · 手工旗袍',
  tagline: '非遗旗袍定制与教学',
  slogan: '不只是一件衣裳，是独属于你的东方韵味',
  intro: '从量体、打板到缝制，亲手触摸传统的温度。',
  city: '广州',
  description:
    '沐椿风位于广州，专注非遗手工旗袍定制与教学。从量体、打板到缝制，为你做一件独属于自己的旗袍。',
  // 以下为占位信息，请替换
  address: '广州市（待补充：详细门店地址）',
  phone: '待补充',
  wechat: '待补充',
  hours: '待补充：营业时间',
  // 微信二维码图片放到 public/images/wechat-qr.jpg 后，把下面改成 true
  hasWechatQr: false,
} as const;

export const nav = [
  { href: '/', label: '首页' },
  { href: '/works/', label: '作品' },
  { href: '/custom/', label: '定制' },
  { href: '/teaching/', label: '教学' },
  { href: '/about/', label: '关于' },
  { href: '/contact/', label: '预约' },
] as const;

export type Img = { src: string; alt: string; w: number; h: number };

/** public 目录下的资源路径；子路径部署（如 GitHub Pages 项目站点）时自动加前缀 */
export const asset = (path: string) => `${process.env.NEXT_PUBLIC_BASE_PATH ?? ''}${path}`;

const img = (file: string, alt: string, w: number, h: number): Img => ({
  src: asset(`/images/${file}`),
  alt,
  w,
  h,
});

export const images = {
  storefront: img('storefront.jpg', '沐椿风门店外观，门头写着非遗旗袍定制与教学', 1440, 960),
  fabricWallWide: img('fabric-wall-wide.jpg', '店内整面墙的面料样布与旗袍人台', 1440, 960),
  fabricWallClose: img('fabric-wall-close.jpg', '面料墙特写，孔雀羽纹、墨竹与几何拼色', 1440, 960),
  mannequin: img('mannequin-cloud-collar.jpg', '人台上的酱红色旗袍，领口绣有云纹', 1080, 1620),
  studioHall: img('studio-hall.jpg', '工作室内部，旗袍挂架、竹屏与线架', 1440, 960),
  threadWall: img('thread-wall.jpg', '整面墙的彩色缝纫线', 1440, 960),
  collarDetail: img('collar-detail.jpg', '黑色旗袍的立领与盘扣细节', 1080, 1440),
  blackPair: img('black-bamboo-pair.jpg', '墨竹暗纹黑色旗袍与蕾丝内搭', 1080, 1440),
  laceHem: img('lace-hem.jpg', '旗袍开衩处的镶边与蕾丝细节', 1080, 1440),
  books: img('books.jpg', '书架上的旗袍工艺与文化典籍', 1440, 960),
  rack: img('qipao-rack.jpg', '挂架上一排各色旗袍与盘扣', 1440, 960),
  teaCorner: img('tea-corner.jpg', '店内的茶桌与竹影屏风，用于沟通款式', 1440, 960),
} as const;

/** 作品页图集 */
export const works: { img: Img; title: string; note: string }[] = [
  { img: images.mannequin, title: '云纹立领', note: '酱红面料，领口云纹绲边' },
  { img: images.blackPair, title: '墨竹暗纹', note: '黑色暗纹面料，米白绲边' },
  { img: images.collarDetail, title: '立领盘扣', note: '一粒扣的收口细节' },
  { img: images.laceHem, title: '开衩蕾丝', note: '衩口镶边与蕾丝点缀' },
  { img: images.rack, title: '日常款式', note: '不同面料与盘扣的搭配' },
  { img: images.fabricWallClose, title: '面料墙', note: '真丝、提花、印花等面料可现场挑选' },
];

export const marquee = ['手工旗袍', '量体', '打板', '缝制', '定制', '教学', '东方韵味'];

export const processSteps = [
  {
    no: '01',
    title: '量体与沟通',
    body: '在茶桌边聊聊你的场合、喜好与身形，再细致量体。一件合身的旗袍，从看懂你的身体开始。',
    img: images.teaCorner,
  },
  {
    no: '02',
    title: '选料与设计',
    body: '面料墙上有多种质地与纹样可摸可比。领型、袖长、盘扣、开衩与镶边，一项项和你商量。',
    img: images.fabricWallWide,
  },
  {
    no: '03',
    title: '打板与裁剪',
    body: '按你的尺寸单独制板，不套用成衣版型。书架上的工艺典籍，是我们反复对照的依据。',
    img: images.books,
  },
  {
    no: '04',
    title: '手工缝制',
    body: '绲边、盘扣、锁边，凡是能用手做的细节都尽量亲手完成，试穿后再微调到合身为止。',
    img: images.threadWall,
  },
];

export const customFaq = [
  {
    q: '定制一件旗袍大概需要多久？',
    a: '周期与款式、面料和工艺繁简有关。到店沟通后，我们会根据你的选择给出明确的交付时间。',
  },
  {
    q: '需要到店几次？',
    a: '通常包括量体选料、试穿调整和取衣几个环节。具体次数视款式而定，预约时可以详细说明。',
  },
  {
    q: '可以自己带面料来做吗？',
    a: '可以先联系我们，说明面料类型和用量，我们会评估是否适合制作旗袍。',
  },
  {
    q: '不在广州，可以定制吗？',
    a: '手工旗袍对合身度要求高，建议到店量体试穿。外地客人可先联系，我们帮你安排行程。',
  },
];

export const teachingPoints = [
  { title: '从量体开始', body: '学会量体、读懂人体结构，这是做出合身旗袍的第一步。' },
  { title: '亲手打板', body: '从基础样板入手，理解领、袖、胸、腰的关系，再逐步做出自己的版型。' },
  { title: '传统工艺', body: '绲边、盘扣、锁缝等手工技法，一针一线在工作室里练习。' },
  { title: '完成自己的旗袍', body: '以做出一件属于自己的旗袍为目标，老师全程陪着你完成。' },
];

export const teachingFaq = [
  {
    q: '零基础可以学吗？',
    a: '可以。课程从工具认识和基础手法开始，按你的进度循序渐进。',
  },
  {
    q: '上课需要自己带材料吗？',
    a: '材料与工具的准备方式，报名咨询时会提前告知，避免你多买或漏买。',
  },
  {
    q: '课程怎么收费、多久一期？',
    a: '课程安排和费用会根据班型调整，欢迎添加微信或到店咨询最新信息。',
  },
];
