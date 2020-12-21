# Milestone 2 Project

# Nordics Art Galleria Search
[Live Project Link](https://anindita123-code.github.io/Milestone2CI/)

## Table OF Content
- [Overview](#overview)
- [User Experience](#user-experience)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Testing](#testing)
- [Further Testing](#further-testing)
- [Known Bugs](#known-bugs)
- [Deployment](#deployment)
- [Credit](#credit)

## Overview 
The Nordics Art Galleria Search is a search site for the Art Galleries of Nordic Countries namely
Åland, Denmark, Norway, Greenland, Faroe Island, Finland and Sweden. This site helps its users to filter by Country Name and display the Art gallery and Museums as a list, that are at a radius of 5000 from the marked latitude and longitudes for the respective countries.
The users can then select from one or more results from the filtered list of Art Galleries using the corresponding heart button and add these to a wishlist. The selected items from the Home page can be viewed in the My Wishlist page and optionally can be emailed to the email address that is provided by the user.

## User Experience 
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
* None

## Technologies Used

**Languages Used**

* [HTML5](https://en.wikipedia.org/wiki/HTML5)
* [CSS3](https://en.wikipedia.org/wiki/CSS)
* JavaScript

**Frameworks, Libraries & Programs Used**

[Bootstrap 4.4.1](https://getbootstrap.com/docs/4.4/getting-started/introduction/):
* Bootstrap was used to assist with the responsiveness and styling of the website.

[Google Fonts](https://fonts.google.com/):
* Google fonts were used to import the 'Titillium Web' font into the style.css file which is used on all pages throughout the project.

[Font Awesome](https://fontawesome.com/):
* Font Awesome was used on all pages throughout the website to add icons for aesthetic and UX purposes.

[Git](https://git-scm.com/)
* Git was used for version control by utilizing the Gitpod terminal to commit to Git and Push to GitHub.

[GitHub](https://github.com/):
* GitHub is used to store the projects code after being pushed from Git.

[Adobe XD](https://www.adobe.com/products/xd.html):
* Adobe XD was used to create the wireframes during the design process.

**API's**
 1. [Google Maps API](https://cloud.google.com/maps-platform).
    The project Uses 
    * Maps JavaScript API
    * Places API
    * Google Cloud Storage JSON API

    **Creating API keys**
    The API key is a unique identifier that authenticates requests associated with your project for usage and billing purposes. You must have at least one API key associated with your project.
    To create an API key:
    * In the Cloud Console, on the project selector page, select or create a Google Cloud project for which you want to add an API Key.
    * Go to the project selector page
    * Go to the APIs & Services > Credentials page.
    * Go to the Credentials page
    * On the Credentials page, click Create credentials > API key.
    * The API key created dialog displays your newly created API key.
    * Click Close.
    * The new API key is listed on the Credentials page under API keys.
    (Remember to restrict the API key before using it in production.)

    For more information on Using and Restricting API keys please refer [here](https://developers.google.com/maps/documentation/javascript/get-api-key) 

2. [EmailJs API](https://www.emailjs.com/)

## Testing

The [W3C Markup Validator](https://validator.w3.org/) has been used to validate all the HTML markup pages of the project - Valid

The [W3C CSS Validator](https://jigsaw.w3.org/) has been used to validate the CSS used in the project - Valid

The [javascript Validator](https://jshint.com/) has been used to validate the javascript in the project - 
There has been a few warnings, but these are not majorly having a negetive effect and i am hoping these can be overlooked

This website has been tested manually using Google Chrome browser. The website works on mobile phones, Ipads and laptop screen sizes.

**Testing User Stories from User Experience (UX) Section**

**I. As a user, I should be able to understand what the site offers.**

* On opening the site, there is a short description on the left, describing the intention of the site. There is a carousel on the right which can take the user through the Art Museums of 7 Nordic countries. The user can use the previous or next symbols or the dot notations underneath to scroll through the images.
    1. Working of the carousel - The image changes when clicking on the previous or next icons, and also on the dots below, It shows the number of images on the top left hand corner. - No errors detected in the working of the carousel, however there may be some issues with the picture quality, and i believe those can be overlooked.
    2. When the site loads for the first time, sometimes it shows an error for favicon.ico. There is no favicon used for the code and this is not generated by any of the code pages. Otherwise the site loads smoothly
    3. The design changes when the width is reduced to cater for iphone and tabs. For larger width, a thumbnail list of countries are displayed. This changes into a dropdown list in an iphone - Tested OK
    4. Initially there is no country selected, and hence nothing is highlighted, and the map is initialized to a wider view of all Nordic Countries. - Tested OK
    5. The social links in the footer are currently linked to their respective home pages, as there is no account created for this project separately - Tested OK
    6. The navbar has two options "Home" and "Wishlist" which are linked to the respective pages. The wishlist option, lists a dropdown for clearning the wishlist or routing it to the wishlist page  - Tested OK

**II. As a user, I should be able to filter by any of the specified Nordic country and display the locations of the galleries on the google map UI.**
    1. I am able to select the country name, from the list of countries(as a mobile user) or the list of thumbnails of the countries(as an ipad or laptop user), which then displays the country maps with the location markers specifying the Art Galleries and Museums of the country. 
        This also displays the names and addresses of each individual gallery marked on the map. - Tested OK
    2. As a user, I am able to hover through the round thumbnails (for larger screen size only) of the various countries and I can see the names of the countries appear below the round thumbnail displays - Tested OK
    3. As a user, I am able to select one of the countries from the list, the selected country is highlighted in the list. The name of the selected country displays on top of this list - Tested OK
    4. When the user makes a selection of country, the selected country name is added to a session variable.  - Tested OK

**III. As a user, I should be able to see a little more details (viz Names, Addresses and the status) of the selected and marked locations on the google map for each country.**

* As a user, after selecting the country from the list, I can see that the map is populated which shows the location markers of the Art Galleries and Museums of the selected country. The marked locations are displayed to the right side of the map showing up their names, addresses and their current status. Beside each named location on the right is a heart button, which indicates that the place can be selected to add to users wishlist
    1. The location of each place is marked from A-Z such that, this is repeated if there more results - Tested OK
    2. The name, address and the status of the search results on the map, are displayed dynamically by creating new elements as per the number of search results and this is displayed in the form of a scrollable list - Tested OK

**IV. As a user, I should be able to select each gallery / Museum listed on the right / below and add them to a wishlist.**

* As a user, I am able to select any of the listed Galleries and Museums (which was retured as a result of the search) using the heart button. Once the selection is made, the heart button goes for a change in its display to indicate that the items have been added to the wishlist.
    1. A dynamic array, is created when the user selects item in the wishlist, this array is stored in the local storage and can be verified - Tested OK
    2. Before adding an item to the array in the local storage, the system would check, if this is already added to the array. If this is not already found in the list, the system will add the item. Else this will be skipped so that duplicate items are not added to the array - tested OK
    3. The system also takes care of addresses which has a single quote in any of the address like by replacing this with the ~ and then again showing the single quote on final display in the wishlist page - Tested OK

**V. As a user, I should be able to clear my wishlist (all items together)**

* As a user I am able to clear my wishlist and get notified once this is done
    * The wishlist menu item, has a dropdown menu, which has two options, 
        1. Clear Wishlist - will remove the array from the local storage and show a notification of empty wishlist on the page - Tested OK
        2. My Wishlist Page - will navigate to the wishlist page, where the selected wishlist items are displayed by iterating through the list of the array of the localstorage. - Tested OK

**VI. As a user, I should be able to view my wishlist of selected addresses.**

* As a user, I am able to see the selected Galleries and Museums displayed in the wishlist page.
    1. The menu option "My Wishlist Page" from the Wishlist dropdown menu, redirects me to the wishlist page, where my selected Galleries and Museums data is fetched from the local storage and displayed.
    2. There are no duplicate entries in this list - Tested OK

**VII. As a user, I should be able to delete individual wishlist items from the displayed list.**

* As a user, I am able to see a delete Icon with all the entries that are displayed in the wishlist page 
    1. When I select a row for deletion, a confirm box pops up to make sure this is not being done accidentally - Tested OK
    2. When I select Cancel in the confirm box, nothing happens and the list remains the same - Tested OK
    3. When I select Ok in the confirm box, the item is removed from the listed entries and also from the array of the local storage. This entry is no longer there in the wishlist and has to be added again from the home page, if desierd - Tested OK

**VIII. As a user, I should be able to send the wishlist to your emailid.**

* As a user, I am able to send this final list to my email id. The data is well formatted in the form of a table, with a table header and table rows, with alternate rows having a gray background color
    1. When I select put an emailid in the box provided below and click on the button "Send my Wishlist". the system tries to send an email to the address provided using EmailJS.
        Before sending the email, the system checks if there are any items in the wishlist, and if the email id is valid. In case when no items are there in the wishlist, or email id is not valid, an appropriate error message is displayed - Tested OK
        EmailJS returns error 412 (Preconditions Failed) - as it treats email id's without @ as invalid. Also there should be atleast 2 characters after @. This error has been captured and appropriately displayed to the user.
    2. If the email is sent successfully, a notification message is displayed saying "Email Sent Successfully" a loader is displayed on the button just beside the text until a message is displayed - Tested OK
    3. If an email is sent successfully by the system, I have been able to receive a well formatted email sent from aartsandmore@gmail.com (a dummy email id) displaying my selected wishlist - Tested OK
    4. If the email is not sent successfully due to invalid email id, a notification message is displayed saying "Email Sending Failed" and no email can be found in the given address - Tested OK
        The system also shows an error message is no email id is provided before using the "send email" button 

**IX. As a user, I should be provided with necessary information and error messages (if any)**

* As a user, I am notified if the email has been sent successfully, or if the email sending has failed due to various reasons. If there is a failure to process the email request by EmailJS. I am able to see a custom error page.
    1. The site will redirect to an error page, if there are errors which tries to throw up a 404 blank page. The error page redirects back to the home page - Tested OK

**X. As a user, I should be able to use the social links in the footer to connect to the social media websites and contact the Nordic Galleria Search Team.**

* As a user, I can connect to the Facebook, Instagram, Twitter and linkedIn websites home pages and send an email to aartsandmore@gmail.com using the "Contact US" 
    * When click on any of the social media links on the footer, a new window / tab opens and I am at the home page of the selected link - Tested OK
    * When I click on the Contact US icon at the middle of the footer, I am redirected the users outlook express new message page, with the emailid of aartsandmore@gmail.com in the mailto box. - Tested OK

## Further Testing
* The Website was tested on Google Chrome, Internet Explorer, Microsoft Edge and Safari browsers.
* The website was viewed on a variety of devices such as Desktop, Laptop, iPhone7, iPhone 8 & iPhoneX.
* The project has been published in peer-code-review channel on slack community of Code Institute and all the code review comments have been incorporated.

## Known Bugs
On trying to send email to an invalid email id, the EMailJS service returns a 412 (Precondition Failed) error in the Console. This has been captured in code and appropriately handled

## Deployment

**GitHub Pages**
The project was deployed to GitHub Pages using the following steps...

    STEP 1 - Log in to GitHub and locate the [GitHub Repository](https://github.com/Anindita123-code/Milestone2CI)
    STEP 2 - At the top of the Repository (not top of page), locate the "Settings" Button on the menu.    
    STEP 3 - Scroll down the Settings page until you locate the "GitHub Pages" Section.
    STEP 4 - Under "Source", click the dropdown called "None" and select "Master Branch".
    STEP 5 - The page will automatically refresh.
    STEP 6 - Scroll back down through the page to locate the now published site link in the "GitHub Pages" section.

**Forking the GitHub Repository**
By forking the GitHub Repository we make a copy of the original repository on our GitHub account to view and/or make changes without affecting the original repository by using the following steps...

    STEP 1 - Log in to GitHub and locate the GitHub Repository
    STEP 2 - At the top of the Repository (not top of page) just above the "Settings" Button on the menu, locate the "Fork" Button.
    STEP 3 - You should now have a copy of the original repository in your GitHub account.

**Making a Local Clone**

    STEP 1 - Log in to GitHub and locate the GitHub Repository
    STEP 2 - Under the repository name, click "Clone or download".
    STEP 3 - To clone the repository using HTTPS, under "Clone with HTTPS", copy the link.
    STEP 4 - Open Git Bash
    STEP 5 - Change the current working directory to the location where you want the cloned directory to be made.
    STEP 6 - Type git clone, and then paste the URL you copied in Step 3.

    $ git clone https://github.com/YOUR-USERNAME/YOUR-REPOSITORY
    
    STEP 7 - Press Enter. Your local clone will be created.

    $ git clone https://github.com/YOUR-USERNAME/YOUR-REPOSITORY

## Credit
* The fonts used in this site has been taken from Google Fonts.
* AdobeXD - Desktop version for creating Wireframes for this project [AdobeXD] (https://www.adobe.com/products/xd.html)
* The images used in this site has been taken from depositimages and shutterstock and random search using google.
* For help on javascript, I have referred to the Javascript modules of Code Institute, [Stackoverflow](https://www.stackoverflow.com), W3C School and MDN.
* For html and css help, I have referred to W3C School and MDN.
* For Email Sending, I have referred to the documentation for EMailJS API
* For Email address Validation, I have referred for Regular expressions match in Javascript code from W3C School.
* For Google Map Search, I have referred to the documentation for Google Maps API.
* I am thankful to my Mentor from Code Institute for guiding me through this project by sharing critical insights on occasion when I needed them the most.
    