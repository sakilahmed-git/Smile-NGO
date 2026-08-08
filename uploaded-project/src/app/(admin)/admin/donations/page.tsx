const submissions = [
  { id: "DN-1048", donor: "Ananya S.", amount: "₹5,000", method: "UPI", status: "Pending" },
  { id: "DN-1047", donor: "Rohit K.", amount: "₹2,100", method: "Bank transfer", status: "Pending" },
  { id: "DN-1046", donor: "Community group", amount: "₹18,000", method: "UPI", status: "Approved" },
  { id: "DN-1045", donor: "Anonymous", amount: "₹500", method: "UPI", status: "Rejected" },
];

export default function AdminDonationsPage() {
  return (
    <main className="page-shell">
      <section className="section-hero text-left">
        <p className="eyebrow">Donation verification</p>
        <h1>Approve only verified transfers.</h1>
        <p>
          Public counters and donor receipts should update after screenshot, transaction ID and bank
          records are reviewed by an authorized verifier.
        </p>
      </section>
      <section className="grid gap-4">
        {submissions.map((submission) => (
          <article key={submission.id} className="admin-card grid gap-4 md:grid-cols-[1fr_auto] md:items-center">
            <div>
              <p className="text-xs font-semibold text-[var(--color-muted)]">{submission.id}</p>
              <h2 className="mt-1 text-xl font-semibold">{submission.donor}</h2>
              <p className="mt-1 text-sm text-[var(--color-muted)]">
                {submission.amount} · {submission.method}
              </p>
            </div>
            <div className="flex gap-2">
              <button className="btn-secondary" type="button">Reject</button>
              <button className="btn-primary" type="button">Approve</button>
            </div>
          </article>
        ))}
      </section>
    </main>
  );
}
