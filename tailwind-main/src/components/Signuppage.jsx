import React from 'react';
import patientmeetingdoctor from '../assets/patientmeetingdoctor.webp';
import { Link } from 'react-router-dom';

export default function Signuppage(){
    return (
        <div className='w-full h-screen flex'>
          <div className='grid grid-cols-1 md:grid-cols-2 m-auto h-[550px] shadow-lg shadow-green-300 sm:max-w-[900px]'>
          <div className='w-full h-[550px] hidden md:block'>
              <img className='w-500 h-500' src={patientmeetingdoctor} alt="/" />
            </div>
            <div className='p-4 flex flex-col justify-around'>
              <form className=' mt-3'>
                <h2 className='text-4xl font-bold text-center mb-8 -mt-1 text-gray-600'>@Home.com!</h2>
                <div>
                    <input className='border p-2 mr-2 mb-4 w-80 ml-2' type="text" placeholder="Name" name='Name'/>
                </div>
                <div>
                    <input className='border p-2 mr-2 mb-4 w-80 ml-2' type="text" placeholder='Username' name='Username'/>
                </div>
                <div>
                    <input className='border p-2 mr-2 mb-4 w-80 ml-2' type="text" placeholder='Gaurdian / Parent Name' name='Name'/>
                </div>
                <div>
                <input className='border p-2 mb-4 w-80 ml-2' type="text" placeholder='Date of Birth' name='Password'/>
                </div>
                <div>
                <input className='border p-2 mb-4 w-80 ml-2' type="text" placeholder='Date of Birth' name='Password'/>
                </div>
                <div>
                  <input className='border p-2 mb-4 w-80 ml-2' type="Password" placeholder='Password' name='Password'/>
                </div>
                <div>
                <input className='border p-2 mb-4 w-80 ml-2' type="Password" placeholder='Confirm Password' name='Password'/>
                </div>
              </form>
              <Link to='/Signuppage1'>
              <div className=' ml-60 mt-0.5'>
                <button class="bg-yellow-400 hover:bg-gray-400 text-green py-0.15 px-4 rounded-full w-25 text-sm">Next page</button>
              </div>
              </Link>
             </div>
          </div>
        </div>
      );
    }