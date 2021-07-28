const { response } = require('express');
const db = require('../../src/database/models');
const sequelize = db.sequelize;

const Products = db.Product;
const Images = db.Image;
const Categories = db.Category;
const Brands = db.Brand;
const Genders = db.Gender;
const Colors = db.Color;
const Sizes = db.Size;

let productsAPIController = {
    // Lista todos los productos
    list: async (req, res) => {
        try {
            // Busco todos los productos en db
            let products = await Products.findAll({
                include: ["brand", "gender", "color", "size", "category", "image"]
            });
            // declaro contadores
            let calzado = 0;
            let escalada = 0;
            let mochilas = 0;
            let camperas = 0;

            // itero el array de productos e incremento cada contador si cumple
            for (let i = 0; i < products.length; i++) {
                switch (products[i].dataValues.categoryId) {
                    case 1:
                        escalada ++;
                        break;
                    case 2:
                        camperas ++;
                        break;
                    case 3:
                        calzado ++;
                        break;
                    case 4:
                        mochilas ++;
                        break;
                
                    default:
                        break;
                }
                delete products[i].dataValues.categoryId;
                delete products[i].dataValues.createdAt;
                delete products[i].dataValues.updatedAt;
                delete products[i].dataValues.destroyTime;
                delete products[i].dataValues.brandId;
                delete products[i].dataValues.colorId;
                delete products[i].dataValues.genderId;
                delete products[i].dataValues.sizeId;
                products[i].dataValues.detail = `api/products/${products[i].dataValues.id}`
            }

            // Armo respuesta en formato JSON
            let respuesta = {
                meta: {
                    status : 200,
                    count: products.length,
                    countByCategory: {
                        calzado: calzado,
                        escalada: escalada,
                        mochilas: mochilas,
                        camperas: camperas,
                    },
                    url: 'api/products'
                },
                data: products
            }


            res.json(respuesta);
        } catch (error) {
            console.log(error);
            return res.status(500);
        }
    }
}

module.exports = productsAPIController;