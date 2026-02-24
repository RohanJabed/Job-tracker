Question-1 :

## getElementById -> gets one element by its ID. 
## etElementsByClassName -> gets all elements with that class. 
## querySelector -> gets first element that matches a CSS selector. 
## querySelectorAll -> gets all elements that match a CSS selector.

Question-2 :

1.Create element

## const createElement = document.createElement('div');

2.Add content or class

## newcreateElement.innerText = "Job Tracker"; 

## newcreateElement.classlist.add("interview");

3.Insert into the page

## document.body.appendChild(newcreateElement); 
## document.body.prepend(newcreateElement);

Question-3 :

Event Bubbling means an event on a child element goes up to its parent elements automatically.

Example:

document.getElementById('button').addEventListener('click', function() { alert('Button clicked!'); });

Question-4 :

Event Delegation means putting an event listener on a parent element to handle events for its child elements.

Example:

const list = document.getElementById('list');

list.addEventListener('click', function(event) { if (event.target.tagName === 'LI') { alert('You clicked on ' + event.target.innerText); } });

Why useful: saves memory and code because you don’t need a separate listener for each child.

Question-5 :

preventDefault() --> Stops the default action

Example: event.preventDefault() prevents a link from opening

stopPropagation() --> Stops the event from bubbling up to parent elements

Example: event.stopPropagation() prevents the parents click event from running

