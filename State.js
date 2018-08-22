class State {

    initialize(screen) {

        this.currentScreen = screen;
        this.questions = [];
    }

    setCurrentScreen(screen) {
        this.currentScreen = screen;
    }

    getCurrentScreen() {
        return this.currentScreen;
    }

    getQuestion(){
        return this.questions;
    }
};
module.exports = State;