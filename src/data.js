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
    story: `Their brand new single is a detour from the
    groovy Contagious tune. It talks about loving a
    person whose heart belongs to another, and
    knowing you can't change how either of you feel.

    Something between rejection and unrequited love, you’ll find your heart
    smitten at the most unexpected time. And hope is abysmal, knowing that telling how
    you feel may only ruin what’s left of the friendship that you both
    share. Love may sometimes mean giving her happiness where it doesn't include you.
    `,
    spotify: 'https://open.spotify.com/album/4qLF4Xyq19LtUt42Qv6BuC?fbclid=IwAR3VfNpyy_ML1vLIu6Py-lDIE8oAOtNIN9gRAo-9rqpP6GSGp-WF778j0vU',
    appleMusic: 'https://music.apple.com/ph/album/someone-else-single/1519409487?app=music'
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
    person you just came in contact with.`,

    spotify: 'https://open.spotify.com/album/6VwP339X2mfJQV1YRvUN6b?si=pCBOgQjUTjizBOZAL3I9uw',
    appleMusic: 'https://music.apple.com/ph/album/contagious-single/1501509424',
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
    spotify: 'https://open.spotify.com/track/5xQ4EIQAEXpcETtonans0B?si=AwqWD-ioTSKkFgSKLuSICg',
    appleMusic: 'https://music.apple.com/ph/album/backwards-single/1504070379',
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
   `,
    spotify: 'https://open.spotify.com/track/3Xadah5hCQafBUWdebXjds?si=_ON1GuDDT-2HvNzoPgMagw',
    appleMusic: 'https://music.apple.com/ph/album/away/1504245304?i=1504245305',
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
    spotify: 'https://open.spotify.com/track/4KoIyx7b5apjwHw9U232HX?si=0vKaW_YeSMiubYiePhRraA',
    appleMusic: 'https://music.apple.com/ph/album/fear/1504245304?i=1504245578',
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
    spotify: 'https://open.spotify.com/track/2uHHzkEwPJ5UGUhC4JZu7X?si=aHy_xirmQnqW2uMv7ToYnQ',
    appleMusic: 'https://music.apple.com/ph/album/no-pressure/1504245304?i=1504245580',
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
    spotify: 'https://open.spotify.com/track/2ooT45VnNVF9Hkzl1uy1KW?si=mRXC7fd7QpC3YaRUSy8P3A',
    appleMusic: 'https://music.apple.com/ph/album/over-you/1504245304?i=1504245582',
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
    spotify: 'https://open.spotify.com/track/0gP5UTiEuXZtUfxYnyPEtI?si=vK5cg1dKT12m3_At2Ar2Uw',
    appleMusic: 'https://music.apple.com/ph/album/stand/1504245304?i=1504245583',
  },
];

// const LatestNews = {
//   title: 'AOTP bags record deal with Major Label, Warner Music Philippines.',
//   body: `From winning a battle of the bands to releasing their first EP and opening up for top artists in the music scene, All Over The Place has come a long way. Just over a year ago the band was formed and now they're set to compete in the big league and finally have their voice heard and Warner Music PH is here to back them up.`,
//   date: 'November, 2019',
//   thumbnail: require('./assets/latest_news.jpg'),
//   thumbnailCSS: "url('" + require('./assets/latest_news.jpg') + "')",
// };

const LatestNews = {
  title: 'AOTP new song, "Someone Else", is now released!',
  body: `All Over The Place's first melodramatic piece for the broken hearted has been released.`,
  date: '10th of July, 2020',
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
    link: 'https://music.apple.com/ph/artist/all-over-the-place/1504554798',
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
  {
    icon: 'lab la-twitter',
    link: 'https://twitter.com/AOTPLACE'
  },
];

const Band = [
  {
    name: 'Sam Akins',
    description: 'Lead Singer',
    fb: 'https://www.facebook.com/imsamakins',
    twt: 'https://twitter.com/ImSamAkins',
    ig: 'https://www.instagram.com/imsamakins/',
    photo: require(PHOTO + 'sam.jpg'),
    photo2: require(PHOTO + 'sam2.jpg'),

  },
  {
    name: 'Pablo Punzalan',
    description: 'Guitarist',
    fb: 'https://www.facebook.com/young.Flaco.Pablo',
    twt: 'https://twitter.com/darthflaco',
    ig: 'https://www.instagram.com/flaco.pablo/',
    photo: require(PHOTO + 'pab.jpg'),
    photo2: require(PHOTO + 'pab2.jpg'),

  },
  {
    name: 'Paolo Victor Ramos',
    description: 'Bassist',
    fb: 'https://www.facebook.com/paoramos15',
    twt: 'https://twitter.com/PaoloRamosMusic',
    ig: 'https://www.instagram.com/paoloramosme/',
    photo: require(PHOTO + 'pao.jpg'),
    photo2: require(PHOTO + 'pao2.jpg'),
  },
  {
    name: 'JC Macahig',
    description: 'Keyboardist',
    fb: 'https://www.facebook.com/easylikejc',
    twt: 'https://twitter.com/jcmacahig',
    ig: 'https://www.instagram.com/jacemacahig/',
    photo: require(PHOTO + 'jc.jpg'),
    photo2: require(PHOTO + 'jc2.jpg'),
  },
  {
    name: 'Jed Aromin',
    description: 'Drummer',
    fb: 'https://www.facebook.com/jed.aromin',
    twt: 'https://twitter.com/Jeddy_boy',
    ig: 'https://www.instagram.com/morebarbacoa/',
    photo: require(PHOTO + 'jed.jpg'),
    photo2: require(PHOTO + 'jed2.jpg'),
  },
  {
    name: 'JJ Macahig',
    description: 'Guitarist',
    fb: 'https://www.facebook.com/jjmchaig',
    ig: 'https://www.instagram.com/jjmchaig/',
    photo: require(PHOTO + 'jj.jpg'),
    photo2: require(PHOTO + 'jj2.jpg'),
  },
];

const Events = [
  {
    poster: require('./assets/events/24-7-2020.jpg'),
    date: new Date('2020-07-24'),
    backgroundSize: 'contain',
    backgroundColor: '#35289A',
  },
  {
    poster: require('./assets/events/16-7-2020.jpg'),
    date: new Date('2020-07-16'),
    backgroundSize: 'contain',
    backgroundColor: '#35289A',
  },
  {
    poster: require('./assets/events/19-2-2020.jpg'),
    date: new Date('2020-02-19')
  },
  {
    poster: require('./assets/events/8-2-2020.jpg'),
    date: new Date('2020-02-08')
  },
  {
    poster: require('./assets/events/29-11-2019.png'),
    date: new Date('2019-11-29'),
    backgroundSize: 'contain',
    backgroundColor: '#5C5C44'
  },
  {
    poster: require('./assets/events/19-8-2019.png'),
    date: new Date('2019-08-19')
  },
  // {
  //   poster: require('./assets/events/18-8-2019(2).png'),
  //   date: new Date('2019-08-18')
  // },
  {
    poster: require('./assets/events/18-8-2019.png'),
    date: new Date('2019-08-18'),
    backgroundSize: 'contain',
    backgroundColor: 'rgb(6, 10, 58)'
  },
  {
    poster: require('./assets/events/16-8-2019.png'),
    date: new Date('2019-08-16')
  }
];

export { PlayList, LatestNews, SocialLinks, Band, Events };
