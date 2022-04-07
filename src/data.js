var i;

function getScore(){
    i=0;
    localStorage.setItem('Score', score);
    while(highScore[i]!=null && i<=10){
        i += 1;
    }

    if(i==10){
        while(localStorage.getItem('Score')>=highScore[i]){
            i -= 1;
        }
    }
    
    highScore=localStorage.getItem('Score');
    localStorage.setItem('highScore',highScore);
    console.log(highScore);
}