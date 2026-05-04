// second controller - dashboard //
// this will make my dashboard page that will have my categopries in my collection (author, manga), added button instead of hyperlinjk
// connects the model and view - receives user actions, goes to model for data, then sends data to the view 

// imports
import logger from '../utils/logger.js';
import appStore from '../models/app-store.js';

// creating actual controller
// controls how data mpves from model (app-store.js) to the view (dashboard.hbs)
const dashboard = {
    createView(request, response) {
        logger.info("Dashboard page is now loading!!!");  // msg shown when user clicks dashboard

        const manga = appStore.getManga(); // calling func (getManga) from app-store.js

        // data for handlebars
        const viewDataDashboard = {
            title: "The Manga Collection",
            manga: manga
        };

        response.render('dashboard', viewDataDashboard);
    }
};

export default dashboard;