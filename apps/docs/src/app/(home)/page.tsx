import {
  generateOrganizationSchema,
  generateSoftwareSchema,
  generateWebsiteSchema,
} from "@/lib/structured-data";
import {
  Check,
  Code,
  Download,
  FileCode,
  Github,
  Package,
  Zap,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function HomePage() {
  const organizationSchema = generateOrganizationSchema();
  const websiteSchema = generateWebsiteSchema();
  const softwareSchema = generateSoftwareSchema();

  return (
    <>
      {/* Structured Data for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organizationSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(websiteSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(softwareSchema),
        }}
      />

      <div className="min-h-screen">
        {/* Hero Section */}
        <div className="container mx-auto px-6 py-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl text-fd-primary md:text-6xl font-bold tracking-tight mb-6">
                ReactUsekit
              </h1>
              <h1 className="text-3xl md:text-6xl font-bold tracking-tight mb-6 text-black dark:text-white">
                Save time writing common logic.
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground mb-12 leading-relaxed">
                Build and install reusable React hooks and utilities with a
                single command. Open Source. Open Code.
              </p>

              {/* CTA Buttons */}
              <div className="flex items-center space-x-4">
                <Link
                  href="/docs"
                  className="inline-flex items-center px-6 py-3 text-sm font-semibold text-white bg-black dark:bg-white dark:text-black border rounded-full hover:bg-gray-800 dark:hover:bg-gray-100 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-105"
                >
                  Get Started
                </Link>
                <Link
                  href="https://github.com/brijeshkumaryadav16/react-usekit"
                  className="inline-flex items-center px-6 py-3 text-sm font-semibold text-black dark:text-white border rounded-full hover:bg-gray-800 dark:hover:bg-gray-100 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-105"
                >
                  View on Github
                </Link>
              </div>
            </div>
            <div className="hidden md:justify-center md:items-center md:flex">
              <Image
                src="/images/react.png"
                alt="React Usekit Hero Image"
                width={300}
                height={300}
              />
            </div>
          </div>
        </div>

        {/* Terminal Example */}
        {/* <div className="container mx-auto px-6 py-20">
          <div className="max-w-2xl mx-auto mb-20">
            <div className="rounded-xl bg-slate-950 dark:bg-slate-900 border border-slate-800 dark:border-slate-700 p-6 text-left shadow-2xl overflow-hidden">
              <div className="flex items-center justify-between mb-4">
                <div className="flex space-x-2">
                  <div className="w-3 h-3 rounded-full bg-red-500 shadow-sm"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500 shadow-sm"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500 shadow-sm"></div>
                </div>
                <span className="text-slate-400 text-sm font-medium">
                  Terminal
                </span>
              </div>
              <pre className="text-sm font-mono overflow-x-auto">
                <code className="text-green-400 block">
                  {`$ npx react-usekit@latest init

✨ Welcome to react-usekit!
📦 Choose: hooks → TypeScript → src/hooks
🎯 Select: useBoolean, useLocalStorage, useClickOutside

✅ Done! 3 hooks ready in src/hooks/`}
                </code>
              </pre>
            </div>
          </div>
        </div> */}

        {/* Features Section */}
        <div className="container mx-auto px-6 py-20">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-black dark:text-white">
              Why react-usekit?
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Built for developers who value productivity, performance, and
              clean code
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mx-auto">
            {/* Feature Card 1 */}
            <div className="group bg-transparent border border-border/50 rounded-xl p-8 hover:bg-gray-50 dark:hover:bg-gray-900/50 transition-all duration-300">
              <div className="flex items-center justify-center w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-xl mb-6">
                <Zap className="w-6 h-6 text-blue-600 dark:text-blue-400" />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-foreground">
                Lightning Fast
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Get working code in seconds. No more copying from tutorials or
                debugging broken snippets.
              </p>
            </div>

            {/* Feature Card 2 */}
            <div className="group bg-transparent border border-border/50 rounded-xl p-8 hover:bg-gray-50 dark:hover:bg-gray-900/50 transition-all duration-300">
              <div className="flex items-center justify-center w-12 h-12 bg-purple-100 dark:bg-purple-900/30 rounded-xl mb-6">
                <Package className="w-6 h-6 text-purple-600 dark:text-purple-400" />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-foreground">
                Zero Dependencies
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Own your code. No runtime dependencies, no package bloat. Just
                clean, optimized source code.
              </p>
            </div>

            {/* Feature Card 3 */}
            <div className="group bg-transparent border border-border/50 rounded-xl p-8 hover:bg-gray-50 dark:hover:bg-gray-900/50 transition-all duration-300">
              <div className="flex items-center justify-center w-12 h-12 bg-green-100 dark:bg-green-900/30 rounded-xl mb-6">
                <FileCode className="w-6 h-6 text-green-600 dark:text-green-400" />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-foreground">
                TypeScript Ready
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Full TypeScript support with JavaScript alternatives. Perfect
                type safety and IntelliSense.
              </p>
            </div>

            {/* Feature Card 4 */}
            <div className="group bg-transparent border border-border/50 rounded-xl p-8 hover:bg-gray-50 dark:hover:bg-gray-900/50 transition-all duration-300">
              <div className="flex items-center justify-center w-12 h-12 bg-orange-100 dark:bg-orange-900/30 rounded-xl mb-6">
                <Check className="w-6 h-6 text-orange-600 dark:text-orange-400" />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-foreground">
                Production Ready
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Battle-tested hooks and utilities used in real applications.
                Performance optimized and reliable.
              </p>
            </div>

            {/* Feature Card 5 */}
            <div className="group bg-transparent border border-border/50 rounded-xl p-8 hover:bg-gray-50 dark:hover:bg-gray-900/50 transition-all duration-300">
              <div className="flex items-center justify-center w-12 h-12 bg-red-100 dark:bg-red-900/30 rounded-xl mb-6">
                <Code className="w-6 h-6 text-red-600 dark:text-red-400" />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-foreground">
                Self-Contained
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Every hook and utility is completely self-contained. Copy,
                modify, and adapt to your needs.
              </p>
            </div>

            {/* Feature Card 6 */}
            <div className="group bg-transparent border border-border/50 rounded-xl p-8 hover:bg-gray-50 dark:hover:bg-gray-900/50 transition-all duration-300">
              <div className="flex items-center justify-center w-12 h-12 bg-cyan-100 dark:bg-cyan-900/30 rounded-xl mb-6">
                <Download className="w-6 h-6 text-cyan-600 dark:text-cyan-400" />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-foreground">
                CLI Powered
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Interactive CLI with smart defaults. Works with any React
                project setup or framework.
              </p>
            </div>
          </div>
        </div>

        {/* Contribute & Sponsor Section */}
        <div className="container mx-auto px-6 py-20">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Contribute Section */}
              <div className="text-center group">
                <div className="flex items-center justify-center w-16 h-16 bg-blue-500 rounded-xl mb-6 mx-auto">
                  <Github className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-4 text-foreground">
                  Contribute
                </h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  Help us build the best React hooks and utilities collection.
                  Contribute new hooks, fix bugs, or improve documentation.
                </p>
                <div className="flex justify-center gap-3">
                  <Link
                    href="https://github.com/brijeshkumaryadav16/react-usekit"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center w-fit px-4 py-2 text-sm font-semibold text-white bg-black dark:bg-white dark:text-black border rounded-lg hover:bg-gray-800 dark:hover:bg-gray-100 transition-all duration-200"
                  >
                    <Github className="w-4 h-4 mr-2" />
                    View on GitHub
                  </Link>
                  <Link
                    href="https://github.com/brijeshkumaryadav16/react-usekit/issues"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center px-4 py-2 text-sm font-semibold text-foreground bg-transparent border border-border rounded-lg hover:bg-gray-50 dark:hover:bg-gray-900 transition-all duration-200 w-fit"
                  >
                    Report Issues
                  </Link>
                </div>
              </div>

              {/* Sponsor Section */}
              <div className="text-center group">
                <div className="flex items-center justify-center w-16 h-16 bg-pink-500 rounded-xl mb-6 mx-auto">
                  <Github className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-4 text-foreground">
                  Sponsor
                </h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  Support the development of react-usekit. Your sponsorship
                  helps us maintain and improve the project for the community.
                </p>
                <div className="flex justify-center gap-3">
                  <Link
                    href="https://github.com/sponsors/brijeshkumaryadav16"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center w-fit px-4 py-2 text-sm font-semibold text-white bg-black dark:bg-white dark:text-black border rounded-lg hover:bg-gray-800 dark:hover:bg-gray-100 transition-all duration-200"
                  >
                    <Github className="w-4 h-4 mr-2" />
                    Sponsor on GitHub
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
