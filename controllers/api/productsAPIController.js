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

            let escalada = await Products.count({
                where: {
                    categoryId: 1
                }
            })
            let camperas = await Products.count({
                where: {
                    categoryId: 2
                }
            })
            let calzado = await Products.count({
                where: {
                    categoryId: 3
                }
            })
            let mochilas = await Products.count({
                where: {
                    categoryId: 4
                }
            })
            // Elimino datos innecesarios del JSON
            let arrayRespuesta = products.map((product) => { 
                delete product.dataValues.createdAt;
                delete product.dataValues.updatedAt;
                delete product.dataValues.destroyTime;
                delete product.dataValues.brandId;
                delete product.dataValues.categoryId;
                delete product.dataValues.colorId;
                delete product.dataValues.genderId;
                delete product.dataValues.sizeId;
                product.dataValues.detail = `api/products/${product.id}`
                return product;})

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
                data: arrayRespuesta
            }

            res.json(respuesta);
        } catch (error) {
            console.log(error);
            return res.status(500);
        }
    },
    detail: async (req, res) => {
        try {
            // Busco el producto en la DB
            let product = await Products.findOne(
                {where: {id : req.params.id}, 
                include: ["brand", "gender", "color", "size", "category", "image"]}
            )
            
            // Armo respuesta en formato JSON
            let respuesta = {
                meta: {
                    status : 200,
                    url: `api/products/${product.id}`
                },
                data: product
            }

            delete respuesta.data.dataValues.destroyTime;
            delete respuesta.data.dataValues.createdAt;
            delete respuesta.data.dataValues.updatedAt;
            delete respuesta.data.dataValues.brandId;
            delete respuesta.data.dataValues.categoryId;
            delete respuesta.data.dataValues.genderId;
            delete respuesta.data.dataValues.sizeId;
            delete respuesta.data.dataValues.colorId;

            res.json(respuesta);
        } catch (error) {
            console.log(error);
            return res.status(500);
        }
    }
}

module.exports = productsAPIController;