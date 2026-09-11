export function formatKsh(amount: number | null | undefined): string {
  if (!amount || amount <= 0) return "Contact for price";
  return `KSh ${amount.toLocaleString("en-KE")}`;
}

export function formatPriceRange(range: { from: number; to: number } | null): string {
  if (!range) return "Contact for pricing";
  return `KSh ${range.from.toLocaleString("en-KE")} – ${range.to.toLocaleString("en-KE")}`;
}
