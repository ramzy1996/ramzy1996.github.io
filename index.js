const spkbtn = document.getElementById("speakBtn");
spkbtn.addEventListener("click", speakNow);
const styleSheet = document.getElementById("stylesheet");

const SpeechRecognition =
  window.SpeechRecognition || window.webkitSpeechRecognition;

const recognition = new SpeechRecognition();

recognition.onstart = function () {
  console.log("started..");
};
recognition.onresult = function (e) {
  const resultIndex = e.resultIndex;
  const { transcript } = e.results[resultIndex][0];
  console.log(transcript);
  speakLoud(transcript);
};

function speakNow() {
  recognition.start();
}

function speakLoud(message) {
  let whatToSpeak = message;
  if (whatToSpeak.includes("dark mode")) {
    styleSheet.setAttribute("href", "dark-mode.css");
  } else if (whatToSpeak.includes("light mode")) {
    styleSheet.setAttribute("href", "light-mode.css");
  }else if (whatToSpeak.includes("open YouTube")) {
    window.open("https://www.youtube.com/","_blank")
  }else if (whatToSpeak.includes("open Google")) {
    window.open("https://www.google.com/","_blank")
  }

  const SpeechSynthesisUtterance =
    window.SpeechSynthesisUtterance || window.webkitSpeechSynthesisUtterance;
  const utterance = new SpeechSynthesisUtterance();
  utterance.volume = 1;
  utterance.rate = 1;
  utterance.pitch = 1;
  utterance.text = message;
  utterance.lang = "en-US";

  const speechSynthesis =
    window.speechSynthesis || window.webkitspeechSynthesis;

  speechSynthesis.speak(utterance);
}

// const SpeechSynthesisUtterance =
//   window.SpeechSynthesisUtterance || window.webkitSpeechSynthesisUtterance;

// const utterance = new SpeechSynthesisUtterance();
// console.log(utterance);
