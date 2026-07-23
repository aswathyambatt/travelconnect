export default async function ErrorSolvedPage({ searchParams }) {
  const params = await searchParams;

  if (params.error === "true") {
    throw new Error("Something went wrong!");
  }

  return (
    <div>
      <h1>Hello Students</h1>
      <p>Add <code>?error=true</code> to the URL to trigger the error.</p>
    </div>
  );
}