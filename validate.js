const Joi = require('joi');
const validateReq = (firstName, lastName, email, password) => {
    const schema = Joi.object().keys({
        firstName: Joi.string().alphanum().min(1).max(10).required(),
        lastName: Joi.string().alphanum().min(1).max(10).required(),
        email: Joi.string().email().required(),
        password: Joi.string().min(8).required()
    })
    const schemaToValidate = {
        firstName,
        lastName,
        email, 
        password
    }
    const validationRes = schema.validate(schemaToValidate);
    return validationRes;
}
module.exports = validateReq;