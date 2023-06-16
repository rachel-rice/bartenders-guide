//The user will enter a cocktail. Get a cocktail name, photo, and instructions and place them in the DOM

document.querySelector('button').addEventListener('click', getDrink)

function getDrink(){
    let drink = document.querySelector('input').value

    fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${drink}`)
    .then(res => res.json()) // parse response as JSON
    .then(data => {
      console.log(data.drinks[0])
      document.querySelector('#cocktail').innerText = data.drinks[0].strDrink
      document.querySelector('img').src = data.drinks[0].strDrinkThumb
      document.querySelector('.instructions').innerText = data.drinks[0].strInstructions
      document.querySelector('.ingredient1').innerText = data.drinks[0].strIngredient1
      document.querySelector('.ingredient2').innerText = data.drinks[0].strIngredient2
      document.querySelector('.ingredient3').innerText = data.drinks[0].strIngredient3
      document.querySelector('.ingredient4').innerText = data.drinks[0].strIngredient4
      document.querySelector('.ingredient5').innerText = data.drinks[0].strIngredient5
      document.querySelector('.ingredient6').innerText = data.drinks[0].strIngredient6
      document.querySelector('.ingredient7').innerText = data.drinks[0].strIngredient7
      document.querySelector('.ingredient8').innerText = data.drinks[0].strIngredient8
    })
    .catch(err => {
        console.log(`error ${err}`)
    });

}


