import { Injectable } from '@angular/core';
import { Action, Selector, State, StateContext, StateToken } from '@ngxs/store';
import { AnimalStateModel } from '../models/animal.model';
import { AnimalActions } from '../actions/animal.actions';

const ANIMAL_STATE_TOKEN = new StateToken<AnimalStateModel>('animal');

@State({
  name: ANIMAL_STATE_TOKEN,
  defaults: {
    names: []
  }
})
@Injectable()
export class AnimalsState {

  @Selector() static feedAnimals(state: AnimalStateModel){
    return state.names
  }

  @Action(AnimalActions.FeedAnimals)
  feedAnimalsAction(ctx: StateContext<AnimalStateModel>){
    const state = ctx.getState();
    return ctx.setState({
      ...state
    });
  }

  @Action(AnimalActions.AddAnimal)
  addAnimal(ctx: StateContext<AnimalStateModel>, action: { name: '' }){

    const state = ctx.getState();
    const updatedNames = [...state.names, action.name];
    ctx.patchState({
      names: updatedNames
    });

  }

  @Action(AnimalActions.DeleteAnimal)
  removeAnimal(ctx: StateContext<AnimalStateModel>, action: { id: 0 }){
    const state = ctx.getState();
    state.names.splice(action.id, 1)
    const updateName = [...state.names]
    ctx.patchState({
      names: updateName
    })
  }
}
