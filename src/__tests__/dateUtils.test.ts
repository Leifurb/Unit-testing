import {describe, expect, it} from 'vitest';
import { getCurrentYear, add, isWithinRange } from '../dateUtils';
import moment from 'moment';
import { DATE_UNIT_TYPES } from '../constants';

describe("Gets the current year", () => {
  it("Should fetch the current year", () => {
    const results = getCurrentYear();
    expect(results).toBe(2023);
  });
});

describe("Adds to x number of date unit types to date", () => {
  it("Should add x number of days to date", () => {
    const results = add(moment("2022/12/01", "YYYY/MM/DD").toDate(), 10);
    expect(moment(results).format("YYYY/MM/DD")).toBe("2022/12/11");
  });
  it("Should add x number of years to date", () => {
    const results = add(moment("2022/12/01", "YYYY/MM/DD").toDate(), 10, DATE_UNIT_TYPES.YEARS);
    expect(moment(results).format("YYYY/MM/DD")).toBe("2032/12/01");
  });
  it("Should add x number of minutes to date", () => {
    const results = add(moment("2022/12/01", "YYYY/MM/DD").toDate(), 10, DATE_UNIT_TYPES.MINUTES);
    expect((results).getMinutes()).toBe(10);
  });
  it("Should add x number of seconds to date", () => {
    const results = add(moment("2022/12/01", "YYYY/MM/DD").toDate(), 20, DATE_UNIT_TYPES.SECONDS);
    expect((results).getSeconds()).toBe(20);
  });
  it("Should add x number of weeks to date", () => {
    const results = add(moment("2022/01/01", "YYYY/MM/DD").toDate(), 4, DATE_UNIT_TYPES.WEEKS);
    expect(moment(results).format("YYYY/MM/DD")).toBe("2022/01/29");
  });
  it("Should add x number of months to date", () => {
    const results = add(moment("2022/01/01", "YYYY/MM/DD").toDate(), 4, DATE_UNIT_TYPES.MONTHS);
    expect(moment(results).format("YYYY/MM/DD")).toBe("2022/05/01");
  });
});
describe("Checkes if date is within 2 dates", () => {
  it("Should return true if date is between 2 dates", () => {
    const results = isWithinRange(moment("2015/01/01", "YYYY/MM/DD").toDate(), moment("2010/01/01", "YYYY/MM/DD").toDate(), moment("2020/01/01", "YYYY/MM/DD").toDate());
    expect(results).toBe(true);
  });
});

