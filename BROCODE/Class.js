// class is a blueprint for creating objects. 
// contains a constructor to assign unique properties

class Player{
    score = 0;

    pause(){
        return ('PAUSED');
    }
    exit(){
        return 'QUIT';
    }
}

const player1 = new Player()
const player2 = new Player()

console.log(player1.pause())