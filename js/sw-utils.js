//guardar el cache dinamico
function actualizaCacheDinamico(dynamicCache, req, res) {
	if (res.ok && (req.url.startsWith("http") || req.url.startsWith("https"))) {
		return caches.open(dynamicCache).then((cache) => {
			cache.put(req, res.clone());
			return res.clone();
		});
	} else {
		return res;
	}
}
