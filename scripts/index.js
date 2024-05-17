const container = document.createElement('div')
container.className = "container"

let cardContainer = document.createElement('div');
cardContainer.className = "cardContainer";

let cardInner = document.createElement('div')
cardInner.className = "cardInner"

let frontSide = document.createElement('div');
frontSide.className = "frontSide";
let backSide = document.createElement('div')
backSide.className = "backSide";

//Front Side 
const images = document.createElement('img');
images.src = "./assets/images/flip.png";
frontSide.appendChild(images);

const containText = document.createElement('div');
containText.className = "containText"

const TextHeading = document.createElement('h2');
TextHeading.innerHTML = "Heading"

const TextDescription = document.createElement('p')
TextDescription.innerHTML = "Describe the text"

//Group the backSide Text
containText.appendChild(TextHeading)
containText.appendChild(TextDescription)
backSide.appendChild(containText)

cardInner.appendChild(frontSide)
cardInner.appendChild(backSide)

cardContainer.appendChild(cardInner)

document.body.appendChild(container);
container.appendChild(cardContainer)