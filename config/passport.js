'use strict';

/*
 * Module dependencies.
 */

const mongoose = require('mongoose');
const local = require('./passport/local');

const User = mongoose.model('User');
const Product = mongoose.model('Product');
const Varian = mongoose.model('Varian');

// Drop collection before init
Product.collection.drop();
Varian.collection.drop();

// init data
var productInit = [
    {
        uid: 'dn1',
        nama: 'baju muslim',
        kategori: 'baju',
        status: true,
    },
    {
        uid: 'dn2',
        nama: 'baju renang',
        kategori: 'baju',
        status: false,
    },
    {
        uid: 'dn3',
        nama: 'baju batik',
        kategori: 'baju',
        status: true,
    },
];

// Init seed
Product.insertMany(productInit, function(error, docs) {
    docs.forEach((data) => {
        if (data.uid == 'dn1') {
            var varianSatu = [
                {
                    id_produk: data._id,
                    nama: 'warna putih',
                    harga_beli: 80000,
                    harga_jual: 90000,
                    sku: 'muslim001',
                },
                {
                    id_produk: data._id,
                    nama: 'warna hitam',
                    harga_beli: 85000,
                    harga_jual: 95000,
                    sku: 'muslim002',
                },
            ];
            Varian.insertMany(varianSatu, function(error, docs) {});
        }
        if (data.uid == 'dn2') {
            var varianSatu = [
                {
                    id_produk: data._id,
                    nama: 'warna kuning',
                    harga_beli: 200000,
                    harga_jual: 250000,
                    sku: 'muslim002',
                },
            ];
            Varian.insertMany(varianSatu, function(error, docs) {});
        }
        if (data.uid == 'dn3') {
            var varianSatu = [
                {
                    id_produk: data._id,
                    nama: 'warna abu-abu',
                    harga_beli: 100000,
                    harga_jual: 150000,
                    sku: 'batik001',
                },
            ];
            Varian.insertMany(varianSatu, function(error, docs) {});
        }
    })
});

/**
 * Expose
 */

module.exports = function(passport) {
  // serialize and deserialize sessions
  passport.serializeUser((user, done) => done(null, user.id));
  passport.deserializeUser((id, done) => User.findOne({ _id: id }, done));

  // use these strategies
  passport.use(local);
};
