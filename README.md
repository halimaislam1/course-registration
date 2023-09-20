# Assignment Question And Answeres:

### Add at least 3 Project features 
- Course Selection: Users can select courses, view total credit hours, and receive alerts for credit hour limits.
- Real-time Price Calculation: The app calculates the total price as users select courses, providing cost transparency.
- Dynamic Content: Courses are dynamically loaded from a JSON file, making it easy to update course information.

### Discuss how you managed the state in your assignment project.
- In my assignment project, state management is handled using React's useState and useEffect hooks. 
- I maintain state for course data, selected courses, total credit hours, remaining hours, and price. Users interact with the app, updating these states as needed. 
- The useEffect hook fetches initial course data. Real-time feedback on course selection, total credit hours, and remaining hours is provided. 
- This approach ensures a dynamic and responsive user experience, with immediate updates as users select courses, view prices, and monitor their progress in the course registration process.