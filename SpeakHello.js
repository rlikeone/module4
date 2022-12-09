const speakWordHello = "Hello";

(function (window) {
  const helloSpeaker = {
    speak(name) {
      console.log(speakWordHello + " " + name);
    },
  };

  window.helloSpeaker = helloSpeaker;
})(window);
