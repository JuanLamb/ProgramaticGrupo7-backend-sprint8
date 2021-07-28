const db = require('../src/database/models');
const sequelize = db.sequelize;

const Products = db.Product;

let homeController = {

    readHomeProducts: async (req, res) => {
        try {
            const offers = await Products.findAll({
                where: {offer : 1}, 
                include: ["brand", "gender", "color", "size", "category", "image"]
            });
        
            const newProducts = await Products.findAll({
                where: {season: 1},
                include: ["brand", "gender", "color", "size", "category", "image"]
            });

            res.render('home', { offers, newProducts });
        } catch (error) {
            console.log(error);
            return res.status(500);
        }
    }
};

module.exports = homeController;


