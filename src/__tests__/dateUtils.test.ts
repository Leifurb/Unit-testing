import {describe, expect, it} from 'vitest';
import { getCurrentYear, add, isWithinRange } from '../dateUtils';
import moment from 'moment';

describe("Gets the current year", () => {
  it("Should fetch the current year", () => {
    const results = getCurrentYear();
    expect(results).toBe(2023);
  });
});

describe("Adds to x number of days to date", () => {
  it("Should add x number of days to date", () => {
    const results = add(moment("2022/12/01").toDate(), 10);
    expect(moment(results).format("YYYY/MM/DD")).toBe("2022/12/11");
  });
});
