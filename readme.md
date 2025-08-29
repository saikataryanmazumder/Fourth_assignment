1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?

getElementById – gets one element by its ID.  
getElementsByClassName – gets multiple elements by class.  
querySelector – gets the first element that matches a CSS selector.  
querySelectorAll – gets all matching elements.

2. How do you create and insert a new element into the DOM?

First, create an element using createElement().  
Then, add content using innerText or innerHTML.  
Finally, insert it using appendChild().

3. What is Event Bubbling and how does it work?

Event bubbling means when you click an element, the event runs on that element, then moves up to its parent, grandparent, and so on — all the way to the body tag.  It’s the browser’s way of letting parent elements know something happened inside them.

4. What is Event Delegation in JavaScript? Why is it useful?

Event delegation means adding one event listener to a parent element to handle events for all its children.  
It’s useful because it reduces code and works with dynamic elements.

5. What is the difference between preventDefault() and stopPropagation() methods?

preventDefault() – stops the browser’s default action for an event.  
stopPropagation() – stops the event from bubbling up to parent elements.
