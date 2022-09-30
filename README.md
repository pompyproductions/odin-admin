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
├── src/
│   ├── img/
│   └── sass/
│       ├── style.scss
│       ├── _boilerplate.scss
│       ├── _fonts.scss
│       └── _constants.scss
└── dist
    ├── index.html
    └── style.css
```

## SVG injection

I came across two JS libraries that solve the non-customizability issue in external SVGs:
* [svg-inject by iconfu](https://github.com/iconfu/svg-inject)
* [svg-loader by Shubham Jain](https://css-tricks.com/svg-loader-a-different-way-to-work-with-external-svg/)

I'm not sure about making it so complex, as I don't know if it's worth it. I'm planning on injecting the SVGs from [Material Design Icons](https://materialdesignicons.com). One such solution I found online was adding an "onload" function:

```html
<object type="image/svg+xml" data="illustration.svg"
onload="this.parentNode.replaceChild(this.contentDocument.documentElement, this);">
</object>
```

But instead of doing this with onload, I'm planning on loading a separate .js file, and run this on each object with a querySelectorAll(). THEN I'll also add the styling:

```js

```