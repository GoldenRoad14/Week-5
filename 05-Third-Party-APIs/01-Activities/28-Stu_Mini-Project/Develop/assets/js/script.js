// save reference to important DOM elements
var timeDisplayEl = $('#time-display');
var projectDisplayEl = $('#project-display');
var projectFormEl = $('#project-form');
var projectNameInputEl = $('#project-name-input');
var projectTypeInputEl = $('#project-type-input');
var projectDateInputEl = $('#project-date-input');

// handle displaying the time
function displayTime() {

}

// Reads projects from local storage and returns array of project objects.
// Returns an empty array ([]) if there aren't any projects.
function readProjectsFromStorage() {
  var projects;
}

// Takes an array of projects and saves them in localStorage.
function saveProjectsToStorage(projects) {
 
}

// Gets project data from local storage and displays it
function printProjectData() {
  // clear current projects on the page
 

  // get projects from localStorage
  
  // loop through each project and create a row


    // get date/time for start of today
    
    // Create row and columns for project
    var rowEl; 
    var nameEL; 
    var typeEl;
    var dateEl;

    // Save the index of the project as a data-* attribute on the button. This
    // will be used when removing the project from the array.
  

    // add class to row by comparing project date to today's date
   

    // append elements to DOM to display them
    
  
}

// Removes a project from local storage and prints the project data
function handleDeleteProject() {
  
  // remove project from the array
  

  // print projects

}

// Adds a project to local storage and prints the project data
function handleProjectFormSubmit(event) {
  event.preventDefault();

  // read user input from the form
  var projectName;
  var projectType; // don't need to trim select input
  var projectDate; // yyyy-mm-dd format

  var newProject = {
    name: '', //VARIABLE NAME HERE
    type: '',//VARIABLE NAME HERE
    date: '',//VARIABLE NAME HERE
  };

  // add project to local storage


  // print project data


  // clear the form inputs
  projectNameInputEl.val('');
  projectTypeInputEl.val('');
  projectDateInputEl.val('');
}

projectFormEl.on('submit', handleProjectFormSubmit);

// Use jQuery event delegation to listen for clicks on dynamically added delete
// buttons.
projectDisplayEl.on('click', '.btn-delete-project', handleDeleteProject);

displayTime();
setInterval(displayTime, 1000);

printProjectData();
