//Add `reverse` to all strings 
String.prototype.reverse = function() {
    return Array.from(this).reverse().join("");
}

//add blank method that returns true if string is blank
String.prototype.blank = function() {
    return !!(this.match(/^\s*$/g));
}

//return last element of an Array
Array.prototype.last = function () {
    return this[this.length - 1];
}

//Returns true for a palindrome
function palindrome(string) {
    let processedContent = string.toLowerCase();
    return processedContent === processedContent.reverse();
}

//defines a Phrase objec†
function Phrase(content) {
    this.content = content;

    //returns lowercased content
    this.processor = function(string) {
        return string.toLowerCase();
    }

    //Returns processed content for palindrome
    this.processedContent = function processedContent() {
        return this.processor(this.content);
    };

    //Returns true for a palindrome
    this.palindrome = function palindrome() {                     
        return this.processedContent() === reverse(this.processedContent());
    };
}
