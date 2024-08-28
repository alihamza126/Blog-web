"use client"

import React from 'react';
import { useForm } from 'react-hook-form';

export default function ContactForm() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = data => console.log(data);
  console.log(errors);

  return (
    <form onSubmit={handleSubmit(onSubmit)}
      className='mt-12 text-xl font-medium leading-relaxed font-in dark:text-light'>
      Hello! My name is <input className=' outline-none  border-0 p-0 mx-2 focus:ring-0 placeholder:text-center placeholder:text-lg border-b border-gray
       focus:border-gray bg-transparent'
        type="text" placeholder="your name" {...register("name", { required: true, min: 3 })} />

      and i want to discuss a potential project. You can email me at<input className=' outline-none border-0 p-0 mx-2 focus:ring-0 placeholder:text-center placeholder:text-lg border-b border-gray
       focus:border-gray bg-transparent'
        type="email" placeholder="your@email" {...register("email", { required: true })} />

      or reachout to me on <input className=' outline-none border-0 p-0 mx-2 focus:ring-0 placeholder:text-center placeholder:text-lg border-b border-gray
       focus:border-gray bg-transparent'
        type="tel" placeholder="your phone" {...register("phone", { required: true })} />

      Here are some details about my project: <br />
      <textarea className='w-full   outline-none border-0 p-0 mx-2 focus:ring-0 placeholder:text-lg border-b border-gray
       focus:border-gray bg-transparent'
        rows={3} placeholder="project details" {...register("project details", {})} />

      <input type="submit" value={'send request'} className='inline-block mt-8 font-medium capitalize text-xl py-3 px-8 border-2 border-solid dark:border-light border-dark rounded cursor-pointer'/>
    </form>
  );
}