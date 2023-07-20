import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class extends BaseSchema {
  protected tableName = 'products'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id').primary();
      table.string('name', 100).notNullable();
      table.integer('brand_id')
      .unsigned()
      .references('id')
      .inTable('brands')
      .onUpdate('CASCADE')
      .onDelete('CASCADE');
      table.string('supplyer', 100);
      table.string('its_perishable', 10).notNullable();
      table.integer('product_line_id')
      .unsigned()
      .references('id')
      .inTable('product_lines')
      .onUpdate('CASCADE')
      .onDelete('CASCADE');
      table.integer('model_id')
      .unsigned()
      .references('id')
      .inTable('models')
      .onUpdate('CASCADE')
      .onDelete('CASCADE');
      table.double('cost', 9.2);
      table.double('sale_price', 9.2).notNullable();
      table.double('discount', 9.2);
      table.integer('discount_type_id')
      .unsigned()
      .references('id')
      .inTable('discount_types')
      .onUpdate('CASCADE')
      .onDelete('CASCADE');
      table.integer('product_category_id')
      .unsigned()
      .references('id')
      .inTable('product_categories')
      .onUpdate('CASCADE')
      .onDelete('CASCADE')
      /**
       * Uses timestamptz for PostgreSQL and DATETIME2 for MSSQL
       */
      table.timestamp('created_at', { useTz: true })
      table.timestamp('updated_at', { useTz: true })
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
