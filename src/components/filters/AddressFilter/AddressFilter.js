import { AddressForm } from "./AddressFilterStyle";
import React from "react";

const AddressFilter = ({ type, adress, onAddressChange, onAddressSubmit }) => {
    return (
        <AddressForm className={ type === "main" && "main" }>
            <input 
                type="text" 
                placeholder="지역구, 지역명으로 검색하세요."
                value={ adress }
                onChange={ event => onAddressChange(event) }
            />
            <button
                onClick={ event => onAddressSubmit(event) }
            >검색</button>
        </AddressForm>
        
    )
}

export default AddressFilter;