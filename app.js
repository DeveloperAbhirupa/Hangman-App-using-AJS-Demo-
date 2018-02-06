var app=angular.module("HangmanApp",[]); //Name of the app, Dependencies
app.controller("GameController",['$scope',function($scope){                      //Defining controller which will link .js with html
                                                                                //Pass a function which takes a parameter $scope;
                                                                                // $scope will be availbale in html page, dependency injection
var  words=['positivity', 'chaos', 'intellectual', 'paranormal','function','dimention','liberty']   ;
$scope.incorectLetters=[];
$scope.correctLetters=[];
var guesses=5;
$scope.guesses=5;
$scope.display='';
$scope.input={
  letter:''
}
var selectRandomWord = function(){
  var ind=Math.round(Math.random()*(words.length-1));
  return words[ind];
}
var newGame = function(){
  $scope.incorectLetters=[];
  $scope.correctLetters=[];
  var guesses=5;
  $scope.guesses=5;
  var word=selectRandomWord();
  var temp=''
  for(var i=1;i<=word.length;i++)
  {  temp+='*';
  }
  $scope.display=temp;
  console.log(temp);
}

newGame();






}]);
