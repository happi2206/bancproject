export function formatCurrency(value: number) {
  return `€${value.toLocaleString("de-DE", { minimumFractionDigits: 2 })}`;
}
