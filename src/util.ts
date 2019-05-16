export function getTimeStamp(): string {
  const date = new Date();
  const hh: string = date
    .getHours()
    .toString()
    .padStart(2, "0");
  const mm: string = date
    .getMinutes()
    .toString()
    .padStart(2, "0");
  const ss: string = date
    .getSeconds()
    .toString()
    .padStart(2, "0");

  return hh + ":" + mm + ":" + ss;
}
