//https://developers.google.com/web/fundamentals/primers/service-workers
//https://stackoverflow.com/questions/43813770/how-to-intercept-all-http-requests-including-form-submits
//https://caniuse.com/serviceworkers
//https://jakearchibald.github.io/isserviceworkerready/
 


self.addEventListener('install', (event) => {
  console.log('Inside the install handler:', event);
});

self.addEventListener('activate', (event) => {
  console.log('Inside the activate handler:', event);
});

self.addEventListener('fetch', (event) => {
	console.log('Inside the fetch handler:', event);
	
	// var headers = {};
    // for (var entry of event.request.headers.entries()) {
		// headers[entry[0]] = entry[1];
	// }
	// var serialized = {
		// url: event.request.url,
		// headers: headers,
		// method: event.request.method,
		// mode: event.request.mode,
		// credentials: event.request.credentials,
		// cache: event.request.cache,
		// redirect: event.request.redirect,
		// referrer: event.request.referrer
	// };  
	// console.log(serialized);
	
	try{
		event.respondWith(
		fetch(event.request).then(
			function(response) {
				console.log('RESPONSE');
				console.log(response);
				  
				// Check if we received a valid response
				if(!response || response.status !== 200 || response.type !== 'basic') {
				  console.log('RESPONSE NOT VALID')
				}

				return response;
			})
	  );		
	}
	catch (error) {
		console.log('FETCH ERROR:', error);
	}		
});