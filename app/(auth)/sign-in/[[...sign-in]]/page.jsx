import { SignIn } from '@clerk/nextjs'

export default function Page() {
  return (
<section className="bg-white">
  <div className="lg:grid lg:min-h-screen lg:grid-cols-12">
    <aside className="relative block h-16 lg:order-last lg:col-span-5 lg:h-full xl:col-span-6">
      <img
        alt=""
        src="https://i.ibb.co/c3KG3Vv/Screenshot-2024-10-14-at-11-13-44-PM.png"
        className="absolute inset-2 w-auto h-auto mx-auto my-20 transform translate-y-1/4"
      />
    </aside>

    <main
      className="flex items-center justify-center px-8 py-8 sm:px-12 lg:col-span-7 lg:px-16 lg:py-12 xl:col-span-6"
    >
      <div className="max-w-xl lg:max-w-3xl">
        <a className="block text-blue-600" href="#">
          <span className="sr-only">Home</span>
        </a>

        <h1 className="mt-6 text-2xl font-bold text-gray-900 sm:text-3xl md:text-4xl">
        AI-Powered Interview Hub
        </h1>

        <p className="mt-3 leading-relaxed text-gray-500 mb-6">
        Your ultimate companion for mastering interviews!
        </p>

        <SignIn />
      </div>
    </main>
  </div>
</section>
)
}