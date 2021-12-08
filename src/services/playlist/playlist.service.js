export const fetchPlaylists = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve(data), 1000)
  });
};

const data = [
  {
      id: 1,
      title: 'Chill',
      imageUrl: 'https://i.ytimg.com/vi/DWcJFNfaw9c/maxresdefault.jpg',
      quantity: 8,
      duration: '18h30min',
  },
  {
      id: 2,
      title: 'Rap',
      imageUrl: 'https://www.okayplayer.com/wp-content/uploads/2020/03/Screen-Shot-2020-03-23-at-3.04.37-PM.jpg',
      quantity: 12,
      duration: '30min',
  },
  {
      id: 3,
      title: 'Gym',
      imageUrl: 'https://i.ytimg.com/vi/N12zacO7g9I/maxresdefault.jpg',
      quantity: 50,
      duration: '2h40min',
  },
  {
      id: 4,
      title: 'Zumba',
      imageUrl: 'https://www.zumba.com/img/blt/about/about-video-xsmall.jpg',
      quantity: 6,
      duration: '1h15min',
  },
  {
      id: 5,
      title: 'Baile Funk',
      imageUrl: 'https://i.ytimg.com/vi/2ahV7JXdkNE/maxresdefault.jpg',
      quantity: 35,
      duration: '5h20min',
  },
  {
      id: 6,
      title: 'Rock',
      imageUrl: 'https://www.gannett-cdn.com/presto/2019/01/25/PNAS/a2ba5af2-f783-4889-90c0-aba94248128a-Metallica-20190124-01.jpg?crop=3299,1856,x1,y209&width=3200&height=1801&format=pjpg&auto=webp',
      quantity: 70,
      duration: '8h45min',
  },
  {
      id: 7,
      title: 'Pagode',
      imageUrl: 'https://www.diariodepernambuco.com.br/static/app/noticia_127983242361/2019/04/15/784190/20190415083733887909i.jpg',
      quantity: 25,
      duration: '3h50min',
  },
  {
      id: 8,
      title: 'Eletrônica',
      imageUrl: 'https://i1.sndcdn.com/artworks-000152657501-heglbu-t500x500.jpg',
      quantity: 63,
      duration: '4h15min',
  },
  {
      id: 9,
      title: 'Raça Negra',
      imageUrl: 'https://revistafactual.com.br/wp-content/uploads/2019/07/grupo-raca-negra-foto-reproducao-facebook.jpg',
      quantity: 20,
      duration: '2h30min',
  },
]