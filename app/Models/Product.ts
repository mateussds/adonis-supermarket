import { BaseModel, BelongsTo, belongsTo, column} from "@ioc:Adonis/Lucid/Orm";
import Brand from "./Brand";
import ProductLine from "./ProductLine";
import Model from "./Model";
import DiscountType from "./DiscountType";
import ProductCategory from "./ProductCategory";
import { DateTime } from "luxon/src/datetime";

export default class Product extends BaseModel{
  @column({ isPrimary: true })
  public id: number;

  @column()
  public name: string;

  @column()
  public supplyer: string;

  @column()
  public its_perishable: string;

  @column()
  public cost: number;

  @column()
  public sale_price: number;

  @column()
  public discount: number;

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime;

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime;

  @belongsTo(() => Brand, { foreignKey: 'brandId' })
  public brand_id: BelongsTo<typeof Brand>;

  @belongsTo(() => ProductLine, { foreignKey: 'productLineId' })
  public product_line_id: BelongsTo<typeof ProductLine>;

  @belongsTo(() => Model, { foreignKey: 'modelId' })
  public model_id: BelongsTo<typeof Model>;

  @belongsTo(() => DiscountType, { foreignKey: 'discountTypeId' })
  public discount_type_id: BelongsTo<typeof Brand>;

  @belongsTo(() => ProductCategory, { foreignKey: 'productCategoryId' })
  public product_category_id: BelongsTo<typeof Brand>;

  
}
