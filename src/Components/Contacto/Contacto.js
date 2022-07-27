import React from "react";
import { collection, getFirestore,addDoc, } from "firebase/firestore";
import {useForm} from "react-hook-form";
import swal from "sweetalert";
import Form from "react-bootstrap/Form"
import "./Contacto.css";
import Button from "react-bootstrap/Button"
import { Link } from "react-router-dom";





export const Contacto = ()=>{
    
     
    const{register, handleSubmit} = useForm({defaultValues:{
  
      
    nombre:"",
    email:"",
    contacto:"",
      
  
      
    motivo:"",
  
    date: Date(),
      
  
    }}); 
  
   
        
    
  
  
    const sendOrder = (user, event) =>{
      const db = getFirestore();
      const ordersCollection = collection(db, "soliContacto");
      addDoc(ordersCollection,user).then(({id}) =>  swal({title: "Muy bien!",text: "Tu solicitud " +(id)+ " fue generada!", icon: "info"})).catch(err =>console.log(err));
  
      
      event.target.reset()
      
      
     }
  
  
  
    return (
        <div className="formulario__contacto">
    
      <div>
  
  
  
      
        
        <Form onSubmit={handleSubmit(sendOrder)}>
          <div>
            <Form.Label>Nombre completo</Form.Label>
            <Form.Control
                size="sm"
                placeholder="Ingrese su nombre y apellido"
                type="text"
                {...register('nombre',{
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
                {...register('email',{
                required:true,
                })}
                
                
            />
            
          </div>
          <div>
            <Form.Label>Contacto</Form.Label>
            <Form.Control
                style={{textDecoration:"none"}}
                size="sm"
                placeholder="Ingrese numero de contacto"
                type="number"
                {...register('contacto',{
                required:true,
                })}
                
                
            />
            </div>
            <div style={{display:"flex", flexDirection:"column"}}>
            <Form.Label>Ingrese su motivo de consulta</Form.Label>
            <Form.Control 
                type="textarea"
                placeholder="..."
                size="lg"
                style={{fontSize:"700", }}
                {...register('motivo', {
                    required: true
                    
                })}

            
            />
            
            </div>
            
            <div>
              <Button className="submit" variant="outline-success" type="submit" required>"Confirmar envio" </Button>
            </div>
        </Form>
      </div>
      
      
      
      
      </div>
  )
  
  
  
  }