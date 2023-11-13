const imgModel = require("../model/img.model");

module.exports.render = (req, res) => {
    res.render('home.ejs')
}

module.exports.handle = async (req, res) => {
    const { img } = req.body
    console.log(img);
    const data = await imgModel.insertMany({ img:'https://fake-image-486da5bae1c5.herokuapp.com/'+img })
    console.log(data);
    res.redirect('/home')
}