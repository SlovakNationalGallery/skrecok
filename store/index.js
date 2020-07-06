

export const state = () => ({
  videosLoaded: false,
  ytPlaylistItems:[],
  profiles: {
    'Intro': {
      title: 'Škrečok',
      subtitle: '✸ 2019, Bratislava',
      avatarSrc: '/img/avatar-skrecok.png',
      linkSrc: 'https://www.sng.sk/sk/vystavy/2295_podivuhodne-dejiny-umenia-s-profesorom-skreckom',
    },
    'Július Koller': {
      title: 'Július Koller',
      subtitle: '✸ 1939, Piešťany <br> ✝ 2007, Bratislava',
      avatarSrc: '/img/avatar-koller.png',
      linkSrc: 'https://www.webumenia.sk/autor/5089',
      worklist: 'koller'
    },
    'Anna Daučíková': {
        title: 'Anna Daučíková',
        subtitle: '✸ 1950, Bratislava',
        avatarSrc: 'img/avatar-daucikova.png',
        linkSrc: 'http://artbase.kunsthallebratislava.sk/umelec/1918',
        worklist: 'daucikova'
    },
    'Pablo Picasso': {
        title: 'Pablo Picasso',
        subtitle: '✸ 1881, Malaga, Španielsko <br> ✝ 1973, Mougins, Francúzsko',
        avatarSrc: 'img/avatar-picasso.png',
        linkSrc: 'https://www.webumenia.sk/autor/7821',
        worklist: 'picasso'
    },
    'Roman Ondak': {
        title: 'Roman Ondak',
        subtitle: '✸ 1966, Žilina',
        avatarSrc: 'img/avatar-ondak.png',
        linkSrc: 'http://artbase.kunsthallebratislava.sk/umelec/7446',
        workList: 'ondak'
    },
    'Vladimír Dedeček': {
        title: 'Vladimír Dedeček',
        subtitle: '✸ 1929, Martin',
        avatarSrc: 'img/avatar-dedecek.png',
        linkSrc: 'https://www.webumenia.sk/en/autor/1052763',
        workList: 'dedecek'
    },
    'Marcel Duchamp': {
        title: 'Marcel Duchamp',
        subtitle: '✸ 1887, Blainville-Crevon, Francúzsko <br> ✝ 1968, Neuilly-sur-Seine, Francúzsko',
        avatarSrc: 'img/avatar-duchamp.png',
        linkSrc: 'https://sk.wikipedia.org/wiki/Marcel_Duchamp',
        workList: 'duchamp'
    },
    'Andy Warhol': {
        title: 'Andy Warhol',
        subtitle: '✸ 1928, Pittsburgh, USA <br> ✝ 1987, New York, USA',
        avatarSrc: 'img/avatar-warhol.png',
        linkSrc: 'https://www.webumenia.sk/autor/11636',
        workList: 'warhol'
    },
    'Maria Bartuszová': {
        title: 'Maria Bartuszová',
        subtitle: '✸ 1936, Praha <br> ✝ 1996, Košice',
        avatarSrc: 'img/avatar-bartuszova.png',
        linkSrc: 'https://www.webumenia.sk/autor/513',
    },
    'default': {
      subtitle: '',
      avatarSrc: '',
      linkSrc: '',
    },
  },
})


export const mutations = {
  setYtPlaylistItems (state, ytPlaylistItems) {
    state.ytPlaylistItems = ytPlaylistItems;
    state.videosLoaded = true;
  }
}
