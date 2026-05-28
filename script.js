 // create languages Array
 let languages = ["javaScript", "html", "css", "reactJs", "UI/UX DESIGNER"];
 
 //dom query a paragraph element
 let paragraph = document.querySelector("p");
 
 //create an  Array Object iterator
 let val = languages.values();
 
 //set interVal for iterating an Array and return a value 
 setInterval(() => {
     let lang = val.next().value;
     if (lang !== undefined) {
         //insert the line in the html element
         paragraph.innerHTML = (`I'M  ${lang} DEVELOPER`);
     } else {
         val = languages.values();
     }
 }, 6000);