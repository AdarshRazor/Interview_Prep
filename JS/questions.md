> why do we use !DocTYPE



> Use of head tag

* useful for SEO
* include external links

> better place to lnk js link.

before body. 
accessing the dom element so if we put in head then it wont be able to use it.

> what if we use in head and still want to access the dom element

attribute defer tag - download side by and wait for the dom to compelete

also use async attributr only wait for downloading of js file but not html to parse

> difference between async attributr and defer attribute

> can we create a custom element in html

yes ! big yes. Powerful feature.
* Create a js class extends `class RedApple extends HTMLElement`.
* define it to the html using `customElements.define('red-apple',RedApple);`
* now we can use `red-apple` tag for HTML and `RedApple` tag for javascript.

but we have to use the html tag after the script has finished loading.

> display value of custom element. similar to span or div ?

* should be in-line

> In-line and block

in-line
* no width and height in in-line. no margin top and bottom to in-line. right and left we can give.
* taking width - how much req to render the component.
* padding: content will move left and right but for top and bottom wont. only the box height will increase.

block:
* we can give width and height
* every block start with next line. take parent container width. 

> display prop of images

* in-line and how is it possible. they are behave as external content. 

2 types of in-line element. replaced (comes through some source eg. image, video so we can give height width) and non-replaced(span, anchor we cannot give).

> what is box model. 

height and width of any elemnent.
in-line dont follow box model rule.

> data types in JS

premitive and non-premitive

> typeof class, function and array in JS

> what are promises ?

> create a 