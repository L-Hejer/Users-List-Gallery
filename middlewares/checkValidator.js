const { check, validationResult } = require('express-validator');


//Validate User Register
exports.validateAddUser = () => [
    //Name not empty
    check('name', 'Please enter your name').notEmpty(),
    //Surname not empty
    check('surName', 'Please enter your surname').notEmpty(),
    //birthYear not empty
    check('birthYear', 'Please enter your birth year').notEmpty(),
    //birthPlace not empty
    check('birthPlace', 'Please enter your birth place').notEmpty(),
];

//Validate Picture Add
exports.validatePictureAdd = () => [
    //Title not empty
    check('title', 'Please enter a picture title').notEmpty(),
    //Link not empty
    check('link', 'Please enter a picture link').notEmpty(),
]


exports.validate = (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty())
    return res.status(400).json({ message: errors.array()[0].msg});
    next();
}