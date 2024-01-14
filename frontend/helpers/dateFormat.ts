import { ITimestamp } from "@/types/types";

// Function for changing from Timestamp to JS Date
export function dateFormat(
  timeStamp: ITimestamp,
  options: any = { dateStyle: "long" }
) {
  const date = new Date(
    timeStamp._seconds * 1000 + timeStamp._nanoseconds / 1000000
  );
  return Intl.DateTimeFormat("de-DE", options).format(date);
}
