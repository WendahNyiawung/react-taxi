import React from 'react';

function BookingSteps(props) {
    return (
        <div className="container-fluid py-5 mt-5 booking-steps">
            <h2 className="text-center mt-4">How it Works</h2>
            <div className="row mt-5">
                <div className="col-lg-3">
                    <div className="d-flex justify-content-center">
                        <div className="border border-primary rounded-pill d-flex align-items-center justify-content-center px-3 py-3" style={{ width: 80 }}>
                        <img
                            src="static/img/usecase-1.png"
                            alt="taxi"
                            className="img-fluid"
                        />
                    </div>
                    </div>
                    <h3 className="text-secondary text-center">Book in few steps</h3>
                    <p className="text-center">
                        Curabitur ac quam aliquam urna vehicula semper sed vel elit. Sed et leo purus. Vivamus vitae sapien.
                    </p>
                </div>
                <div className="col-lg-3">
                    <div className="d-flex justify-content-center">
                        <div className="border border-primary rounded-pill d-flex align-items-center justify-content-center px-3 py-3" style={{ width: 80 }}>
                        <img
                            src="static/img/usecase-2.png"
                            alt="taxi"
                            className="img-fluid"
                        />
                    </div>
                    </div>
                    <h3 className="text-secondary text-center">Get a Driver</h3>
                    <p className="text-center">
                        Curabitur ac quam aliquam urna vehicula semper sed vel elit. Sed et leo purus. Vivamus vitae sapien.
                    </p>
                </div>
                <div className="col-lg-3">
                    <div className="d-flex justify-content-center">
                        <div className="border border-primary rounded-pill d-flex align-items-center justify-content-center px-3 py-3" style={{ width: 80 }}>
                        <img
                            src="static/img/usecase-3.png"
                            alt="taxi"
                            className="img-fluid"
                        />
                    </div>
                    </div>
                    <h3 className="text-secondary text-center">Track your Driver</h3>
                    <p className="text-center">
                        Curabitur ac quam aliquam urna vehicula semper sed vel elit. Sed et leo purus. Vivamus vitae sapien.
                    </p>
                </div>
                <div className="col-lg-3">
                    <div className="d-flex justify-content-center">
                        <div className="border border-primary rounded-pill d-flex align-items-center justify-content-center px-3 py-3" style={{ width: 80 }}>
                        <img
                            src="static/img/showcase-4.png"
                            alt="taxi"
                            className="img-fluid"
                        />
                    </div>
                    </div>
                    <h3 className="text-secondary text-center">Arrive safely</h3>
                    <p className="text-center">
                        Curabitur ac quam aliquam urna vehicula semper sed vel elit. Sed et leo purus. Vivamus vitae sapien.
                    </p>
                </div>
                

            </div>
        </div>
    );
}

export default BookingSteps;