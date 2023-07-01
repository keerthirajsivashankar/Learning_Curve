const taskContainer = document.querySelector(".task__container");

console.log(taskContainer);
const saveChanges = () => {
  const taskData = {
    id:`${Date.now()}`,
    imageUrl: document.getElementById("imageurl").value,
    taskTitle: document.getElementById("tasktitle").value,
    taskType: document.getElementById("tasktype").value,
    description: document.getElementById("taskDescription").value,
  };
  console.log(taskData);
 const newCard = `
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
 `;

 taskContainer.insertAdjacentHTML("beforeend", newCard);

};
