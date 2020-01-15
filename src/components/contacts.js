    import React from 'react'

    const Contacts = ({ valosag }) => {
      return (
        <div>
          <center><h1>Power plant list</h1></center>
          {valosag.map((jamoona, index) => (

                <h5 key={index} className="card-title">{jamoona.bundesnetzagentur_number}</h5>

          ))}
        </div>
      )
    };

    export default Contacts