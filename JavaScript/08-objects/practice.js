// Write a function called isUser that accepts an object, and returns true if it is
// a valid user object, false otherwise. A valid user object will contain a
// property called `name` which is a string, and a property called `screen_name`
// which is also a string. It should contain no other properties.
//
//     isUser({ "name":"Semmy Purewal", "screen_name":"semmypurewal" });
//     //=> true
//
//     isUser({ "name":"Firstname Lastname", "screen_name":"user" });
//     //=> true
//
//     isUser("semmypurewal");
//     //=> false
//
//     isUser({ "age": 37, "name":"Semmy Purewal", "screen_name":"semmypurewal" });
//     //=> false
//
var isUser = function(user)
{
    if (typeof user == 'object' && Object.keys(user).length == 2 &&
        typeof user.name == 'string' && typeof user.screen_name == 'string')
    {
        return true;
    }
    else
    {
        return false;
    }
};
var a = isUser(
{
    "name": "Firstname Lastname",
    "screen_name": "user"
});;
console.log(a);


// Often when working with HTML, we'll want to take data stored in an object and
// display it as an HTML `div` element. For example, suppose we have a person
// object which contains a name and a screen_name. We'd like to produce a `div`
// that contains an `h1` element with the name, and an `h2` element with
// screen_name. For example:
//
//     var user = { "name":"Semmy Purewal", "screen_name":"semmypurewal" };
//
//     userToDiv(user);
//     //=> "<div><h1>Semmy Purewal</h1><h2>semmypurewal</h2></div>"
//
// Write this function. It should throw an error if the user is not a valid
// user. It might be helpful to use some functions from previous sections.
//
var userToDiv = function(user)
{
    if (typeof user == 'object' && Object.keys(user).length == 2 &&
        typeof user.name == 'string' && typeof user.screen_name == 'string')
    {
        return "<div><h1>" + user.name + "</h1><h2>" + user.screen_name + "</h2></div>";
    }
    else
    {
        return "Invalid User";
    }
};
var a = userToDiv(
{
    "name": "Semmy Purewal",
    "screen_name": "semmypurewal"
});
console.log(a);


// Now suppose we have a user object that contains a list of tweets. In HTML, we
// may want to represent that as a list element with a set of list items. That
// looks something like this:
//
//     <ul>
//       <li>this is a tweet.</li>
//       <li>this is another tweet.</li>
//     </ul>
//
// Write a function that converts a user object containing tweets into an HTML
// `div` element representing that user.
//
//     userWithTweetsToDiv({
//         "name": "Semmy Purewal",
//         "screen_name":"semmypurewal",
//         "tweets": [
//             "this is a tweet.",
//             "this is another tweet!"
//         ]
//     });
//     //=> "<div><h1>Semmy Purewal</h1><h2>semmypurewal</h2><ul><li>this is a tweet.</li><li>this is another tweet</li></ul></div>"
//
var userWithTweetsToDiv = function(user)
{
    var previous = "";
    if (typeof user == 'object' && Object.keys(user).length == 3 &&
        typeof user.name == 'string' && typeof user.screen_name == 'string' && Array.isArray(user.tweets))
    {
        for (i = 0; i < user.tweets.length; i++)
        {
            previous = previous + "<li>" + user.tweets[i] + "</li>" + "\n";
        }
        return "<div>" + "\n" + "<h1>" + user.name + "</h1>" + "\n" + "<h2>" + user.screen_name + "</h2>" + "\n" + "<ul>" + "\n" + previous + "</ul>" + "\n" + "</div>";

    }
    else
    {
        return "Invalid User";
    }
};
var a = userWithTweetsToDiv(
{
    "name": "Semmy Purewal",
    "screen_name": "semmypurewal",
    "tweets": [
        "this is a tweet.",
        "this is another tweet!",
        "this is my tweet"
    ]
});
console.log(a);

// Write a function that accepts an array of strings, and returns an object that
// represents the number of times that each string appears in the array. This might
// sound confusing, but this is what we'd like to have happen.
//
//     frequencies([ "hello", "world", "hello", "goodbye", "hello", "world", "thing" ]);
//     //=> { "hello" : 3, "world" : 2, "goodbye": 1, "thing" : 1 }
//
//     frequencies([]);
//     //=> {}
//
//     frequencies([ "hello", "world" ]);
//     //=> { "hello" : 1, "world" : 1 }
//
// There are several ways you can do it, but it might be interesting to try it with
// the `reduce` method that starts with an empty object.
//
var frequencies = function(array)
{
    var i = 0,
        j, count = 1;
    var array = array.sort();
    while (i < array.length)
    {
        for (j = i + 1; j < array.length; j++)
        {
            if (array[i] == array[j])
            {
                count = count + 1;
            }
        }
        tweet = array[i];
        count = count;
        var person = {
            tweet: tweet,
            count: count
        };
        console.log(person.tweet + ":" + person.count);
        i = i + count;
        count = 1;
    }

};
var a = frequencies(["hello", "world", "hello", "goodbye", "hello", "world", "thing", "thing"]);
