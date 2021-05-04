import * as accordionModule from './accordion.js';
import * as themeChangeModule from './nextTheme.js';
import * as checkboxModule from './checkboxes.js';
import * as modalModule from './modal.js';
import * as gotoAccordModule from './gotoAccord.js';
import {globalVariables} from './constants';

// sass
import '../../public/main.css';
import '../sass/main.scss';
// cover bg import
import img from '../../src/imgs/coverbg.png';


// refresh function
function refreshPage() {
    location.href = 'index.html'
}

// Valmis! button on click refreshes the page
globalVariables.doneBtn.onclick = refreshPage;