let a = [ "ant", "bat", "cat", 42 ];
a.forEach(function(element) {
    console.log(element);
});

// with fat arrow notation 
a.forEach(element => {console.log(element)});

//or
a.forEach(element => console.log(element));

let solioquy = "To be or not to be, that is the question:";
Array.from(solioquy).forEach(function (character) {
    console.log(character);
});