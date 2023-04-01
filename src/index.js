console.log('%c HI', 'color: firebrick')

const imgUrl = "https://dog.ceo/api/breeds/image/random/4";
const breedUrl = 'https://dog.ceo/api/breeds/list/all';

document.addEventListener('DOMContentLoaded', () => {
    fetchImg() 
    fetchBreeds()
    addBreed()
})

 function fetchImg(){
    fetch(imgUrl)
    .then(res => res.json())
    .then(img => {
        img.message.forEach(imgElement => {
            addImg(imgElement)
        })
    })
 }

 function addImg(dogImage){
    const container = document.getElementById('dog-image-container')
    const addedElement = document.createElement('img')
    addedElement.src = (dogImage)
    container.appendChild(addedElement)
 }

 function fetchBreeds(){
    fetch(breedUrl)
    .then(res => res.json())
    .then (dogBreed => Object.keys(dogBreed.message).forEach(addBreed))
 }

 function addBreed(dogBreed){
    const dogBreeds = document.getElementById('dog-breeds')
    const li = document.createElement('li')
    li.textContent = `${dogBreed}`
    li.addEventListener('click', () => li.style.color = 'red')
    dogBreeds.appendChild(li)
 }