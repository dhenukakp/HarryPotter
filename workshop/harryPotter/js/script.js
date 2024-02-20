


    // Get all elements with the class "menu__item" (presumably tab links)
    const tablinks = document.getElementsByClassName("menu__item");
  
    // Get all elements with the class "content-card" (presumably tab content areas)
    const tabcontents = document.getElementsByClassName("content-card");
  
    // Function to open a specific tab by its ID
    function opentab(tabname) {
      // Remove the "active" class from all menu items (deselects all tabs)
      for (const tablink of tablinks) {
        tablink.classList.remove("active-link");
        console.log(tablink)
      }
  
      // Remove the "active-content" class from all content areas (hides all tabs)
      for (const tabcontent of tabcontents) {
        tabcontent.classList.remove("active");
      }
  
      // Add the "active" class to the clicked menu item (visually selects it)
      event.currentTarget.classList.add("active-link");
  
      // Add the "active-content" class to the content area with the matching ID (displays it)
      document.getElementById(tabname).classList.add("active");
    }
  
    // Immediately call the opentab function without any argument (potentially opens the first tab)
    
    const buttons = document.getElementsByClassName("menu__btn");
    for (let i = 0; i < tablinks.length; i++) {
      // Get the data-number attribute value for each button
      
      tablinks[i].addEventListener("click",function(){
        const dataNumber = buttons[i].getAttribute("data-number");
        tablinks[i].classList.toggle("animate");
        console.log("num",dataNumber)
        for(var j=0;j<dataNumber;j++){
          buttons[j].classList.add("red")
          tablinks[j].classList.add("menu__item-shadow")
         
        }

        for(var k=dataNumber;k<tablinks.length;k++){
          buttons[k].classList.remove("red")
          tablinks[k].classList.remove("menu__item-shadow")
        }
      })
      
      // If data-number attribute exists for the button
     
  }
    // Loop through each element and add a click event listener
   
  const languagebtn= document.querySelectorAll(".language-btn")
  const languageoptions= document.querySelectorAll(".language-options")

 console.log(languageoptions)

for(let j=0;j<languagebtn.length;j++){
  languagebtn[j].addEventListener("click",function(){
    console.log('clicked')
    languageoptions[j].classList.toggle("visible")

  })

  languageoptions.forEach(languageOption => {
    // Within each div, select all <p> elements
    const pElements = languageOption.querySelectorAll("p");
    const language= document.querySelectorAll(".language")
    
    // Loop through each <p> element
    pElements.forEach(pElement => {
      pElement.addEventListener("click",function(){
        languagebtn[j].textContent=pElement.textContent
        console.log(pElement.textContent)
        language[j].textContent=pElement.textContent
        
      })
        // Access the <p> element here
         // Output the text content of each <p> element
    });
});

}


// Loop through each div element


 
    