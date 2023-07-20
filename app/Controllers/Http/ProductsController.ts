// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import Product from "App/Models/Product"

export default class ProductsController {
    
    async store({request}){
        const{
            name,
            supplyer,
            its_perishable,
            cost,
            sale_price,
            discount
        } = request.body()
        const products = await Product.create({
            name,
            supplyer,
            its_perishable,
            cost,
            sale_price,
            discount
        });
        return products;
    }
}
