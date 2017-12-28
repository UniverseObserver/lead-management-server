angular.module('patternfly.navigation').controller('vertNavController', ['$scope',
    function ($scope) {
        $scope.navigationItems = [
            {
                title: "item1",
                iconClass: "fa fa-user",
                href: "#/item1"
            },
            {
                title: "item2",
                iconClass: "fa fa-users",
                href: "item2"
            },
			{
				title: "item3",
				iconClass: "fa fa-user",
				herf: "item3"
			}
        ];
    }
]);
