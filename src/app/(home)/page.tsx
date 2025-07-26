import { Icons } from "@/components/ui/icon";
import { NumberTicker } from "@/components/ui/number-ticker";
import Link from "next/link";

const getGithubData = async () => {
  try {
    const response = await fetch(
      "https://api.github.com/repos/brijeshkumaryadav16/react-usekit"
    );
    const data = await response.json();
    const star = data.stargazers_count;
    return star;
  } catch (error) {
    console.error("Error fetching GitHub data:", error);
    return 0;
  }
};

export default async function HomePage() {
  const star = await getGithubData();

  return (
    <>
      <div className="min-h-[calc(100vh-4rem)] flex items-center">
        {/* Hero Section */}
        <div className="max-w-4xl mx-auto px-6 py-20 flex flex-col items-center text-center">
          <div className="mb-12 space-y-5">
            <h1 className="text-xl md:text-3xl lg:text-5xl font-bold">
              Instant React Hooks and Utilities
              <br />
              Just Copy, Paste & Done
            </h1>

            <p className="text-base text-fd-muted-foreground leading-relaxed">
              10+ React Hooks and 10+ Utilities to enhance your development
              experience.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex md:flex-row flex-col gap-5 items-center">
            <Link
              href="/docs"
              className="px-6 py-3 text-sm font-semibold bg-fd-foreground text-fd-background border rounded-full"
            >
              Get Started
            </Link>
            <Link
              href="https://github.com/brijeshkumaryadav16/react-usekit"
              target="_blank"
              className="inline-flex items-center px-6 py-3 text-sm font-semibold border rounded-full gap-1"
            >
              <Icons.gitHub className="w-4 h-4" /> Star on GitHub
              <span>
                🌟 <NumberTicker value={star} className="font-display" />
              </span>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
