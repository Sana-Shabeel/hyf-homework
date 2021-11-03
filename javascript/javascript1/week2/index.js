'use strict';
// Flight booking fullname function 

function getFullname (firstname, surname, useFormalName = true, isfemale = true){
    if (useFormalName === true && isfemale === false ){
        return 'lord' + firstname + surname;
    } else if (useFormalName === true && isfemale === true){
        return 'Madam' + firstname + surname;
    } else{
        return firstname + surname;
    }
}
const fullname1 = getFullname(' anas ', 'Barre')
const fullname2 = getFullname( ' Anisa ', 'Barre')
console.log(fullname1);
console.log(fullname2);