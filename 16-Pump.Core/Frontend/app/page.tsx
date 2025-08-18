import { Navbar } from "@/components/navbar"
import { TokenListing } from "@/components/token-listing"
import { LaunchTokenButton } from "@/components/launch-token-button"

export default function Home() {
  return (
    <main className="min-h-screen bg-zinc-50">
      <Navbar />
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col gap-6">
          <section className="flex flex-col md:flex-row justify-between items-center gap-4 bg-white p-6 rounded-xl shadow-sm border border-zinc-100">
            <div className="space-y-2">
              <h1 className="text-2xl md:text-3xl font-bold">MemeFactory</h1>
              <p className="text-zinc-500 max-w-md">
                Create and trade meme tokens on Ethereum. Launch your own token in minutes.
              </p>
            </div>
            <LaunchTokenButton />
          </section>

          <TokenListing />
        </div>
      </div>
    </main>
  )
}
