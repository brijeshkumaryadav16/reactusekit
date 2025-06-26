# react-usekit CLI

A command-line interface to add reusable React hooks and utilities to your project with ease.

## Installation

Install globally via npm:

```bash
npm install -g react-usekit
```

Or use with npx (recommended):

```bash
npx react-usekit init
```

## Usage

### Initialize Command

The `init` command is the main command that helps you add hooks or utilities to your project:

```bash
react-usekit init
```

This interactive command will guide you through:

1. **Type Selection**: Choose between adding `hooks` or `utils`
2. **Language Choice**: Select `TypeScript` or `JavaScript`
3. **File Placement**: Specify where to place the files (default: `src/hooks` for hooks, `src/lib`
   for utils)
4. **Template Selection**: Multi-select from available templates

### Examples

#### Adding React Hooks

```bash
npx react-usekit init
# Select: hooks
# Select: TypeScript
# Path: src/hooks (or custom path)
# Select: useLocalStorage, useDebounce, useFetch
```

This will create individual hook files:

- `src/hooks/useLocalStorage.ts`
- `src/hooks/useDebounce.ts`
- `src/hooks/useFetch.ts`

#### Adding Utilities

```bash
npx react-usekit init
# Select: utils
# Select: JavaScript
# Path: src/lib (or custom path)
# Select: formatDate, debounce, throttle
```

This will append all selected utilities to a single file:

- `src/lib/utils.js` (with all utilities combined)

## Features

### 🎯 Interactive CLI

- Easy-to-use prompts for selecting options
- Multi-select support for choosing multiple templates
- Smart defaults with customization options

### 📁 Flexible File Organization

- Custom directory paths for file placement
- Relative path validation
- Automatic directory creation

### 🔧 Language Support

- TypeScript (.ts files)
- JavaScript (.js files)
- Consistent template structure

### 📦 Template Management

- Hooks: Individual files for each hook
- Utils: Combined utilities in a single file
- Duplicate file detection and warnings

### 🛡️ Error Handling

- Graceful error handling with clear messages
- Operation cancellation support
- File existence checks

## File Structure

When you run the CLI, it will organize files as follows:

### For Hooks:

```
src/hooks/
├── useLocalStorage.ts
├── useDebounce.ts
└── useFetch.ts
```

### For Utils:

```
src/lib/
└── utils.ts  # Contains all selected utilities
```

## CLI Options

### Commands

- `init` - Initialize and add hooks or utilities to your project

### Global Options

- `-V, --version` - Display version number
- `-h, --help` - Display help information

## Requirements

- Node.js 16 or higher
- A React project (the CLI doesn't validate this, but templates are React-specific)

## Contributing

This CLI is part of the react-usekit monorepo. Contributions are welcome!

## License

MIT © [Brijeshkumar Yadav](https://www.linkedin.com/in/brijeshkumaryadav16/)

## Repository

[GitHub - react-usekit](https://github.com/brijeshkumaryadav16/react-usekit)
