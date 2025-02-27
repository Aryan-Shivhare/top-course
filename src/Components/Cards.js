import React from "react";
import Card from "./Card";
import { useState } from "react";
const Cards = ({courses,category}) => {
    const [likedCourses,setLikedCourses] = useState([]);
    const getCourses = () => {
        if (category==="All") {
            let allCourses = [];
            Object.values(courses).forEach((courseCategory) => {
                courseCategory.forEach((course) => {
                    allCourses.push(course);
                })
            })
            return allCourses;
        }
        else {
            return courses[category];
        }
    }
    return (
        <div className="flex flex-wrap justify-center mb-4 gap-4"> {
            getCourses().map((course) => (
                <Card 
                key={course.id} 
                course={course} 
                likedCourses={likedCourses} 
                setLikedCourses={setLikedCourses}/>
            ))
        }
        </div>
    );
}
export default Cards;