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
        $('.container-data').prepend('<div class="user-profile-name">' + profileName + '</div> <div class="user-profile-description">' + profileDescription + '</div>');
    });


      $('.btn-add-restaurant').on('click', function(e) {
        var profileName = $('.input-name').val();
        var profileDescription = $('.input-description').val();
        localStorage.setItem(profileName, profileDescription);
        $('.new-profile').css({ 'display': 'block' });
        $('.inputs').css({ 'display': 'none' });
        $('.btn-add').css({ 'display': 'none' });
        $('.new-restaurant').css({ 'display': 'block' });
        $('.container-data').prepend('<div class="restaurant-profile-name">' + profileName + '</div> <div class="restaurant-profile-description">' + profileDescription + '</div>');
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

    $('.btn-clear').click(function() {
        localStorage.clear();
        $('.container-data').text('');
    });

});