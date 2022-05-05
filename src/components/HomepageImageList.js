import React, {useState} from 'react'

import CardMedia from '@mui/material/CardMedia'
import Button from '@mui/material/Button'

import { itemData } from '../constants/Cards'

export const HomepageImageList = () => {

  const [listHeight, setListHeight] = useState(468);
  const [buttonView, setButtonView] = useState(true);

  const changeHeight = () => {
    // const addiction = window.innerWidth>576 ? 234 : 175;
    setListHeight(listHeight + 234);
    setButtonView(false);
  }

  return (
    <section className='picturesList'>
      <section className='homepageImageList' style={{height: `${listHeight}px`}}>
        {itemData.map((item, index) => (
          <figure key={index} className='homepageImageList_wrapper'>
            <CardMedia
              component="img"
              image={`${item.img}?w=164&h=164&fit=crop&auto=format`}
              alt={item.title}
            />
            <div className='homepageImageList_info'>
              <p className='homepageImageList_text'>{item.text}</p>
            </div>  
          </figure>
        ))}
      </section>
      {buttonView && <Button onClick={changeHeight} variant="contained">Load More</Button>}
    </section>
  );
}
