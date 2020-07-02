
const url_base = 'https://api.tretton37.com/ninjas';

function getData() {
  fetch(url_base) 
  .then(response => response.json())
  .then(data => {
    useData(data);
  })
}
getData()

function useData(data) {
  const staffNames = data.map(x => x.name);
  const staffInLund = data.filter(x => x.office == "Lund");
  // const staffSameName = data.new Set()
  
  console.log(staffNames);
  console.log(staffInLund);
}



// const people = [
//   {name: "Nicole",
//    age: 5,
//    interest: [
//      "swim",
//      "sing"
//    ],
//    rightHanded: true
//   },

//   {name: "Nora",
//    age: 15,
//    interest: [
//      "dance",
//      "sing"
//    ],
//    rightHanded: true
//   },

//   {name: "Sandra",
//    age: 55,
//    interest: [
//      "coding",
//      "eating"
//    ],
//    rightHanded: false
//   },

//   {name: "Nic",
//    age: 21,
//    interest: [
//      "soccer",
//      "study"
//    ],
//    rightHanded: false
//   },

//   {name: "Alex",
//    age: 43,
//    interest: [
//      "tennis",
//      "dance"
//    ],
//    rightHanded: true
//   },

//   {name: "Anna",
//    age: 1,
//    interest: [
//      "eating",
//      "sleeping"
//    ],
//    rightHanded: true
//   },

//   {name: "Eva",
//    age: 70,
//    interest: [
//      "reading",
//      "cooking"
//    ],
//    rightHanded: true
//   },

//   {name: "Gunnar",
//    age: 72,
//    interest: [
//      "reading",
//      "cooking"
//    ],
//    rightHanded: true
//   },
// ]

// console.log(people.map(x => x.name));


// const adults = people.filter(x => x.age > 18 && x.age < 65)
// console.log(adults);

// const reducer = (accumulator, currentValue) => accumulator + currentValue;

// const ages = people.map(x => x.age);
// console.log(ages.reduce(reducer));

// function isEven() {
//   if (ages.reduce(reducer) % 2 == 0) {
//     alert('It is even.')
//   }else{
//   console.log("That's odd group");
//   }
// }
// isEven();

// const interests = people.map(x => x.interest);
// const interestsArray = interests.flat();
// const uniqueInterestsArray = [...new Set(interestsArray)];
// console.log(uniqueInterestsArray);