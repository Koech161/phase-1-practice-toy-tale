let addToy = false;

document.addEventListener("DOMContentLoaded", () => {
  const addBtn = document.querySelector("#new-toy-btn");
  const toyFormContainer = document.querySelector(".container");
//const toyUrl=('http://localhost:3000/toys')
  fetch('http://localhost:3000/toys')
  .then(res=>res.json())
  .then((completedata))
  .catch(error=>console(error))
  let data1=''
 completedata.map((values)=>{
    data1+=`<div class="card">
      <h2>${values.name}</h2>
  <img src=${values.image} class="toy-avatar" />
  <p>${values.likes}</p>
  <button class="like-btn" id=${values.id}>Like ❤️</button>
    </div>`
      document.getElementById('card').innerHTML=data1
  })
  

  addBtn.addEventListener("click", () => {
    // hide & seek with the form
    addToy = !addToy;
    if (addToy) {
      toyFormContainer.style.display = "block";
    } else {
      toyFormContainer.style.display = "none";
    }
  });
});
