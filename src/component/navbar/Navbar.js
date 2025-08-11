import React, {useEffect, useState} from 'react'
import profileImg from "../../assets/profileImg.png"
import './Navbar.css'
import Dropdown from '../../ui/dropdown/Dropdown'
import { AiOutlineMenu } from "react-icons/ai";
import { IoIosKeypad } from "react-icons/io";
import DarkMode from '../DarkMode-button/DarkMode';

function Navbar() {
    const [daysInMonth, setDaysInMonth]= useState([])
    const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
    useEffect(()=>{
        // Function to format a date in 'Month day, year' format
function formatDate(date) {
    return date.toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' });
  }
  
  // Function to get an array of days in the current month
 
            const currentDate = new Date();
            const currentMonth = currentDate.getMonth();
            const option = [];
        
            for (let day = 1; day <= new Date(currentDate.getFullYear(), currentMonth + 1, 0).getDate(); day++) {
            const formattedDate = formatDate(new Date(currentDate.getFullYear(), currentMonth, day));
            option.push(formattedDate);
            }
            setDaysInMonth(option);
            

    },[])
    
    const currentDate = new Date();
    const monthsAndYears = {
        value: currentDate.toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' }),
        options: daysInMonth,
    }
    const [MonthsAndYears,setMonthAndYear] = useState('')

    

    const toggleMenu = () =>{
        const menuIcon = document.querySelector("#menuContainer")
        const keypadIcon = document.querySelector("#sideMenuContainer")
        if(menuIcon.classList.contains("menu-container-open")){
            menuIcon.classList.remove("menu-container-open")
            menuIcon.classList.add("menu-container-close")
        }
        else{
            menuIcon.classList.remove("menu-container-close")
            menuIcon.classList.add("menu-container-open")
        }
        if(keypadIcon.classList.contains("sidemenu-container-open")){
            keypadIcon.classList.remove("sidemenu-container-open")
            keypadIcon.classList.add("sidemenu-container-close")
        }
    }

    const toggleSidebar = () =>{
        const menuIcon = document.querySelector("#menuContainer")
        const keypadIcon = document.querySelector("#sideMenuContainer")
        if(keypadIcon.classList.contains("sidemenu-container-open")){
            keypadIcon.classList.remove("sidemenu-container-open")
            keypadIcon.classList.add("sidemenu-container-close")
        }
        else{
            keypadIcon.classList.remove("sidemenu-container-close")
            keypadIcon.classList.add("sidemenu-container-open")
        }
        if(menuIcon.classList.contains("menu-container-open")){
            menuIcon.classList.remove("menu-container-open")
            menuIcon.classList.add("menu-container-close")
        }
    }

    const setActive = (e) =>{
    const allTabIcons = document.querySelectorAll('.mainIcons');
  console.log(allTabIcons)
    // Convert the HTMLCollection to an array
    const tabIconsArray = Array.from(allTabIcons);

    // Add click event listener to each element
    tabIconsArray.forEach(element => {
      element.addEventListener('click', function() {
        // Remove 'active' class from all elements
        tabIconsArray.forEach(icon => {
          icon.classList.remove('active');
        });

        // Add 'active' class to the clicked element
        element.classList.add('active');
      });
    });
  }
  return (
    <div className='Navbar'>
        <div style={{display:'flex', alignItems:"center"}}>
            <div className='navbarLogo' style={{ marginRight:"10px"}}>
                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 40 40" fill="none">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M20 40C31.0457 40 40 31.0457 40 20C40 8.95431 31.0457 0 20 0C8.95429 0 0 8.95431 0 20C0 31.0457 8.95429 40 20 40ZM26.2393 9.31684C26.543 8.23805 25.4961 7.60013 24.54 8.2813L11.1931 17.7896C10.1562 18.5283 10.3193 20 11.4381 20H14.9527V19.9728H21.8025L16.2212 21.9421L13.7607 30.6832C13.457 31.762 14.5038 32.3999 15.46 31.7187L28.8069 22.2105C29.8438 21.4718 29.6806 20 28.5619 20H23.2321L26.2393 9.31684Z" fill="#34CAA5"/>
                </svg>
            </div>
            <h2>Dashboard</h2>
        </div>
        {/* <DarkMode /> */}
        <div className='navbar-right'>
            <div className='input-group'>
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M8.68945 1C12.9293 1 16.3781 4.3727 16.3781 8.51907C16.3781 10.4753 15.6104 12.2595 14.3542 13.5986L16.8261 16.0109C17.0574 16.2371 17.0582 16.6031 16.8269 16.8294C16.7116 16.9436 16.5592 17 16.4076 17C16.2568 17 16.1052 16.9436 15.9892 16.8309L13.4874 14.3912C12.1714 15.4219 10.5028 16.0389 8.68945 16.0389C4.44955 16.0389 1 12.6655 1 8.51907C1 4.3727 4.44955 1 8.68945 1ZM8.68945 2.15821C5.10251 2.15821 2.18433 5.01125 2.18433 8.51907C2.18433 12.0269 5.10251 14.8807 8.68945 14.8807C12.2756 14.8807 15.1938 12.0269 15.1938 8.51907C15.1938 5.01125 12.2756 2.15821 8.68945 2.15821Z" fill="#78828A"/>
                </svg>
                <input placeholder='Search...'></input>
            </div>
            
            <Dropdown data={monthsAndYears} filter={setMonthAndYear}/>
            <div className='notification'>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M10.0001 1.04163C8.2872 1.04163 6.64449 1.72206 5.43332 2.93323C4.22215 4.1444 3.54172 5.7871 3.54172 7.49996V8.08663C3.54167 8.66737 3.36973 9.23511 3.04755 9.71829L2.09172 11.1541C0.980053 12.8208 1.82839 15.0858 3.76089 15.6125C4.39005 15.7841 5.02505 15.9291 5.66422 16.0483L5.66589 16.0525C6.30589 17.7625 8.01839 18.9583 10.0001 18.9583C11.9817 18.9583 13.6942 17.7625 14.3351 16.0525L14.3367 16.0483C14.9769 15.9292 15.6119 15.7838 16.2401 15.6125C18.1726 15.0858 19.0209 12.8208 17.9092 11.1541L16.9526 9.71829C16.6304 9.23511 16.4584 8.66737 16.4584 8.08663V7.49996C16.4584 5.7871 15.778 4.1444 14.5668 2.93323C13.3556 1.72206 11.7129 1.04163 10.0001 1.04163ZM12.8134 16.2808C10.9442 16.5041 9.05507 16.5041 7.18589 16.2808C7.77839 17.1316 8.80922 17.7083 10.0001 17.7083C11.1909 17.7083 12.2209 17.1316 12.8134 16.2808ZM4.79172 7.49996C4.79172 6.11862 5.34045 4.79386 6.31721 3.81711C7.29396 2.84036 8.61872 2.29163 10.0001 2.29163C11.3814 2.29163 12.7062 2.84036 13.6829 3.81711C14.6597 4.79386 15.2084 6.11862 15.2084 7.49996V8.08663C15.2084 8.91412 15.4534 9.72329 15.9126 10.4116L16.8692 11.8475C17.0175 12.0695 17.1108 12.3235 17.1415 12.5887C17.1722 12.8539 17.1393 13.1226 17.0457 13.3726C16.9521 13.6226 16.8004 13.8467 16.6031 14.0265C16.4057 14.2063 16.1685 14.3366 15.9109 14.4066C12.0407 15.4621 7.95855 15.4621 4.08839 14.4066C3.83103 14.3364 3.59403 14.206 3.39692 14.0263C3.19981 13.8465 3.04822 13.6225 2.95464 13.3727C2.86106 13.1228 2.82816 12.8544 2.85866 12.5893C2.88915 12.3243 2.98217 12.0703 3.13005 11.8483L4.08839 10.4116C4.54717 9.72303 4.79189 8.91406 4.79172 8.08663V7.49996Z" fill="#0D062D"/>
                </svg>
            </div>
            <div className='profile-view' onClick={()=>setIsUserMenuOpen(!isUserMenuOpen)}>
                    <img src={profileImg} alt="" />
                    <div className='text'>
                        <p>Justin Bergson</p>
                        <p>Justin@gmail.com</p>
                    </div>
                    <svg xmlns="http://www.w3.org/2000/svg" 
                        width="20" 
                        height="20" 
                        viewBox="0 0 20 20" 
                        fill="none"
                        style={{ transform: isUserMenuOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                                transition: 'transform 0.3s ease' }}>
                        <path d="M3.19841 6.20675C3.43891 5.95614 3.81525 5.93336 4.08045 6.1384L4.15643 6.20675L10 12.2955L15.8436 6.20675C16.0841 5.95614 16.4604 5.93336 16.7256 6.1384L16.8016 6.20675C17.0421 6.45735 17.064 6.84951 16.8672 7.12585L16.8016 7.20502L10.479 13.7933C10.2385 14.0439 9.86217 14.0666 9.59697 13.8616L9.52099 13.7933L3.19841 7.20502C2.93386 6.92935 2.93386 6.48241 3.19841 6.20675Z" fill="#0D062D"/>
                    </svg>
                    {isUserMenuOpen && (
                        <div className='user-menu'>
                            <div className='menu-item'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                    <path d="M12 12C14.7614 12 17 9.76142 17 7C17 4.23858 14.7614 2 12 2C9.23858 2 7 4.23858 7 7C7 9.76142 9.23858 12 12 12Z" stroke="#0D062D" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                    <path d="M20.5899 22C20.5899 18.13 16.7399 15 11.9999 15C7.25991 15 3.40991 18.13 3.40991 22" stroke="#0D062D" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                </svg>
                                <span>View Profile</span>
                            </div>
                            <div className='menu-item'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                    <path d="M12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z" stroke="#0D062D" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                                    <path d="M2 12.88V11.12C2 10.08 2.85 9.22 3.9 9.22C5.71 9.22 6.45 7.94 5.54 6.37C5.02 5.47 5.33 4.3 6.24 3.78L7.97 2.79C8.76 2.32 9.78 2.6 10.24 3.39L10.36 3.58C11.26 5.15 12.74 5.15 13.65 3.58L13.76 3.39C14.23 2.6 15.25 2.32 16.04 2.79L17.77 3.78C18.68 4.3 18.99 5.47 18.47 6.37C17.56 7.94 18.3 9.22 20.11 9.22C21.15 9.22 22.01 10.08 22.01 11.12V12.88C22.01 13.92 21.16 14.78 20.11 14.78C18.3 14.78 17.56 16.06 18.47 17.63C18.99 18.54 18.68 19.7 17.77 20.22L16.04 21.21C15.25 21.68 14.23 21.4 13.76 20.61L13.65 20.42C12.75 18.85 11.27 18.85 10.36 20.42L10.24 20.61C9.78 21.4 8.76 21.68 7.97 21.21L6.24 20.22C5.33 19.7 5.02 18.53 5.54 17.63C6.45 16.06 5.71 14.78 3.9 14.78C2.85 14.78 2 13.92 2 12.88Z" stroke="#0D062D" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                                </svg>
                                <span>Settings</span>
                            </div>
                            <div className='menu-item'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                    <path d="M8.90002 7.56023C9.21002 3.96023 11.06 2.49023 15.11 2.49023H15.24C19.71 2.49023 21.5 4.28023 21.5 8.75023V15.2702C21.5 19.7402 19.71 21.5302 15.24 21.5302H15.11C11.09 21.5302 9.24002 20.0802 8.91002 16.5402" stroke="#0D062D" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                    <path d="M15 12H3.62" stroke="#0D062D" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                    <path d="M5.85 8.6499L2.5 11.9999L5.85 15.3499" stroke="#0D062D" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                </svg>
                                <span>Sign Out</span>
                            </div>
                        </div>
                    )}
                </div>
            <div onClick={toggleSidebar} id="keypadIcon" className='keypad-icon'>
                <IoIosKeypad size={24}/> 
            </div>
            <div onClick={toggleMenu} id="menuIcon" className='menu-icon'>
                <AiOutlineMenu size={24}/>
            </div>
            <div id="menuContainer" className='menu-container-close'>
                <div className='input-group'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M8.68945 1C12.9293 1 16.3781 4.3727 16.3781 8.51907C16.3781 10.4753 15.6104 12.2595 14.3542 13.5986L16.8261 16.0109C17.0574 16.2371 17.0582 16.6031 16.8269 16.8294C16.7116 16.9436 16.5592 17 16.4076 17C16.2568 17 16.1052 16.9436 15.9892 16.8309L13.4874 14.3912C12.1714 15.4219 10.5028 16.0389 8.68945 16.0389C4.44955 16.0389 1 12.6655 1 8.51907C1 4.3727 4.44955 1 8.68945 1ZM8.68945 2.15821C5.10251 2.15821 2.18433 5.01125 2.18433 8.51907C2.18433 12.0269 5.10251 14.8807 8.68945 14.8807C12.2756 14.8807 15.1938 12.0269 15.1938 8.51907C15.1938 5.01125 12.2756 2.15821 8.68945 2.15821Z" fill="#78828A"/>
                    </svg>
                    <input placeholder='Search...'></input>
                </div>
                <Dropdown data={monthsAndYears} filter={setMonthAndYear}/>
                <div className='profile-view' onClick={()=>setIsUserMenuOpen(!isUserMenuOpen)}>
                    <img src={profileImg} alt="" />
                    <div className='text'>
                        <p>Justin Bergson</p>
                        <p>Justin@gmail.com</p>
                    </div>
                    <svg xmlns="http://www.w3.org/2000/svg" 
                        width="20" 
                        height="20" 
                        viewBox="0 0 20 20" 
                        fill="none"
                        style={{ transform: isUserMenuOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                                transition: 'transform 0.3s ease' }}>
                        <path d="M3.19841 6.20675C3.43891 5.95614 3.81525 5.93336 4.08045 6.1384L4.15643 6.20675L10 12.2955L15.8436 6.20675C16.0841 5.95614 16.4604 5.93336 16.7256 6.1384L16.8016 6.20675C17.0421 6.45735 17.064 6.84951 16.8672 7.12585L16.8016 7.20502L10.479 13.7933C10.2385 14.0439 9.86217 14.0666 9.59697 13.8616L9.52099 13.7933L3.19841 7.20502C2.93386 6.92935 2.93386 6.48241 3.19841 6.20675Z" fill="#0D062D"/>
                    </svg>
                    {isUserMenuOpen && (
                        <div className='user-menu'>
                            <div className='menu-item'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                    <path d="M12 12C14.7614 12 17 9.76142 17 7C17 4.23858 14.7614 2 12 2C9.23858 2 7 4.23858 7 7C7 9.76142 9.23858 12 12 12Z" stroke="#0D062D" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                    <path d="M20.5899 22C20.5899 18.13 16.7399 15 11.9999 15C7.25991 15 3.40991 18.13 3.40991 22" stroke="#0D062D" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                </svg>
                                <span>View Profile</span>
                            </div>
                            <div className='menu-item'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                    <path d="M12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z" stroke="#0D062D" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                                    <path d="M2 12.88V11.12C2 10.08 2.85 9.22 3.9 9.22C5.71 9.22 6.45 7.94 5.54 6.37C5.02 5.47 5.33 4.3 6.24 3.78L7.97 2.79C8.76 2.32 9.78 2.6 10.24 3.39L10.36 3.58C11.26 5.15 12.74 5.15 13.65 3.58L13.76 3.39C14.23 2.6 15.25 2.32 16.04 2.79L17.77 3.78C18.68 4.3 18.99 5.47 18.47 6.37C17.56 7.94 18.3 9.22 20.11 9.22C21.15 9.22 22.01 10.08 22.01 11.12V12.88C22.01 13.92 21.16 14.78 20.11 14.78C18.3 14.78 17.56 16.06 18.47 17.63C18.99 18.54 18.68 19.7 17.77 20.22L16.04 21.21C15.25 21.68 14.23 21.4 13.76 20.61L13.65 20.42C12.75 18.85 11.27 18.85 10.36 20.42L10.24 20.61C9.78 21.4 8.76 21.68 7.97 21.21L6.24 20.22C5.33 19.7 5.02 18.53 5.54 17.63C6.45 16.06 5.71 14.78 3.9 14.78C2.85 14.78 2 13.92 2 12.88Z" stroke="#0D062D" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                                </svg>
                                <span>Settings</span>
                            </div>
                            <div className='menu-item'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                    <path d="M8.90002 7.56023C9.21002 3.96023 11.06 2.49023 15.11 2.49023H15.24C19.71 2.49023 21.5 4.28023 21.5 8.75023V15.2702C21.5 19.7402 19.71 21.5302 15.24 21.5302H15.11C11.09 21.5302 9.24002 20.0802 8.91002 16.5402" stroke="#0D062D" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                    <path d="M15 12H3.62" stroke="#0D062D" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                    <path d="M5.85 8.6499L2.5 11.9999L5.85 15.3499" stroke="#0D062D" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                </svg>
                                <span>Sign Out</span>
                            </div>
                        </div>
                    )}
                </div>
            </div>
            <div id="sideMenuContainer" className='sidemenu-container-close'>
                <div className='upper-part'>
                    <div className='mainIcons active'>
                        <svg xmlns="http://www.w3.org/2000/svg" onClick={(e)=>setActive(e)} className="adjustingColor" width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <path d="M7.24 2H5.34C3.15 2 2 3.15 2 5.33V7.23C2 9.41 3.15 10.56 5.33 10.56H7.23C9.41 10.56 10.56 9.41 10.56 7.23V5.33C10.57 3.15 9.42 2 7.24 2Z" fill="#0D062D"/>
                            <path opacity="0.4" d="M18.6699 2H16.7699C14.5899 2 13.4399 3.15 13.4399 5.33V7.23C13.4399 9.41 14.5899 10.56 16.7699 10.56H18.6699C20.8499 10.56 21.9999 9.41 21.9999 7.23V5.33C21.9999 3.15 20.8499 2 18.6699 2Z" fill="#0D062D"/>
                            <path d="M18.6699 13.4301H16.7699C14.5899 13.4301 13.4399 14.5801 13.4399 16.7601V18.6601C13.4399 20.8401 14.5899 21.9901 16.7699 21.9901H18.6699C20.8499 21.9901 21.9999 20.8401 21.9999 18.6601V16.7601C21.9999 14.5801 20.8499 13.4301 18.6699 13.4301Z" fill="#0D062D"/>
                            <path opacity="0.4" d="M7.24 13.4301H5.34C3.15 13.4301 2 14.5801 2 16.7601V18.6601C2 20.8501 3.15 22.0001 5.33 22.0001H7.23C9.41 22.0001 10.56 20.8501 10.56 18.6701V16.7701C10.57 14.5801 9.42 13.4301 7.24 13.4301Z" fill="#0D062D"/>
                        </svg>
                    </div>
                    <div className='mainIcons'>
                        <svg xmlns="http://www.w3.org/2000/svg" onClick={(e)=>setActive(e)} className="mainIcons" width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path d="M2 12.98V15C2 20 4 22 9 22H15C20 22 22 20 22 15V9C22 4 20 2 15 2H9C4 2 2 4 2 9" stroke="#B2ABAB" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M11.17 12L10.7 11.3L7.5 14.5" stroke="#B2ABAB" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M16.5 9.5L14.99 11.01L14 12" stroke="#B2ABAB" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M14.5 9.5H16.5V11.5" stroke="#B2ABAB" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    </div>
                    <div className='mainIcons'>
                        <svg xmlns="http://www.w3.org/2000/svg" onClick={(e)=>setActive(e)} className="mainIcons" width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <path d="M12.6801 3.96C13.1601 4.67 13.4401 5.52 13.4401 6.44C13.4301 8.84 11.5401 10.79 9.16006 10.87C9.06006 10.86 8.94006 10.86 8.83006 10.87C6.45006 10.79 4.56006 8.84 4.56006 6.44C4.56006 3.99 6.54006 2 9.00006 2" stroke="#B2ABAB" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M16.4098 4C18.3498 4 19.9098 5.57 19.9098 7.5C19.9098 9.39 18.4098 10.93 16.5398 11C16.4598 10.99 16.3698 10.99 16.2798 11" stroke="#B2ABAB" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M4.16021 14.56C1.74021 16.18 1.74021 18.82 4.16021 20.43C6.91021 22.27 11.4202 22.27 14.1702 20.43C16.5902 18.81 16.5902 16.17 14.1702 14.56C11.4302 12.73 6.92021 12.73 4.16021 14.56Z" stroke="#B2ABAB" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M18.3398 20C19.0598 19.85 19.7398 19.56 20.2998 19.13C21.8598 17.96 21.8598 16.03 20.2998 14.86C19.7498 14.44 19.0798 14.16 18.3698 14" stroke="#B2ABAB" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    </div>
                    <div className='mainIcons'>
                        <svg xmlns="http://www.w3.org/2000/svg"  onClick={(e)=>setActive(e)} className="mainIcons" width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <path d="M3.16992 7.44006L11.9999 12.55L20.7699 7.47003" stroke="#B7B0B0" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M12 21.61V12.54" stroke="#B7B0B0" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M2.39014 9.17007C2.39014 7.79007 3.38012 6.11009 4.59012 5.44009L9.93011 2.47006C11.0701 1.84006 12.9401 1.84006 14.0801 2.47006L19.4201 5.44009C20.6301 6.11009 21.6201 7.79007 21.6201 9.17007V14.8201C21.6201 16.2001 20.6301 17.8801 19.4201 18.5501L14.0801 21.5201C12.9401 22.1501 11.0701 22.1501 9.93011 21.5201L4.59012 18.5501C3.38012 17.8801 2.39014 16.2001 2.39014 14.8201V14.0001" stroke="#B7B0B0" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M16.9998 13.24V9.58002L10.9297 6.07001L9.87976 5.46997L7.50977 4.09998" stroke="#B7B0B0" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    </div>
                    <div className='mainIcons'>
                        <svg xmlns="http://www.w3.org/2000/svg" onClick={(e)=>setActive(e)} className="mainIcons" width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <path d="M14.6599 20.01L13.1399 21.53C12.5199 22.15 11.4999 22.15 10.8799 21.53L9.3599 20.01C9.0999 19.75 8.58992 19.54 8.22992 19.54H6.0799C5.1999 19.54 4.47992 18.8199 4.47992 17.9399V15.79C4.47992 15.43 4.26992 14.92 4.00992 14.66L2.4899 13.14C1.8699 12.52 1.8699 11.5 2.4899 10.88L4.00992 9.35999C4.26992 9.09999 4.47992 8.58998 4.47992 8.22998V6.07996C4.47992 5.19996 5.1999 4.47998 6.0799 4.47998" stroke="#B2ABAB" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M9.33984 3.99002L10.8598 2.47C11.4798 1.85 12.4998 1.85 13.1198 2.47L14.6399 3.99002C14.8999 4.25002 15.4098 4.46 15.7698 4.46H17.9199C18.7999 4.46 19.5198 5.18009 19.5198 6.06009V8.21C19.5198 8.57 19.7298 9.08 19.9898 9.34L21.5099 10.86C22.1299 11.48 22.1299 12.5 21.5099 13.12L19.9898 14.64C19.7298 14.9 19.5198 15.4101 19.5198 15.7701V17.9201C19.5198 18.8001 18.7999 19.5201 17.9199 19.5201" stroke="#B2ABAB" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M9 15L15 9" stroke="#B2ABAB" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M14.4945 14.5H14.5035" stroke="#B2ABAB" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M9.49451 9.5H9.50349" stroke="#B2ABAB" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    </div>
                    <div className='mainIcons'>
                        <svg xmlns="http://www.w3.org/2000/svg" onClick={(e)=>setActive(e)} className="mainIcons" width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <path d="M12 8V13" stroke="#B2ABAB" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M4 6C2.75 7.67 2 9.75 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2C10.57 2 9.2 2.3 7.97 2.85" stroke="#B2ABAB" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M11.9946 16H12.0036" stroke="#B2ABAB" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    </div>
                </div>
                <hr />
                <div className='lower-part'>
                    <div className='mainIcons'>
                        <svg xmlns="http://www.w3.org/2000/svg" className="mainIcons" width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <path d="M8.5 12H14.5" stroke="#B2ABAB" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M12.5 15L15.5 12L12.5 9" stroke="#B2ABAB" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M4 6C2.75 7.67 2 9.75 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2C10.57 2 9.2 2.3 7.97 2.85" stroke="#B2ABAB" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    </div>
                    <div className='mainIcons'>
                        <svg xmlns="http://www.w3.org/2000/svg" className="mainIcons" width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <path d="M15 12C15 10.34 13.66 9 12 9C10.34 9 9 10.34 9 12C9 13.66 10.34 15 12 15C12.41 15 12.81 14.92 13.17 14.76" stroke="#B2ABAB" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M6.87988 20.5799L7.96988 21.2099C8.75988 21.6799 9.77988 21.3999 10.2499 20.6099L10.3599 20.4199C11.2599 18.8499 12.7399 18.8499 13.6499 20.4199L13.7599 20.6099C14.2299 21.3999 15.2499 21.6799 16.0399 21.2099L17.7699 20.2199C18.6799 19.6999 18.9899 18.5299 18.4699 17.6299C17.5599 16.0599 18.2999 14.7799 20.1099 14.7799C21.1499 14.7799 22.0099 13.9299 22.0099 12.8799V11.1199C22.0099 10.0799 21.1599 9.21995 20.1099 9.21995C19.0999 9.21995 18.4199 8.81995 18.1799 8.18995C17.9899 7.69995 18.0699 7.05995 18.4699 6.36995C18.9899 5.45995 18.6799 4.29995 17.7699 3.77995L16.9599 3.31995" stroke="#B2ABAB" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M13.64 3.58006C12.74 5.15006 11.26 5.15006 10.35 3.58006L10.24 3.39006C9.78 2.60006 8.76 2.32006 7.97 2.79006L6.24 3.78006C5.33 4.30006 5.02 5.47006 5.54 6.38006C6.45 7.94006 5.71 9.22006 3.9 9.22006C2.86 9.22006 2 10.0701 2 11.1201V12.8801C2 13.9201 2.85 14.7801 3.9 14.7801C5.71 14.7801 6.45 16.0601 5.54 17.6301" stroke="#B2ABAB" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    </div>
                    <div className='mainIcons'>
                        <svg xmlns="http://www.w3.org/2000/svg" className="mainIcons" width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path d="M6.56 14.5599L4 11.9999L6.56 9.43994" stroke="#B2ABAB" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M9.23982 12H4.06982" stroke="#B2ABAB" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M14.2398 12H12.2798" stroke="#B2ABAB" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M18.01 6.47998C19.25 7.83998 20 9.70998 20 12C20 17 16.42 20 12 20" stroke="#B2ABAB" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M12 4C13.05 4 14.05 4.17 14.97 4.49" stroke="#B2ABAB" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Navbar
