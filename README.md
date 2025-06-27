# 📦 react-usekit

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)
[![npm version](https://img.shields.io/npm/v/react-usekit.svg)](https://www.npmjs.com/package/react-usekit)
[![Downloads](https://img.shields.io/npm/dm/react-usekit.svg)](https://www.npmjs.com/package/react-usekit)

> **Drop-in React hooks and utility functions — zero boilerplate, maximum productivity.**

A developer-friendly CLI that instantly adds battle-tested React hooks and JavaScript/TypeScript
utilities to your project. No more copy-pasting from StackOverflow or reinventing the wheel.

---

## ✨ What is react-usekit?

**react-usekit** is a powerful CLI tool that instantly scaffolds production-ready React hooks and
utility functions directly into your project. Instead of managing dependencies or searching for
solutions online, get the exact code you need in seconds.

### 🎯 **Key Features**

- 🚀 **Instant Setup** - One command, ready-to-use code
- 🧠 **Zero Dependencies** - Copy code, not packages
- 📁 **Smart Organization** - Follows React best practices (`src/hooks`, `src/lib`)
- 🔧 **Language Flexible** - Full TypeScript and JavaScript support
- 🎨 **Interactive CLI** - Beautiful, intuitive command-line experience
- ⚡ **Production Ready** - Battle-tested, optimized implementations

---

## 🛠️ Why Choose react-usekit?

| ❌ **Before**                          | ✅ **After**                          |
| -------------------------------------- | ------------------------------------- |
| Search StackOverflow for solutions     | Get proven implementations instantly  |
| Copy unreliable code snippets          | Use battle-tested, optimized code     |
| Manage countless npm dependencies      | Own your code, zero dependencies      |
| Inconsistent naming & structure        | Follow React community standards      |
| Manual TypeScript typing               | Perfect TypeScript support built-in   |
| Repetitive boilerplate across projects | Reusable patterns, consistent quality |

### 🎪 **Perfect For**

- 🏗️ **New Projects** - Bootstrap with essential utilities
- 🚀 **Rapid Prototyping** - Get common functionality fast
- 🔧 **Legacy Codebases** - Add modern React patterns gradually
- 👥 **Team Projects** - Ensure consistent code quality
- 📚 **Learning** - Study well-implemented React patterns

---

## 🚀 Quick Start

### Option 1: Global Installation (Recommended)

```bash
# Install once, use everywhere
npm install -g react-usekit

# Use in any React project
cd your-react-project
react-usekit init
```

### Option 2: One-time Usage with NPX

```bash
# No installation required
cd your-react-project
npx react-usekit init
```

### Option 3: Project-specific Installation

```bash
# Add to your project
npm install --save-dev react-usekit

# Add to package.json scripts
{
  "scripts": {
    "add-hooks": "react-usekit init"
  }
}
```

> 💡 **Recommendation**: Use global installation if you work on multiple React projects. Use NPX for
> quick one-off usage.

---

## 🎯 How It Works

Our interactive CLI guides you through a simple 7-step process:

1. **🚀 Launch** - Run `react-usekit init` in your React project
2. **🎯 Choose Type** - Select between 🪝 **hooks** or 🛠️ **utils**
3. **💻 Pick Language** - TypeScript or JavaScript
4. **📁 Set Location** - Specify directory (or use smart defaults)
5. **✅ Multi-Select** - Choose from available templates (Space to select, Enter to confirm)
6. **👀 Review** - Preview exactly what will be created
7. **🎉 Generate** - Watch as files are created with beautiful, colorful output

### 🎬 Example Session:

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

---

## 📂 Project Structure

### 🏗️ **Default Organization**

```
your-react-project/
├── src/
│   ├── hooks/                    # 🪝 Individual hook files
│   │   ├── useLocalStorage.ts    # Persistent state management
│   │   ├── useToggle.ts          # Boolean state helpers
│   │   ├── useAsync.ts           # Async operation handling
│   │   └── useDebounce.ts        # Input debouncing
│   └── lib/
│       └── utils.ts              # 🛠️ All utilities in one file
```

### 🎨 **Custom Structure Examples**

```
your-react-project/
├── src/
│   ├── components/
│   │   └── hooks/                # Custom hooks location
│   │       ├── useLocalStorage.ts
│   │       └── useToggle.ts
│   ├── shared/
│   │   └── utils/                # Custom utils location
│   │       └── helpers.ts
│   └── lib/
│       ├── hooks/                # Alternative organization
│       └── utils/
```

### 📋 **File Naming Conventions**

| Type             | Pattern           | Example                       |
| ---------------- | ----------------- | ----------------------------- |
| **Hooks**        | `use[Name].ts/js` | `useLocalStorage.ts`          |
| **Utils**        | `utils.ts/js`     | `utils.ts` (consolidated)     |
| **Custom Utils** | `[custom].ts/js`  | `helpers.ts`, `formatters.ts` |

## 📦 Available Templates

### 🪝 **React Hooks (8 Essential)**

| Hook               | Description                                     | Use Case                          |
| ------------------ | ----------------------------------------------- | --------------------------------- |
| `useLocalStorage`  | Persist state in localStorage with sync         | User preferences, form data       |
| `useToggle`        | Boolean state with toggle/setTrue/setFalse      | Modals, dropdowns, switches       |
| `useDebounce`      | Debounce values with configurable delay         | Search inputs, API calls          |
| `useClickOutside`  | Detect clicks outside target elements           | Dropdowns, modals, tooltips       |
| `useAsync`         | Handle async operations with loading/error/data | API calls, data fetching          |
| `useEventListener` | Add/remove event listeners with auto cleanup    | Window events, keyboard shortcuts |
| `useWindowSize`    | Track window dimensions with debounce           | Responsive components, layouts    |
| `useInterval`      | setInterval with cleanup and pause/resume       | Timers, polling, animations       |

### 🛠️ **Utility Functions (8 Essential)**

| Utility          | Description                                        | Use Case                         |
| ---------------- | -------------------------------------------------- | -------------------------------- |
| `capitalize`     | Capitalize the first letter of strings             | Text formatting, display names   |
| `truncateText`   | Truncate text with ellipsis support                | Product descriptions, previews   |
| `formatCurrency` | Format numbers as currency with locale             | Prices, financial data           |
| `formatDate`     | Consistent date formatting with options            | Timestamps, date displays        |
| `isEmpty`        | Check if values are empty (objects/arrays/strings) | Form validation, conditionals    |
| `deepClone`      | Deep copy objects and arrays safely                | State updates, data manipulation |
| `slugify`        | Create URL-friendly slugs from text                | URLs, file names, IDs            |
| `generateId`     | Generate unique identifiers                        | Keys, IDs, temporary references  |

---

## 💡 Usage Examples

### 🪝 **Hook Examples**

#### **useLocalStorage** - Persistent State

```jsx
import { useLocalStorage } from "./src/hooks/useLocalStorage";

function UserProfile() {
  const [user, setUser] = useLocalStorage("user-profile", {
    name: "",
    email: "",
  });

  return (
    <form>
      <input
        value={user.name}
        onChange={(e) => setUser((prev) => ({ ...prev, name: e.target.value }))}
        placeholder="Name (saved automatically)"
      />
      <input
        value={user.email}
        onChange={(e) =>
          setUser((prev) => ({ ...prev, email: e.target.value }))
        }
        placeholder="Email (saved automatically)"
      />
    </form>
  );
}
```

#### **useAsync** - API Data Fetching

```jsx
import { useAsync } from "./src/hooks/useAsync";

function UserList() {
  const {
    data: users,
    loading,
    error,
    execute,
  } = useAsync(() => fetch("/api/users").then((res) => res.json()), {
    immediate: true,
  });

  if (loading) return <div>Loading users...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div>
      {users?.map((user) => (
        <div key={user.id}>{user.name}</div>
      ))}
      <button onClick={execute}>Refresh</button>
    </div>
  );
}
```

### 🛠️ **Utility Examples**

#### **Multiple Utilities** - Text & Currency Formatting

```jsx
import { formatCurrency, truncateText, capitalize } from "./src/lib/utils";

function ProductCard({ product }) {
  return (
    <div className="product-card">
      <h3>{capitalize(product.name)}</h3>
      <p className="price">{formatCurrency(product.price, "USD")}</p>
      <p className="description">{truncateText(product.description, 150)}</p>
    </div>
  );
}
```

#### **Form Validation** - isEmpty Utility

```jsx
import { isEmpty } from "./src/lib/utils";

function ContactForm() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};
    if (isEmpty(form.name)) newErrors.name = "Name is required";
    if (isEmpty(form.email)) newErrors.email = "Email is required";
    if (isEmpty(form.message)) newErrors.message = "Message is required";

    setErrors(newErrors);
    return isEmpty(newErrors);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      // Submit form
      console.log("Form is valid!", form);
    }
  };

  // ... rest of component
}
```

## 🚨 Requirements

- **Node.js** 18.0.0 or higher
- **React** 16.8+ (for hooks support)
- **TypeScript** 4.5+ (optional, for TypeScript projects)

## 🔧 Framework Compatibility

| Framework           | Status          | Notes                                      |
| ------------------- | --------------- | ------------------------------------------ |
| ⚛️ Create React App | ✅ Full Support | Works out of the box                       |
| ⚡ Vite             | ✅ Full Support | Perfect integration                        |
| 🏗️ Next.js          | ✅ Full Support | App Router & Pages Router                  |
| 📱 React Native     | ⚠️ Partial      | Hooks work, some utils may need adaptation |
| 🔧 Custom Webpack   | ✅ Full Support | Framework agnostic                         |

---

## 🤝 Contributing

Coming soon. Want to contribute early? DM or open an issue!

For detailed contribution guidelines, see [CONTRIBUTING.md](CONTRIBUTING.md).

---

## 🆘 Support & Community

- 📖 **Documentation**: [Full docs](https://react-usekit.vercel.app)
- 🐛 **Issues**: [Bug reports](https://github.com/brijeshkumaryadav16/react-usekit/issues)
- 💬 **Discussions**:
  [Community forum](https://github.com/brijeshkumaryadav16/react-usekit/discussions)
- 📱 **Updates**: Follow [@brijeshkumaryadav16](https://linkedin.com/in/brijeshkumaryadav16) for
  updates

---

## 📬 License

**MIT License** - Use freely, modify openly, contribute back if you can.

See [LICENSE](LICENSE) for full details.

---

<div align="center">

**Made with ❤️ for the React community**

⭐ **Star us on GitHub** if this project helped you!

[Report Bug](https://github.com/brijeshkumaryadav16/react-usekit/issues) •
[Request Feature](https://github.com/brijeshkumaryadav16/react-usekit/issues) •
[Documentation](https://react-usekit.vercel.app)

</div>
