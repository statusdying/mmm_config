/* MagicMirror² Config Sample
 *
 * By Michael Teeuw https://michaelteeuw.nl
 * MIT Licensed.
 *
 * For more information on how you can configure this file
 * see https://docs.magicmirror.builders/configuration/introduction.html
 * and https://docs.magicmirror.builders/modules/configuration.html
 */
let config = {
	address: "localhost", 	// Address to listen on, can be:
							// - "localhost", "127.0.0.1", "::1" to listen on loopback interface
							// - another specific IPv4/6 to listen on a specific interface
							// - "0.0.0.0", "::" to listen on any interface
							// Default, when address config is left out or empty, is "localhost"
	port: 8080,
	basePath: "/", 	// The URL path where MagicMirror² is hosted. If you are using a Reverse proxy
					// you must set the sub path here. basePath must end with a /
	ipWhitelist: ["127.0.0.1", "::ffff:127.0.0.1", "::1"], 	// Set [] to allow all IP addresses
															// or add a specific IPv4 of 192.168.1.5 :
															// ["127.0.0.1", "::ffff:127.0.0.1", "::1", "::ffff:192.168.1.5"],
															// or IPv4 range of 192.168.3.0 --> 192.168.3.15 use CIDR format :
															// ["127.0.0.1", "::ffff:127.0.0.1", "::1", "::ffff:192.168.3.0/28"],

	useHttps: false, 		// Support HTTPS or not, default "false" will use HTTP
	httpsPrivateKey: "", 	// HTTPS private key path, only require when useHttps is true
	httpsCertificate: "", 	// HTTPS Certificate path, only require when useHttps is true

	language: "en",
	locale: "en-US",
	logLevel: ["INFO", "LOG", "WARN", "ERROR"], // Add "DEBUG" for even more logging
	timeFormat: 24,
	units: "metric",
	// serverOnly:  true/false/"local" ,
	// local for armv6l processors, default
	//   starts serveronly and then starts chrome browser
	// false, default for all NON-armv6l devices
	// true, force serveronly mode, because you want to.. no UI on this device

	modules: [
		{
			module: "alert",
		},
		{
			module: "updatenotification",
			position: "top_bar"
		},
		{
			module: "clock",
			position: "top_left"
		},
		/*{
			module: 'MMM-idos',
			header: 'Havirov - Sucha', // no header will be displayed if ommited 
			position: 'top_left',   // position of the module
			config: {
					stopId: 'Havirov-Sucha',
				}
        	},*/
		{
		    module: 'MMM-idos',
		    header: 'Praha Masarykovo n.', // no header will be displayed if ommited 
		    position: 'top_right',   // position of the module
		    
		    config: {
		        stopId: 'Praha%20Masarykovo%20n.', // "https://idos.idnes.cz/vlakyautobusymhdvse/odjezdy/vysledky/?f=the_stop
		        torPorts:  ['9050', '9052'], // tor won't be used if ommited
		        /* other configurations */
		    }
		},
		{
			module: "calendar",
			header: "GOOGLE CALENDAR",
			position: "top_left",
			config: {
				calendars: [
					{
						symbol: "calendar-check",
						url: "https://calendar.google.com/calendar/ical/danek.slowik82%40gmail.com/private-2cd42d71b5f40a6e22410bb4c147851c/basic.ics",
						timeFormat: "dateheaders",
						
					}
				]
			}
		},
		/*{
			module: "compliments",
			position: "lower_third"
		},*/
		{
			module: "weather",
			position: "top_right",
			config: {
				weatherProvider: "openweathermap",
				type: "current",
				location: "Horni Sucha",
				locationID: "3075187", //ID from http://bulk.openweathermap.org/sample/city.list.json.gz; unzip the gz file and find your city
				apiKey: "900746070f5efbf4066ee73379331d65"
			}
		},
		{
			module: "weather",
			position: "top_right",
			header: "Weather Forecast",
			config: {
				weatherProvider: "openweathermap",
				type: "forecast",
				location: "Horni Sucha",
				locationID: "3075187", //ID from http://bulk.openweathermap.org/sample/city.list.json.gz; unzip the gz file and find your city
				apiKey: "900746070f5efbf4066ee73379331d65"
			}
		},		
		
		
		
	
		
		/*{
			module: "newsfeed",
			position: "bottom_bar",
			config: {
				feeds: [
					{
						title: "New York Times",
						url: "https://rss.nytimes.com/services/xml/rss/nyt/HomePage.xml"
					}
				],
				showSourceTitle: true,
				showPublishDate: true,
				broadcastNewsFeeds: true,
				broadcastNewsUpdates: true
			}
		},*/
		{
		    module: "MMM-NameDay",
		    position: "top_left", // You can change this to your desired position.
		    config: {
			country: "cz",
			wrapperSize: "1.25em",
			
			//Here you can insert options listed below.
		    }
		},
		/*{
		    module: "MMM-NameDay", 
		    position: "top_left", // You can change this to your desired position.
		    config: {
			mode: "tommorow",			
			country: "cz",
			wrapperSize: "1.25em",
			
			//Here you can insert options listed below.
		    }*/		
	]
};

/*************** DO NOT EDIT THE LINE BELOW ***************/
if (typeof module !== "undefined") {module.exports = config;}