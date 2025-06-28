import Link from "next/link";

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <div className="container mx-auto px-6 py-20">
        {/* Hero Section */}
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
            react-usekit
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-3xl mx-auto">
            Instantly scaffold production-ready React hooks and utilities into
            your project with a single command. No dependencies, no
            boilerplate—just proven, reusable code.
          </p>

          {/* CTA Buttons */}
          <div className="flex justify-center mb-16">
            <Link
              href="/docs"
              className="inline-flex items-center px-8 py-3 text-base font-semibold text-foreground bg-background border-2 border-foreground rounded-lg hover:bg-foreground hover:text-background transition-colors"
            >
              Get Started
            </Link>
          </div>

          {/* Terminal Example */}
          <div className="max-w-2xl mx-auto mb-16">
            <div className="rounded-lg bg-card border border-border p-6 text-left">
              <div className="flex items-center justify-between mb-4">
                <div className="flex space-x-2">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                </div>
                <span className="text-muted-foreground text-sm">Terminal</span>
              </div>
              <pre className="text-sm font-mono">
                <code className="text-foreground">
                  {`$ npx react-usekit init

# Choose: hooks, TypeScript, src/hooks
# Select: useLocalStorage, useToggle, useAsync

# Done! Hooks ready in src/hooks/`}
                </code>
              </pre>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
