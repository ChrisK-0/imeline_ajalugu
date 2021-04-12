// accordion variable
var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var accord_panel = this.nextElementSibling;
    if (accord_panel.style.maxHeight) {
        accord_panel.style.maxHeight = null;
    } else {
        accord_panel.style.maxHeight = accord_panel.scrollHeight + "px";
    } 
  });
}