export const metadata = {
  title: "Vince — IT Student & Aspiring Software Engineer",
  description: "Welcome to my personal website! Learn about me, my projects, and my journey in IT.",
};

export default function HomePage() {
  return (
    <main className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-b from-green-100 to-green-200 px-4">
    
      <section className="max-w-4xl w-full flex flex-col md:flex-row items-center gap-8">

        <div className="flex-1 text-center md:text-left">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
            Hi, I’m Vince
          </h1>
          <p className="text-gray-700 mb-6 text-lg md:text-xl">
            I’m an IT student passionate about software development, problem-solving, and turning ideas into real projects. 
            I love building tools that make life easier and learning new technologies every day.
          </p>

         <div className="flex flex-wrap justify-center md:justify-start gap-4">
  <a
    href="/about"
    className="px-6 py-3 bg-green-600 text-white rounded-md hover:bg-green-700 transition font-medium"
  >
    About
  </a>
  <a
    href="/education"
    className="px-6 py-3 bg-green-600 text-white rounded-md hover:bg-green-700 transition font-medium"
  >
    Education
  </a>
  <a
    href="/hobbies"
    className="px-6 py-3 bg-green-600 text-white rounded-md hover:bg-green-700 transition font-medium"
  >
    Hobbies
  </a>
  <a
    href="/contact"
    className="px-6 py-3 bg-green-600 text-white rounded-md hover:bg-green-700 transition font-medium"
  >
    Contact
  </a>
</div>

        </div>

      
        <div className="flex-1 flex justify-center md:justify-end">
          <div className="w-48 h-48 md:w-100 md:h-100 rounded-full overflow-hidden shadow-xl border-4 border-green-600">
            <img
              src="vince1.jpg" 
              alt="Vince"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>
    </main>
  );
}
