/* eslint-disable react/jsx-key */
import { useState } from "react";
import { useEffect } from "react";
import { FaBookmark } from 'react-icons/fa';
import Cart from "../Cart/Cart";
// import { toast } from "react-toastify";


const Course = () => {
    const [allCourses, setAllCourses] = useState([])
    const [selectedCourses, setSelectedCourses] = useState([])

    useEffect(() => {
        fetch('Course.json')
            .then(res => res.json())
            .then((data) => setAllCourses(data))
    }, [])
    //  console.log(allCourses);

    const hansdleSelectButton = (course) => {
        // const isExist =  selectedCourses.find(item => item.id === course.id)
        // if(isExist){
        //     toast('Already exist this course')
        // }
        // console.log(isExist);
        setSelectedCourses([...selectedCourses,course]);
    }
    // console.log(selectedCourses);

    return (
        <>
            <div>
                <h1 className='text-4xl font-bold text-center'>Course Registration</h1>
            </div>
            <div className="grid grid-cols-3 ">
                {
                    allCourses.map((course) => (

                        <div className="card w-96 bg-base-100 shadow-xl mt-10 ">
                            <figure >
                                <img src={course.img} alt="" /></figure>
                            <div className="card-body">
                                <h2 className="card-title">{course.course_name}</h2>
                                <p>{course.course_details}</p>
                                <div className="flex ">
                                    <p>$ price: {course.price}</p>
                                    <div className="flex gap-3">
                                        <p ><FaBookmark></FaBookmark></p>
                                        <p>Credit:{course.credit_hour}</p>
                                    </div>
                                </div>
                                <div className="card-actions  justify-center">
                                    <button
                                    onClick={() => hansdleSelectButton(course)}
                                     className="btn btn-primary w-[280px]">
                                        Select
                                    </button>
                                </div>
                            </div>

                        </div>
                    ))
                }
                <div className="mt-10">
                   <Cart selectedCourses={selectedCourses}></Cart> 
                </div>

            </div>

        </>
    );
};

export default Course;