const h1 = document.getElementById("h1");
const shoppingInput = document.getElementById("shoppingInput");
const shoppingBtn = document.getElementById("shoppingBtn");

let shoppingList = []

// onclick function
shoppingBtn.onclick = function onclick(){
    shoppingList += " " + shoppingInput.value;
    console.log(shoppingList)
}