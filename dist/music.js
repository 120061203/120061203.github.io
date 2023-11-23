const ap = new APlayer({
    container: document.getElementById('aplayer'),
    fixed: false,
    autoplay: false,
    theme: '#b7daff',
    loop: 'all',
    order: 'list',
    preload: 'auto',
    volume: 0.7,
    mutex: true,
    listFolded: false,
    listMaxHeight: '200px',
    lrcType: 3,
    audio: [
      {
        name: "Aylex - Cinematic",
        artist: 'good',
        url: '../images/Aylex - Cinematic.mp3',
        cover: ''
      },
      {
        name: '哥哥爸爸真偉大',
        artist: '兒歌',
        url: 'https://XXX.mp3',
        cover: '/music/cover/哥哥爸爸真偉大.jpg'
      }
    ]
});