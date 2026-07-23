export default async function DemoPage() {
  // Wait for 10 seconds
  await new Promise((resolve) => setTimeout(resolve, 10000));

  return (
    <div>
      <h1>Hello Students!</h1>
    </div>
  );
}