# 📦 react-usekit

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)

> Drop-in React hooks and utility functions — zero boilerplate.

---

## ✨ What is react-usekit?

**react-usekit** is a developer-friendly CLI that lets you install reusable **React hooks** and **JavaScript/TypeScript utility functions** into your project with a single command.

- ✨ Quickly scaffold common logic
- 🧠 Avoid boilerplate
- 📁 Organize code in `src/hooks` and `src/utils`

---

## 🛠️ Why react-usekit?

- ✅ Save time writing common logic
- ✅ Built for **React developers**
- ✅ Works with both **JavaScript** and **TypeScript**
- ✅ Zero config
- ✅ Copy code — not dependencies

---

## 🚀 Getting Started

### 1. Install via NPX

```bash
npx react-usekit add useLocalStorage
```

### 2. Result

Creates:

```
src/hooks/useLocalStorage.ts
```

(Or `.js` if your project is JavaScript-based)

---

## 📚 Available Commands

### ➕ `add <name>`

Installs a reusable hook or utility:

```bash
npx react-usekit add useDebounce
npx react-usekit add formatDate
```

### 📋 `list`

Lists all available logic drops:

```bash
npx react-usekit list
```

---

## 📦 Logic Included (v1)

### 🔁 Hooks

- `useLocalStorage`
- `useDebounce`
- `useClickOutside`
- `useThrottle`
- `usePrevious`

### 🧮 Utilities

- `formatDate`
- `formatCurrency`
- `truncateText`
- `capitalize`
- `sleep`

---

## 📂 File Placement

| Logic Type | Destination     |
| ---------- | --------------- |
| Hooks      | `src/hooks/`    |
| Utilities  | `src/lib/utils` |

---

## 🤝 Contributing

Coming soon. Want to contribute early? DM or open an issue!

---

## 🧪 Example Usage

```bash
npx react-usekit add useClickOutside
# ➔ ✅ useClickOutside added to src/hooks/
```

```bash
npx react-usekit add formatCurrency
# ➔ ✅ formatCurrency added in src/lib/utils.ts
```

---

## 📬 License

MIT — use freely, modify openly.
