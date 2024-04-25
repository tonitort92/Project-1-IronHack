# Project-1-IronHack
Mid Term Project

Nombre del Proyecto: Circle Agency | IronHack Front-end Bootcamp 

In this folder you will find the main web assets of Circle website project





------------------ | HTML |------------------------------------------------

index.html: main file of the Circle website. Used to load the homepage and it's the default page that
the browser will open by default. It includes some sections to briefly introduce the brand. 

contact.html: this is the contact page where clients and users can interact with a form to submit 
their own inquiries and questions. It includes a form with several input fields

projects.html: in this html file you can find the main projects done by Circle, where we present the
most important ones


***
Main IDs of sections: #menu, #hamburguer-menu-open, #hamburguer-menu-closed, #home-content, #home-cta, #clients-bar, 
                      #recent-projects, #recent-projects-grid, #testimonial-section, #our-services, #contac-section,
                      #contact-page, #contact-form, #suscription-box

Other important tags: header, nav, nav ul, footer, .main-button, .project-card, .service-card
***



------------------ | CSS |------------------------------------------------

styles.css: we only have one stylesheet for this project with several media queries for 4 possible sizes. Those sizes
            are based on the best way to distribute the content rather than most common devices. 


***
Main Media Queries: (max-width:599px) --small devices, (min-width:600) and (max-width: 859px) --small devices with big screen or small tablets, 
                    (min-width:860) and (max-width: 1199px) --tablets or small laptops, (min-width:1200) --large devices
***



------------------ | JS |------------------------------------------------

functions.js: this file includes the main features that the webpage will have. The main functionalities are the following. 

***
Toogle Function: using #hamburger-menu-open and #hamburger-menu-closed we use .addEventListener type 'click' with arrow function to open and close
                 the hamburger menu when we are working in phone devices. Another .addEventListener type 'resize' supports the function by closing
                 and hiding the menu if we reescale to large device design.

Fetch of data: using the a Promise, through fetch method and blocks of try and catch, we create inside this block a function called retrieveBackData()
               to effectively serve images and text inside the website with no hassle. 
***





------------------ | INSTALLATION GUIDE |------------------------------------------------

1. Install Git and GitBash
2. Fork and Clone this repo from https://github.com/tonitort92/Project-1-IronHack in your computer
3. Open the project with VSCode or any preferred tool
4. If you have an host, server or virtual machine set up, you can push this project to your system. 
5. You might want to use platforms like Netlify if you want to test the project but you have not your own server.





TOOLS USED: HTML, CSS, JS, Visual Studio Code
LICENSE: FREE TO USE FOR ANY PURPOSE 
CONTACT: toni.tort92@gmail.com



- Enjoy and have a good day! 