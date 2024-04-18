const toggleItems = document.querySelector('.toggle-menu');
const toggleButton = document.querySelector('.toggler');
const container = document.querySelector('.top-text');
const clickButton = container.querySelector('#click-button');
const changedText = container.querySelector('.changing');
const includeContainer = document.querySelector('.text');

const toggleContainer = document.querySelector('.links');
const toggleButtonContainer = document.querySelector('.toggling');


toggleButtonContainer.addEventListener('click', () => toggleContainer.classList.toggle('toggle-this'));

toggleButton.addEventListener('click', () => {
    toggleItems.classList.toggle('active');
});


clickButton.addEventListener('click', () => {
    changedText.innerHTML = 'If you like them, go to store and get one';
});

// window.addEventListener('click', (e) => {
//     if(e.target !== toggleButton){
//         toggleItems.classlist.add('active');
//     }
// })