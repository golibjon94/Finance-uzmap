import React,{useState} from 'react';
import "./ariza.css";
import Offcanvas from 'react-bootstrap/Offcanvas';
import Button from 'react-bootstrap/Button';

function OffCanvasExample({ name, ...props }) {
    const [show, setShow] = useState(false);
  
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  
    return (
      <>
        {/* <Button style ={{border:"none"}} variant="primary" onClick={handleShow} className="me-2 "> */}
         <p onClick={handleShow} style={{padding:"12px",paddingBottom:"0",fontSize:"17px",color:"white",cursor:"pointer"}}>Arizalar</p> 
        {/* </Button> */} 
        <Offcanvas show={show} onHide={handleClose} {...props}>
          <Offcanvas.Header closeButton>
    
            <Offcanvas.Title>Arizangizni kiriting</Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
          <form onSubmit={(e)=>e.preventDefault()} className="forms">
              <label>Ismingiz:</label>
              <input style={{marginLeft:"10px"}} type="text" placeholder="ismingizni kiriting"/>
              <br/>
              <label>Familiya:</label>
              <input style={{marginLeft:"10px"}} type="text" placeholder="familiyangizni kiriting"/>
              <br/>
              <label>Tel raqam:</label>
              <input type="text" placeholder="tel raqam kiriting"/>
              <br/>
              <select placeholder='Viloyatlar' className="regions">
                  <option value="audi">Qoraqalpog'iston</option>
                  <option value="volvo">Andijon</option>
                  <option value="saab">Buxoro</option>
                  <option value="saab">Farg'ona</option>
                  <option value="opel">Jizzax</option>
                  <option value="audi">Navoiy</option>
                  <option value="audi">Namangan</option>
                  <option value="audi">Qashqadaryo</option>
                  <option value="audi">Samarqand</option>
                  <option value="audi">Surxondaryo</option>
                  <option value="audi">Sirdaryo</option>
                  <option value="audi">Xorazm</option>
                  <option value="audi">Toshkent</option>
                  <option value="audi">Toshkent shahri</option>
                  
              </select>
              <br/>
           <label>Arizangiz mazmunini yozing:</label>
            <textarea style={{margin:"5px 10px",padding:"10px"}} cols="40" rows="8"></textarea>
            <button>Yuborish</button>
            </form>
          </Offcanvas.Body>
        </Offcanvas>
      </>
    );
  }
  
  export default function Arizalar() {
    return (
      <>
        {['end'].map((placement, idx) => (
          <OffCanvasExample key={idx} placement={placement} name={placement} />
        ))}
      </>
    );
  }
  
  