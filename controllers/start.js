// first controller - homepage //
// this will make my homepage page that will have text and images
// connects the model and view - receives user actions, goes to model for data, then sends data to the view 

'use strict';

import logger from "../utils/logger.js";
import appStore from "../models/app-store.js";

const start = {
  createView(request, response) {
    logger.info("Home page loading!");

    //within createView function
    const viewData = {
      title: "The Manga Collection",
      info: appStore.getAppInfo()  // basically gets data that needs to be sent to the start view, here it is title and info
    };

    response.render('start', viewData);   //render = renders a view - two arguments - here it is `start` (views/hbs file) and the data to be sent to the view
  },
};

export default start;
