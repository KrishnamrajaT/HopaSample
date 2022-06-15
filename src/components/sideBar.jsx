import react from "react";
import { SiBaremetrics } from "react-icons/si";
import { IoIosPeople } from "react-icons/io";
import { BsFileBarGraphFill } from "react-icons/bs";
import { HiOutlinePencil } from "react-icons/hi";

export const Sidebar = () => {
  return (
    <>
      <div class="wrapper">
        {/* <!-- Sidebar  --> */}
        <nav id="sidebar">
          <div class="sidebar-header">
            <h3>Bootstrap Sidebar</h3>
          </div>
          <div className="row">
            <div className="col-md-12 col-lg-12">
              <ul class="list-unstyled components text-left">
                <li>
                  <a href="#">
                    <SiBaremetrics /> Dashboard
                  </a>
                </li>
                <li>
                  <a href="#">
                    <SiBaremetrics /> Data Metrics
                  </a>
                </li>
                <li>
                  <a href="#">
                    <SiBaremetrics />
                    Site Traffic
                  </a>
                </li>
                <li>
                  <a href="#">
                    <SiBaremetrics />
                    Site Occupancy
                  </a>
                </li>
                <li>
                  <a href="#">
                    <SiBaremetrics />
                    Additional KPI's
                  </a>
                </li>
                <p
                  href="#pageSubmenu"
                  data-toggle="collapse"
                  aria-expanded="false"
                  class="dropdown-toggle"
                >
                  <IoIosPeople />
                  Pages
                </p>
                <ul class="collapse list-unstyled text-center" id="pageSubmenu">
                  <li>
                    <a href="#">
                      <BsFileBarGraphFill />
                      LPR
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <BsFileBarGraphFill />
                      Reports
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <BsFileBarGraphFill />
                      AI Metrics
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <HiOutlinePencil />
                      Configuration
                    </a>
                  </li>
                </ul>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
};
