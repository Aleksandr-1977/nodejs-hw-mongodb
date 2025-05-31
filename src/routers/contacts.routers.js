import { Router } from 'express';
import express from 'express';
import {
  createContactsController,
  getContactByIdController,
  getContactsController,
  deleteContactController,
  upsertContactController,
  patchContactController,
} from '../controllers/contacts.controllers.js';
import { ctrlWrapper } from '../utils/ctrlWrapper.js';
import { isValidId } from '../middlewares/isValidId.js';
import { validateBody } from '../middlewares/validateBody.js';
import {
  createContactSchema,
  updateContactSchema,
} from '../validation/contacts.validation.js';
import { authenticate } from '../middlewares/authenticate.js';

const router = Router();
const jsonParser = express.json({
  type: ['application/json', 'application/vnd.api+json'],
  limit: '100kb',
});
router.use(authenticate);
router.get('/', ctrlWrapper(getContactsController));
router.get('/:contactId', isValidId, ctrlWrapper(getContactByIdController));
router.post(
  '/',
  jsonParser,
  validateBody(createContactSchema),
  ctrlWrapper(createContactsController),
);
router.delete('/:contactId', isValidId, ctrlWrapper(deleteContactController));
router.put(
  '/:contactId',
  isValidId,
  jsonParser,
  validateBody(createContactSchema),
  ctrlWrapper(upsertContactController),
);
router.patch(
  '/:contactId',
  isValidId,
  jsonParser,
  validateBody(updateContactSchema),
  ctrlWrapper(patchContactController),
);
export default router;
