document.addEventListener('DOMContentLoaded', () => { //waits for page to load


  (function() {
    'use strict';

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
    //mouse enter button
    stopButton.addEventListener('mouseover', () => {
      console.log(`Entered stopButton button`);
    })

    //yellow
    slowButton.addEventListener('click', () => {
      slowLight.classList.toggle('slow')
    })
    //mouse enter button
    slowButton.addEventListener('mouseover', () => {
      console.log(`Entered slowButton button`);
    })

    //green
    goButton.addEventListener('click', () => {
      goLight.classList.toggle('go')
    })
    //mouse enter button
    goButton.addEventListener('mouseover', () => {
      console.log(`Entered goButton button`);
    })

  })()
})
