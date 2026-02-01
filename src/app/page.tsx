import Link from "next/link";

export default function Home() {
  return (
    <div className="bg-white">
      <main className="max-w-5xl mx-auto px-6 pt-32 pb-24">
        <div className="max-w-3xl">
          <h1 className="text-6xl font-extrabold tracking-tighter text-gray-900 mb-8 leading-[1.1]">
            Build your perfect event <br />
            <span className="text-blue-600">without the stress.</span>
          </h1>
          <p className="text-xl text-gray-500 mb-12 leading-relaxed max-w-2xl font-medium italic">
            Connect with premium event planners, world-class performers, and professional technical crew.
            Tell us what you need, and we'll match you with the best.
          </p>
          <div className="flex items-center gap-6">
            <Link
              href="/post-requirement"
              className="px-10 py-5 bg-gray-900 text-white font-bold rounded-full hover:bg-black transition-all hover:scale-105 shadow-xl shadow-gray-200"
            >
              Post a Requirement
            </Link>
            <button className="px-8 py-4 text-gray-400 font-bold uppercase tracking-widest text-xs hover:text-gray-900 transition-colors">
              How it works &rarr;
            </button>
          </div>
        </div>

        <div className="mt-32 grid grid-cols-1 md:grid-cols-3 gap-12 border-t border-gray-100 pt-16">
          <div>
            <h3 className="font-semibold text-gray-900 mb-2">Event Planners</h3>
            <p className="text-gray-500 text-sm leading-relaxed">
              Full-service coordination for weddings, corporate events, and private galas.
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-gray-900 mb-2">Performers</h3>
            <p className="text-gray-500 text-sm leading-relaxed">
              DJs, live bands, and solo artists to make your event memorable.
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-gray-900 mb-2">Technical Crew</h3>
            <p className="text-gray-500 text-sm leading-relaxed">
              Professional support for sound, lighting, and photography requirements.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}
