/*!
 * Module dependencies
 */

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

/**
 * Product schema
 */

const ProductSchema = new Schema({
  uid: { type: String, default: '' },
  nama: { type: String, default: '' },
  kategori: { type: String, default: '' },
  status: { type: Boolean, default: false },
  type: { type: String, default: 'ecommerce' },
});

/**
 * - pre-save hooks
 * - validations
 * - virtuals
 */

/**
 * Methods
 */

ProductSchema.method({});

/**
 * Statics
 */

ProductSchema.static({});

/**
 * Register
 */

mongoose.model('Product', ProductSchema);
