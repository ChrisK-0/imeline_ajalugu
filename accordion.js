// accordion opening/closing animation
var accordionBtn = document.getElementsByClassName('accordion');
var accordionPanel = document.getElementsByClassName('accord_panel');
var accordionHeader = document.getElementsByClassName('accord_panel_header');
var themeChangeBtn = document.getElementsByClassName('next_theme');
// var allCheckboxes = accordionBtn.querySelectorAll("input[type=checkbox][class=accordionInput]");


for (var i = 0; i < accordionBtn.length; i++) {

  // Accordion array generator - fetches checkboxes into HTMLcollection array for the currently active accordion


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
for (var i = 0; i < themeChangeBtn.length; i++) {
  themeChangeBtn[i].onclick = function () { nextTheme() };
}


// var arrayFromAccordion = Array.from();

var accordionBtnArray = [];
// Generates arrays on page load equal to the amount of accordion buttons
function createArrays(){
  
  
  // this cycles inside for between all the accordions (i)
  
  // this cycles inside for to find all the children (inputs) from above accordions
  var elementToPush =  accordionBtn;

  for (var i = 0; i < accordionBtn.length; i++){

    var pushCurrentElement = accordionBtnArray.push(elementToPush[i]);

    // NOTES FOR TOMORROW/TODAY ----------------------------------------------------------------------------------------------------------------------------------------------------------------
    // counter checker valmis nupu jaoks - for kasutades k2iks k6ik selected_themes span-id l2bi ning igal foril peab olema " span.value >= 1 /// span.value > 0 "


    // var arrayFromAccordion = Array.from(this);
    // var allCheckboxes = accordionBtn.querySelectorAll("input[type=checkbox][class=accordionInput]");
    
    // var getThisBoxes = this.accordionBtn[i].nextElementSibling.children[i].children[0];
    
    // var currentAccBoxes = Array.from(`${getThisBoxes}`+`${i}`);

    // var currentAccordionBoxesAmount = document.getElementsByClassName('accordion')[i].nextElementSibling;
    // var formArray = Array.from(currentAccordionBoxesAmount);
    // console.log(formArray);

      /*
      for (var j = 0; j < currentAccordionBoxesAmount;j++) {
        var cycleBoxSections = currentAccordionBoxesAmount[i].children[i].children[0];
        var boxSectionNames = cycleBoxSections.getElementsByName('accord_section'+i);
        console.log(boxSectionNames.length);
      } 
      */
    
  }
  
  console.log(accordionBtnArray.id);
}

window.addEventListener('load', createArrays);






var currentActiveCheckboxes = openedPanel[0].querySelectorAll("input[type=checkbox][class=accordionInput]");

// loop to get clicked checkbox index (i) information
for (var i = 0; i < currentActiveCheckboxes.length; i++) {
  currentActiveCheckboxes.forEach(function (checkbox) {
    checkbox.addEventListener('change', function () {

      var createArrayForAccordion =
        Array.from(currentActiveCheckboxes) // Convert checkboxes to an array to use filter and map.
          .filter(i => i.checked) // Use Array.filter to remove unchecked checkboxes.
          .map(i => i.value); // Use Array.map to extract only the checkbox values from the array of objects.

      console.log(createArrayForAccordion);

    })
  })
}













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




/*
  // Variable for "Valmis!" button element id
  var ValmisID = document.getElementById("doneButton");

  // Event listener for every checkbox to determine if there is atleast 1 theme checked in every accordion
  // Also enable "Valmis!" button if atleast 1 checkbox is checked in every accordion
  // accordion checkbox selector variable on line 149
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


  // Valmis! button on click refreshes the page
  ValmisID.onclick = refreshPage;

  function refreshPage() {
    location.href = 'index.html';
  }
*/



