// Write a function called `containsTwice` that accepts a number and an array,
// and returns `true` if that number appears in the array twice, and `false`
// otherwise.
//
//     containsTwice(5, [1, 2, 3, 4, 5]);
//     //=> false
//
//     containsTwice("hello", [ "hello", "world", "hello" ]);
//     //=> true
//
//     containsTwice(true, [ true, false, false, true ]);
//     //=> true
//
//     containsTwice(10, [10, 10, 10, 10, 10]);
//     //=> false
//
var containsTwice = function(key, array)
{
    var key;
    var array, count = 0;
    for (i = 0; i < array.length; i++)
    {
        if (array[i] == key)
        {
            count = count + 1;
        }
    }
    if (count == 2)
    {
        return true;
    }
    else
    {
        return false;
    }
};
var check = containsTwice("allu", ["mani", "allu", "allu", "allu", 2, 5, 2, 2]);
console.log(check);
// Generalize the previous solution into a function called `containsNTimes` so
// that it can check for a value an arbitrary number of times.
//
//     containsNTimes(3, "hello", [ "hello", "hello", "hello" ]);
//     //=> true
//
//     containsNTimes(5, true, [ true, true, true, true, false ]);
//     //=> false
//
//     containsNTimes(0, 5, [ 1, 2, 3, 4, 5 ]);
//     //=> false
//
var containsNTimes = function(times, key, array)
{
    var key;
    var array, count = 0;
    for (i = 0; i < array.length; i++)
    {
        if (array[i] == key)
        {
            count = count + 1;
        }
    }
    if (count == times)
    {
        return true;
    }
    else
    {
        return false;
    }
};
var check = containsNTimes(2, 5, [1, 2, 3, 4, 5]);
console.log(check);
// Write a function called `atLeastOneEven` that returns `true` if at least one of
// the numbers in input array is even, false otherwise. It should throw an error if
// the argument is not an array.
//
//     atLeastOneEven([ 3, 5, 6, 7, 9 ]);
//     //=> true
//
//     atLeastOneEven([]);
//     //=> false
//
//     atLeastOneEven([ 101, 203, 401 ]);
//     //=> false
//
//     atLeastOneEven("hello");
//     //=> input should be an array!
//
var atLeastOneEven = function(array)
{
    var array, count = 0;
    if (Array.isArray(array))
    {
        for (i = 0; i < array.length; i++)
        {
            if (array[i] % 2 == 0)
            {
                count = count + 1;
            }
        }
        if (count >= 1)
        {
            return true;
        }
        else
        {
            return false;
        }
    }
    else
    {
        return "input should be an array!";
    }
};
var check = atLeastOneEven([3, 5, 6, 7, 9]);
console.log(check);
// Write a function called `allStrings` that accepts an array as an argument and
// returns `true` if all of the values in the array are strings. It should
// return false if they are not all strings, and throw an error if the input is
// not an array.
//
//     allStrings([ "these", "are", "all", "strings" ]); //=> true
//
//     allStrings([ "these", "are", "not", 5 ]); //=> false
//
//     allStrings([ ]); //=> true
//
//     allStrings("hello"); //=> input should be an array!
//
// Although the tests will not be checking for this, try to make your loop exit
// as soon as it finds a non-string entry in the array.
//
var allStrings = function(array)
{
    var array, count = 0;
    if (Array.isArray(array))
    {
        for (i = 0; i < array.length; i++)
        {
            if (typeof array[i] == 'string')
            {
                count = count + 1;
            }
        }
        if (count == array.length)
        {
            return true;
        }
        else
        {
            return false;
        }
    }
    else
    {
        return "input should be an array!";
    }
};
var check = allStrings(["these", "are", "not", 5]);
console.log(check);
// Write a function that accepts two arrays, and returns true if any of the
// values in the first array appear twice in the second array. You might want to
// reuse the function `containsNTimes` or `containsTwice` from above. It should
// throw an error if either of the inputs are not arrays.
//
//
//     containsAnyTwice([1, 2], ["hello", 1, "world", 1]);
//     //=> true
//
//     containsAnyTwice([], ["always", "will", "return", "false"]);
//     //=> false
//
//     containsAnyTwice(["hello", "world"], ["hello", "hello", "world", "world"]);
//     //=> true
//
//     containsAnyTwice("hello", ["hello", "world"]);
//     //=> containsAnyTwice expects two arguments, both of which should be an array.
//
// Although the tests will not be checking for this, try to make your loop exit
// as soon as it finds an element in the first array that appears twice in the second
// array.
//
var containsAnyTwice = function(array1, array2)
{
    var array1, array2, count = 0;
    if (Array.isArray(array1) && Array.isArray(array2))
    {
        for (i = 0; i < array1.length; i++)
        {
            for (j = 0; j < array2.length; j++)
            {
                if (array1[i] == array2[j])
                {
                    count = count + 1;
                    break;
                }
            }
        }
        if (count == 2)
        {
            return true;
        }
        else
        {
            return false;
        }
    }
    else
    {
        return "containsAnyTwice expects two arguments, both of which should be an array.";
    }
};
var check = containsAnyTwice([1, "hello"], ["hello", 1, "hello", "world", "world"]);
console.log(check);
// In the previous problem, we determined whether or not an array contains any
// of a list of values exactly twice. In this problem, we'll actually return
// those values appearing twice.  Create a new function that returns an array of
// only the values from the first array that appear twice in the second array.
//
// For this problem, you'll create a new array, and you'll use its `push`
// function to add elements to the end. You'll most likely want to use the
// `containsTwice` function you created in the previous exercise.
//
// The difficulty here will be in avoiding duplicates. You may want to use the
// `indexOf` method of the resulting array to confirm that you're not adding a
// value a second time.
//
//     getValuesAppearingTwice(["hello", 1, "world", 1]);
//     //=> [ 1 ]
//
//     getValuesAppearingTwice(["always", "will", "return", "empty"]);
//     //=> []
//
//     getValuesAppearingTwice(["hello", "hello", "world", "world", "goodbye"]);
//     //=> [ "hello", "world" ]
//
//     getValuesAppearingTwice(["hello", "world", "goodbye"])
//     //=> []
//
var getValuesAppearingTwice = function(array1)
{
    var array1, array2 = [],
        count = 1,
        flag = 0,
        k, i;
    for (i = 0; i <= array1.length; i++)
    {
        for (j = i + 1; j <= array1.length; j++)
        {
            if (array1[i] == array1[j])
            {
                array2.push(array1[i]);
            }
        }
    }
    for (k = 0; k <= array2.length; k++)
    {
        console.log(array2[k]);
    }
};
twice = getValuesAppearingTwice(["hello", "world", "hello", "world", "goodbye"]);
// Using a standard `for` loop, along with the `push` function, write a function
// called `range` that accepts two numbers, `begin` and `end`, and returns an array
// that contains all of the integers starting at `begin` and ending at `end`
// (including `begin` and `end`). For example:
//
//     range(5,10);
//     //=> [5, 6, 7, 8, 9, 10]
//
//     range(0,3);
//     //=> [0, 1, 2, 3]
//
//     range(10,3);
//     //=> [10, 9, 8, 7, 6, 5, 4, 3]
//
// It should throw an error when either of the arguments are not numbers.
//
//     range("hello", "world");
//     //=> arguments to range must be numbers
//
var range = function(num1, num2)
{
    var num1, num2, range, count = 0;
    if (typeof num1 == 'number' && typeof num2 == 'number')
    {
        for (i = num1 - 1; i < num2; i++)
        {
            range = i + 1;
            if (count == 0)
            {
                console.log(range);
            }
        }
    }
    else
    {
        console.log("arguments to range must be numbers");
    }
};
rangenum = range(5, 10);
// Using the `isHTMLElement` and `getTagName` function from one of the previous
// sections, write a function called `mapToTags` that accepts an array of HTML
// elements and returns a new array that consists of only the tags associated with
// those HTML elements. It should throw an error if any of the elements are not
// HTML elements, or if the input is not an array.
//
//     mapToTags(["<p>this is a paragraph</p>", "<span>this is a span</span>", "<li>this is a list item</li>"]);
//     //=> ["p", "span", "li"]
//
//     mapToTags([]);
//     //=> []
//
//     mapToTags(["<p>this is a paragraph</p>", "this is a tweet"]);
//     //=> "this is a tweet" is not an HTML element!
//
//     mapToTags(5);
//     //=> wat?
//
//     mapToTags([ "not an html element" ]);
//     //=> all entries must be html elements!
//
var mapToTags = function(str)
{
    var str, i;
    var s0, s1, s2, s3, c1, c2;
    if (Array.isArray(str) && Array.isArray(str))
    {
        for (i = 0; i < str.length; i++)
        {
            s0 = str[i].indexOf("<");
            s1 = str[i].indexOf(">");
            s2 = str[i].lastIndexOf("<");
            s3 = str[i].lastIndexOf(">");
            c1 = str[i].slice(s0 + 1, s1);
            c2 = str[i].slice(s2 + 2, s3);
            if (c1 == c2)
            {
                console.log(c1);
            }
            else
            {
                console.log(str[i] + "is not an HTML element!");
            }
        }
    }
    else
    {
        console.log("wat? It is not an array");
    }
};
var test = mapToTags(["not an html element"]);
// Write a function called `filterToLol` which accepts an array of tweets and
// returns an array that consists only of those that contain `lol` (upper, lower,
// or mixed-case). It should throw an error if the input is not an array or if any
// of the elements are not strings.
//
//     filterToLol(["hello world!", "this is a tweet lol", "this is a tweet omg"]);
//     //=> ["this is a tweet lol"]
//
//     filterToLol(["lol", "LOL", "LoL", "omg", "lollerskates"]);
//     //=> ["lol", "LOL", "LoL", "lollerskates"]
//
//     filterToLol(["omg", "this is a tweet"]);
//     //=> []
//
//     filterToLol(5);
//     //=> no can do.
//
//     filterToLol(["this is a string", false, 5]);
//     //=> all entries must be strings!
//
var filterToLol = function(tweets)
{
    var tweets, count = 0;
    if (Array.isArray(tweets))
    {
        for (k = 0; k < tweets.length; k++)
        {
            if (typeof tweets[k] == 'string')
            {
                count++;
            }
        }
        if (count == tweets.length)
        {
            for (i = 0; i < tweets.length; i++)
            {
                tweets[i] = tweets[i].toLowerCase();
                for (j = 0; j < tweets[i].length; j++)
                {
                    if (tweets[i].charAt(j) == "l" && tweets[i].charAt(j + 1) == "o" && tweets[i].charAt(j + 2) == "l")
                    {
                        console.log(tweets[i]);
                    }
                }
            }
        }
        else
        {
            console.log("all entries must be strings! ");
        }
    }
    else
    {
        console.log(" no can do.");
    }
};
filterToLol(["hello world!", "this is a tweet lol", "this is a tweet omg"]);
