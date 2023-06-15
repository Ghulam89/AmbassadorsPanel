import axios from 'axios'
import React, { useEffect, useState } from 'react'
import ApiUrl from '../BaseUrl'
import { useParams } from 'react-router-dom'
const ViewProduct = () => {
const {id} = useParams()
    const [categories,setCategories] =useState({})

    useEffect(()=>{
        axios.get(`${ApiUrl}/mainStockRack/viewProduct?id=`+id).then((res) => {
            console.log(res.data);
            setCategories(res.data);
            console.log(categories);
          });
    },[])
  return (
    <>
     <div>
        <div className='container-fluid py-5'>
            <div className='row pt-5' >
                <div className='col-md-10 mx-auto'>
                <article className="postcard dark blue">
  <a className="postcard__img_link" href="#">
    <img
      className="postcard__img"
      src={`${ApiUrl}/images/${categories?.image}`}
      alt="Image Title"
    />
  </a>
  <div className="postcard__text">
    <h1 className="postcard__title blue">
      <a href="#">{categories?.title}</a>
    </h1>
    <div className="postcard__subtitle small">
      <time dateTime="2020-05-25 12:00:00">
        <i className="fas fa-calendar-alt mr-2" />
        Mon, May 25th 2020
      </time>
    </div>
    <div className="postcard__bar" />
    <div className="postcard__preview-txt">
      {categories?.productDetail}
    </div>
    <ul className="postcard__tagbox">
      <li className="tag__item">
        <i className="fas fa-tag mr-2" />
        Podcast
      </li>
      <li className="tag__item">
        <i className="fas fa-clock mr-2" />
        55 mins.
      </li>
      <li className="tag__item play blue">
        <a href="#">
          <i className="fas fa-play mr-2" />
          Play Episode
        </a>
      </li>
    </ul>
  </div>
</article>
                </div>
            </div>
       
        </div>
   

     </div>
    </>
  )
}

export default ViewProduct