import {
  createContact,
  deleteContact,
  getAllContacts,
  getContactById,
  updateContact,
} from '../services/contacts.services.js';
import createHttpError from 'http-errors';
import { parsePaginationParams } from '../utils/parsePaginationParams.js';
import { parseSortParams } from '../utils/parseSortParams.js';
import { parseFilterParams } from '../utils/parseFilterParams.js';

export const getContactsController = async (req, res) => {
  const { page, perPage } = parsePaginationParams(req.query);
  const { sortBy, sortOrder } = parseSortParams(req.query);
  const filter = parseFilterParams(req.query);
  const contacts = await getAllContacts({
    page,
    perPage,
    sortBy,
    sortOrder,
    filter,
    userId: req.user.id,
  });
  res.status(200).send({
    status: 200,
    message: 'Successfully found contact!',
    data: contacts,
  });
};
export const getContactByIdController = async (req, res, next) => {
  const { contactId } = req.params;
  const contact = await getContactById(contactId, req.user.id);
  if (!contact) {
    next(createHttpError(404, 'Контакт не найден'));
    return;
  }
  res.status(200).send({
    status: 200,
    message: `Контакт с id ${contactId} успешно найден!`,
    data: contact,
  });
};
export const createContactsController = async (req, res) => {
  const contact = await createContact({ ...req.body, userId: req.user.id });
  res.status(201).json({
    status: 201,
    message: `Контакт успешно создан!`,
    data: contact,
  });
};
export const deleteContactController = async (req, res, next) => {
  const { contactId } = req.params;
  const contact = await deleteContact(contactId, req.user.id);

  if (!contact) {
    next(createHttpError(404, 'Контакт не найден'));
    return;
  }
  res.status(204).send();
};
export const upsertContactController = async (req, res, next) => {
  const { contactId } = req.params;
  const result = await updateContact(contactId, req.body, req.user.id, {
    upsert: true,
  });
  if (!result) {
    next(createHttpError(404, 'Контакт не найден'));
    return;
  }
  const status = result.isNew ? 201 : 200;
  res.status(status).json({
    status,
    message: `Контакт успешно добавлен!`,
    data: result.contact,
  });
};
export const patchContactController = async (req, res, next) => {
  const { contactId } = req.params;
  const result = await updateContact(contactId, req.body, req.user.id);
  if (!result) {
    next(createHttpError(404, 'Контакт не найден'));
    return;
  }
  res.json({
    status: 200,
    message: `Контакт успешно обновлен!`,
    data: result.contact,
  });
};
