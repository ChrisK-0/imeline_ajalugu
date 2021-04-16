// accordion opening/closing animation
var accordionBtn = document.getElementsByClassName("accordion");
var accordionPanel = document.getElementsByClassName('accord_panel');
var accordionHeader = document.getElementsByClassName('accord_panel_header');

for (var i = 0; i < accordionBtn.length; i++) {
  accordionBtn[i].onclick = function () {
    var setClasses = !this.classList.contains('active');
    setClass(accordionBtn, 'active', 'remove');
    setClass(accordionPanel, 'accord_show', 'remove');
    setClass(accordionHeader, 'accord_panel_header_active', 'remove');

    if (setClasses) {
      this.classList.toggle("active");
      this.nextElementSibling.classList.toggle("accord_show");
      this.children[0].classList.toggle("accord_panel_header_active");
    }
  }
}
function setClass(els, className, fnName) {
  for (var i = 0; i < els.length; i++) {
    els[i].classList[fnName](className);
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


// Get the modal
var getModal = document.getElementById("policyModal");

// Get the button that opens the modal
var openModal = document.getElementById("policyOpen");

// Get the <span> element that closes the modal
var modalSpan = document.getElementsByClassName("closeModal")[0];

// When the user clicks on the button, open the modal
openModal.onclick = function () {
  getModal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
modalSpan.onclick = function () {
  getModal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == getModal) {
    getModal.style.display = "none";
  }
}



// variable for inital set
var SelectSpans = document.getElementsByClassName("selected_themes");
var AccSpanDefault = "0 / 3";

// Sets the spans to 0 on page inital load
document.addEventListener('DOMContentLoaded', function () {
  var i;

  for (i = 0; i < SelectSpans.length; i++) {
    SelectSpans[i].innerHTML = AccSpanDefault;
  }
}, false);




/* --------------------------------------------------------------------------------------------------
Above this line are automated, short scripts that dont require repeating. 
Everything below should also be shorter, but I didnt have time/knowledge on making the code shorter .
--------------------------------------------------------------------------------------------------  */





// Variables for next theme button functions to keep code shorter
var getAccordion1 = document.getElementById('accordion1');
var accordionPanel1 = document.getElementById('acc_1');
var accordionHeader1 = document.getElementById("accord_head1");

var getAccordion2 = document.getElementById('accordion2');
var accordionPanel2 = document.getElementById('acc_2');
var accordionHeader2 = document.getElementById("accord_head2");

var getAccordion3 = document.getElementById('accordion3');
var accordionPanel3 = document.getElementById('acc_3');
var accordionHeader3 = document.getElementById("accord_head3");

var getAccordion4 = document.getElementById('accordion4');
var accordionPanel4 = document.getElementById('acc_4');
var accordionHeader4 = document.getElementById("accord_head4");


/* Attempt for a smaller, one function for opening the next accordion. Currently crashes the browser as it is
var blockArray = [];
for (i = 0; 1 < 4 ;i++) {
  blockArray.push( {blockID: i, blockName: "a"+i});
}
var blockIndex = 3;


function open_next_theme() {
  blockIndex++;
  show(blockIndex, blockArray);
}
document.getElementById("next_theme1").onclick = function() {open_next_theme()};
document.getElementById("next_theme2").onclick = function() {open_next_theme()};
document.getElementById("next_theme3").onclick = function() {open_next_theme()};

function nextTheme() {
  var getActive = docoument.getElementsByClassName("active");
  for (i = 0; i < x.length; i-- ) {
    getActive[i].classList.remove("active");
  }
}
*/


// Next theme button function - removes classes that bring the accordion down and adds classes to the next one that brings that one down. Also removes/adds classes for Theme header color.
function open_next_theme1() {
  getAccordion1.classList.remove("active");
  accordionPanel1.classList.remove("accord_show");
  accordionHeader1.classList.remove("accord_panel_header_active");

  getAccordion2.classList.add("active");
  accordionPanel2.classList.add("accord_show");
  accordionHeader2.classList.add("accord_panel_header_active");
}

function open_next_theme2() {
  getAccordion2.classList.remove("active");
  accordionPanel2.classList.remove("accord_show");
  accordionHeader2.classList.remove("accord_panel_header_active");

  getAccordion3.classList.add("active");
  accordionPanel3.classList.add("accord_show");
  accordionHeader3.classList.add("accord_panel_header_active");
}

function open_next_theme3() {
  getAccordion3.classList.remove("active");
  accordionPanel3.classList.remove("accord_show");
  accordionHeader3.classList.remove("accord_panel_header_active");

  getAccordion4.classList.add("active");
  accordionPanel4.classList.add("accord_show");
  accordionHeader4.classList.add("accord_panel_header_active");
}


// Clicking next theme button will close the current one and open the next one
document.getElementById("next_theme1").onclick = function () { open_next_theme1() };
document.getElementById("next_theme2").onclick = function () { open_next_theme2() };
document.getElementById("next_theme3").onclick = function () { open_next_theme3() };



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
var ValmisID = document.getElementById("button_send");

// Event listener for every checkbox to determine if there is atleast 1 theme checked in every accordion
// Also enable "Valmis!" button if atleast 1 checkbox is checked in every accordion
allCheckboxes.forEach(function (checkbox) {
  checkbox.addEventListener('change', function () {
    if (accordionArray1.length != 0 && accordionArray2.length != 0 && accordionArray3.length != 0 && accordionArray4.length != 0) {
      ValmisID.disabled = false;
      ValmisID.classList.add("_valmis");

    } else {
      ValmisID.disabled = true;
      ValmisID.classList.remove("_valmis");
    }
  })
});