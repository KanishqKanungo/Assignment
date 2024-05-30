import React from 'react';
import './Popup.css';
import { useCardContext } from './contexts/CardsContext';
const Popup = ({ onClose }) => {
    const {state,dispatch} = useCardContext();
    const cardsPerPage = 6;
    const {cards, currentPage}=state;
    const totalPages = Math.ceil(cards.length/ cardsPerPage);
    const startIndex = (currentPage-1)*cardsPerPage;
    const endIndex = startIndex+cardsPerPage;
    const currentCards = cards.slice(startIndex,endIndex);
    
    const handleRemoveCard = (id) => {
        dispatch({type:'REMOVE_CARD',payload:id});
    };

    const handleSetPage = (page) => {
        dispatch({type:'SET_PAGE', payload: page});
    };

    return(
        <div className="popup">
            <div className="popup-inner">
                <button className="close-btn" onClick={onClose}>x</button>
                <div className="cards-container">
                    {currentCards.map(card=>(
                        <div key={card.id} className="card">
                            <p>{card.content}</p>
                            <button className="card-close-btn" onClick={()=>handleRemoveCard(card.id)}>x</button>
                        </div>
                    ))}
                </div>
                <div className="pagination">
                    {Array.from({length: totalPages},(_, i) => (
                        <button 
                            key={i+1}
                            className={'page-btn ${currentPage === i+1 ? "active" : ""}'}
                            onClick={() => handleSetPage(i+1)}
                        >
                            {i+1}
                        </button>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Popup;