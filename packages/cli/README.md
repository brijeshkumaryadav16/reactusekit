# ReactUsekit CLI

ReactUsekit is a developer-friendly CLI that lets you install reusable React hooks and JavaScript/TypeScript utility functions into your project with a single command.

## Features

- **Production-Ready Hooks** - useLocalStorage, useDebounce, useClickOutside, and more
- **Utils Functions** - capitalize, formatCurrency, deepClone, isURLValid, and more
- **TypeScript & JavaScript** - Full support for both languages
- **Zero Dependencies** - Self-contained templates, no runtime dependencies
- **Instant Setup** - Working code in your project in seconds

👉 [Documentation](https://react-usekit.vercel.app)

## Installation & Usage

### Step 1: Run the CLI

```bash
npx react-usekit@latest init
```

### Step 2: Follow the Interactive Prompts

```bash
? What would you like to add? › hooks
? Choose language: › TypeScript
? Enter relative directory to place files (default: src/hooks): src/hooks
? Select hooks to add: › ◉ useBoolean
                         ◯ useClickOutside

✅ Hook 'useBoolean' added to src/hooks
```

### Step 3: Use It in Your Component

```tsx
import { useBoolean } from "./src/hooks/useBoolean";

function ToggleExample() {
  const { value: isVisible, toggle, setTrue, setFalse } = useBoolean(false);

  return (
    <div>
      <button onClick={toggle}>{isVisible ? "Hide" : "Show"} Content</button>

      {isVisible && (
        <div>
          <p>This content is toggleable!</p>
          <button onClick={setFalse}>Hide</button>
        </div>
      )}
    </div>
  );
}
```
