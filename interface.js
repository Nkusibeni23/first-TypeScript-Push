var player = {
    currentSong: "Believer",
    currentSongLength: 35000,
    playNext: function () { return console.log("Playing Next"); },
    playPrevious: function () { return console.log("playing Previews"); },
};
var AudioPlayer = /** @class */ (function () {
    function AudioPlayer(songInfo) {
        this.playNext = function () { return console.log("Playing Next"); };
        this.playPrevious = function () { return console.log("playing Previews"); };
        this.stopAudio = function () { };
        this.currentSong = songInfo.name;
        this.currentSongLength = songInfo.length;
    }
    return AudioPlayer;
}());
var audioPlayer = new AudioPlayer({ name: "Bad liar", length: 40000 });
var anotherAudioPlayer = new AudioPlayer({
    name: "castle the Hill",
    length: 35000,
});
console.log(audioPlayer.currentSong, audioPlayer.currentSongLength);
console.log(anotherAudioPlayer.currentSong, anotherAudioPlayer.currentSongLength);
