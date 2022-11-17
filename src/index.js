console.log('animals')

const character = document.getElementById('name')
const characterName = document.getElementById('character-bar')
const characterDetails = document.getElementById('detailed-info')
const characterImage = document.getElementById('image')
// console.log('animalNames')

const request = async () => {
    let req = await fetch('http://localhost:3000/characters')
    let res = await req.json()
        res.forEach((animals) => {
            const img = document.createElement('img')
            img.src = animals.image
            character.innerText = animals.name
            characterImage.append(img)
        })
}
request()

//i'm not sure if im reading the directions wrong but i seem to be able to pull info from the srever into the wrong places 
//i also have the names appear but then the dissapear right after 
//adding a click event and vote counter is simple i just dont usnderstand why the names wpon't stay on the page
                                                                            