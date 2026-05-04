'use strict';

import logger from '../utils/logger.js';
import appStore from '../models/app-store.js';

const authorsController = {

  createView(request, response) {
    logger.info('Authors page loading');

    const authorList = appStore.getAuthors();

    const viewData = {
      title: 'Manga Authors',
      authors: authorList
    };

    response.render('authors', viewData);
  }

};

export default authorsController;