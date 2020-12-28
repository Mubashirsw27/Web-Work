//The JS REGEX

//Modifiers

//For Removing Case Sensitivity

// var text = "helSo 1jani";
// var pattern = /s/i; //this will search the string despite of Capital or Small.
// var result = text.match(pattern)
// console.log(result)


//For Searching Globaly

// var text = "helSo 1jani";
// var pattern = /s/g; //This will search the string global not for the first time only.
// var result = text.match(pattern)
// console.log(result)

//For Searching in Multiple Lines

// var text = "helSo 1jani\nasaw\naiahs";
// var pattern = /s/m; //This will search the string even if it is in multiple lines.
// var result = text.match(pattern)
// console.log(result)

//Brackets

//For Alphabets

// var text = "helSo 1jani";
// var pattern = /[a-z]/g; //This will search the string  for any keyword b/w a to z.
// var result = text.match(pattern)
// console.log(result)

//For Numbers

// var text = "helSo 1jani";
// var pattern = /[0-9]/g; //This will search the string  for any number b/w 0 to 9.
// var result = text.match(pattern)
// console.log(result)

//for Multiple Words

// var text = "helSo 1jani";
// var pattern = /[a|z]/g; //This will search the string  for both keyword from a or z.
// var result = text.match(pattern)
// console.log(result)

//Metacharacters

//for any digit

// var text = "helSo 1jani";
// var pattern = /\d/g; //This will search the string for any digit.
// var result = text.match(pattern)
// console.log(result)

//for any whitespace

// var text = "helSo 1jani";
// var pattern = /\s/g; //This will search the string for any whitespace.
// var result = text.match(pattern)
// console.log(result)

//for any word

// var text = "helSo 1jani";
// var pattern = /\bhel/; //This will search the string for any keyword that is starting from hel.
// var result = text.match(pattern)
// console.log(result)

//Quantifiers

// var text = "haelo 1sjani";
// var pattern = /sa+/i; //This will search the string that whether it has s atleast once.
// var result = text.match(pattern)
// console.log(result)

// var text = "haelo 1sjani";
// var pattern = /sa*/i; //This will search the string that whether it has s or not.
// var result = text.match(pattern)
// console.log(result)

// var text = "haelo 1sjani";
// var pattern = /sa?/i; //This will search the string that whether it has s 0 or 1 apperearance.
// var result = text.match(pattern)
// console.log(result)

//Methods

// var text = "haelo 1sjani";
// console.log((/e/).test(text)) //For searching that it contains e or not

// var text = "haelo 1sjani";
// console.log((/[i-z]/).exec(text)) //For Searching for pattern





