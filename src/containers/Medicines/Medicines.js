import React from "react";
import CardUI from "../../components/UI/CardUI";

function Medicines(props) {
  let medicines = [
    {
      id: 101,
      name: "Abacavir",
      quantity: 25,
      price: 150,
      expiry: 2022,
      status: true,
    },
    {
      id: 102,
      name: "Eltrombopag",
      quantity: 90,
      price: 550,
      expiry: 2021,
      status: true,
    },
    {
      id: 103,
      name: "Meloxicam",
      quantity: 85,
      price: 450,
      expiry: 2025,
      status: false,
    },
    {
      id: 104,
      name: "Allopurinol",
      quantity: 50,
      price: 600,
      expiry: 2023,
      status: true,
    },
    {
      id: 105,
      name: "Phenytoin",
      quantity: 63,
      price: 250,
      expiry: 2021,
      status: false,
    },
  ];

  const viewMore = () => {
      console.log('Detailed');
  }

  return (
    <main id="main">
        <section id="medicines" className="medicines">
            <div className="container">
                <CardUI data={medicines} viewMore={viewMore}/>
            </div>
        </section>
    </main>
  );
}

export default Medicines;
