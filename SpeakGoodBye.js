const speakWordBye = "Good Bye";

(function (window) {
  const byeSpeaker = {
    speak(name) {
      console.log(speakWordBye + " " + name);
    },
  };

  window.byeSpeaker = byeSpeaker;
})(window);
