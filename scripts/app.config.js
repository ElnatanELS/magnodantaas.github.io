app.config(function($routeProvider) {
    $routeProvider
    .when("/", {
        templateUrl : "pages/main.html",
        controller:'mainController'
    })
    .when("/login", {
        templateUrl : "pages/login.html"
    })
    .when("/dashboard", {
        templateUrl : "pages/dashboard.html",
        controller: 'DashboardController'
    });
});
