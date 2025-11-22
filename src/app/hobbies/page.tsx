export const metadata = {
  title: "Hobbies — Vince",
  description: "Learn more about my hobbies and interests.",
};

export default function HobbiesPage() {
  return (
    <section className="min-h-screen w-full bg-green-100 py-12 px-4">
      <div className="max-w-4xl mx-auto space-y-8">
    
        <h1 className="text-3xl font-bold border-b border-green-600 pb-2">
          Vince S. Cañete - Hobbies & Interests
        </h1>

   
        <p className="text-black-200">
          Here are some of the things I love doing in my free time. They keep me
          creative, motivated, and always learning.
        </p>

      
        <div>
          <h2 className="text-xl font-semibold border-b border-green-600 pb-1">
            My Hobbies
          </h2>
          <ul className="mt-2 list-disc list-inside text-black-200 space-y-2">
            <li>
              <strong>Drawing/Sketching:</strong> I enjoy sketching portraits and characters. It
              helps me improve focus and creativity.
            </li>
            <li>
              <strong>Fitness & Working Out:</strong> Staying active and building strength is
              important for both mind and body.
            </li>
            <li>
              <strong>Learning Coding & Projects:</strong> I spend time building apps,
              exploring JavaScript, React, Next.js, and small personal projects.
            </li>
            <li>
              <strong>Reading & Self-Improvement:</strong> Books and articles that expand my
              mindset and skills.
            </li>
          </ul>
        </div>

   
        <div className="mt-8">
          <a
            href="/"
            className="inline-block px-6 py-3 bg-green-600 text-white rounded-md hover:bg-green-700 transition"
          >
            Back to Home
          </a>
        </div>
      </div>
    </section>
  );
}
