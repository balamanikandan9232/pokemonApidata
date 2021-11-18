fetch("https://pokeapi.co/api/v2/pokemon/1")
.then(function(apidata){
 return apidata.json();
})
 .then(function(pokedata){
     console.log(pokedata)
 })