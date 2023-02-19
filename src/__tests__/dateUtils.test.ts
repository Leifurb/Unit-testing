import { describe, beforeAll, it, expect, vi } from "vitest";
import { DATE_UNIT_TYPES } from "../constants";
import {
  add,
  getCurrentYear,
  isDateBefore,
  isSameDay,
  isWithinRange,
} from "../dateUtils";

describe("Date Utils", () => {
  beforeAll(() => {
    vi.useFakeTimers().setSystemTime(new Date("2020-01-01").getTime());
  });

  describe("getCurrentYear", () => {
    it("should get current year", () => {
      const results = getCurrentYear();
      expect(results).toBe(2020);
    });
  });

  describe("add", () => {
    it("should add 1 day", () => {
      const results = add(new Date(), 1, DATE_UNIT_TYPES.DAYS);
      expect(results).toStrictEqual(new Date("2020-01-02T00:00:00.000Z"));
    });

    it("should add 0 day", () => {
      const results = add(new Date(), 0, DATE_UNIT_TYPES.DAYS);
      expect(results).toStrictEqual(new Date("2020-01-01T00:00:00.000Z"));
    });

    it("should add 7 day", () => {
      const results = add(new Date(), 7, DATE_UNIT_TYPES.DAYS);
      expect(results).toStrictEqual(new Date("2020-01-08T00:00:00.000Z"));
    });

    it("should add -1 day", () => {
      const results = add(new Date(), -1, DATE_UNIT_TYPES.DAYS);
      expect(results).toStrictEqual(new Date("2019-12-31T00:00:00.000Z"));
    });

    it("should add 7 seconds", () => {
      const results = add(new Date(), 7, DATE_UNIT_TYPES.SECONDS);
      expect(results).toStrictEqual(new Date("2020-01-01T00:00:07.000Z"));
    });

    it("should add 7 weeks", () => {
      const results = add(new Date(), 7, DATE_UNIT_TYPES.WEEKS);
      expect(results).toStrictEqual(new Date("2020-02-19T00:00:00.000Z"));
    });

    it("should add 7 months", () => {
      const results = add(new Date(), 7, DATE_UNIT_TYPES.MONTHS);
      expect(results).toStrictEqual(new Date("2020-08-01T00:00:00.000Z"));
    });

    it("should add 7 years", () => {
      const results = add(new Date(), 7, DATE_UNIT_TYPES.YEARS);
      expect(results).toStrictEqual(new Date("2027-01-01T00:00:00.000Z"));
    });
  });

  describe("isWithinRange", () => {
    it("should be within range", () => {
      const results = isWithinRange(
        new Date("2020-01-01"),
        new Date("2019-01-01"),
        new Date("2021-01-01")
      );
      expect(results).toBeTruthy();
    });

    it("should be outside range", () => {
      const results = isWithinRange(
        new Date("2018-01-01"),
        new Date("2019-01-01"),
        new Date("2021-01-01")
      );
      expect(results).toBeFalsy();
    });
  });

  describe("isDateBefore", () => {
    it("should before", () => {
      const results = isDateBefore(
        new Date("2019-01-01"),
        new Date("2020-01-01")
      );
      expect(results).toBeTruthy();
    });

    it("should not be before", () => {
      const results = isDateBefore(
        new Date("2020-01-01"),
        new Date("2019-01-01")
      );
      expect(results).toBeFalsy();
    });
  });

  describe("isSameDay", () => {
    it("should be same day", () => {
      const results = isSameDay(new Date("2020-01-01"), new Date("2020-01-01"));
      expect(results).toBeTruthy();
    });

    it("should not be same day", () => {
      const results = isSameDay(new Date("2020-01-01"), new Date("2019-01-01"));
      expect(results).toBeFalsy();
    });
  });
});
