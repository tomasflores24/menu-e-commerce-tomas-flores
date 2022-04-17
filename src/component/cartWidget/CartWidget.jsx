import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faBullseye,faCartShopping} from '@fortawesome/free-solid-svg-icons'

{/* <i class="fa-solid faBullseye"></i> */}

export function CartWidget () {
    return (
        <i>
            <FontAwesomeIcon icon={faCartShopping} />
        </i>

    );
}