import React, { useEffect, useState } from 'react'
import { ItemDetail } from '../ItemDetail/ItemDetail';
import {useParams} from "react-router-dom";
import {getFirestore,doc, getDoc} from "firebase/firestore";
import Spinner from "react-bootstrap/Spinner"








export const ItemDetailContainer = () => {

    const[item, setItem] = useState();

    const {detalleId} = useParams();


     useEffect(()=>{
      const queryDB = getFirestore();
      const queryDoc = doc(queryDB, "articulos", detalleId);
      getDoc(queryDoc)
      .then(res=> setItem({ id:res.id, ...res.data() }))
      .catch(err => console.log(err))
    }, [detalleId])



        





  return (
    <div>{item?<ItemDetail item={item}/> : <Spinner animation="border" variant="primary" />}</div>
  )
}

