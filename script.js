 // create languages Array
 let languages = ["javaScript", "html", "css", "reactJs", "UI/UX DESIGNER"];
 
 //dom query a paragraph element
 let paragraph = document.querySelector("p");
 
 //create an  Array Object iterator
 let val = languages.values();
 
 //set interVal for iterating an Array and return a value 
 setInterval(() => {
     let{value:lang, done} = val.next();
     if (done) {
         //insert the line in the html element
         val = languages.values();
         lang = val.next().value;
     }
     paragraph.innerHTML = (`I'M  ${lang.toUpperCase()} DEVELOPER`);
 }, 6000);