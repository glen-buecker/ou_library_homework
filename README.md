# OU Libraries Web Development Project

As part of your application, please create a single html page implementing an image gallery that fits the user store below. You will need to use html, css, and javascript to complete this exercise. 

Please work on this exercise for 1-2 hours. As you're working, create a `COMMENTS.txt` file and make notes on ambiguities that you found, assumptions that you made, or any other comments that you feel are relevant, and include that in the files that you send us as part of your submission (See below for instructions on submitting your work.) 

It is not neccessary to complete all requirements in the time alloted. If you run out of time, please note what you were able to complete, and what you would work on next in your `COMMENTS.txt` file. 

This is an open-book exercise so feel free to use any of the resources you would normally use in completing your work, but don't ask for help from others. 

Also, please fill free to contact us if you have any questions or need clearification on any points. 





## User Story
As a site visitor, I want to be able to view a number of images on a page as a gallery. 

I expect these images to be retrieved via the API provided and displayed in a dynamic layout that will work on mobile as well as large screens. 

I also expect the page to be accessible to visually impaired users and compatible with screen readers.

## Acceptance Criteria
**Feature: Page with header and navigation
Scenario: Page loaded**

* When I navigate to the URL of the site
Then I see a header with the title of the page as well as the title in the browser tab
And I see two navigation items: Gallery and Contact. Gallery is selected by default
And the entire page is semantic as well as accessible to screen readers and visually impaired users.

**Feature: Gallery
Scenario: Default when page is loaded or Gallery navigation is clicked**

* When I load the page initially or click the Gallery navigation item
Then the gallery of images is loaded in the main content of the page using the provided API
And the gallery is dynamic based on screen size and looks presentable on mobile as well as wide screens
And the images have any special styling you would like to add for added appeal
And the number of images ranges from 25-75. The gallery can include pagination if you wish or you can take creative control on how many to display at one time and how to display any additional images. 

**Feature: Contact
Scenario: Scroll to bottom or Contact navigation item is clicked**

* When I scroll to the bottom of the page or click the Contact navigation item
Then I see or am taken to the footer on the page with a fake number, fake email, and facebook (no page needed, just link to facebook.com) link to provide the user with means to contact the company
And the links should use the proper browser methods to activate each link according to its purpose.

## Resources
### Styling
As stated in the acceptance criteria, the page needs to be styled for small to large screen sizes. OU libraries uses bootstrap in multiple websites. 
Using Bootstrap is not required, but is a big plus!

### Photo API that is required
This project will use the "Jsonplaceholder" API to simulate retrieving images from a 3rd party API. 
This API will work with virtually any language, so feel free to use what you'd like. We use Javascript/Jquery in quite a few of our sites, so that would be a great choice if you are comfortable with it.  

[JSON Placeholder Guide](https://jsonplaceholder.typicode.com/guide/)

[JSON Placeholder Photos API link](https://jsonplaceholder.typicode.com/photos)

*Note: the documentation for the photos api is not super detailed, so it might help to know you can limit the number of photos retrieved by using the url param "_limit=NUM"*


## Submiting Your Work


### Cloning repo
Follow these instructions to clone the starter repo to a local copy. 
1. Clone the following repo to your computer locally: https://github.com/OULibraries/web_development_assignment
2. Use your existing [gitHub](https://github.com) account, or create a new one to create a new repo (NOTE: make repo public and do NOT click "Add README")
3. Add this repo contents (only index.html and README.md files) to YOUR new repo.
4. Please push to YOUR repo often if possible. A detailed commit history is a big plus. 
5. When completed, there are two options for submitting to the hiring manager.
   1. Use GitHub pages to deploy your site. This will provide you with a free hosted version of your site. To do this, navigate to your GitHub repository in the browser and then select the Settings tab on the right side of the page. On the Settings page, select Pages on the left side of the page. On the GitHub Pages screen, choose `main` in the dropdown under Source. Navigate to <your-github-username.github.io/your-repository-name> and you will find that your new webpage has gone live! For example, if your GitHub username is "lernantino" and the project is "css-demo-site", then your URL would be <lernantino.github.io/css-demo-site>. You can also refer to this [YouTube video on enabling GitHub Pages](https://youtu.be/P4Mu1t5rIXg) for more guidance.
   2. Add the css, html, and JS into a codepen or JSfiddle project and make sure it is saved. 
6. When one of the above is completed, send the hiring manager 2 links: 1) the link to your repo and 2) the link to you live site or codepen/jsfiddle. 
