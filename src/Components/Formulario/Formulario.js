import React,{Fragment} from "react";
import { collection, getFirestore,addDoc,} from "firebase/firestore";
import {useForm} from "react-hook-form";
import { useCartContext } from "../../context/CartContext";
import swal from "sweetalert";




export const Formulario = ()=>{
  const {totalPrice,cart} = useCartContext();
   
  const{register, handleSubmit} = useForm({defaultValues:{
    date: Date(),
    total: totalPrice(),
    items: {cart},

  }}); 


  const sendOrder = (user) =>{
    const db = getFirestore();
    const ordersCollection = collection(db, "orders");
    addDoc(ordersCollection,user).then(({id}) =>  swal({title: "Muy bien!",text: "Tu orden " +(id)+ " fue generada!", icon: "success"})).catch(err =>console.log(err));
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
              {...register('nombre',{
              required:true,
              maxLength:15})}
              />
            
              
        </div>
        <div>
          <label>E-mail</label>
          <input
              placeholder="Ingrese su e-mail"
              type="email"
              {...register('email',{
              required:true,
              })}
              
              
          />
          
        </div>
        <div>
          <label>Contacto</label>
          <input
              placeholder="Ingrese numero de contacto"
              type="number"
              {...register('contacto',{
              required:true,
              })}
              
              
          />
          </div>
          <div>
            <input type="submit" value="Confirmar orden"/>
          </div>
      </form>
    </Fragment>
)



}