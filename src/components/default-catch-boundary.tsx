export function DefaultCatchBoundary({ error }: { error: Error }) {
  return (
    <div className="flex min-h-screen items-center justify-center px-4 py-16">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-red-600 mb-4">Error</h1>
        <p className="text-lg text-muted-foreground mb-4">Something went wrong. Please try again later.</p>
        <details className="text-left max-w-2xl mx-auto">
          <summary className="cursor-pointer text-sm text-muted-foreground hover:text-foreground">
            Error details
          </summary>
          <pre className="mt-2 text-xs bg-muted p-4 rounded-md overflow-auto">{error.message}</pre>
        </details>
      </div>
    </div>
  );
}
