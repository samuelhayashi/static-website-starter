(function(window, document) {

 $(function() {


    // ES6 closure (IIFE replacement)
    {

      console.log('Main file!');
      console.log($('html'));

      const es = [];
      for (let i = 0; i < 10; i++) {
        let c = i;
        es[i] = () => console.log('Upcoming edition of ECMAScript is ES' + c);
      }
      es[6](); // Upcoming edition of ECMAScript is ES

    }


 });

}(window, document));
