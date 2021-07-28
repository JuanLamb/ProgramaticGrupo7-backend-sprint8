const { validationResult } = require('express-validator');
const db = require('../src/database/models');
const sequelize = db.sequelize;
const { Op } = require("sequelize");


const Products = db.Product;
const Images = db.Image;
const Categories = db.Category;
const Brands = db.Brand;
const Genders = db.Gender;
const Colors = db.Color;
const Sizes = db.Size;

let productController = {

    readAll: async (req, res) => {
        try{
            let products = await Products.findAll({
                include: ["brand", "gender", "color", "size", "category", "image"]
            });
            res.render('products/productCatalog', { products });
        }catch(error){
            console.log(error);
            return res.status(500);
        }
    },

    readProduct: async (req, res) => {
        try {
            // Busco producto por ID
            const product = await Products.findByPk(req.params.id, {
                include: ["brand", "gender", "color", "size", "category", "image"]});

            // Busco todos los productos por categoria del product
            const filteredProducts = await Products.findAll({
                where: {categoryId: product.categoryId},
                include: ["brand", "gender", "color", "size", "category", "image"]
            })
            
            if (product) {
                res.render('products/productDetail', { product, filteredProducts });
            } else {
                res.render('error404');
            }
        } catch (error) {
            console.log(error);
            return res.status(500);
        }



        // const categoryProducts = productModel.findAllByField("categoria", product.categoria);
/*      Filtraría los productos pero se rompe cuando solamente existe uno de una categoría.
        const filteredProducts = productModel.findAllByField("categoria", product.categoria);
        let categoryProducts = [];
        for (let i = 0; i < 4; i++) {
            categoryProducts.push(filteredProducts[i]);
        }  
*/
    },

    createProduct: async (req, res) => {
        try {
            let brands = await Brands.findAll();
            let genders = await Genders.findAll();
            let colors = await Colors.findAll();
            let sizes = await Sizes.findAll();
            let categories = await Categories.findAll();

            res.render('user/productForm', { brands, genders, colors, sizes, categories });
        } catch (error) {
            console.log(error);
            return res.status(500); 
        }

    },

    recieveForm: async (req, res) => {
        try {
            let brands = await Brands.findAll();
            let genders = await Genders.findAll();
            let colors = await Colors.findAll();
            let sizes = await Sizes.findAll();
            let categories = await Categories.findAll();

            // recibo array de errores de validacion
            const resultValidation = validationResult(req);

            // recibo el body del form
            const product = req.body;

            // checkeo si existen errores // renderizo vista creacion si es true + errores
            if (resultValidation.errors.length > 0) {
                return res.render('user/productForm', {
                    errors: resultValidation.mapped(),
                    oldData: req.body,
                    brands,
                    genders,
                    colors,
                    sizes,
                    categories
                });
            }

            // si viene un file en body se almacena su nombre
            product.image = req.file ? req.file.filename : '';

            // se crea el producto en DB
            let productoCreado = await Products.create(product);

            // se crea la imagen en DB
            let productImage = await Images.create({
                name: product.image, 
                productId: productoCreado.id
            });
            res.redirect('/')
        } catch (error) {
            console.log(error);
            return res.status(500);
        }

    },

    modifyProduct: async (req, res) => {
        try {
            // busco producto por segun params.id
            const product = await Products.findOne({
                where: {id : req.params.id}, 
                include: ["brand", "gender", "color", "size", "category", "image"]
            });
            const categories = await Categories.findAll();
            const brands = await Brands.findAll();
            const genders = await Genders.findAll();
            const colors = await Colors.findAll();
            const sizes = await Sizes.findAll();

            // Busco imagen correspondiente al producto buscado
            const image = await Images.findOne({where: {productId: product.id}});
            res.render('user/productEdit', { 
                product,
                categories, 
                brands, 
                genders, 
                image, 
                colors, 
                sizes });
        } catch (error) {
            console.log(error);
            return res.status(500);
        }
    },

    modifyForm: async (req, res) => {
        try {
            // busco producto por segun params.id
            const product = await Products.findOne({
                where: {id : req.params.id}, 
                include: ["brand", "gender", "color", "size", "category", "image"]
            });
            
            let brands = await Brands.findAll();
            let genders = await Genders.findAll();
            let colors = await Colors.findAll();
            let sizes = await Sizes.findAll();
            let categories = await Categories.findAll();

            // recibo array de errores de validacion
            const resultValidation = validationResult(req);

            // recibo el body del form
            const productBody = req.body;

            const image = {};

            // checkeo si existen errores // renderizo vista edicion si es true + errores
            if (resultValidation.errors.length > 0) {
                console.log("entraste al if Errors")
                image.name = req.file ? req.file.filename : productBody.oldImagen;
                if (resultValidation.errors.image) {
                    console.log("entraste al if imageErrors")
                    // si se sube imagen en formato incorrecto conservo imagen vieja
                    image.name = productBody.oldImagen;
                }
                return res.render('user/productEdit', {
                    errors: resultValidation.mapped(),
                    oldData: req.body,
                    product,
                    brands,
                    genders,
                    colors,
                    sizes,
                    categories,
                    image
                });
            }

            // si viene un file en body se almacena su nombre, caso contrario se mantiene la imagen vieja
            productBody.image = req.file ? req.file.filename : productBody.oldImagen;
            if (productBody.image === undefined) {
                productBody.image = productBody.oldImagen
            };
            delete productBody.oldImagen;
            // se actualizan los datos del producto editado
            let updatedProduct = await Products.update({ 
                name: productBody.name,
                price: productBody.price,
                stockMin: productBody.stockMin,
                stockMax: productBody.stockMax,
                discount: productBody.discount,
                description: productBody.description,
                offer: productBody.offer,
                season: productBody.season,
                brandId: productBody.brandId,
                colorId: productBody.colorId,
                sizeId: productBody.sizeId,
                categoryId: productBody.categoryId,
                genderId: productBody.genderId 
            },
                {where: { id: req.params.id }});

            // Se actualiza la imagen del producto editado
            let productImage = await Images.update({name: productBody.image},{
                    where: {productId: req.params.id}});

            res.redirect('/products/' + req.params.id);
        } catch (error) {
            console.log(error);
            return res.status(500);
        }
    },

    deleteProduct: async (req, res) => {

        let deletedProduct = await Products.destroy({where: {id : req.params.id}});
      
        res.redirect('/')
    },

    searchProduct: async (req, res) => {
        try {
            // almaceno query de busqueda
            let { search } = req.query;
            // paso el string de busqueda a lower case
            search = search.toLowerCase();
            // busco productos que incluyan en su nombre el string de busqueda
            let products = await Products.findAll({
                 where: {
                    name:  {[Op.like]: `%${search}%`}
                },
                include: ["brand", "gender", "color", "size", "category", "image"]
            })
                res.render('products/productCatalog', { products })
        } catch (error) {
            console.log(error);
            return res.status(500);
        }
    },

    filterCategories: async (req, res) => {
        try {
            // declaro array de productos
            let products = [];

            // Caso 1: si el params.category es "cuerdas" o "arneses"
            if (req.params.category === "cuerdas" || req.params.category === "arneses" ) {
                // declaro filter, este define si se buscaran todos los productos con arnes o cuerda en su nombre.
                // cuerda y arnes no son categorias definidas en la DB
                let filter = req.params.category === "cuerdas" ? "cuerda" : "arnes";
                products = await Products.findAll({
                where: {
                    name:  {[Op.like]: `%${filter}%`}
                },
                include: ["brand", "gender", "color", "size", "category", "image"]
            });
            // Caso 2: si el params.category es alguna de las categorias definidas en la DB
            } else {
                // Declaro variable filter para buscar productos segun categoryID
                let filter = 0;
                switch (req.params.category) {
                    // cada categoria asigna su Id a filter tal cual esta en la DB
                    case "escalada":
                        filter = 1;
                        break;
                    case "camperas":
                        filter = 2;
                        break;
                    case "calzado":
                        filter = 3;
                        break;
                    case "mochilas":
                        filter = 4;
                }
                // busca todos los productos segun category Id
                products = await Products.findAll({
                where: {
                    categoryId: filter
                },
                include: ["brand", "gender", "color", "size", "category", "image"]
            })};
            
                res.render('products/productCatalog', { products })
        } catch (error) {
            console.log(error);
            return res.status(500);
        }
    }
};

module.exports = productController;