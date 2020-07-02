const ALBUM_COVER = './assets/album-covers/';
const MP3 = './assets/music/';
const AOTP = 'All Over The Place';
const PHOTO = './assets/photos/';

const PlayList = [
  {
    name: 'Someone Else',
    artist: AOTP,
    cover: require(ALBUM_COVER + 'someone_else.png'),
    source: require(MP3 + 'someone-else.mp3'),
    url: 'https://www.youtube.com/channel/UCXUVAs6qA9Lq1q2DVqPIsbw',
    favorited: false,
    story: `Coming soon.`,
  },
  {
    name: 'Contagious',
    artist: AOTP,
    cover: require(ALBUM_COVER + 'contagious.png'),
    source: require(MP3 + 'contagious.mp3'),
    url: 'https://www.youtube.com/watch?v=Z0lk4B3NjO0',
    favorited: false,
    story: `Contagious is a narrative that attempts to paint a picture of how
    transmissible human feelings are, and how most times we find ourselves
    on the receiving end.
    In this case, the song is a story of how on a regular day, when nothing
    seems to spark excitement or Joy, you find yourself running into
    someone who you’ve never quite met before and your encounter with
    them could affect how the rest of your day goes.
    In this scenario, the encounter turned out to be the best thing ever in
    that moment, where the stimuli that changes your aura is the vibe of the
    person you just came in contact with.
    The song is a reminder for us to try resonate good energy and to spend
    more time with people who radiate positive energy - because our vibe
    can be highly contagious, even if we don’t realize it.`,

    spotify: 'https://www.facebook.com/AOTPMUSIC/',
    appleMusic: 'https://www.facebook.com/AOTPMUSIC/',
  },
  {
    name: 'Backwards',
    artist: AOTP,
    cover: require(ALBUM_COVER + 'backwards.png'),
    source: require(MP3 + 'backwards.mp3'),
    url: 'https://www.youtube.com/watch?v=0IR3q7rxiDE',
    favorited: false,
    story: `Backwards wasn’t written from a personal experience.
    The intention in writing Backwards was to try and depict what goes on when someone falls out of love.
    And one interesting way to look at it this is to picture your favorite love story in reverse.
    Starting all the way from the end to how it all started.
    The song aims to tell a story of how it feels when relationships fall apart through a unique virtual tour of a love story told in reverse order - From Lovers, Friends, to Strangers.
    `,
    spotify: 'https://www.facebook.com/AOTPMUSIC/',
    appleMusic: 'https://www.facebook.com/AOTPMUSIC/',
  },
  {
    name: 'Away',
    artist: AOTP,
    cover: require(ALBUM_COVER + 'aotp.png'),
    source: require(MP3 + 'away_all-over-the-place.mp3'),
    url: 'https://www.youtube.com/watch?v=qw9YBsFaSDU',
    favorited: false,
    story: `
    Away is our comfort song, it is our home song.
    Almost everyone can relate to it.
    It depicts real life stories or situations where it becomes a dead end or in a narrowing closure of dreams, promises, passion or hope.
    Away gives the listener a ray of light that, wherever you are, what situation you are in, ‘you can always come back home’.
    Home can be a lot of things.
    It can be your physical home, it can be family, it can be your former glory or a spur of the moment of your life.
    When you are all tied up in a situation where you feel you’re done, felt hopeless or running out of life, always remember, You can always come back home.`,
    spotify: 'https://www.facebook.com/AOTPMUSIC/',
    appleMusic: 'https://www.facebook.com/AOTPMUSIC/',
  },
  {
    name: 'Fear',
    artist: AOTP,
    cover: require(ALBUM_COVER + 'aotp.png'),
    source: require(MP3 + 'fear_all-over-the-place.mp3'),
    url: 'https://www.youtube.com/watch?v=Z0lk4B3NjO0',
    favorited: false,
    story: `Every person has its personal monster called fear.
    This song helps us to remind ourselves that we should live our lives above our fears.
    Not just fear of things that could happen, but also things that could not happen.
    This song encourages us that every “try” into every “unknown” is always worth the risk.
    It's far more better than living a life with what ifs.
    Wherever you are in your life, don’t let fear control you.`,
    spotify: 'https://www.facebook.com/AOTPMUSIC/',
    appleMusic: 'https://www.facebook.com/AOTPMUSIC/',
  },
  {
    name: 'No Pressure',
    artist: AOTP,
    cover: require(ALBUM_COVER + 'aotp.png'),
    source: require(MP3 + 'no-pressure_all-over-the-place.mp3'),
    url: 'https://www.youtube.com/watch?v=qw9YBsFaSDU',
    favorited: false,
    story: `This song came from a personal experience
    There are situations that
    In life there are stages where we grow and where are expected to progress.
    This song depicts the difference of both of the two stages in a life of a person.
    A stage where you can fail, make mistakes and be careless.
    And a stage where there are no rooms for mistakes.
    You can be at both stages, you will swing and miss but take it on your own pace and;
    don’t let anyone pressure you.`,
    spotify: 'https://www.facebook.com/AOTPMUSIC/',
    appleMusic: 'https://www.facebook.com/AOTPMUSIC/',
  },
  {
    name: 'Over You',
    artist: AOTP,
    cover: require(ALBUM_COVER + 'aotp.png'),
    source: require(MP3 + 'over-you_all-over-the-place.mp3'),
    url: 'https://www.youtube.com/watch?v=LgzqL76OmOE',
    favorited: false,
    story: `Over you is a song where the person in the relationship decides that he/she should end the relationship.
    It was sweet at first but during the process, but as it goes along, it was not the relationship he/she wanted to.
    So he/decides to end it.
    A lot of people can relate to it and are in relationships where they are afraid to admit the need for breaking up.
    But what is holding you is the love and affection you felt in your relationship.
    But it ain't enough to hold in the relationship.
    Now it's done and I'm over you.`,
    spotify: 'https://www.facebook.com/AOTPMUSIC/',
    appleMusic: 'https://www.facebook.com/AOTPMUSIC/',
  },
  {
    name: 'Stand',
    artist: AOTP,
    cover: require(ALBUM_COVER + 'aotp.png'),
    source: require(MP3 + 'stand_all-over-the-place.mp3'),
    url: 'https://www.youtube.com/watch?v=0JlCwEjFq2o',
    favorited: false,
    story: `
    This song was originally written for a competition but it turns out that it
    Is a cry for injustice and inequality.
    Stand is a song that reminds us that when we unite, we are stronger.
    It also shows a life without fear and hate, where you can be who you are without judgement.
    Yes, it may hurt a bit, but when you stand on who you are, no matter what, in the end, you will rise above the hate.
    Stand also encourages us to rise above the hate, to stand for others who cannot stand for their own.`,
    story_quote: `“Earth will pass away\n\r
    I know love will still remain.”`,
    spotify: 'https://www.facebook.com/AOTPMUSIC/',
    appleMusic: 'https://www.facebook.com/AOTPMUSIC/',
  },
];

const LatestNews = {
  title: 'AOTP bags record deal with Major Label, Warner Music Philippines.',
  body: `From winning a battle of the bands to releasing their first EP and opening up for top artists in the music scene, All Over The Place has come a long way. Just over a year ago the band was formed and now they're set to compete in the big league and finally have their voice heard and Warner Music PH is here to back them up.`,
  date: 'November, 2020',
  thumbnail: require('./assets/latest_news.jpg'),
  thumbnailCSS: "url('" + require('./assets/latest_news.jpg') + "')",
};

const SocialLinks = [
  {
    icon: 'lab la-spotify',
    link: 'https://open.spotify.com/artist/7buRLbM7otQjCWKwt7eDNZ',
  },
  {
    icon: 'lab la-itunes-note',
    link:
      'hhttps://music.apple.com/us/album/1454290175?ign-mpt=uo%3D4&app=music&at=1l3vpUI&ct=LFV_17e6d3204d852bcb961f4e0b06d311b8&lId=2302159&cId=none&sr=2&src=Linkfire&itscg=30440&itsct=catchall_p2&ls=1&fbclid=IwAR0V_0THRighVJqcaTErj-RUEteV8DdqhimF-AVWg0MC_J1zHrIygW3iCHg',
  },
  {
    icon: 'lab la-youtube',
    link: 'https://www.youtube.com/channel/UCXUVAs6qA9Lq1q2DVqPIsbw',
  },
  {
    icon: 'lab la-instagram',
    link:
      'https://www.instagram.com/aotpmusic/?igshid=1q216whjtb23x&fbclid=IwAR3zPCp2uR1PwexXNmVYwvm23YRd74dY-QPRjOnvKlogwfZL-69aDbuvVZg',
  },
  {
    icon: 'lab la-facebook',
    link: 'https://www.facebook.com/AOTPMUSIC/',
  },
  // {
  //   icon: 'lab la-linkedin-in',
  //   link: 'https://open.spotify.com/artist/7buRLbM7otQjCWKwt7eDNZ'
  // },
];

const Band = [
  {
    name: 'Samuel Akins',
    description: 'Lead Singer',
    fb: 'https://www.facebook.com/samuelakinbode',
    twt: 'https://www.facebook.com/samuelakinbode',
    ig: 'https://www.facebook.com/samuelakinbode',
    photo: require(PHOTO + 'sam.jpg'),
  },
  {
    name: 'Pablo Punzalan',
    description: 'Guitarist',
    fb: 'https://www.facebook.com/samuelakinbode',
    twt: 'https://www.facebook.com/samuelakinbode',
    ig: 'https://www.instagram.com/flaco.pablo/',
    photo: require(PHOTO + 'pab.jpg'),
  },
  {
    name: 'Paolo Victor Ramos',
    description: 'Bassist',
    fb: 'https://www.facebook.com/samuelakinbode',
    twt: 'https://www.facebook.com/samuelakinbode',
    ig: 'https://www.instagram.com/paoloramosme/',
    photo: require(PHOTO + 'pao.jpg'),
  },
  {
    name: 'JC Macahig',
    description: 'Keyboardist',
    fb: 'https://www.facebook.com/samuelakinbode',
    twt: 'https://www.facebook.com/samuelakinbode',
    ig: 'https://www.instagram.com/jacemacahig/',
    photo: require(PHOTO + 'jc.jpg'),
  },
  {
    name: 'Jed Aromin',
    description: 'Drummer',
    fb: 'https://www.facebook.com/samuelakinbode',
    twt: 'https://www.facebook.com/samuelakinbode',
    ig: 'https://www.instagram.com/morebarbacoa/',
    photo: require(PHOTO + 'jed.jpg'),
  },
  {
    name: 'JJ Macahig',
    description: 'Guitarist',
    fb: 'https://www.facebook.com/samuelakinbode',
    ig: 'https://www.instagram.com/jjmchaig/',
    photo: require(PHOTO + 'jj.jpg'),
  },
];

export { PlayList, LatestNews, SocialLinks, Band };