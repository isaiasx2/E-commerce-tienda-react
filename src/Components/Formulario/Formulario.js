import React,{Fragment} from "react";
import { collection, getFirestore,addDoc, updateDoc,doc} from "firebase/firestore";
import {useForm} from "react-hook-form";
import { useCartContext } from "../../context/CartContext";
import swal from "sweetalert";
import { useState } from "react";
import {useParams} from "react-router-dom";










export const Formulario = ()=>{
  const {totalPrice,cart} = useCartContext();
   
  const{register, handleSubmit} = useForm({defaultValues:{

    buyer:{
      nombre:"",
      email:"",
      contacto:"",
    },

    
    items: cart.map(product =>({id:product.id,title:product.name, price:product.price, quantity: product.quantity})),

    date: Date(),
    total: totalPrice(),

  }}); 

 
      
  


  const sendOrder = (user, event) =>{
    const db = getFirestore();
    const ordersCollection = collection(db, "orders");
    addDoc(ordersCollection,user).then(({id}) =>  swal({title: "Muy bien!",text: "Tu orden " +(id)+ " fue generada!", icon: "success"})).catch(err =>console.log(err))
    event.target.reset();
    
   
 }


  
 const updateStock = ()=>{
   
  const db = getFirestore();
  const stockUpd = collection(db,"articulos")
  updateDoc(stockUpd, {stock:20})
}


    

   
    
      
  
 

    
    
    
    
    
    
   
    
  
  
  
  
  
  


  return (
    <Fragment>



    
      <h1>Formulario</h1>
      <form onSubmit={handleSubmit(sendOrder)}>
        <div>
          <label>Nombre</label>
          <input
              placeholder="Ingrese su nombre"
              type="text"
              {...register('buyer.nombre',{
              required:true,
              maxLength:15})}
              />
            
              
        </div>
        <div>
          <label>E-mail</label>
          <input
              placeholder="Ingrese su e-mail"
              type="email"
              {...register('buyer.email',{
              required:true,
              })}
              
              
          />
          
        </div>
        <div>
          <label>Contacto</label>
          <input
              placeholder="Ingrese numero de contacto"
              type="number"
              {...register('buyer.contacto',{
              required:true,
              })}
              
              
          />
          </div>
          <div>
            <input type="submit" value="Confirmar orden" />
          </div>
      </form>
    </Fragment>
)



}