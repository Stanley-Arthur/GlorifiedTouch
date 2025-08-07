'use client';
import { sendContactForm } from "@/lib/api";
import { Button, Container, FormControl, FormErrorMessage, FormLabel, Heading,Input, Textarea, useToast, Text } from "@chakra-ui/react";
import { useState } from "react";
import Testimonials from "./testimonials";

const initValues={name:"",email:"", subject:"",message:""}
const initState = {values:initValues}

export default function Contact(){
  const  toast =useToast()
  const [state,setState]=useState(initState)
  const [touched,setTouched]=useState({})

  const {values, isLoading ,error} =state;

  const onBlur = ({target})=>setTouched((prev)=>({...prev,
  [target.name]:true}))
  const handleChange= ({target})=> setState((prev)=>({
    ...prev,
    values:{
      ...prev.values,
      [target.name]:target.value,
    }
  }));

  const onSubmit = async ()=>{
    setState((prev)=>({
      ...prev,
      isLoading: true
    }));
    try{
      await sendContactForm(values);
      setTouched({});
      setState(initState);
      toast({
        title:"Message Sent.",
        status:"success",
        duration:"2000",
        position:"top"
      })

    }catch(error){
      setState((prev)=>({
        ...prev,
        isLoading: false,
        error: error.message,
      }));

    }
  }
  return(
    <div className="flex flex-col ">
      {/* <div>
        <Featured/>
      </div> */}

  <div className="min-h-screen flex justify-center items-center bg-gray-900">

      <Container className=" mt-20 flex space-y-2 justify-center items-center flex-col ">
      <Heading className="text-white md:text-3xl  uppercase font-[Roboto] mb-10 "> GET FREE INFO OR BOOK A CONSULTATION TODAY! </Heading>
      {error && (
        <Text className="text-red-300 mt-3 text-xl">{error}</Text>
      )}

      <FormControl  isRequired isInvalid={touched.name && values.name}>
        <FormLabel className="text-white ">Name</FormLabel>
        <Input
        type="text"
        errorBorderColor="red.300"
        onBlur={onBlur}
        name="name" onChange={handleChange} className="border p-3 md:w-[400px] w-[300px] bg-gray-900 text-white" value={values.name}/>
        {/* <FormErrorMessage className="text-red-300">Required</FormErrorMessage> */}
      </FormControl>
 
      <FormControl  isRequired isInvalid={touched.email && values.email}>
        <FormLabel className="text-white">Email</FormLabel>
        <Input
        type="email"
        errorBorderColor="red.300"
        onBlur={onBlur}
        name="email" onChange={handleChange} className="border p-3 md:w-[400px] w-[300px] bg-gray-900 text-white" value={values.email}/>
        {/* <FormErrorMessage className="text-red-300">Required</FormErrorMessage> */}
      </FormControl>

      <FormControl  isRequired isInvalid={touched.subject && values.subject}>
        <FormLabel className="text-white">Subject</FormLabel>
        <Input
        type="text"
        errorBorderColor="red.300"
        onBlur={onBlur}
        name="subject" onChange={handleChange} className="border p-3 w-[300px] md:w-[400px] bg-gray-900 text-white" value={values.subject}/>
        {/* <FormErrorMessage className="text-red-300">Required</FormErrorMessage> */}
      </FormControl>

      <FormControl  isRequired isInvalid={touched.message && values.message}>
        <FormLabel className="text-white">Message</FormLabel>
        <Textarea
        type="text"
        errorBorderColor="red.300"
        onBlur={onBlur}
        rows={4}
        name="message" onChange={handleChange} className="border  p-3 w-[300px] md:w-[400px] bg-gray-900 text-white" value={values.message}/>
        {/* <FormErrorMessage className="text-red-300">Required</FormErrorMessage> */}
      </FormControl>
      <Button  className="border w-[300px] uppercase md:w-[400px] text-white font-bold p-2 rounded-lg " onClick ={onSubmit} isLoading={isLoading}
       disabled={!values.name|| !values.email || !values.subject || !values.message}
      >
        Submit
      </Button>
      
      </Container>
  </div>
  <Testimonials/>
    </div>
  )
} 

 

























 