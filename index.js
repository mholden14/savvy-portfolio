import Navigation from "../src/Navigation

var greetuser = function greetuser(){
    var firstName = prompt('What is your first name?');
    var lastName = prompt('What is your last name?');

    if(firstName && lastName){
        greeting.innerHTML = `
            <div>
                <h3>Welcome to my world,</h3>
                <h4>${firstName} ${lastName}</h4>
            </div>
        `;
    }
    else{
        greetuser();
    }
};
  
greetuser();

var initalHTML = document.body.innerHTML;

document
     .body
     .innerHTML = `
    ${Navigation}
    ${initalHTML}
    ${Header}(title)}
    ${Content}
    ${Footer}
    ${initalHTML}
     `;

     //event listener here
     document.querySelector('#header input')
     .addEventListener(
         'keyup',
         (event)=> greeting.innerHTML= `
            <div>
                <h3>Welcome to my home page,</h3>
                <h4>${event.target.value}</h4>
                </div>
                
        `
     );


     //greetUser();