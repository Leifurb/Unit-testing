import { DATE_UNIT_TYPES } from "./constants";
import { getYear, add as addFNS, isWithinInterval, isBefore, isSameDay as isSameDayFNS } from 'date-fns';


export function getCurrentYear() {
  return getYear(new Date());
}

export function add(date: Date, number: number, type:DATE_UNIT_TYPES = DATE_UNIT_TYPES.DAYS) {
  const types: {[t:string] : number} = {};
  types[type] = number;
  return addFNS(date, types);
}



export function isWithinRange(date: Date, from: Date, to: Date) {
  return isWithinInterval(date, {start: from, end: to})
}

export function isDateBefore(date: Date, compareDate:Date) {
  return isBefore(date, compareDate)
}

export function isSameDay(date: Date, compareDate: Date) {
  return isSameDayFNS(date, compareDate)
}