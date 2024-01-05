// index.js
const receivesAFunction = (callback) => {
    if (typeof callback === 'function') {
        callback(); // Calls the provided function
    } else {
        throw new Error('Argument is not a function.');
    }

const returnsANamedFunction = () => {
    return function namedFunction() {
        // Some functionality within the named function
        console.log("This is a named function");
    };
};

module.exports = returnsANamedFunction;

};

// index.js
const returnsANamedFunction = () => {
    return function namedFunction() {
        // Some functionality within the named function
        console.log("This is a named function");
    };

    // Using returnsANamedFunction in another file
const returnsANamedFunction = require('./index'); // Assuming the file structure

// Getting the named function from returnsANamedFunction
const namedFunction = returnsANamedFunction();

// Calling the named function
namedFunction(); // This will execute the functionality within the named function
const receivesAFunction = (callback) => {
    if (typeof callback === 'function') {
        callback(); // Calls the provided function
    } else {
        throw new Error('Argument is not a function.');
    }
};

module.exports = receivesAFunction;


};




module.exports = returnsANamedFunction;


module.exports = receivesAFunction;
