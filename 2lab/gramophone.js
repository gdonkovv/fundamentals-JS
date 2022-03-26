function gramophone(band, album, song) {

    // song duration in seconds = (albumName.length * bandName.length) * song-name.length / 2
    // full rotation every 2.5 seconds

    let songDurationInSec = (album.length * band.length) * song.length / 2;
    let rotationsCount = Math.ceil(songDurationInSec/2.5);


    console.log(`The plate was rotated ${rotationsCount} times.`);

}
gramophone('Rammstein', 'Sehnsucht', 'Engel');
gramophone('Black Sabbath', 'Paranoid', 'War Pigs');