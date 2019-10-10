# printer.js
A simple library to help you quickly create animations and visualizations using the HTML5 canvas.

## Introduction
This library has two main components.
1. Its ability to ease the time and effort required to set up an HTML5 canvas.
2. Provide a number of helpful 'utilities' that will make drawing, writing and making significantly easier.
<br><br>
In addition to making the built in canvas drawing functions easier to use, this library makes it easy to animate projects and provides built in screen resize handling.

## Getting Started
To get started, simply create an html file and copy the following (or download the premade file):

Sample HTML document:
```
<!DOCTYPE html>
<html>
  <head><title>Printer.js</title></head>
  <body>
    <script src="main.js"></script>
    <script src="printer.js"></script>
  </body>
</html>
```
Be sure to create a main.js file and download the printer.js file in the same directory as the HTML document.

Sample JavaScript file (contents of main.js or otherwise):
```
setup() {}

draw() {
  rect(50,50,50,50,"red");
}
```

Sample output (when you launch the HTML file):
```
A red square should appear in the top left corner of the page.
```
## Functions

#### print(value) and log(value)
Quickly output text to the console.log.

#### random(a, b)
Provide a random number between a and b. If only one input is given, a random number between 0 and a is returned.

#### circle(x, y, size, colour)
Places a circle at the given point with the given properties.

#### rect(x, y, height, width, colour)
Places a rectangle at the given point with the given properties.


#### line(x, y, x2, y2, width, colour)
Places a line at the given points with the given properties.


#### text(text, x, y, font, colour)
Displays a given string with the given properties.

#### clearCanvas()
Clears the entire canvas.


#### mouse()
Returns an object with information about the mouse's current state:
- mouse().x
- mouse().y
- mouse().down

#### randomColour()
Returns a string formatted RGB colour. This colour palette is bright and fun.
Ex: "rgb(255,255,255)"

#### crossVec(a,b)
Given two, 3-item arrays, this function returns the dot product of the given vectors.
Tip: If you have a 2D vector, simply enter 0 as the third value.


#### subVec(a,b){
Given two, 3-item arrays, this product returns the result of the subtraction of the vectors.
Tip: If you have a 2D vector, simply enter 0 as the third value.


#### function getDistance(a, b)
Given two, 2-item arrays, this function returns the distance between the two sets of points.
