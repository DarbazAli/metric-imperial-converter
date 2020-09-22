'use strict';

// Handling API Route
const ConvertHandler = require('./convertHandler');

module.exports = app => {
    const convertHandler = new ConvertHandler();

    const { getNum, getUnit, convert, getReturnUnit, toString} = convertHandler

    app
    .route('/api/convert')
    .get( (req, res) => {
        const {input} = req.query;

        const inintNum = getNum(input)
        const initUnit = getUnit(input)
        const returnNum = convert(inintNum, initUnit)
        const returnUnit = getReturnUnit(initUnit)
        const string = toString(inintNum, initUnit, returnNum, returnUnit)

        let response = {};

        if ( !input ) {
            response.error = 'invalid number and unit'
        }
        else if ( inintNum && !initUnit ) {
            response.error = 'invalid unit'
        }
        else {
            response = {
                inintNum,
                initUnit,
                returnNum,
                returnUnit,
                string: string
            }
        }

        // respond back with json object
        res.json(response)
    })



}