module.exports = Phrase;

//Add `reverse` to all strings 
String.prototype.reverse = function reverse() {
    return Array.from(this).reverse().join("");
}

//defines a Phrase objec†
function Phrase(content) {
    this.content = content;

    //Returns the letters in a string
    this.letters = function letters() {
        return (this.content.match(/[a-z]/gi) || []).join("");
        };
    
    //Returns processed content for palindrome testing
    this.processedContent = function processedContent() {
        return this.letters().toLowerCase();
    };

    //Returns true for a palindrome, false otherwise
    this.palindrome = function palindrome() {                     
        return this.processedContent() === this.processedContent().reverse();
    };

};
