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