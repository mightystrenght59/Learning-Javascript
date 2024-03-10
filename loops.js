let todo = prompt("What would you like to do today");
let myList = [];  // Corrected the variable name to 'myList' and initialized it as an empty array

// Assuming you want to add the user's input to the list
myList.push(todo);

// Loop to print each item in the list (though currently, the list has only one item)
for (let i = 0; i < myList.length; i++) {
  console.log(i,myList[i]);
}
