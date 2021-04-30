class Quiz {
  constructor(){}

  getState(){
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){
       gameState = data.val();
    })

  }

  update(state){
    database.ref('/').update({
      gameState: state
    });
  }

  async start(){
    if(gameState === 0){
      contestant = new Contestant();
      var contestantCountRef = await database.ref('contestantCount').once("value");
      if(contestantCountRef.exists()){
        contestantCount = contestantCountRef.val();
        contestant.getCount();
      }
      question = new Question()
      question.display();
    }
  }

  play(){
    background("yellow");

    textSize(30);
    fill("Red")
    textFont("algerian");
    text("Your Result !!",340,40)

    text("-----------------------",340,55)
   
    textSize(20);
    fill("green")
    textFont("arial");
    text("*NOTE: Contestants Who Have Answered Correctly Are Highlighted In Green Color..... ",40,170)

    textSize(20);
    fill("blue")
    textFont("arial");
    text("The Correct Answer Was Option no. 2 !! ",270,100)


    //call getContestantInfo( ) here
    Contestant.getPlayerInfo();

    if(allContestants !== undefined){

      var display_Answers = 180;
   
    for (var plr in allContestants) {

      var correctAns = "2";
      if (correctAns === allContestants [plr] . answer)
      fill("Green")
      else
      fill("red");

      display_Answers+=30;

      textSize(20);
      text(allContestants[plr].name + ": " + allContestants[plr].answer, 50,display_Answers);

      }
    }
  }
}
