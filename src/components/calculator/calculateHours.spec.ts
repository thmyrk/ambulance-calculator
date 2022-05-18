import { calculateHours } from "./calculateHours";
import { describe, it, expect } from "vitest"

describe('calculateHours', () => {
  it('returns correct amount', () => {
    expect(calculateHours(1, 1)).toBe(1)
    expect(calculateHours(3, 4)).toBe(12)
    expect(calculateHours(2, 0)).toBe(0)
    expect(calculateHours(0, 2)).toBe(0)
  })
})