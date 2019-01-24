import { createSelector } from '@ngrx/store';
import * as fromReducer from './entity.reducer';
import { getEntityState } from '../app-reducer';

export const getStateEntity = createSelector(getEntityState, fromReducer.getEntitiesState);
