import Joi from 'joi';

export const registerUserSchema = Joi.object({
  name: Joi.string().min(3).max(30).required().messages({
    'string.base': 'Должно быть текстом',
    'string.min': 'Должно содержать не менее 3 символов',
    'string.max': 'Должно содержать не более 30 символов',
    'any.required': 'Поле обязательное',
  }),
  email: Joi.string().email().min(6).max(30).required().messages({
    'string.email': 'Должно быть валидным эл. адресом',
    'string.min': 'Должно содержать не менее 6 символов',
    'string.max': 'Должно содержать не более 30 символов',
    'any.required': 'Поле обязательное',
  }),
  password: Joi.string().min(6).max(30).required().messages({
    'string.email': 'Должно быть валидным эл. адресом',
    'string.min': 'Должно содержать не менее 6 символов',
    'string.max': 'Должно содержать не более 30 символов',
    'any.required': 'Поле обязательное',
  }),
});

export const loginUserSchema = Joi.object({
  email: Joi.string().email().min(6).max(30).required().messages({
    'string.base': 'Должно быть текстом',
    'string.min': 'Должно содержать не менее 6 символов',
    'string.max': 'Должно содержать не более 30 символов',
    'any.required': 'Поле обязательное',
  }),
  password: Joi.string().min(6).max(30).required().messages({
    'string.email': 'Должно быть валидным эл. адресом',
    'string.min': 'Должно содержать не менее 6 символов',
    'string.max': 'Должно содержать не более 30 символов',
    'any.required': 'Поле обязательное',
  }),
});
