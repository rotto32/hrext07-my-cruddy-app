# FoodHub
Social media platform to connect with friends over food. Write reviews, favorite restaurants, and see where your friends are eating!


## Individual Tasks
----Major----
- [x] Ability to create restaurant profile
- [x] Ability to add favorite restaurants to personal profile
- [x] Ability to create multiple personal profiles
- [x] Load pre-existing data onto page on page load
- [x] Using the 'Delete everything' button removes the divs which have users and restaurants appended to them, so unable to add more stuff after using the delete button. Need to fix
- [x] Remove favorite from user
- [x] Adding to favorites only adds first restaurant, and adds to all profiles
- [x] Add an Update button on main profile

---Minor----
- [x] Change the description input to a larger text input box
- [x] Add a div around each profile (personal or restaurant)
- [x] Adding a new profile adds a new favs section to existing profiles
- [x] Need to fix bug where new users aren't being added to the page except on re-load
- [x] Need to fix bug where re-loading the page doesn't keep the most recent profile as the current user
- [x] Bug where re-adding restaurant after deleting adds it twice
- [x] On reload the page is no longer adding a user from local storage to the 'your profile' section
- [ ] Favorites doesn't work if restaurant name has punctuation
- [x] Add a button to move to profile

---Appearance---
- [x] Update the jumbotron with icons
- [x] style profiles
- [x] Update colors
- [x] Change the font
- [x] Place restaurants and profiles in different columns
- [x] Style buttons
- [x] The boxes for the profiles are acting funky depending on the amount of text in them. Need to adjust flex-box so they stay a regular size.


##Timeline
----Completed
 Added ability to add restaurant profiles on 2/11
 Made input box larger on 2/11
 Added ability to create multiple profiles at once on 2/11
 Added a div around users and restaurants in order to style profiles on 2/11
 Added favorite button which works but has bugs on 2/12
 Styled profiles on 2/12
 Updated colors and font on 2/12
 Styled buttons on 2/12
 Fixed favorites bugs on 2/12
 Added ability to load other profiles in localstorage on page load on 2/12
 Added functionality to remove button on 2/14
 Updated page to grab to display a user from localStorage on the 'your profile' section instead of default pn 2/14
 fixed bug with remove button on 2/14
 Fixed issue with users and restaurants not being sorted into the correct column on 2/14
 Fixed bug with default user being added to the your profile section instead of one from local storage on 2/14
 fix bugs with default user and current users on 2/15
 added multiple restuarants to user on 2/15
 added ability to select other users on 2/15



----To Do Still
2/15 - add ability to add profiles with punctuation

### MVP Reqs
- [ ] Ability to add Profile/Restaurant
- [ ] Ability to favorite restaurant & add to profile
- [ ] write simple reviews/ratings

### Advanced Reqs
- [ ] Update storage to be more permanent (MongoDB?)
- [ ] add tags to restaurants
- [ ] Write a review/integrate yelp reviews
- [ ] intergrate food order service/reservations
- [ ] buttons to share on social media
- [ ] categories of favorites

