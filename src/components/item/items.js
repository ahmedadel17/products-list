import { Add, Remove } from '@mui/icons-material';
import React from 'react';

const Items = (props) => {
    const {items, del,add,minus} = props;
    let length = items.length
    const ListItem = length ? (
        items.map(item => {
            return(
                <div key={item.id} className="item">
                    <p>{item.product}</p>
                    <p>{item.price}</p>
                   
                   
                    <p style={{border:'none',}}> <Remove onClick={()=>minus(item.id)} sx={{fontSize:'17px',color:'red'}} /> {item.quantity} <Add onClick={()=>add(item.id)} sx={{color:'green'}} style={{'alignSelf':'center'}} />   </p>
                    
                 
                    
                    <p className="delete" onClick={() => del(item.id)}>&times;</p>
                </div>
            )
        })
    ) : (
        <div className="text">There are no items, Try to add some.</div>
    )
    return (
        <div>
            <div className="header item">
                <p>Product</p>
                <p>Price</p>
                <p>quantity</p>
                
                <p>Edit</p>
            </div>
            {ListItem}
        </div>
    )
}

export default Items