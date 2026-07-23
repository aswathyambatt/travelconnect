export default async function StudentsPage() {
  const res = await fetch("http://localhost:3000/api/students");
  const students = await res.json();

  return (
    <div>
      <h1>Students</h1>

      <ul>
        {students.map((student) => (
          <li key={student.id}>
            <strong>{student.name}</strong> - {student.class}
          </li>
        ))}
      </ul>
    </div>
  );
}