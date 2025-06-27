# 📦 react-usekit

> **Drop-in React hooks and utility functions — zero boilerplate, maximum productivity.**

A developer-friendly CLI that instantly adds battle-tested React hooks and JavaScript/TypeScript utilities to your project.

## 🚀 Quick Start

```bash
# Use with npx (recommended)
npx react-usekit init

# Or install globally
npm install -g react-usekit
react-usekit init
```

## ⚡ Usage

Run the interactive CLI in your React project:

```bash
$ react-usekit init
🚀 React UseKit CLI - Hooks and Utils Generator

? What would you like to add? › 🪝 hooks
? Choose language: › TypeScript
? Enter relative directory to place files (default: src/hooks): src/hooks
? Select hooks to add: › ◉ useLocalStorage
                         ◉ useToggle
                         ◉ useAsync
                         ◯ useDebounce

📋 Operation Summary:
   Type: hooks
   Language: TypeScript (.ts)
   Destination: src/hooks
   Items: useLocalStorage, useToggle, useAsync

? Proceed with the operation? › Yes

🔄 Processing templates...
📁 Created directory: src/hooks
✅ Hook 'useLocalStorage' added to src/hooks/useLocalStorage.ts
✅ Hook 'useToggle' added to src/hooks/useToggle.ts
✅ Hook 'useAsync' added to src/hooks/useAsync.ts

📊 Summary: 3 successful, 0 skipped

🎉 Operation completed successfully!
```

## 📦 What You Get

### 🪝 **8 React Hooks**

`useLocalStorage` • `useToggle` • `useAsync` • `useDebounce` • `useClickOutside` • `useEventListener` • `useInterval` • `useWindowSize`

### 🛠️ **8 Utility Functions**

`capitalize` • `truncateText` • `formatCurrency` • `formatDate` • `isEmpty` • `deepClone` • `slugify` • `generateId`

### ✨ **Features**

- ✅ **TypeScript & JavaScript** - Full support for both
- ✅ **Zero Dependencies** - Copy code, not packages
- ✅ **Interactive CLI** - Beautiful prompts and validation
- ✅ **Smart Organization** - Follows React best practices

## � Requirements

- **Node.js** 18.0.0+
- **React** 16.8+ (for hooks)

## � Full Documentation

For detailed examples, all available templates, and advanced usage:

**👉 [Complete Documentation](https://react-usekit.vercel.app)**

## 📄 License

MIT © [Brijeshkumar Yadav](https://github.com/brijeshkumaryadav16)
