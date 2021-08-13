import React from 'react';
import './collection.preview.component.style.scss';
import CollectionItem from '../collection-item/collection.item.component';

const CollectionPreview = ({title,items}) => (
   
    <div className="collection-preview">
        <h1 className="title">{title.toUpperCase()}</h1>
        <div className='preview'> 
          {
              items.filter((item,indx) => indx < 4).map( ({id, ...otherItemProp}) => (
                  //<div key={item.id}>{item.name}</div>
                  <CollectionItem key={id} {...otherItemProp}/>
              ))
          }
        </div>
    </div>
)

export default CollectionPreview;