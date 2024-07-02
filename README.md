
---
### Explanation :

```jsx
<div className="flex justify-center items-center h-screen bg-gray-100">` 
```

- **flex**: Applies a flexbox layout to the container.
- **justify-center**: Centers flex items horizontally.
- **items-center**: Centers flex items vertically.
- **h-screen**: Sets the height to 100% of the viewport height.
- **bg-gray-100**: Sets the background color to a light gray.

#### Toggle Switch Container


```jsx 
<div     className={`flex items-center h-8 w-16 cursor-pointer rounded-full border ${         enabled ? 'bg-teal-500' : 'bg-gray-300'     }`}     onClick={() => setEnabled(!enabled)} > 
```

- **flex**: Displays the container as a flex container.
- **items-center**: Aligns flex items (children) vertically to the center.
- **h-8**: Sets the height to 2rem (32px).
- **w-16**: Sets the width to 4rem (64px).
- **cursor-pointer**: Changes the cursor to a pointer (hand icon) when hovering over the container.
- **rounded-full**: Applies full border-radius to make the container fully rounded.
- **border**: Adds a 1-pixel border.
- **${enabled ? 'bg-teal-500' : 'bg-gray-300'}`**: Conditional classes to change the background color based on the` enabled` state.

#### Toggle Handle `span`


```jsx
<span     className={`inline-block h-6 w-6 bg-white rounded-full transition-transform ${         enabled ? 'translate-x-8' : 'translate-x-0'     }`} />``
```

- **inline-block**: Displays the span as an inline-level block container.
- **h-6**: Sets the height to 1.5rem (24px).
- **w-6**: Sets the width to 1.5rem (24px).
- **bg-white**: Sets the background color to white.
- **rounded-full**: Applies full border-radius to make the span fully rounded.
- **transition-transform**: Enables smooth transform transitions.

**${enabled ? 'translate-x-8' : 'translate-x-0'}`**: Conditional classes to translate (move) the span horizontally based on the` enabled` state. 

- `enabled ? 'translate-x-8' : 'translate-x-0'` is a ternary operator.
- It checks the value of the `enabled` state.
- If `enabled` is `true`, it applies the class `translate-x-8`.
- If `enabled` is `false`, it applies the class `translate-x-0`.
- `translate-x-8`: This class applies a transform that moves the element 2rem (32px) to the right on the x-axis.
- `translate-x-0`: This class applies a transform that doesn't move the element at all on the x-axis (i.e., zero translation).

```jsx 
<span className="ml-3 text-gray-900 font-medium">{enabled ? 'ON' : 'OFF'}</span>
```

- **ml-3**: Adds a margin-left of 0.75rem (12px).
- **text-gray-900**: Sets the text color to a dark gray.
- **font-medium**: Sets the font weight to medium.
