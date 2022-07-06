'use strict';

function calcAge(birthYear) {
    
    const age = 2022 - birthYear;
    console.log(firstName);

    function printAge(){
        const outputAge = `${firstName} You are ${age}, born in ${birthYear}`;
        console.log(outputAge);
        var millenial = true;
        if (birthYear >=1981 && birthYear <=1996) {
            const str= `Ohh ohh you are a millenial ${firstName}`
        }
        // console.log(str);
        console.log(millenial);
        // var is function scope thats why it ignores the block  scope and search for variable value upwards in function block .
    }
    printAge();
   
    return age;
}

const firstName = "aakash";
calcAge(1996);


