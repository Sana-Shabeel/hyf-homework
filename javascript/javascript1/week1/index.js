console.log('Hello JS 1')


// Age-ify (A future age calculator)
const yearOfBirth = 2001;
const yearFuture = 2027;
const age = yearFuture - yearOfBirth
console.log(`You will be ${age} in 2027`)

//Goodboy-Oldboy (A dog age calculator)

const dogYearOfBirth = 2017;
const dogYearFuture = 2027;
const dogYear = dogYearFuture - dogYearOfBirth;
const shouldShowResultInDogYears = true;  
if (shouldShowResultInDogYears){
    console.log(`Your dog will be 70 dog years old in 2027`)
} else {
    console.log(`Your dog will be ${dogYear} human years old in 2027`)
}
//Housey pricey (A house price estimator)
const peterVolumeInMeters = 8 + 10 + 10;
const peterGardenSizeInM2 = 100;
const peterhousePrice =  peterVolumeInMeters * 2.5 * 1000 + peterGardenSizeInM2 * 300;
console.log(`Peter house Price is ${peterhousePrice}`)

const juliaVolumeInMeters = 5 + 11 + 8;
const juliaGardenSizeInM2 = 70;
const juliahousePrice =  juliaVolumeInMeters * 2.5 * 1000 + juliaGardenSizeInM2 * 300;
console.log(`Julia house Price is ${juliahousePrice}`)



