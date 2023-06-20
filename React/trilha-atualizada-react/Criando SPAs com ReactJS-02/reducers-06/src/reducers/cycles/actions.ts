import { Cycle } from './reducer'

export enum ActionsTypes {
  ADD_NEW_CYCLE = 'ADD_NEW_CYCLE',
  INTERRUPT_CURRENT_CYCLE = 'INTERRUPT_CURRENT_CYCLE',
  MARK_CURRENT_CYCLE_AS_FINISHED = 'MARK_CURRENT_CYCLE_AS_FINISHED',
}

export function createNewCycleAction(newCycle: Cycle) {
  return {
    type: ActionsTypes.ADD_NEW_CYCLE,
    payload: {
      newCycle,
    },
  }
}

export function interruptCycleAction() {
  return {
    type: ActionsTypes.INTERRUPT_CURRENT_CYCLE,
    payload: {},
  }
}

export function markCurrentCycleAsFinishedAction() {
  return {
    type: ActionsTypes.MARK_CURRENT_CYCLE_AS_FINISHED,
    payload: {},
  }
}
