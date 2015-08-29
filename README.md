This application plugs into the telize.com api to retrieve the user's latitude and longitude.  It then uses that information to pull weather data from openwather's api.  Finally, the app pulls a recent local picture about the user's location and sets that as the background.


#	Weathergetter 

##### _Bringing You the the Weather Wherever, Whenever August 27, 2015_

#### By **Tim Kellogg**

## Description

_This application plugs into the telize.com api to retrieve the user's latitude and longitude.  It then uses that information to pull weather data from openwather's api.  Finally, the app pulls a recent local picture about the user's location and sets that as the background.._

##	Setup

* `git clone` this file
* `cd` into the root of the app
* `ruby app.rb` to run the application in your localhost:4567

###	Technologies Used

* Language: Ruby
* Stack: Ruby/Sinatra
* Server: WEBrick
* Other Dependencies: listed in Gemfile.lock
* Front-End: JavaScript/jQuery
* APIs: Telize (used to geolocate user) / Openweather (used to retrieve weather based on location)

###	Legal

Copyright (c) 2015 **_Tim Kellogg_**

This software is licensed under the MIT license.

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the 'Software'), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
