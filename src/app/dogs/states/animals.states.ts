import { Injectable } from '@angular/core';
import { Action, Selector, State, StateContext, StateToken } from '@ngxs/store';
import { AnimalStateModel } from '../models/animal.model';
import { DogActions } from '../actions/dogActions';

const DOG_STATE_TOKEN = new StateToken<AnimalStateModel>('dogs');

@State({
  name: DOG_STATE_TOKEN,
  defaults: {
    names: []
  }
})
@Injectable()
export class DogState {

  @Selector() static feedDogs(state: AnimalStateModel){
    return state.names
  }

  @Action(DogActions.FeedDogs)
  feedDogs(ctx: StateContext<AnimalStateModel>){
    const state = ctx.getState();
    return ctx.setState({
      ...state
    });
  }

  @Action(DogActions.AddDog)
  addDog(ctx: StateContext<AnimalStateModel>, action: { name: '' }){

    const state = ctx.getState();
    const updatedNames = [...state.names, action.name];
    ctx.patchState({
      names: updatedNames
    });

  }

  @Action(DogActions.DeleteDog)
  removeDog(ctx: StateContext<AnimalStateModel>, action: { id: number }){
    try{
      const state = ctx.getState();
      console.log(state.names.slice(0, action.id), ' slice ', state.names.concat(state.names.slice(action.id + 1)),  ' names ', state.names.slice(0, action.id).concat(state.names.slice(action.id + 1)))
      const arrayWithOutValueExcluid = state.names.slice(0, action.id).concat(state.names.slice(action.id + 1));
      ctx.patchState({
        names: arrayWithOutValueExcluid
      })
    } catch (error){
      console.log(error, ' erro aqui')
    }

  }
}
