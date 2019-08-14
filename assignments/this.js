/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Global Binding
* 2. Implicit Binding: The Object to the LEFT of the dot is 'this'
* 3. New Binding: Referes to the object created and returned by a consructor function
* 4. Explicit Binding: This is defined explicitly by .call and .apply methods
*
* write out a code example of each explanation above
*/

// Principle 1 // code example for Window Binding
function favSport(sport) {
  console.log(this);
  return sport;
}

console.log(favSport("hockey"))

// Principle 2 // code example for Implicit Binding
let favoriteTeam = {
  statement: 'My favorite hockey team is',
  favTeam: function (team) {
    console.log(`${this.statement} the ${team}`);
    console.log(this);
  }
}
favoriteTeam.favTeam('Colorado Avalanche')

console.log(favoriteTeam)

// Principle 3 // code example for New Binding

function MarcoPolo (call) {
  this.call = call;
  this.resonse = "POLO!";
  this.find = function () {
    console.log(this.call + " " + this.response);
    console.log(`Marco Polo`, this);
  }
}

const marco = new MarcoPolo ('Marco!');


marco.find();

console.log(marco.find)


// Principle 4 // code example for Explicit Binding

marco.find.call("Marco!");
