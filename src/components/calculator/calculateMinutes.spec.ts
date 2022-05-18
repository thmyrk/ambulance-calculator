import { calculateMinutes } from "./calculateMinutes";
import { describe, it, expect } from "vitest"

describe('calculateMinutes', () => {
  it('returns correct amount', () => {
    expect(calculateMinutes(1, 4)).toBe(0.06666666666666667)
    expect(calculateMinutes(4, 1)).toBe(0.06666666666666667)
    expect(calculateMinutes(2, 0)).toBe(0)
    expect(calculateMinutes(0, 2)).toBe(0)
  })
})