import PropTypes from "prop-types";

const Course = ({ course, handleSelect }) => {
  const { img, title, details, price, credit } = course;
  return (
    <div className="relative rounded-xl p-4 bg-white">
      <img className="rounded-lg" src={img} alt="" />
      <h2 className="mt-4 mb-3 font-semibold text-xl">{title}</h2>
      <p className="text-slate-600 mb-28">{details}</p>
      <div className="absolute bottom-4 inset-x-4">
        <div className="flex items-center justify-between mt-5 mb-4 text-slate-600 text-lg">
          <div className="flex items-center gap-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <h3>Price : {price}</h3>
          </div>

          <div className="flex items-center gap-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25"
              />
            </svg>
            <h3>Credit : {credit}hr</h3>
          </div>
        </div>
        <button
          onClick={() => handleSelect(course)}
          className="bg-blue-500 text-white w-full hover:bg-blue-700 py-2.5 rounded-lg font-medium text-xl"
        >
          Select
        </button>
      </div>
    </div>
  );
};

Course.propTypes = {
  course: PropTypes.object,
  handleSelect: PropTypes.func,
};

export default Course;
