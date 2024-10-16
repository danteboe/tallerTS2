import { Serie } from './serie.js';

import { dataSeries } from './data.js';

const seriesTbody: HTMLElement = document.getElementById('series')!;
const averageSeasonsElm: HTMLElement = document.getElementById('average-seasons')!;

renderSeriesTable(dataSeries);

averageSeasonsElm.innerHTML = `${getAverageSeasons(dataSeries)}`;  

function renderSeriesTable(series: Serie[]):void {
    seriesTbody.innerHTML = '';
    series.forEach((serie) => {
        let trElement = document.createElement('tr');
        trElement.className = 'bg-light';
        trElement.innerHTML = `
            <td class="font-weight-bold">${serie.id}</td>
            <td class="text-primary">${serie.name}</td>
            <td>${serie.channel}</td>
            <td>${serie.seasons}</td>
            </td>
        `;
        seriesTbody.appendChild(trElement);
    });
}

function getAverageSeasons(series: Serie[]): number {
    let totalSeasons: number = 0;
    series.forEach((serie) => totalSeasons = totalSeasons + serie.seasons);
    return totalSeasons / series.length;
  }