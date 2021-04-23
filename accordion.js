// accordion opening/closing animation
var accordionBtn = document.getElementsByClassName('accordion');
var accordionPanel = document.getElementsByClassName('accord_panel');
var accordionHeader = document.getElementsByClassName('accord_panel_header');
var themeChangeBtn = document.getElementsByClassName('next_theme');
var allCheckboxes = document.querySelectorAll("input[type=checkbox][class=accordionInput]");

// Variable for "Valmis!" button element id
var ValmisID = document.getElementById("doneButton");

// gathers first currently active accordion details
// for nextTheme function
var activeAccordion = document.getElementsByClassName("active");
var openedPanel = document.getElementsByClassName("accord_show");
var activeHeader = document.getElementsByClassName("accord_panel_header_active");
var activeThemeBtn = document.getElementsByClassName("themeBtnActive");



for (var i = 0; i < accordionBtn.length; i++) {
  // class toggler function on accordion button click
  accordionBtn[i].onclick = function () {
    var setClasses = !this.classList.contains('active');
    setClass(accordionBtn, 'active', 'remove');
    setClass(accordionPanel, 'accord_show', 'remove');
    setClass(accordionHeader, 'accord_panel_header_active', 'remove');
    setClass(themeChangeBtn, 'themeBtnActive', 'remove');

    var findDivThemeBtn = this.nextElementSibling.children[4];

    if (setClasses) {
      this.classList.toggle("active");
      this.nextElementSibling.classList.toggle("accord_show");
      this.children[0].classList.toggle("accord_panel_header_active");

      if (!!findDivThemeBtn) {
        findDivThemeBtn.children[0].classList.toggle("themeBtnActive");

      } else {
        console.log("There is no next accordion to give theme change button active class");

      }





    }

  }

}

// template for class toggling
function setClass(els, className, fnName) {
  for (var i = 0; i < els.length; i++) {
    els[i].classList[fnName](className);
  }
}




// Variables are declared at the top
// declared function for the theme change buttons
function nextTheme() {
  // gets next elements before the 3 special classes are removed with nextElementSibling
  var nextAccordion = activeAccordion[0].nextElementSibling.nextElementSibling;
  var nextPanel = openedPanel[0].nextElementSibling.nextElementSibling;
  var nextHeader = activeAccordion[0].nextElementSibling.nextElementSibling.children[0];

  // adds 3 actives to the next ones
  nextPanel.classList.add("accord_show");
  nextHeader.classList.add("accord_panel_header_active");
  nextAccordion.classList.add("active");

  // removes the first found active class and since now there are 2, it removes the 3 classes from the first to close it, because only 1 accordion should be open at a time
  activeAccordion[0].classList.remove("active");
  openedPanel[0].classList.remove("accord_show");
  activeHeader[0].classList.remove("accord_panel_header_active");



  if (typeof activeThemeBtn[0] !== "undefined") {
    activeThemeBtn[0].classList.remove("themeBtnActive");

  } else {
    console.log("There is no next theme button");

  }

}

// Next theme button. Closest the current one and opens the next one
// variable for classes declared on line 5
for (var i = 0; i < themeChangeBtn.length; i++) {
  themeChangeBtn[i].onclick = function () { nextTheme() };
}




var activeCheckboxArray = [];
var checkedBoxesArray = [];


  allCheckboxes.forEach(function (checkbox) {
  checkbox.addEventListener('change', function () {

    var currentlyAvailableCheckboxes = openedPanel[0].querySelectorAll("input[type=checkbox][class=accordionInput]");



    // loop to get clicked checkbox index (i) information
    for (var i = 0; i < currentlyAvailableCheckboxes.length; i++) {

      var checkedBoxesArray =
        Array.from(currentlyAvailableCheckboxes) // Convert checkboxes to an array to use filter and map.
          .filter(i => i.checked) // Use Array.filter to remove unchecked checkboxes.
          .map(i => i.value); // Use Array.map to extract only the checkbox values from the array of objects.

    }
    console.log(checkedBoxesArray);
    // (for developement) console.log(checkedBoxesArray.length);
    var selectCurrentSpan = activeAccordion[0].children[1].children[0];

    if (checkedBoxesArray.length === 0) {
      selectCurrentSpan.innerHTML = 0;

    }
    // When counter is equal to 3, set the counter to 3 / 3 and disable unchecked checkboxes
    else if (checkedBoxesArray.length === 3) {
      selectCurrentSpan.innerHTML = 3;

      for (var i = 0; i < currentlyAvailableCheckboxes.length; i++) {

        // disables unchecked checkboxes when array has length of 3 (3 checkboxes are checked)
        if (currentlyAvailableCheckboxes[i].checked == false) {
          currentlyAvailableCheckboxes[i].disabled = true;
          currentlyAvailableCheckboxes[i].parentElement.style.backgroundColor = "#ccc";

        }

      }

    }
    // If it is less than 3, increment it by 1 whenever a checkbox gets checked. Also remove disabled from disabled checkboxes
    else if (checkedBoxesArray.length < 3) {

      for (var i = 0; i < currentlyAvailableCheckboxes.length; i++) {
        if (currentlyAvailableCheckboxes[i].disabled == true) {
          currentlyAvailableCheckboxes[i].disabled = false;
          currentlyAvailableCheckboxes[i].parentElement.style.backgroundColor = "";

        }

      }
      selectCurrentSpan.innerHTML = checkedBoxesArray.length;

    }


    for (var i = 0; i < accordionBtn.length; i++) {
      var accordBtnSpan = accordionBtn[i].children[1].children[0];

      if (accordBtnSpan.innerHTML > 0 && activeCheckboxArray.length < 5) {
          activeCheckboxArray.push(accordionBtn[i]);

      } else if (accordBtnSpan.innerHTML == 0) {
        // array gets reset when atleast 1 span is 0, resulting in the array.length not being 5  
        activeCheckboxArray = [];
        ValmisID.disabled = true;
        ValmisID.classList.remove("doneBtnReady");
          
      } else if (activeCheckboxArray.length == 5) {
        ValmisID.disabled = false;
        ValmisID.classList.add("doneBtnReady");

      }
      console.log(activeCheckboxArray)
    }

      /*
      for (var i = 0; i < accordionBtn.length; i++) {
        var accordBtnSpan = accordionBtn[i].children[1].children[0];
  
        if (accordBtnSpan.innerHTML > 0) {
          ValmisID.disabled = false;
          ValmisID.classList.add("doneBtnReady");
  
        } else if (accordBtnSpan.innerHTML == 0) {
  
          ValmisID.disabled = true;
          ValmisID.classList.remove("doneBtnReady");
        }
      }
        */

      // (for developement) console.log("Accordion #" + i + " span = " + accordBtnSpan.innerHTML)

    

  })

})
















// refresh function
function refreshPage() {
  location.href = 'index.html';
}

// Valmis! button on click refreshes the page
ValmisID.onclick = refreshPage;





// Whenver a checkbox is checked, it will gain background coloring
// checkbox background color variables
var gatherInputs = document.getElementsByClassName("accordionInput");

// checkbox background color function
function isChecked() {
  if (this.checked === true) {
    this.parentElement.style.backgroundColor = "#fff8cd";

  } else {
    this.parentElement.style.backgroundColor = "";

  }
}

// checkbox background color event listener
for (var i = 0; i < gatherInputs.length; i++) {
  gatherInputs[i].addEventListener("change", isChecked);

}



// scrolls to accordion on red anchor text click
document.getElementById("goto_accord_anchor").onclick = scrollToAccord;
function scrollToAccord() {
  var scrollDestination = document.getElementById("accord_title");
  scrollDestination.scrollIntoView({ behavior: "smooth", block: "start" });

}

// get the modal
var modal = document.getElementById("policyModal");
// get the anchor text that opens the modal
var openModal = document.getElementById("policyOpen");
// get the <span> element that closes the modal
var modalSpan = document.getElementsByClassName("closeModal")[0];
// modal closing function
function closeModal() {
  modal.style.display = "none";

};

// when the user clicks on the anchor text, open the modal
openModal.onclick = function () {
  modal.style.display = "block";

}

// when the user clicks on <span> (x), close the modal
modalSpan.onclick = closeModal;

// when the user clicks ESC on their keyboard, close the modal
window.addEventListener('keydown', function (event) {
  if (event.key === 'Escape') {
    closeModal();

  }

});

// when the user clicks anywhere outside of the modal, close it (also added ESC key)
window.onclick = function (event) {
  if (event.target == modal) {
    closeModal();

  }

}