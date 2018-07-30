var NumberOfWords = 19

var words = new BuildArray(NumberOfWords)

// Use the following variables to
// define your random words:
words[1] = "take a walk at a park"
words[2] = "do 20 jumping jacks"
words[3] = "do 15 situps"
words[4] = "replace one unhealthy drink with water"
words[5] = "make a healthy smoothie"
words[6] = "ride a bike"
words[7] = "run a mile"
words[8] = "do your best to sleep early"
words[9] = "go for a swim"
words[10] = "Plant a garden and take care of it."
words[11] = "call an old friend"
words[12] = "tell someone you appreciate them"
words[13] = "jog in place for one minute"
words[14] = "have a dance party in your room"
words[15] = "meditate"
words[16] = "replace one unhealthy snack with a healty one"
words[17] = "try a new hobby"
words[18] = "write a thank you note to someone you care about"
words[19] = "right a letter to your future self"
word[20] = "do something nice for others"
word[21] = "have a good laugh"
word[22] = "disconnect from your devices"

function BuildArray(size){
this.length = size
for (var i = 1; i <= size; i++){
this[i] = null}
return this
}

function PickRandomWord(frm) {
// Generate a random number between 1 and NumberOfWords
var rnd = Math.ceil(Math.random() * NumberOfWords)

// Display the word inside the text box
frm.WordBox.value = words[rnd]
}
