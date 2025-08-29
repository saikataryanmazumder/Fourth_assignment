1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?

getElementById- gets one element by its ID.
getElementsByClassName-gets multiple elements by class
querySelector-gets the first element that matches a CSS selector.
querySelectorAll- gets all matching elements



2. How do you create and insert a new element into the DOM?

Frist I create a element using createElement() method. Then I put something in it as innerText or innerHTML. Finally I add the element in the document using appendChild() method.



3. What is Event Bubbling and how does it work?

Event bubbling means when we click on an element, the event first runs on that element, then moves up to its parent, then its grandparent and so on. All the way up to the body tag. It’s the browser’s way of letting parent elements know something happened inside them.



4. What is Event Delegation in JavaScript? Why is it useful?

Event delegation means we add one event listener to a parent element, and it handles events for all its child elements. It is useful beacuse we need less code and it handles dynamic elements.


5. What is the difference between preventDefault() and stopPropagation() methods?

preventDefault()- It stops the browser’s default action for an event.
stopPropagation()- It stops the event from bubbling up to parent elements.