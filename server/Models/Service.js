'use strict';

class Service{
    constructor(userID, title, description, rating, category, cost) {
        this.userID = userID;
        this.title = title;
        this.description = description;
        this.rating = rating;
        this.category = category;
        this.cost = cost;
        this.date = date.now;
    }
}

module.exports = Service;