export default async function StudentDashboard() {
  const student = {
    name: "John Doe",
    profileImage: "/profile.jpg", // Replace with the actual path
    gradeLevel: "12",
    schoolYear: "2023/2024",
    recentResults: [
      { course: "Mathematics", grade: 85 },
      { course: "Physics", grade: 78 },
      { course: "Chemistry", grade: 92 },
    ],
  };

  return (
    <div>
      {/* Welcome Section */}
      <header className="mb-8">
        <h1 className="text-3xl font-bold">Welcome, {student.name}!</h1>
      </header>

      {/* Main Dashboard Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Profile Summary */}
        <div className="bg-white shadow-lg rounded-lg p-6">
          <div className="flex items-center mb-4">
            <img
              src={student.profileImage}
              alt="Profile"
              className="w-16 h-16 rounded-full border-2 border-gray-300 mr-4"
            />
            <div>
              <h2 className="text-xl font-bold">{student.name}</h2>
              <p className="text-gray-500">Grade: {student.gradeLevel}</p>
              <p className="text-gray-500">Year: {student.schoolYear}</p>
            </div>
          </div>
          <button className="w-full text-white bg-blue-500 hover:bg-blue-600 rounded-lg py-2 transition">
            View Profile
          </button>
        </div>

        {/* Quick Links */}
        <div className="bg-white shadow-lg rounded-lg p-6 lg:col-span-2">
          <h2 className="text-xl font-bold mb-4">Quick Links</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <a
              href="/dashboard/results"
              className="bg-blue-100 hover:bg-blue-200 p-4 rounded-lg text-center"
            >
              <h3 className="text-lg font-bold">View Results</h3>
            </a>
            <a
              href="/dashboard/exams"
              className="bg-yellow-100 hover:bg-yellow-200 p-4 rounded-lg text-center"
            >
              <h3 className="text-lg font-bold">Take Exams</h3>
            </a>
            <a
              href="/dashboard/complaints"
              className="bg-red-100 hover:bg-red-200 p-4 rounded-lg text-center"
            >
              <h3 className="text-lg font-bold">Log Complaint</h3>
            </a>
          </div>
        </div>

        {/* Recent Results */}
        <div className="bg-white shadow-lg rounded-lg p-6 lg:col-span-3">
          <h2 className="text-xl font-bold mb-4">Recent Results</h2>
          <table className="min-w-full bg-white">
            <thead>
              <tr>
                <th className="py-2 px-4 bg-gray-200 text-gray-600 text-left text-sm">
                  Course
                </th>
                <th className="py-2 px-4 bg-gray-200 text-gray-600 text-left text-sm">
                  Grade
                </th>
              </tr>
            </thead>
            <tbody>
              {student.recentResults.map((result, index) => (
                <tr key={index} className="border-b">
                  <td className="py-3 px-4">{result.course}</td>
                  <td className="py-3 px-4">{result.grade}%</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
