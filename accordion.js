// accordion opening/closing animation
var acc = document.getElementsByClassName("accordion");
var acc_panel = document.getElementsByClassName('accord_panel');
var acc_header = document.getElementsByClassName('accord_panel_header');

for (var i = 0; i < acc.length; i++) {
  acc[i].onclick = function () {
    var setClasses = !this.classList.contains('active');
    setClass(acc, 'active', 'remove');
    setClass(acc_panel, 'accord_show', 'remove');
    setClass(acc_header, 'accord_panel_header_active', 'remove');

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
var acc_next_1 = document.getElementById('accordion1');
var acc_panel_next_1 = document.getElementById('acc_1');
var acc_head_1 = document.getElementById("accord_head1");

var acc_next_2 = document.getElementById('accordion2');
var acc_panel_next_2 = document.getElementById('acc_2');
var acc_head_2 = document.getElementById("accord_head2");

var acc_next_3 = document.getElementById('accordion3');
var acc_panel_next_3 = document.getElementById('acc_3');
var acc_head_3 = document.getElementById("accord_head3");

var acc_next_4 = document.getElementById('accordion4');
var acc_panel_next_4 = document.getElementById('acc_4');
var acc_head_4 = document.getElementById("accord_head4");


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
  acc_next_1.classList.remove("active");
  acc_panel_next_1.classList.remove("accord_show");
  acc_head_1.classList.remove("accord_panel_header_active");

  acc_next_2.classList.add("active");
  acc_panel_next_2.classList.add("accord_show");
  acc_head_2.classList.add("accord_panel_header_active");
}

function open_next_theme2() {
  acc_next_2.classList.remove("active");
  acc_panel_next_2.classList.remove("accord_show");
  acc_head_2.classList.remove("accord_panel_header_active");

  acc_next_3.classList.add("active");
  acc_panel_next_3.classList.add("accord_show");
  acc_head_3.classList.add("accord_panel_header_active");
}

function open_next_theme3() {
  acc_next_3.classList.remove("active");
  acc_panel_next_3.classList.remove("accord_show");
  acc_head_3.classList.remove("accord_panel_header_active");

  acc_next_4.classList.add("active");
  acc_panel_next_4.classList.add("accord_show");
  acc_head_4.classList.add("accord_panel_header_active");
}


// Clicking next theme button will close the current one and open the next one
document.getElementById("next_theme1").onclick = function () { open_next_theme1() };
document.getElementById("next_theme2").onclick = function () { open_next_theme2() };
document.getElementById("next_theme3").onclick = function () { open_next_theme3() };



// Each accordion has its own Array, "Valmis!" button becomes available if every accordion array has atleast 1 item in it
var acc_1_array = [];
var acc_2_array = [];
var acc_3_array = [];
var acc_4_array = [];

// Checked accordion checkboxes to be collected
var acc_1_boxes = document.querySelectorAll("input[type=checkbox][name=accord_section1]");
var acc_2_boxes = document.querySelectorAll("input[type=checkbox][name=accord_section2]");
var acc_3_boxes = document.querySelectorAll("input[type=checkbox][name=accord_section3]");
var acc_4_boxes = document.querySelectorAll("input[type=checkbox][name=accord_section4]");

/*
Here are 3 event listeners. Each accordion has it's own special collector, which adds and removes checkbox values from arrays.
This was made, to make the "Valmis!" button available when every accordion has atleast 1 checkbox checked. It works by checking, that none of 
the accordion arrays are empty, and if they are not empty, the button is clickable. Otherwise the button is disabled.
*/
// Event listener and collector for the first array.
acc_1_boxes.forEach(function (checkbox) {
  checkbox.addEventListener('change', function () {
    acc_1_array =
      Array.from(acc_1_boxes) // Convert checkboxes to an array to use filter and map.
        .filter(i => i.checked) // Use Array.filter to remove unchecked checkboxes.
        .map(i => i.value) // Use Array.map to extract only the checkbox values from the array of objects.

    console.log(acc_1_array)

    // Counter for the selected events in each accordion block
    var x = acc_1_array.length;
    if (acc_1_array.length === 0) {
      document.getElementById("accord_span_1").innerHTML = "0 / 3";
    } else if (acc_1_array.length < 4) {
      document.getElementById("accord_span_1").innerHTML = x + " / 3";
    }

    /* Attempt to disable all unchecked boxes when there are 3 checkboxes checked
    else if (acc_1_array.length === 3) {

      var checkedInput = document.getElementsByTagName("input").checked;
      checkedInput.disabled = true;

    }
    */

  })
});

acc_2_boxes.forEach(function (checkbox) {
  checkbox.addEventListener('change', function () {
    acc_2_array =
      Array.from(acc_2_boxes)
        .filter(i => i.checked)
        .map(i => i.value)

    console.log(acc_2_array)

    var x = acc_2_array.length;
    if (x.length === 0) {
      document.getElementById("accord_span_2").innerHTML = "0 / 3";
    } else if (x < 4) {
      document.getElementById("accord_span_2").innerHTML = x + " / 3";
    }
  })
});

acc_3_boxes.forEach(function (checkbox) {
  checkbox.addEventListener('change', function () {
    acc_3_array =
      Array.from(acc_3_boxes)
        .filter(i => i.checked)
        .map(i => i.value)

    console.log(acc_3_array)

    var x = acc_3_array.length;
    if (acc_3_array.length === 0) {
      document.getElementById("accord_span_3").innerHTML = "0 / 3";
    } else if (acc_3_array.length < 4) {
      document.getElementById("accord_span_3").innerHTML = x + " / 3";
    }
  })
});

acc_4_boxes.forEach(function (checkbox) {
  checkbox.addEventListener('change', function () {
    acc_4_array =
      Array.from(acc_4_boxes)
        .filter(i => i.checked)
        .map(i => i.value)

    console.log(acc_4_array)

    var x = acc_4_array.length;
    if (acc_4_array.length === 0) {
      document.getElementById("accord_span_4").innerHTML = "0 / 3";
    } else if (acc_4_array.length < 4) {
      document.getElementById("accord_span_4").innerHTML = x + " / 3";
    }
  })
});



// Variable that selects all checkboxes
var valmis_button_state = document.querySelectorAll("input[type=checkbox]");
// Variable for "Valmis!" button element id, for shorter code
var ValmisID = document.getElementById("button_send");

// Event listener for every checkbox to determine if there is atleast 1 theme checked in every accordion
// Also enable "Valmis!" button if atleast 1 checkbox is checked in every accordion
valmis_button_state.forEach(function (checkbox) {
  checkbox.addEventListener('change', function () {
    if (acc_1_array.length != 0 && acc_2_array.length != 0 && acc_3_array.length != 0 && acc_4_array.length != 0) {
      ValmisID.disabled = false;
      ValmisID.classList.add("_valmis");

    } else {
      ValmisID.disabled = true;
      ValmisID.classList.remove("_valmis");
    }
  })
});