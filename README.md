# One in a Vermillion 🌈
<a href="https://itsoliviasparks-one-in-a-vermillion.netlify.app">🔗 Live Site</a>

## About
A cute <em>punny</em> little web app, that creates a rainbow based on user input.

## Project Purpose & Goal
One in a Vermillion is an exercise in manipulating the DOM exclusively with vanilla JavaScript (Library Free Zone! 🚫)

## Tech Stack
Vanilla JavaScript, SCSS, & HTML

## Development Process
I've been curious about drawing with CSS for a while, so I took this project as an opportunity to dip my toe, ever-so-slightly, into it by drawing a simple rainbow.

## Problems Solved
### Learning to Draw with CSS
I was able to create a semi-circle for each arch of the rainbow using CSS, but I could not figure out how to "cut out" a smaller semi-circle on the flat edge to create an arch. As a work-around, I've added an additional `div` with a background image that matches the sites background.

Going forward, I would love to do more research into creating shapes in CSS. I'd like to be able to successfully execute a true arch shape, without needed the additional `div` to create the centre of the semi-circle.

### 100vh on Mobile
Located in `sass/_main.scss`
```
main {
    height: 100vh;
    height: 100svh;
    overflow: hidden;
}
```
When I first coded this project, the site's height was set to `100vh`. On mobile, this caused an issue where the browser displayed a vertical scroll. After researching this issue, I learned that `100svh` is a much better option to achieve a full page on mobile. Because `svh` is not supported by all browsers I've kept a `vh` as a backup.
