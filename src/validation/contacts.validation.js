import Joi from 'joi';

export const createContactSchema = Joi.object({
  name: Joi.string().min(3).max(20).required().messages({
    'string.base': 'Должно быть текстом',
    'string.min': 'Должно содержать не менее 3 символов',
    'string.max': 'Должно содержать не более 20 символов',
    'any.required': 'Поле обязательное',
  }),
  phoneNumber: Joi.string()
    .pattern(/^[\d\s()+/-]{3,20}$/)
    .min(3)
    .max(20)
    .required()
    .messages({
      'string.pattern.base':
        'Должно содержать только цифры, пробелы, скобки, плюс или минус',
      'string.min': 'Должно содержать не менее 3 символов',
      'string.max': 'Должно содержать не более 20 символов',
      'any.required': 'Поле обязательное',
    }),
  email: Joi.string().email().min(6).max(30).required().messages({
    'string.email': 'Должно быть валидным эл. адресом',
    'string.min': 'Должно содержать не менее 6 символов',
    'string.max': 'Должно содержать не более 30 символов',
    'any.required': 'Поле обязательное',
  }),
  isFavourite: Joi.boolean().default(false).messages({
    'boolean.base': 'Должно быть true или false)',
  }),
  contactType: Joi.string()
    .valid('work', 'home', 'personal')
    .required()
    .messages({
      'any.only': 'Должно быть одним из: work, home, personal',
      'any.required': 'Поле обязательное',
    }),
});
export const updateContactSchema = Joi.object({
  name: Joi.string().min(3).max(20).messages({
    'string.base': 'Должно быть текстом',
    'string.min': 'Должно содержать не менее 3 символов',
    'string.max': 'Должно содержать не более 20 символов',
  }),
  phoneNumber: Joi.string()
    .pattern(/^[\d\s()+/-]{3,20}$/)
    .min(3)
    .max(20)
    .messages({
      'string.pattern.base':
        'Должно содержать только цифры, пробелы, скобки, плюс или минус',
      'string.min': 'Должно содержать не менее 3 символов',
      'string.max': 'Должно содержать не более 20 символов',
    }),
  email: Joi.string().email().min(6).max(30).messages({
    'string.email': 'Должно быть валидным эл. адресом',
    'string.min': 'Должно содержать не менее 6 символов',
    'string.max': 'Должно содержать не более 30 символов',
  }),
  isFavourite: Joi.boolean().messages({
    'boolean.base': 'Должно быть true или false)',
  }),
  contactType: Joi.string().valid('work', 'home', 'personal').messages({
    'any.only': 'Должно быть одним из: work, home, personal',
  }),
});
