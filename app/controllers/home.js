/*!
 * Module dependencies.
 */
const mongoose = require('mongoose');

exports.index = function(req, res) {
    const Product = mongoose.model('Product');
    Product.find({ status:true }).then((data) => {
        res.render('home/index', {
            title: 'Hary Marthia Nugraha',
            label: 'Menampilkan Product status true',
            data: JSON.stringify(data),
        });
    })
};

exports.delete = function(req, res) {
    const Product = mongoose.model('Product');
    var response = {
        title: 'Hary Marthia Nugraha',
        label: 'List Product',
    }
    Product.deleteMany({ status:false }, { uid:'dn3' }).then((data) => {
        response.message = 'tidak ditemukan data sesuai kriteria'
        if (data.deletedCount > 0) {
            response.message = 'Data berhasil di hapus'
        }
        Product.find({ status:true }).then((data) => {
            response.data = JSON.stringify(data)
            res.render('home/index', response);
        })
    })
};