// third controller - manga collection details//
// this will come from my dashboard page and will have information about the manga i put into the collection

'use strict';

import logger from '../utils/logger.js';
import appStore from '../models/app-store.js';

const mangaController = {

  // Display manga page
  createView(request, response) {
    logger.info('Manga list page loading');

    const mangaList = appStore.getManga();

    const viewData = {
      title: 'Manga Collection',
      manga: mangaList,
    };

    response.render('manga', viewData);
  },

  // Add new manga
  addManga(request, response) {
    logger.info('Adding new manga');

    const newManga = {
      id: Date.now(), // simple unique id
      title: request.body.title,
      author: request.body.author,
      genre: request.body.genre,
      publisher: request.body.publisher,
      "release-date": request.body.releaseDate,
      image: request.body.image || "images/default.jpg"
    };

    appStore.addManga(newManga);

    response.redirect('/manga');
  },

  // (Optional) delete manga
  deleteManga(request, response) {
    const mangaId = Number(request.params.id);
    logger.info(`Deleting manga with id: ${mangaId}`);

    appStore.removeManga(mangaId);

    response.redirect('/manga');
  }

};

export default mangaController;