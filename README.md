# Imeline ajalugu


## Day 1

### Setting up bases and templates

Made index.html base. HTML has a footer, some text, template for magazine theme selection (JS) and a little bit of styling.


Accordion closed view
![Accordion closed view](https://i.imgur.com/djgsnY6.png)

Accordion open view
![Accordion open view](https://i.imgur.com/HQXvdO5.png)


## Day 2

### Creating accordion effect JS code

Specifics:
* Opening a new accordion closes the currently open one
* Next theme button will open the next accordion and close the currently open one
* "Valmis!" button is disabled on page load and becomes available after atleast 1 checkbox is checked in every accordion block
* Next to the accordion header there is a counter for how many themes have been selected (x/3). Currently there is no restriction and you can select more than 4 themes out of 3 (4/3)
  * Currently the counter is only tied to the first accordion block (will be added to all after restriction is in place)
* Test button for adding checked themes into arrays
  * Checked themes are put into arrays, each accordion has its own array variable in JS. This is what brings the counter and atleast 1 checkbox in every block to life.


Accordion theme counter
![Accordion theme counter](https://i.imgur.com/iLfCffW.png)

Next theme button
![Next theme button](https://i.imgur.com/AlxSlQk.gif)

"Valmis!" button
!["Valmis!" button](https://i.imgur.com/0abRjqy.gif)


## Day 3

### Front-end visual continuation

Copied looks from the given PSD file, with the exception of accordion block header having a gradient background and accordion panel checkbox div texts are all over the place.
Made a "Vali oma lemmikartiklid" anchor element to scroll to the head of the accordion on click (requirement). JS has not been done for it.


Top of the page
![Top of the page](https://i.imgur.com/TRBbW6Y.png)

Button styling (and broken checkbox paragraphs)
![Button styling](https://i.imgur.com/oTOhWZ4.png)

Footer is centered along with the rest of the page
![Footer is centered along with the rest of the page](https://i.imgur.com/JoZ9AnC.png)


## Day 4

### Popup/lightbox, even better CSS for visual presentation

Now includes popup. Replaced some CSS options from "float:left" with "display:flex".
* Removed the "test" button and script


Accordion blocks now look proper and are responsive
![Accordion blocks](https://i.imgur.com/cY0YP7l.png)

Popup
![Popup](https://i.imgur.com/wzDoBXa.png)


## Day 5

### Code refinemenet

Fixed CSS image path notation, made some SASS variables and renamed variables in accoridon.js from word_word to wordWord (camel case).

Patch - Made next accordion button JS a lot shorter


## Day 6

### Code refinement

#### CSS
Finally added "IMELINE" to the "Ajalugu" header with transformations. 
Updated the cover image file in description.
Other adjustments to the positioning code.

#### JS
Re-made checkbox background JS code from HTML to JS file (removed onChange from HTML).
Removed get... variable names from inccorect locations and adjusted the code accordingly. (Tried to make the code gloabl-friendly)
Other small adjustments.


## Day 7

### Code refinement

#### CSS
Active header no longer has a tiny gap between the first label and the button elements

#### JS
Adjusted the next_theme button function and manually opening an accordion function to log text instead of sending an error
Counter made under one function
* It is unreasonably long, but works (planning to make it shorter)
* When 3 checkboxes are checked, a 4th (checkboxes not checked) will get disabled attribute


Counter and checkbox disabling in action (I am clicking the 4th one, even if it's hard to tell from a GIF)
![Counter GIF](https://i.imgur.com/zLwaPhF.gif)


## Day 8

### Re-writing

" I am working on the code locally, no commits will be made, unless progress is made "

Currently the code is hard-coded for the currently setup 4 accordion blocks and 4 accordion themes. I started re-doing the last bit of code that is yet to be automated. Currently JS file has to be modified, when more accordion blocks are added.
Working on an automated code, that does not require changing lines in the JS file. 
Functions under this code are:
* Theme counter
* When 3 themes are checked, other checkboxes will get disabled attribute
* Disabled checkboxes get gray-ish background
* Enabling Valmis! button when every accordion has atleast 1 checkbox


## Day 9

### Still implementing an automated "Valmis!" button enabling system

" I am working on the code locally, no commits will be made, unless progress is made "

Managed to get gray backgrounds on unchecked checkboxes and even tested with a 5th accordion block and added more themes into it, but sometimes the code "crashes" and does not count checked boxes.
Also sometimes one of the checkboxes in the 5th block does not count whilst others in the same accordion block do.


## Day 10 

### Finished counter/"Valmis!" button automation

Finished automated theme changing, checkbox counter/disabler and "Valmis!" button enabling without accordion block restrictions.
Adjusted some CSS accordingly to the PSD file.


## Day 11

### Polishing the code a bit

Went through the HTML, CSS and JS files.
* Removed unnecessary lines (like ==/=== true where it wasn't needed) and re-ordered code in JS file.

## Day 12

### Webpack installation and ES6 JS rework

Installed and configured webpack for the project and started on rewriting JS to ES6 standards.
JS is now separated. Main.js is the mothership and accordion.js, modal.js and gotoAccord.js are imported modules.


## Day 13

### Dealing with node and VSC errors

Node didn't want to cooperate with VSC so this day I spent dealing with ways to workaround errors, but also looked into what I could implement from ES6 to my current code.


## Day 14

### Made more modules(JS files) and separated codes

Made constants.js to hold constants, that more than 1 JS file requires. Could not implemenet this small feature into main.js, because you can't import code from a file that imports code from the same file. Webpack module system is quite interesting.
Also re-named some variables from var to const.


## Day 15

### Fixed newly occuring issues with let/const

Some lines in JS files were causing issues when changing from var to const, but this issue has been fixed. Also worked on my Visual Studio Code to allow the use of NPM commands, to fasten page function control. Previously I needed to run the command "npm run build" to sync my JS modules into bundle.js from the windows CMD.


## Day 16

### Turned SASS into a module model

Added SASS and css loaders and plugins with NPM and made a module format for SASS styling aswell. Renamed style.css to main.css, but styling is still using main.css, but work done on CSS is through SASS. Main.scss has been split into 7 other modules and are all imported into main.scss, which is compiled into main.css. 

Also moved images folder to src and tested with webpack watch for improved code control time.


## Day 17

### Fixed newly occuring SASS module problems

Webpack couldn't cooperate with SASS and load a .png file, so a file-loader was needed. The file loader at first caused a lot of problems, like turning the .png file content into 1 line path code that did and meant nothing. Fixed that and Cover section background is now functioning with the module model.

Added more mixins and variables to the pool, removed breakpoints.scss, made a mixin for some mobile view lines and added the shorter necessary media query to their respective lines.


## Day 18

### Adjusting SASS structure to BEM 

Learning to write code structure to be more universal among other developers. Changed SASS files to make use of the ampersand (&) and changed JS files and index.html content accordingly.


## Day 19

### Adjusting SASS structure to BEM #2

Continued to re-write code classes to BEM structure. Made globals.scss and more color variables in variables.scss. Unfinished.


## Day 20

### SASS variables and sizing

Finished exchanging backgrounds and colors to SASS variables. Changed PX sizing to REM, except for borders.
Re-wrote old structure classes to BEM style. Removed irrelevant HTML attributes, like element IDs, which were not connected to anything.


## Day 21

### Implementing the project to a local Wordpress environment

Set up a local XAMPP server for PHP and Wordpress to start the implementation process. Currently I am turning the made project into a custom theme for wordpress.

Editing the htdocs folder for XAMPP, which is not included in this repository.