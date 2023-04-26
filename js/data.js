"use strict";

// TUNiB mebers
const members = [
  {
    name: "Kyubyong Park",
    englishName: "박규병",
    img: "img/member01.png",
    href: "#member1",
    position: "CEO (Chief Executive Officer)",
    discription: `Master of Arts in Linguistics at University of Hawaii
        Bachelor of Arts at Seoul National University
        Former Kakao Brain NLP Team Leader
        He loves both language and technology equally.`,
  },
  {
    name: "Ahra Cho",
    englishName: "조 아 라",
    img: "img/member02.png",
    href: "#member2",
    position: "CSO (Chief Strategy Officer)",
    discription: `Ph.D. Student in AI at Swiss School of Management Seoul
        Master of Advanced Management at Yale School of Management
        Master of Business Administration at Seoul National University
        Bachelor of Business Administration at Yonsei University
        Former Corporate Strategy, New Business Strategy and Marketing Strategy at KT&G`,
  },
  {
    name: "Jiwoo Park",
    englishName: "박 지 우",
    img: "img/member03.png",
    href: "#member3",
    position: "NLP/Software Engineer",
    discription: `Former NLP/Software Engineer at Kakao Brain
        He earned a "Gaming God" certificate from Valve corp.
        He won the Korea's cycling road grand slam, but actually he hates workout.`,
  },
  {
    name: "Hyunwoong Ko",
    englishName: "고 현 웅",
    img: "img/member04.png",
    href: "#member4",
    position: "NLP Engineer",
    discription: `Former NLP Engineer at Kakao Brain
        Member of Big Science Workshop`,
  },
  {
    name: "Soohwan Kim",
    englishName: "김 수 환",
    img: "img/member05.png",
    href: "#member5",
    position: "NLP Engineer",
    discription: `Former NLP/Speech engineer at Kakao Brain
        Former Researcher at Spoken Language Lab, Sogang University`,
  },
  {
    name: "Pulip Park",
    englishName: "박 풀 잎",
    img: "img/member06.png",
    href: "#member6",
    position: "Back Office Manager",
    discription: `Former Product Manager at Kakao Brain
        Former Product Manager at Kakao`,
  },
  {
    name: "Youngyun Na",
    englishName: "나 영 윤",
    img: "img/member07.png",
    href: "#member7",
    position: "NLP Engineer",
    discription: `Former Researcher at LaMDA Lab, Ajou University`,
  },
  {
    name: "Eunji Ko",
    englishName: "고 은 지",
    img: "img/member08.png",
    href: "#member8",
    position: "Project Manager",
    discription: `Undergraduate Student at Department of Business Administration, Sogang University`,
  },
  {
    name: "Soyoung Cho",
    englishName: "조 소 영",
    img: "img/member09.png",
    href: "#member9",
    position: "Project Manager",
    discription: `Graduate Student at Department of Knowledge Service Engineering, KAIST`,
  },
  {
    name: "Myeonghyeon Ryu",
    englishName: "류 명 현",
    img: "img/member10.png",
    href: "#member10",
    position: "Data Engineer",
    discription: `Former Researcher at NeuroAI Lab, Kwangwoon University`,
  },
  {
    name: "Saechan Oh",
    englishName: "오 새 찬",
    img: "img/member11.png",
    href: "#member11",
    position: "Data Engineer",
    discription: `Undergraduate Student at Department of Computer Engineering Jeju University`,
  },
  {
    name: "Bitna Keum",
    englishName: "금 빛 나",
    img: "img/member12.png",
    href: "#member12",
    position: "Data Engineer",
    discription: `Former Researcher at NLP Lab, Konkuk University`,
  },
  {
    name: "Sangchun Ha",
    englishName: "하 상 천",
    img: "img/member13.png",
    href: "#member13",
    position: "NLP Engineer",
    discription: `Former Researcher at NeuroAI Lab, Kwangwoon University`,
  },
  {
    name: "Hakyung Lee",
    englishName: "이 하 경",
    img: "img/member14.png",
    href: "#member14",
    position: "SNS Marketer",
    discription: `Former Secretary of COO at KT&G
        Former Planning at KT&G
        Managing and Operating Online Store and SNS`,
  },
  {
    name: "Minji Park",
    englishName: "박 민 지",
    img: "img/member15.png",
    href: "#member15",
    position: "Graphic Designer",
    discription: `Graphic design for musical Bballae 2009
        Illustrated Aye The Magician Of Words: Educational Hangul comic book`,
  },
  {
    name: "Jinhee Lee",
    englishName: "이 진 희",
    img: "img/member16.png",
    href: "#member16",
    position: "Back Officer",
    discription: `Management Administration`,
  },
  {
    name: "Hangyeol Kim",
    englishName: "김 한 결",
    img: "img/member17.png",
    href: "#member17",
    position: "Data Management / IP",
    discription: `Graduated from Sonngsil Univ. with a degree in Electronic Engineering`,
  },
  {
    name: "Hayoung Yu",
    englishName: "유 하 영",
    img: "img/member18.png",
    href: "#member18",
    position: "Data Management",
    discription: `Undergraduate Student at Department of French
        Language and Literature, Sungshin Women’s University`,
  },
  {
    name: "Yeeun Park",
    englishName: "박 예 은",
    img: "img/member19.png",
    href: "#member19",
    position: "Data Management",
    discription: `Bachelor of Business Administration at Yong-in Universityn`,
  },
  {
    name: "Mijin Son",
    englishName: "손 미 진",
    img: "img/member20.png",
    href: "#member20",
    position: "Voice Actor",
    discription: `Bachelor of Arts at Kyonggi University`,
  },
  {
    name: "Seungji Ryu",
    englishName: "류 승 지",
    img: "img/member21.png",
    href: "#member21",
    position: "Project Manager",
    discription: `Graduated from Gachon Univ. with a degree in Business Administration`,
  },
  {
    name: "Yoseph Ham",
    englishName: "함 요 셉",
    img: "img/member22.png",
    href: "#member22",
    position: "Data Management",
    discription: `Former SNS Marketing at Huro-Interactive`,
  },
  {
    name: "Heechang Jo",
    englishName: "조 희 창",
    img: "img/member23.png",
    href: "#member23",
    position: "Data Management",
    discription: `Undergraduate Student at Electronic Engineering, Bucheon University`,
  },
  {
    name: "Hyojin An",
    englishName: "안 효 진",
    img: "img/member24.png",
    href: "#member24",
    position: "UX Designer",
    discription: `Master of Design in Digital Media Design at International Design School for Advanced Studies, Hongik University`,
  },
  {
    name: "Nayeon Kimo",
    englishName: "김 나 연",
    img: "img/member25.png",
    href: "#member25",
    position: "Web Publisher",
    discription: `Bachelor of Arts at Dankook University
        Web publisher considering usability and accessibility`,
  },
  {
    name: "Myungwoo Hyun",
    englishName: "현 명 우",
    img: "img/member26.png",
    href: "#member26",
    position: "Video Director",
    discription: `Short Bus (2021) was released at Lotte Cinema.
        Echemo, behold the man (2019) was created and invited to the Yubari International Fantastic Film Festival.`,
  },
  {
    name: "Seungpyo Hong",
    englishName: "홍 승 표",
    img: "img/member27.png",
    href: "#member27",
    position: "Data Management",
    discription: `Graduated from Kyung Hee Univ. with a degree in Economics`,
  },
  {
    name: "Subeen Choe",
    englishName: "최 수 빈",
    img: "img/member28.png",
    href: "#member28",
    position: "Data Engineer",
    discription: `Former Undergraduate Research Student at AIaaS Lab, Kwangwoon University`,
  },
  {
    name: "Jisoo Kim",
    englishName: "김 지 수",
    img: "img/member29.png",
    href: "#member29",
    position: "Data Engineer",
    discription: `Undergraduate Student at Department of Data Science, Kwangwoon University`,
  },
  {
    name: "Seongyeong Yoon",
    englishName: "윤 성 영",
    img: "img/member30.png",
    href: "#member30",
    position: "Back Officer",
    discription: `Undergraduate Student at Department of accounting & taxation, Kyung-Hee Universit`,
  },
  {
    name: "Minsuh Seo",
    englishName: "서 민 서",
    img: "img/member31.png",
    href: "#member31",
    position: "Data Management",
    discription: `Graduated from Dongguk Univ. DUICA with a degree in Computer Science`,
  },
  {
    name: "Hwajin Sung",
    englishName: "성 화 진",
    img: "img/member32.png",
    href: "#member32",
    position: "Data Management",
    discription: `Bachelor of Urban Studies and Planning in the University of Illinois at Urbana-Champaign`,
  },
  {
    name: "Seokjin Choi",
    englishName: "최 석 진",
    img: "img/member33.png",
    href: "#member33",
    position: "Front-end Engineer",
    discription: `Undergraduate Student at Department of computer science, Yeungnam University`,
  },
];

// member 추가 함수
const memberList = () => {
  // document.querySelector = class를 선택
  const list = document.querySelector(".members_list");

  // js 내장함인 map을 이용하여 mambers의 length만큼 접근합니다
  members.map((member) => {
    //document.createElement = element를 생성합니다
    const item = document.createElement("li");

    const tag = document.createElement("a");
    tag.className = "active";
    tag.href = member.href;

    const img = document.createElement("img");
    img.className = "5";

    // appendChild === child node 추가
    list.appendChild(item); //  item = li
    item.appendChild(tag); // tag = a
    tag.appendChild(img); // img = img

    img.src = member.img; // img src 지정
    img.alt = member.name; // img alt 지정

    console.log(img); // console.log()
  });
};

memberList(); // 함수 실행
