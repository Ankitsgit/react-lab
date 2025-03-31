# React Props & Tailwind CSS: Deep Dive

## 1. Understanding Props in React

### What are Props?
Props (short for "properties") are used to pass data from a parent component to a child component in React.

- Think of them as function arguments that help customize child components dynamically.
- Props enable component reusability, making the UI scalable and maintainable.

### How to Pass Props?
In React, props are passed using attributes inside JSX.

```jsx
function App() {
  return <Card userName="Chai aur Code" buttonText="Click Me" />;
}
```
Here, `userName` and `buttonText` are props passed to the `Card` component.

### Accessing Props in Child Components
Inside a child component, props are accessible as an object.

**Example (Card.jsx):**

```jsx
function Card(props) {
  return <h2>{props.userName}</h2>;
}
```

#### Console Logging Props:

```jsx
console.log(props); 
// Outputs { userName: "Chai aur Code", buttonText: "Click Me" }
```

---

## 2. React Component Reusability with Props
Instead of hardcoding multiple components, props allow one flexible component to handle different data.

```jsx
function App() {
  return (
    <>
      <Card userName="Alice" buttonText="Follow" />
      <Card userName="Bob" buttonText="Message" />
    </>
  );
}
```
The same `Card` component is reused with different `userName` and `buttonText` values.

---

## 3. Passing Different Data Types as Props

### Strings:
```jsx
<Card userName="Chai aur Code" />
```

### Numbers:
```jsx
<Card followers={5000} />
```

### Arrays:
```jsx
<Card topics={["React", "JS", "CSS"]} />
```

### Objects:
```jsx
const userInfo = { name: "Hitesh", age: 25 };
<Card user={userInfo} />
```

### Boolean:
```jsx
<Card isOnline={true} />
```

### Functions (callbacks for event handling):
```jsx
function handleClick() {
  alert("Button clicked!");
}
<Card onClick={handleClick} />
```
> When passing JavaScript expressions (arrays, objects, functions), wrap them in `{}`.

---

## 4. Destructuring Props for Cleaner Code
Instead of using `props.userName`, destructuring extracts props directly:

```jsx
function Card({ userName, buttonText }) {
  return <button>{buttonText}</button>;
}
```

### Benefits:
✅ Cleaner and more readable code.
✅ Avoids repetitive `props.` prefix.

---

## 5. Setting Default Prop Values

### Why? 
Ensures components don’t break if a prop is missing.

### Method 1: Using OR (`||`) Operator
```jsx
function Card({ buttonText }) {
  return <button>{buttonText || "Visit Me"}</button>;
}
```

### Method 2: Default Parameter in Destructuring (Preferred)
```jsx
function Card({ buttonText = "Visit Me" }) {
  return <button>{buttonText}</button>;
}
```

> **Best practice:** Use default parameters for cleaner code.
