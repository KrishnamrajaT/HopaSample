import react from "react";
import { BsBell } from "react-icons/bs";
import { AiFillSetting } from "react-icons/ai";

import Avatar from "@mui/material/Avatar";
// or

const Navbar = () => {
  return (
    <nav class="navbar navbar-expand-md">
      <h1 class="navbar-brand" style={{ color: "#142268" }}>
        Admin Information Portal
      </h1>

      <div class="collapse navbar-collapse" id="collapsibleNavbar">
        <ul class="navbar-nav">
          <form class="form-inline my-2 my-lg-0">
            <input
              class="form-control mr-sm-2"
              type="search"
              placeholder="Search"
              // aria-label="Search"
            />
            <button class="btn btn-outline-info my-2 my-sm-0" type="submit">
              Search
            </button>
          </form>
          <li class="nav-item mx-3">
            <i>
              <BsBell />
            </i>
          </li>
          <li class="nav-item  mx-3">
            <i>
              <AiFillSetting />
            </i>
          </li>
          <li class="nav-item  mx-3">
            <Avatar src="https://www.bing.com/images/search?view=detailV2&ccid=SuUOaB0b&id=BE53AD5CE6DCC2712EE18C51D4F73EB71564BC31&thid=OIP.SuUOaB0bwigOLr3NLT2ZZgHaEK&mediaurl=https%3a%2f%2fwww.hdwallpaper.nu%2fwp-content%2fuploads%2f2018%2f02%2favatar-3.jpg&exph=1080&expw=1920&q=Avatar&simid=608013403450510730&FORM=IRPRST&ck=8A8F5156DAEEA8127CB16530E1FB2380&selectedIndex=0&ajaxhist=0&ajaxserp=0" />
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
