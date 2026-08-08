export default function MarketingTemplate({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="route-transition">
      {children}
    </div>
  );
}