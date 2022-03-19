import { NextFunction, Request, Response } from 'express';
import * as Joi from 'joi';

export const schemeLogin = Joi.object({
  email: Joi.string().email().required().messages({
    'string.required': 'All fields must be filled',
  }),
  password: Joi.string().required().min(7).messages({
    'string.required': 'All fields must be filled',
  }),
});

const validateLogin = async (req: Request, res: Response, next: NextFunction) => {
  const { email, password } = req.body;
  const { error } = schemeLogin.validate({ email, password });
  if (error) {
    return res.status(400).json({ message: error.message });
  }
  return next();
};

export default validateLogin;
