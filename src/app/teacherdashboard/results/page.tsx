"use client";

import React, { useState } from "react";

interface Subject {
  name: string;
}

interface Grades {
  [key: string]: string;
}

const subjects: Subject[] = [
  { name: "Mathematics" },
  { name: "Physics" },
  { name: "Chemistry" },
  { name: "English" },
  { name: "Biology" },
  // Add more subjects as needed
];

export default function UploadResults() {
  const [regNumber, setRegNumber] = useState("");
  const [grades, setGrades] = useState<Grades>(
    subjects.reduce((acc, subject) => ({ ...acc, [subject.name]: "" }), {} as Grades)
  );

  const handleGradeChange = (subject: string, grade: string) => {
    setGrades(prevGrades => ({ ...prevGrades, [subject]: grade }));
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // Handle the form submission logic here
    console.log("Submitting results for student with Reg No:", regNumber);
    console.log("Grades:", grades);
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-2xl font-bold mb-4">Upload Results</h1>

      {/* Input Registration Number */}
      <div className="mb-6">
        <label htmlFor="regNumber" className="block text-lg font-medium mb-2">
          Enter Student Registration Number
        </label>
        <input
          type="text"
          id="regNumber"
          value={regNumber}
          onChange={(e) => setRegNumber(e.target.value)}
          className="w-full p-2 border rounded-lg"
          placeholder="Enter registration number"
          required
        />
      </div>

      {/* Input Grades for Each Subject */}
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-lg p-6 rounded-lg"
      >
        <h2 className="text-xl font-bold mb-4">Enter Grades</h2>
        {subjects.map((subject) => (
          <div key={subject.name} className="mb-4">
            <label htmlFor={subject.name} className="block font-medium mb-2">
              {subject.name}
            </label>
            <input
              type="number"
              id={subject.name}
              value={grades[subject.name]}
              onChange={(event) => handleGradeChange(subject.name, event.target.value)}
              className="w-full p-2 border rounded-lg"
              placeholder="Enter grade"
              min="0"
              max="100"
              required
            />
          </div>
        ))}

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-blue-500 text-white font-bold py-2 px-4 rounded-lg hover:bg-blue-600"
        >
          Submit Results
        </button>
      </form>
    </div>
  );
}