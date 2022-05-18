import { calculateHours } from "./calculateHours";
import { calculateMinutes } from "./calculateMinutes";

export const calculateTime = (
  minutes1: number,
  minutes2: number,
  hours1: number,
  hours2: number,
  rate1: number,
  rate2: number,
  rate3: number,
  rate4: number
) => {
  const result =
    calculateMinutes(minutes1, rate1) +
    calculateMinutes(minutes2, rate2) +
    calculateHours(hours1, rate3) +
    calculateHours(hours2, rate4);

  return result;
};