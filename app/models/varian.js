/*!
 * Module dependencies
 */

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

/**
 * Varian schema
 */

const VarianSchema = new Schema({
  id_produk: { type: String, ref:'Product'},
  nama: { type: String, default: '' },
  harga_beli: { type: Number, default: '' },
  harga_jual: { type: Number, default: false },
  sku: { type: String, default: false },
});

/**
 * - pre-save hooks
 * - validations
 * - virtuals
 */

/**
 * Methods
 */

VarianSchema.method({});

/**
 * Statics
 */

VarianSchema.static({});

/**
 * Register
 */

mongoose.model('Varian', VarianSchema);
