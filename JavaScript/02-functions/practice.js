// (example) Write a function that accepts two number arguments and adds them
// together.
var add = function(a, b)
{
	var a, b;
	var c = a + b;
	return c;
};
var sum = add(50, 75);
console.log(sum);

// Create a function that takes in a cost and a quantity and outputs the total
// pre-tax cost for that quantity of items at the given price. For example
//
//     var preTaxTotal = totalCost(5, 5.99); // 5 items at 5.99
//     //=> 29.950000000000003
var totalCost = function(cost, quantity)
{
	var cost;
	var quantity;
	var preTaxTotal = cost * quantity;
	return preTaxTotal;
};
var tax = totalcost(5, 5.99);
console.log(tax);

// Write a function that takes a rank and a suit as input, and returns a string
// representation of a card. For example, it should behave as follows
//
//     cardString("ace", "spades");
//     //=> ace of spades
//
//     cardString("queen", "hearts");
//     //=> queen of hearts
var cardString = function(rank, suit)
{
	var rank;
	var suit;
	var card = rank + " of " + suit;
	return card;
};
var cards = cardString("queen", "hearts");
console.log(cards);

// Write a function called `openTag` that accepts a tag name and returns an
// opening HTML tag with that tag name. For example,
//
//     openTag("p");
//     //=> <p>
//
//     openTag("div");
//     //=> <div>
var openTag = function(tagname)
{
	var tagname;
	var tag = "<" + tagname + ">";
	return tag;
};
var htmltag = openTag("div");
console.log(htmltag);

// Similarly, write a function called `closingTag` that returns the closing HTML tag
// with that name.
//
//     closeTag("p");
//     //=> </p>
//
//     closeTag("div");
//     //=> </div>
var closeTag = function(tagname)
{
	var tagname;
	var tag = "</" + tagname + ">";
	return tag;
};
var htmltag = closeTag("div");
console.log(htmltag);

// Write a function called `toTagString` that accepts two inputs: a tag name,
// and the string content, and returns the content tagged with the specified
// string.  For example:
//
//     toTagString("li", "list item 1");
//     //=> <li>list item 1</li>
//
//     // the 'em' tag is for 'emphasis'
//     toTagString("em", "this is important stuff");
//     //=> <em>this is important stuff</em>
//
// Although I won't be testing for this, your code should re-use the functions that
// you created in the previous section.
var toTagString = function(tag, content)
{
	var tag;
	var content;
	var htmltag = "<" + tag + ">" + content + "</" + tag + ">"
	return htmltag;
};
var html = toTagString("li", "list item 1");
console.log(html);
