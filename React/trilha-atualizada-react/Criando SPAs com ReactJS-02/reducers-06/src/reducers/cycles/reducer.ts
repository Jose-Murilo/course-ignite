import { ActionsTypes } from './actions'
import { produce } from 'immer'

export interface Cycle {
  id: string
  task: string
  minutesAmount: number
  startDate: Date
  interruptedDate?: Date
  finishedDate?: Date
}

interface CyclesState {
  cycles: Cycle[]
  activeCycleId: string | null
}

interface CycleAction {
  type: string
  payload: {
    newCycle?: Cycle | undefined
  }
}

export function cycleReducer(state: CyclesState, action: CycleAction) {
  switch (action.type) {
    case ActionsTypes.ADD_NEW_CYCLE:
      return produce(state, (draft) => {
        if (action.payload.newCycle) {
          draft.cycles.push(action.payload.newCycle)
          state.activeCycleId = action.payload.newCycle.id
        }
      })

    case ActionsTypes.INTERRUPT_CURRENT_CYCLE: {
      const currentCycleIndex = state.cycles.findIndex((cycle) => {
        return cycle.id === state.activeCycleId
      })

      if (currentCycleIndex < 0) return state

      return produce(state, (draft) => {
        draft.activeCycleId = null
        draft.cycles[currentCycleIndex].interruptedDate = new Date()
      })
    }
    case ActionsTypes.MARK_CURRENT_CYCLE_AS_FINISHED: {
      const currentCycleIndex = state.cycles.findIndex((cycle) => {
        return cycle.id === state.activeCycleId
      })

      if (currentCycleIndex < 0) return state

      return produce(state, (draft) => {
        draft.activeCycleId = null
        draft.cycles[currentCycleIndex].finishedDate = new Date()
      })
    }
    default:
      return state
  }
}
