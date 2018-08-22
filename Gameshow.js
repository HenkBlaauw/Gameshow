var fs = require('fs');
var State = require('./State.js');
var screen = require('./Screens.js');
var stdin = process.openStdin();
var util = require('./Utility.js');
var data = fs.readFileSync('Questions.json', 'utf-8');
json = JSON.parse(data)
var myQuestions = json;

var Screens = {
    main_menu: 0,
    new_game: 1,
    see_verdict: 2,
    in_game: 3
}
var state = new State();
state.initialize(Screens.main_menu);

for (i = 0; i <= 10; i++) {
    ranValue = util.getRandomNumbs();
    state.questions.push(ranValue);
}

var correct = 0;

console.log(" ************************************\n  **********************************");
console.log("   Welcome to the wonderful gameshow!")
console.log("  **********************************\n ************************************");
//Main menu should display
screen.displayMenuForScreen(state.getCurrentScreen());
var currentEdit = "";
//starting main loop

answered = 0;
arrayVal = 0;
stdin.addListener("data", function (a) {
    if (state.getCurrentScreen() == Screens.main_menu) {

        if (isNaN(a)) {
            console.log('\033c');
            console.log("Please enter a number!");
            console.log(" ************************************\n  **********************************");
            console.log("   Welcome to the wonderful gameshow!")
            console.log("  **********************************\n ************************************");
            state.setCurrentScreen(Screens.main_menu);
        }

        else if (a == 1 || a == '1') {
            state.setCurrentScreen(Screens.new_game);
            correct = 0;

        }
        else if (a == 2 || a == '2') {
            console.log("You had " + correct + " correct");
            if (correct < 5) {
                console.log("No man...try again..do better");
            }
            else if (correct >= 5 && correct <= 7) {
                console.log("Well done, you did good!");
            }
            else if (correct > 7) {
                console.log("You did great!");
            }
        }
        else if (a == 3 || a == '3') {
            console.log("Hope you enjoyed! See you soon!");
            process.exit();
        }
        else if (a > 3) {
            console.log('\033c');
            console.log("Please enter a number that's in the menu!");
            console.log(" ************************************\n  **********************************");
            console.log("   Welcome to the wonderful gameshow!")
            console.log("  **********************************\n ************************************");

            state.setCurrentScreen(Screens.main_menu);
        }
    }
    else if (state.getCurrentScreen() == Screens.new_game) {
        console.log(json[state.questions[arrayVal]]["question"]);
        console.log(json[state.questions[arrayVal]]["answers"]);
        state.setCurrentScreen(Screens.in_game);
    }

    else if (state.getCurrentScreen() == Screens.in_game) {
        if (a.toString().trim().toUpperCase() == json[state.questions[arrayVal]]["correctAnswer"].charAt(0)) {
            console.log("Correct!");
            correct++;
            answered++;
            arrayVal++;
        }
        else {
            console.log("Wrong");
            console.log("Correct answer is: " + json[state.questions[arrayVal]]["correctAnswer"]);
            answered++;
            arrayVal++;
        }

        if (answered == 10) {
            console.log('\033c');
            state.setCurrentScreen(Screens.main_menu);
            answered = 0;
        }
        else {
            state.setCurrentScreen(Screens.new_game);
        }
    }
    screen.displayMenuForScreen(state.getCurrentScreen());
});
