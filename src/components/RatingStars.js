import React, { useState } from 'react';
import { FaStar } from "react-icons/fa"


const RatingStars = ({ratingg}) => {
    const [rating, setRating] = useState ({ratingg});
    const [hover, setHover] = useState(null);
    return( 
        <div>
            {[...Array(5)].map((star, i) => {
                const ratingValue = i + 1 
                return ( 
                <label>
                    <input 
                        type="radio" 
                        name="rating" 
                        style={{display:"none"}} 
                        onClick={() => setRating(ratingValue)}/>
                    <FaStar 
                        className="star"
                        color={ratingValue <= (hover || rating) ? "#ffc107" : "e4e5e9" } 
                        size={30} 
                        value={ratingValue} 
                        style={{cursor:"pointer"}}
                        onMouseEnter={() => setHover(ratingValue)}
                        onMouseLeave={() => setHover(null)} />
                </label>
                )
            })}
            
        </div>
    )}
export default RatingStars