import PropTypes from "prop-types";

const Cart = ({ totalCredits, remainingCredits, totalPrice, courseNames }) => {
  return (
    <div className="rounded-xl p-6 bg-white h-auto">
      <h2 className="font-bold text-xl text-blue-500">
        Credit Hour Remaining {remainingCredits} hr
      </h2>
      <hr className="my-4" />
      <h2 className="font-bold text-2xl mb-5">Course Name</h2>
      <ol className="list-decimal list-inside leading-8 text-lg text-slate-600">
        {courseNames.map((courseName, index) => (
          <li key={index}>{courseName}</li>
        ))}
      </ol>
      <hr className="mt-6 mb-4" />
      <h4 className="font-medium text-slate-700 text-lg">
        Total Credit Hour : {totalCredits}
      </h4>
      <hr className="my-4" />
      <h3 className="font-semibold text-slate-700 text-lg">
        Total Price : {totalPrice} USD
      </h3>
    </div>
  );
};

Cart.propTypes = {
  totalCredits: PropTypes.number,
  remainingCredits: PropTypes.number,
  totalPrice: PropTypes.number,
  courseNames: PropTypes.array,
};

export default Cart;
