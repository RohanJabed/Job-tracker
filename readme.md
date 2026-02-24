## What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?

### `getElementById()`
- Finds **one element** by its ID
- Returns a single element or `null`
- Fast and simple

### `getElementsByClassName()`
- Finds **all elements** with a specific class
- Returns a live HTMLCollection (updates automatically)
- Need to loop through results

### `querySelector()`
- Finds **the first element** that matches any CSS selector
- Returns a single element or `null`
- More flexible (can use any CSS selector)

### `querySelectorAll()`
- Finds **all elements** that match any CSS selector
- Returns a static NodeList

## How do you create and insert a new element into the DOM?

