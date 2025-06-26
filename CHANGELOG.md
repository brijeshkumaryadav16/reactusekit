# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/), and this project
adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

## [1.0.0-alpha.3] - 2025-06-26

### Added

- Initial project setup with comprehensive documentation
- CLI tool for generating React hooks and utility functions
- 8 essential React hooks with TypeScript and JavaScript support
- 8 essential utility functions with TypeScript and JavaScript support
- Interactive CLI with beautiful prompts and validation
- Comprehensive documentation site with Fumadocs
- ESLint and Prettier configuration for code quality
- Husky and lint-staged for pre-commit hooks
- Conventional commits with commitlint
- Vercel deployment configuration
- SEO optimization and favicon support
- **GitHub Actions CI/CD workflows** for automated testing and releases
- **Vitest testing framework** with coverage reporting
- **GitHub issue and PR templates** for better community contributions
- **Security policy** (SECURITY.md) for responsible disclosure
- **Dependabot configuration** for automated dependency updates
- **Comprehensive test structure** with placeholder tests

### Templates Added

#### Hooks

- `useLocalStorage` - Persistent state management with localStorage sync
- `useAsync` - Async operation handling with loading, error, and data states
- `useToggle` - Boolean state management with helper methods
- `useDebounce` - Value debouncing with configurable delay
- `useClickOutside` - Click outside detection for modals and dropdowns
- `useEventListener` - Event listener management with automatic cleanup
- `useInterval` - setInterval with cleanup and pause/resume controls
- `useWindowSize` - Window dimension tracking with debounce

#### Utilities

- `capitalize` - String capitalization utility
- `truncateText` - Text truncation with ellipsis support
- `formatCurrency` - Currency formatting with locale support
- `formatDate` - Date formatting with customizable options
- `isEmpty` - Empty value validation for objects, arrays, and strings
- `deepClone` - Deep object and array cloning utility
- `slugify` - URL-friendly slug generation from text
- `generateId` - Unique identifier generation

### Features

- **Interactive CLI**: Multi-step guided process with validation
- **Language Support**: Full TypeScript and JavaScript compatibility
- **Smart Defaults**: Intelligent directory suggestions and conventions
- **Error Handling**: Comprehensive error messages and validation
- **File Organization**: Follows React community best practices
- **Zero Dependencies**: Copy code, not packages approach
- **Production Ready**: Battle-tested, optimized implementations
- **CI/CD Pipeline**: Automated testing, linting, and deployment
- **Test Coverage**: Comprehensive test suite with coverage reporting
- **Community Standards**: Issue templates, security policy, and contribution guidelines

## [1.0.0] - 2025-01-XX

### Added

- Initial release of react-usekit
- CLI tool for React hooks and utilities generation
- Complete documentation site
- Open source repository with MIT license

---

## [1.0.0-beta.1] - TBD

### Planned

- Enhanced ESLint configuration with full TypeScript support
- Comprehensive test implementations
- Performance optimizations
- Bug fixes and stability improvements

## [1.0.0] - TBD

### Planned

- First stable release
- Full documentation review
- Performance benchmarks
- Production readiness validation

---

## Release Guidelines

### Version Types

- **MAJOR** (X.0.0): Breaking changes, incompatible API changes
- **MINOR** (1.X.0): New features, backwards compatible
- **PATCH** (1.0.X): Bug fixes, backwards compatible

### Categories

- **Added**: New features
- **Changed**: Changes in existing functionality
- **Deprecated**: Soon-to-be removed features
- **Removed**: Removed features
- **Fixed**: Bug fixes
- **Security**: Security improvements

### Release Process

1. Update this CHANGELOG.md
2. Update version in package.json
3. Create git tag with version
4. Create GitHub release
5. Publish to npm (when ready)
