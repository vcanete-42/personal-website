export const metadata = {
  title: "Education — Vince",
  description: "Learn more about my academic journey and achievements.",
};

export default function EducationPage() {
  return (
    <section className="min-h-screen bg-green-100 text-green-900 py-12 px-4">
      <div className="max-w-4xl mx-auto space-y-8">
        
        {/* Header */}
        <h1 className="text-3xl font-bold border-b border-green-300 pb-2">
          Vince S. Cañete - Education
        </h1>

        {/* Current Education */}
        <div>
          <h2 className="text-xl font-semibold border-b border-green-300 pb-1">Current Education</h2>
          <ul className="mt-2 list-disc list-inside space-y-1">
            <li>
              <strong>Bachelor of Science in Information Technology</strong><br />
              Naga College Foundation, 2nd Year IT Student (2024–Present)
            </li>
          </ul>
        </div>

        {/* Senior High School */}
        <div>
          <h2 className="text-xl font-semibold border-b border-green-300 pb-1">Senior High School</h2>
          <ul className="mt-2 list-disc list-inside space-y-1">
            <li>
              <strong>Computer Programming NC II</strong><br />
              TVL - Information & Communication Technologies, Camarines Sur National High School (2022–2024)
            </li>
          </ul>
        </div>

        {/* Junior High School */}
        <div>
          <h2 className="text-xl font-semibold border-b border-green-300 pb-1">Junior High School</h2>
          <ul className="mt-2 list-disc list-inside space-y-1">
            <li>
              Basic Education Curriculum (BEC), Camarines Sur National High School (2018–2022)
            </li>
          </ul>
        </div>

        {/* Elementary */}
        <div>
          <h2 className="text-xl font-semibold border-b border-green-300 pb-1">Elementary</h2>
          <ul className="mt-2 list-disc list-inside space-y-1">
            <li>
              Sta. Lucia Elementary School, Magarao, Camarines Sur (2012–2018)
            </li>
          </ul>
        </div>

        {/* Back Button */}
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
