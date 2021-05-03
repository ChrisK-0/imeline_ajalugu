import {globalVariables} from './constants';

const accordionPanel = document.getElementsByClassName('accord_panel');
const accordionHeader = document.getElementsByClassName('accord_panel_header');

for (let i of globalVariables.accordionBtn) {
  // class toggler function on accordion button click
  i.onclick = function () {
    const toggleActiveClass = !this.classList.contains('active');
    classToggler(globalVariables.accordionBtn, 'active', 'remove');
    classToggler(accordionPanel, 'accord_show', 'remove');
    classToggler(accordionHeader, 'accord_panel_header_active', 'remove');
    classToggler(globalVariables.themeChangeBtn, 'themeBtnActive', 'remove');

    const findAccordionLastChild = this.nextElementSibling.childElementCount - 1;
    const findDivThemeBtn = this.nextElementSibling.children[findAccordionLastChild];
    const checkThemeBtnClass = findDivThemeBtn.classList.contains("theme_change");

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
const classToggler = (els, className, fnName) => {
  for (let i of els) {
    i.classList[fnName](className);
  }
}
