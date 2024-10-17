export default function Results() {
  const studentData = {
    name: "John Doe",
    profileImage: "/profile.jpg", // Replace with the actual path
    results: [
      { course: "Mathematics", grade: 85, remarks: "Good understanding" },
      { course: "Physics", grade: 78, remarks: "Needs improvement in lab work" },
      { course: "Chemistry", grade: 92, remarks: "Excellent performance" },
      { course: "English", grade: 88, remarks: "Well-written essays" },
    ],
  };

  const calculateProgress = (grade: number) => `${(grade / 100) * 100}%`;

  return (
    <div className="p-6">
      {/* Student Profile Section */}
      <div className="flex items-center mb-6">
        <img
          src={studentData.profileImage}
          alt="Profile"
          className="w-24 h-24 rounded-full border-2 border-gray-200 mr-6"
        />
        <div>
          <h1 className="text-2xl font-bold">{studentData.name}</h1>
          <p className="text-gray-500">Grade Level: 12</p>
          <p className="text-gray-500">Academic Year: 2023/2024</p>
        </div>
      </div>

      {/* Results Table */}
      <div className="bg-white shadow-lg rounded-lg overflow-hidden">
        <table className="min-w-full bg-white">
          <thead>
            <tr>
              <th className="py-2 px-4 bg-gray-200 text-gray-600 text-left text-sm">Course</th>
              <th className="py-2 px-4 bg-gray-200 text-gray-600 text-left text-sm">Grade</th>
              <th className="py-2 px-4 bg-gray-200 text-gray-600 text-left text-sm">Progress</th>
              <th className="py-2 px-4 bg-gray-200 text-gray-600 text-left text-sm">Remarks</th>
            </tr>
          </thead>
          <tbody>
            {studentData.results.map((result, index) => (
              <tr key={index} className="border-b">
                <td className="py-3 px-4">{result.course}</td>
                <td className="py-3 px-4">{result.grade}%</td>
                <td className="py-3 px-4">
                  <div className="w-full bg-gray-200 rounded-full h-4">
                    <div
                      className="bg-blue-500 h-4 rounded-full"
                      style={{ width: calculateProgress(result.grade) }}
                    ></div>
                  </div>
                </td>
                <td className="py-3 px-4">{result.remarks}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Summary Section */}
      <div className="mt-8 p-4 bg-blue-100 rounded-lg">
        <h2 className="text-xl font-bold mb-2">Overall Summary</h2>
        <p className="text-gray-700">
          Overall grade average:{" "}
          <span className="font-bold">
            {Math.round(
              studentData.results.reduce((acc, curr) => acc + curr.grade, 0) /
                studentData.results.length
            )}
            %
          </span>
        </p>
        <p className="text-gray-700">Well done, keep up the good work!</p>
      </div>
    </div>
  );
}
