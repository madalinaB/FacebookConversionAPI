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

// self.addEventListener(fetch, (event) => {
  // console.log('Inside the fetch handler:', event);
// });

self.addEventListener('fetch', (event) => {
  event.respondWith(
    //fetchWithParamAddedToRequestBody(event.request)

	return fetch(event.request).then(
          function(response) {
			console.log('RESPONSE');
			console.log(response);
			  
            // Check if we received a valid response
            if(!response || response.status !== 200 || response.type !== 'basic') {
              return response;
            }
			
            return response;
          }
        );
  );
});

// function fetchWithParamAddedToRequestBody(request) {
  // serialize(request).then(function(serialized) {
    // // modify serialized.body here to add your request parameter
    // deserialize(serialized).then(function(request) {
      // return fetch(request);
    // });
  // }); // fixed this
// }

// function serialize(request) {
  // var headers = {};
  // for (var entry of request.headers.entries()) {
    // headers[entry[0]] = entry[1];
  // }
  // var serialized = {
    // url: request.url,
    // headers: headers,
    // method: request.method,
    // mode: request.mode,
    // credentials: request.credentials,
    // cache: request.cache,
    // redirect: request.redirect,
    // referrer: request.referrer
  // };  
   // console.log('SERIALIZED');
  // console.log(serialized);
  // if (request.method !== 'GET' && request.method !== 'HEAD') {
    // return request.clone().text().then(function(body) {
      // serialized.body = body;
      // return Promise.resolve(serialized);
    // });
  // }
  // return Promise.resolve(serialized);
// }
// function deserialize(data) {
  // return Promise.resolve(new Request(data.url, data));
// }