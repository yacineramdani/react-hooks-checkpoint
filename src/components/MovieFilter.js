import React from 'react'

function MovieFilter({title, rate}) {
    return (
        <div>
            {Data.filter(()=>{
                        if(search ==""){
                            return i
                        }else if(i.title.toLocaleLowerCase().includes(search.toLocaleLowerCase()) ){
                            return i
                        }
                    })}
        </div>
    )
}

export default MovieFilter
