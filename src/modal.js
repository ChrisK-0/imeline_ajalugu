// get the modal
var modal = document.getElementById("policyModal");
// get the anchor text that opens the modal
var openModal = document.getElementById("policyOpen");
// get the <span> element that closes the modal
var closeModalBtn = document.getElementsByClassName("closeModal")[0];
// modal closing function
function closeModal() {
  modal.style.display = "none";

};

// when the user clicks on the anchor text, open the modal
openModal.onclick = function () {
  modal.style.display = "block";

}

// when the user clicks on <span> (x), close the modal
closeModalBtn.onclick = closeModal;

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

