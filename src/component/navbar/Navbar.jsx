import { NavLink, useNavigate } from 'react-router-dom';
import './nav.css';
import { useDispatch, useSelector } from 'react-redux';
import { checkFunc } from '../../redux/reducer/createSlice';
import { HiOutlineShoppingCart } from "react-icons/hi2";
// import { PiHeartDuotone } from "react-icons/pi";
import Menu from '@mui/material/Menu';
import { BiMenu } from "react-icons/bi";
import { Stack, Avatar, MenuItem, Badge } from '@mui/material';
import { useState } from 'react';
import SmallNav from './SmallNav';
const Navbar = () => {
  const check = useSelector(state => state.data.check);
 const amount = useSelector(state => state.cart.amount);
 const id = sessionStorage.getItem("id");
 const profile = sessionStorage.getItem("profile");
const dispatch = useDispatch();
const navi = useNavigate();
  const [nav , setNav] = useState(true);
  const handelNavigationBar = ()=>{
    if (nav === true) {
      setNav('')  
    }
    else{
      setNav(true)
    }
  }
    const [anchorEl, setAnchorEl] = useState(null);
   const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
const handelLogout = ()=>{
  setAnchorEl(null);
  dispatch(checkFunc())
  navi('/');
  sessionStorage.removeItem("role")
  sessionStorage.removeItem("check")
}
const handelProfile = ()=>{
  setAnchorEl(null);
  navi(`/profile/${id}`);
}
  return (
<>
<div className="nav-bar">
      <div className="nav">
    <div className="list-style">
      <div className="logo">
        <h4>app store</h4>
      </div>
      <SmallNav active={nav=== true? '' : 'active'} />
      {/* list */}
     
      {/* item  */}
      <ul className="item">    
    {check === true?
          <>
             <Stack direction="row" sx={{position : 'relative' , top : "10px" , cursor : "pointer"}}>
      <Avatar alt="Remy Sharp" src={profile} id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick} />
          <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <MenuItem onClick={handelProfile}>Profile</MenuItem>
  <MenuItem onClick={()=> navi('/all-products/shop-cart')}>      
    <Badge badgeContent={amount} color="primary">
<HiOutlineShoppingCart/> 
    </Badge>
</MenuItem>
        {/* <MenuItem onClick={handelLogout}><PiHeartDuotone /></MenuItem>s */}
        <MenuItem onClick={handelLogout}>Logout</MenuItem>

      </Menu>
    </Stack>
    </>
    : <li><NavLink to='/' >login</NavLink></li>
  }     

      </ul>
  <BiMenu onClick={()=> handelNavigationBar()} />
    </div>
      </div>
    </div>
</>
  )
}

export default Navbar;