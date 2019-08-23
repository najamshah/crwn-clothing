import React from 'react';
import {connect} from 'react-redux';
import {selectCollection} from '../../redux/shop/shop.selectors.js';
import './collection.styles.scss';
import CollectionItem from '../../components/collection-item/collection-item.component'

const CollectionPage = ({ collection })=> {
console.log(collection);
const {title, items} = collection;
   return (<div className='collection-page'>
        <h1 className="title">{title}</h1>
        <div className="items" > 
            {
                items.map( item=> (<CollectionItem key={item.id} item={item} />))

            }
        </div>
    </div>
)}

const mapStatsToProps = (state, ownProps) => ({
    collection:selectCollection(ownProps.match.params.collectionId) (state)
})

export default connect(mapStatsToProps) (CollectionPage);


