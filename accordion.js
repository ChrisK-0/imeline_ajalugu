// accordion opening/closing animation
var accordionBtn = document.getElementsByClassName('accordion');
var accordionPanel = document.getElementsByClassName('accord_panel');
var accordionHeader = document.getElementsByClassName('accord_panel_header');
var themeChangeBtn = document.getElementsByClassName('next_theme');

for (var i = 0; i < accordionBtn.length; i++) {
  accordionBtn[i].onclick = function () {
    var setClasses = !this.classList.contains('active');
    setClass(accordionBtn, 'active', 'remove');
    setClass(accordionPanel, 'accord_show', 'remove');
    setClass(accordionHeader, 'accord_panel_header_active', 'remove');
    setClass(themeChangeBtn, 'themeBtnActive', 'remove');

    var findThemeBtnDiv = this.nextElementSibling.children[4];

    if (setClasses) {
      this.classList.toggle("active");
      this.nextElementSibling.classList.toggle("accord_show");
      this.children[0].classList.toggle("accord_panel_header_active");
      if (!!findThemeBtnDiv) {
        findThemeBtnDiv.children[0].classList.toggle("themeBtnActive");
      } else {
        console.log("There is no next accordion to give theme change button active class");
      }


    }
  }
}
function setClass(els, className, fnName) {
  for (var i = 0; i < els.length; i++) {
    els[i].classList[fnName](className);
  }
}



// gathers first currently active accordion details
var activeAccordion = document.getElementsByClassName("active");
var openedPanel = document.getElementsByClassName("accord_show");
var activeHeader = document.getElementsByClassName("accord_panel_header_active");
var activeThemeBtn = document.getElementsByClassName("themeBtnActive");

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
themeChangeBtn[0].onclick = function () { nextTheme() };
themeChangeBtn[1].onclick = function () { nextTheme() };
themeChangeBtn[2].onclick = function () { nextTheme() };



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



// Checked accordion checkboxes to be collected
var queryCheckBoxes = document.querySelectorAll("input[type=checkbox][class=accordionInput]");
var classCheckBoxes = document.getElementsByClassName("accordionInput");

var accordionCheckBoxes1 = document.querySelectorAll("input[type=checkbox][name=accord_section1]");
var checkBoxesName1 = document.getElementsByName("accord_section1");

var accordionCheckBoxes2 = document.querySelectorAll("input[type=checkbox][name=accord_section2]");
var checkBoxesName2 = document.getElementsByName("accord_section2");

var accordionCheckBoxes3 = document.querySelectorAll("input[type=checkbox][name=accord_section3]");
var checkBoxesName3 = document.getElementsByName("accord_section3");

var accordionCheckBoxes4 = document.querySelectorAll("input[type=checkbox][name=accord_section4]");
var checkBoxesName4 = document.getElementsByName("accord_section4");


// Each accordion has its own Array, "Valmis!" button becomes available if every accordion array has atleast 1 item in it
var accordionArray1 = [];
var accordionArray2 = [];
var accordionArray3 = [];
var accordionArray4 = [];

// counter inner HTML variables
var counterSpan1 = document.getElementById("accord_span_1"); // .innerHTML;
var counterSpan2 = document.getElementById("accord_span_2");
var counterSpan3 = document.getElementById("accord_span_3");
var counterSpan4 = document.getElementById("accord_span_4");

/*
Here are 4 event listeners. Each accordion has it's own special collector, which adds and removes checkbox values from arrays.
This was made, to make the "Valmis!" button available when every accordion has atleast 1 checkbox checked. It works by checking, that none of 
the accordion arrays are empty, and if they are not empty, the button is clickable. Otherwise the button is disabled.
*/
queryCheckBoxes.forEach(function (checkbox) {
  checkbox.addEventListener('change', function () {

    // Accordion #1 -----------------------------------------------
    accordionArray1 =
      Array.from(accordionCheckBoxes1) // Convert checkboxes to an array to use filter and map.
        .filter(i => i.checked) // Use Array.filter to remove unchecked checkboxes.
        .map(i => i.value); // Use Array.map to extract only the checkbox values from the array of objects.

    console.log('\n'+"Array1: " + accordionArray1);

    // Counter for the selected events in each accordion block.
    // If counter is equal to 0, set it to 0 / 3
    if (accordionArray1.length === 0) {
      counterSpan1.innerHTML = "0 / 3";
    }
    // When counter is equal to 3, set the counter to 3 / 3 and disable unchecked checkboxes
    else if (accordionArray1.length === 3) {

      counterSpan1.innerHTML = "3 / 3";

      for (var i = 0; i < checkBoxesName1.length; i++) {

        // disables unchecked checkboxes when array has length of 3 (3 checkboxes are checked)
        if (checkBoxesName1[i].checked == false) {
          checkBoxesName1[i].disabled = true;
        }
      }

    }
    // If it is less than 3, increment it by 1 whenever a checkbox gets checked. Also remove disabled from disabled checkboxes
    else if (accordionArray1.length < 3) {

      for (var i = 0; i < checkBoxesName1.length; i++) {
        if (checkBoxesName1[i].disabled == true) {
          checkBoxesName1[i].disabled = false;
        }
      }

      counterSpan1.innerHTML = accordionArray1.length + " / 3";
    }


    // Accordion #2 -----------------------------------------------
    accordionArray2 =
      Array.from(accordionCheckBoxes2) // Convert checkboxes to an array to use filter and map.
        .filter(i => i.checked) // Use Array.filter to remove unchecked checkboxes.
        .map(i => i.value) // Use Array.map to extract only the checkbox values from the array of objects.

    console.log("Array2: " + accordionArray2)

    // Counter for the selected events in each accordion block.
    // If counter is equal to 0, set it to 0 / 3
    if (accordionArray2.length === 0) {
      counterSpan2.innerHTML = "0 / 3";
    }
    // When counter is equal to 3, set the counter to 3 / 3 and disable unchecked checkboxes
    else if (accordionArray2.length === 3) {

      counterSpan2.innerHTML = "3 / 3";

      for (var i = 0; i < checkBoxesName2.length; i++) {

        // disables unchecked checkboxes when array has length of 3 (3 checkboxes are checked)
        if (checkBoxesName2[i].checked == false) {
          checkBoxesName2[i].disabled = true;
        }
      }

    }
    // If it is less than 3, increment it by 1 whenever a checkbox gets checked. Also remove disabled from disabled checkboxes
    else if (accordionArray2.length < 3) {

      for (var i = 0; i < checkBoxesName2.length; i++) {
        if (checkBoxesName2[i].disabled == true) {
          checkBoxesName2[i].disabled = false;
        }
      }

      counterSpan2.innerHTML = accordionArray2.length + " / 3";
    }

    // Accordion #3 -----------------------------------------------
    accordionArray3 =
      Array.from(accordionCheckBoxes3) // Convert checkboxes to an array to use filter and map.
        .filter(i => i.checked) // Use Array.filter to remove unchecked checkboxes.
        .map(i => i.value) // Use Array.map to extract only the checkbox values from the array of objects.

    console.log("Array3: " + accordionArray3)

    // Counter for the selected events in each accordion block.
    // If counter is equal to 0, set it to 0 / 3
    if (accordionArray3.length === 0) {
      counterSpan3.innerHTML = "0 / 3";
    }
    // When counter is equal to 3, set the counter to 3 / 3 and disable unchecked checkboxes
    else if (accordionArray3.length === 3) {

      counterSpan3.innerHTML = "3 / 3";

      for (var i = 0; i < checkBoxesName3.length; i++) {

        // disables unchecked checkboxes when array has length of 3 (3 checkboxes are checked)
        if (checkBoxesName3[i].checked == false) {
          checkBoxesName3[i].disabled = true;
        }
      }

    }
    // If it is less than 3, increment it by 1 whenever a checkbox gets checked. Also remove disabled from disabled checkboxes
    else if (accordionArray3.length < 3) {

      for (var i = 0; i < checkBoxesName3.length; i++) {
        if (checkBoxesName3[i].disabled == true) {
          checkBoxesName3[i].disabled = false;
        }
      }

      counterSpan3.innerHTML = accordionArray3.length + " / 3";
    }

    // Accordion #4 -----------------------------------------------
    accordionArray4 =
      Array.from(accordionCheckBoxes4) // Convert checkboxes to an array to use filter and map.
        .filter(i => i.checked) // Use Array.filter to remove unchecked checkboxes.
        .map(i => i.value) // Use Array.map to extract only the checkbox values from the array of objects.

    console.log("Array4: " + accordionArray4)

    // Counter for the selected events in each accordion block.
    // If counter is equal to 0, set it to 0 / 3
    if (accordionArray4.length === 0) {
      counterSpan4.innerHTML = "0 / 3";
    }
    // When counter is equal to 3, set the counter to 3 / 3 and disable unchecked checkboxes
    else if (accordionArray4.length === 3) {

      counterSpan4.innerHTML = "3 / 3";

      for (var i = 0; i < checkBoxesName4.length; i++) {

        // disables unchecked checkboxes when array has length of 3 (3 checkboxes are checked)
        if (checkBoxesName4[i].checked == false) {
          checkBoxesName4[i].disabled = true;
        }
      }

    }
    // If it is less than 3, increment it by 1 whenever a checkbox gets checked. Also remove disabled from disabled checkboxes
    else if (accordionArray4.length < 3) {

      for (var i = 0; i < checkBoxesName1.length; i++) {
        if (checkBoxesName4[i].disabled == true) {
          checkBoxesName4[i].disabled = false;
        }
      }

      counterSpan4.innerHTML = accordionArray4.length + " / 3";
    }

  })
});













// Variable for "Valmis!" button element id, for shorter code
var ValmisID = document.getElementById("doneButton");

// Event listener for every checkbox to determine if there is atleast 1 theme checked in every accordion
// Also enable "Valmis!" button if atleast 1 checkbox is checked in every accordion
// accordion checkbox selector variable on line 149
queryCheckBoxes.forEach(function (checkbox) {
  checkbox.addEventListener('change', function () {
    if (accordionArray1.length != 0 && accordionArray2.length != 0 && accordionArray3.length != 0 && accordionArray4.length != 0) {
      ValmisID.disabled = false;
      ValmisID.classList.add("doneBtnReady");

    } else {
      ValmisID.disabled = true;
      ValmisID.classList.remove("doneBtnReady");
    }
  })
});


// Valmis! button on click refreshes the page
ValmisID.onclick = refreshPage;

function refreshPage() {
  location.href = 'index.html';
}
