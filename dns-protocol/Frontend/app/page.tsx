import { DomainSearch } from "@/components/domain-search"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function Home() {
  return (
    <div className="w-full px-4 md:px-8 py-12">
      <section className="flex flex-col items-center justify-center space-y-8 py-12 md:py-24 lg:py-32">
        <div className="flex max-w-[980px] flex-col items-center text-center gap-4">
          <h1 className="text-4xl font-extrabold leading-tight tracking-tighter md:text-5xl lg:text-6xl lg:leading-[1.1]">
            Own your digital identity <br className="hidden sm:inline" />
            on the CORE blockchain
          </h1>
          <p className="max-w-[750px] text-lg text-muted-foreground sm:text-xl">
            Register your .core domain name and take control of your web3 presence. Simple, secure, and decentralized.
          </p>
        </div>

        <div className="w-full max-w-2xl mx-auto mt-8">
          <DomainSearch />
        </div>
      </section>

      <section className="space-y-10 py-12 md:py-24">
        <div className="w-full flex flex-col items-center space-y-4 text-center">
          <h2 className="font-heading text-3xl leading-[1.1] sm:text-3xl md:text-5xl">Features</h2>
          <p className="max-w-[85%] text-muted-foreground sm:text-lg">
            Everything you need to manage your digital identity on the CORE blockchain.
          </p>
        </div>
        <div className="w-full grid justify-center gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3">
          <div className="relative overflow-hidden rounded-lg border bg-background p-6">
            <div className="space-y-2">
              <h3 className="font-bold">Secure Ownership</h3>
              <p className="text-sm text-muted-foreground">
                Your domains are secured by the CORE blockchain, giving you full control.
              </p>
            </div>
          </div>
          <div className="relative overflow-hidden rounded-lg border bg-background p-6">
            <div className="space-y-2">
              <h3 className="font-bold">Easy Management</h3>
              <p className="text-sm text-muted-foreground">
                Manage all your domains from a simple, intuitive dashboard.
              </p>
            </div>
          </div>
          <div className="relative overflow-hidden rounded-lg border bg-background p-6">
            <div className="space-y-2">
              <h3 className="font-bold">Public Registry</h3>
              <p className="text-sm text-muted-foreground">Browse all registered domains and find available names.</p>
            </div>
          </div>
        </div>
        <div className="w-full text-center mt-8">
          <p className="leading-normal text-muted-foreground sm:text-lg sm:leading-7">Ready to explore the registry?</p>
          <div className="mt-4 flex justify-center">
            <Button asChild>
              <Link href="/registry" className="bg-yellow-500 hover:bg-yellow-600 text-white">View Public Registry</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
