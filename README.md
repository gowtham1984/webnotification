# WebNotification
jQuery plugin for HTML5 Web notifications plugin Chrome, Firefox, Safari with callback support

The Web Notifications API allows a web page to send notifications that are displayed outside the page at the system level. This allows web apps to send information to a user even if the application is idle. Useful to send notifications when the browser tab/window is not in focus and the application wants to notify the user. 

<h3>Usage:</h3>
-------
<h4>Check the Browser permissions for sending notifications.</h4><br/><br/>
<b>Basic Usage:</b> WebNotification.init() <br/><br/>
<b>With a callback:</b> WebNotification.init({
                    callback : function(permission) {
                        alert(permission);
                    }
                  });
                  
Permissions can be <b>default, granted, denied </b>


<h4>Sending notifications.</h4><br/><br/>
jQuery(document).WebNotification({
                    title: 'Title goes here',
                    body: 'Body goes here'
});

See full example <a href="https://jsfiddle.net/gowtham1984/ahfnzec2/">here</a>



sdgsd






