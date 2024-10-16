import { dataSeries } from './data.js';
var seriesTbody = document.getElementById('series');
var averageSeasonsElm = document.getElementById('average-seasons');
var cardSpace = document.getElementById('card-space');
renderSeriesTable(dataSeries);
averageSeasonsElm.innerHTML = "".concat(getAverageSeasons(dataSeries));
function renderSeriesTable(series) {
    seriesTbody.innerHTML = '';
    series.forEach(function (serie) {
        var trElement = document.createElement('tr');
        trElement.className = 'bg-light';
        trElement.innerHTML = "\n            <td class=\"font-weight-bold\">".concat(serie.id, "</td>\n            <td class=\"text-primary\">").concat(serie.name, "</td>\n            <td>").concat(serie.channel, "</td>\n            <td>").concat(serie.seasons, "</td>\n            </td>\n        ");
        trElement.addEventListener('click', function () { return showInfoSerie(serie); });
        seriesTbody.appendChild(trElement);
    });
}
function getAverageSeasons(series) {
    var totalSeasons = 0;
    series.forEach(function (serie) { return totalSeasons = totalSeasons + serie.seasons; });
    return totalSeasons / series.length;
}
function showInfoSerie(serie) {
    console.log(serie.image);
    cardSpace.innerHTML = "\n    <div class=\"card\" style=\"width: 18rem;\">\n        <img class=\"card-img-top\" src=\"".concat(serie.image, "\" alt=\"Imagen de portada de la serie ").concat(serie.name, "\">\n        <div class=\"card-body\">\n            <h5 class=\"card-title\">").concat(serie.name, "</h5>\n            <p class=\"card-text\">").concat(serie.description, "</p>\n            <a href=\"").concat(serie.url, "\" class=\"btn btn-primary\">Ir al sitio de la serie</a>\n        </div>\n    </div>\n    ");
}
