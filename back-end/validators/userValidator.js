const { body, validationResult } = require('express-validator');

// Validation rules for updating user settings
const validateUserSettings = [
  body('aboutMe')
    .optional()
    .isString()
    .withMessage('About Me must be a string'),
  body('number')
    .optional()
    .matches(/^\d{3}-\d{3}-\d{4}$/)
    .withMessage('Number must be in the format 123-456-7890'),
  body('otherSocialMedia')
    .optional()
    .isURL()
    .withMessage('Other Social Media must be a valid URL'),
  body('friendsList')
    .optional()
    .isArray()
    .withMessage('Friends List must be an array'),
];

// Middleware to handle validation results
const handleValidationErrors = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  next();
};

module.exports = {
  validateUserSettings,
  handleValidationErrors,
};
