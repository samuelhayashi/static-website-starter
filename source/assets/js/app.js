'use strict';

// ES6 closure (IIFE replacement)
{

  const es = [];
  for (let i = 0; i < 10; i += 1) {
    let c = i;
    es[i] = () => console.log(`Upcoming edition of ECMAScript is ES${c}`);
  }
  es[6](); // Upcoming edition of ECMAScript is ES

}