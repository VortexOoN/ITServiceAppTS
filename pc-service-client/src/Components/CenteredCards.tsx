import React from "react";
import Card from "./Card.tsx";
function CenteredCards(){
    return(
        <div className='container'>
        <div className='row mt-2 p-3'>
          <div className='col-lg-3'>
            <Card cardImage='./images/repair.png' cardTitle="Quick Repair" cardText='Our experience allow us to quickly repair your electronics.' />
          </div>
          <div className='col-lg-3'>
            <Card cardImage='./images/warranty.png' cardTitle='Warranty' cardText='Warranty from us after each repair or bought product.' />
          </div>
          <div className='col-lg-3'>
            <Card cardImage='./images/at_home.png' cardTitle="Repair at home" cardText='We can repair electronics at your home.' />
          </div>
          <div className='col-lg-3'>
            <Card cardImage='./images/consultant.png' cardTitle='Online Help' cardText='We can help you via remote desktop app.' />
          </div>
        </div>
      </div>
    )
}
export default CenteredCards;