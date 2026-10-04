import { useState } from "react";

function Person() {

    let [person, setPerson] = useState({
        firstName: "Igor",
        lastName: "Kuznechov"
    });

    function rename() {
        //setPerson({ firstName: "Ivan", lastName: person.lastName })
        setPerson({ ...person, firstName: "Ivan" })
    }

    return (
        <div>
            <p>{person.firstName} {person.lastName}</p>
            <button onClick={rename}>Rename</button>
        </div>
    )
}

export default Person;