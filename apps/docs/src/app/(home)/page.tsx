import Link from 'next/link';

// Simple SVG icons as components
const ArrowRightIcon = ({ className }: { className?: string }) => (
  <svg
    className={className}
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M9 5l7 7-7 7"
    />
  </svg>
);

const CodeBracketIcon = ({ className }: { className?: string }) => (
  <svg
    className={className}
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
    />
  </svg>
);

const RocketLaunchIcon = ({ className }: { className?: string }) => (
  <svg
    className={className}
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M13 10V3L4 14h7v7l9-11h-7z"
    />
  </svg>
);

const ShieldCheckIcon = ({ className }: { className?: string }) => (
  <svg
    className={className}
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
    />
  </svg>
);

const SparklesIcon = ({ className }: { className?: string }) => (
  <svg
    className={className}
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M5 3l1.5 1.5L5 6l1.5 1.5L5 9l1.5 1.5L5 12l1.5 1.5L5 15l1.5 1.5L5 18l1.5 1.5L5 21M19 3l-1.5 1.5L19 6l-1.5 1.5L19 9l-1.5 1.5L19 12l-1.5 1.5L19 15l-1.5 1.5L19 18l-1.5 1.5L19 21M12 3l-1.5 1.5L12 6l-1.5 1.5L12 9l-1.5 1.5L12 12l-1.5 1.5L12 15l-1.5 1.5L12 18l-1.5 1.5L12 21"
    />
  </svg>
);

const BoltIcon = ({ className }: { className?: string }) => (
  <svg
    className={className}
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M13 10V3L4 14h7v7l9-11h-7z"
    />
  </svg>
);

const HeartIcon = ({ className }: { className?: string }) => (
  <svg
    className={className}
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
    />
  </svg>
);

const StarIcon = ({ className }: { className?: string }) => (
  <svg
    className={className}
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
    />
  </svg>
);

export default function HomePage() {
  return (
    <main className="flex flex-1 flex-col">
      {/* Hero Section */}
      <section className="relative py-20 px-6 text-center bg-gradient-to-b from-background to-muted/20">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center justify-center mb-6">
            <SparklesIcon className="w-8 h-8 text-primary mr-2" />
            <span className="px-3 py-1 text-sm font-medium text-primary border border-primary/20 rounded-full bg-primary/5">
              Production Ready • Zero Dependencies
            </span>
          </div>

          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
            react-usekit
          </h1>

          <p className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed">
            The essential collection of <strong>8 React hooks</strong> and{' '}
            <strong>8 utility functions</strong>
            every developer needs. Copy, paste, own your code.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Link
              href="/docs"
              className="inline-flex items-center px-8 py-3 text-lg font-semibold text-primary-foreground bg-primary rounded-lg hover:bg-primary/90 transition-colors shadow-lg hover:shadow-xl"
            >
              Get Started
              <ArrowRightIcon className="w-5 h-5 ml-2" />
            </Link>

            <Link
              href="/docs/installation"
              className="inline-flex items-center px-8 py-3 text-lg font-semibold text-foreground bg-background border border-border rounded-lg hover:bg-muted/50 transition-colors"
            >
              <CodeBracketIcon className="w-5 h-5 mr-2" />
              Installation
            </Link>
          </div>

          {/* Quick Install */}
          <div className="max-w-2xl mx-auto p-4 bg-muted/30 rounded-lg border">
            <p className="text-sm text-muted-foreground mb-2">Quick start:</p>
            <code className="text-sm font-mono bg-background px-3 py-2 rounded border">
              npx react-usekit init
            </code>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            Why Choose react-usekit?
          </h2>
          <p className="text-lg text-muted-foreground text-center mb-16 max-w-2xl mx-auto">
            Stop reinventing the wheel. Get battle-tested, production-ready code
            that just works.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="p-6 rounded-lg border bg-card hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <ShieldCheckIcon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Production Ready</h3>
              <p className="text-muted-foreground">
                Every hook and utility is thoroughly tested, optimized, and used
                in real production applications.
              </p>
            </div>

            <div className="p-6 rounded-lg border bg-card hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <BoltIcon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Zero Dependencies</h3>
              <p className="text-muted-foreground">
                Pure React code with no external dependencies. Lightweight,
                secure, and fully under your control.
              </p>
            </div>

            <div className="p-6 rounded-lg border bg-card hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <CodeBracketIcon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">TypeScript First</h3>
              <p className="text-muted-foreground">
                Built with TypeScript from the ground up. Perfect intellisense,
                type safety, and developer experience.
              </p>
            </div>

            <div className="p-6 rounded-lg border bg-card hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <RocketLaunchIcon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Copy & Own</h3>
              <p className="text-muted-foreground">
                Copy the code directly into your project. Modify, extend, and
                customize to fit your exact needs.
              </p>
            </div>

            <div className="p-6 rounded-lg border bg-card hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <StarIcon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Best Practices</h3>
              <p className="text-muted-foreground">
                Follows React community standards, performance optimizations,
                and accessibility guidelines.
              </p>
            </div>

            <div className="p-6 rounded-lg border bg-card hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <HeartIcon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Developer Love</h3>
              <p className="text-muted-foreground">
                Clean, readable code with comprehensive documentation and
                real-world examples.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What's Included */}
      <section className="py-20 px-6 bg-muted/20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
            What's Included
          </h2>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Hooks */}
            <div className="space-y-6">
              <div className="flex items-center mb-6">
                <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center mr-3">
                  <span className="text-primary-foreground font-bold text-sm">
                    8
                  </span>
                </div>
                <h3 className="text-2xl font-bold">Essential React Hooks</h3>
              </div>

              <div className="space-y-3">
                {[
                  {
                    name: 'useLocalStorage',
                    desc: 'Persistent state with localStorage',
                  },
                  {
                    name: 'useAsync',
                    desc: 'Handle async operations gracefully',
                  },
                  {
                    name: 'useClickOutside',
                    desc: 'Detect clicks outside elements',
                  },
                  {
                    name: 'useDebounce',
                    desc: 'Debounce values and callbacks',
                  },
                  {
                    name: 'useEventListener',
                    desc: 'Attach event listeners safely',
                  },
                  {
                    name: 'useInterval',
                    desc: 'Declarative intervals in React',
                  },
                  { name: 'useToggle', desc: 'Boolean state management' },
                  {
                    name: 'useWindowSize',
                    desc: 'Responsive window dimensions',
                  },
                ].map(hook => (
                  <div
                    key={hook.name}
                    className="flex items-start p-4 rounded-lg border bg-card/50"
                  >
                    <code className="text-sm font-mono text-primary mr-3 mt-0.5">
                      {hook.name}
                    </code>
                    <span className="text-sm text-muted-foreground">
                      {hook.desc}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Utilities */}
            <div className="space-y-6">
              <div className="flex items-center mb-6">
                <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center mr-3">
                  <span className="text-primary-foreground font-bold text-sm">
                    8
                  </span>
                </div>
                <h3 className="text-2xl font-bold">Utility Functions</h3>
              </div>

              <div className="space-y-3">
                {[
                  {
                    name: 'capitalize',
                    desc: 'Capitalize first letter of strings',
                  },
                  { name: 'truncateText', desc: 'Truncate text with ellipsis' },
                  {
                    name: 'formatCurrency',
                    desc: 'Format numbers as currency',
                  },
                  { name: 'formatDate', desc: 'Consistent date formatting' },
                  { name: 'isEmpty', desc: 'Check if values are empty' },
                  { name: 'deepClone', desc: 'Deep copy objects safely' },
                  { name: 'slugify', desc: 'Create URL-friendly slugs' },
                  { name: 'generateId', desc: 'Generate unique identifiers' },
                ].map(util => (
                  <div
                    key={util.name}
                    className="flex items-start p-4 rounded-lg border bg-card/50"
                  >
                    <code className="text-sm font-mono text-primary mr-3 mt-0.5">
                      {util.name}
                    </code>
                    <span className="text-sm text-muted-foreground">
                      {util.desc}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Build Better React Apps?
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join thousands of developers who trust react-usekit for their
            production applications. Start building with confidence today.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              href="/docs/installation"
              className="inline-flex items-center px-8 py-3 text-lg font-semibold text-primary-foreground bg-primary rounded-lg hover:bg-primary/90 transition-colors shadow-lg hover:shadow-xl"
            >
              <RocketLaunchIcon className="w-5 h-5 mr-2" />
              Get Started Now
            </Link>

            <Link
              href="/docs/examples"
              className="inline-flex items-center px-8 py-3 text-lg font-semibold text-foreground bg-background border border-border rounded-lg hover:bg-muted/50 transition-colors"
            >
              View Examples
              <ArrowRightIcon className="w-5 h-5 ml-2" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
