// ASSESSMENT 4: JavaScript Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

// --------------------1) Create a function that takes in an array, removes the first item from the array and shuffles the remaining content.

// a) Create a test with an expect statement using the variable provided. 
// HINT: Check out this resource: https://jestjs.io/docs/expect#expectarraycontainingarray

// Pseudocode: 
    // Use a describe method that lists the name of the function called removeArr
    //Set 
    // Nested within the describe block, have a test/it method that describes what the function does "It will take an array, remove the first item from the array and shuffles the remaining content"
    // Tested in the test block, have an expect method that is calling on the remove_arr function, followed by the .toEqual() method matcher that will check the expected output of function remove_arr 

    describe("removeArr", () => {
        it("It will take an array, remove the first item from the array and shuffles the remaining content", () => {
            expect(removeArr(colors1)).toEqual(["blue", "green", "pink", "yellow"])
            expect(removeArr(colors2)).toEqual(["aquamarine","indigo", "ochre", "periwinkle", "saffron"])
        })
    })

// Red of red-green refactor: 
    // ● removeArr › It will take an array, remove the first item from the array and shuffles the remaining content
    // ReferenceError: removeArr is not defined

const colors1 = ["purple", "blue", "green", "yellow", "pink"]
// Expected output example (can be a different order): ["yellow", "blue", "pink", "green"]
const colors2 = ["chartreuse", "indigo", "periwinkle", "ochre", "aquamarine", "saffron"]
// Expected output example (can be a different order): ["saffron", "aquamarine", "periwinkle", "indigo", "ochre"]


// b) Create the function that makes the test pass
// Pseudocode: 
// Create a function named removeArr 
// Use .shift() on the array argument to remove the first element in the array 
// Use .sort() on the array argument to sort the contents within the array and output the same array, sorted. 

const removeArr = (array) => {
    array.shift()
    return array.sort() 
}

// console.log (removeArr(colors1))
// output: [ 'blue', 'green', 'pink', 'yellow' ]
// console.log (removeArr(colors2))
// output: [ 'aquamarine', 'indigo', 'ochre', 'periwinkle', 'saffron' ]


// Green of red-green refactor: 
    // PASS  ./code-challenges.test.js
    // removeArr
    //   ✓ It will take an array, remove the first item from the array and shuffles the remaining content (2 ms)


// Notes: 
    // I had a lot of issues on how to write the jest test to work where it would take the expected output and still accept the array that would come back in a different order than what I had inputed in. I had looked over the resource and came up with the following jest test, but it didn't seem to work. 

    // describe("removeArr", () => {
    //     const expected = ["yellow", "blue", "pink", "green"];
    //     it("It will take an array, remove the first item from the array and shuffles the remaining content", () => {
    //         expect(["purple", "blue", "green", "yellow", "pink"]).toEqual(expect.removeArr(expected))
    //     const expected1 = ["saffron", "aquamarine", "periwinkle", "indigo", "ochre"];
    //     it("It will take an array, remove the first item from the array and shuffles the remaining content", () => {
    //         expect(["chartreuse", "indigo", "periwinkle", "ochre", "aquamarine", "saffron"]).toEqual(expect.removerArr(expected1))
    //     })
    //     })
    // })


    // I am not sure if I was suppose to create another variable for the second expected output, but from my understanding, we would need to have another variable to hold the second variable's expected output so that is why I built it out like this. When I would run the test, it gave me a fail stating: 
        //   expect(received).toEqual(expected) // deep equality

                    // - Expected  - 1
                    // + Received  + 0

                    // Array [
                    // -   "blue",
                    //     "green",
                    //     "pink",
                    //     "yellow",
                    // ]

    // By reading this fail, it seems like it wasn't registering the whole array that my function was outputing since it says it was expecting 1, but did not receive anything 

    // Not sure what needs to be done to get this figured out. I would love to get some feedback on how I could either rewrite the jest to make it work or if it is something with my function. 


// --------------------2) Create a function that takes in an object that contains up votes and down votes and returns the net total of votes.

// a) Create a test with expect statements for each of the variables provided.

// Pseudocode: 
    // Use a describe method that lists the name of the function called upDown
    // Nested within the describe block, have a test/it method that describes what the function does "It takes an object as an argument and return the total of votes"
    // Nested in the test block, have an expect method that is calling on the upDown function, followed by the .toEqual() method matcher that will check the expected output of function upDown

    describe("upDown", () => {
        it("It takes an object as an argument and return the total of votes", () => {
            expect(upDown(votes1)).toEqual(11)
            expect(upDown(votes2)).toEqual(-31)
        })
    })

// Red of red-green refactor: 
    // ● upDown › It takes an object as an argument and return the total of votes
    // ReferenceError: upDown is not defined


const votes1 = {upVotes: 13, downVotes: 2}
// Expected output: 11
const votes2 = {upVotes: 2, downVotes: 33}
// Expected output: -31


// b) Create the function that makes the test pass.

// Pseudocode: 
// define a function called upDown that has a parameter of object 
// takes an object as an argument 
// create a new variable named totalVotes that will hold the math logic and would take upVotes and subtract the downVotes to get the net total 
    // To access the values in the key:value pair, will need to utilize dot notation 
// To get my output, I will need to return the variable totalVotes 


const upDown = (object) => {
    var totalVotes = object.upVotes - object.downVotes
    return totalVotes
}

// Green of red-green factor: 
    // PASS  ./code-challenges.test.js
    // upDown
    //   ✓ It takes an object as an argument and return the total of votes (2 ms)

// --------------------3) Create a function that takes in two arrays as arguments and returns one array with no duplicate values. STRETCH: Use the spread operator to pass in a dynamic number of arguments.

// a) Create a test with an expect statement using the variables provided.

// Pseudocode: 
    // Use a describe method that lists the function name called twoArray
    // Nested in the describe function, use a test/it method that describes what the function does "It will take an arrays as arguments and returns only one array with no duplicate values"
    // Nested within the test block, have an expect method calling on the twoArray function followed by the .toEqual() method matcher that will check the expected output of the function twoArray

describe("twoArray", () => {
    it("It will take an arrays as arguments and returns only one array with no duplicate values", () => {
        expect(twoArray(dataArray1, dataArray2)).toEqual(["array", "object", "number", "string", "Boolean", "null", "undefined"])
    })
})

// Red of red-green refactor: 
    // ● twoArray › It will take an arrays as arguments and returns only one array with no duplicate values
    // ReferenceError: twoArray is not defined


const dataArray1 = ["array", "object", "number", "string", "Boolean"]
const dataArray2 = ["string", "null", "Boolean", "string", "undefined"]
// Expected output: ["array", "object", "number", "string", "Boolean", "null", "undefined"]


// b) Create the function that makes the test pass.

// Create a function that takes in two arrays as arguments and returns one array with no duplicate values. STRETCH: Use the spread operator to pass in a dynamic number of arguments.

// Pseudocode:
    // define a function named twoArray that will have the parameter of array 
    // It will take in two arrays as the arguments and output only 1 array with no duplicate values 
    // To combine the two arrays, can use the concat() method 
        // figure out a way to iterate through the array to find any repeating values and remove repeating value from array 
    //Utilize set method as the set method will look at the values and collect any values that are unique where each value will only occur once in a set 
    // Use the spread operator to allow to copy the whole array into another array 

const twoArray = (array1, array2) => {
    const myArr = array1.concat(array2)
    return [...new Set(myArr)]
}

// Green of red-green refactor: 
    // PASS  ./code-challenges.test.js
    // twoArray
    //   ✓ It will take an arrays as arguments and returns only one array with no duplicate values (2 ms)

// Notes: 
    // For this question, my only blocker was to figure out what was the best method that would help me iterate through the array and locate any repeating values so that we can remove them from the array. At the beginning, I thought the filter method would be helpful to filter through the array and locate any repeating values as long as I set my conditions correctly. However, I got stuck on how I would set my conditions for the filter to know what I wanted it to do. With research, I was able to learn about a new method called set method which basically only wants unique values and any time a repeating value is in the array, it will be remove. Since this set method was something better than filter and I didn't need to set any conditions to it, I choose to use it instead. 

    // However, when I ran my jest test, my test failed. To understand why it failed I looked to my jest test and saw that the output from my function was printed out like this: 
        // Set {"array", "object", "number", "string", "Boolean", "null", "undefined"}
    // This is not how I wanted my output to be printed. I needed to find out a way to remove Set from the output so it could match the output that I needed to provide. With some research online and the tip from the assessment, I learned that I could use the spread operator to copy the array into another array for the output. By doing this, it removed the set from the original output and my test was able to pass. 
