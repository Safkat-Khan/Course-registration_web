# **Course Registration**

## **Project Features:**

- Display website courses with details.
- Show selected course names.
- Present total credit hours and prices of chosen courses.
- Prevent duplicate selections.
- Enforce a 20-hour credit limit.
- Implements a responsive design.

---

## **State Management:**

In this assignment project, state management is achieved using React's `useState` and `useEffect` hooks. The project tracks various pieces of information mentioned below:

- `courses`: Contains course details. Fetched during website initialization using `useEffect`.

Below state updates occur when user clicks the 'Select' button, triggering the `handleSelect` function to modify these values.

- `totalCredits`: Keeps track of the total credit hours of selected courses.
- `remainingCredits`: Calculates and displays the remaining credit hours within the 20-hour limit.
- `totalPrice`: Tracks the total cost of selected courses.
- `courseNames`: Stores the names of selected courses.

---

### Visit the Live Webpage Here: [Course Registration](course-registration-sm.surge.sh)
