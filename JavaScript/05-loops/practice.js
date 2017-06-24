// Write a function called `isVowel` that returns `true` if the input is a
// single character and either an upper or lower-case a, e, i, o, or
// u. It should return false otherwise.
//
//    isVowel("a");
//    //=> true
//
//    isVowel("E");
//    //=> true
//
//    isVowel(1);
//    //=> false
//
//    isVowel("Ea");
//    //=> false
//
//    isVowel("Y");
//    //=> false
//
var isVowel = function(char)
{
    var char;
    char = char.toLowerCase();
    if (char.length == 1)
    {
        if (char == "a" || char == "e" || char == "i" || char == "o" || char == "u")
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
        return false;
    }
};
var vowel = isVowel("a");
console.log(vowel);
// Write a function called `isLowerCaseLetter` that returns `true` if
// the input is a single letter and lower-case. It should return false otherwise.
//
//    isLowerCaseLetter("a");
//    //=> true
//
//    isLowerCaseLetter("A");
//    //=> false
//
//    isLowerCaseLetter(1);
//    //=> false
//
//    isLowerCaseLetter("ae");
//    //=> false
//
//    isLowerCaseLetter(true);
//    //=> false
//
var isLowerCaseLetter = function(char)
{
    var char;
    if (char.length == 1)
    {
        if (/[a-z]/.test(char))
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
        return false;
    }
};
var character = isLowerCaseLetter("a");
console.log(character);
// Write a function called `sumUpTo` so that it accepts a positive number `n`
// and sums the first `n` positive integers. For example, if you call `sumUpTo(5)`
// it should sum the numbers 1 through 5 inclusive. It should throw an error if the
// input number is negative.
//     sumUpTo(100);
//     //=> 5050
//
//     sumUpTo(10);
//     //=> 55
//
//     sumUpTo(0);
//     //=> 0
//
//     sumUpTo(-10);
//     //=> input must be a zero or a positive number!
//
var sumUpTo = function(number)
{
    var number, sum = 0;
    if (number >= 0)
    {
        for (i = 0; i <= number; i++)
        {
            sum = sum + i;
        }
        return sum;
    }
    else
    {
        return "input must be a zero or a positive number!";
    }
};
var total = sumUpTo(10);
console.log(total);
// Write a function called `sumAToB` so that it accepts two parameters
// `a` and `b` and sums the numbers between `a` and `b` inclusive. Note
// that `a` may be larger than `b`, in which case you'll need to work
// backawards.
//
//     sumAToB(10, 20);
//     //=> 165
//
//     sumAToB(0, -15);
//     //=> 120
//
//     sumAToB(-10, 500);
//     //=> 125195
//
//     sumAToB(10, 10);
//     //=> 10
//     sumAToB("hello", "world");
//     //=> inputs should be numbers!
//
var sumAToB = function(num1, num2)
{
    var num1, num2, sum = 0;
    if (num1 <= num2)
    {
        for (i = num1; i <= num2; i++)
        {
            sum = sum + i;
        }
        return sum;
    }
    else
    {
        return "input must be a zero or a positive number!";
    }
};
var total = sumAToB(10, 20);
console.log(total);
// Write a function called `countVowels` that accepts a string and
// returns the number of vowels contained in that string. You'll want
// to use the `isVowel` helper function from above. It should throw an
// error if the input is not a string
//
//     countVowels("hello world!");
//     //=> 3
//
//     countVowels("omg this is a hilarious tweet about nothing");
//     //=> 16
//
//     countVowels("");
//     //=> 0
//
//     countVowels(true);
//     //=> input to countVowels must be a string!
//
var countVowels = function(char)
{
    var char, count = 0;
    if (typeof char === 'string')
    {
        char = char.toLowerCase();
        for (i = 0; i <= char.length; i++)
        {
            if (char.charAt(i) == "a" || char.charAt(i) == "e" || char.charAt(i) == "i" || char.charAt(i) == "o" || char.charAt(i) == "u")
            {
                count = count + 1;
            }
        }
        return count;
    }
    else
    {
        return "input to countVowels must be a string!";
    }
};
var vowel = countVowels("omg this is a hilarious tweet about nothing");
console.log(vowel);
// Write a function that accepts a string and returns the same string, only in
// reverse!
//
//     reverse("hello world!");
//     //=> !dlrow olleh
//
//     reverse("omg this is a hilarious tweet about nothing");
//     //=> gnihton tuoba teewt suoiralih a si siht gmo
//
//     reverse("");
//     //=>
//
//     reverse(true);
//     //=> input to reverseString must be an string!
//
var reverseString = function(char)
{
    var char, reverse = "";
    if (typeof char === 'string')
    {
        char = char.toLowerCase();
        for (i = char.length; i >= 0; i--)
        {
            reverse = reverse + char.charAt(i);
        }
        return reverse;
    }
    else
    {
        return "input to reverseString must be an string!";
    }
};
var rstring = reverseString("omg this is a hilarious tweet about nothing");
console.log(rstring);
// A number is a prime number if it is only evenly divisible by 1 and itself
// (although we don't consider 1 a prime number, so 2 is the first prime
// number). Write a function called `isPrime` that accepts a number `p` as an
// argument and returns `true` if it is prime, `false` otherwise.
//
//     isPrime(101);
//     //=> true
//
//     isPrime(13);
//     //=> true
//
//     isPrime(1);
//     //=> false
//
//     isPrime(2);
//     //=> true
//
//     isPrime("hello");
//     //=> false
//
//     isPrime(-101);
//     //=> false
//
var isPrime = function(num)
{
    var num, count;
    for (i = 2; i < num; i++)
    {
        if (num % i == 0)
        {
            count = 1;
        }
    }
    if (count == 0)
    {
        return true;
    }
    else
    {
        return false;
    }
};
var prime = isPrime(15);
console.log(prime);
// Using the `isPrime` function, write a function that accepts a number as
// input sums all the primes smaller than that number.
//
//     sumPrimesUpTo(100);
//     //=> 1060
//
//     sumPrimesUpTo(0);
//     //=> 0
//
//     sumPrimesUpTo(1000);
//     //=> 76127
//
//     sumPrimesUpTo(2);
//     //=> 2
//
//     sumPrimesUpTo("whatever");
//     //=> input should be a number
//
var sumPrimesUpTo = function(num)
{
    var num, j, count, sum = 0;
    for (i = 2; i < num; i++)
    {
        count = 0;
        for (j = 2; j < i; j++)
        {
            if (i % j == 0)
            {
                count = 1;
            }
        }
        if (count == 0)
        {
            sum = sum + i;
        }
    }
    console.log(sum);
};
var prime = sumPrimesUpTo(10);
// Using the `isPrime` function, write a function that takes in a
// positive integer, n, and returns the first n numbers.
//
//     sumOfFirstNPrimes(10);
//     //=> 129
//
//     sumOfFirstNPrimes(100);
//     //=> 24133
//
//     sumOfFirstNPrimes(1000);
//     //=> 3672913
//
//     sumOfFirstNPrimes(0);
//     //=> 0
//
//     sumOfFirstNPrimes(1);
//     //=> 2
//
//     sumOfFirstNPrimes(-10);
//     //=> input number should be zero or a positive number!
//
var sumOfFirstNPrimes = function(num)
{
    if (typeof num === 'number' && num >= 0)
    {
        var sum = 0,
            i = 2,
            count, c, num;
        for (count = 1; count <= num;)
        {
            for (c = 2; c <= i - 1; c++)
            {
                if (i % c == 0)
                {
                    break;
                }
            }
            if (c == i)
            {
                sum = sum + i;
                count++;
            }
            i++;
        }
        console.log(sum);
    }
    else
    {
        console.log("input number should be zero or a positive number!");
    }
};
var prime = sumOfFirstNPrimes(-66);
// A _palindrome_ is a string that reads the same forwards and backwards. Write
// a function that accepts a string of arbitrary letters, numbers, and symbols, and
// returns true if it's a palindrome. For example:
//
//      isPalindrome("kayak");
//      //=> true
//
//      isPalindrome("A man, a plan, a canal, Panama");
//      //=> true
//
//      isPalindrome("hello world");
//      //=> false
//
// Let's start by writing a function to remove all non-letter characters
// from the input.
//
//     removeNonLetters("A man, a plan, a canal, Panama");
//     //=> AmanaplanacanalPanama
//
//     removeNonLetters("this is a string; it has some punctuation!");
//     //=> thisisastringithassomepunctuation
//
var removeNonLetters = function(sentence)
{
    var character = "",
        i, sentence;
    for (i = 0; i <= sentence.length; i++)
    {
        if ((/[a-z]/.test(sentence.charAt(i))) || (/[A-Z]/.test(sentence.charAt(i))))
        {
            character = character + sentence.charAt(i);
        }
        else
        {
            character = character + "";
        }
    }
    return character;
};
var remove = removeNonLetters("A man, a plan, a canal, Panama");
console.log(remove);
// Now use `removeNonLetters`, along with the `reverse` function from above to
// determine if the string is a palindrome.
var isPalindrome = function(sentence)
{
    var character = "",
        i, sentence, reverse = "";
    sentence = sentence.toLowerCase();
    for (i = 0; i <= sentence.length; i++)
    {
        if ((/[a-z]/.test(sentence.charAt(i))))
        {
            character = character + sentence.charAt(i);
        }
        else
        {
            character = character + "";
        }
    }
    for (j = sentence.length; j >= 0; j--)
    {
        if ((/[a-z]/.test(sentence.charAt(j))) || (/[A-Z]/.test(sentence.charAt(j))))
        {
            reverse = reverse + sentence.charAt(j);
        }
        else
        {
            reverse = reverse + "";
        }
    }
    if (character == reverse)
    {
        return true;
    }
    else
    {
        return false;
    }
};
var remove = isPalindrome("helloworld");
console.log(remove);
