const Songs = [
    {
      id: 1,
      favourite: false,
      songName: "Bella Ciao",
      artist: "El Profesor",
      song: "https://firebasestorage.googleapis.com/v0/b/spotify-clone-dcdff.appspot.com/o/song%2FLa%20Casa%20De%20Papel%20-%20Bella%20Ciao%20%5BLyrics%5D%20(Money%20Heist)%20(320%20kbps).mp3?alt=media&token=cc64ee9e-3962-479a-8322-741e077810a1",
      imgSrc:
        "https://firebasestorage.googleapis.com/v0/b/spotify-clone-dcdff.appspot.com/o/img%2Fbellaciao.jpeg?alt=media&token=ce1e7833-6354-41f4-a579-738589e591b9",
    },
    {
      id: 2,
      favourite: false,
      songName: "Beast",
      artist: "Anirudh Ravichander",
      song: "https://firebasestorage.googleapis.com/v0/b/spotify-clone-dcdff.appspot.com/o/song%2FBeast%20Mode%20-%20Video%20Song%20_%20Beast%20_%20Thalapathy%20Vijay%20_%20Nelson%20_%20Anirudh%20_%20Sun%20Music%20(320%20kbps).mp3?alt=media&token=da536fe1-9624-4643-94a7-2f2a3ac1e60a",
      imgSrc:
        "https://firebasestorage.googleapis.com/v0/b/spotify-clone-dcdff.appspot.com/o/img%2Fbeast.jpeg?alt=media&token=f764c204-81a7-4533-afdf-4112b0c339f3",
    },
    {
      id: 3,
      favourite: false,
      songName: "Joker - Rock and Roll",
      artist: "Hildur Guðnadóttir",
      song: "https://firebasestorage.googleapis.com/v0/b/spotify-clone-dcdff.appspot.com/o/song%2FJoker%20BGM%20Song%20(Bass%20Boosted)%20(320%20kbps).mp3?alt=media&token=f7366161-69a9-4328-9920-64af8b5a287c",
      imgSrc:
        "https://firebasestorage.googleapis.com/v0/b/spotify-clone-dcdff.appspot.com/o/img%2Fjoker.webp?alt=media&token=fb5ac7ef-8ed3-4651-a6e5-8a26578d3111",
    },
    {
      id: 4,
      favourite: false,
      songName: "I Am A Peaky Blinder",
      artist: "Otnicka",
      song: "https://firebasestorage.googleapis.com/v0/b/spotify-clone-dcdff.appspot.com/o/song%2FI'm%20a%20Peaky%20Blinder%20(%20Official%20Video%20)%20(320%20kbps).mp3?alt=media&token=81002b44-9f64-466f-9344-4ec12114d898",
      imgSrc:
        "https://firebasestorage.googleapis.com/v0/b/spotify-clone-dcdff.appspot.com/o/img%2Fpeakyblinder.jpg?alt=media&token=b4ebb510-1bd0-463a-ab72-728e9639b12e",
    },
    {
      id: 5,
      favourite: false,
      songName: "Naanga Vera Maari",
      artist: "Yuvan Shankar Raja",
      song: "https://firebasestorage.googleapis.com/v0/b/spotify-clone-dcdff.appspot.com/o/song%2FValimai%20-%20Naanga%20Vera%20Maari%20Video%20_%20Ajith%20Kumar%20_%20Yuvan%20Shankar%20Raja%20(320%20kbps).mp3?alt=media&token=e1181609-059f-40ef-a1e7-2e2c043b9e9c",
      imgSrc:
        "https://firebasestorage.googleapis.com/v0/b/spotify-clone-dcdff.appspot.com/o/img%2Fnaangaveramaari.jpg?alt=media&token=17263604-d679-4f6c-ab1b-67a435affa3b",
    },
    {
      id: 6,
      songName: "Your Woman",
      artist: "White Town",
      song: "https://firebasestorage.googleapis.com/v0/b/spotify-clone-dcdff.appspot.com/o/song%2FWhite%20Town%20-%20Your%20Woman%20(Official%20HD%20Video)%20(320%20kbps).mp3?alt=media&token=2780b14c-ee68-4d1a-bd4f-517176e300db",
      imgSrc:
        "https://firebasestorage.googleapis.com/v0/b/spotify-clone-dcdff.appspot.com/o/img%2Fyourwoman.jpg?alt=media&token=321284f8-5887-4294-84d7-ea23f78be462",
    },
    {
      id: 7,
      favourite: false,
      songName: "Charlie",
      artist: "Gopi Sundar",
      song: "https://firebasestorage.googleapis.com/v0/b/spotify-clone-dcdff.appspot.com/o/song%2FCharlie%20__%20Chundari%20Penne%20Song%20Official%20_%20Dulquer%20Salmaan%20_Gopi%20Sunder_%20(320%20kbps).mp3?alt=media&token=43cdbdb6-7276-4fbe-9c1a-583c491fe319",
      imgSrc:
        "https://firebasestorage.googleapis.com/v0/b/spotify-clone-dcdff.appspot.com/o/img%2Fcharlie.jpg?alt=media&token=951480f2-0f70-488b-bf8f-cad6312adeef",
    },
    {
      id: 8,
      favourite: false,
      songName: "Mask Off",
      artist: "Future",
      song: "https://firebasestorage.googleapis.com/v0/b/spotify-clone-dcdff.appspot.com/o/song%2FFuture%20-%20Mask%20Off%20(Official%20Music%20Video)%20(320%20kbps).mp3?alt=media&token=76939b64-5675-453b-bdcd-c1f89e8dfa42",
      imgSrc:
        "https://firebasestorage.googleapis.com/v0/b/spotify-clone-dcdff.appspot.com/o/img%2Fmaskoff.jpg?alt=media&token=c83ae572-46a6-43b0-920c-f2961f6d4baf",
    },
    {
      id: 9,
      favourite: false,
      songName: "Hey Mama",
      artist: "David Guetta",
      song: "https://firebasestorage.googleapis.com/v0/b/spotify-clone-dcdff.appspot.com/o/song%2FDavid%20Guetta%20-%20Hey%20Mama%20(Official%20Video)%20ft%20Nicki%20Minaj%2C%20Bebe%20Rexha%20%26%20Afrojack%20(320%20kbps).mp3?alt=media&token=f097a165-079b-48e9-9b52-2e7521e1bfb6",
      imgSrc:
        "https://firebasestorage.googleapis.com/v0/b/spotify-clone-dcdff.appspot.com/o/img%2Fheymamanew.jpg?alt=media&token=1fc5886e-ec5f-47ae-ad78-31c7cab57eb7",
    },
    {
      id: 10,
      favourite: false,
      songName: "Turkish Folk Battle Song",
      artist: "CVR Toon ",
      song: "https://firebasestorage.googleapis.com/v0/b/spotify-clone-dcdff.appspot.com/o/song%2FCVRTOON%20-%20Plevne%20(Acoustic%20Version)%20(320%20kbps).mp3?alt=media&token=d05322f4-4018-4f44-b633-328fbea9eb27",
      imgSrc:
        "https://firebasestorage.googleapis.com/v0/b/spotify-clone-dcdff.appspot.com/o/img%2Fturkish.jpeg?alt=media&token=a3984ee0-35b7-48a4-80dc-6d4438ce1b2c",
    },
  ];
  
  export { Songs };