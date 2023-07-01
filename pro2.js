const taskContainer = document.getElementsByClassName("task__container");
const globalstore = [];
console.log(taskContainer);
const saveChanges = () => {
  const taskData = {
    id:`${Date.now()}`,
    imageurl: document.getElementById("imageURL").value,
    tasktitle: document.getElementById("taskTitle").value,
    tasktype: document.getElementById("taskType").value,
    taskdescription: document.getElementById("taskDescription").value
  };

  console.log(taskData);

 const newCard = `
<div class="col-sm-12 col-md-6 col-lg-6" id=${taskData.id}>
  <div class="card">
<div class="card-header d-flex justify-content-end gap-2">
<button type="button" class="btn btn-outline-success"><i class="fa-solid fa-pencil"></i></button>
<button type="button" class="btn btn-outline-danger"><i class="fa-solid fa-trash-can"></i></button>
</div>
<div class="card-body">
<img src=${taskData.imageurl} class="card-img-top" alt="...">
<h5 class="card-title mt-2 fw-bold text-primary">${taskData.tasktitle}</h5>
<p class="card-text">${taskData.taskdescription}</p>
<a href="#" class="btn btn-primary">${taskData.tasktype}</a>
</div>
</div>
</div>
`;

taskContainer . insertAdjacentHTML('beforeend', newCard);

globalstore.push(taskData);
localstorage.setItem("tasky",globalstore);

};
