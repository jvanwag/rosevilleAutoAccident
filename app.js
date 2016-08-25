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
    .state('disclaimer', {
      url:'/disclaimer',
      templateUrl: 'views/bottom-views/disclaimerTemp.html',
      controller: 'mainCtrl',
    })
    .state('privacyPolicy', {
      url: '/privacy-policy',
      templateUrl: 'views/bottom-views/privacyTemp.html',
      controller: 'mainCtrl',
    })
    .state('adhdBlog', {
      url: '/adhd-blog',
      templateUrl: 'views/wellness-library/blogs/adhdBlog.html',
      controller: 'mainCtrl',
    })
    .state('allergiesBlog', {
      url: '/allergies-blog',
      templateUrl: 'views/wellness-library/blogs/allergiesBlog.html',
      controller: 'mainCtrl',
    })
    .state('asthmaTreatmentBlog', {
      url: '/asthma-treatment-blog',
      templateUrl: 'views/wellness-library/blogs/asthmaTreatmentBlog.html',
      controller: 'mainCtrl',
    })
    .state('autoAccidentsBlog', {
      url: '/auto-accidents-blog',
      templateUrl: 'views/wellness-library/blogs/autoAccidentsBlog.html',
      controller: 'mainCtrl',
    })
    .state('carpalTunnelPainBlog', {
      url: '/carpal-tunnel-pain-blog',
      templateUrl: 'views/wellness-library/blogs/carpalTunnelPainBlog.html',
      controller: 'mainCtrl',
    })
    .state('chiropracticStressReliefBlog', {
      url: '/chiropractic-stress-relief-blog',
      templateUrl: 'views/wellness-library/blogs/chiropracticStressReliefBlog.html',
      controller: 'mainCtrl',
    })
    .state('chronicStressChiropracticApproachBlog', {
      url: '/chronic-stress-chiropractic-approach-blog',
      templateUrl: 'views/wellness-library/blogs/chronicStressChiropracticApproachBlog.html',
      controller: 'mainCtrl',
    })
    .state('earInfectionsBlog', {
      url: '/ear-infections-blog',
      templateUrl: 'views/wellness-library/blogs/earInfectionsBlog.html',
      controller: 'mainCtrl',
    })
    .state('migraineReliefBlog', {
      url: '/migraine-relief-blog',
      templateUrl: 'views/wellness-library/blogs/migraineReliefBlog.html',
      controller: 'mainCtrl',
    })
    .state('neckAndShoulderPainTreatmentBlog', {
      url: '/neck-and-shoulder-pain-treatment-blog',
      templateUrl: 'views/wellness-library/blogs/neckAndShoulderPainTreatmentBlog.html',
      controller: 'mainCtrl',
    })
    .state('pinchedNervesBlog', {
      url: '/pinched-nerves-blog',
      templateUrl: 'views/wellness-library/blogs/pinchedNervesBlog.html',
      controller: 'mainCtrl',
    })
    .state('sciaticaBlog', {
      url: '/sciatica-blog',
      templateUrl: 'views/wellness-library/blogs/sciaticaBlog.html',
      controller: 'mainCtrl',
    })
    .state('tennisElbowTreatmentBlog', {
      url: '/tennis-elbow-treatment-blog',
      templateUrl: 'views/wellness-library/blogs/tennisElbowTreatmentBlog.html',
      controller: 'mainCtrl',
    })
    .state('upperBackPainReliefBlog', {
      url: '/upper-back-pain-relief-blog',
      templateUrl: 'views/wellness-library/blogs/upperBackPainReliefBlog.html',
      controller: 'mainCtrl',
    })
    .state('whiplashBlog', {
      url: '/whiplash-blog',
      templateUrl: 'views/wellness-library/blogs/whiplashBlog.html',
      controller: 'mainCtrl',
    })
    .state('adhdCon', {
      url: '/adhd',
      templateUrl: 'views/wellness-library/blogs/adhdTemp.html',
      controller: 'mainCtrl',
    })
    .state('allergyCon', {
      url: '/allergy',
      templateUrl: 'views/wellness-library/blogs/allergyTemp.html',
      controller: 'mainCtrl',
    })
    .state('asthmaCon', {
      url: '/asthma',
      templateUrl: 'views/wellness-library/blogs/asthmaTemp.html',
      controller: 'mainCtrl',
    })
    .state('autoAccidentsCon', {
      url: '/auto-accidents',
      templateUrl: 'views/wellness-library/blogs/autoAccidentsTemp.html',
      controller: 'mainCtrl',
    })
    .state('carpalTunnelCon', {
      url: '/carpal-tunnel',
      templateUrl: 'views/wellness-library/blogs/carpalTunnelTemp.html',
      controller: 'mainCtrl',
    })
    .state('earInfectionCon', {
      url: '/ear-infection',
      templateUrl: 'views/wellness-library/blogs/earInfectionTemp.html',
      controller: 'mainCtrl',
    })
    .state('fibromyalgiaCon', {
      url: '/fibromyalgia',
      templateUrl: 'views/wellness-library/blogs/fibromyalgiaTemp.html',
      controller: 'mainCtrl',
    })
    .state('frozenShoulderCon', {
      url: '/frozen-shoulder',
      templateUrl: 'views/wellness-library/blogs/frozenShoulderTemp.html',
      controller: 'mainCtrl',
    })
    .state('headachesCon', {
      url: '/headaches',
      templateUrl: 'views/wellness-library/blogs/headachesTemp.html',
      controller: 'mainCtrl',
    })
    .state('lowerBackPainCon', {
      url: '/lower-back-pain',
      templateUrl: 'views/wellness-library/blogs/lowerBackPainTemp.html',
      controller: 'mainCtrl',
    })
    .state('osteoarthritisCon', {
      url: '/osteoarthritis',
      templateUrl: 'views/wellness-library/blogs/osteoarthritisTemp.html',
      controller: 'mainCtrl',
    })
    .state('osteoporosisCon', {
      url: '/osteoporosis',
      templateUrl: 'views/wellness-library/blogs/osteoporosisTemp.html',
      controller: 'mainCtrl',
    })
    .state('pinchedNerveCon', {
      url: '/pinched-nerves',
      templateUrl: 'views/wellness-library/blogs/pinchedNerveTemp.html',
      controller: 'mainCtrl',
    })
    .state('plantarFasciitisCon', {
      url: '/plantar-fasciitis',
      templateUrl: 'views/wellness-library/blogs/plantarFasciitisTemp.html',
      controller: 'mainCtrl',
    })
    .state('pregnancyPainCon', {
      url: '/pregnancy-pain',
      templateUrl: 'views/wellness-library/blogs/pregnancyPainTemp.html',
      controller: 'mainCtrl',
    })
    .state('sciaticaCon', {
      url: '/sciatica',
      templateUrl: 'views/wellness-library/blogs/sciaticaTemp.html',
      controller: 'mainCtrl',
    })
    .state('scoliosisCon', {
      url: '/scoliosis',
      templateUrl: 'views/wellness-library/blogs/scoliosisTemp.html',
      controller: 'mainCtrl',
    })
    .state('shoulderPainCon', {
      url: '/shoulder-pain',
      templateUrl: 'views/wellness-library/blogs/shoulderPainTemp.html',
      controller: 'mainCtrl',
    })
    .state('slippedDiskCon', {
      url: '/slipped-disk',
      templateUrl: 'views/wellness-library/blogs/slippedDiskTemp.html',
      controller: 'mainCtrl',
    })
    .state('stressCon', {
      url: '/stress',
      templateUrl: 'views/wellness-library/blogs/stressTemp.html',
      controller: 'mainCtrl',
    })
    .state('tennisElbowCon', {
      url: '/tennis-elbow',
      templateUrl: 'views/wellness-library/blogs/tennisElbowTemp.html',
      controller: 'mainCtrl',
    })
    .state('upperBackNeckPainCon', {
      url: '/upper-back-neck-pain',
      templateUrl: 'views/wellness-library/blogs/upperBackNeckPainTemp.html',
      controller: 'mainCtrl',
    })
    .state('whiplashCon', {
      url: '/whiplash',
      templateUrl: 'views/wellness-library/blogs/whiplashTemp.html',
      controller: 'mainCtrl',
    })
    .state('workInjuriesCon', {
      url: '/work-injuries',
      templateUrl: 'views/wellness-library/blogs/workInjuriesTemp.html',
      controller: 'mainCtrl',
    })
})
