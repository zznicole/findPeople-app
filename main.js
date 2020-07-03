document.addEventListener('DOMContentLoaded', ()=>{
  const url_base = 'https://api.tretton37.com/ninjas';

  function getData() {
    fetch(url_base) 
    .then(response => response.json())
    .then(data => {
      useData(data);
    })
  }
  getData()

  // function printData(staffNames, querySelector) {

  // }

  function useData(data) {
    const staffData = data;
    const staffNames = data.map(x => x.name);
    const staffInLund = data.filter(x => x.office === "Lund");
    // const staffSameName = data.filter(x => x.name == 15);

    console.log(staffData);
    console.log(staffNames);
    console.log(staffInLund);
    // console.log(staffSameName);

    const names = document.querySelector('.names');
    const lundStaff = document.querySelector('.lundStaff');
    const sameName = document.querySelector('.sameName');

    const namesList = document.createElement('li');
    
    namesList.append(staffNames);

  }
})




