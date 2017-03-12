document.getElementById('click1').addEventListener('click', function () {
  var audio = new Audio('drum-sounds/boom.wav')
  audio.play()
})

document.getElementById('click2').addEventListener('click', function () {
  var audio = new Audio('drum-sounds/clap.wav')
  audio.play()
})

document.getElementById('click3').addEventListener('click', function () {
  var audio = new Audio('drum-sounds/ride.wav')
  audio.play()
})

document.getElementById('click1').addEventListener('mouseenter',function(){
  var audio = new Audio('drum-sounds/boom.wav')
  audio.play()
})

document.getElementById('click2').addEventListener('mouseenter', function () {
  var audio = new Audio('drum-sounds/clap.wav')
  audio.play()
})

document.getElementById('click3').addEventListener('mouseenter', function () {
  var audio = new Audio('drum-sounds/ride.wav')
  audio.play()
})
