// explore.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  const synth = window.speechSynthesis;
  const voiceSelect = document.querySelector('select');
  let voices;
  function loadVoices() {
    voices = synth.getVoices();
    console.log(voices);

    voices.forEach((voice, index) => {
      console.log(`${index}: ${voice.name} (${voice.lang})`);
      const option = document.createElement("option");
      option.textContent = `${voice.name} (${voice.lang})`;
      if (voice.default) {
        option.textContent += " — DEFAULT";
      }

      option.setAttribute("data-lang", voice.lang);
      option.setAttribute("data-name", voice.name);
      voiceSelect.appendChild(option);
    });

  }

  loadVoices();

  synth.onvoiceschanged = loadVoices;

  let chosenVoice;
  voiceSelect.addEventListener("change", (event) => {
    chosenVoice = event.target.value;
    console.log(chosenVoice);
  })

  const textArea = document.querySelector('textarea');
  let text;
  textArea.addEventListener("input", (event) => {
    text = textArea.value;
  })

  const button = document.querySelector('button');
  button.addEventListener("click", (event) => {
    const utterThis = new SpeechSynthesisUtterance(text);
    const selectedOption =
    voiceSelect.selectedOptions[0].getAttribute("data-name");
    for (const voice of voices) {
      if (voice.name === selectedOption) {
        utterThis.voice = voice;
      }
    }
    const smily = document.querySelector('img');
    utterThis.onend = (event) => {
      smily.src = "assets/images/smiling.png";
    };
    utterThis.onstart = (event) => {
      smily.src = "assets/images/smiling-open.png";
    };
    
    synth.speak(utterThis);
    inputTxt.blur();
  });

}