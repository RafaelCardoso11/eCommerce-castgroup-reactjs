export function filterCorrency(corrency: number) {
  var newCorrency = corrency.toLocaleString("pt-br", {
    minimumFractionDigits: 2,
  });
  return newCorrency;
}