# printer.js
A simple library to help you quickly create animations and visualizations using the HTML5 canvas.

## Introduction
This library has two main components.
1. Its ability to ease the time and effort required to set up an HTML5 canvas.
2. Provide a number of helpful 'utilities' that will make drawing, writing and making significantly easier.

## Getting Started
To get started, simply populate an html file with the following (or use the one provided):
1. A basic html structure
2. Reference to printer.js
3. In either a separate .js file or inline, create a setup() function as well as a draw() function.

Sample html document:
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
Be sure to create a main.js file and keep printer.js in the same directory as the HTML document.

## Functions

#### print() and log()
Quickly output text to the console.log.

#### random(a, b)
Provide a random number between a and b. If only one input is given, a random number between 0 and a is returned.

#### circle(x, y, size, colour)
Places a circle at the given point with the given properties.
