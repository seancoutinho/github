//Exercise 1: Add a a <p> with red text that says “Hey I’m red!”

const pTag = document.createElement('p');
const body = document.querySelector('body');

pTag.innerText = 'Hey, Im Red!';
pTag.style.color = 'red';
pTag.style.fontSize = '20px';
body.append(pTag);

//Exercise 2: Add an <h3> with blue text that says “I’m a blue h3!”

