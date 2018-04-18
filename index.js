function shout (string) {
  return string.toUpperCase()
}

function whisper(string) {
  return string.toLowerCase()
}

function logShout (string) {
  console.log(string.toUpperCase())
}

function logWhisper(string) {
  console.log(string.toLowerCase())
}

function sayHiToGrandma(string) {
  if (string.toLowerCase() === string) {
     return("I can\'t hear you!");
} else if (string.toUpperCase() === string) { 
      return("YES INDEED!");
} else if (string === 'I love you, Grandma.') {
      return("I love you, too");
}
}


if (time < 10) {
    greeting = "Good morning";
} else if (time < 20) {
    greeting = "Good day";
} else {
    greeting = "Good evening";
}