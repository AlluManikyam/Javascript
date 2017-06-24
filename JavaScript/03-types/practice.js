// Write a function called isDivisibleBy3 which returns `true` if a number is
// divisible by 3, and `false` otherwise.
var isDivisibleBy3 = function(number)
{
	var number;
	if (number % 3 == 0)
	{
		return "true";
	}
	else
	{
		return "false";
	}
};
var test = isDivisibleBy3(5);
console.log(test);
// Write a function that converts a Celsius temperature to Fahrenheit,
// and vice-versa. To convert from Celsius to Fahrenheit, you multiply
// the celsius value by 9 and then divide by 5. Then you add 32. To
// convert the other way, you subtract 32, and then multiply by
// 5. Finally, you divide by 9. The division operator in JavaScript is
// `/`.

// Celsius to Fahrenheit

var celsToFahr = function(celsius)
{
	var celsius;
	var fahr = (celsius * 9) / 5 + 32;
	return fahr;
};
var fahrenheit = celsToFahr(5);
console.log(fahrenheit);
// Fahrenheit to Celsius

var fahrToCels = function(fahrenheit)
{
	var fahrenheit;
	var cels = (fahrenheit - 32) * 5 / 9;
	return cels;
};
var celsius = fahrToCels(41);
console.log(celsius);

// Write a function called `randUpTo` that accepts a number and returns a random
// whole number between 0 and that number. For example:
//
//     randUpTo(10);
//     //=> 5
//
//     randUpTo(10);
//     //=> 9
//
//     randUpTo(1000);
//     //=> 561
//
//     randUpTo(1000);
//     //=> 236
var randUpTo = function(number)
{
	var number;
	var rand = Math.floor(Math.random(number) * number);
	return rand;
};
var randnum = randUpTo(10);
console.log(randnum);

// Write a function called `randBetween` that accepts two numbers representing a
// range and returns a random whole number between those two numbers.
var randBetween = function(num1, num2)
{
	var num1;
	var num2;
	var diff = num2 - num1;
	var rand = num1 + Math.floor(Math.random(num2) * diff);
	return rand;
};
var randnum = randBetween(100, 300);
console.log(randnum);

// The standard card suits are clubs, diamonds, hearts and spades. Write a
// function called isSuit that accepts a string and returns true if the input
// string is a suit, and false otherwise. Consider making a more robust function
// that will allow the case to be arbitrary, meaning "HEARTS", "hearts", and
// "hEaRtS" all return `true`. You can use the `toLowerCase` or `toUpperCase`
// string methods to achieve this.
//
//     isSuit("hearts");
//     //=> true
//
//     isSuit("HEARTS");
//     //=> true
//
//     isSuit("coins");
//     //=> false
var isSuit = function(card)
{
	var card;
	card = card.toLowerCase();
	if (card == "clubs" || card == "diamonds" || card == "hearts" || card == "spades")
	{
		return true;
	}
	else
	{
		return false;
	}
};
var check = isSuit("clubs");
console.log(check);

// The valid ranks for a card are two, three, four, five, six, seven, eight,
// nine, ten, jack, queen, king and ace. Write a function called `isRank` that
// accepts a string and returns true if it is a card rank.
//
//     isRank("jack");
//     //=> true
//
//     isRank("Queen");
//     //=> true
//
//     isRank("one");
//     //=> false
var isRank = function(card)
{
	var card;
	card = card.toLowerCase();
	if (card == "two" || card == "three" || card == "four" || card == "five" || card == "six" || card == "seven" || card == "eight" || card == "nine" || card == "ten" || card == "jack" || card == "queen" || card == "king" || card == "ace")
	{
		return true;
	}
	else
	{
		return false;
	}
};
var check = isRank("queen");
console.log(check);

// Using the previous two functions, write a function called isCard that accepts
// two arguments, a rank and a suit, and returns true if they are valid for a card,
// and false otherwise.
var isCard = function(rank, suit)
{
	var rank, suit;
	if ((rank == "clubs" || rank == "diamonds" || rank == "hearts" || rank == "spades") &&
		(suit == "two" || suit == "three" || suit == "four" || suit == "five" || suit == "six" ||
			suit == "seven" || suit == "eight" || suit == "nine" || suit == "ten" || suit == "jack" ||
			suit == "queen" || suit == "king" || suit == "ace"))
	{
		return true;
	}
	else
	{
		return false;
	}
};
var card = isCard("clubs", "two");
console.log(card);

// Write a function called `isCapitalized` that accepts a string and returns
// `true` if the first letter is a capital letter. How can you determine that?
// Remember that you can use strings in comparisons in the same way that you can
// use numbers, and the ordering is alphabetical (with capital letters having lower
// values than their lower-case counterparts).
var isCapitalized = function(string)
{
	var string;
	var letter = string.charAt(0);
	if (/[A-Z]/.test(letter))
	{
		return true;
	}
	else
	{
		return false;
	}
};
s1 = isCapitalized("Allu Manikyam");
console.log(s1);

// Write a function that accepts a string representation of an HTML element (it
// can't have nested HTML elements) and returns the string contained inside. For
// example:
//
//     getHTMLText("<p>this is some text in a paragraph</p>");
//     //=> this is some text
//
//     getHTMLText("<li>this is a list item</li>");
//     //=> this is a list item
var getHTMLText = function(str)
{
	var s1 = str.indexOf(">");
	var s2 = str.lastIndexOf("</");
	var s3 = str.slice(s1 + 1, s2);
	return s3;
};
var gettext = getHTMLText("<li>this is a list item</li>");
console.log(gettext);

// Write a function that determines if a string represents an HTML element. This
// means it has to start with an opening HTML tag and end with a closing HTML tag.
//
//     isHTMLElement("<p>this is a paragraph</p>");
//     //=> true
//
//     isHTMLElement("this is a tweet!");
//     //=> false
//
//     isHTMLElement("<p>this is NOT an paragraph</div>");
//     //=> false
//
//     isHTMLElement("<li>this is an HTML list element</li>");
//     //=> true
//
// It may help in this case to look up the `lastIndexOf` method on the string
// objects.
var isHTMLElement = function(str)
{
	var s0 = str.indexOf("<");
	var s1 = str.indexOf(">");
	var s2 = str.lastIndexOf("<");
	var s3 = str.lastIndexOf(">");
	var c1 = str.slice(s0 + 1, s1);
	var c2 = str.slice(s2 + 2, s3);
	if (c1 == c2)
	{
		return true;
	}
	else
	{
		return false;
	}
};
var str = isHTMLElement('<b>This is a paragraph</b>');
console.log(str);
