// Initial List of students
let initStudents = [
  {studentID: "St0001", firstName: "Tony", lastName: "Stark", qualification: "Iron Man"},
  {studentID: "St0002", firstName: "Bruce", lastName: "Banner", qualification: "Hulk"},
  {studentID: "St0003", firstName: "Steve", lastName: "Rogers", qualification: "Captain America"},
  {studentID: "St0008", firstName: "Thor", lastName: "Odinson", qualification: "Norse God"},
  {studentID: "St0005", firstName: "Clint", lastName: "Barton", qualification: "Hawkeye"}
];
var studentList = new StudentList("list", initStudents);
// Execute Search Function
function searchClick(){
  // Grab data from search form
  let formElements = document.getElementById("form-list-control").elements;
  // grab values from search form
  let text = formElements["search-string"].value;
  // input values of search from into search function
  studentList.search(text);
}
// execute sort function
function sortClick(){
  studentList.sortID();
}
// execute refresh function
function refreshClick()
{
  studentList.refresh();
}

// execute Add function
function addClick(){
  // grab data from add form
  let formElements = document.getElementById("form-add").elements;
  // grab id from form
  let studentID = formElements["studentID"].value;
  // grab first name from form
  let firstName = formElements["fname"].value;
  // grab last name from form
  let lastName = formElements["lname"].value;
  //grab qualification from form
  let qualification = formElements["qualification"].value;
  // run add function
  studentList.add(studentID, firstName, lastName, qualification);
}

