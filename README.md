XJourney
========

Apple currently provide no way of adding new test routes to simulate active GPS data in their iOS simulator, that's where this tool comes in!

<img src ="http://www.bottleofcode.com/wp-content/uploads/2014/10/XJourneyWindow1.png" />

Add new GPS routes / locations to iOS Simulator.

you can download the prebuilt tool [HERE](http://www.bottleofcode.com/wp-content/uploads/2014/10/XJourney.zip)


## Usage

Just drag and drop a CSV of CLLocation objects into XJourney, reset your iOS simulator and find the new simulated GPS route added inside your 'Debug > Location' menu.

<img src ="http://www.bottleofcode.com/wp-content/uploads/2014/10/XJourney.png" />

There is example data (ExampleData.csv) included in the source, each CSV entry should contain the following 10 items

Format:`Altitude,Lat,Long,Course,HorizontalAccuracy,Lifespan,Speed,Timestamp,VerticalAccuracy,Type,`
Example:`9,50.863517,-1.169958,118,5,30,19.540001,1412580664.109,1,3,`


## Requirements

* Xcode 6.0 or later
* Xcode must be inside your 'Applications' directory and named 'Xcode'.


## Build
This application was written using [Node-Webkit](https://github.com/rogerwang/node-webkit) to 'compile' run the build.sh script and the package in the 'output' dir will get updated.


## License

The MIT License

Copyright (c) 2014 Luke Hines

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
