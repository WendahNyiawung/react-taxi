import React, { useEffect, useState } from "react";
import { db } from "../../utils/firebase_config";
function Admindashboard() {
    // function for retrieving bookings from database
    const [bookings, setBookings] = useState([]);
    useEffect(() => {
        getBookings();
    }, [])

    const getBookings = () => {
        db.collection("bookings").onSnapshot(function (querySnapshot) {
            setBookings(
                querySnapshot.docs.map((doc) => (
                    {
                        id: doc.id,
                        booking: doc.data().booking,
                        destination: doc.data().destination,
                        passengername: doc.data().passengername,
                        phonenumber: doc.data().phonenumber,
                        pickuppoint: doc.data().pickuppoint,
                        time: doc.data().time
                        
                        
                    }))
            );
        })
    }

    //open and close form modal
    const [openForm, setopenForm] = useState(false)
    return (
        <div className="admin-dboard">
            <div className=" container d-flex justify-content-end align-items-center">
                <div className="d-flex align-items-center">
                    <img
                        src="static/img/user.png"
                        alt="user"
                        width="80px"
                        height="75px"
                        className=""
                    />
                </div>
                <div className="">
                    <button className="btn btn-sm bg-white shadow-none px-1 mt-3">
                        <svg
                            width="20"
                            height="20"
                            fill="currentColor"
                            class="bi bi-chevron-down"
                            viewBox="0 0 16 16"
                        >
                            <path
                                fill-rule="evenodd"
                                d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"
                            />
                        </svg>
                    </button>
                    <div className="bg-white rounded mt-1 px-3 py-2">
                        <h2>Log Out</h2>
                    </div>
                </div>
            </div>

            {/* display list of users */}

            <div className="mt-5 d-flex justify-content-center container">
                <div className="bg-white rounded py-3 px-4 w-100">
                    <div
                        className="row py-2 rounded-pill mb-4"
                        style={{ backgroundColor: "#F9FBFC" }}
                    >
                        <div className="col-2">Passenger Name</div>
                        <div className="col-2">Phone Number</div>
                        <div className="col-2">Destination</div>
                        <div className="col-2">Pickup Point</div>
                        <div className="col-2">Time and Date</div>
                        <div className="col-2">Booking Status</div>
                    </div>
                    {
                        bookings.map((booking) => (
                            <div>
                                <div className="row py-2 align-items-center justify-content-center">
                                    <div className="col-lg-2">
                                        <p className="fs-6" style={{ color: "#818181" }}>
                                            {booking.passengername}
                                        </p>
                                    </div>
                                    <div className="col-lg-2">
                                        <p className="fs-6" style={{ color: "#818181" }}>
                                            {booking.phonenumber}
                                        </p>
                                    </div>
                                    <div className="col-lg-2">
                                        <p className="fs-6" style={{ color: "#818181" }}>
                                            {booking.destination}
                                        </p>
                                    </div>
                                    <div className="col-lg-2">
                                        <p className="fs-6" style={{ color: "#818181" }}>
                                            {booking.pickuppoint}
                                        </p>
                                    </div>
                                    <div className="col-lg-2">
                                        <p className="" style={{ color: "#818181", fontSize: 14 }}>
                                            {booking.time}
                                        </p>
                                    </div>
                                    <div className="col-lg-2 mb-3">
                                        <button className="btn btn-secondary rounded-pill shadow-none " onClick={()=>setopenForm(true)}>
                                            Confirm Ride
                                        </button>
                                    </div>
                                    <hr className="mt-2" />
                                </div>
                                {/* modal */}
                                {
                                    openForm ? (
                                        <div className="modal-container d-flex justify-content-center">
                                            <div className="job-modal">
                                                <div className="modal-content border-0">
                                                    <div className="d-flex justify-content-end px-2 align-items-center mt-2">
                                                        <button className="btn bg-light rounded-pill" onClick={()=>setopenForm(false)}>
                                                            <span className="close fs-4 text-center">&times;</span>
                                                        </button>
                                                    </div>
                                                    <div className=" px-3">
                                                        {/* form */}
                                                        <form>
                                                            <div>
                                                                <span className="" style={{ fontSize: 13 }}>Passenger Name</span>
                                                                <p className="" style={{ color: "#818181", fontSize: 13 }}>
                                                                    {booking.passengername}
                                                                </p>
                                                                <hr />
                                                            </div>
                                                            <div className="mb-0">
                                                                <label className="form-label mb-0" style={{ fontSize: 13 }}>Phone Number</label>
                                                                <input type="text" className="form-control border-0 px-0 shadow-none" value={booking.phonenumber} style={{ color: "#818181", fontSize: 13 }} />
                                                                <hr />
                                                            </div>
                                                            <div className="">
                                                                <span className="" style={{ fontSize: 13 }}>Destination</span>
                                                                <p className="" style={{ color: "#818181", fontSize: 13 }}>
                                                                    {booking.destination}
                                                                </p>
                                                                <hr />
                                                            </div>
                                                            <div className="">
                                                                <span className="" style={{ fontSize: 13 }}>Pickup Point</span>
                                                                <p className="" style={{ color: "#818181", fontSize: 13 }}>
                                                                    {booking.pickuppoint}
                                                                </p>
                                                                <hr />
                                                            </div>
                                                            <div className="">
                                                                <span className="" style={{ fontSize: 13 }}> Time and Date</span>
                                                                <p className="" style={{ color: "#818181", fontSize: 13 }}>
                                                                    {booking.time}
                                                                </p>
                                                                <hr />
                                                            </div>
                                                            <textarea name="" id="" cols="40" rows="5" className="form-control mb-3 "></textarea>
                                                            <div className=" mb-3 d-flex align-items-center justify-content-center">
                                                                <button className="btn btn-secondary rounded-pill shadow-none px-3">
                                                                    Confirm Ride
                                                                </button>
                                                            </div>
                                                        </form>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    ) : null
                                }
                            </div>
                        ))
                    }

                </div>
            </div>
        </div>
    );
}

export default Admindashboard;
