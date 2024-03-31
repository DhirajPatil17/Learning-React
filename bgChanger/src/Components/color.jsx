import React from 'react';

function Color({Color1,text='black',sets})
{
    return(
        <button className='flex justify-center  p-3 pr-5 pl-5 text-s font-bold rounded-2xl mr-3' style={{backgroundColor:Color1,
        color:text}} onClick={()=>sets(Color1)}>{Color1}</button>
    )
}
 export default Color