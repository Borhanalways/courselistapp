const studentName = document.getElementById("name");
const courseName = document.getElementById("course");
const coursePrice = document.getElementById("price");
const addStudent = document.getElementById("add-student");
const studentList = document.getElementById("student-list");

addStudent.addEventListener("click", (e) => {
  e.preventDefault();

  if (
    studentName.value == "" ||
    courseName.value == "" ||
    coursePrice.value == ""
  ) {
    alert("Fill all the fields");
  } else {
   
    let html = `
    <tr>
        <td>${studentName.value}</td>
        <td>${courseName.value}</td>
        <td>${coursePrice.value}</td>
        <td><button class="btn btn-success payment">Payment done</button></td>
        <td><button class="btn btn-danger delete">Delete Item</button></td>
    </tr>
    `;

    studentList.innerHTML += html;

    studentName.value = "";
    courseName.value = "";
    coursePrice.value = "";

    let deleteItems = document.querySelectorAll(".delete");
    console.log(deleteItems);

  
    for (const btn of deleteItems) {
      btn.addEventListener("click", (e) => {
        e.target.parentElement.parentElement.remove();
      });
    }
    let paymentitems = document.querySelectorAll(".payment");
    console.log(paymentitems);

    for (const btn of paymentitems) {
      btn.addEventListener("click", (e) => {
        e.target.parentElement.parentElement.classList.add("content");
      });
    }

  }
});


