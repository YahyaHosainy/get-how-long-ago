/**
 * Author: Yahya Hosainy
 * Version: 1.0.6
 */

function isParamsOk(params) {
  if (
    params &&
    (
      typeof params === 'string' ||
      typeof params === 'number'
    )
  ) {
    return true;
  }
}

function secondsAgo(miliseconds) {
  if (isParamsOk(miliseconds)) {
    miliseconds = parseInt(miliseconds)
  } else {
    console.log('miliseconds is worng : ' + miliseconds);
    return null;
  }
  let seconds = parseInt((Date.now() - miliseconds) / 1000)
  let string;
  if (seconds < 10) {
    string = 'now'
  } else {
    string = seconds + ' seconds ago'
  }
  return { seconds, in: 'seconds', string }
}

function minutesAgo(miliseconds) {
  if (isParamsOk(miliseconds)) {
    miliseconds = parseInt(miliseconds)
  } else {
    console.log('miliseconds is worng : ' + miliseconds);
    return null;
  }
  let minutes = (((Date.now() - miliseconds) / 1000) / 60)
  let seconds = minutes - parseInt(minutes)
  seconds = seconds * 60
  seconds = parseInt(seconds)
  minutes = parseInt(minutes)
  let string = minutes + (minutes > 1 ? ' minutes ' : ' minute ') + (seconds > 1 ? '& ' + seconds + ' seconds ' : '') + 'ago';
  return { minutes, seconds, in: 'minutes', string }
}

function hoursAgo(miliseconds) {
  if (isParamsOk(miliseconds)) {
    miliseconds = parseInt(miliseconds)
  } else {
    console.log('miliseconds is worng : ' + miliseconds);
    return null;
  }
  let hours = ((((Date.now() - miliseconds) / 1000) / 60) / 60)
  let minutes = hours - parseInt(hours)
  minutes = minutes * 60
  minutes = parseInt(minutes)
  hours = parseInt(hours)
  let string = hours + (hours > 1 ? ' hours ' : ' hour ') + (minutes > 1 ? '& ' + minutes + ' minutes ' : '') + 'ago';
  return { hours, minutes, in: 'hours', string }
}

function daysAgo(miliseconds) {
  if (isParamsOk(miliseconds)) {
    miliseconds = parseInt(miliseconds)
  } else {
    console.log('miliseconds is worng : ' + miliseconds);
    return null;
  }
  let days = (((((Date.now() - miliseconds) / 1000) / 60) / 60) / 24)
  let hours = days - parseInt(days)
  hours = hours * 24
  hours = parseInt(hours)
  days = parseInt(days)
  let string = days + (days > 1 ? ' days ' : ' day ') + (hours > 1 ? '& ' + hours + ' hours ' : '') + 'ago';
  return { days, hours, in: 'days', string }
}

function timeAgo(miliseconds) {
  if (isParamsOk(miliseconds)) {
    miliseconds = parseInt(miliseconds)
  } else {
    console.log('miliseconds is worng : ' + miliseconds);
    return null;
  }
  let miliseconds_ = Date.now() - miliseconds;
  if (miliseconds_ < 60000) {
    return secondsAgo(miliseconds)
  } else if (miliseconds_ < 3.6e+6) {
    return minutesAgo(miliseconds)
  } else if (miliseconds_ < 8.64e+7) {
    return hoursAgo(miliseconds)
  } else {
    return daysAgo(miliseconds)
  }
}

module.exports = {
  secondsAgo,
  minutesAgo,
  hoursAgo,
  daysAgo,
  timeAgo
}