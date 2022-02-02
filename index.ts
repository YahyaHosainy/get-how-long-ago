/**
 * Author: Yahya Hosainy
 * Version: 1.0.6
 */

import * as Types from "./types";

export function secondsAgo(miliseconds: number): Types.SecondsAgoReturnObject {
  let seconds = Math.round((Date.now() - Math.round(miliseconds)) / 1000)
  let string: string;
  if (seconds < 10) {
    string = 'just now'
  } else {
    string = seconds + ' seconds ago'
  }
  return { seconds, in: 'seconds', string }
}

export function minutesAgo(miliseconds: number): Types.MinutesAgoReturnObject {
  let minutes = (((Date.now() - Math.round(miliseconds)) / 1000) / 60)
  let seconds = minutes - Math.floor(minutes)
  seconds = Math.round(seconds * 60)
  minutes = Math.floor(minutes)
  let string = minutes + (minutes > 1 ? ' minutes ' : ' minute ') + (seconds > 1 ? '& ' + seconds + ' seconds ' : '') + 'ago';
  return { minutes, seconds, in: 'minutes', string }
}

export function hoursAgo(miliseconds: number): Types.HoursAgoReturnObject {
  let hours = ((((Date.now() - Math.round(miliseconds)) / 1000) / 60) / 60)
  let minutes = hours - Math.floor(hours)
  minutes = minutes * 60
  minutes = Math.round(minutes)
  hours = Math.floor(hours)
  let string = hours + (hours > 1 ? ' hours ' : ' hour ') + (minutes > 1 ? '& ' + minutes + ' minutes ' : '') + 'ago';
  return { hours, minutes, in: 'hours', string }
}

export function daysAgo(miliseconds: number): Types.DaysAgoReturnObject {
  miliseconds = Math.round(miliseconds)
  let days = (((((Date.now() - miliseconds) / 1000) / 60) / 60) / 24)
  let hours = days - Math.floor(days)
  hours = hours * 24
  hours = Math.round(hours)
  days = Math.floor(days)
  let string = days + (days > 1 ? ' days ' : ' day ') + (hours > 1 ? '& ' + hours + ' hours ' : '') + 'ago';
  return { days, hours, in: 'days', string }
}

export function timeAgo(miliseconds: number): Types.TimeAgoReturnObject {
  miliseconds = Math.round(miliseconds)
  let miliseconds_ = Date.now() - miliseconds;
  if (miliseconds_ < 60000) {
    return secondsAgo(miliseconds)
  } else if (miliseconds_ < 3600000) {
    return minutesAgo(miliseconds)
  } else if (miliseconds_ < 86400000) {
    return hoursAgo(miliseconds)
  } else {
    return daysAgo(miliseconds)
  }
}
