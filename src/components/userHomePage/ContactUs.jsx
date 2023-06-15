import axios from 'axios';
import { API } from 'config/api';
import React, { useState } from 'react'
import { toast } from 'react-toastify';

const ContactUs = () => {
    const [name,setName]=useState('');
    const [email,setemail]=useState('');
    const [message,setmessage]=useState('');
    const [isMsgSent,setisMsgSent]=useState(false);
    const [Loading,setLoading]=useState(false);

    const postMsg= async (e)=>{
        e.preventDefault();
        setLoading(true)
       try {
        const response=await axios.post(API.BASE_URL+'contact',{
            name,
            email,
            message
        });
        console.log(response);
        setisMsgSent(true)
        toast.success('Message send sucessfully')

       } catch (err) {
        if(err.message){
            toast.error(err.message)
        }else{
            toast.error('something wents wrong!!!')
        }
       }
       finally{
        setLoading(false)
       }
    }

  return (
    <div>
        <div className='d-flex align-items-center justify-content-center flex-column' 
        style={{marginBottom:'100px'}}
        >
            <div className='d-flex justify-content-start flex-column'
              style={{width:'40%'}}
            >
            <h3  className="text-start mt-3">Love to hear from you</h3>
            </div>
        

        <form onSubmit={postMsg} className='d-flex align-items-center justify-content-start flex-column mt-3'
        style={{width:'40%'}}
        >
                <input className='w-100 mt-3' 
                style={{backgroundColor:'#E5E4E2',border:'none',borderRadius:'5px'}}
                 type='text' placeholder='Enter your name' value={name} onChange={(e)=>setName(e.target.value)}></input>
                <input 
                style={{backgroundColor:'#E5E4E2',border:'none',borderRadius:'5px'}}
                className='w-100 mt-3' type='text' placeholder='Enter your email'  value={email} onChange={(e)=>setemail(e.target.value)}></input>
                <textarea
                style={{ backgroundColor: '#E5E4E2' }}
                className='form-control w-100 mt-3'
                placeholder='Enter your message'
                value={message}
                onChange={(e) => setmessage(e.target.value)}
                ></textarea>

                <div className='w-100'>

                <button
                className="btn mt-3"
                style={{ backgroundColor: 'rgb(185 113 28)',color:'white' }}
                type='submit'
                 >Submit</button>
                </div>
        </form>
        <div className='d-flex justify-content-start flex-column'
              style={{width:'40%'}}
            >
            {isMsgSent && <h4 className="text-start mt-3">Message has been sended</h4>}
            {Loading && <h4 className="text-start mt-3">Sending...</h4>}
            </div>
        </div>
    </div>
  )
}

export default ContactUs

