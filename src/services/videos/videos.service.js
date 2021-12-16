export const fetchVideoById = (id) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve(
      data.find(item => item.id === id)
      ), 1000)
  });
}

const data = [
  {
    id: 'zmb01',
    imageUri: "https://www.incimages.com/uploaded_files/image/1920x1080/425A8015_Retouched_283406.jpg",
    title: "Zumba Class 1",
    description: "Dancing School",
  },
  {
    id: 'zmb02',
    imageUri: "https://www.incimages.com/uploaded_files/image/1920x1080/425A8015_Retouched_283406.jpg",
    title: "Zumba Class 2",
    description: "Dancing School",
  },
  {
    id: 'zmb03',
    imageUri: "https://www.incimages.com/uploaded_files/image/1920x1080/425A8015_Retouched_283406.jpg",
    title: "Zumba Class 3",
    description: "Dancing School",
  },
  {
    id: 'chl01',
    imageUri: "https://i.ytimg.com/vi/DWcJFNfaw9c/maxresdefault.jpg",
    title: "Chill Vibes 1",
    description: "Relax / Study",
  },
  {
    id: 'chl02',
    imageUri: "https://static.wikia.nocookie.net/aesthetics/images/5/56/Wp2337007.jpg/revision/latest?cb=20190731200308",
    title: "Chill Vibes 2",
    description: "Relax / Study",
  },
  {
    id: 'chl03',
    imageUri: "https://playbpm.com.br/wp-content/uploads/2020/05/lo-fi-brasil.jpeg",
    title: "Chill Vibes 3",
    description: "Relax / Study",
  }
]
