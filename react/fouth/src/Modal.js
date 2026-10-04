import { useState } from "react";
import "./Modal.css";

function Modal() {
    let image = "https://image.fonwall.ru/o/yi/arch-neural-network-rendering.jpeg?auto=compress&fit=resize&w=1200&display=large&domain=img3.fonwall.ru";

    let [open, setOpen] = useState(false);

    return (
        <div>
            <img src={image} className="small" alt="Изображение" style={{ display: open ? "none" : "block" }} onClick={() => setOpen(true)}/>

            {
                open && (
                    <div>
                        <img src={image} className="big" alt="Изображение" onClick={() => setOpen(false)}/>
                    </div>
                )
            }


        </div>
    )
}

export default Modal;