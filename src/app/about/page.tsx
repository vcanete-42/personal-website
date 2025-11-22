import Image from 'next/image'

export const metadata = {
  title: 'About — Vince',
  description: "Why I chose IT / Computer Science and what I'm building next."
}

export default function About() {
  return (
    <section className="min-h-screen w-full bg-green-100 py-12 px-4">
      <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-start gap-8">
        <aside className="w-full md:w-1/3 flex flex-col items-center md:items-start gap-6">
          <div className="w-48 h-48 md:w-60 md:h-60 rounded-full overflow-hidden shadow-xl border-4 border-green-600 transform translate-x-4 translate-y-5">
            <Image
              src="/vince2.jpg"
              alt="Vince"
              width={160}
              height={160}
              className="object-cover w-full h-full"
            />
          </div>

          <div className="text-center md:text-left mt-4">
            <h2 className="text-2xl font-semibold">Vince</h2>
            <p className="text-sm text-gray-500 ">First-year IT student • Aspiring Software Engineer</p>
          </div>

          <ul className="mt-2 text-sm text-gray-700 space-y-2">
            <li><strong>Location:</strong> Philippines</li>
            <li><strong>Focus:</strong> Web Personal Projects</li>
            <li><strong>Current project:</strong> Personal Web Page </li>
          </ul>
        </aside>

        {/* Right: Main content */}
        <div className="w-full md:w-2/3 prose prose-neutral max-w-none">
          <h1 className="text-3xl font-bold transform translate-y-40 ">Why I chose IT / Computer Science</h1>

          <p className="mt-43">
            I picked IT because building things with code feels like turning idea into reality.
            Problems that look messy at first become clear when you break them down — and I like that process.
            It’s not just about writing programs; it’s about solving real problems, automating boring work,
            and creating tools that help people do more with less.
      
        </p>
       
          <div className="mt-4">
            <a
              href="/"
              className="inline-block px-6 py-3 bg-green-600 text-white rounded-md hover:bg-green-700 transition transform translate-x-100 translate-y-3"
            >
              Back to Home
            </a>
          </div>

          
        </div>
      </div>
    </section>
  )
}
