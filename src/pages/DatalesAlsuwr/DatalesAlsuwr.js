import React from 'react'
import './DatalesAlsuwr.css'
import {Quran} from '../../DataforQuran'
import {useLocation} from 'react-router-dom'
import mosahf from '../../image/mosahf.jpg'

const DatalesAlsuwr = () => {
    const location = useLocation();
    const path = location.pathname.split('/')[2]
    const datafroquran = Quran.find((items)=>items.Number.toString() === path)
  return (
    <div className='DatalesAlsuwr'>
       <div className='dataDatalesAlsuwr' key={datafroquran.Number}>
          <img className='image' src={mosahf} alt='mosahf'/>
          <div>
             <h3 className='name'>سوره : {datafroquran.Name}</h3>
             <h3 className='name'>الايات: {datafroquran.Number_Verses}</h3>
             <h3 className='name'>عدد الكلمات : {datafroquran.Number_Words}</h3>
             <h3 className='name'>عدد الحروف : {datafroquran.Number_Letters}</h3>
             <h3 className='name'>اين انزلت : {datafroquran.Descent}</h3>
          </div>
      </div>
      <div className='Surah'>
           <p className='wordSurah'>{datafroquran.Surah}</p>
      </div>
    </div>
  )
}

export default DatalesAlsuwr
