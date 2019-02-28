angular.module('starter.controllers', [])




.controller('AppCtrl', function($scope, $ionicModal, $timeout) {

  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  // Form data for the login modal
  $scope.loginData = {};

  // Create the login modal that we will use later
  $ionicModal.fromTemplateUrl('templates/login.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal = modal;
  });

  // Triggered in the login modal to close it
  $scope.closeLogin = function() {
    $scope.modal.hide();
  };

  // Open the login modal
  $scope.login = function() {
    $scope.modal.show();
  };

  // Perform the login action when the user submits the login form
  $scope.doLogin = function() {
    console.log('Doing login', $scope.loginData);

    // Simulate a login delay. Remove this and replace with your login
    // code if using a login system
    $timeout(function() {
      $scope.closeLogin();
    }, 1000);
  };
})

.controller('PlaylistsCtrl', function($scope) {
  $scope.playlists = [
    { title: 'Reggae', id: 1 },
    { title: 'Chill', id: 2 },
    { title: 'Dubstep', id: 3 },
    { title: 'Indie', id: 4 },
    { title: 'Rap', id: 5 },
    { title: 'Cowbell', id: 6 }
  ];
})
.controller('WareCtrl', function($scope) {

$scope.choices = [{id: 'choice1'}];

$scope.addNewChoice = function() {
  var newItemNo = $scope.choices.length+1;
  $scope.choices.push({'id':'choice'+newItemNo});
};

$scope.removeChoice = function(index) {
  var lastItem = $scope.choices.length-1;
  $scope.choices.splice(index,1);
};

var _selected;

  $scope.selected = undefined;
  $scope.languages = [
    {name:'Hyderabad', stock:100},
    {name:'Warangal', stock:200},
    {name:'Nalgonda', stock:300},
    {name:'Adilabad', stock:400},
    {name:'Guntur', stock:500},
    {name:'Vijayawada', stock:600},

];


$scope.Submit= function(){
  $scope.myTxt="Your stock will be updated soon.Thank You!! "
}

});
