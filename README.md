# Work-Day-Planner 📆
## As a user with a busy schedule, we want an app that will allow us to jot down appointments that we have for that day.

The starter code contained information that we could use to model our schedule. We wanted each slot to be color coded depending on what time of the day it was to indicate past, present or future. 

For this I created a function that involved each timeBlock class (this was in the text area portion where the used would write their appointments). 

In this function I created an if statement in which I would compare the time given with the actual realtime. 

* In order to do this I first created a "time" variable and gave it a value of moment.hours.
* I then created an if statement that would compare the variable "time" with the realTime variable that I created from the ID on the html (which was set to military time).
    * I made the if statement to be so if the var time was == to realTime then the color of the time block would be red (this attribute was already created in the stylesheet).
    * If the variable time was greater than (>) then I gave the time block an attribute of past which had the grey color on it
    * If neither of those were true then the attribute was set to future, which was green.

The next step was to create the click event that would trigger the saving to the local storage. In this click event I created a function that would save the value from the time block. First I had to set two variables:

* The first variable was the value we grabbed from the timeblock - this value was the text value from the timbeblock element. 
* The second variable is the time - this is the key that we input in the local storage to obtain the value. The time variable consists of the time element id from the html

I then used the local storage method to set time as the key and save that key with the corresponding value.

Lastly,  used localstorage . get item to retrieve this data from local storage and bring it to the screen. For this I grabbed each of the class elements from the html and assigned them a value of localstorage.get item - this way, if the key had an empty value it wouldn't retrieve anything.

## My overall experience:
This assignment was not as challenging for me, I am more comfortable with Jquery than I am with vaniall JavaScript so this, although it wasn't a piece of cake, it was more doable!

**Here is the link of my site!**
##