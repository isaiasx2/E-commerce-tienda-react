import React from "react";
import { collection, getFirestore,addDoc, updateDoc,doc} from "firebase/firestore";
import {useForm} from "react-hook-form";
import { useCartContext } from "../../context/CartContext";
import swal from "sweetalert";
import Form from "react-bootstrap/Form"
import "./Formulario.css";
import Button from "react-bootstrap/Button"













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
    addDoc(ordersCollection,user).then(({id}) =>  swal({title: "Muy bien!",text: "Tu orden " +(id)+ " fue generada!", icon: "success"})).catch(err =>console.log(err));

    cart.forEach(item => {
      const stockUpd = doc(db,"articulos",(item.id));
      updateDoc(stockUpd, {stock: item.stock - item.quantity})
    })
    
    event.target.reset();
    
   }


  



    

   
    
      
  
 

    
    
    
    
    
    
   
    
  
  
  
  
  
  


  return (
    <div className="formulario">



    
      
      <Form onSubmit={handleSubmit(sendOrder)}>
        <div>
          <Form.Label>Nombre</Form.Label>
          <Form.Control
              size="sm"
              placeholder="Ingrese su nombre"
              type="text"
              {...register('buyer.nombre',{
              required:true,
              maxLength:15})}
              />
            
              
        </div>
        <div>
          <Form.Label>E-mail</Form.Label>
          <Form.Control
              size="sm"
              placeholder="Ingrese su e-mail"
              type="email"
              {...register('buyer.email',{
              required:true,
              })}
              
              
          />
          
        </div>
        <div>
          <Form.Label>Contacto</Form.Label>
          <Form.Control
              size="sm"
              placeholder="Ingrese numero de contacto"
              type="number"
              {...register('buyer.contacto',{
              required:true,
              })}
              
              
          />
          </div>
          <div>
            <Button className="submit" variant="outline-success" type="submit" >"Confirmar orden" </Button>
          </div>
      </Form>
    </div>
)



}