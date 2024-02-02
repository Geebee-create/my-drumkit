
// to set an event listener for the keydown event
document.addEventListener("keydown", (event) => {
    // to make sure that it doesn't matter if the key pressed is in upper or lower case. 
    // This line of code will always class it as upper key format.
    const key = event.key.toUpperCase();
    // to search for the HTML element with he data-key that is equal to the key pressed on the keyboard.
    const drumKey = document.querySelector(`[data-key="${event.keyCode}"]`);

    // to check if a drum key element has been found for the pressed key
    if (drumKey) {
    // to trigger the audio playback. It is calling the 'playSound' function of the selected upper case key.
        playSound(key);
        // the below line can be used to add digital effects to show that the key is being played.
        //  It adds a CSS element called 'playing'to the drum key element.
        drumKey.classList.add("playing");
    }
});

// the below code could be used to improve the visuals. 
// It would trigger CSS transition in the event of a key being pressed. 
// document.addEventListener("transitionend", (event) => {
    // to check if the transition that ended is related to the background colour property.
    // if (event.propertyName === "background-color") {
        // to remove the visual indication that a key is being played. 
        // it removes the 'playing' class from the element that has just finished it's transition.
        // event.target.classList.remove("playing");
    // }
// });

// This declares a function named playSound that takes a key parameter/ (recieves a value named 'key')
function playSound(key) {
    // this locates the source of the wav sounds
    const audio = new Audio(`thesounds/${key}.wav`);
    // this plays the audio file
    audio.play();
}