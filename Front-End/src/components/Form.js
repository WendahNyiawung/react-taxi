import React, {useState } from "react";
import { db } from "../utils/firebase_config";
//import firebase from "firebase";

function Form() {
  //setting states for the various usr details
  const [PassengerName, setPassengerName] = useState('')
  const [PhoneNumber, setPhoneNumber] = useState('')
  const [Destination, setDestination] = useState('')
  const [PickupPoint, setPickupPoint] = useState('')
  const [TimeandDate, setTimeandDate] = useState('')

  //Listening to user onchage event
  const handleName = (e) => {
    setPassengerName(e.target.value);
  }
  const handlephone = (e) => {
    setPhoneNumber(e.target.value);
  }
  const handledestination = (e) => {
    setDestination(e.target.value);
  }
  const handlepickuppoint = (e) => {
    setPickupPoint(e.target.value);
  }
  const handletimeanddate = (e) => {
    setTimeandDate(e.target.value);
  }

  // function for adding a new Booking
  const addBooking = (e) => {
    e.preventDefault()
    db.collection('bookings').add({
      destination: Destination,
      passengername: PassengerName,
      phonenumber: PhoneNumber,
      pickuppoint: PickupPoint,
      time: TimeandDate,
    });

    // clearing input field
    setPassengerName("");
    setPhoneNumber("");
    setDestination("");
    setPickupPoint("");
    setTimeandDate("");
  }
  return (
    <div>
      <div className="d-flex align-items-center justify-content-center w-100">
     
        <div className="row px-3 py-3 shadow bg-white booking-form">
          <div className="bg-primary col d-none d-lg-block">
            <img
              src="static/img/taxi.png"
              alt="taxi"
              className="taxi-img"
            />
          </div>
          <div className="col m-0 m-lg-5">
            <h3 className="text-secondary font-primary text-center mb-3">
              Book a Taxi Now
            </h3>
            <form action="" className="form">
              <div className=" mb-3">
                <input required type="text" placeholder="Name" className="date-picker w-100" onChange={handleName} value={PassengerName} />
              </div>
              <div className=" mb-3">
                <input required type="text" placeholder="Phone number" className="date-picker w-100" onChange={handlephone} value={PhoneNumber} />
              </div>
              <div className=" mb-3">
                <input required type="text" placeholder="Destination" className="date-picker w-100" onChange={handledestination} value={Destination} />
              </div>
              <div className=" mb-3">
                <input required type="text" placeholder="Pickup Point" className="date-picker w-100" onChange={handlepickuppoint} value={PickupPoint} />
              </div>
              <div className=" mb-3">
                <input required type="datetime-local" name="nnn" id="nnn" placeholder="Pickup Point" className="date-picker w-100" onChange={handletimeanddate} value={TimeandDate} />
              </div>

              <button
                type="submit"
                className="btn-secondary text-white font-primary py-2 border-0 shadow-none w-100 mt-2"
                onClick={addBooking}
              >
                Book Now
              </button>
            </form>
    
            
          </div>
        </div>
        
       
      </div>

    </div>
  );
}

export default Form;
