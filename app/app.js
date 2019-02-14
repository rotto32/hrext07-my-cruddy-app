/*
Init app
interact with DOM
interact with localstorage

 */

$(document).ready(function() {

 $(window).on('load', function(e) {
  var count = localStorage.length;
        if (localStorage.length > 0) {
            for (var prop in localStorage) {
                if (prop !== "length" && prop !== "key" && prop !== "setItem" && prop !== "getItem" && prop !== "removeItem" && prop !== "clear") {
                  var id = prop.split(' ');
                  id = id[0].toLowerCase();
                  id = id.replace(":", "-" )
                  if (count === localStorage.length){

                    if (prop[0] === "u") {
                      $('.your-profile').html('');
                      $('.your-profile').append('<div class="user-profile-name"><h3>' + prop.slice(2) + '</h3><p>' + localStorage[prop] + '</p><button class="update">Update Profile</button><div class="favorites"><h3>Favorites</h3></div></div>');
                    } else if (prop[0] === "r"){
                      $('.restaurants').append('<div class="restaurant-profile-name"><div class='+id+'><h3>' + prop.slice(2) + '</h3> <p>' + localStorage[prop] + '</p><button class="fav" id=b:'+id+'>Add to favorites</button></div></div>');
                    }
                  } else {

                    if (prop[0] === "u") {
                      $('.other-users').append('<div class="user-profile-name"><h3>' + prop.slice(2) + '</h3><p>' + localStorage[prop] + '</p></div>');
                    } else if (prop[0] === "r"){
                      $('.restaurants').append('<div class="restaurant-profile-name"><div class='+id+'><h3>' + prop.slice(2) + '</h3> <p>' + localStorage[prop] + '</p><button class="fav" id=b:'+id+'>Add to favorites</button></div></div>');
                    }
                   
                  }
                    //console.log(count);
                }
                count--;
            }

        }


    });



    $('.btn-add-person').on('click', function(e) {
        var profileName = $('.input-name').val();
        var profileDescription = $('.input-description').val();
        localStorage.setItem("u:"+profileName, profileDescription);
        $('.new-profile').css({ 'display': 'block' });
        $('.inputs').css({ 'display': 'none' });
        $('.btn-add-person').css({ 'display': 'none' });
        $('.new-restaurant').css({ 'display': 'block' });
        $('.your-profile').html('');
        $('.your-profile').append('<div class="user-profile-name"><h3>' + profileName + '</h3><p>' + profileDescription + '</p><button class="update">Update Profile</button><div class="favorites"><h3>Favorites</h3></div></div>');

    });


    $('.btn-add-restaurant').on('click', function(e) {
        var profileName = $('.input-name').val();
        var profileDescription = $('.input-description').val();
        var id = profileName.split(' ');
        id = id[0].toLowerCase();
        localStorage.setItem("r:"+profileName, profileDescription);
        $('.new-profile').css({ 'display': 'block' });
        $('.inputs').css({ 'display': 'none' });
        $('.btn-add-restaurant').css({ 'display': 'none' });
        $('.new-restaurant').css({ 'display': 'block' });
        $('.restaurants').append('<div class="restaurant-profile-name"><div class='+id+'><h3>' + profileName + '</h3> <p>' + profileDescription + '</p><button class="fav" id=b:'+id+'>Add to favorites</button></div></div>');
    });

    $('.new-profile').on('click', function(e) {
        //console.log(e);
        $('.inputs').css({ 'display': 'flex' });
        $('.btn-add-person').css({ 'display': 'block' });
        $('.new-profile').css({ 'display': 'none' });
        $('.new-restaurant').css({ 'display': 'none' });
        $('.fav').css({ 'display': 'inline' });


    });

    $('.new-restaurant').on('click', function(e) {
        //console.log(e);
        $('.inputs').css({ 'display': 'flex' });
        $('.btn-add-restaurant').css({ 'display': 'block' });
        $('.new-profile').css({ 'display': 'none' });
        $('.new-restaurant').css({ 'display': 'none' });
    });

    $(document).on('click', '.update', function(e){
      $('.update').css({'display': 'none'});
      $('.your-profile').prepend('<div class="add-new-description"><input type="text" class="new-description" placeholder="What\'s new?"><button class="update-profile">Update</button><button class="cancel">Cancel</button></div>');

    });

    $(document).on('click', '.update-profile', function(e){
      var tempProfile = $('.user-profile-name').html();
      var indexEnd = tempProfile.search('</');
      tempProfile = tempProfile.slice(0, indexEnd);
      tempProfile = tempProfile.slice(4);
      var newDescription = $('.new-description').val();
      //console.log(newDescription);
      localStorage.setItem(tempProfile, newDescription);
      $('.your-profile').html('');
      $('.your-profile').append('<div class="user-profile-name"><h3>' + tempProfile + '</h3><p>' + newDescription + '</p><button class="update">Update Profile</button><div class="favorites"><h3>Favorites</h3></div></div>');
    });

    $(document).on('click', '.cancel', function(e){
      $('.add-new-description').html('');

    });


    $(document).on('click', '.fav', function(e) {
        var buttonId = $(this).attr('id');
        buttonId = buttonId.slice(2);
        buttonId = '.' + buttonId;
        console.log(buttonId);
        
        var tempData = $(buttonId).html();
        console.log(tempData);
        tempData = tempData.replace('fav', 'remove-fav');
        tempData = tempData.replace('Add to favorites', 'Remove from favorites');
        //console.log($(".restaurant-profile-name"));
        tempData = '<div class='+buttonId.slice(1)+'-fav>' + tempData;
        tempData = tempData + '</div>';
        console.log(tempData);
        $(".favorites").append(tempData);
        //$(".fav").css({ 'display': 'none' });

    });

     $(document).on('click', '.remove-fav', function(e){
       var buttonId = $(this).attr('id');
        buttonId = buttonId.slice(2);
        buttonId = '.' + buttonId + '-fav';
        console.log(buttonId);
      $(buttonId).html('');
      //$('.favorites').prepend('<h3>Favorites</h3>');
      //$('.fav').css({ 'display': 'inline' });
    })

    $('.btn-clear').click(function() {
        localStorage.clear();
        $('.other-users').text('');
        //$(document).reload();
    });

});








