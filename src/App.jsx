import { useEffect, useState } from "react";
import Course from "./components/Course";
import Cart from "./components/Cart";
import toast, { Toaster } from "react-hot-toast";

function App() {
  const [courses, setCourses] = useState([]);
  const [totalCredits, setTotalCredits] = useState(0);
  const [remainingCredits, setRemainingCredits] = useState(20);
  const [totalPrice, setTotalPrice] = useState(0);
  const [courseNames, setCourseNames] = useState([]);

  useEffect(() => {
    fetch("courses.json")
      .then((res) => res.json())
      .then((data) => setCourses(data));
  }, []);

  const handleSelect = (course) => {
    if (courseNames.includes(course.title)) {
      toast.error("You've already selected this course.");
      return;
    }

    const newTotalCredits = totalCredits + course.credit;
    if (newTotalCredits > 20) {
      toast.error("Credit hours must not exceed 20 hours.");
      return;
    }

    const newRemainingCredits = remainingCredits - course.credit;
    const newTotalPrice = totalPrice + course.price;

    setTotalCredits(newTotalCredits);
    setRemainingCredits(newRemainingCredits);
    setTotalPrice(newTotalPrice);
    setCourseNames([...courseNames, course.title]);
  };

  return (
    <>
      <Toaster position="top-center" reverseOrder={true} />
      <h1 className="font-bold text-3xl text-center mt-12">
        Course Registration
      </h1>
      <main className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 mt-8 mb-16 mx-6 xl:mx-16 gap-y-6 md:gap-6">
        <section className="xl:col-span-3 grid grid-cols-1 xl:grid-cols-3 gap-6">
          {courses.map((course) => (
            <Course
              key={course.id}
              course={course}
              handleSelect={handleSelect}
            />
          ))}
        </section>
        <aside>
          {/* <Cart cart={cart} /> */}
          <Cart
            totalCredits={totalCredits}
            remainingCredits={remainingCredits}
            totalPrice={totalPrice}
            courseNames={courseNames}
          />
        </aside>
      </main>
    </>
  );
}

export default App;
