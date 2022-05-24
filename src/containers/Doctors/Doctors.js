import React from "react";
import CardUI from "../../components/UI/CardUI";

function Doctors(props) {
  let doctors = [
    {
      name: "Amit",
      age: 35,
      fees: 1000,
      status: true,
    },
    {
      name: "Ajay",
      age: 25,
      fees: 2000,
      status: false,
    },
    {
      name: "Mayur",
      age: 23,
      fees: 500,
      status: true,
    },
    {
      name: "Jay",
      age: 29,
      fees: 600,
      status: true,
    },
    {
      name: "Raj",
      age: 33,
      fees: 2000,
      status: true,
    }
  ];

  const getAppointment = () => {
    console.log('Appoitment Booked');
  }

  return (
    <main id="main">
      <section id="doctors" className="doctors">
        <div className="container">
          <CardUI data={doctors} getAppointment = {getAppointment}/>
        </div>
      </section>
    </main>
  );
}

export default Doctors;
