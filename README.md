<div align="center">
<h1>postcss-tailwind-multiple-classes</h1>

<p>Defining several classes at once for one variant</p>
</div>

---

## [The main plugin](https://www.npmjs.com/package/tailwindcss-multiple-classes?activeTab=readme)

CSS file support

[Installation](#installation)

## Demonstration

`Before:`

```css
.class {
	@apply mm:bg-red,text-green;
}
```

`After:`

```css
.class {
	@apply mm:bg-red mm:text-green;
}
```

## Installation

Installation depending on the developer

```
npm install --save-dev tailwindcss-multiple-classes postcss-tailwindcss-multiple-classes
```

Creating a function and exporting it:

```javascript
// postcss.config.cjs
module.exports = {
  plugins: {
    // preferably better BEFORE tailwindcss
    "postcss-tailwindcss-multiple-classes": {
      separator: ",",
      opBracket: "", // "("
      clBracket: "", // ")"
    },
    "tailwindcss/nesting": {},
    tailwindcss: {},
    autoprefixer: {},
  },
};
```
