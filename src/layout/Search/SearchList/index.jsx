import React from 'react'
import SearchItem from '../SearchItem';

const SearchList = ({ data }) => {
    console.log("a: ", data);
    const listItem = data.map(item => <SearchItem key={item.id} data={item} />);
    return (
        <>
            {listItem}
        </>
    );
}

export default SearchList
