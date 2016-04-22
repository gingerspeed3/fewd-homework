#Intro to Responsive Design & Media Queries
Lab & Markdown by Lee Richardson for FEWD LA 19.

One size rarely fits all, right?  Luckily using responsive design patterns & CSS media queries, we can write conditional CSS styles for different conditions.  The most common situation we adjust for is browser width...with so many different possible devices we want to make sure our websites look good at all browser widths. 


**BIG WORD ALERT:** Media queries sounds like a fancy term...don't let that discourage you. They are easy!  All we do is give the browser some conditions, then write some CSS that apply when those conditions are met. 

In this exercise we're going to get some practice targeting different elements based on the width of the browser.  

###Objectives
For the purposes of this exercise there are three predefined browser widths, meant to be **Desktop**, **Tablet** and **Mobile**.  

Browser widths are defined as follows: 

**Desktop** - 960px width and larger  
**Tablet** - 600px - 959px width  
**Mobile** - 599px and smaller  

As a reminder the general syntax for a media query is as follows:  

```
@media (max-width: 959px) {

 /* CSS styles go here */

}
```

The desktop styles are already written for you. Try to do the following at each width using media queries:  

####Tablet
* Target the div with the class `container` - change the `width` to 600px, the `height` to 200px and change the `background-color` to anything.  
* Target the div with the class `box` - change the `font-size`, `font-family`, `font-weight` and text `color` properties. 
* Hide the div with the class `show-on-desktop`. (Target the element within the media query and set it to `display: none`)
* Show the div with the class `show-on-tablet`. (Target the element within the media query and set it to `display: block`)

####Mobile
* Show the div with the class `show-on-mobile`. (Target the element within the media query and set it to display: block)
* Hide the div with the class `show-on-tablet`. (Target the element within the media query and set it to `display: none`)
* Target the div with the class `container` and set the `width` to 460px, the `height` to 120px and change the `background-color` to something new.
* Target the div with the class `box` - change the `font-size`, `font-family` or any other font properties you wish. 

The end result should be text and images that change as you make the browser wider & narrower. Good times! 
