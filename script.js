setTimeout(function Race100M(score,LongJump){
    score.red = Math.floor(Math.random()*5)+10;
    score.blue = Math.floor(Math.random()*5)+10;
    score.green = Math.floor(Math.random()*5)+10;
    score.yellow = Math.floor(Math.random()*5)+10;
    max=Number.MIN_VALUE;
    if(score.red<max){
        max=score.red
    }
    if(score.blue<max){
        max=score.red
    }
    if(score.green<max){
        max=score.red
    }
    if(score.yellow<max){
        max=score.red
    }
    max=50;
    console.log(score);
    LongJump(score,HighJump);
  
  
  
    
},3000)

setTimeout(function OpeningCeremony(Race100M){
    console.log("Let the games begin");
    let score=[{red:0,blue:0,green:0,yellow:0}];
    Race100M(score,LongJump);

},1000);
//OpeningCeremony(Race100M);