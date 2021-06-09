var SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
var recognition = new SpeechRecognition();
recognition.continuous = true;

recognition.onerror = function(event) {
    if(event.error == 'no-speech') {
 
    };
}

recognition.onstart = function() { 
        
}

recognition.onspeechend = function() {
 
}

const listen = function(keyword, func){
    recognition.start()
    recognition.onresult = function(event) {
        var current = event.resultIndex;
        var transcript = event.results[current][0].transcript;
        transcript = transcript.toLowerCase();
        if(transcript.includes(keyword)){
            transcript = transcript.substr(transcript.indexOf(keyword)+keyword.length)
            if(transcript.substr(0, 1) == " "){
                transcript = transcript.substr(1);
            }
            func(transcript)
        }
    };
}
  
function say(message) {
      var speech = new SpeechSynthesisUtterance();
      speech.text = message;
      speech.volume = 1;
      speech.rate = 1;
      speech.pitch = 1;
    
      window.speechSynthesis.speak(speech);
}