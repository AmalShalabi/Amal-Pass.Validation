# HW NO. 22
## Password Validation

### *Background
I've chose patterns that's built with CSS code from [Gradient Magic](https://www.gradientmagic.com/).

### *::after 
In CSS, ::after creates a pseudo-element that is the last child of the selected element. I used it to add cosmetic content to an element (h5) with the content property (empty). 

### *JavaScript classList Property
The classList property is used for representing the value of the class elements which is a DOMTokenList object. It is a read-only property but we can modify its value by manipulating the classes used in the program. The JavaScript classList property which I used to perform different operations on the class elements:

### * The add() method:
 Which is used for adding one or more classes to the element.
### * The remove() method:
 which is used for removing one or more classes from the number of classes present in the element.

### *show/hide password for javascript
I attached an eventlistener to search for all elements with type="password" on the DOM.
For each found element we search for the "the word show" next to it, that must be wrapped inside same parent element to work "as is".If the type of the input isn't password means that it's already shown and the user clicked on "show-word", so we set the type to password again to hide the characters on it, and set the icon back to the original position.

### 
  I've downloaded the "v" icon in SVG from [remixicon](https://remixicon.com/)

### Password Validation
* Password length must be greater than 8 characters.
* A password should be In English alphanumeric.
* At least one letter of the password should be capital.
* At least one letter of the password should be small.
* At least one  a special character (@, $, !, &, etc)..
* Check for sequential numerical characters(less than three numbers)


