// scrolls to accordion on red anchor text click
var scrollDestination = document.getElementById("accord_title");
function scrollToAccord() {
  scrollDestination.scrollIntoView({ behavior: "smooth", block: "start" });

}

document.getElementById("goto_accord_anchor").onclick = scrollToAccord;