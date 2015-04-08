# Week 1 day 4 - Function Prototyping
##Assignment Overview

In this assignment you will create your own Git repository, and learn about Objects and Function Prototypes. To do this you will be creating a very simple application for the recording of statistics for players and monsters in the game Dungeon and Dragons, and storing those in an array. 

**Instructions:**

- Create a brand new repository under your GitHub account. Give it a descriptive name such as "Week1-Day4", and a description such as "Week 1 day 4 - Function Prototyping".
- Create a new HTML file named `index.html`.
- Inside of the HTML file, create a simple HTML document. Add the following to the document:
    * A title, description and author metadata.
    * A label with `Name:` as the text.
    * A textbox that has an id of `name`. 
    * Create six more label/textboxes for the six monster/player statistics: Strength, Dexterity, Constitution, Wisdom, Intelligence and Charisma. Be sure to give the text boxes unique IDs as well.
    * A third label with `Player Class (Optional)`.
    * A textbox with the id `class`.
    * A button with the text `Add Player/Monster to Records` and an the id `addMonster`.
    * Finally, add a table with eight columns, with the headers `Name`, `Strength`, `Dexterity`, `Constitution`, `Wisdom`, `Intelligence`, `Charisma` and `Player Class (Optional)`.
- Create a new CSS file named `styles.css`.
    * Add a reference to this file in `index.html`.
    * Add any styles you want to make this app look nicer. Look at W3 School's [CSS Tables](http://www.w3schools.com/css/css_table.asp). 
- Create a new JavaScript file named `app.js`.
    * Add a reference to this file in `index.html`.
    * Create an object called `Monster` that has the properties `name`, `strength`, `dexterity`, `constitution`, `wisdom`, `intelligence`, and `charisma`.
    * Create an object called `Player` that inherits from `Monster`, and has the additional property `playerClass`.
    * Create a constructor for `Player` as well as a prototype to correctly pass reference to `this`.
    * Create an empty array to serve as storage.
    * Next, write an function that will act as a click handler for the button. It should call the appropriate constructor, pass in the values the user typed in, add the object to the array, and append it to the table for visual representation. Hint: Use `document.getElementById('addMonster').addEventListener('click', functionNameGoesHere);`

## Extra joseph needs to ask scott about:

- Add a prototypical function called `Attack`. When called, return `Math.floor(Math.random() * 20) + 1` added to the Player/Monster's strength value. For the player objects override the function to return the same number, but use dexterity value instead of strength.
- Bonus??? Add a hyperlink to the player/monster's name that returns Monster.Attack() or Player.Attack() based on the name clicked (use the array and the objects in the array, not just the same logic applied to the numbers in the table).
  
####Be sure to commit your changes to your development branch frequently!