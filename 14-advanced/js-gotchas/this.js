// `this` lets a method access the current object (or the containing object)
// without needing to know the name of the variable containing the object.

const groucho = {
    fullname: 'Groucho Julius Marx',
    greeting: function () {
        return 'Good evening, my name is ' + this.fullname;
    }
}

console.log( 'Calling the method:', groucho.greeting() );

// What if we copy the method from inside the object?
// What if we convert the method to a regular function?

const unboundGreeting = groucho.greeting;
console.log( 'Calling the function:', unboundGreeting() );

// .bind() //////////////////////////////////////////////////////////
const boundGreeting = groucho.greeting.bind(groucho);
console.log( 'Calling the bound function', boundGreeting() );

const otherGreeting = groucho.greeting.bind({ diabetic: true, salary: false, fullname: 'Harpo Marx' });
console.log('Hey Harpo', otherGreeting());

// .call() //////////////////////////////////////////////////////////
console.log(unboundGreeting.call(groucho));
console.log(unboundGreeting.call({fullname: 'Hunter S. Thompson'}));

// .apply() /////////////////////////////////////////////////////////
console.log(unboundGreeting.apply(groucho));

const numbers = [56, 11, 23, 101];
console.log( Math.max(numbers) ); // NaN: not expecting an array
console.log( Math.max.apply(Math, numbers)); // 101 // flatten the array into a list of actual arguments

// Modern fix: ES6
console.log( Math.max(...numbers) );