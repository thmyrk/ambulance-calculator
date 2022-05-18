import { calculateTime } from "./calculateTime";
import { describe, it, expect } from "vitest"

describe('calculateTime', () => {
  it('returns correct amount', () => {
    expect(calculateTime(1, 1, 1, 1, 1, 1, 1, 1)).toBe(2.033333333333333)
    expect(calculateTime(1, 1, 1, 1, 1, 1, 2, 2)).toBe(4.033333333333333)
    expect(calculateTime(1, 2, 1, 2, 1, 2, 1, 2)).toBe(5.083333333333333)
    expect(calculateTime(1, 0, 0, 0, 1, 1, 0, 0)).toBe(0.016666666666666666)
  })
})