function DateNTime(_format, _date, _months, _wdays) {
  // Declare variables and set default parameters
  var f = "!YYYY-!MM-!DD !hh:!mm:!ss.!SSS",
    d = new Date(),
    m = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
    wd = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
    p = [], HH, TD, i;

  // Check if parameters exist
  if (_format !== undefined) { p.push(_format); }
  if (_date !== undefined) { p.push(_date); }
  if (_months !== undefined) { p.push(_months); }
  if (_wdays !== undefined) { p.push(_wdays); }

  // Automatically detect, assign and arrange parameters to replace default parameters
  // This gives us ability to igonre order of parameters and set only _months before _format for example
  for (i = 0; i < p.length; i++) {
    if (p[i] instanceof String || typeof p[i] === "string") {
      f = p[i];
    } else if (p[i] instanceof Date) {
      d = p[i];
    } else if (p[i] instanceof Array && p[i].length === 12) {
      m = p[i];
    } else if (p[i] instanceof Array && p[i].length === 7) {
      wd = p[i];
    }
  }

  // Set values required for 12-hour format
  TD = (d.getHours() < 12) ? "AM" : "PM";
  HH = (d.getHours() < 12) ? d.getHours() : d.getHours() - 12;
  HH = (HH === 0) ? 12 : HH;

  // Replace string from array, replaces value of every even index in array with value of odd index net to it
  // This function is added to reduce code size by avoiding repeat of str.replace before every format characters
  function rpl(s, a) {
    for (var i = 0; i < a.length - 1; i += 2) {
      s = s.replace("!" + a[i], a[i + 1]);
    }
    return s;
  }

  // Manipulate Date Object, add leading zeros if required and return as string
  // Same as above, this funcion is added to reduce code size by avoiding repeating .slice and .toString many times
  function sd(f, a) {
    var r = (d[f]() + ((f === "getMonth") ? 1 : 0)).toString();
    if (a !== undefined) {
      if (a < 0) { r = r.slice(0, r.length + a); }
      if (a > 0) { r = ("00" + r).slice(a * (-1)); }
    }
    return r;
  }

  return rpl(f, ["UTM", sd('getTime'), // get Unix Time in milliseconds
    "UTS", sd('getTime', -3),  // get Unix Time in seconds
    "YYYY", sd('getFullYear'),  // get full year
    "YY", sd('getFullYear', 2), // get last 2 digits of year
    "MM", sd('getMonth', 2), // get month with leading zero 01-12
    "M", sd('getMonth'), // get month 1-12
    "NM", m[d.getMonth()], // get name of the month January-December
    "DD", sd('getDate', 2), // get date with leading zero 01-31
    "D", sd('getDate'), // get date 1-31
    "W", sd('getDay'), // get day of the week 0-6 (where 0 is Sunday and 6 is Saturday)
    "NW", wd[d.getDay()], // get name of the day of the week Sunday-Saturday
    "HH", ("0" + HH.toString()).slice(-2), // get hour (12-hour format) with leading zero 12-01-11
    "H", HH.toString(), // get hour (12-hour format) 12-1-11
    "hh", sd('getHours', 2), // get hour with leading zero 00-23
    "h", sd('getHours'), // get hour 0-23
    "mm", sd('getMinutes', 2), // get minutes with leading zero 00-59
    "m", sd('getMinutes'), // get minutes 0-59
    "ss", sd('getSeconds', 2), // get seconds with leading zero 00-59
    "s", sd('getSeconds'), // get seconds 0-59
    "SSS", sd('getMilliseconds', 3), // get milliseconds with leading zeros 000-999
    "S", sd('getMilliseconds'), // get milliseconds 0-999
    "TD", TD]); // get time of the day for 12-hour format AM/PM
}

module.exports = DateNTime;
