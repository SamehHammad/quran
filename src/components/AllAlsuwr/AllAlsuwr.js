import React from 'react'
import './AllAlsuwr.css'
import {Quran} from '../../DataforQuran'
import {Link} from'react-router-dom'

const AllAlsuwr = ({search}) => {
  return (
    <div className='AllAlsuwr'>
       {Quran.filter((val)=>{
        if(search === 0){
            return val
        }else if(
            val.Name.toLocaleLowerCase().includes(search.toLocaleLowerCase())
        ){
            return val
        }
       }).map(({Name,Number,Number_Verses,Number_Words,Number_Letters,Descent})=>(
           <div className='Alldata' key={Number}>
              <div className='dataAllAlsuwr' >
                  <Link to={`/datalies/${Number}`} className='dataAllAlsuwr'>
                     <h3>الايات {Number_Verses}</h3>
                     <h3>{Name}</h3>
                     <h3 className='title'>{Number}</h3>
                  </Link>
              </div>
              <div className='bigAllAlsuwr'>
                  <div className='datalistitle'>
                      <h3>{Number_Words}</h3>
                      <h3>  عدد الكلمات</h3>
                 </div>
                 <div className='datalistitle'>
                      <h3>{Number_Letters}</h3>
                      <h3>  عدد الاحرف</h3>
                 </div>
                 <div className='datalistitle'>
                     <h3>{Descent}</h3>
                     <h3>  اين نزلت</h3>
                 </div>
             </div>
         </div> 
       ))}
    </div>
  )
}

export default AllAlsuwr
