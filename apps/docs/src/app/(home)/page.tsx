import {
  generateOrganizationSchema,
  generateSoftwareSchema,
  generateWebsiteSchema,
} from "@/lib/structured-data";
import { Check, Code, Download, FileCode, Package, Zap } from "lucide-react";
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

      <div className="min-h-screen flex items-center">
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
                  className="inline-flex items-center px-6 py-3 text-sm font-semibold text-white bg-black dark:bg-fd-primary dark:text-black border rounded-full"
                >
                  Get Started
                </Link>
                <Link
                  href="https://github.com/brijeshkumaryadav16/react-usekit"
                  className="inline-flex items-center px-6 py-3 text-sm font-semibold text-black dark:text-white border rounded-full"
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
      </div>

      {/* Features Section */}
      <div className="container mx-auto px-6 py-20">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-black dark:text-white">
            Why react-usekit?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Built for developers who value productivity, performance, and clean
            code
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
              Full TypeScript support with JavaScript alternatives. Perfect type
              safety and IntelliSense.
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
              Every hook and utility is completely self-contained. Copy, modify,
              and adapt to your needs.
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
              Interactive CLI with smart defaults. Works with any React project
              setup or framework.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
