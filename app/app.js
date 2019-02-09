/*
Init app
interact with DOM
interact with localstorage

 */

$(document).ready(function(){
 


  $('.btn-add').on('click', function(e){
    var profileName = $('.input-name').val();
    var profileDescription = $('.input-description').val();
    localStorage.setItem("name", profileName);
    localStorage.setItem("description", profileDescription);
    $('.new-profile').css({'display':'block'});
    $('.inputs').css({'display': 'none'});
    $('.btn-add').css({'display': 'none'});
    $('.container-data').html('<div class="user-profile-name">'+profileName+'</div> <div class="user-profile-description">'+profileDescription+'</div>');
  });

  $('.new-profile').on('click', function(e){
    console.log(e);
    $('.inputs').css({'display': 'flex'});
    $('.btn-add').css({'display': 'block'});
    $('.new-profile').css({'display': 'none'});
  
  });

  $('.btn-clear').click(function(){
    localStorage.clear();
    $('.container-data').text('');
  });

});