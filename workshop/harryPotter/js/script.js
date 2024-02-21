


    // Get all elements with the class "menu__item" (presumably tab links)
    const tablinks = document.getElementsByClassName("menu__item");
  
    // Get all elements with the class "content-card" (presumably tab content areas)
    const tabcontents = document.getElementsByClassName("content-card");
  
    // Function to open a specific tab by its ID

  function displayCard(id){
 
    const cards = document.querySelectorAll(".content-card")
    for(var j=0;j<cards.length;j++){
      
      if(parseInt(cards[j].getAttribute("data-card-id"))==id){
        console.log("here")
        console.log(cards[j])
        cards[j].classList.add("active")
      }else{
        console.log("here")
        cards[j].classList.remove("active")
      }
    }
    
  }
  //  function changeFontWeight(id){
  //   const menuItems =document.querySelectorAll(".menu__item");
  //   for(var i=0;i<menuItems.length;i++){
  //     if(menuItems[i].getAttribute("data-menu-item-id")==id){
  //       menuItems[i].classList.add("menu-item-active")
  //     }
  //   }
  // }
  
    // Immediately call the opentab function without any argument (potentially opens the first tab)
    
    const buttons = document.getElementsByClassName("menu__btn");
    for (let i = 0; i < tablinks.length; i++) {
      // Get the data-number attribute value for each button
      
      tablinks[i].addEventListener("click",function(){
       // const dataNumber = buttons[i].getAttribute("data-number");
        const dataNumber= parseInt(buttons[i].getAttribute("data-number"),10)

     
        const menuItems =document.querySelectorAll(".menu__item");
        tablinks[i].classList.toggle("animate");
        console.log("num",dataNumber)
        for(var j=0;j<=dataNumber;j++){
          buttons[j].classList.add("purple")
          tablinks[j].classList.add("menu__item-shadow")
          menuItems[j].classList.add("menu-item-active")
          
         
        }

        for(var k=dataNumber+1;k<tablinks.length;k++){
          console.log("button",buttons[k],"k",k)
          buttons[k].classList.remove("purple")
          tablinks[k].classList.remove("menu__item-shadow")
          menuItems[k].classList.remove("menu-item-active")
        }
      })
      
      // If data-number attribute exists for the button
     
  }
    // Loop through each element and add a click event listener
   
  // const languagebtn= document.querySelectorAll(".language-btn")

    const languagebtn= document.querySelectorAll(".language-btn")
    const arrowDown=document.querySelectorAll(".arrow-down")
  const languageoptions= document.querySelectorAll(".language-options")

 console.log(languageoptions)

for(let j=0;j<languagebtn.length;j++){
  languagebtn[j].addEventListener("click",function(){
    console.log('clicked',languageoptions[j].classList)
    languageoptions[j].classList.toggle("visible")

  })

  arrowDown[j].addEventListener("click",function(){
    console.log('clicked this',languageoptions[j].classList)
    languageoptions[j].classList.toggle("visible")


  })

window.onclick = function(event) {
  // When the user clicks anywhere outside of the div, close it
  if(event.target.matches(".language-btn") || event.target.matches(".arrow-down")  ){
    return
  }
  for(var i=0;i<languageoptions.length;i++){
    if(languageoptions[i].classList.contains("visible")){
      languageoptions[i].classList.remove("visible")
    }
  }
}

  languageoptions.forEach(languageOption => {
    // Within each div, select all <p> elements
    const pElements = languageOption.querySelectorAll("p");
    const language= document.querySelectorAll(".language")

    // let cardContentPromptText=document.querySelector(".card-content-prompt-text")
  
    let task1prompt=""
    let task2prompt=""
    let task3prompt=""
    let task4prompt=""
    let task5prompt=""
    let task6prompt=""

    let cardContentPromptText1 = document.querySelector(".card-content-prompt-text[data-prompt-id='1']");
    let cardContentPromptText2 = document.querySelector(".card-content-prompt-text[data-prompt-id='2']");
    let cardContentPromptText3 = document.querySelector(".card-content-prompt-text[data-prompt-id='3']");
    let cardContentPromptText4 = document.querySelector(".card-content-prompt-text[data-prompt-id='4']");
    let cardContentPromptText5 = document.querySelector(".card-content-prompt-text[data-prompt-id='5']");
    let cardContentPromptText6 = document.querySelector(".card-content-prompt-text[data-prompt-id='6']");
    // Loop through each <p> element
    pElements.forEach(pElement => {
      pElement.addEventListener("click",function(){
        languagebtn[j].textContent=pElement.textContent
        // language[j].textContent=pElement.textContent
        if(pElement.textContent=="PHP"){
          task1prompt=`Imagine you're tasked with building an enchanted ecosystem for a magical database at Hogwarts School of Witchcraft and Wizardry. Your mission is to construct a set of magical APIs that will allow users to interact with the database storing information about various magical creatures. The database is hosted on a secure Docker server, ensuring data security and reliability.

          Before we delve into creating the APIs, please ensure that you have access to the database credentials. These credentials are typically stored in a .env file within my project folder. Here are the credentials you'll need:
          
          Host:
          Port:
          DatabaseName:
          Username:
          Password:
          
          The table name is "creature".
          
          Please ensure to provide a cURL request with  http://localhost/{filename.php} give it for all API.
          
          Task 1 : You're tasked with creating an API endpoint to add a new magical creature to a database. Your goal is to design an intuitive interface that allows users to effortlessly create enchanting beings. Your API should expect a JSON request body containing the name, species, and description of the creature. Additionally, you'll implement this endpoint using PHP and use PDO
          to ensure smooth integration. Furthermore, ensure connectivity to a PostgreSQL database hosted on a Docker server, ensuring data security and reliability.
          
          Add require_once realpath(__DIR__ . "/vendor/autoload.php");
          use $_ENV`
          task2prompt=`Your task is to devise an API endpoint that allows you to retrieve detailed information about a particular magical creature from the database. This endpoint should expect a unique identifier, {creature_id}, as part of the URL path to identify the creature of interest. Implement this endpoint using PHP to ensure efficient data retrieval. Additionally, ensure seamless connectivity to a PostgreSQL database hosted on a Docker server to provide reliable access to creature information.`
          task3prompt=`Your task is to construct an API endpoint that empowers you to update the description of a specific magical creature stored in the database. This endpoint should expect a JSON body containing the new description, allowing you to modify the creature's information. Implement this endpoint using PHP to ensure smooth integration and efficient data handling. Moreover, ensure seamless connectivity with a PostgreSQL database hosted on a Docker server to securely persist the updated information.
          `
          task4prompt=`Your task is to engineer an API endpoint that allows you to delete a specific magical creature from the database based on its identifier. This endpoint should expect the unique identifier, {creature_id}, as part of the URL path to pinpoint the creature for deletion. Implement this endpoint using PHP to ensure secure and efficient removal of the creature. Additionally, ensure seamless connectivity with a PostgreSQL database hosted on a Docker server to facilitate the deletion process with confidence.`
          task5prompt=`You're tasked with building an enchanted ecosystem for a magical database at Hogwarts School of Witchcraft and Wizardry. Your mission is to construct a set of magical APIs that will allow users to interact with the database storing information about various magical creatures. The database is hosted on a secure Docker server, ensuring data security and reliability.

          Before we delve into creating the APIs, please ensure that you have access to the database credentials.Here are the credentials you'll need:
          
          Host=localhost
          Port=5432
          DatabaseName=hogwarts_db
          Username=postgres
          Password=root
          
          The table name is "creature".
          Please ensure to provide a cURL request with  http://localhost/{filename.php} give it for all API.
          
          Task: Your task is to develop an API endpoint that offers you a comprehensive list of all magical creatures currently residing in the database. Simply send a GET request to this endpoint to retrieve the enchanting beings name, species, and description of the creature. Implement this endpoint using PHP , use PDO and do not use laravel to ensure seamless integration and efficient data retrieval. Additionally, ensure seamless connectivity with a PostgreSQL database hosted on a Docker server to fetch and display all magical creatures with ease.`
          task6prompt=`Your task is to design a GET request endpoint that fetches a random spell from the spell table in the database. This endpoint should return information about the spell such as its name, description. Implement this endpoint using PHP , use PDO and do not use laravel to ensure seamless integration and efficient data retrieval. Ensure connectivity to a PostgreSQL database hosted on a Docker server to provide reliable access to spell information.
          `

          cardContentPromptText1.textContent = task1prompt;
          cardContentPromptText2.textContent = task2prompt;
          cardContentPromptText3.textContent = task3prompt;
          cardContentPromptText4.textContent = task4prompt;
          cardContentPromptText5.textContent = task5prompt;
          cardContentPromptText6.textContent = task6prompt;


        }else if(pElement.textContent=="JavaScript"){
          task1prompt=`Imagine you're tasked with creating an API endpoint to add a new magical creature to a database. Your goal is to design an intuitive interface that allows users to effortlessly create enchanting beings. Your API should expect a JSON request body containing the name, species, and description of the creature. Additionally, you'll implement this endpoint using {framework/language} to ensure smooth integration. Furthermore, ensure connectivity to a PostgreSQL database hosted on a Docker server, ensuring data security and reliability.`

          task2prompt=`Your task is to devise an API endpoint that allows you to retrieve detailed information about a particular magical creature from the database. This endpoint should expect a unique identifier, {creature_id}, as part of the URL path to identify the creature of interest. Implement this endpoint using {framework/language} to ensure efficient data retrieval. Additionally, ensure seamless connectivity to a PostgreSQL database hosted on a Docker server to provide reliable access to creature information.`
          task3prompt=`Your mission is to construct an API endpoint that empowers you to update the description of a specific magical creature stored in the database. This endpoint should expect a JSON body containing the new description, allowing you to modify the creature's information. Implement this endpoint using {framework/language} to ensure smooth integration and efficient data handling. Moreover, ensure seamless connectivity with a PostgreSQL database hosted on a Docker server to securely persist the updated information.`
          task4prompt=`Your challenge is to engineer an API endpoint that allows you to delete a specific magical creature from the database based on its identifier. This endpoint should expect the unique identifier, {creature_id}, as part of the URL path to pinpoint the creature for deletion. Implement this endpoint using {framework/language} to ensure secure and efficient removal of the creature. Additionally, ensure seamless connectivity with a PostgreSQL database hosted on a Docker server to facilitate the deletion process with confidence.`
          task5prompt=`Imagine you're tasked with building an enchanted ecosystem for a magical database at Hogwarts School of Witchcraft and Wizardry. Your mission is to construct a set of magical APIs that will allow users to interact with the database storing information about various magical creatures. The database is hosted on a secure Docker server, ensuring data security and reliability.

          Access to Database Credentials: Ensure you have the necessary credentials to connect to the PostgreSQL database. These credentials typically include the HOST, PORT, DB_NAME, DB_USER, and DB_PASS. Store these credentials in a .env file within your project folder.
          
          The table name is "creature".
          Please ensure to provide a cURL request for retrieving all tasks at the end.
          
          Task: Your task is to develop an API endpoint that offers you a comprehensive list of all magical creatures currently residing in the database. Simply send a GET request to this endpoint to retrieve the enchanting beings. Implement this endpoint using {framework/language} to ensure seamless integration and efficient data retrieval. Additionally, ensure seamless connectivity with a PostgreSQL database hosted on a Docker server to fetch and display all magical creatures with ease.`
          task6prompt=`Imagine you're tasked with building an enchanted ecosystem for a magical database at Hogwarts School of Witchcraft and Wizardry. Your mission is to construct a set of magical APIs that will allow users to interact with the database storing information about various magical creatures. The database is hosted on a secure Docker server, ensuring data security and reliability.

          Access to Database Credentials: Ensure you have the necessary credentials to connect to the PostgreSQL database. These credentials typically include the HOST, PORT, DB_NAME, DB_USER, and DB_PASS. Store these credentials in a .env file within your project folder.
          
          The table name is "spell".
          Please ensure to provide a cURL request for retrieving all tasks at the end.
          
          Your task is to design a GET request endpoint that fetches a random spell from the spell table in the database. This endpoint should return information about the spell such as its name, description, and any other relevant details. Implement this endpoint using {framework/language} to ensure seamless integration and efficient data retrieval. Ensure connectivity to a PostgreSQL database hosted on a Docker server to provide reliable access to spell information.`

          cardContentPromptText1.textContent = task1prompt;
          cardContentPromptText2.textContent = task2prompt;
          cardContentPromptText3.textContent = task3prompt;
          cardContentPromptText4.textContent = task4prompt;
          cardContentPromptText5.textContent = task5prompt;
          cardContentPromptText6.textContent = task6prompt;

        }else if(pElement.textContent=="Python"){
          task1prompt=`Imagine you're tasked with building an enchanted ecosystem for a magical database at Hogwarts School of Witchcraft and Wizardry. Your mission is to construct a set of magical APIs that will allow users to interact with the database storing information about various magical creatures. The database is hosted on a secure Docker server, ensuring data security and reliability.

          Give installation steps for various Modules used in this code.
          
          Before we delve into creating the APIs, please ensure that you have access to the database credentials. These credentials are typically stored in the environment variables. Here are the environment variables you'll need to be accessed from the environment:
          
          HOST
          PORT
          DB_NAME
          DB_USER 
          DB_PASS
          The table name is "creatures".
          Please ensure to provide a cURL request for retrieving all tasks at the end.
          
          Task 1 : Imagine you're tasked with creating an API endpoint to add a new magical creature to a database. Your goal is to design an intuitive interface that allows users to effortlessly create enchanting beings. Your API should expect a JSON request body containing the name, species, and description of the creature. Additionally, you'll implement this endpoint using python flask
          to ensure smooth integration. Furthermore, ensure connectivity to a PostgreSQL database hosted on a Docker server, ensuring data security and reliability.
          
          add import os 
          use os.environ["DB_USER"]
          in main use app.app_context()
          handle all errors`
          task2prompt=`Your task is to devise an API endpoint that allows you to retrieve detailed information about a particular magical creature from the database. This endpoint should expect a unique identifier, {creature_id}, as part of the URL path to identify the creature of interest. Implement this endpoint using Python Flask to ensure efficient data retrieval. Additionally, ensure seamless connectivity to a PostgreSQL database hosted on a Docker server to provide reliable access to creature information.`
          task3prompt=`Your mission is to construct an API endpoint that empowers you to update the description of a specific magical creature stored in the database. This endpoint should expect a JSON body containing the new description, allowing you to modify the creature's information. Implement this endpoint using Python Flask to ensure smooth integration and efficient data handling. Moreover, ensure seamless connectivity with a PostgreSQL database hosted on a Docker server to securely persist the updated information.`
          task4prompt=`Your challenge is to engineer an API endpoint that allows you to delete a specific magical creature from the database based on its identifier. This endpoint should expect the unique identifier, {creature_id}, as part of the URL path to pinpoint the creature for deletion. Implement this endpoint using Python Flask to ensure secure and efficient removal of the creature. Additionally, ensure seamless connectivity with a PostgreSQL database hosted on a Docker server to facilitate the deletion process with confidence.`
          task5prompt=`Imagine you're tasked with building an enchanted ecosystem for a magical database at Hogwarts School of Witchcraft and Wizardry. Your mission is to construct a set of magical APIs that will allow users to interact with the database storing information about various magical creatures. The database is hosted on a secure Docker server, ensuring data security and reliability.

          Before we delve into creating the APIs, please ensure that you have access to the database credentials. These credentials are typically stored in the environment variables. Here are the environment variables you'll need to be accessed from the environment:
          
          HOST
          PORT
          DB_NAME
          DB_USER 
          DB_PASS
          
          The table name is "creatures".
          Please ensure to provide a cURL request for retrieving all tasks at the end.
          
          Task: Your task is to develop an API endpoint that offers you a comprehensive list of all magical creatures currently residing in the database. Simply send a GET request to this endpoint to retrieve the enchanting beings. Implement this endpoint using Python Flask to ensure seamless integration and efficient data retrieval. Additionally, ensure seamless connectivity with a PostgreSQL database hosted on a Docker server to fetch and display all magical creatures with ease.`
          task6prompt=`Imagine you're tasked with building an enchanted ecosystem for a magical database at Hogwarts School of Witchcraft and Wizardry. Your mission is to construct a set of magical APIs that will allow users to interact with the database storing information about various magical creatures. The database is hosted on a secure Docker server, ensuring data security and reliability.

          Before we delve into creating the APIs, please ensure that you have access to the database credentials. These credentials are typically stored in the environment variables. Here are the environment variables you'll need to be accessed from the environment:
          
          HOST
          PORT
          DB_NAME
          DB_USER 
          DB_PASS
          
          The table name is "spell".
          Please ensure to provide a cURL request for retrieving all tasks at the end.
          
          Your task is to design a GET request endpoint that fetches a random spell from the spell table in the database. This endpoint should return information about the spell such as its name, description, and any other relevant details. Implement this endpoint using Python Flask to ensure seamless integration and efficient data retrieval. Ensure connectivity to a PostgreSQL database hosted on a Docker server to provide reliable access to spell information.`

          cardContentPromptText1.textContent = task1prompt;
          cardContentPromptText2.textContent = task2prompt;
          cardContentPromptText3.textContent = task3prompt;
          cardContentPromptText4.textContent = task4prompt;
          cardContentPromptText5.textContent = task5prompt;
          cardContentPromptText6.textContent = task6prompt;


        }else if(pElement.textContent=="Java"){

          task1prompt=`Java`
          task2prompt=`Java`
          task3prompt=`Java`
          task4prompt=`Java`
          task5prompt=`Java`
          task6prompt=`Java`

          cardContentPromptText1.textContent = task1prompt;
          cardContentPromptText2.textContent = task2prompt;
          cardContentPromptText3.textContent = task3prompt;
          cardContentPromptText4.textContent = task4prompt;
          cardContentPromptText5.textContent = task5prompt;
          cardContentPromptText6.textContent = task6prompt;

        }

          
        
        
        
      })
        // Access the <p> element here
         // Output the text content of each <p> element
    });
});

}


// Loop through each div element


 

function copy(id) {
  const copyText = document.querySelectorAll(".card-content-prompt-text");

  // console.log(copyText)
  for(var i=0;i<copyText.length;i++){
    if(id==copyText[i].getAttribute("data-copy-id")){
      console.log(copyText[i].textContent)
      // copyText[i].select()
      // document.execCommand("copy");

      const textToCopy = copyText[i].textContent;
      navigator.clipboard.writeText(textToCopy)
    }
  
  }


}
function changeText(id){
  
const copyIcons=document.querySelectorAll(".copy-icon");
const copiedText=document.querySelectorAll(".copied-text");
for(var j=0;j<copyIcons.length;j++){
  if(id==copyIcons[j].getAttribute("data-copy-icon-id")){
    console.log("clicked copy",copyIcons[j].classList);
    copyIcons[j].classList.add("hidden");
    copiedText[j].classList.remove("hidden");

    window.onclick = function(event) {
      // When the user clicks anywhere outside of the div, close it
      if(event.target.matches(".copy-icon") || event.target.matches(".copied-text") ){
        return
      }
      for(var i=0;i<copyIcons.length;i++){
        if(copyIcons[i].classList.contains("hidden")){
          copyIcons[i].classList.remove("hidden")
          copiedText[i].classList.add("hidden")
        }
      }
    }
    
   
  }
}


}

const navBar= document.querySelector(".nav-bar")

window.addEventListener("scroll", function() {
  if (window.scrollY > 0) {
      navBar.style.backgroundColor = "#202526";
  } else{
    navBar.style.backgroundColor = "#2025268e";
  }
});

