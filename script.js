function monster(name, strength, dexterity, constitution, wisdom, intelligence, charisma) {
    this.name = name;
    this.strength = strength;
    this.dexterity = dexterity;
    this.constitution = constitution;
    this.wisdom = wisdom;
    this.intelligence = intelligence;
    this.charisma = charisma;
}

function character(name, strength, dexterity, constitution, wisdom, intelligence, charisma){
	this.name = name;
    this.strength = strength;
    this.dexterity = dexterity;
    this.constitution = constitution;
    this.wisdom = wisdom;
    this.intelligence = intelligence;
    this.charisma = charisma;
}
character.prototype = new monster();

var array1 = [];

function addThingsToArray() {
var charName = document.getElementById("name").value;
var charStr = parseInt(document.getElementById("strength").value);
var charDex = parseInt(document.getElementById("dexterity").value);
var charConst = parseInt(document.getElementById("constitution").value);
var charWis = parseInt(document.getElementById("wisdom").value);
var charInt = parseInt(document.getElementById("intelligence").value);
var charChar = parseInt(document.getElementById("charisma").value);
var thing = new character(charName, charStr, charDex, charConst, charWis, charInt, charChar);
array1.push(thing);
console.log(array1);
console.log(thing);
}
//if that stuff on line 17 doesn't work, this was from Vince: ...("name").elements[0].value);

monster.attack = function() {
		strength += Math.floor(Math.random() * 20) + 1;
	//if you're not a monster just ignore this
	//How do you create just a monster?
	//How are you supposed to create just a human?
};

//it's running everything before the page loads. This is supposed to fix that, but doesn't work
window.onload = function(){
 	document.getElementById("submit").addEventListener('click', addThingsToArray());
 	console.log(array1);
 };




















