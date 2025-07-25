import React from "react";
import {
  Navbar,
  Typography,
  Button,
  Input,
} from "@material-tailwind/react";
import ProfileMenu from "./ProfileMenu";
import { useSelector } from "react-redux";
import { NavLink } from "react-router";


export default function Header() {
  // User ko state (userSlice) lai herera header banako
  //userSlice bata state tanna ko lagi useSelector hook use gareko
  const { user } = useSelector((state) => state.userSlice);

  return (
    <Navbar className=" bg-gray-100 max-w-[100%] px-4 py-2 shadow-md">

      <div className=" mx-auto flex items-center justify-between text-blue-gray-900 md:flex-row md:items-center md:justify-between gap-4 ">
        <div>
        <NavLink to={'/'}>
        <Typography
          as="span"
          className="mr-4 ml-2 cursor-pointer py-1.5 font-medium"  
        >
          BookEase
        </Typography>
        </NavLink>
        </div>

        <div className="flex flex-col sm:flex-row items-stretch gap-2 w-full md:max-w-md mx-auto">
        <Input
        type="text"
        label="Search..."
        className="flex-1"
        crossOrigin=""
        />
        <Button  color="blue">
        Search
        </Button>
       </div>

       <div>
        {/* User xa vaney profileMenu dekhauni natra login page ma pathaidini */}
        {user ? <ProfileMenu user={user} /> : <NavLink to={'/login'}>  <Button size="sm" variant="text">
          <span>Log In</span>
        </Button> </NavLink>}
        </div>

      </div>

    </Navbar>
  );
}