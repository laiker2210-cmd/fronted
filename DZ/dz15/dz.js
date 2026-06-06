"use strict";

// найти факториал 5 с помощью рекурсии

function factorial(n) { 
    if (n <= 1) {
        return 1; 
    }
    console.log(n);
    
    return n * factorial(n - 1); 
}

document.writeln(factorial(5)); 