import { notFound } from "next/navigation";

export default function StudentsPage() {
  // Simulate data not found
  const student = null;

  if (!student) {
    notFound();
  }

  return (
    <div>
      <h1>{student.name}</h1>
    </div>
  );
}