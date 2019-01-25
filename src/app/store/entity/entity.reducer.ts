import { PayloadAction } from '../models/payload-action';

export interface EntitiesState {
  entities: { [key: string]: any };
}

const initialState: EntitiesState = {
  entities: {
    pokemon: {
      1: {
        location: 'Krasnik Fabryczny Aby'
      },
      2: {
        location: 'Krasnik Fabryczny Aby'
      }
    }
  }
};

export function entityReducer(state = initialState, action: PayloadAction) {
  if (action && action.payload && action.payload.entities) {
    let entity = {};
    const keys = Object.keys(initialState.entities);

    keys.forEach((pokemon: string) => {
      const actionEntity = action.payload.entities[pokemon] || {};
      const stateEntity = state.entities[pokemon] || {};
      const newEntities = {};
      const ids = Object.keys(actionEntity);

      console.log('actionEntity', actionEntity);
      console.log('stateEntity', stateEntity);

      ids.forEach((id: string) => {
        newEntities[id] = { ...(stateEntity[id] || {}), ...(actionEntity[id] || {}) };
        console.log('newEntities[id]', newEntities[id]);
      });
      console.log('newEntities', newEntities);
      entity[pokemon] = { ...stateEntity, ...newEntities };
    });
    return {
      ...state,
      entities: entity
    };
  }
  return state;

}

export const getEntitiesState = (state: EntitiesState) => state.entities;
