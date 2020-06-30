const url_base = 'https://api.tretton37.com/ninjas';
let namesArray = [ ];
function getData() {
  fetch(url_base) 
  .then(response => response.json())
  .then(data => console.log(data));
  console.log(data);
}
getData();


// for (let i = 0; i < dataArray.length; i++) {
//   console.log(dataArray);
// }
// 

// const info = document.createElement('p');
//    info.innerText = getData()
// info.style.fontColor = 'red'
// info.style.fontSize = "18px"

