const imgModel = require("../model/img.model");

module.exports.render = (req, res) => {
    res.render('home.ejs')
}

module.exports.handle = async (req, res) => {
    const { img } = req.body
    console.log(img);
    const data = await imgModel.insertMany({ img:'https://fake-image2-01daa7239862.herokuapp.com/'+img })
    console.log(data);
    res.redirect('/home')
}