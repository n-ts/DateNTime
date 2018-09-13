# DTFormat
Simple way to format JavaScript Date Object.

DTFormat is small (1.3KB minified) but powerfull tool to work with date and time in JavaScript. It can be used both server and client side, DTFormat's tested and working in all modern browsers and even legacy browsers like IE9 and other browsers from same era.

### Examples
```javascript
console.log(DTFormat("Current date and time: !MM/!DD/!YYYY - HH:mm TD"));
// Current date and time: 09/12/2018 - 03:32 PM

console.log(DTFormat("!NW, !NM !DD, !YYYY", new Date("2017-04-25")));
// Tuesday, April 25, 2017
```

### Localization is easy
Default names of months and days of the week are English but it's easy to add localized names in array as parameters.
```javascript
var months_FR = ["janvier", "février", "mars", "avril", "mai", "juin", "juillet", "août", "septembre", "octobre", "novembre", "décembre"];
var wdays_FR = ["Dimanche", "Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi", "Samedi"];

console.log(DTFormat("!NW, !NM !DD, !YYYY", new Date("2017-04-25"), months_FR, wdays_FR));
// Mardi, avril 25, 2017
```


# Installing

### Node.js
`npm install dtformat`

### Browser
Bundle / Inlcude `dtformat.min.js` file in your project and you are good to go.


# Syntax
Official syntax of DTFormat is following:

`DTFormat(_format(String), _date(Date), _months(Array[12]), _wdays(Array[7]))`

Although, this exact order of parameters isn't required. Script will automatically detect parameters by type and arange them itself. For example if you send parameters with following order, nothing will change, it will work as expected:

`DTFormat(_wdays(Array[7]), _format(String))`


# Parameter Values

| Parameter | Description |
|---|---|
| `_format(String)` | (Optional) String with formatting. Default: `!YYYY-!MM-!DD !hh:!mm:!ss.!SSS` |
| `_date(Date)` | (Optional) Date object. Default: Date object of current date `new Date()` |
| `_months(Array[12])` | (Optional) Array of alternative/localized month names. Default: `["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]` |
| `_wdays(Array[7])` | (Optional) Array of alternative/localized names for days of the week. Default: `["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]` |


# Format Characters
| Characters | Description |
|---|---|
| `!UTM` | Get Unix Time in milliseconds |
| `!UTS` | Get Unix Time in seconds |
| `!YYYY` | Get full year |
| `!YY` | Get last 2 digits of year |
| `!MM` | Get month with leading zero 01-12 |
| `!M` | Get month 1-12 |
| `!NM` | Get name of the month January-December |
| `!DD` | Get date with leading zero 01-31 |
| `!D` | Get date 1-31 |
| `!W` | Get day of the week 0-6 (where 0 is Sunday and 6 is Saturday) |
| `!NW` | Get name of the day of the week Sunday-Saturday |
| `!HH` | Get hour (12-hour format) with leading zero 12-01-11 |
| `!H` | Get hour (12-hour format) 12-1-11 |
| `!hh` | Get hour with leading zero 00-23 |
| `!h` | Get hour 0-23 |
| `!mm` | Get minutes with leading zero 00-59 |
| `!m` | Get minutes 0-59 |
| `!ss` | Get seconds with leading zero 00-59 |
| `!s` | Get seconds 0-59 |
| `!SSS` | Get milliseconds with leading zeros 000-999 |
| `!S` | Get milliseconds 0-999 |
| `!TD` | Get time of the day for 12-hour format AM/PM |
