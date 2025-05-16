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

const router = Router();
const jsonParser = express.json({
  type: ['application/json', 'application/vnd.api+json'],
  limit: '100kb',
});

router.get('/contacts', ctrlWrapper(getContactsController));
router.get('/contacts/:contactId', ctrlWrapper(getContactByIdController));
router.post('/contacts', jsonParser, ctrlWrapper(createContactsController));
router.delete('/contacts/:contactId', ctrlWrapper(deleteContactController));
router.put(
  '/contacts/:contactId',
  jsonParser,
  ctrlWrapper(upsertContactController),
);
router.patch(
  '/contacts/:contactId',
  jsonParser,
  ctrlWrapper(patchContactController),
);
export default router;
