
var fs = require('fs');
var locationPlist = fs.readFileSync('./js/locitembase.plist', "utf8");
var Base64 = require('./base64.js').Base64;

/*
	Placeholder Values
*/
var Altitude = "ALTPLACE"; //Example val: 0.0 type: real
var Latitude = "LATPLACE"; //Example val: 37.335274759999997 type: real
var Longitude = "LONGPLACE"; //Example val: -122.03254703 type: real
var Course = "COURCEPLACE"; //Example val: 178.24000000000001 type: real
var HorizontalAccuracy = "HORZACPLACE"; //Example val: 5 type: real
var Lifespan = "LIFESPAPLACE"; //Example val: 30 type: real
var Speed = "SPEEDPLACE"; //Example val: 1.6699999999999999 type: real
var Timestamp = "TIMESTAMPPLACE"; //Example val: 315866472.30299997 type: real
var Type = "TYPEPLACE"; //Example val: 1 type: Integer
var VerticalAccuracy = "VERTACPLACE"; //Example val: -1 type: real

/*
	Test Values
*/
var AltitudeTestVal = "0.0";
var LatitudeTestVal = "37.335274759999997";
var LongitudeTestVal = "-122.03254703";
var CourseTestVal = "178.24000000000001";
var HorizontalAccuracyTestVal = "5";
var LifespanTestVal = "30";
var SpeedTestVal = "1.6699999999999999";
var TimestampTestVal = "315866472.30299997";
var TypeTestVal = "1";
var VerticalAccuracyTestVal = "-1";

function addFormatting(str){
  var result = '';
  var first = true;
  while (str.length > 0)
  {
    if(str.length > 60)
    {
      var prefix = "";
      if(first)
      {
          prefix = "		";
      }

      result += prefix + str.substring(0, 60) + "\n		";
    }
    else
    {
      result += str.substring(0, 60);
    }

    str = str.substring(60);
    first = false;
  }
  return result;
}

// Export our public API.
exports.generateLocationPulse = function(AltitudeIn, LatitudeIn, LongitudeIn, CourseIn, HorizontalAccuracyIn, LifespanIn, SpeedIn, TimestampIn, VerticalAccuracyIn) {
	var out = locationPlist;
	out = out.replace(Altitude, AltitudeIn);
	out = out.replace(Latitude, LatitudeIn);
	out = out.replace(Longitude, LongitudeIn);
	out = out.replace(Course, CourseIn);
	out = out.replace(HorizontalAccuracy, HorizontalAccuracyIn);
	out = out.replace(Lifespan, LifespanIn);
	out = out.replace(Speed, SpeedIn);
	out = out.replace(Timestamp, TimestampIn);
	out = out.replace(Type, TypeTestVal);
	out = out.replace(VerticalAccuracy, VerticalAccuracyIn);
  out = Base64.encode(out);
  out = addFormatting(out);
  return( "		<data>\n" + out + "\n		</data>");
};
