// accordion opening/closing animation
var accordionBtn = document.getElementsByClassName('accordion');
var accordionPanel = document.getElementsByClassName('accord_panel');
var accordionHeader = document.getElementsByClassName('accord_panel_header');
var themeChangeBtn = document.getElementsByClassName('next_theme');
var allCheckboxes = document.querySelectorAll("input[type=checkbox][class=accordionInput]");

// gathers first currently active accordion details
// for nextTheme function
var activeAccordion = document.getElementsByClassName("active");
var openedPanel = document.getElementsByClassName("accord_show");
var activeHeader = document.getElementsByClassName("accord_panel_header_active");
var activeThemeBtn = document.getElementsByClassName("themeBtnActive");



// Variable for "Valmis!" button element id
var doneBtn = document.getElementById("doneButton");
// checkbox background color variables
var gatherInputs = document.getElementsByClassName("accordionInput");

// arrays for checking the current accordion checked checkbox lengths
var activeCheckboxArray = [];
var checkedBoxesArray = [];




for (var i = 0; i < accordionBtn.length; i++) {
  // class toggler function on accordion button click
  accordionBtn[i].onclick = function () {
    var toggleActiveClass = !this.classList.contains('active');
    classToggler(accordionBtn, 'active', 'remove');
    classToggler(accordionPanel, 'accord_show', 'remove');
    classToggler(accordionHeader, 'accord_panel_header_active', 'remove');
    classToggler(themeChangeBtn, 'themeBtnActive', 'remove');

    var findAccordionLastChild = this.nextElementSibling.childElementCount - 1;
    var findDivThemeBtn = this.nextElementSibling.children[findAccordionLastChild];
    var checkThemeBtnClass = findDivThemeBtn.classList.contains("theme_change");

    if (toggleActiveClass) {
      this.classList.toggle("active");
      this.nextElementSibling.classList.toggle("accord_show");
      this.children[0].classList.toggle("accord_panel_header_active");

      if (checkThemeBtnClass) {
        findDivThemeBtn.children[0].classList.toggle("themeBtnActive");
        // (for developement) console.log('theme btn found')

      } else {
        // (for developement) console.log("There is no next accordion to give theme change button active class");
      }

    }

  }

}

// template for class toggling
function classToggler(els, className, fnName) {
  for (var i = 0; i < els.length; i++) {
    els[i].classList[fnName](className);
  }
}


// checkbox background color event listener
for (var i = 0; i < gatherInputs.length; i++) {
  gatherInputs[i].addEventListener("change", isChecked);

}

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

  var findAccordionLastChild = nextAccordion.nextElementSibling.childElementCount - 1;
  var findDivThemeBtn = nextAccordion.nextElementSibling.children[findAccordionLastChild];
  var checkThemeBtnClass = findDivThemeBtn.classList.contains("theme_change");


  if (typeof activeThemeBtn[0] !== "undefined" && checkThemeBtnClass) {
    findDivThemeBtn.children[0].classList.add("themeBtnActive");
    activeThemeBtn[0].classList.remove("themeBtnActive");

  } /* else {
    (for developement) console.log("There is no next theme button");

  } */

}
// Next theme button. Closest the current one and opens the next one
for (var i = 0; i < themeChangeBtn.length; i++) {
  themeChangeBtn[i].onclick = nextTheme;
}


allCheckboxes.forEach(function (checkbox) {
  checkbox.addEventListener('change', function () {
    var currentlyAvailableCheckboxes = openedPanel[0].querySelectorAll("input[type=checkbox][class=accordionInput]");

    var checkedBoxesArray =
      Array.from(currentlyAvailableCheckboxes) // Convert checkboxes to an array to use filter and map.
        .filter(i => i.checked) // Use Array.filter to remove unchecked checkboxes.
        .map(i => i.value); // Use Array.map to extract only the checkbox values from the array of objects.


    // (for developement) console.log(checkedBoxesArray);
    var selectCurrentSpan = activeAccordion[0].children[1].children[0];

    if (checkedBoxesArray.length == 0) {
      selectCurrentSpan.innerHTML = 0;

    }
    // When counter is equal to 3, set the counter to 3 / 3 and disable unchecked checkboxes
    else if (checkedBoxesArray.length == 3) {
      selectCurrentSpan.innerHTML = 3;

      for (var i = 0; i < currentlyAvailableCheckboxes.length; i++) {

        // disables unchecked checkboxes when array has length of 3 (3 checkboxes are checked)
        if (!currentlyAvailableCheckboxes[i].checked) {
          currentlyAvailableCheckboxes[i].disabled = true;
          currentlyAvailableCheckboxes[i].parentElement.classList.add("disabledCheckbox");

        }

      }

    }
    // If it is less than 3, increment it by 1 whenever a checkbox gets checked. Also remove disabled from disabled checkboxes
    else if (checkedBoxesArray.length < 3) {

      for (var i = 0; i < currentlyAvailableCheckboxes.length; i++) {
        if (currentlyAvailableCheckboxes[i].disabled) {
          currentlyAvailableCheckboxes[i].disabled = false;
          currentlyAvailableCheckboxes[i].parentElement.classList.remove("disabledCheckbox");

        }

      }
      selectCurrentSpan.innerHTML = checkedBoxesArray.length;

    }
    for (var i = 0; i < accordionBtn.length; i++) {
      var accordBtnSpan = accordionBtn[i].children[1].children[0];

      if (accordBtnSpan.innerHTML > 0 && activeCheckboxArray.length < accordionBtn.length && activeCheckboxArray.includes(accordionBtn[i]) == false) {
        activeCheckboxArray.push(accordionBtn[i]);

      } else if (accordBtnSpan.innerHTML == 0) {
        // array gets reset when atleast 1 span is 0, resulting in the array.length not being equal to the amount of accordion blocks
        activeCheckboxArray = [];
        doneBtn.disabled = true;
        doneBtn.classList.remove("doneBtnReady");
      }

      if (activeCheckboxArray.length == accordionBtn.length) {
        doneBtn.disabled = false;
        doneBtn.classList.add("doneBtnReady");

      }
      // (for developement) console.log(activeCheckboxArray.length)
    }

  })

})

// Whenver a checkbox is checked, it will gain background coloring
function isChecked() {
  if (this.checked) {
    this.parentElement.style.backgroundColor = "#fff8cd";

  } else {
    this.parentElement.style.backgroundColor = "";

  }
}

// refresh function
function refreshPage() {
  location.href = 'index.html';

}
// Valmis! button on click refreshes the page
doneBtn.onclick = refreshPage;