const taskContainer = document.querySelector(".task__container");
const globalStore = [];
console.log(taskContainer);
const generateNewCard = (taskData) =>
  `
  <div class="col-sm-12 col-lg-4 col-md-6" id="${taskData.id}">
    <div class="card">
 <div class="card-header d-flex justify-content-end gap-2">
 <button type="button" class="btn btn-outline-success"><i class="fa-solid fa-pencil"></i></button>
 <button type="button" class="btn btn-outline-danger"><i class="fa-solid fa-trash-can"></i></button>
 </div>
 <div class="card-body">
  <img src=${taskData.imageUrl} class="card-img-top" alt="photo">
  <h5 class="card-title d-flex justify-content-start mt-2">${taskData.taskTitle}</h5>
  <p class="card-text d-flex justify-content-start">${taskData.description}</p>
  <a href="#" class="btn btn-outline-primary ">${taskData.taskType}</a>
  <hr>
  <button type="button" class="btn btn-outline-light">open task</button>
 </div>
 </div>
 </div>
  `
;
//four steps for storing the data
const loadInitialCardData = () => {
  //localstorage to get tasky card data
  const getCardData = localStorage.getItem("tasky");
  //convert to normal object
  const {cards} = JSON.parse(getCardData);
  //loop over those array to task object to create html card ,inject it to dom
  cards.map((cardObject) => {
    taskContainer.insertAdjacentHTML("beforeend",generateNewCard(cardObject));
  //update our globalstore
    globalStore.push(cardObject);});

};

const saveChanges = () => {
  const taskData = {
    id:`${Date.now()}`,
    imageUrl: document.getElementById("imageurl").value,
    taskTitle: document.getElementById("tasktitle").value,
    taskType: document.getElementById("tasktype").value,
    description: document.getElementById("taskDescription").value,
  };

  console.log(taskData);

 taskContainer.insertAdjacentHTML("beforeend", generateNewCard(taskData));

 globalStore.push(taskData);
 localStorage.setItem("tasky",JSON.stringify({cards:globalStore}));

};
