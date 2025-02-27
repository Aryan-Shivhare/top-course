import React, { useState } from "react";
import {FcLike, FcLikePlaceholder,} from 'react-icons/fc'
import { toast } from "react-toastify";
const Card = ({course,likedCourses,setLikedCourses}) => {
    function clickHandler () {
        if (likedCourses.includes(course.id)) {
            setLikedCourses((prev) => prev.filter((cid) => (cid!==course.id)));
            toast.warning("Like Removed");
            console.log(likedCourses);
        }
        else {
            if (likedCourses.length === 0) {
                setLikedCourses([course.id]);
            }
            else {
                setLikedCourses ((prev) => [...prev, course.id]);
            }
            toast.success("Like Successfully");
            console.log(likedCourses);
        }
    }
    return (
        <div className="bg-bgDark bg-opacity-80 rounded-md w-[300px] overflow-hidden ">
            <div className="relative ">
                <img src={course.image.url} alt={course.image.alt}></img>      
                <div className="rounded-full w-[40px] h-[40px] bg-white absolute right-2 bottom-[-12px] grid  place-content-center">
                    <button onClick={clickHandler}>
                        {
                            likedCourses.includes(course.id) ? (<FcLike fontSize="1.75rem"/>) : (<FcLikePlaceholder fontSize="1.75rem"/>) 
                        }
                    </button>
                </div>
            </div> 
            <div className="p-4">
                <p className="text-white font-semibold text-lg leading-6">{course.title}</p>
                <p className="mt-2 text-white">
                    {
                        (course.description.length > 100) ? (course.description.substr(0,100)+'...') : (course.description)
                    }
                </p>
            </div>
        </div>
    ) ;
}
export default Card;