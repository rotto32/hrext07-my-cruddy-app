/*
Init app
interact with DOM
interact with localstorage

 */

$(document).ready(function() {

 $(window).on('load', function(e) {
  var count = 1;
        if (localStorage.length > 0) {
            for (var prop in localStorage) {
                if (prop !== "length" && prop !== "key" && prop !== "setItem" && prop !== "getItem" && prop !== "removeItem" && prop !== "clear") {
                  if (count < localStorage.length){
                    console.log(count);
                    $('.other-users').append('<div class="user-profile-name"><h3>' + prop + '</h3><p>' + localStorage[prop] + '</p></div>');
                  } else {
                    console.log(count);
                    $('.your-profile').html('');
                    $('.your-profile').append('<div class="user-profile-name"><h3>' + prop + '</h3><p>' + localStorage[prop] + '</p><div class="favorites"><h3>Favorites</h3></div></div>');

                  }
                    //console.log(count);
                }
                count++;
            }

        }


    });



    $('.btn-add-person').on('click', function(e) {
        var profileName = $('.input-name').val();
        var profileDescription = $('.input-description').val();
        localStorage.setItem(profileName, profileDescription);
        $('.new-profile').css({ 'display': 'block' });
        $('.inputs').css({ 'display': 'none' });
        $('.btn-add-person').css({ 'display': 'none' });
        $('.new-restaurant').css({ 'display': 'block' });
        $('.your-profile').html('');
        $('.your-profile').append('<div class="user-profile-name"><h3>' + profileName + '</h3><p>' + profileDescription + '</p><div class="favorites"><h3>Favorites</h3></div></div>');

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
        $('.fav').css({ 'display': 'inline' });


    });

    $('.new-restaurant').on('click', function(e) {
        console.log(e);
        $('.inputs').css({ 'display': 'flex' });
        $('.btn-add-restaurant').css({ 'display': 'block' });
        $('.new-profile').css({ 'display': 'none' });
        $('.new-restaurant').css({ 'display': 'none' });
    });


    $(document).on('click', '.fav', function(e) {
        var tempData = $(".restaurant-profile-name").html();
        tempData = tempData.replace('fav', 'remove-fav');
        tempData = tempData.replace('Add to favorites', 'Remove from favorites');
        //tempData = '<div>'
        $(".favorites").append(tempData);
        $(".fav").css({ 'display': 'none' });

    });

     $(document).on('click', '.remove-fav', function(e){
      $('.favorites').html('');
      $('.favorites').prepend('<div class="favorites"><h3>Favorites</h3></div>');
      $('.fav').css({ 'display': 'inline' });
    })

    $('.btn-clear').click(function() {
        localStorage.clear();
        $('.container-data').text('');
    });

});