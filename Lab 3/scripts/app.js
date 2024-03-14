// Made by Conner Cullity (100760244) and Aiden Skinner (100881254)
// Date Completed: 2024-02-05

/**
 * Class for User Object
 */
class User {
    /**
     * 
     * @param {String} fName First Name
     * @param {String} lName Last Name
     * @param {String} email Email
     * @param {String} password Password
     */
    constructor(fName, lName, email, password) {
        this.fName = fName;
        this.lName = lName;
        this.email = email;
        this.password = password;
    }
    /**
     * 
     * @returns {String} User representes as a String
     */
    toString() {
        return ("Name: " + this.fName + " " + this.lName + "\nEmail: " + this.email+ "\nPassword: " + this.password);
    }

    /**
     * Prints contents of toString() to console
     */
    print() {
        console.log(this.toString());
    }

    /**
     * 
     * @returns {String[]} User represented as serialized array [1: First Name, 2: Last Name, 3: Email, 4: Password]
     */
    toArray() {
        return [this.fName, this.lName, this.email, this.password];
    }

    /**
     * 
     * @returns {String[]} User represented as Acssociated array [fName, lName, email, password]
     */
    toAssocArray() {
        return {'fName': this.fName, 'lName': this.lName, 'email': this.email, 'password': this.password};
    }

    /**
     * 
     * @returns {String} First Name
     */
    getFirstName() {
        return this.fName;
    }

    /**
     * Sets First Name
     * @param {String} fName 
     */
    setFirstName(fName) {
        this.fName = fName;
    }

    /**
     * 
     * @returns {String} Last Name
     */
    getLastName() {
        return this.lName;
    }

    /**
     * Sets Last Name
     * @param {String} lName 
     */
    setLastName(lName) {
        this.lName = lName;
    }

    /**
     * 
     * @returns {String} Email
     */
    getEmail() {
        return this.email;
    }

    /**
     * Sets Email
     * @param {String} email 
     */
    setEmail(email) {
        this.email = email;
    }

    /**
     * 
     * @returns {String} Password (Should be hash in future)
     */
    getPassword() {
        return this.password;
    }

    /**
     * Sets Password (Should be hash in future)
     * @param {String} password 
     */
    setPassword(password) {
        this.password = password;
    }
}
// export User class to be imported into register.js
export default User;



// Get the NavBar
const navItems = document.getElementById("navItems");

// Change Products to Projects
const productButton = document.getElementById("products");
productButton.innerHTML = "Projects";

// Add Human Resources to NavBar
// create new list item
const newNavItem = document.createElement("li");
newNavItem.className = "nav-item";
// create new nav-link
const navLink = document.createElement("a");
navLink.className = "nav-link";
navLink.innerHTML = "Human Resources";
navLink.id = "hrLink";
// add new item to navbar
newNavItem.appendChild(navLink);
//navItems.appendChild(newNavItem);
navItems.insertBefore(newNavItem, navItems.children[4]);

// Create Bottom NavBar
const navBottom = document.createElement("nav");
navBottom.className = "navbar fixed-bottom navbar-light bg-light";
// create nav container and append to navBottom
const navDiv = document.createElement("div");
navDiv.className = "container-fluid";
navBottom.appendChild(navDiv);
// create navbar brand and append to navDiv
const navBrand = document.createElement("a");
navBrand.className = "navbar-brand";
navBrand.innerHTML = "&copy Copyright 2024";
navDiv.appendChild(navBrand);
// Add bottom bar to body
document.body.appendChild(navBottom);

    /**
     * This function adds a new Task to the TaskList
     */
    function AddNewTask() 
    {
      let messageArea = $("#messageArea");
      messageArea.hide();
      let taskInput = $("#taskTextInput");

      if (taskInput.val() != "" && taskInput.val().charAt(0) != " ") 
      {
        let newElement = `
              <li class="list-group-item" id="task">
              <span id="taskText">${taskInput.val()}</span>
              <span class="float-end">
                  <button class="btn btn-outline-primary btn-sm editButton"><i class="fas fa-edit"></i>
                  <button class="btn btn-outline-danger btn-sm deleteButton"><i class="fas fa-trash-alt"></i></button>
              </span>
              <input type="text" class="form-control edit-task editTextInput">
              </li>
              `;
        $("#taskList").append(newElement);
        messageArea.removeAttr("class").hide();
        taskInput.val("");
      } 
      else 
      {
        taskInput.trigger("focus").trigger("select");
        messageArea.show().addClass("alert alert-danger").text("Please enter a valid Task.");
      }
    }

    /**
     * This function is the Callback function for the TaskList
     *
     */
    function DisplayTaskList()
    {
        let messageArea = $("#messageArea");
        messageArea.hide();
        let taskInput = $("#taskTextInput");

        // add a new Task to the Task List
        $("#newTaskButton").on("click", function()
        {         
            AddNewTask();
        });

        taskInput.on("keypress", function(event)
        {
          if(event.key == "Enter")
          {
            AddNewTask();
          }
         });

        // Edit an Item in the Task List
        $("ul").on("click", ".editButton", function(){
           let editText = $(this).parent().parent().children(".editTextInput");
           let text = $(this).parent().parent().text();
           editText.val(text).show().trigger("select");
           editText.on("keypress", function(event)
           {
            if(event.key == "Enter")
            {
              if(editText.val() != "" && editText.val().charAt(0) != " ")
              {
                editText.hide();
                $(this).parent().children("#taskText").text(editText.val());
                messageArea.removeAttr("class").hide();
              }
              else
              {
                editText.trigger("focus").trigger("select");
                messageArea.show().addClass("alert alert-danger").text("Please enter a valid Task.");
              }
            }
           });
        });

        // Delete a Task from the Task List
        $("ul").on("click", ".deleteButton", function(){
            if(confirm("Are you sure?"))
            {
                $(this).closest("li").remove();
            }    
        });
    }