import React, { createContext , useReducer, useContext } from 'react';

const CardContext = createContext();

const initialState = {
    cards: Array.from({length:20},(_,i)=>({ id: i + 1, content: 'Card'})),
    currentPage:1,
};

const cardReducer = (state, action) => {
    switch(action.type){
        case 'REMOVE_CARD':
            const updateCards = state.cards.filter(card => card.id !== action.payload);
            return {...state, cards: updateCards};
        case 'SET_PAGE':
            return {...state, currentPage: action.payload};
        default:
            return state;
    }
};

export const CardProvider = ({ children }) =>{
    const[state,dispatch] = useReducer(cardReducer,initialState);
    return(
        <CardContext.Provider value={{state,dispatch}}>{children}</CardContext.Provider>
    );
};


export const useCardContext = () => useContext(CardContext);