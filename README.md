#backbone-responsive-example
---
###[**Live Demo**](http://blessenm.github.io/backbone-responsive-example/)

A trivial example to show the usage of backbone + requirejs + jquery mobile and handlebars for a responsive web app.
 
There are many examples out there that show the usage of backbone + the other frameworks for creating either a standalone desktop or mobile app but not the both. Im trying to create a basic application to show how a desktop app with multiple views on the same page can be viewed as multiple pages on the mobile browser.

###Frameworks Or Libraries Used
| Framework/Library        | Version       |
|--------------------------|:-------------:|
| [RequireJs](https://github.com/jrburke/requirejs)         | 2.1.6 |
| [jQuery](https://github.com/jquery/jquery)                | 1.8.3 |
| [jQuery Mobile](https://github.com/jquery/jquery-mobile)  | 1.3.1 |
| [Underscore](https://github.com/documentcloud/underscore) | 1.4.4 |
| [Backbone](https://github.com/documentcloud/backbone)     | 1.0.0 |
| [Handlebars](https://github.com/wycats/handlebars.js)     | 1.0.0 |
| [EnquireJs](https://github.com/WickyNilliams/enquire.js)  | 2.0.2 |

###What I Needed
1. An application that will work both on the desktop and mobile browsers.
2. If the window resizes, the application should break into a single column or multi coulumn based on the window size.
3. If the application is started on a phone, multiple views should split into multiple pages.
4. Views should be resued for both desktop and mobile versions.
5. Avoid using a router and do navigation with a controller.

###A Brief Explanation Of What I Did
 1. The **index.html** is straight forward. I've only included the css for jQuery Mobile, app.css (our general css) and app-phone.css (Used when the app is viewed on the phone. Used [**media queries**](http://net.tutsplus.com/tutorials/html-css-techniques/quick-tip-a-crash-course-in-css-media-queries/) for this). The only script included here is RequireJs. The rest of the script dependencies are loaded via **main.js**
 2. In the **main.js** we specifiy the dependencies required for the app. [**Go here**](http://requirejs.org/docs/api.html) for more information on setting up the depedencies and routes. 
 3. **events.js** takes care of all the application level event handling. It handles the jQuery Mobile initial configuration. 
        $('div[data-role="page"]').live('pagehide', function (event, ui) {
          if($(event.currentTarget).attr('data-dom-remove')) {
            if (pages[pages.length-1] == event.currentTarget.id) {
              pages.pop();
              Globals.events.trigger("page:destroy", event.currentTarget.id);
            }
          }
        });
      
        $('div[data-role="page"]').live('pagebeforeshow', function (event, ui) {
          //Make sure the page has an id and it is not already present in the pages array.
          if (event.currentTarget.id && pages.indexOf(event.currentTarget.id) == -1) {
            pages.push(event.currentTarget.id);
          }
        });
 Callbacks are added to the **pagehide** and **pagebeforeshow** event of jQuery Mobile. They are used to determine which view should be destroyed during page navigation. The **pages** array is used to keep record of the new pages we navigate to. This array is used to make sure a view is only destroyed when we are going back to a previous page or else the view will be destroyed whenever its pagehide event is fired.
 
 To destroy a view, we trigger a **page:destroy** event. All the page views are bound to this event. We pass the view id when we trigger this event. This makes sure only the correct view gets destroyed.
 4. The application starts from the require call in main.js. Here we create the **controller** and **event dispatcher** instance. These 2 objects are set to the Globals object which is a singleton we use to pass around the application.
 
 I tried to avoid passing a global object around the app but I faced cyclic dependencies in the controller and view classes (controller depends on homeView and homeView depends on controller). So I used the Globals object.
 
        Globals.controller.start();
     
 The start method is called to check if the device is a phone or desktop. This is done by attaching a javascript listener to the media query object. I use EnquireJs for this. This is a one time check. Once you start the application, the mode(phone or desktop) will not change even if you resize the browser.
 
        Globals.controller.goToHomePage();
        
 It tells the application to load the first page.
 5. The **Controller** only has 3 kinds of functions - **start** (explained above), **goTo...** (goTo different pages or views) and the **changePage** (for switching jQuery Mobile pages).
 
 Every **goTo..** method has **3** sections
  * Check if the page already exists. If so, pass the page id and reverse attibute. Needed when going back to a previous page.
  * If its a new page, check if it is a phone or desktop. If phone, create new view and pass it to the changePage function.
  If desktop, create a view and append it to the passed el selector.
  
  **changePage** function is used to switch between pages when on the phone mode.
  
 6. **HomeView** is combination of a single page and a wrapper view. Its template holds div containers to hold the other views when the app is viewed on the desktop. So when any of the buttons (Get Activity or Get Repositories) are clicked an **el** and **user** value is passed to the controller. **el** is the selector in which the view gets appended to. **user** is the value we enter into the input box. We need to pass this to the collection object to make an api call.
  
 Here the controller decides whether to pass the **el** or not based on the **isPhone** check.
 7. **RepoCategoryView** and **ActivityView** are all kind of the same thing. It has a collection which fetchs the data. The render method of the view is called when the **reset** event of the collection is called.
 
 8. **RepoView**, **RepoCategoryView** and **ActivityView** extend from the **BaseView** class. **BaseView** has the **close** method to completely remove the view instance from the memory. Any common functionalities for the views can be implemented here.
 
 9. The markup for the application is inside the templates folder. The templates folder is split into 2 parts - **pages** and **partials**. The **pages** folder holds templates for each view. The **partials** folder hold templates that we can re-use such as header and footer of a page. The application uses **precompiled** templates. This is done using the Handlebars precompiler. [**Go here**](https://github.com/wycats/handlebars.js#precompiling-templates) for more information on the precompiler.
 
 If you need to modify or add a template to the **pages** folder, type the following command after the modification is made.
        handlebars pages/>../scripts/pageTemplates.js -a -b -e html
        
 If you need to modify or add a template to the **partials** folder, type the following command after the modification is made.
        handlebars partials/>../scripts/partialTemplates.js -a -b -p -e html
        
 You need to enter these commands from the **templates** folder location in the terminal.
 
 Both of these commands will compile all the html files in a folder and produce a compiled javascript file inside the scripts folder.
 
## Next Step
1. Support phonegap.
2. Build the application using r.js.
3. Improve the code wherever possible.
4. Maybe add marionette js. Should simplify a lot of stuffs.
5. Improve the README if needed.

##References
1. [David Possin - Using CSS Media Queries as a Data Transport](http://randomjavascript.blogspot.in/2013/02/using-css-media-queries-as-data.html)
2. [Christophe Coenraets - Using Backbone.js with jQuery Mobile](http://coenraets.org/blog/2012/03/using-backbone-js-with-jquery-mobile/)
 
##Issues Or Contributions
* If you have an idea to improve the application and its structure, let me know. It will help the community.
* If this helped you, spread the word.
* Post issues in the github issue tracker.
*  My email is blessenm@gmail.com
*  Pull requests are welcome.
*  [__LinkedIn Pofile__](http://in.linkedin.com/pub/blessan-mathew/24/605/730 "LinkedIn Profie")
*  [__Stack Overflow Pofile__](http://stackoverflow.com/users/548568/blessenm "Stack Overflow Pofile")