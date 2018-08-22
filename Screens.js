module.exports = {
    displayMenuForScreen(screen) {
        i = 0;
        if (screen == 0) {
            console.log("1. New game \n 2. See score \n 3. Exit");
        }
        else if (screen == 1) {
            console.log("Press enter to continue");
        }
        else if (screen == 2) {
            console.log("This is the last player's score");
        }
    }
}
