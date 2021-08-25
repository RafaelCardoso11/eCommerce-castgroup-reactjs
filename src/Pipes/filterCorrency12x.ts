export function filterCorrency12x(corrency: number | any) {
  let correncyTo12x = corrency / 12
  let correncyTree = String(correncyTo12x).substring(0, 3);
  let newCorrency = correncyTree.replace(".", "")
  return newCorrency;
}