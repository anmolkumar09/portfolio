console.log('Anmol');



let darkMode = localStorage.getItem("darkMode");
if(darkMode == "true") // getting value for the darkmode using getItem() and it return 
{
    addDarkMode();
}

const btn = document.querySelector(".btn1").addEventListener("click",function()
{
    darkMode = localStorage.getItem("darkMode");

    if(darkMode == "true")
    {
        removeDarkMode();
    }
    else
    {
        addDarkMode();
    }
});

function addDarkMode()
{
    darkMode = localStorage.setItem("darkMode","true");
    document.getElementsByTagName("body")[0].classList.add("darkMode");
}
function removeDarkMode()
{
    darkMode = localStorage.setItem("darkMode","false");
    document.getElementsByTagName("body")[0].classList.remove("darkMode");
}

/*
Here's what we did in the javascript code.


We first try to get the value for the dark mode using the getItem() method. The getItem() method takes a key as its argument and returns the value for that key (if it is set) or null (if it is not).


The next thing we did, was to check if the value is set to true, and if it is, we call the addDarkMode() function which updates the value of the darkMode variable (the variable was declared at the top using the let keyword, so it can be updated) by setting the value of the darkMode key to true using the setItem() method.

The first argument of the setItem() method is the key, while the second argument is its value. Then we add the darkMode class to the body element. So those CSS styles under the darkMode class can be added.


The final thing we did, was to add a click event listener to our button after it has been queried from the DOM, we fetch the value of the darkMode from the localStorage and check if it is true, so we can call our addDarkMode() function or false so we can call our removeDarkMode() function. The removeDarkMode() function is the same with the addDarkMode() function; the only difference is that the removeDarkMode() function removes the darkMode class from the body element while the addDarkMode() function adds it.


Once you've clicked the switch button, the value for the dark mode is set and will always be remembered by the browser even when the page is refreshed or at the end of a session. This is the reason why we try to get the value of darkMode at the top of our javascript code. So that once the page reloads, or we visit our website again, It will first get the value that we have set previously and set the dark mode depending on what the value of the key may be (true or false).
*/