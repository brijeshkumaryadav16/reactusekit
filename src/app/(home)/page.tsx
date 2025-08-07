import { Icons } from "@/components/ui/icon"
import { NumberTicker } from "@/components/ui/number-ticker"
import Link from "next/link"

export const dynamic = "force-dynamic"

const getGithubData = async () => {
  try {
    const response = await fetch(
      "https://api.github.com/repos/brijeshkumaryadav16/reactusekit"
    )
    const data = await response.json()
    const star = data.stargazers_count
    return star
  } catch (error) {
    console.error("Error fetching GitHub data:", error)
    return 0
  }
}

export default async function HomePage() {
  const star = await getGithubData()

  return (
    <>
      <div className="flex min-h-[calc(100vh-4rem)] items-center">
        {/* Hero Section */}
        <div className="mx-auto flex max-w-4xl flex-col items-center px-6 py-20 text-center">
          <div className="mb-12 space-y-5">
            <h1 className="text-base font-bold md:text-2xl lg:text-4xl">
              React Hooks & Helpers Collection <br />
              Copy, Paste, or Install with shadcn CLI
            </h1>

            <p className="text-fd-muted-foreground text-sm leading-relaxed md:text-base">
              A collection of reusable React hooks and helpers that you can
              easily copy and paste into your apps or add directly through the
              shadcn CLI. Built with TypeScript and modern best practices.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col items-center gap-5 md:flex-row">
            <Link
              href="/docs/installation"
              className="bg-fd-foreground text-fd-background rounded-full border px-6 py-3 text-sm font-semibold"
            >
              Get Started
            </Link>
            <Link
              href="https://github.com/brijeshkumaryadav16/reactusekit"
              target="_blank"
              className="inline-flex items-center gap-1 rounded-full border px-6 py-3 text-sm font-semibold"
            >
              <Icons.gitHub className="h-4 w-4" /> Star on GitHub
              <span>
                🌟 <NumberTicker value={star} className="font-display" />
              </span>
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}
