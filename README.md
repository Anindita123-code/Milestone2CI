# Milestone 2 Project

# Nordics Art Galleria Search

## Overview :
The Nordic Arts Galleria Search is a search site for the Art Galleries of Nordic Countries namely
Åland, Denmark, Norway, Greenland, Faroe Island, Finland and Sweden. This site helps its users to filter by Country Name and display the Art gallery and Museums as a list, that are at a radius of 5000 from the marked latitude and longitudes for the respective countries.
The users can then select from one or more results from the filtered list of Art Galleries using the corresponding heart button and add these to a wishlist. The selected items from the Home page can be viewed in the My Wishlist page and optionally can be emailed to the email address that is provided by the user.

## UX:
This project aims to fulfil the user stories as mentioned below
1. As a user, I should be able to understand what the site offers. 
2. As a user, I should be able to filter by any of the specified Nordic country and display the locations of the galleries on the google map UI.
3. As a user, I should be able to see a little more details (viz Names, Addresses and the status) of the selected and marked locations on the google map for each country.
4. As a user, I should be able to select each gallery / Museum listed on the right / below and add them to a wishlist.
5. As a user, I should be able to clear my wishlist (all items together)
6. As a user, I should be able to view my wishlist of selected places using the corresponding heart button.
7. As a user, I should be able to delete individual wishlist items from the displayed list.
8. As a user, I should be able to send the wishlist to a pre-specified emailid.
9. As a user, I should be provided with necessary information and error messages (if any) 
10. As a user, I should be able to use the social links in the footer to connect the social media websites and contact the Nordic Galleria Search Team.

The wireframes of all the three pages of Nordic Art Galleria Search (Home Page, Wishlist Page and Error Page) are linked below for further references
This includes wireframes for both desktop and mobile 
[Wireframe Link](/assets/Wireframes/MS2Wireframes.pdf]) 

## Features

**Existing Features**
1. Allows the User to scan through a carousel which has pictures of Galleries around the seven Nordic Countries.
2. Allows the User to filter by listed country names to find the Galleries of that country and list the individual galleries with their names, address and current status.
3. Allows the user to select from the list of galleries and add them to a wishlist.
4. Allows the user to view their wishlist.
5. Allows the user to clear their wishlist.
6. Allows the user to delete individual items of their wishlist.
7. Allows the user to have the wishlist in their personal mailboxes by sharing their email ids.
8. Allows the user to contact the team, and connect with the Nordics art galleria search team through any of the social links (facebook, instagram, twitter or linkedin.

**Features left to be Implemented**
None

## Technologies used
The following technologies, frameworks and libraries have been used to create this website.
1. HTML5
2. CSS
3. Bootstrap framework [Bootstrap](https://getbootstrap.com)
4. Font Awesome [FontAwesome](https://fontawesome.com/v4.7.0/icons/)
5. Google Fonts [GoogleFonts](https://fonts.google.com/)
7. Javascript
8. Google Maps API.
9. EmailJs

## Testing

The [W3C Markup Validator](https://validator.w3.org/) has been used to validate all the HTML markup pages of the project - Valid

The [W3C CSS Validator](https://jigsaw.w3.org/) has been used to validate the CSS used in the project - Valid

The [javascript Validator](https://jshint.com/) has been used to validate the javascript in the project - Valid

This website has been tested manually using Google Chrome browser. The website works on mobile phones, Ipads and laptop screen sizes.

**Testing User Stories from User Experience (UX) Section**

**1. As a user, I should be able to understand what the site offers.**

* On opening the site, there is a short description on the left, detailing the working of the site. There is a carousel on the right which can take the user through the Art Museums of 7 Nordic countries. The user can use the previous or next symbols or the dot notations underneath to scroll through the images.

**2. As a user, I should be able to filter by any of the specified Nordic country and display the locations of the galleries on the google map UI.**

* As a user, I am able to hover through the round thumbnails of the various countries and I can see the names of the countries appear below the round thumbnail displays
* As a user, I am able to select one of the countries from the list, the selected country is highlighted in the list and the name of the selected country displays on top of this list
    * If the user is using a phone, instead of an ipad or a laptop screen. The list of countries are displayed as a dropdown instead of the picture thumbnails. On making a selection of country and hitting the search icon button here, the map is displayed below, and beneath this the list of places are displayed with the wishlist heart button as above.
When the user makes a selection of country, the selected country name is added to a session variable. - Tested OK

**3. As a user, I should be able to see a little more details (viz Names, Addresses and the status) of the selected and marked locations on the google map for each country.**

* As a user, after selecting the country from the list, I can see that the map is populated which shows the location markers of the Art Galleries and Museums of the selected country. The marked locations are displayed to the right side of the map showing up their names, addresses and their current status. Beside each named location on the right is a heart button, which indicates that the place can be selected to add to users wishlist
    * The location of each place is marked from A-Z such that, this is repeated if there more results - Tested OK
    * The name, address and the status of the search results on the map, are displayed dynamically by creating new elements as per the number of search results and this is displayed in the form of a scrollable list - Tested OK

**4. As a user, I should be able to select each gallery / Museum listed on the right / below and add them to a wishlist.**

* As a user, I am able to select any of the listed Galleries and Museums (which was retured as a result of the search) using the heart button. Once the selection is made, the heart button goes for a change in its display to indicate that the items have been added to the wishlist.
    * A dynamic array, is created when the user selects item in the wishlist, this array is stored in the local storage and can be verified - Tested OK
    * Before adding an item to the array in the local storage, the system would check, if this is already added to the array. If this is not found the system will add the item. Else this will be skipped so that duplicate items are not added to the array - tested OK
    * The system also takes care of addresses which has a single quote in any of the address like by replacing this with the ~ and then again showing the single quote on final display in the wishlist page - Tested OK

**5. As a user, I should be able to clear my wishlist (all items together)**

* As a user I am able to clear my wishlist and get notified once this is documentation
    * The wishlist menu item, has a dropdown menu, which has two options, 
        * Clear Wishlist - will remove the array from the local storage and show a notification of empty wishlist on the page - Tested OK
        * My Wishlist Page - will navigate to the wishlist page. - Tested OK

**6. As a user, I should be able to view my wishlist of selected addresses.**

* As a user, I am able to see the selected Galleries and Museums displayed in the wishlist page.
    * The menu option "My Wishlist Page" from the Wishlist dropdown menu, redirects me to the wishlist page, where my selected Galleries and Museums data is fetched from the local storage and displayed.
    * There are no duplicate entries in this list - Tested OK

**7. As a user, I should be able to delete individual wishlist items from the displayed list.**

* As a user, I am able to see a delete Icon with all the entries that are displayed in the wishlist page 
    * When I select a row for deletion, a confirm box pops up to make sure this is not being done accidentally - Tested OK
    * When I select Cancel in the confirm box, nothing happens and the list remains the same - Tested OK
    * When I select Ok in the confirm box, the item is removed from the listed entries and also from the array of the local storage. This entry is no longer there in the wishlist and has to be added again from the home page, if desierd - Tested OK

**8. As a user, I should be able to send the wishlist to a pre-specified emailid.**

* As a user, I am able to send this final list to my email id. The data is well formatted in the form of a table, with a table header and table rows, with alternate rows having a gray background color
    * When I select put an emailid in the box provided below and click on the button "Send my Wishlist". the system tries to send an email to the provided address using EmailJS. 
    * If the email is sent successfully, a notification message is displayed saying "Email Sent Successfully" a loader is displayed on the button just beside the text until a message is displayed - Tested OK
    * If an email is sent successfully by the system, I have been able to find a nicely formatted email sent from aartsandmore@gmail.com (a dummy email id) displaying my selected wishlist - Tested OK
    * If the email is not sent successfully due to invalid email id, a notification message is displayed saying "Email Sending Failed" and no email can be found in the given address - Tested OK

**9. As a user, I should be provided with necessary information and error messages (if any)**

* As a user, I am able to see a custom error page when there is a server side error while sending emails.
    * The site will redirect to an error page, if there are errors which tries to throw up a blank page. The error page redirects back to the home page - Tested OK

**10. As a user, I should be able to use the social links in the footer to connect to the social media websites and contact the Nordic Galleria Search Team.**

* As a user, I can connect to the Facebook, Instagram, Twitter and linkedIn websites home pages and send an email to aartsandmore@gmail.com using the "Contact US" [
    * When click on any of the social media links on the footer, a new window / tab opens and I am at the home page of the selected link - Tested OK
    * When I click on the Contact US icon at the middle of the footer, I am redirected the users outlook express new message page, with the emailid of aartsandmore@gmail.com in the mailto box. - Tested OK

## Further Testing
* The Website was tested on Google Chrome, Internet Explorer, Microsoft Edge and Safari browsers.
* The website was viewed on a variety of devices such as Desktop, Laptop, iPhone7, iPhone 8 & iPhoneX.
* A large amount of testing was done to ensure that all pages were linking correctly.

## Deployment

**GitHub Pages**
The project was deployed to GitHub Pages using the following steps...

    * a. Log in to GitHub and locate the GitHub Repository
    * b. At the top of the Repository (not top of page), locate the "Settings" Button on the menu.
    * c. Scroll down the Settings page until you locate the "GitHub Pages" Section.
    * d. Under "Source", click the dropdown called "None" and select "Master Branch".
    * e. The page will automatically refresh.
    * f. Scroll back down through the page to locate the now published site link in the "GitHub Pages" section.

## Credit
* The fonts used in this site has been taken from Google Fonts.
* AdobeXD - Desktop version for creating Wireframes for this project [AdobeXD] (https://www.adobe.com/products/xd.html)
* The images used in this site has been taken from depositimages and shutterstock and random search using google.
* For help on javascript, I have referred to the Javascript modules of Code Institute, [Stackoverflow](https://www.stackoverflow.com), W3C School and MDN.
* For html and css help, I have referred to W3C School and MDN.
* For Email Sending, I have referred to the documentation for EMailJS API
* For Google Map Search, I have referred to the documentation for Google Maps API.
* I am thankful to the Code Institute Mentor, for guiding me through this project by sharing critical insights on occasion when I needed them the most.
    