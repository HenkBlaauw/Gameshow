module.exports = {



    getRandomNumbs() {
        this.randNums = null;
        for (y = 0; y <= 50; y++) {
            this.randNums = Math.floor((Math.random() * 49) + 1);
            for (x = 0; x < 10; x++) {
                if (this.randNums[y] == this.randNums[x]) {

                    this.randNums[y] = Math.floor((Math.random() * 49) + 1);

                }
                for (z = 0; z < 50; z++) {
                    if (this.randNums[y] == this.randNums[x]) {

                        this.randNums[y] = Math.floor((Math.random() * 49) + 1);
                    }
                }
                for (c = 0; c < 50; c++) {
                    if (this.randNums[y] == this.randNums[x]) {

                        this.randNums[y] = Math.floor((Math.random() * 49) + 1);
                    }
                }
            }

        }

        return this.randNums;
    }

}