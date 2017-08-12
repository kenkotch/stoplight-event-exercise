document.addEventListener('DOMContentLoaded', () => { //waits for page to load


  (function() {
    'use strict';

    //constants
    //buttons
    const stopButton = document.getElementById('stopButton')
    const slowButton = document.getElementById('slowButton')
    const goButton = document.getElementById('goButton')
    //light bulbs
    const stopLight = document.getElementById('stopLight')
    const slowLight = document.getElementById('slowLight')
    const goLight = document.getElementById('goLight')

    //red
    stopButton.addEventListener('click', () => {
      stopLight.classList.toggle('stop')
    })

    //yellow
    slowButton.addEventListener('click', () => {
      slowLight.classList.toggle('slow')
    })

    //green
    goButton.addEventListener('click', () => {
      goLight.classList.toggle('go')
    })

  })()
})
