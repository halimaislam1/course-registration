/* eslint-disable react/jsx-key */
import { useState } from "react";
import { useEffect } from "react";
import { BsBook } from 'react-icons/bs';
import Cart from "../Cart/Cart";
import {toast} from 'react-toastify';

const Course = () => {
    const [allCourses, setAllCourses] = useState([]);
    const [selectedCourses, setSelectedCourses] = useState([]);
    const [totalCreditHour, setTotalCreditHour] = useState(0)
    const [remainingHour, setRemainigHour] = useState(0)
    const [price , setPrice] = useState(0)

    useEffect(() => {
        fetch('Course.json')
            .then(res => res.json())
            .then((data) => setAllCourses(data))
    }, [])
    //  console.log(allCourses);

    const hansdleSelectButton = (course) => {
        const isExist =  selectedCourses.find(item => item.id === course.id)
        let count = course.credit_hour;
        if(isExist){
            toast.success('This course is already selected',{
                position: toast.POSITION.TOP_CENTER
            });
        }else{
            selectedCourses.forEach( item => {
                count = count + item.credit_hour;
            });
            // console.log(count);
            const CreditHourRemainig = 20 - count;
           
            if(count > 20 && CreditHourRemainig < 0){
                toast.success('Can not added credit hour',{
                    position: toast.POSITION.TOP_CENTER});
            }else{
                setTotalCreditHour(count);
                setRemainigHour(CreditHourRemainig);
                setSelectedCourses([...selectedCourses,course]);
            }           
        } 
        setPrice(course.price) 
    }
    // console.log(selectedCourses);

    return (
        <>
            <div>
                <h1 className='text-4xl font-bold text-center'>Course Registration</h1>
            </div>
            <div className=" flex flex-col-reverse lg:flex-row ">
                <div className="w-full lg:3/4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-5">
                {
                    allCourses.map((course) => (
                        <div className="card  bg-base-100 shadow-xl mt-10 ">
                            <figure >
                                <img src={course.img} alt="" /></figure>
                            <div className="card-body">
                                <h2 className="card-title text-[#1C1B1B]">{course.course_name}</h2>
                                <p>{course.course_details}</p>
                                <div className="flex ">
                                    <p>$ price: {course.price}</p>
                                    <div className="flex gap-3">
                                        <p ><BsBook></BsBook></p>
                                        <p>Credit:{course.credit_hour}</p>
                                    </div>
                                </div>
                                <div className="card-actions  justify-center">
                                    <button
                                    onClick={() => hansdleSelectButton(course)}
                                     className="btn text-white bg-[#2F80ED]  w-[280px]">
                                        Select
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))
                }
                </div>
                <div className="mt-10 w-full lg:w-1/4">
                   <Cart selectedCourses={selectedCourses} totalCreditHour={totalCreditHour} remainingHour={remainingHour} price={price}></Cart> 
                </div>
            </div>
        </>
    );
};

export default Course;