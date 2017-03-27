(function(){
  angular.module('mymeanblog')
        .controller('DashboardController', DashboardController);

  DashboardController.$inject = ['$scope'];

  function DashboardController($scope){
    $scope.edit = edit;
    $scope.delete = deletePost;
    $scope.posts = [
      {
        _id:'kajsdfoihjiasdfklhwer456',
        title: 'some title',
        body: 'things and stuff and things and stuff and things and stuff',
        created: new Date(),
        updated: new Date()
      },
      {
        _id:'kajsdfoihjiasdfklhwer456',
        title: 'some title',
        body: 'things and stuff and things and stuff and things and stuff',
        created: new Date(),
        updated: new Date()
      }
    ];

    function edit(post){
      console.log('moving to the edit page');
    }
    function deletePost(post){
      console.log('deleting the post with id of' + post._id);
    }
  }
})();
