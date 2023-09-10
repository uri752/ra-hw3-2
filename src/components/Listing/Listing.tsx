import React from 'react'
import './Listing.css'
import { IItem } from '../../types'

interface IListingProps {
  items: IItem[]
}

export default function Listing(props: IListingProps) {
  
  const { items } = props;  
  const itemsFilter = items.filter( item => item.title);
  const itemsData = itemsFilter.map( item =>     
      (
        <div className="item" key={item.listing_id}>
          <div className="item-image">
            <a href={item.url}>
              <img src={item.MainImage && item.MainImage.url_570xN}/>
            </a>
          </div>
          <div className='item-details'>
            <p className='item-title'>{item.title && truncateString(item.title,50)}</p>          
            
            { item.currency_code === 'USD' 
              ? <p className='item-price'>${item.price}</p>
              :
               ( item.currency_code === 'EUR'                
                  ? <p className='item-price'>€{item.price}</p>
                  : <p className='item-price'>{item.price} {item.currency_code}</p>
               )            
            }            
            { item.quantity && item.quantity <= 10
              ? <p className='item-quantity level-low'>{item.quantity}</p>
              : 
              (item.quantity && item.quantity <= 20
                ? <p className='item-quantity level-medium'>{item.quantity}</p>
                : <p className='item-quantity level-high'>{item.quantity}</p>
              )
            }
          </div>
        </div>      
      )    
  );  

  return (
   <>
    <div className='item-list' >{itemsData}</div>
   </>
  )

}

function truncateString(str: string, maxlength: number) {
  return (str.length >= maxlength) ? str.slice(0, maxlength-1)+'...' : str;
}
