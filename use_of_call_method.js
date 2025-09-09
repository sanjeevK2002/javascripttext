// call() :- It is a method that can be used to invoke a function with a specified 'this' context and arguments provided individually.
// it used when we want to borrow a method from one object and use it in the context of another object.
// real world example is when we have two objects and we want to use a method from one object in the context of another object without copying the method.
// it is solve the problem of method borrowing.
// syntax :- functionName.call(thisArg, arg1, arg2, ...)