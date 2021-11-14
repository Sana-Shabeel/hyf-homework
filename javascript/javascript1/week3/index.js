// Item array removal
// Remove the item in names that is equal to nameToRemove
const names = [
    "Peter",
    "Ahmad",
    "Yana",
    "kristina",
    "Rasmus",
    "Samuel",
    "katrine",
    "Tala",
  ];
  const nameToRemove = names.splice(1, 1,);
  console.log(names);




//   When will we be there??
  const travelInformation = {
    speed: 50,
    destinationDistance: 432,
  };
  
  const travelTime = function () {
      const time = travelInformation.destinationDistance / travelInformation.speed
      const hour = 8 + ' hours and '
      const minutes = Math.floor(.64 * 60) + ' minutes'
      return hour + minutes

  };
  console.log(travelTime()); // 8 hours and 38 minutes
  



  
// Series duration of my life
const seriesDurations = [
    {
      title: "The Blacklist",
      days: 5,
      hours: 11,
      minutes: 8,
    },
    {
      title: "Naruto: Shippuden",
      days: 8,
      hours: 16,
      minutes: 20,
    },
    {
      title: "The office",
      days: 2,
      hours: 23,
      minutes: 30,
    },
  ];
   
const minutesIn80 = 42048000
  
  function logOutSeriesText() {
      const serieIntoMinutes = seriesDurations[0].days * 1440 + seriesDurations[0].hours * 60 + seriesDurations[0].minutes
      const result = (serieIntoMinutes / minutesIn80).toFixed(4)

       return `${seriesDurations[0].title} took ${result} of my life`
  }
  
console.log(  logOutSeriesText() );




// Step 3: Smart-ease - Back to the basics!
// NOnoN0nOYes (Note taking app)

// Save a note
const notes = []

function saveNote (content, id){
    const pushToNotes = notes.push({ content, id})
  return content, id
}

saveNote('Pick up groceries', 1)
saveNote('Do laundry ', 2)
saveNote('Eat lunch ', 3)

console.log(notes);

// Get a note

function getNote(id) {
                                    
   if (!id || typeof id !== 'number') throw new Error('No valid id is provided - only numbers are valid is ids')
                                
    for (const note of notes) {
    if (notes[id]) return notes[id];
}

return;
}
                                
const firstNote = getNote(1);
console.log(firstNote); // {content: 'Pick up groceries', id: 1}
  
// Log out notes

function logOutNotesFormatted() {
    // i was stuck here and followed Joachim's code
    for (const note of notes) {
      const id = Object.getOwnPropertyNames(note)[0];
      console.log('The note with id:', id + ',', 'has the following note text:', note[id]);
    }
}
logOutNotesFormatted()

  





// Adding an activity

const activities = []

function addActivity (date, activity, duration){
    const pushActivities = activities.push({date, activity, duration})
    return pushActivities
}
addActivity('23/7-18', 'youtube', 30)

console.log(activities);




// Show my status 
function showStatus (){
    if (activities.length >= 0){
        console.log(`You have added ${activities.length} activities. They amount to 78 min. of usage`);
    } else {
        console.log("Add some activities before calling showStatus");
    }
}
showStatus()

//  Usage limit
function usageLimit (){
     if (activities.length > 5) {
        console.log('You have reached your limit, no more smartphoning for you!');
    } else {

    }
}
usageLimit()