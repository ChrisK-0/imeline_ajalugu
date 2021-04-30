// scrolls to accordion on red anchor text click
const scrollAnchor = document.getElementById("accord_title");
function scrollToAccord() {
  scrollAnchor.scrollIntoView({ behavior: "smooth", block: "start" });

}

document.getElementById("goto_accord_anchor").onclick = scrollToAccord;