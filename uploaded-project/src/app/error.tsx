"use client";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="p-4">
      <p>Something went wrong.</p>
      {error.digest ? <p className="text-sm text-gray-600">Reference: {error.digest}</p> : null}
      <button onClick={() => reset()}>Try again</button>
    </div>
  );
}
