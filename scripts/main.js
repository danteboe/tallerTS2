import { dataSeries } from './data.js';
var seriesTbody = document.getElementById('series');
var averageSeasonsElm = document.getElementById('average-seasons');
renderSeriesTable(dataSeries);
averageSeasonsElm.innerHTML = "".concat(getAverageSeasons(dataSeries));
function renderSeriesTable(series) {
    seriesTbody.innerHTML = '';
    series.forEach(function (serie) {
        var trElement = document.createElement('tr');
        trElement.className = 'bg-light';
        trElement.innerHTML = "\n            <td class=\"font-weight-bold\">".concat(serie.id, "</td>\n            <td class=\"text-primary\">").concat(serie.name, "</td>\n            <td>").concat(serie.channel, "</td>\n            <td>").concat(serie.seasons, "</td>\n            </td>\n        ");
        seriesTbody.appendChild(trElement);
    });
}
function getAverageSeasons(series) {
    var totalSeasons = 0;
    series.forEach(function (serie) { return totalSeasons = totalSeasons + serie.seasons; });
    return totalSeasons / series.length;
}
