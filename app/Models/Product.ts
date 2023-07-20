import { BaseModel, BelongsTo, belongsTo, column} from "@ioc:Adonis/Lucid/Orm";
import Brand from "./Brand";
import ProductLine from "./ProductLine";
import Model from "./Model";
import DiscountType from "./DiscountType";
import ProductCategory from "./ProductCategory";
import { DateTime } from "luxon";


export default class Product extends BaseModel{
  @column({ isPrimary: true })
  public id: number;

  @column()
  public name: string;

  @column()
  public supplyer: string;

  @column()
  public itsPerishable: string;

  @column()
  public cost: number;

  @column()
  public salePrice: number;

  @column()
  public discount: number;

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime;

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime;

  @belongsTo(() => Brand, { foreignKey: 'brandId' })
  public brandId: BelongsTo<typeof Brand>;

  @belongsTo(() => ProductLine, { foreignKey: 'productLineId' })
  public productLineId: BelongsTo<typeof ProductLine>;

  @belongsTo(() => Model, { foreignKey: 'modelId' })
  public modelId: BelongsTo<typeof Model>;

  @belongsTo(() => DiscountType, { foreignKey: 'discountTypeId' })
  public discountTypeId: BelongsTo<typeof DiscountType>;

  @belongsTo(() => ProductCategory, { foreignKey: 'productCategoryId' })
  public productCategoryId: BelongsTo<typeof ProductCategory>;

  
}
