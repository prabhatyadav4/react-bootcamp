# ⚛️ Lecture Notes — Custom React Library & JSX Internals

> 📺 **Source:** Chai aur Code — React Series (Timestamp: `0:00 - 45:50`)
> 🎯 **Goal:** Understand how React works under the hood by building a minimal custom renderer from scratch

---

## 🧠 What This Lecture Covers

How JSX and the Virtual DOM actually work — by building a tiny React-like library from scratch, and then peeking into the real React source code to see how close our custom version is.

---

## 📌 Key Concepts

### 1. 🧱 React Element = Plain JavaScript Object `(3:00 - 15:50)`

A React element is **not HTML** — it's just a JavaScript object with a specific structure:

```js
const reactElement = {
    type: 'a',              // HTML tag name
    props: {
        href: 'https://google.com',
        target: '_blank'
    },
    children: 'Click me to visit Google'   // content inside the tag
}
```

| Property | Purpose |
|----------|---------|
| `type` | The HTML tag to render (`'a'`, `'div'`, `'h1'`, etc.) |
| `props` | Object containing all attributes (`href`, `target`, `class`, etc.) |
| `children` | The inner content — text or another element |

> ⚠️ **Common Bug:** `Children` (capital C) ≠ `children` (lowercase c). JavaScript is case-sensitive!

---

### 2. 🔧 Custom Renderer — `customRender()` `(9:00 - 14:00)`

A function that takes the JS object and manually inserts it into the real DOM:

```js
function customRender(reactElement, container) {
    // 1. Create the actual DOM element
    const domElement = document.createElement(reactElement.type)

    // 2. Set inner content
    domElement.innerHTML = reactElement.children

    // 3. Set attributes
    domElement.setAttribute('href', reactElement.props.href)
    domElement.setAttribute('target', reactElement.props.target)

    // 4. Inject into the page
    container.appendChild(domElement)
}
```

---

### 3. ⚙️ Dynamic Attribute Handling `(15:50 - 18:30)`

Hardcoding `setAttribute` for every prop is bad. Use a loop instead:

```js
function customRender(reactElement, container) {
    const domElement = document.createElement(reactElement.type)
    domElement.innerHTML = reactElement.children

    // Dynamically handle ALL props — no hardcoding needed
    for (const prop in reactElement.props) {
        domElement.setAttribute(prop, reactElement.props[prop])
    }

    container.appendChild(domElement)
}
```

> ✅ Now the renderer works for **any element** with **any number of props** — just like the real React!

---

### 4. 🔬 `React.createElement` — The Real Deal `(30:30 - 32:55)`

Our `customRender` mimics exactly what React does internally. In real React, JSX like this:

```jsx
<a href="https://google.com" target="_blank">Click me</a>
```

Gets **compiled by Babel/Vite** into:

```js
React.createElement(
    'a',
    { href: 'https://google.com', target: '_blank' },
    'Click me'
)
```

Which returns the **same plain JS object** we built manually:

```js
{
    type: 'a',
    props: { href: 'https://google.com', target: '_blank' },
    children: 'Click me'
}
```

> 💡 **JSX is just syntactic sugar** — it always compiles down to `React.createElement()` calls.

---

### 5. 🧩 JSX & Expressions with `{}` `(34:00 - 38:00)`

Curly braces `{}` in JSX are used to **inject JavaScript expressions**:

```jsx
const username = 'Hitesh'
const link = 'https://google.com'

function App() {
    return (
        <div>
            <h1>Hello, {username}</h1>        {/* ✅ string variable */}
            <a href={link}>Visit Google</a>   {/* ✅ string variable */}
            <p>{2 + 2}</p>                    {/* ✅ expression → 4 */}
        </div>
    )
}
```

**Rules for `{}`:**
| ✅ Works | ❌ Doesn't Work |
|---------|----------------|
| Variables (`{name}`) | Statements (`{if(...)}`) |
| Expressions (`{2 + 2}`) | Objects directly (`{{key: val}}` needs wrapping) |
| Function calls (`{getName()}`) | Loops (`{for(...)}`) |

> 🔑 **Key rule:** Whatever is inside `{}` must **evaluate to a value**.

---

### 6. 🔍 React Source Code Deep Dive `(42:00 - 44:50)`

The instructor explores the real [`React.createElement`](https://github.com/facebook/react) source on GitHub. Key takeaways:

- React **validates** all props and children before creating the element object
- React adds extra internal fields like `$$typeof`, `key`, and `ref` on top of the basic structure we built
- The core idea is **identical** to our custom implementation — it's still just building a JS object

```js
// Simplified version of what React.createElement looks like internally
function createElement(type, props, ...children) {
    return {
        $$typeof: Symbol('react.element'),  // React's internal marker
        type,
        key: null,
        ref: null,
        props: {
            ...props,
            children: children.length === 1 ? children[0] : children
        }
    }
}
```

---

## 🗺️ Mental Model — The Full Flow

```
JSX Code
   ↓  (compiled by Babel/Vite)
React.createElement()
   ↓  (returns)
Plain JavaScript Object  { type, props, children }
   ↓  (processed by)
React DOM / Custom Renderer
   ↓  (inserts into)
Real Browser DOM  →  Visible Page 🎉
```

---

## ⚠️ Common Mistakes & Bugs

| Mistake | Why it breaks | Fix |
|--------|--------------|-----|
| `Children` instead of `children` | JS is case-sensitive | Use `children` (lowercase) |
| `<myComponent />` instead of `<MyComponent />` | React treats lowercase as HTML tag | Always capitalize component names |
| Using `{}` for statements like `if/for` | `{}` only accepts expressions | Use ternary or move logic outside JSX |

---

## 📝 Quick Revision Summary

- A **React element** is just a plain JS object with `type`, `props`, and `children`
- **JSX** is syntactic sugar that compiles to `React.createElement()`
- `React.createElement()` returns that plain JS object
- The **renderer** (ReactDOM) takes that object and builds the real DOM
- `{}` in JSX evaluates **expressions**, not statements
- Component names **must** be capitalized

---

*Notes by following the Chai aur Code React Series 🍵*