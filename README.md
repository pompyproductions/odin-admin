# Odin Admin Dashboard assignment

## Overview

Another assignment from The Odin Project curriculum: an Admin Dashboard face, primarily built with CSS Grid.

Now apart from the "cards" window, this could easily be built with Flexbox too (my comfort zone), but I will try to implement CSS Grid wherever it is sensible to do so.

Also, this is a quite simple project, and it _could_ be handled with plain CSS; however, I will be using Sass (through Node.js and Gulp) for practice purposes. 

The initial idea for the folder structure is as follows:

```
(root)
├── README.md
├── .gitignore    
├── .gulpfile.js
├── package.json
├── package-lock.json
├── ref/
├── sass/
│   ├── style.scss
│   ├── _boilerplate.scss
│   └── ...
└── dist
    ├── img/...
    ├── svg/...
    ├── index.html
    ├── script.js
    ├── style.css
    └── ...
```

## SVG injection

I came across two JS libraries that solve the non-customizability issue in external SVGs:
* [svg-inject by iconfu](https://github.com/iconfu/svg-inject)
* [svg-loader by Shubham Jain](https://css-tricks.com/svg-loader-a-different-way-to-work-with-external-svg/)

After some testing, I decided to download SVGs from [Material Design Icons](https://materialdesignicons.com), and inject them using svg-inject. 

Adding event listener to the SVGs right after injection. By disabling pointer input on \<path\> elements, the clicking works smoothly (hits the SVG root instead of the path).


## Avatar placeholders

Using free .pngs I found on [Freepik](https://www.freepik.com/free-vector/find-person-job-opportunity_8063764.htm). Will attribute as follows:

```html
<a href="https://www.freepik.com/free-vector/find-person-job-opportunity_8063764.htm">Image by studiogstock</a> on Freepik
```