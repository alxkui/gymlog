import { Exercise } from '@/types/Exercise';
import React, { createContext, useContext, useReducer } from 'react';

type Action = { type: 'updateExercises', payload: Exercise[] }
type Dispatch = (action: Action) => void
type State = { exercises: Exercise[] }
type LogProviderProps = { children: React.ReactNode }

const LogContext = createContext<
    {state: State; dispatch: Dispatch} | undefined
>(undefined);

const initialLog = {
    exercises: []
}

function logReducer(state: State, action: Action) {
    switch (action.type) {
        case 'updateExercises': {
            return { exercises: action.payload }
        }
        default: {
            throw new Error(`Unhandled action type: ${action.type}`)
        }
    }
}

function LogProvider({ children }: LogProviderProps) {
    const [state, dispatch] = useReducer(logReducer, initialLog);
    const value = { state, dispatch };
    return (
        <LogContext.Provider value={value}>
            { children }
        </LogContext.Provider>
    )
}

function useLog() {
    const context = useContext(LogContext);
    if(context === undefined) {
        throw new Error(`useLog must be used within a LogProvider`);
    }
    return context;
}

export {LogProvider, useLog}