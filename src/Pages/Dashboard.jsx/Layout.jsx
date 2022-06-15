import react, { useState } from "react";
import Navbar from "../../components/Navbar";
import { Sidebar } from "../../components/sideBar";
import { BiArrowFromBottom } from "react-icons/bi";

const Layout = () => {
  let [truckvalue, setTruckvalue] = useState([123, 456, 789, 900, 800]);

  return (
    <>
      <div className="row m-0">
        <div className="col-md-3 col-lg-2">
          <Sidebar />
        </div>
        <div className="col-md-9 col-lg-10">
          <Navbar />
          <h3 className="Dash">Dashboard</h3>
          <div className="row">
            <div className="col-md-4">
              <div className="Border">
                <div className="">
                  <p>Truck Currently in Port</p>
                  <center>
                    <h1>10</h1>
                  </center>
                </div>

                <div className=" border-top">
                  <div className="">
                    <p>more</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="border">
                <div className="">
                  <p>Truck Currently in Port</p>
                  <center>
                    <h1>10</h1>
                  </center>
                </div>

                <div className=" border-top">
                  <div className="">
                    <p>more</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="border">
                <div className="">
                  <p>Truck Currently in Port</p>
                  <center>
                    <h1>10</h1>
                  </center>
                </div>

                <div className=" border-top">
                  <div className="">
                    <p>more</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-12 col-lg-12 Total-Truck">
              <h4 className="Truck-volume">
                Total Truck Volume
                <button className="btn button">
                  <BiArrowFromBottom />
                  Export
                </button>
              </h4>
              <div className="Truck-group " style={{ display: "flex" }}>
                <div className="">
                  <div className="dropdown">
                    <button
                      type="button"
                      className="dropdown-toggle mx-1 btns"
                      data-toggle="dropdown"
                    >
                      Mothly
                    </button>
                    <div class="dropdown-menu">
                      <a class="dropdown-item" href="#">
                        Jan
                      </a>
                      <a class="dropdown-item" href="#">
                        Feb
                      </a>
                      <a class="dropdown-item" href="#">
                        Mar
                      </a>
                    </div>
                  </div>
                </div>
                <div className="">
                  <div class="dropdown">
                    <button
                      type="button"
                      className="dropdown-toggle btns"
                      data-toggle="dropdown"
                    >
                      Mothly
                    </button>
                    <div class="dropdown-menu">
                      <a class="dropdown-item" href="#">
                        Jan
                      </a>
                      <a class="dropdown-item" href="#">
                        Feb
                      </a>
                      <a class="dropdown-item" href="#">
                        Mar
                      </a>
                    </div>
                    <input
                      type="date"
                      name="StartDate"
                      className=" mx-1 Date"
                    />
                    <input type="date" name="EndDate" className=" mx-1 Date" />
                  </div>
                </div>
              </div>
              <p className="Monthly-Truck">MONTHLY TRUCK VOLUME</p>
            </div>
          </div>

          <div className="row">
            <div className="col-md-4  Seven-Days">
              <b>Average Dwell Time 7 Days</b>
              {truckvalue.map((data, index) => {
                return (
                  <>
                    <div
                      key={index}
                      className="d-flex px-4 border justify-content-between"
                    >
                      <p className="">Cement Truck</p>
                      <p>{data.truckvalue}</p>
                    </div>
                  </>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Layout;
