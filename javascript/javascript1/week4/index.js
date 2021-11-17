console.log('JS1 WEEK4');

const listOftodos = []
const storeName = []
const calcSentence = []
function getReply(command) {

   if (command.includes('Hello my name is') || command.includes('my name is')){
    const splitNameSentence = command.split(' ')
    const rememberName = splitNameSentence.length <= 4 ? splitNameSentence[3] : splitNameSentence[4];
    storeName.push(rememberName)
    console.log('Nice to meet you ' + rememberName);
   } 

   if (command === 'What is my name' && storeName.length >= 1){
    const youName = 'Your name is '
    console.log( youName + storeName[0]);
   } else if (storeName.length == 0){
       console.log('Your name is not mentioned yet');
   }


   if (command.includes('add fishing to my todo')){
       listOftodos.unshift('fishing')
       console.log('fishing added to your todo list ');
   }


   if (command.includes('add singing in the shower to my todo')){
    listOftodos.push('singing in the shower')
    console.log('Singing in the shower added to your todo list ');
}


if (command.includes('remove fishing from my todo')){
    listOftodos.shift()
    console.log('fishing removed from your todo list ');
}


if (command.includes('what is on my todo')){
    
    console.log(`You have ${listOftodos.length} items your todo list. And they are: ${listOftodos}`);
}


if (command.includes('what day is today')){
    const monthArray =  ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
    const today = new Date()
    const month = today.getMonth()
    const date = today.getDate() + '. of  ' + monthArray[month] + ' ' + today.getFullYear();
    console.log(date);
}


if (command.includes('what is') && command.includes('+')) {
    const splitCalcSentence = command.split(' ')
    calcSentence.push(splitCalcSentence[4])
    calcSentence.push(splitCalcSentence[2])
    const resultOfCalc = Number(splitCalcSentence[2]) + Number(splitCalcSentence[4])
    console.log(resultOfCalc);
} else if (command.includes('what is') && command.includes('*')){
    const splitCalcSentence = command.split(' ')
    calcSentence.push(splitCalcSentence[4])
    calcSentence.push(splitCalcSentence[2])
    const resultOfCalc = Number(splitCalcSentence[2]) * Number(splitCalcSentence[4])
    console.log('The result of your calculation: ' + resultOfCalc);
}


if (command.includes('set a timer for 4 minutes')){
    console.log('Timer set 👍');
    function setTimer(){
             console.log('4 minutes is up!!');
              }
              setTimeout(setTimer, 240000,  );
}


if (command.includes('extra command')){
    console.log(`😀⚽️👋`);
}
   if (Boolean) return
}
getReply('my name is anas')
getReply('What is my name')
getReply('add fishing to my todo')
getReply('add singing in the shower to my todo')
// getReply('remove fishing from my todo')
getReply('what is on my todo')
getReply('what day is today')
getReply('what is 5 * 3')
getReply('set a timer for 4 minutes')
getReply('extra command')


// console.log(listOftodos);
// console.log(storeName);
// console.log(calcSentence);



