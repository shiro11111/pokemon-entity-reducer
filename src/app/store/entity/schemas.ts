import { schema } from 'normalizr';

export const pokemon = new schema.Entity('pokemon', {}, {idAttribute: 'id'});
