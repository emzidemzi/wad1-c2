'use strict';

import logger from '../utils/logger.js';
import appStore from '../models/app-store.js';

const aboutController = {
  createView(request, response) {
    logger.info('About page loading');

    const aboutData = appStore.getAboutInfo();

    const viewData = {
      title: 'About me!',
      about: aboutData
    };

    response.render('about', viewData);
  }
};

export default aboutController;