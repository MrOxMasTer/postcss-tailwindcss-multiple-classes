<div align="center">
<h1>postcss-tailwind-multiple-classes</h1>

<p>Defining several classes at once for one variant</p>
</div>

---

[Installation](#installation)

## Installation

Installation depending on the developer

```
npm install --save-dev postcss-tailwindcss-multiple-classes
```

Creating a function and exporting it:

```javascript
// postcss.config.cjs
module.exports = {
  plugins: {
    // preferably better BEFORE tailwindcss
    "postcss-tailwindcss-multiple-classes": {
      separator: ",",
      opBracket: "(",
      clBracket: ")",
    },
    "tailwindcss/nesting": {},
    tailwindcss: {},
    autoprefixer: {},
  },
};
```
