let fruits = "Apple"

// 1. Create a switch statement that will alert 
// "Hello banana" if fruits is "banana", 
// and "Welcome apple" if fruits is "apple".
switch
(fruits) {

    case
        "Banana":
        alert("Hello banana")
        break;

    case
        "Apple":
        alert("Welcome apple")
        break;
}

// 2. Add a section that will alert("Neither") if fruits is neither "banana" nor "apple".
switch (fruits) {
    case "Banana":
        alert("Hello")
        break;
    case "Apple":
        alert("Welcome")
        break;
    default:
        alert("Neither");
}