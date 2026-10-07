export const dynamic = "force-dynamic";

export default function Page() {
  return (
    <main>
      <h1>Next.js fixture</h1>
      <p>Rendered on the server at {new Date().toISOString()}, commit {process.env.HK_COMMIT || "unknown"}.</p>
    </main>
  );
}
