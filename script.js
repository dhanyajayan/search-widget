var app = angular.module('myApp' ,[]);

app.controller("PolicyListCtrl", function($scope){

    $scope.policy = [
		{
            name:'Dhanya Jayan', phone: '+27-61-453-5444', email:'dhan.j@', policyno: '1234567890/1234567890'
        },
        {
            name:'Ann Liebmann', phone: '+27-61-453-5444', email:'ann.lieb@', policyno: '0013983887/0013983887'
        },
        {
            name:'Ann Summer', phone: '+27-61-453-5444', email:'ann.lieb@', policyno: '0013983887/0013983887'
        },
        {
            name:'Anabelle Samuel', phone: '+27-61-453-5444', email:'ann.lieb@', policyno: '0013983887/0013983887'
        }

    ]



});