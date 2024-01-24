import React, {useState, useRef, useEffect} from 'react'
import './Dropdown.css'

const Dropdown = (props) => {
    const [isOpen, setIsOpen] = useState(false)
    const dropdownRef = useRef(null)

    useEffect(() => {
        const closeDropdownOnOutsideClick = (e) => {
            if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
                setIsOpen(false);
            }
        };
    
        document.addEventListener('click', closeDropdownOnOutsideClick);
    
        return () => {
            document.removeEventListener('click', closeDropdownOnOutsideClick);
        };
        
    }, []);
    
    const handleDropdown = () => {
        setIsOpen(!isOpen)
    }

    const [selectedOption, setSelectedOption] = useState(props.data.value)
    
    const handleSelect = (value) => {
        setSelectedOption(value)
        handleDropdown()
        props.filter(value)
        return selectedOption
    }
    return (
        <div className="dropdown" ref={dropdownRef}>
            <div onClick={handleDropdown} className='dropdownTitle'>
                <p>{selectedOption}</p>
            </div>
            {isOpen && <ul className="dropdownOptions">
                {props.data.options.map((value, index)=>{
                    return(
                        <li onClick={()=>handleSelect(value)} className={selectedOption === value ? 'activeDropdown option' : 'option'} key={index} >{value}</li>
                    )
                })}
            </ul> }
        </div>
    )
}

export default Dropdown