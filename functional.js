let states = ["Kansas", "Nebraska", "North Dakota", "South Dakota"]

//returns a url-friendly version of a string.
//     example: "North Dakota" -> "north-dakota"

function urlify(string) {
    return string.toLowerCase().split(/\s+/).join("-");
}

let stringToPrepend = "https://example.com/"

//urls: functional version
function functionalUrls(elements) {
    return elements.map(element => stringToPrepend + urlify(element));
}
//console.log(functionalUrls(states));

//singles: imperative version
function imperativeSingles(elements) {
    let singles = [];
    elements.forEach(function(element) {
        if (element.split(/\s+/).length === 1) {
            singles.push(element);
        }
    });
    return singles;
}

//console.log(imperativeSingles(states));

//functional version
function functionalSingles(elements) {
    return elements.filter(element => element.split(/\s+/).length === 1);
}

//console.log(functionalSingles(states));

//filter dakota states
function dakotaStates(elements) {
    return elements.filter(element => element.includes("Dakota"));
}

//console.log(dakotaStates(states));

//filter dakota states
function dakotaStates2(elements) {
    return elements.filter(element => element.split(/\s+/).length === 2);
}

//console.log(dakotaStates2(states));

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

//functional way
function functionalSum(elements) {
    return elements.reduce((total, n) => { return total += n; });
}
console.log(functionalSum(numbers));

function functionalProduct(elements) {
    return elements.reduce((total, n) => { return total *= n; });
}
console.log(functionalProduct(numbers));

//lengths imperative

function imperativeLengths(elements) {
    let lengths = {};
    elements.forEach(function(element) {
        lengths[element] = element.length; 
    });
    return lengths;
}
//console.log(imperativeLengths(states));

//functional way

function functionalLengths(elements) {
    return elements.reduce((lengths, element) => { lengths[element] = element.length; return lengths;}, {});
}

console.log(functionalLengths(states));