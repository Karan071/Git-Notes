//Hands on practice on reduce higher order  functions
let studentData = ["John Doe", "Some School", 6, 7, 8, 7, 9, 9,-1, "Some School"];
console.log(studentData);
//from this student Data arr : we need to 
//separate out numbers from student arr
let numbers = studentData.reduce((newArr,curr) => {
    if(typeof curr === 'number')newArr.push(curr);
    return newArr;
},[]);

console.log(numbers);

//Example 2
//Concatinate all of the strings inside transcript to a single string
//Desired Result : Hello there how is it going?
let transcript = ['hello', 'there,', 'how', 'is', 'it', 'going?'];
const output = transcript.reduce((acc,curr) => {
    acc= acc + " " + curr;
    return acc;
},[]);
console.log(output);

//Example 3
// given with object 
//goal : to get the average price of the real estate . // 36000
let realEstate = [
    {
        id: '3c5f4c26-f048-11e9-81b4-2a2ae2dbcce4',
        name: 'Vancouver Luxury Apartments',
        price: 450000
    },
    {
        id: '3c5f4e9c-f048-11e9-81b4-2a2ae2dbcce4',
        name: 'Calgary Housing',
        price: 330000
    },
    {
        id: '3c5f52d4-f048-11e9-81b4-2a2ae2dbcce4',
        name: 'AGM Apartments',
        price: 300000
    }
];
const realEstateAveragePrice = realEstate.reduce((acc,curr) => {
    acc += curr.price;
    return acc;
},0);
console.log(realEstateAveragePrice/realEstate.length);

//map fun//////
const input1 = [1,2,3,4,5]
// result [1,4,9,16,25]
const squr = input1.map((x) => {
    return Math.pow(x,2);
})
console.log(squr);
// ex 2 : //////////
// 42;
const input2 = [1, -4, 12, 0, -3, 29, -150];
//desired output : 
const sum = input2.filter((x) => x > 0).reduce((acc,curr) => {
    acc += curr;
    return acc;
});
console.log(sum);
////////////////////////
//desired output :  { mean: 38.5, median: 39 }
//For calculation mean
const inputMean = [12, 46, 32, 64];
const mean = inputMean.reduce((acc,curr) => acc + curr, 0) / inputMean.length;
console.log(mean);

///////////////////////////
const inputString = "George Raymond Richard Martin";
//desired output = GRRM
const shortCut = inputString.split(" ").map((x) => x[0]).join('');
console.log(shortCut);

////////////
// Find the difference in age between the oldest and youngest family members, and return their respective ages and the age difference.
//desired output = [13, 67, 54];
const famList = [
    {
      name: "John",
      age: 13,
    },
    {
      name: "Mark",
      age: 56,
    },
    {
      name: "Rachel",
      age: 45,
    },
    {
      name: "Nate",
      age: 67,
    },
    {
      name: "Jennifer",
      age: 65,
    },
  ];
function findAgeDifference(famList){
    const ages = famList.map((person) => person.age);
    const minAge = Math.min(...ages);
    const maxAge = Math.max(...ages);
    const ageDiff = maxAge - minAge;
    return [minAge,maxAge,ageDiff];
}
console.log(findAgeDifference(famList));

/*Numeronyms
Devs like to abbreviate everything: k8s means Kubernetes, a11y means accessibility, l10n means localization. You get the Dev numeronyms by taking the first and the last letter and counting the number of letters in between. Words that have less than 4 letters aren't abbreviated, because that would just be odd. The input is a sentence, and you should abbreviate every word that is 4 letters long or longer. There won't be any punctuation in the sentence. g2d l2k e6e*/
//desired output : E3y d7r
const numeronymsInput = "Every developer likes to mix kubernetes and javascript";

const numeronyms = (word) => word[0] + (word.length - 2) + word[word.length-1]; // Karan - 5 // K(5-2)n = K3n
const resultNumeronyms = numeronymsInput.split(" ").map((word) => {
    if(word.length >= 4){
        return numeronyms(word);
    }
    return word;
}).join(" ");

console.log(resultNumeronyms);
