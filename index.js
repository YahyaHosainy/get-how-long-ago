"use strict";
/**
 * Author: Yahya Hosainy
 * Version: 1.0.6
 */
exports.__esModule = true;
exports.timeAgo = exports.daysAgo = exports.hoursAgo = exports.minutesAgo = exports.secondsAgo = void 0;
function secondsAgo(miliseconds) {
    var seconds = Math.round((Date.now() - Math.round(miliseconds)) / 1000);
    var string;
    if (seconds < 10) {
        string = 'just now';
    }
    else {
        string = seconds + ' seconds ago';
    }
    return { seconds: seconds, "in": 'seconds', string: string };
}
exports.secondsAgo = secondsAgo;
function minutesAgo(miliseconds) {
    var minutes = (((Date.now() - Math.round(miliseconds)) / 1000) / 60);
    var seconds = minutes - Math.floor(minutes);
    seconds = Math.round(seconds * 60);
    minutes = Math.floor(minutes);
    var string = minutes + (minutes > 1 ? ' minutes ' : ' minute ') + (seconds > 1 ? '& ' + seconds + ' seconds ' : '') + 'ago';
    return { minutes: minutes, seconds: seconds, "in": 'minutes', string: string };
}
exports.minutesAgo = minutesAgo;
function hoursAgo(miliseconds) {
    var hours = ((((Date.now() - Math.round(miliseconds)) / 1000) / 60) / 60);
    var minutes = hours - Math.floor(hours);
    minutes = minutes * 60;
    minutes = Math.round(minutes);
    hours = Math.floor(hours);
    var string = hours + (hours > 1 ? ' hours ' : ' hour ') + (minutes > 1 ? '& ' + minutes + ' minutes ' : '') + 'ago';
    return { hours: hours, minutes: minutes, "in": 'hours', string: string };
}
exports.hoursAgo = hoursAgo;
function daysAgo(miliseconds) {
    miliseconds = Math.round(miliseconds);
    var days = (((((Date.now() - miliseconds) / 1000) / 60) / 60) / 24);
    var hours = days - Math.floor(days);
    hours = hours * 24;
    hours = Math.round(hours);
    days = Math.floor(days);
    var string = days + (days > 1 ? ' days ' : ' day ') + (hours > 1 ? '& ' + hours + ' hours ' : '') + 'ago';
    return { days: days, hours: hours, "in": 'days', string: string };
}
exports.daysAgo = daysAgo;
function timeAgo(miliseconds) {
    miliseconds = Math.round(miliseconds);
    var miliseconds_ = Date.now() - miliseconds;
    if (miliseconds_ < 60000) {
        return secondsAgo(miliseconds);
    }
    else if (miliseconds_ < 3600000) {
        return minutesAgo(miliseconds);
    }
    else if (miliseconds_ < 86400000) {
        return hoursAgo(miliseconds);
    }
    else {
        return daysAgo(miliseconds);
    }
}
exports.timeAgo = timeAgo;
