import { nanoid } from "nanoid";

const filmData = [
  {
    amharicTitle: "የወንዶች ጉዳይ",
    EnglishTitle: "Yewendoch Guday",
    releaseYear: 2007,
    rating: 9.1,
    duration: "1h 41m",
    genre: ["Comedy", "Romance"],
    src: "https://youtu.be/EFxMJLQ6d6E?si=GQ0udCE1tHxRA5FP",
    image: "src/assets/images/movie thumbnails/Yewendoch Guday 2.jpg",
    id: nanoid(),
  },
  {
    amharicTitle: "የወንዶች ጉዳይ 2",
    EnglishTitle: "Yewendoch Guday 2",
    releaseYear: 2015,
    rating: 9.2,
    duration: "1h 35m",
    genre: ["Comedy", "Romance"],
    src: "https://youtu.be/3XxVNJ8szfw?si=hfVD6b7szHh4GkZd",
    image: "src/assets/images/movie thumbnails/Yewendoch Guday.jpeg",
    id: nanoid(),
  },
  {
    amharicTitle: "ድፍረት",
    EnglishTitle: "Difret",
    releaseYear: 2014,
    rating: 7.2,
    duration: "1h 47m",
    genre: ["Crime", "Thriller"],
    src: "https://youtu.be/kcKHRSEp2Wg?si=aeVN9XiIvkyH4xrn",
    image: "src/assets/images/movie thumbnails/Difret.jpeg",
    id: nanoid(),
  },
  {
    amharicTitle: "ሜድ ኢን ቻይና ",
    EnglishTitle: "Made in China",
    releaseYear: 2015,
    rating: 8.4,
    duration: "1h 27m",
    genre: ["Comedy"],
    src: "https://www.youtube.com/watch?v=B4N4bmSntfA&t=48s",
    image: "src/assets/images/movie thumbnails/Made in China.jpeg",
    id: nanoid(),
  },
  {
    amharicTitle: "በጭስ ተደብቄ",
    EnglishTitle: "Beches Tedebke",
    releaseYear: 2014,
    rating: 8.7,
    duration: "1h 44m",
    genre: ["Drama", "Thriller"],
    src: "",
    image: "src/assets/images/movie thumbnails/Beches Tedebke.jpeg",
    id: nanoid(),
  },
  {
    amharicTitle: "የአዲስ አበባ ሀብታም",
    EnglishTitle: "Ye Addis Ababa Habtam",
    releaseYear: 2015,
    rating: 8.4,
    duration: "1h 53m",
    genre: ["Comedy"],
    src: "https://www.youtube.com/watch?v=-kittse6FQU&t=37s",
    image: "src/assets/images/movie thumbnails/Ye Addis Ababa Habtam.jpeg",
    id: nanoid(),
  },
  {
    amharicTitle: "ሱማሌው ቫንዳም ",
    EnglishTitle: "Sumalew Vandam",
    releaseYear: 2019,
    rating: 7.4,
    duration: "1h 42m",
    genre: ["Comedy", "Romance"],
    src: "https://youtu.be/zjsNw7a99vE?si=lGjR4IQdb3fhrtes",
    image: "src/assets/images/movie thumbnails/Sumalew Vandam.jpeg",
    id: nanoid(),
  },
  {
    amharicTitle: "እንሳሮ",
    EnglishTitle: "Ensaro ",
    releaseYear: 2020,
    rating: 8.9,
    duration: "1h 55m",
    genre: ["Action", "Crime", "Adventure"],
    src: "https://www.youtube.com/watch?v=RfXkCXMv2qw",
    image: "src/assets/images/movie thumbnails/Ensaro.jpeg",
    id: nanoid(),
  },
  {
    amharicTitle: "አልሰጥም",
    EnglishTitle: "Alsetem",
    releaseYear: 2020,
    rating: 8.4,
    duration: "1h 37m",
    genre: ["Action", "Adventure", "Romance"],
    src: "https://www.youtube.com/watch?v=cfWx5O2wNqI",
    image: "src/assets/images/movie thumbnails/Alsetem.jpg",
    id: nanoid(),
  },
  {
    amharicTitle: "አድኤል ",
    EnglishTitle: "ADEAL ",
    releaseYear: 2020,
    rating: 6.4,
    duration: "1h 27m",
    genre: ["Action", "Crime"],
    src: "https://www.youtube.com/watch?v=_cOiDipHLes#fromHistory",
    image: "src/assets/images/movie thumbnails/ADEAL.jpg",
    id: nanoid(),
  },
  {
    amharicTitle: "አማላዩ ",
    EnglishTitle: "Amalayu ",
    releaseYear: 2015,
    rating: 8.4,
    duration: "1h 43m",
    genre: ["Romance"],
    src: "https://www.youtube.com/watch?v=-BgFT2qz4Ng#fromHistory",
    image: "src/assets/images/movie thumbnails/Amalayu.jpeg",
    id: nanoid(),
  },
  {
    amharicTitle: "ዳይናማይት ",
    EnglishTitle: "Dynamite ",
    releaseYear: 2015,
    rating: 8.2,
    duration: "1h 27m",
    genre: ["Drama", "Comedy"],
    src: "https://www.youtube.com/watch?v=zYp-euzxdA8",
    image: "src/assets/images/movie thumbnails/Dynamite.jpeg",
    id: nanoid(),
  },
  {
    amharicTitle: "ቾምቤ ",
    EnglishTitle: "Chombe ",
    releaseYear: 2016,
    rating: 6.9,
    duration: "1h 24m",
    genre: ["Comedy"],
    src: "https://www.youtube.com/watch?v=SpLt_HipVew",
    image: "src/assets/images/movie thumbnails/Chombe.jpeg",
    id: nanoid(),
  },
  {
    amharicTitle: "ወይኔ የአራዳ ልጅ 5 ",
    EnglishTitle: "Wayne Yarada Lij 5",
    releaseYear: 2020,
    rating: 7.0,
    duration: "2h 03m",
    genre: ["Drama", "Comedy"],
    src: "https://www.youtube.com/watch?v=u4n1bBSWPHY",
    image: "src/assets/images/movie thumbnails/Wayne Yarada Lij 5.jpeg",
    id: nanoid(),
  },
  {
    amharicTitle: "የፍቅር ሰው ",
    EnglishTitle: "Yefiker Sew",
    releaseYear: 2020,
    rating: 6.8,
    duration: "1h 49m",
    genre: ["Drama"],
    src: "https://www.youtube.com/watch?v=u4n1bBSWPHY",
    image: "src/assets/images/movie thumbnails/Yefiker Sew.jpeg",
    id: nanoid(),
  },
  {
    amharicTitle: "ጥለፈኝ ሙሉ",
    EnglishTitle: "Tilefegn",
    releaseYear: 2016,
    rating: 6.8,
    duration: "1h 42m",
    genre: ["Romance", "Comedy"],
    src: "https://youtu.be/fvJPyz1qb_Q?si=0CBEQi3hmibOMRO5",
    image: "src/assets/images/movie thumbnails/Tilefegn.jpeg",
    id: nanoid(),
  },
  {
    amharicTitle: "ረቡኒ",
    EnglishTitle: "Rebuni",
    releaseYear: 2017,
    rating: 8.9,
    duration: "1h 47m",
    genre: ["Psychology", "Thriller", "Drama"],
    src: "https://www.youtube.com/watch?v=BD1cn44fMIM",
    image: "src/assets/images/movie thumbnails/Difret.jpeg",
    id: nanoid(),
  },
  {
    amharicTitle: "ምዕራፍ ሁለት",
    EnglishTitle: "Mieraf Hulet",
    releaseYear: 2017,
    rating: 6.6,
    duration: "1h 47m",
    genre: ["Romance", "Comedy"],
    src: "https://www.youtube.com/watch?v=BD1cn44fMIM",
    image: "src/assets/images/movie thumbnails/Rebuni.jpeg",
    id: nanoid(),
  },
  {
    amharicTitle: "የጠፋው ልጅ",
    EnglishTitle: "Yetefaw Lij",
    releaseYear: 2016,
    rating: 6.8,
    duration: "1h 37m",
    genre: ["Drama", "Mystery"],
    src: "https://www.youtube.com/watch?v=o_XEr6NmecI",
    image: "src/assets/images/movie thumbnails/Yetefaw Lij.jpeg",
    id: nanoid(),
  },
  {
    amharicTitle: "ወፌ ቆመች",
    EnglishTitle: "Wefe Komech",
    releaseYear: 2016,
    rating: 6.8,
    duration: "1h 42m",
    genre: ["Drama", "Comedy"],
    src: "https://www.youtube.com/watch?v=vbbwxtUKP5Y",
    image: "src/assets/images/movie thumbnails/Wefe Komech.jpeg",
    id: nanoid(),
  },
  {
    amharicTitle: "ጀግኖቹ",
    EnglishTitle: "Jegnochu",
    releaseYear: 2016,
    rating: 7.0,
    duration: "1h 34m",
    genre: ["Adventure", "Comedy"],
    src: "https://www.youtube.com/watch?v=P76rjN7otlM",
    image: "src/assets/images/movie thumbnails/Jegnochu.jpeg",
    id: nanoid(),
  },
  {
    amharicTitle: "እውነታ",
    EnglishTitle: "Eweneta",
    releaseYear: 2017,
    rating: 6.9,
    duration: "1h 54m",
    genre: ["Drama"],
    src: "https://www.youtube.com/watch?v=19jBWv6-iFo",
    image: "src/assets/images/movie thumbnails/Eweneta.jpg",
    id: nanoid(),
  },
  {
    amharicTitle: "ፊደላዊት",
    EnglishTitle: "Fidelawit",
    releaseYear: 2017,
    rating: 7.9,
    duration: "1h 40m",
    genre: ["Drama, Comedy"],
    src: "https://www.youtube.com/watch?v=GK_9kGUNKEE",
    image: "src/assets/images/movie thumbnails/Fidelawit.jpeg",
    id: nanoid(),
  },
  {
    amharicTitle: "የእኔስ አዳም",
    EnglishTitle: "Yenes Adam",
    releaseYear: 2017,
    rating: 7.6,
    duration: "1h 31m",
    genre: ["Mystery, Romance"],
    src: "https://www.youtube.com/watch?v=dRvD8_-vvbg",
    image: "src/assets/images/movie thumbnails/Yenes Adam.jpeg",
    id: nanoid(),
  },
  {
    amharicTitle: "ባንዳፍ",
    EnglishTitle: "Bandaf",
    releaseYear: 2017,
    rating: 7.2,
    duration: "1h 41m",
    genre: ["Comedy, Romance"],
    src: "https://www.youtube.com/watch?v=3ufo3k3Lvl0",
    image: "src/assets/images/movie thumbnails/Bandaf.jpg",
    id: nanoid(),
  },
  {
    amharicTitle: "ዘመኔ",
    EnglishTitle: "Zemene",
    releaseYear: 2018,
    rating: 7.5,
    duration: "1h 46m",
    genre: ["Comedy, Adventure"],
    src: "https://www.youtube.com/watch?v=xJW83XMrX8A",
    image: "src/assets/images/movie thumbnails/Zemene.jpg",
    id: nanoid(),
  },

  {
    amharicTitle: "አብሳላት",
    EnglishTitle: "Absalat",
    releaseYear: 2018,
    rating: 7.3,
    duration: "1h 52m",
    genre: ["Drama, Romance"],
    src: "https://www.youtube.com/watch?v=0_etS3Xevf0",
    image: "src/assets/images/movie thumbnails/Absalat.jpg",
    id: nanoid(),
  },
  {
    amharicTitle: "ፈተሽ አግቢኝ",
    EnglishTitle: "Fetesh Agbign",
    releaseYear: 2018,
    rating: 6.9,
    duration: "1h 31m",
    genre: ["Romance"],
    src: "https://www.youtube.com/watch?v=UVW5EWs8uyk",
    image: "src/assets/images/movie thumbnails/Fetesh Agbign.jpeg",
    id: nanoid(),
  },
  {
    amharicTitle: "ድንግሉ",
    EnglishTitle: "Dingelu",
    releaseYear: 2018,
    rating: 7.3,
    duration: "1h 45m",
    genre: ["Comedy", "Romance"],
    src: "https://www.youtube.com/watch?v=OzuEechzsgE&t=3587s",
    image: "src/assets/images/movie thumbnails/Dingelu.jpeg",
    id: nanoid(),
  },
  {
    amharicTitle: "ሚስቴን ዳርኳት ",
    EnglishTitle: "Misten Darkuat",
    releaseYear: 2018,
    rating: 7.2,
    duration: "1h 53m",
    genre: ["Comedy", "Drama"],
    src: "https://www.youtube.com/watch?v=piQpWsH4Th0",
    image: "src/assets/images/movie thumbnails/Misten Darkuat.jpeg",
    id: nanoid(),
  },
  {
    amharicTitle: "አስታራቂ 2 ",
    EnglishTitle: "Astaraki 2",
    releaseYear: 2019,
    rating: 7.2,
    duration: "1h 46m",
    genre: ["Comedy"],
    src: "https://www.youtube.com/watch?v=yH5P6eYEPUw",
    image: "src/assets/images/movie thumbnails/Astaraki 2.jpeg",
    id: nanoid(),
  },
  {
    amharicTitle: "የከበረ ደሃ",
    EnglishTitle: " Yekebere Deha",
    releaseYear: 2019,
    rating: 7.9,
    duration: "1h 40m",
    genre: ["Drama", "Thriller"],
    src: "https://www.youtube.com/watch?v=PwdDP0M8l0A&t=4s",
    image: "src/assets/images/movie thumbnails/Yekebre Deha.jpeg",
    id: nanoid(),
  },
  {
    amharicTitle: "እምዬ ጭሱ",
    EnglishTitle: "Emiye Chisu",
    releaseYear: 2019,
    rating: 6.9,
    duration: "1h 30m",
    genre: ["Drama", "Comedy"],
    src: "https://www.youtube.com/watch?v=sXoAjDlaPkI",
    image: "src/assets/images/movie thumbnails/Emiye Chisu.jpeg",
    id: nanoid(),
  },
  {
    amharicTitle: "ትርፍ አንጭንም",
    EnglishTitle: "Trf Anchenem",
    releaseYear: 2019,
    rating: 7.1,
    duration: "1h 29m",
    genre: ["Comedy"],
    src: "https://www.youtube.com/watch?v=ze-sdI5JxT4",
    image: "src/assets/images/movie thumbnails/Trf Anchenem.jpeg",
    id: nanoid(),
  },
  {
    amharicTitle: "ኪያ ",
    EnglishTitle: " Kiya",
    releaseYear: 2020,
    rating: 8.6,
    duration: "1h 50m",
    genre: ["Drama", "Musical", "Thriller"],
    src: "https://www.youtube.com/watch?v=jmLi-nU2jmI&t=11s",
    image: "src/assets/images/movie thumbnails/Kiya.jpg",
    id: nanoid(),
  },
  {
    amharicTitle: "ትወደኛለችህ  ",
    EnglishTitle: "Twedegnalech",
    releaseYear: 2020,
    rating: 6.9,
    duration: "1h 40m",
    genre: ["Romance"],
    src: "https://www.youtube.com/watch?v=0mz4zQk2kHA",
    image: "src/assets/images/movie thumbnails/Twedegnalech.jpg",
    id: nanoid(),
  },
  {
    amharicTitle: "ዘውድ እና ጎፈር 2  ",
    EnglishTitle: "Zewd Ena Gofer 2",
    releaseYear: 2023,
    rating: 7.0,
    duration: "1h 42m",
    genre: ["Drama", "Thriller"],
    src: "https://www.youtube.com/watch?v=718Y6KtToxk",
    image: "src/assets/images/movie thumbnails/Zewd Ena Gofer 2.jpg",
    id: nanoid(),
  },
  {
    amharicTitle: "እንዳትረሳው",
    EnglishTitle: " Endateresaw",
    releaseYear: 2021,
    rating: 6.8,
    duration: "1h 32m",
    genre: ["Comedy"],
    src: "https://www.youtube.com/watch?v=7Fa5cCk2ePM",
    image: "src/assets/images/movie thumbnails/Endateresaw.jpeg",
    id: nanoid(),
  },
  {
    amharicTitle: "የአርበኛው ልጅ",
    EnglishTitle: "Yearbegnaw Lij",
    releaseYear: 2015,
    rating: 8.0,
    duration: "1h 51m",
    genre: ["Comedy", "Crime", "Action"],
    src: "https://www.youtube.com/watch?v=i6Mog5v4f5o",
    image: "src/assets/images/movie thumbnails/Yearbegnaw Lij.jpg",
    id: nanoid(),
  },
  {
    amharicTitle: "ህይወት እና ሳቅ",
    EnglishTitle: "Hiwot Ena Sak",
    releaseYear: 2015,
    rating: 7.8,
    duration: "1h 51m",
    genre: ["Comedy", "Romance"],
    src: "https://www.youtube.com/watch?v=i6Mog5v4f5o",
    image: "src/assets/images/movie thumbnails/Hiwot Ena Sak.jpg",
    id: nanoid(),
  },
  {
    amharicTitle: "ሳላፈቅራት",
    EnglishTitle: " SALAFEKRAT",
    releaseYear: 2021,
    rating: 6.8,
    duration: "1h 23m",
    genre: ["Drama"],
    src: "https://www.youtube.com/watch?v=1UWWT56l_AQ",
    image: "src/assets/images/movie thumbnails/SALAFEKRAT.jpeg",
    id: nanoid(),
  },
  {
    amharicTitle: "ቦሌ ማነቂያ",
    EnglishTitle: " Bole Manekiya",
    releaseYear: 2021,
    rating: 7.4,
    duration: "1h 50m",
    genre: ["Drama", "Thriller"],
    src: "https://www.youtube.com/watch?v=sPUIq1qccGo",
    image: "src/assets/images/movie thumbnails/Difret.jpeg",
    id: nanoid(),
  },
  {
    amharicTitle: "በ17 መርፌ",
    EnglishTitle: "  Be17 Merfe",
    releaseYear: 2021,
    rating: 8.5,
    duration: "1h 52m",
    genre: ["Drama", "Thriller"],
    src: "https://www.youtube.com/watch?v=Z_YEmVhzbNA",
    image: "src/assets/images/movie thumbnails/Difret.jpeg",
    id: nanoid(),
  },
  {
    amharicTitle: "ኢንስፔክተሩ",
    EnglishTitle: "Inspecteru ",
    releaseYear: 2019,
    rating: 6.9,
    duration: "1h 19m",
    genre: ["Crime", "Thriller", "Action"],
    src: "https://www.youtube.com/watch?v=v-TQqx2UlQU",
    image: "src/assets/images/movie thumbnails/Difret.jpeg",
    id: nanoid(),
  },
  {
    amharicTitle: "ይዋጣልን ",
    EnglishTitle: "Yiwatalen  ",
    releaseYear: 2019,
    rating: 7.1,
    duration: "1h 41m",
    genre: ["Romance"],
    src: "https://www.youtube.com/watch?v=hibr2E5sVkA",
    image: "src/assets/images/movie thumbnails/Difret.jpeg",
    id: nanoid(),
  },
  {
    amharicTitle: "የቅርብ ሩቅ ",
    EnglishTitle: "yekerb eruk",
    releaseYear: 2021,
    rating: 7.2,
    duration: "1h 42m",
    genre: ["Drama", "Thriller"],
    src: "https://www.youtube.com/watch?v=d1V6U0FCJgE&list=PL0emj0QQvrEEeN_b7mErJ46i6ew_3dK-V&index=282",
    image: "src/assets/images/movie thumbnails/Difret.jpeg",
    id: nanoid(),
  },
  {
    amharicTitle: "ድርድር",
    EnglishTitle: "DIRDER ",
    releaseYear: 2022,
    rating: 7.3,
    duration: "1h 34m",
    genre: ["Crime", "Thriller"],
    src: "https://www.youtube.com/watch?v=rARyAYsyLxE",
    image: "src/assets/images/movie thumbnails/Difret.jpeg",
    id: nanoid(),
  },
  {
    amharicTitle: "ሴት አይገባም",
    EnglishTitle: "Set Aygebam",
    releaseYear: 2022,
    rating: 7.0,
    duration: "1h 39m",
    genre: ["Romance"],
    src: "https://www.youtube.com/watch?v=rARyAYsyLxE",
    image: "src/assets/images/movie thumbnails/Difret.jpeg",
    id: nanoid(),
  },
  {
    amharicTitle: "300ሺ",
    EnglishTitle: "300she",
    releaseYear: 2015,
    rating: 8.8,
    duration: "1h 45m",
    genre: ["Comedy"],
    src: "https://www.youtube.com/watch?v=zWWKjRhdPEI",
    image: "src/assets/images/movie thumbnails/Difret.jpeg",
    id: nanoid(),
  },
  {
    amharicTitle: "አንድ ታሪክ ",
    EnglishTitle: "And Tarik",
    releaseYear: 2023,
    rating: 7.2,
    duration: "1h 49m",
    genre: ["Drama", "Romance", "Thriller"],
    src: "https://www.youtube.com/watch?v=xG40wEeVuo4",
    image: "src/assets/images/movie thumbnails/Difret.jpeg",
    id: nanoid(),
  },
  {
    amharicTitle: "ግዛት",
    EnglishTitle: "Gizat",
    releaseYear: 2022,
    rating: 7.0,
    duration: "1h 51m",
    genre: ["Drama", "Crime", "Thriller"],
    src: "https://www.youtube.com/watch?v=ePk_kPGB7Ew",
    image: "src/assets/images/movie thumbnails/Difret.jpeg",
    id: nanoid(),
  },
  {
    amharicTitle: "ተነቃቃን",
    EnglishTitle: "Tenekakan ",
    releaseYear: 2021,
    rating: 6.9,
    duration: "1h 41m",
    genre: ["Drama", "Crime", "Thriller"],
    src: "https://www.youtube.com/watch?v=bEWk7i1klT4",
    image: "src/assets/images/movie thumbnails/Difret.jpeg",
    id: nanoid(),
  },
  {
    amharicTitle: "የፍቅር ጥግ",
    EnglishTitle: "Yefikir Tig ",
    releaseYear: 2022,
    rating: 7.6,
    duration: "1h 52m",
    genre: ["Drama"],
    src: "https://www.youtube.com/watch?v=TvDq_CUmQMQ",
    image: "src/assets/images/movie thumbnails/Difret.jpeg",
    id: nanoid(),
  },
  {
    amharicTitle: "የሰኔ ግርግር",
    EnglishTitle: "Yesene Girgir  ",
    releaseYear: 2022,
    rating: 7.0,
    duration: "1h 52m",
    genre: ["Drama"],
    src: "https://www.youtube.com/watch?v=o-bbzw0oURA",
    image: "src/assets/images/movie thumbnails/Difret.jpeg",
    id: nanoid(),
  },
  {
    amharicTitle: "ላላይሽ ",
    EnglishTitle: "Lalayish ",
    releaseYear: 2022,
    rating: 6.5,
    duration: "1h 24m",
    genre: ["Drama"],
    src: "https://www.youtube.com/watch?v=H8VYeAHTXIw&list=PL0emj0QQvrEEeN_b7mErJ46i6ew_3dK-V&index=138",
    image: "src/assets/images/movie thumbnails/Difret.jpeg",
    id: nanoid(),
  },
  {
    amharicTitle: "አዔ ማንዴላ",
    EnglishTitle: "Atse Mandela ",
    releaseYear: 2017,
    rating: 8.7,
    duration: "1h 51m",
    genre: ["Crime", "Comedy", "Drama"],
    src: "https://www.youtube.com/watch?v=lnGYp08KPv8",
    image: "src/assets/images/movie thumbnails/Difret.jpeg",
    id: nanoid(),
  },
  {
    amharicTitle: "36 ቀናቶች",
    EnglishTitle: "36 Kenatoch",
    releaseYear: 2023,
    rating: 7.0,
    duration: "1h 36m",
    genre: ["Drama"],
    src: "https://www.youtube.com/watch?v=nSiw7fUebhk",
    image: "src/assets/images/movie thumbnails/Difret.jpeg",
    id: nanoid(),
  },
  {
    amharicTitle: "ማን ያዘዋል",
    EnglishTitle: "Manyazewal",
    releaseYear: 2023,
    rating: 7.0,
    duration: "1h 54m",
    genre: ["Drama", "Crime"],
    src: "https://www.youtube.com/watch?v=AEqC9Q3tNrk",
    image: "src/assets/images/movie thumbnails/Difret.jpeg",
    id: nanoid(),
  },
  {
    amharicTitle: "ሁለት አይነት",
    EnglishTitle: "Hulet Aynet",
    releaseYear: 2023,
    rating: 6.9,
    duration: "1h 54m",
    genre: ["Drama", "Romance"],
    src: "https://www.youtube.com/watch?v=nNvR8_yn_ik",
    image: "src/assets/images/movie thumbnails/Difret.jpeg",
    id: nanoid(),
  },
  {
    amharicTitle: "ሳቅ ተራ",
    EnglishTitle: "Sak Tera",
    releaseYear: 2022,
    rating: 6.9,
    duration: "1h 38m",
    genre: ["Comedy"],
    src: "https://www.youtube.com/watch?v=BixVWMvi41g",
    image: "src/assets/images/movie thumbnails/Difret.jpeg",
    id: nanoid(),
  },
  {
    amharicTitle: "ማነሸ ",
    EnglishTitle: "Manesh",
    releaseYear: 2023,
    rating: 6.8,
    duration: "1h 22m",
    genre: ["Comedy"],
    src: "https://www.youtube.com/watch?v=Y8oCTIAnP-8",
    image: "src/assets/images/movie thumbnails/Difret.jpeg",
    id: nanoid(),
  },
  {
    amharicTitle: "አደረግሽኝ ቀና",
    EnglishTitle: "Aderegshegn Kena",
    releaseYear: 2023,
    rating: 7.0,
    duration: "1h 20m",
    genre: ["Drama"],
    src: "https://www.youtube.com/watch?v=PqPDlsaNr-A",
    image: "src/assets/images/movie thumbnails/Difret.jpeg",
    id: nanoid(),
  },
  {
    amharicTitle: "ወዳጅ",
    EnglishTitle: "Wedaj ",
    releaseYear: 2023,
    rating: 7.5,
    duration: "1h 42m",
    genre: ["Drama"],
    src: "https://www.youtube.com/watch?v=phmIAGUlKVg",
    image: "src/assets/images/movie thumbnails/Difret.jpeg",
    id: nanoid(),
  },

  {
    amharicTitle: "የልጅ አስታራቂ",
    EnglishTitle: "YeLij Astaraki ",
    releaseYear: 2024,
    rating: 7.1,
    duration: "1h 20m",
    genre: ["Drama"],
    src: "https://www.youtube.com/watch?v=2-Hp8SPih9w",
    image: "src/assets/images/movie thumbnails/Difret.jpeg",
    id: nanoid(),
  },
  {
    amharicTitle: "ሴት አመሉ",
    EnglishTitle: "Set Amelu",
    releaseYear: 2024,
    rating: 6.9,
    duration: "1h 23m",
    genre: ["Romace"],
    src: "https://www.youtube.com/watch?v=G_ClmIolrXo",
    image: "src/assets/images/movie thumbnails/Difret.jpeg",
    id: nanoid(),
  },
  {
    amharicTitle: "እንፋታ",
    EnglishTitle: "Enifata ",
    releaseYear: 2024,
    rating: 6.8,
    duration: "1h 27m",
    genre: ["Drama"],
    src: "https://www.youtube.com/watch?v=7uyvTelNPtI",
    image: "src/assets/images/movie thumbnails/Difret.jpeg",
    id: nanoid(),
  },
  {
    amharicTitle: "የጎዳና ልጅ ",
    EnglishTitle: "Yegodana Lij ",
    releaseYear: 2024,
    rating: 6.8,
    duration: "1h 19m",
    genre: ["Comedy"],
    src: "https://www.youtube.com/watch?v=c_SKiriTmRo",
    image: "src/assets/images/movie thumbnails/Difret.jpeg",
    id: nanoid(),
  },
  {
    amharicTitle: "ማዳም ቅበሪኝ",
    EnglishTitle: "Madam Qeberign",
    releaseYear: 2024,
    rating: 7.0,
    duration: "1h 14m",
    genre: ["Comedy"],
    src: "https://www.youtube.com/watch?v=qC_yL8wkIFU",
    image: "src/assets/images/movie thumbnails/Difret.jpeg",
    id: nanoid(),
  },
  {
    amharicTitle: "ማዳም ቅበሪኝ",
    EnglishTitle: "Madam Qeberign",
    releaseYear: 2024,
    rating: 7.0,
    duration: "1h 14m",
    genre: ["Thriller", "Comedy"],
    src: "https://www.youtube.com/watch?v=YrjLUpWsMRk",
    image: "src/assets/images/movie thumbnails/Difret.jpeg",
    id: nanoid(),
  },
  {
    amharicTitle: "ታናሹ ማፍያ",
    EnglishTitle: "Tanashu Mafiya",
    releaseYear: 2024,
    rating: 7.4,
    duration: "1h 24m",
    genre: ["Thriller", "Comedy"],
    src: "https://www.youtube.com/watch?v=1_zzuoGW0hw",
    image: "src/assets/images/movie thumbnails/Difret.jpeg",
    id: nanoid(),
  },
  {
    amharicTitle: "ውስጥ አዋቂ",
    EnglishTitle: "wist awaki",
    releaseYear: 2024,
    rating: 7.2,
    duration: "1h 24m",
    genre: ["Drama"],
    src: "https://www.youtube.com/watch?v=SvNYVWxdmjs",
    image: "src/assets/images/movie thumbnails/Difret.jpeg",
    id: nanoid(),
  },
  {
    amharicTitle: "ውስጥ አዋቂ",
    EnglishTitle: "wist awaki",
    releaseYear: 2024,
    rating: 7.2,
    duration: "1h 24m",
    genre: ["Drama"],
    src: "https://www.youtube.com/watch?v=SvNYVWxdmjs",
    image: "src/assets/images/movie thumbnails/Difret.jpeg",
    id: nanoid(),
  },
  {
    amharicTitle: "ጠቦት ",
    EnglishTitle: "Lamb",
    releaseYear: 2022,
    rating: 8.2,
    duration: "1h 34m",
    genre: ["Documentry"],
    src: "https://www.youtube.com/watch?v=SvNYVWxdmjs",
    image: "src/assets/images/movie thumbnails/Difret.jpeg",
    id: nanoid(),
  },
  {
    amharicTitle: "ላምባ  ",
    EnglishTitle: "Lamba ",
    releaseYear: 2015,
    rating: 8.8,
    duration: "1h 51m",
    genre: ["Drama", "Thriller"],
    src: "https://www.youtube.com/watch?v=bTJMOyuTVLY",
    image: "src/assets/images/movie thumbnails/Difret.jpeg",
    id: nanoid(),
  },
];

export default filmData;
