import { useState } from "react";

function Item() {

    let [item, setItem] = useState([]);

    function addItem() {
        setItem([
            ...item,
            //     {
            //     id: item.length,
            //     value: Math.floor(Math.random() * 10) + 1
            // }
            Math.floor(Math.random() * 10) + 1
        ])
    }

    return (
        <div>
            <button onClick={addItem}>Add a number</button>
            {
                // item.map(i => (
                //     <div key={i.id}>
                //         {i.value}
                //     </div>
                // ))
                item.map((i, index) => (
                    <div key={index}
                        style={{ background: i % 2 ? "silver" : "yellow" }}
                    >
                        {i}
                    </div>
                ))
            }
        </div>
    )
}

export default Item;