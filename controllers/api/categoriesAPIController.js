const { response } = require('express');
const db = require('../../src/database/models');
const sequelize = db.sequelize;
const path = require('path');

const Products = db.Product;
const Categories = db.Category;

let categoriesAPIController = {
    list: async (req, res) => {
        try {
            // Busco todos las categorias en db
            let categories = await Categories.findAll();

            // Cuento la cantidad de categorias en db
            let countCategories = await Categories.count();

            // Cuento cantidad de productos en escalada
            let escalada = await Products.count({
                where: {
                    categoryId: 1
                }
            })
            // Cuento cantidad de productos en camperas
            let camperas = await Products.count({
                where: {
                    categoryId: 2
                }
            })
            // Cuento cantidad de productos en calzado
            let calzado = await Products.count({
                where: {
                    categoryId: 3
                }
            })
            // Cuento cantidad de productos en mochilas
            let mochilas = await Products.count({
                where: {
                    categoryId: 4
                }
            })

            // Armo array con los valores de cantidad de producto de cada categoria
            let categoriesArray = [escalada, camperas, calzado, mochilas]

            // Itero en array categorias insertandole la propiedad count
            let categoriesWithCount = () =>{
                for (let i = 0; i < categoriesArray.length; i++) {
                    categories[i].dataValues.count = categoriesArray[i];
                }
            }
            // Llamo a la funcion categoriesWithCount
            categoriesWithCount();

            // Armo respuesta en formato JSON
            let respuesta = {
                meta: {
                    status : 200,
                    count: categories.length,
                    categoriesCount : countCategories,
                    url: 'api/categories'
                },
                data: {
                    categories
                }
            }

            res.json(respuesta);
        } catch (error) {
            console.log(error);
            return res.status(500);
        }
    }
}

module.exports = categoriesAPIController;