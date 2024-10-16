import { Serie } from './serie.js';

import { dataSeries } from './data.js';

const seriesTbody: HTMLElement = document.getElementById('series')!;
const averageSeasonsElm: HTMLElement = document.getElementById('average-seasons')!;
const cardSpace: HTMLElement = document.getElementById('card-space')!;
renderSeriesTable(dataSeries);

averageSeasonsElm.innerHTML = `${getAverageSeasons(dataSeries)}`;

function renderSeriesTable(series: Serie[]): void {
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
        trElement.addEventListener('click', () => showInfoSerie(serie));
        seriesTbody.appendChild(trElement);
    });
}

function getAverageSeasons(series: Serie[]): number {
    let totalSeasons: number = 0;
    series.forEach((serie) => totalSeasons = totalSeasons + serie.seasons);
    return totalSeasons / series.length;
}

function showInfoSerie(serie: Serie) {
    console.log(serie.image);
    cardSpace.innerHTML = `
    <div class="card" style="width: 18rem;">
        <img class="card-img-top" src="${serie.image}" alt="Imagen de portada de la serie ${serie.name}">
        <div class="card-body">
            <h5 class="card-title">${serie.name}</h5>
            <p class="card-text">${serie.description}</p>
            <a href="${serie.url}" class="btn btn-primary">Ir al sitio de la serie</a>
        </div>
    </div>
    `;
}