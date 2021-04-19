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

    if (setClasses) {
      this.classList.toggle("active");
      this.nextElementSibling.classList.toggle("accord_show");
      this.children[0].classList.toggle("accord_panel_header_active");
      this.nextElementSibling.children[4].children[0].classList.toggle("themeBtnActive");
    }
  }
}
function setClass(els, className, fnName) {
  for (var i = 0; i < els.length; i++) {
    els[i].classList[fnName](className);
  }
}

// Next theme button. Closest the current one and opens the next one
themeChangeBtn[0].onclick = function () { nextTheme() };
themeChangeBtn[1].onclick = function () { nextTheme() };
themeChangeBtn[2].onclick = function () { nextTheme() };

var getAccordion = document.getElementsByClassName("active");
var getPanel = document.getElementsByClassName("accord_show");
var getHeader = document.getElementsByClassName("accord_panel_header_active");
var nextBtn = document.getElementsByClassName("themeBtnActive");

function nextTheme() {
  // gets next elements before the 3 special classes are removed with nextElementSibling
  var getNextAccordion = getAccordion[0].nextElementSibling.nextElementSibling;
  var getNextPanel = getPanel[0].nextElementSibling.nextElementSibling;
  var getNextHeader = getAccordion[0].nextElementSibling.nextElementSibling.children[0];

  // this closes the currently open accordion with theme change button
  nextBtn[0].onclick = function () {
    // adds 3 actives to the next ones
    getNextPanel.classList.add("accord_show");
    getNextHeader.classList.add("accord_panel_header_active");
    getNextAccordion.classList.add("active");

    // removes the first found active class and since now there are 2, it removes the 3 classes from the first to close it, because only 1 accordion should be open at a time
    getAccordion[0].classList.remove("active");
    getPanel[0].classList.remove("accord_show");
    getHeader[0].classList.remove("accord_panel_header_active");
    nextBtn[0].classList.remove("themeBtnActive");
  }



}


// change accordion label block background on checked
function isChecked(elem) {
  elem.parentNode.style.backgroundColor = (elem.checked) ? "#fff8cd" : '';
}


// scrolls to accordion on red anchor text click
document.getElementById("goto_accord_anchor").onclick = function () { gotoAccord() };
function gotoAccord() {
  var elem = document.getElementById("accord_title");
  elem.scrollIntoView({ behavior: "smooth", block: "start" });
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
  if (event.key === 'Escape' ) {
    closeModal();
  }
});

// when the user clicks anywhere outside of the modal, close it (also added ESC key)
window.onclick = function (event) {
  if (event.target == modal) {
    closeModal();

  }
}






/* --------------------------------------------------------------------------------------------------
Above this line are automated, short scripts that dont require repeating. 
Everything below should also be shorter, but I didnt have time/knowledge on making the code shorter .
--------------------------------------------------------------------------------------------------  */


// Each accordion has its own Array, "Valmis!" button becomes available if every accordion array has atleast 1 item in it
var accordionArray1 = [];
var accordionArray2 = [];
var accordionArray3 = [];
var accordionArray4 = [];

// Checked accordion checkboxes to be collected
var accordionCheckboxes1 = document.querySelectorAll("input[type=checkbox][name=accord_section1]");
var accordionCheckboxes2 = document.querySelectorAll("input[type=checkbox][name=accord_section2]");
var accordionCheckboxes3 = document.querySelectorAll("input[type=checkbox][name=accord_section3]");
var accordionCheckboxes4 = document.querySelectorAll("input[type=checkbox][name=accord_section4]");

/*
Here are 3 event listeners. Each accordion has it's own special collector, which adds and removes checkbox values from arrays.
This was made, to make the "Valmis!" button available when every accordion has atleast 1 checkbox checked. It works by checking, that none of 
the accordion arrays are empty, and if they are not empty, the button is clickable. Otherwise the button is disabled.
*/
// Event listener and collector for the first array.
accordionCheckboxes1.forEach(function (checkbox) {
  checkbox.addEventListener('change', function () {
    accordionArray1 =
      Array.from(accordionCheckboxes1) // Convert checkboxes to an array to use filter and map.
        .filter(i => i.checked) // Use Array.filter to remove unchecked checkboxes.
        .map(i => i.value) // Use Array.map to extract only the checkbox values from the array of objects.

    console.log(accordionArray1)

    // Counter for the selected events in each accordion block
    var x = accordionArray1.length;
    if (accordionArray1.length === 0) {
      document.getElementById("accord_span_1").innerHTML = "0 / 3";
    } else if (accordionArray1.length < 4) {
      document.getElementById("accord_span_1").innerHTML = x + " / 3";
    }

    /* Attempt to disable all unchecked boxes when there are 3 checkboxes checked
    else if (accordionArray1.length === 3) {

      var checkedInput = document.getElementsByTagName("input").checked;
      checkedInput.disabled = true;

    }
    */

  })
});

accordionCheckboxes2.forEach(function (checkbox) {
  checkbox.addEventListener('change', function () {
    accordionArray2 =
      Array.from(accordionCheckboxes2)
        .filter(i => i.checked)
        .map(i => i.value)

    console.log(accordionArray2)

    var x = accordionArray2.length;
    if (x.length === 0) {
      document.getElementById("accord_span_2").innerHTML = "0 / 3";
    } else if (x < 4) {
      document.getElementById("accord_span_2").innerHTML = x + " / 3";
    }
  })
});

accordionCheckboxes3.forEach(function (checkbox) {
  checkbox.addEventListener('change', function () {
    accordionArray3 =
      Array.from(accordionCheckboxes3)
        .filter(i => i.checked)
        .map(i => i.value)

    console.log(accordionArray3)

    var x = accordionArray3.length;
    if (accordionArray3.length === 0) {
      document.getElementById("accord_span_3").innerHTML = "0 / 3";
    } else if (accordionArray3.length < 4) {
      document.getElementById("accord_span_3").innerHTML = x + " / 3";
    }
  })
});

accordionCheckboxes4.forEach(function (checkbox) {
  checkbox.addEventListener('change', function () {
    accordionArray4 =
      Array.from(accordionCheckboxes4)
        .filter(i => i.checked)
        .map(i => i.value)

    console.log(accordionArray4)

    var x = accordionArray4.length;
    if (accordionArray4.length === 0) {
      document.getElementById("accord_span_4").innerHTML = "0 / 3";
    } else if (accordionArray4.length < 4) {
      document.getElementById("accord_span_4").innerHTML = x + " / 3";
    }
  })
});



// Variable that selects all checkboxes
var allCheckboxes = document.querySelectorAll("input[type=checkbox]");
// Variable for "Valmis!" button element id, for shorter code
var ValmisID = document.getElementById("doneButton");

// Event listener for every checkbox to determine if there is atleast 1 theme checked in every accordion
// Also enable "Valmis!" button if atleast 1 checkbox is checked in every accordion
allCheckboxes.forEach(function (checkbox) {
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