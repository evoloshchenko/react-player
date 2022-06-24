export const playAudio = (isPlaying, audioRef) => {
    if (isPlaying) {
        const playPromise = audioRef.current.play();
        console.log(playPromise);
        if (playPromise !== undefined) {
          playPromise.then((audio) => {
            audioRef.current.play();
          });
        }
      }
    };

