import React from 'react'
import "./footer.css"
export default function Footer() {
    return (
        <div className="footer">
            <div className="contacts">
            <div className="email">
               <p>Elektron Pochta</p>
               <span>moliya@mail.ru</span>
            </div>
            <div className="manzil">
               <p>Manzil</p>
               <span>100017 г.Ташкент ул. Истиқлол, дом 29</span>
            </div>
            <div className="faks">
               <p>Ishonch Telefoni</p>
               <span>(998 71) 000 00 00</span>
            </div>
            <div className="ishonch_tel">
               <p>Faks</p>
               <span>(998 71) 000 00 00</span>
            </div>
            </div>
            <p>Barcha huquqlar himoya qilingan. &copy; Moliya vazirligi-2021</p>
        </div>
    )
}
