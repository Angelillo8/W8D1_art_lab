import ListItem from "./ListItem";
import React, { useState } from 'react';


const SearchList = ({ arts, clickedArtWork, changePage, page }) => {


    const listComponents = arts.map((pieceArt) => {

        return (
            <ListItem key={pieceArt.id} pieceArt={pieceArt} clickedArtWork={clickedArtWork} />
        );
    });

    const handleNextPage = () => {
        page += 1
        changePage(page)
    }

    const handlePreviousPage = () => {
        page -= 1
        changePage(page)
    }

    return (
        <>
            <ul>
                {listComponents}
            </ul>
            <div>
                {(page > 1) ? <button onClick={handlePreviousPage}>Previous</button> : null}
                <label>Page {page} </label>
                <button onClick={handleNextPage}>Next</button>
                {/* {(page > 1) ? <button onClick={() => changePage((pageNumber) => pageNumber - 1)}>Previous</button> : null}
                <label>Page {page} </label>
                <button onClick={() => changePage((pageNumber) => pageNumber + 1)}>Next</button> */}
            </div>
        </>
    );
};

export default SearchList;