angular.module('accidentApp').controller('mainCtrl', function($scope, $state, $http){

$(document).ready(function(){
  $('.servicesTab').mouseenter(function(){
    $('.servicesDropdown').slideDown('medium');
    $('.colorSerLine').slideDown('medium');
    $('.servicesTab').css('color','#58c5e1');
  })
  $('.servicesTab').mouseleave(function(){
    $('.servicesDropdown').slideUp('slow');
    $('.colorSerLine').slideUp('slow');
    $('.servicesTab').css('color','black');
  })

  $('.newPatientsTab').mouseenter(function(){
    $('.newPatientsDropdown').slideDown('medium');
    $('.colorNewLine').slideDown('medium');
    $('.newPatientsTab').css('color','#58c5e1');
  })
  $('.newPatientsTab').mouseleave(function(){
    $('.newPatientsDropdown').slideUp('slow');
    $('.colorNewLine').slideUp('slow');
    $('.newPatientsTab').css('color','black');
  })
  $('.wellnessLibraryTab').mouseenter(function(){
    $('.wellnessLibraryDropdown').slideDown('medium');
    $('.colorWelLine').slideDown('medium');
    $('.wellnessLibraryTab').css('color','#58c5e1');
  })
  $('.wellnessLibraryTab').mouseleave(function(){
    $('.wellnessLibraryDropdown').slideUp('slow');
    $('.colorWelLine').slideUp('slow');
    $('.wellnessLibraryTab').css('color','black');
  })
  $('.testimonialsTab').mouseenter(function(){
    $('.testimonialsDropdown').slideDown('medium');
    $('.colorTestLine').slideDown('medium');
    $('.testimonialsTab').css('color','#58c5e1');
  })
  $('.testimonialsTab').mouseleave(function(){
    $('.testimonialsDropdown').slideUp('slow');
    $('.colorTestLine').slideUp('slow');
    $('.testimonialsTab').css('color','black');
  })
})


})
