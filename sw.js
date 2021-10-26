self.addEventListener('fetch', function(event) {
  event.respondWith(
    console.log('aaaa');
    fetch(event.request)	
  );
});