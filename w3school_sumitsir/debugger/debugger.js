class Myclass{
    constructor(name, age){
        this.name = name;
        this.age = age;
    }

    play(){
        console.log(`${this.name} is playing `);
        debugger;
        // console and source fixed errors
        // debugger;
        // it another way...
    }
}

const player1 = new Myclass("sohag");
const player2 = new Myclass("sohel", 23);

player1.play();
player2.play();