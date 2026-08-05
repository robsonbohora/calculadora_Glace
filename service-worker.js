const arquivos = [
    "index.html",
    "estilo.css",
    "calculo.js",
    "manifest.json"
];


self.addEventListener("install", function(event) {

    event.waitUntil(

        caches.open("calculadora-bohora")

        .then(function(cache) {

            return cache.addAll(arquivos);

        })

    );

});


self.addEventListener("fetch", function(event) {

    event.respondWith(

        caches.match(event.request)

        .then(function(resposta) {

            return resposta || fetch(event.request);

        })

    );

});