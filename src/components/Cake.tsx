import "./css/Cake.css";


import { GiCakeSlice } from "react-icons/gi";
import { FiTruck } from "react-icons/fi";
import { CiGift } from "react-icons/ci";

const Cake = () => {
  return (
    <>
      <div style={{paddingTop: window.location.href.includes('cake') ? '100px' : '0px'}} className="font-cc align ">
        <h1 className="font-metropolish text-center">Our Cakes</h1>
      </div>
      <div className="mb-3 align">
        <table className="align">
          <tr className="align">
            <th className="align">
              <img
                src="src\components\Assets\Bday Cake Image.png"
                alt="Birthday"
              />
            </th>
            <th className="align">
              <img src="src\components\Assets\Cup Cake.png" alt="cupcake" />
            </th>
            <th className="align">
              <img
                src="src\components\Assets\Wedding cake.png"
                alt="weddingCake"
              />
            </th>
          </tr >
          <tbody className="align">
            <tr className="align">
              <td className="align">
                <h4>Birthday Cake</h4>
              </td>
              <td className="align">
                <h4>Cup Cake</h4>
              </td>
              <td className="align">
                <h4>Wedding Cake</h4>
              </td>
            </tr >
            <tr className="align">
              <td className="align">
                <p>
                  A birthday cake is a cake eaten as part of a birthday
                  celebration. Birthday cakes are often layer cakes with
                  frosting served with small lit candles on top representing the
                  celebrant's age. Variations include cupcakes, cake pops,
                  pastries, and tarts.
                </p>
              </td>
              <td className="align">
                <p>
                  A cupcake is a small, sweet baked good topped with frosting.
                  You might bake cupcakes for your best friend's birthday. When
                  you make cupcakes, you mix up cake batter and instead of
                  baking it in large pans, pour it into the small, paper-lined
                  indentations in a cupcake or muffin pan.
                </p>
              </td>
              <td className="align">
                <p>
                  A wedding is a celebration or ceremony of marriage. Besides
                  being a formal way to mark the union of two people, weddings
                  can be a lot of fun too. The earliest meaning of wedding was
                  simply "the state of being married," but by the early 1400s it
                  meant the ceremony or rite at the very beginning of a marriage
                </p>
              </td>
            </tr>
            <tr className="delivary icons align">
              <td className="align icons" >
                {" "}
                <GiCakeSlice color="black" size="100px" />
              </td>
              <td className="align icons">
                {" "}
                <FiTruck  color="black" size="100px"/>
              </td>
              <td className="align icons">
                <CiGift  color="black" size="100px" />
              </td>
            </tr>
            <tr className="delivary align">
              <td className="align">
                {" "}
                <h4>Select your favourite Flavour</h4>
              </td>
              <td className="align">
                {" "}
                <h4>Fast Delivary Available</h4>
              </td>
              <td className="align">
                <h4>Gift Delivary - Track Your Order</h4>
              </td>
            </tr>
            <tr className="delivary align">
              <td className="align botton">
                <p>We have a big collection. Choose your favourite</p>
              </td>
              <td className="align botton">
                <p>We have fast delivery system</p>
              </td>
              <td className="align botton">
                <p>Track your order real time. Get it delivered on occasion</p>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div>
      
      </div>
    </>
  );
};

export default Cake;
