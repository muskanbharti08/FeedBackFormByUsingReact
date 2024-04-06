import React, { useState } from 'react'
import SupervisedUserCircleIcon from '@mui/icons-material/SupervisedUserCircle';




export default function Form() {

        let [form , setForm ] = useState(" ")
        let formSubmission = (event) =>{
                event.preventDefault()
        }



        let [text1,setText1] = useState("abc......1.");
        let handleOnChange1 =event =>{
                console.log(event.target.value);
                setText1(event.target.value);
        }

        
        let [text2,setText2] = useState("abc.......2");
        let handleOnChange2 =event =>{
                console.log(event.target.value);
                setText2(event.target.value);
        }

        
        let [text3,setText3] = useState("abc.......3");
        let handleOnChange3 =event =>{
                console.log(event.target.value);
                setText3(event.target.value);
        }

        
        let [text4,setText4] = useState("abc.......4");
        let handleOnChange4 =event =>{
                console.log(event.target.value);
                setText4(event.target.value);
        }

        
        let [text5,setText5] = useState("abc.......5");
        let handleOnChange5 =event =>{
                console.log(event.target.value);
                setText5(event.target.value);
        }




        return (
                <><div className="flex justify-center sm:pt-6">

                        <div className="flex flex-col sm:w-3/12 w-11/12 text-center border-2 border-gray-300 shadow-2xl shadow-black space-y-3  ">
                                <h1 className="text-center pt-4 font-bold ">Help us improve</h1>
                                <form method="post" action="http://localhost:3000/" onSubmit={formSubmission}>


                                        <div className="p-1">
                                                <label htmlFor="id1">How often do you use our app?</label>
                                                <input onChange={handleOnChange1} value={text1} name='n1' id="id1" type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" /></div>


                                        <div className="p-1">
                                                <label htmlFor="id2">What is the motivation to use our app?</label>
                                                <textarea onChange={handleOnChange2} value={text2}  className="textarea textarea-bordered" name="n2" id="id2" placeholder="...."></textarea></div>

                                        <div className="p-1">
                                                <label htmlFor="id3">What is your most features?</label>
                                                <input onChange={handleOnChange3} value={text3} type="text" placeholder="Type here" id="id3" name="n3" className="input input-bordered w-full max-w-xs" /></div>

                                        <div className="p-1">
                                                <label htmlFor="id4">What would you like to see improvement the most?</label>
                                                <input  onChange={handleOnChange4}  value={text4}type="text" placeholder="Type here" name="n4" id="id4" className="input input-bordered w-full max-w-xs" /></div>

                                        <div className="id6 space-x-1">
                                                <input  onChange={handleOnChange5} value={text5}  className='border-2 border-black size-3' type="checkbox" name="n5" id="id6" />
                                                <label htmlFor="">Recieve personal follow-up to your feedback</label>

                                        </div>

                                </form>
                                <div className="bg-blue-800  flex justify-center w-fit px-3 py-0.5 rounded-md mx-auto"><button>Submit  <input type="checkbox" className="checkbox" disabled checked /></button>
                                </div>

                                <h1 className="">Powered <SupervisedUserCircleIcon /> usersnap</h1>
                        </div>
                </div></>
        )
}
