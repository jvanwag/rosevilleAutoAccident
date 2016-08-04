angular.module('accidentApp', ['ui.router'])
.config(function($stateProvider, $urlRouterProvider, $httpProvider) {

  $urlRouterProvider.otherwise('/');

    $stateProvider
    .state('home', {
      url: '/',
      templateUrl: 'views/homeTemp.html',
      controller: 'mainCtrl',
    })
    .state('appointment', {
      url: '/appointment',
      templateUrl: 'views/new-patients/appointmentTemp.html',
      controller: 'mainCtrl',
    })
    .state('faq', {
      url: '/faq',
      templateUrl: 'views/new-patients/faqTemp.html',
      controller: 'mainCtrl',
    })
    .state('firstVisit', {
      url: '/first-visit',
      templateUrl: 'views/new-patients/firstVisitTemp.html',
      controller: 'mainCtrl',
    })
    .state('forms', {
      url: '/forms',
      templateUrl:'views/new-patients/formTemp.html',
      controller: 'mainCtrl',
    })
    .state('aboutUs', {
      url: '/about',
      templateUrl: 'views/aboutTemp.html',
      controller: 'mainCtrl',
    })
    .state('appliedKinesiology', {
      url: '/applied-kinesiology',
      templateUrl: 'views/services/appliedKinesiologyTemp.html',
      controller: 'mainCtrl',
    })
    .state('autoAccidentInjuries', {
      url: '/auto-accident-injuries',
      templateUrl: 'views/services/autoAccidentInjuriesTemp.html',
      controller: 'mainCtrl',
    })
    .state('chiropractic', {
      url: '/chiropractic',
      templateUrl: 'views/services/chiropracticTemp.html',
      controller: 'mainCtrl',
    })
    .state('massageTherapy', {
      url: '/massage-therapy',
      templateUrl: 'views/services/massageTherapyTemp.html',
      controller: 'mainCtrl',
    })
    .state('nutritionFitness', {
      url: '/nutrition-fitness',
      templateUrl: 'views/services/nutritionFitnessTemp.html',
      controller: 'mainCtrl',
    })
    .state('sportsInjuries', {
      url: '/sports-injuries',
      templateUrl: 'views/services/sportsInjuriesTemp.html',
      controller: 'mainCtrl',
    })
    .state('workInjuries', {
      url: '/work-injuries',
      templateUrl: 'views/services/workInjuriesTemp.html',
      controller: 'mainCtrl',
    })
    .state('conditions', {
      url: '/conditions',
      templateUrl: 'views/wellness-library/conditionsTemp.html',
      controller: 'mainCtrl',
    })
    .state('blogs', {
      url: '/blogs',
      templateUrl: 'views/wellness-library/blogsTemp.html',
      controller: 'mainCtrl',
    })
    .state('educationalVideos', {
      url: '/educational-videos',
      templateUrl: 'views/wellness-library/educationalVideosTemp.html',
      controller: 'mainCtrl',
    })
    .state('usefulLinks', {
      url: '/useful-links',
      templateUrl: 'views/wellness-library/usefulLinksTemp.html',
      controller: 'mainCtrl',
    })
    .state('videoTestimonials', {
      url: '/video-testimonials',
      templateUrl: 'views/testimonials/videoTestimonialsTemp.html',
      controller: 'mainCtrl',
    })
    .state('writtenTestimonials', {
      url: '/written-testimonials',
      templateUrl: 'views/testimonials/writtenTestimonialsTemp.html',
      controller: 'mainCtrl',
    })
    .state('contact', {
      url: '/contact',
      templateUrl: 'views/contactTemp.html',
      controller: 'mainCtrl',
    })

})
