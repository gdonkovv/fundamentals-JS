function songs(input) {
    class Song {
        constructor(typeList, name, time) {
            this.typeList = typeList;
            this.name = name;
            this.time = time;
        }
    }

    let n = input.shift();
    let typeList = input.pop();

    for(let element of input){
        let song = element.split("_");
        let songTypeList = song[0];
        let songName = song[1];
        let songTime = song[2];

        let objSong = new Song(songTypeList, songName, songTime);

        if(typeList === "all"){
            console.log(objSong.name);
        } else{
            if(objSong.typeList === typeList){
                console.log(objSong.name);
            }
        }
    }
}
songs([2,
    'like_Replay_3:15',
    'ban_Photoshop_3:48',
    'all']);