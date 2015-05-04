# Angular-Directive-Project

Directives range from very basic to extremely complex. This project will build up to some somewhat difficult directives. Keep in mind that the format we're learning for directives is the same format used to build some extremely complex things in angular. Using directives often and well is one way to show you're a talented developer.

## Starting Out
We've included only a few things for you to begin with. `index.html`, `app.js`, `styles.css`. At this point the best way to get more comfortable with angular is to initialize an app without relying heavily on boilerplate code (reusable code that starts out your projects for you).

You'll notice that in the `index.html` we've included the angular-route CDN. Yes, we'll be using angular's router here. Put an `ng-view` into your `index.html`.
- In your `app.js` set up a `config` and set up our first route for when a user is at the `'/home'` url. *If you're having trouble remembering how to set up the router go look at how you set up the router on the previous project. One way these projects will be beneficial to you is allowing you to look back at something **you** did and seeing how **you** got that something to work.*
- You may also want add an otherwise that defaults to `/home`.
- Create a controller and a template file for this route in your `app` folder. *Don't forget to include the controller as a script in your index.html*
- Check that everything is hooked up correctly. Try adding a div with some text in your home template just to make sure it's showing up. Once you've got that going you're ready to start on some directives.

Now let's make our directive. We'll start with a simple one that we can use to display information passed to it.

## Step 1. Start your directive
Woot. When you're initializing your directive just remember that it works very similarly to how you start up a controller or a service.
It can also be very helpful to think of your directive as a route.
- Create your directive. You'll use the directive method on your angular module. It takes two arguments, the name `string` and the callback function, which will return the object that represents your directive.
- When naming your directive give it a name with two words; `dirDisplay` would be nice, but anything works. *Just remember it's best practice to give a directive a camel case name so that it's clear in your html what it is.*
- Also we're going to need a template html for our directive. We could do it inline, but let's make another file instead. Just name it something that makes sense for the name of your directive and put it in the same directory as your directive file.
- For your template just make a `<div>` and inside a `<h1>` tag that says `User`.
- Now in your `home` route html add in your directive. It will look like this if you named it `dirDisplay`: `<dir-display></dir-display>`
- Start up your app and go to the home route. Check and make sure you see `User` where your directive was placed.
- If you're not seeing it at this point it could mean a few things. Here's some more common issues.
 - You didn't link your directive in your index as a script.
 - Your name for your directive doesn't match the name in your html. *Remember camel case becomes snake case so `myDirective` becomes `<my-directive></my-directive>`.*
 - You're file path to your html template is wrong. *You have to think of file paths in angular as relative to the index.*

## Step 2. Advancing directives
Your directive should be loaded up now, but it's not really doing much. Let's make it better.
- In your home controller. Make a variable on your `$scope` called user. Set it's value to 
```javascript
{
  name: "Geoff McMammy",
  age: 43,
  email: "geofdude@gmail.com"
}
```
- Now inside your directive's html specifically inside the `<h3>` tags display our new user's name.
- Then inside maybe some `<h4>` tags display his email and age.
*This is going to work exactly the same as if it was just inside your `home` controller.*
- Reload the page and make sure it works.

This is still very cosmetic and really not all that useful. It needs functionality.
- Add into your directive's object the `link` property.
- The link property's value is a function definition that takes (generally) three parameters. `scope`, `element`, and `attributes`.

Unlike in other places with angular injection these parameter names don't carry meaning. The first parameter will always represent your `$scope` for that directive, the second 
will always be the element that wraps your whole directive, and the third will always be an object containing all the properties and values of the attributes on your directive in the dom.
Try the following to get a feel for all three.
- Add two attributes to your directive in your html. Like this - `<dir-display test="myTest" my-check="checkItOut"></dir-display>`
- Now in the link property you've added `console.log` the three parameters in the function.

You'll see an object for `scope` that should look identical to the `$scope` of your html function.
For `element` you'll see an object the represents the DOM wrapper for your directive.
For `attributes` you'll see an object that will look like this:
```javascript
{
  test: "myTest",
  myCheck: "checkItOut"
}
```
An important thing to notice is how it has again converted snake case to camel case for you. `my-check` became `myCheck`.