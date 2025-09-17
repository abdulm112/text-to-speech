let speech = new SpeechSynthesisUtterance();


let btn = document.getElementById("button");
let textArea = document.getElementById("textarea");
let voices = []
let selecT = document.getElementById("selecT");


window.speechSynthesis.onvoiceschanged = () => {
  voices = window.speechSynthesis.getVoices();
  speech.voice = voices[0];

  voices.forEach((voice, i) => (selecT.options[i] = new Option(voice.name, i)))
}

selecT.addEventListener("change", () => {
  speech.voice = voices[selecT.value];
  })

btn.addEventListener("click", () => {
  speech.text = textArea.value;
  window.speechSynthesis.speak(speech);
});