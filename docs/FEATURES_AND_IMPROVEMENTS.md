# Features and Improvements

This document outlines the recent updates, ongoing improvements, and planned enhancements for the project.

---

# Features

### 1. CLI

- **Feature Options:**
  - Prompt to choose JavaScript and TypeScript
  - Prompt to choose between **Hooks** or **Utils**
  - Based on the selection:
    - If **Hooks**: display a list of available hook names to choose from
    - If **Utils**: display a list of available utility function names

- **File Placement Options(Prompting the user for custom file placement path):**
  - Choose to place the generated file in the default `src/` directory
  - OR specify a **custom directory path** (e.g. `src/helpers/hooks`, `src/lib/utils`, etc.)

- **Example CLI Flow:**
  1. Select type: `Hooks` or `Utils`
  2. Select the desired hook or utility name from a list
  3. Select or input the destination path
  4. CLI generates the file with boilerplate content at the selected location

### 2. Hooks
- Use `useHooks.ts` as a reference.
- Add proper comments and documentation within the codebase.

### 3. Utility Functions


---

# Improvements

- **Revise and Update Project Documentation**  
  Enhanced clarity and added missing details.

- **Improve Command-Line Usage Documentation**  
  Added comprehensive examples and usage guidelines for better developer experience.

- **Write Comprehensive Test Cases**  
  Developed test coverage to ensure reliability and minimize regressions.

- **Add New `useCookieStorage` Hook**  
  Created a new reusable hook to handle cookie-based storage efficiently.

- **Documentation**
- Build a dedicated documentation website.

---