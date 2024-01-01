interface Player {
  currentSong: string;
  currentSongLength: number;
  playNext: () => void;
  playPrevious: () => void;
}

const player: Player = {
  currentSong: "Believer",
  currentSongLength: 35_000,
  playNext: () => console.log("Playing Next"),

  playPrevious: () => console.log("playing Previews"),
};

type song = { name: string; length: number };

class AudioPlayer implements Player {
  currentSong: string;
  currentSongLength: number;

  constructor(songInfo: song) {
    this.currentSong = songInfo.name;
    this.currentSongLength = songInfo.length;
  }

  playNext = () => console.log("Playing Next");
  playPrevious = () => console.log("playing Previews");

  stopAudio = () => {};
}

const audioPlayer = new AudioPlayer({ name: "Bad liar", length: 40_000 });

const anotherAudioPlayer = new AudioPlayer({
  name: "castle the Hill",
  length: 35_000,
});

console.log(audioPlayer.currentSong, audioPlayer.currentSongLength);

console.log(
  anotherAudioPlayer.currentSong,
  anotherAudioPlayer.currentSongLength
);
