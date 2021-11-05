// 'use strict';
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

// Event application (hope this is right)

function getEventWeekday (eventHeld) {
    let day = new Date();
    let today = day.getDay()
    const days = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday']
    const willBeHeld = days[(today + eventHeld) % 7]
    return willBeHeld;
}

console.log('Event will be held on ' +  getEventWeekday(9));


// Weather wear

function weatherWear (temp) {
    if (temp > 30){
        console.log(`Shorts and a t-shirt`)
    } else {
        console.log(`its going to be a cold one consider wearing a jacket  and trousers`)
    }
}
weatherWear(50)


// Student manager
// addStudentToClass function



const class07Students = [];

function addStudentToClass(studentName) {

    if (class07Students.length < 6) {
        class07Students.push(studentName);

    } else if (class07Students.length >= 6 ) {
        console.log('Cannot add more students to class 07');
    } else if (class07Students.length  >= 6 && studentName == 'Margrethe II') {
        class07Students.unshift('Margrethe II')

    } else {
        console.log('something went wrong');
    }

  if (Boolean) return
}
addStudentToClass('anas1')
addStudentToClass('anas2')
addStudentToClass('anas3')
addStudentToClass('anas4')
addStudentToClass('anas5')
// addStudentToClass('anas6')
addStudentToClass('Margrethe II')
console.log(class07Students);


function getNumberOfStudents() {
    const numStudents = `There are currently ${class07Students.length} students in the class`
    console.log(numStudents);
    return numStudents;
}
getNumberOfStudents()



// Candy helper optional

const boughtCandyPrices = []

function addCandy (candyType, weight) {
   return boughtCandyPrices.push(candyType, weight);
}

addCandy('sweet', 20)
console.log(boughtCandyPrices);



function canBuyMoreCandy () {
    let amountToSpend = Math.random() * 20;
    console.log(amountToSpend);
    let toffe = 1.1;
    if (toffe < amountToSpend ){
        while (toffe < amountToSpend ) {
            console.log("You can buy more, so please do!");
            toffe++;
        }
    } else {
        console.log('Enough candy for you!"');
    }
    
}
canBuyMoreCandy()
