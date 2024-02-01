import React from 'react'

const Country = ({setCountry}) => {
  return (
    <div className='container mt-4 mx-auto text-center d-block'>
<button type="button" className="btn btn-dark me-3" onClick={()=>setCountry("in")} >India</button>
<button type="button" className="btn btn-dark me-3" onClick={()=>setCountry("us")}>USA</button>
<button type="button" className="btn btn-dark me-3" onClick={()=>setCountry("ca")}>Canada</button>
<button type="button" className="btn btn-dark me-3" onClick={()=>setCountry("jp")}>Japan</button>
<button type="button" className="btn btn-dark me-3" onClick={()=>setCountry("ae")}>United Arab Emirates</button>
<button type="button" className="btn btn-dark me-3" onClick={()=>setCountry("mx")}>Mexico</button>
<button type="button" className="btn btn-dark me-3" onClick={()=>setCountry("sa")}>South Africa</button>
<button type="button" className="btn btn-dark me-3" onClick={()=>setCountry("id")}>Indonesia</button>
<button type="button" className="btn btn-dark me-3" onClick={()=>setCountry("eg")}>Egypt</button>
<button type="button" className="btn btn-dark me-3" onClick={()=>setCountry("hu")}>Hungary</button>


    </div>
  )
}

export default Country
