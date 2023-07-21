import Product from "App/Models/Product";
// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'




export default class ProductsController {
    
   async store({request}){
        const{
            name,
            supplyer,
            itsPerishable,
            cost,
            salePrice,
            discount,
            brandId,
            productLineId,
            modelId,
            discountTypeId,
            productCategoryId

        } = request.body()
        const products = await Product.create({
            name,
            supplyer,
            itsPerishable,
            cost,
            salePrice,
            discount,
            brandId,
            productLineId,
            modelId,
            discountTypeId,
            productCategoryId,
        });
        return products;
    }

    async show({params}){
        const product = await Product.query()
                                    .preload('brand')
                                    .preload('discountType')
                                    .preload('model')
                                    .preload('productCategory')
                                    . preload('productLine')
                                    .where('id', params.id);
        return product;
    }

    async index({}){
        const product = await Product.query()
                                    .from('products')
                                    .select('*');

        return product
    }




}
