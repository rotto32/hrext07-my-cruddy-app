/*
Init app
interact with DOM
interact with localstorage

 */

$(document).ready(function() {



    $('.btn-add-person').on('click', function(e) {
        var profileName = $('.input-name').val();
        var profileDescription = $('.input-description').val();
        localStorage.setItem(profileName, profileDescription);
        $('.new-profile').css({ 'display': 'block' });
        $('.inputs').css({ 'display': 'none' });
        $('.btn-add-person').css({ 'display': 'none' });
        $('.new-restaurant').css({ 'display': 'block' });
        $('.users').append('<div class="user-profile-name"><h3>' + profileName + '</h3><p>' + profileDescription + '</p></div>');
         $(".user-profile-name").append("<div class='favorites'><h3>Favorites</h3></div>");
    });


      $('.btn-add-restaurant').on('click', function(e) {
        var profileName = $('.input-name').val();
        var profileDescription = $('.input-description').val();
        localStorage.setItem(profileName, profileDescription);
        $('.new-profile').css({ 'display': 'block' });
        $('.inputs').css({ 'display': 'none' });
        $('.btn-add-restaurant').css({ 'display': 'none' });
        $('.new-restaurant').css({ 'display': 'block' });
        $('.restaurants').append('<div class="restaurant-profile-name"><h3>' + profileName + '</h3> <p>' + profileDescription + '</p><button class="fav">Add to favorites</button></div>');
    });

    $('.new-profile').on('click', function(e) {
        console.log(e);
        $('.inputs').css({ 'display': 'flex' });
        $('.btn-add-person').css({ 'display': 'block' });
        $('.new-profile').css({ 'display': 'none' });
        $('.new-restaurant').css({ 'display': 'none' });


    });

    $('.new-restaurant').on('click', function(e) {
        console.log(e);
        $('.inputs').css({ 'display': 'flex' });
        $('.btn-add-restaurant').css({ 'display': 'block' });
        $('.new-profile').css({ 'display': 'none' });
        $('.new-restaurant').css({ 'display': 'none' });
    });

    $(document).on('click', '.fav', function(e){
      var tempData = $(".restaurant-profile-name").html();
      console.log(typeof tempData);
      tempData = tempData.replace('fav', 'remove-fav');
      tempData = tempData.replace('Add to favorites', 'Remove from favorites');
      console.log(tempData);
      $(".favorites").append(tempData);


    });

    $('.btn-clear').click(function() {
        localStorage.clear();
        $('.container-data').text('');
    });

});