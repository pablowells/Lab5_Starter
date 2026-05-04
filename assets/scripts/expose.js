// expose.js
window.addEventListener('DOMContentLoaded', init);

function init() {
    const img = document.querySelector('img[alt="No image selected"]');
    const sound = document.querySelector('audio');
    const selectSound = document.querySelector('select');
    
    selectSound.addEventListener("change", (event) => {
      img.src = 'assets/images/' + event.target.value + '.svg';
      sound.src = 'assets/audio/' + event.target.value + '.mp3';
    });

    const range = document.querySelector('[type="range"]');
    const volImage = document.querySelector('img[alt="Volume level 2"]')
    range.addEventListener("change", (event) => {
      sound.volume = +(event.target.value) / 100;
      console.log(sound.volume);
      const height = volImage.clientHeight;
      const width = volImage.clientWidth;
      if (+(event.target.value)  == 0) {
        volImage.src = "assets/icons/volume-level-0.svg";
      }
      else if (1 <= +(event.target.value) &&  +(event.target.value)<= 32) {
        volImage.src = "assets/icons/volume-level-1.svg";
      }
      else if  (33 <= +(event.target.value) && +(event.target.value) <= 66) {
        volImage.src = "assets/icons/volume-level-2.svg";
      }
      else if (67 <= +(event.target.value)) {
        volImage.src = "assets/icons/volume-level-3.svg";
      }
    });
    const button = document.querySelector('button');
    button.addEventListener("click", (event) => {
      if(selectSound.value == 'party-horn') {
        const jsConfetti = new JSConfetti();
        sound.play();
        jsConfetti.addConfetti();
      } else if (selectSound.value){
        sound.play();
      }
    })
}