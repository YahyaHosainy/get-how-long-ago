# Get-how-long-ago

Put date in miliseconds get how time ago.

## Installation
```bash
npm i get-how-long-ago
```
for development
```bash
npm i -D get-how-long-ago
```
## Usage

```.js
const datetime = require('get-how-long-ago');

console.log(datetime.timeAgo(1612803059959));
console.log(datetime.timeAgo('1612803059959'));   // or type of string

// You can get milliseconds by Date.now()

/* output
{
  minutes: 8,
  seconds: 44,
  in: 'minutes',
  string: '8 minutes & 44 seconds ago'
}
*/

// But if you pass a wrong parameter
console.log(datetime.timeAgo({})); // return null
```

### Usage with typescript
```.ts
import * as dateTime from "get-how-long-ago";
// or
import { timeAgo } from "get-how-long-ago";

```

## Other functions
```.js
const datetime = require('get-how-long-ago');
datetime.secondsAgo()
datetime.minutesAgo()
datetime.hoursAgo()
datetime.daysAgo()
```

## License
[MIT](https://choosealicense.com/licenses/mit/)