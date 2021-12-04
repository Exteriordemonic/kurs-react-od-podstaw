import React from 'react';
import PropTypes from 'prop-types';
import ListItem from './ListItem/ListItem';
import './ListWrapper.css';

const ListWrapper = ({items}) => (
    <ul className="listWrapper__wrapper">
        { items.map(item => (
            <ListItem key={item.name} {...item} />
        ))}
    </ul>
);

ListWrapper.propTypes = {
    items: PropTypes.array.isRequired,
};

export default ListWrapper;