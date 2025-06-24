# 📦 react-usekit

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)

> Drop-in React hooks and utility functions — zero boilerplate.

---

## ✨ What is react-usekit?

**react-usekit** is a developer-friendly CLI that lets you install reusable **React hooks** and **JavaScript/TypeScript utility functions** into your project with a single command.

- ✨ Quickly scaffold common logic
- 🧠 Avoid boilerplate
- 📁 Organize code in `src/hooks` and `src/lib/utils`

---

## 🛠️ Why react-usekit?

- ✅ Save time writing common logic
- ✅ Built for **React developers**
- ✅ Works with both **JavaScript** and **TypeScript**
- ✅ Zero config
- ✅ Copy code — not dependencies

---

## 🚀 Getting Started

### Option 1: Install Globally (Recommended)

```bash
npm install -g react-usekit
```

Then use it in any project:

```bash
react-usekit
```

### Option 2: Use with NPX (No Installation)

```bash
npx react-usekit
```

> **When to choose?**
>
> - Use **global installation** if you plan to use `react-usekit` frequently across multiple projects.
> - Use **NPX** for quick, one-off usage without installing anything globally.

---

## 🎯 How it works

1. **Run the command** in your React project directory
2. **Choose what to add**: Select between hooks or utilities
3. **Pick your language**: TypeScript or JavaScript
4. **Choose directory**: Specify where to place files (or use defaults)
5. **Select items**: Multi-select from available templates (use spacebar to select)
6. **Done!** Files are created in your chosen directories

### Example Flow:

```bash
$ react-usekit
? What would you like to add? › hooks
? Choose language: › TypeScript
? Enter relative directory to place files (default: src/hooks): src/components/hooks
? Select hooks to add: › ◉ useLocalStorage
                        ◉ useDebounce
                        ◯ useClickOutside

✅ Hook 'useLocalStorage' added to src/components/hooks
✅ Hook 'useDebounce' added to src/components/hooks
```

---

## 📂 What Gets Created

### Default Structure:

```
your-project/
├── src/
│   ├── hooks/           # Individual hook files
│   │   ├── useLocalStorage.ts
│   │   └── useDebounce.ts
│   └── lib/
│       └── utils.ts     # All utilities in one file
```

### Custom Directory Example:

```
your-project/
├── src/
│   ├── components/
│   │   └── hooks/       # Your custom hooks location
│   │       ├── useLocalStorage.ts
│   │       └── useDebounce.ts
│   └── utils/
│       └── helpers.ts   # Your custom utils location
```

---

## 📦 Available Logic

### 🔁 Hooks

- `useLocalStorage` - Persist state in localStorage
- `useDebounce` - Debounce values with customizable delay
- `useClickOutside` - Detect clicks outside an element
- `useThrottle` - Throttle values to limit execution frequency
- `usePrevious` - Access previous value of a state

### 🧮 Utilities

- `formatDate` - Format dates with customizable patterns
- `formatCurrency` - Format numbers as currency
- `truncateText` - Truncate text with ellipsis
- `capitalize` - Capitalize first letter of strings
- `sleep` - Promise-based delay utility

---

## 💡 Quick Example

After adding a hook:

```jsx
import { useLocalStorage } from "./src/hooks/useLocalStorage";

function App() {
  const [name, setName] = useLocalStorage("username", "");

  return (
    <input
      value={name}
      onChange={(e) => setName(e.target.value)}
      placeholder="Your name will be saved automatically"
    />
  );
}
```

After adding utilities:

```jsx
import { formatCurrency, truncateText } from "./src/lib/utils";

function ProductCard({ price, description }) {
  return (
    <div>
      <p>{formatCurrency(price)}</p>
      <p>{truncateText(description, 100)}</p>
    </div>
  );
}
```

---

## 🤝 Contributing

Coming soon. Want to contribute early? DM or open an issue!

---

## 📬 License

MIT — use freely, modify openly.
