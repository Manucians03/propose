import type {
  TNavLink,
  TAchievement,
  TTimeline,
} from "../types";

import * as assets from "../assets";

const navLinks: TNavLink[] = [
  {
    id: "introduction",
    title: "Introduction",
  },
  {
    id: "timeline",
    title: "Timeline",
  },
  {
    id: "achievements",
    title: "Achievements",
  },
  {
    id: "questionnaire",
    title: "The Question",
  },
];

const achievements: TAchievement[] = [
  {
    title: "Bó hoa",
    number: 6,
  },
  {
    title: "Cốc trà đá",
    number: 50,
  },
  {
    title: "Hours on call",
    number: 200,
  },
  {
    title: "Snaps",
    number: 20000,
  },
];

const timelines: TTimeline[] = [
  {
    name: "Xem Before Runrise",
    photo: "",
    date: "14/04/2024",
    description: "Hôm sinh nhật em anh inbox chúc mừng, mình chat một hồi lâu xong anh rủ được em xem phim hehe. Trước đấy anh xem phim này 1 lần rồi, xong thích quá ủ lại không dám xem lần 2, đến lúc gạ được em mới lôi ra. Xem xong phim anh ăn lẩu với bạn còn em đi ngủ. Em còn bảo \"I'll be your plus one!\" làm anh đớ 1 lúc. Khéo mỏ vcl!!!",
  },
  {
    name: "Xem Before Sunset",
    photo: "",
    date: "21/04/2024",
    description: "Xem tiếp phần 2 của trilogy. Đây là 2 lần duy nhất mình xem phim thành công lol. Xong lần này mấy tuần sau đấy anh có rủ em xem tiếp nhưng mà em bảo bận, anh buồn thối...",
  },
  {
    name: "Lần đầu mình đi chơi",
    photo: assets.landau,
    date: "19/07/2024",
    description: "Cuối cùng thì ngày này cũng tới moahahahaa! Ê nhưng mà mình không có ảnh hôm này huhu!!! Có mỗi ảnh cap màn hình Zalo, mình đang ngổi cafe Lâm thì bố anh gọi về nấu cơm mdr 😭",
  },
  {
    name: "Đi chơi Hà Nội tập 1",
    photo: assets.gokart,
    date: "25/07/2024",
    description: "Lần đầu anh đi date sau 1 tỉ năm. Ngày quốc tang 2 đứa đèo nhau đi chơi quanh thủ đô lol 🤪 Mình đi chơi Go Kart, đi chân cầu Long Biên, đi ăn ở phố cổ rồi đi cafe đường tàu.",
  },
  {
    name: "Our first date, according to you 🙄",
    photo: assets.firstdate,
    date: "29/07/2024",
    description: "Lần đầu mình bike date sau mấy cái kèo mồm. Mình đạp quanh hồ An Biên xong vào cafe Vòng trú mưa phải 2 tiếng. And I ased you out. And you said yes. And we had our first kiss 👅",
  },
  {
    name: "Cuối tuần đầu ở Hải Phòng",
    photo: assets.locket,
    date: "04-05/08/2024",
    description: "Tình mới chớm nở đã phải mập mờ xa 👎 Anh đi làm cả tuần cuối tuần mới về Hải Phòng thăm em gái quê được. Mình đi Arta nè, lượn phố nè, đạp xe qua cầu Hoàng Văn Thụ nè, xong đi work date lần 1, mở đầu cho 1 chuỗi work date mỗi chiều thứ 2. This Locket pic hints được 1 số thằng.",
  },
  {
    name: "Đi chơi Hà Nội tập 2",
    photo: assets.emvahoa,
    date: "07-10/08/2024",
    description: "Buổi date hôm thứ 4 thành công ác: mình đi ăn ramen, đi làm nến rồi đi Bình Minh Jazz Club. On Friday we cooked, we cleaned, I teached, we slept and we discovered our talent for cuddling. And I got you the first bouquet of flowers. Date xong em đi Đại Lải còn anh đi gặp chồng yêu lần 2 hihi 🍭",
  },
  {
    name: "Cuối tuần thứ 2 ở Hải Phòng",
    photo: assets.emvahoa2,
    date: "11-12/08/2024",
    description: "Another weekend, another bike date, another bunch of flowers, and another unproductive Monday work date 🤦‍♂️ ",
  },
  {
    name: "1 cuối tuần nữa ở Hải Phòng",
    photo: assets.anhvatui,
    date: "17-18/08/2024",
    description: "Cuối tuần này minh đi đồi Thiên Văn nè. Trên đường về được đón bão nhẹ nữa.",
  },
  {
    name: "Đi chơi Hà Nội tập 3 (mong chưa phải tập cuối)",
    photo: assets.kiss,
    date: "22-24/08/2024",
    description: "Đi thrift đi ăn đi chạy bão to đi bar đi Nậu đi cafe đi ấppp 🙌 Xong phim em đi làng cổ Đường Lâm anh đi Hạ Long.",
  },
  {
    name: "Thử thách date 7 ngày 1 tuần",
    photo: assets.kem,
    date: "26/08-01/09/2024",
    description: "Khởi nguồn của chuỗi date ma quỷ, 1 tuần đi 10 cái date anh không liệt kê nổi nữa... Trong đó có hôm thứ 6 mình sáng đi thrift, chiều đi lấy cao răng, xong tối đi đua xe. Anh nghỉ làm sớm 1 tuần để về quê healing ai ngờ phải đi date full time.",
  },
  {
    name: "Anh cút khỏi Việt Nam 🛫",
    photo: assets.lastday,
    date: "02/09/2024",
    description: "Ngày này xứng đáng đi vào lịch sử 🙌 Tưởng đi lượn phố buổi sáng chiu chiu thôi ai dè... Xong anh còn kịp tặng em 1 bó hoa cuối. Xong còn kịp ăn bánh trung thu cho đúng plan ban đầu. Siêu hiệu quả Dihu ơi!",
  },
  {
    name: "Đến lượt em cút khỏi Việt Nam 🛫",
    photo: assets.hoahong,
    date: "04/09/2024",
    description: "Nhìn hoa ngày cuối anh tặng em nè. Thế là hết dấu chân đôi mình ở Việt Nam...",
  },
  {
    name: "SHE SAID YESSS!!!",
    photo: assets.propose,
    date: "29/09/2024",
    description: "Tròn 2 tháng dating and she said yes!!! Lạ đời 2 đứa sợ commitment sợ yêu xa xong dí đầu vào LDR. We're in for a ride babe so buckle up! Chịu khó yêu xa hẹn một ngày không xa được yêu gần ạ.",
  },
];

export { navLinks, timelines, achievements };
