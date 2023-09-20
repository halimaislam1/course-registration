
// eslint-disable-next-line react/prop-types
const Cart = ({ selectedCourses,totalCreditHour,remainingHour , price}) => {
    // console.log(selectedCourses);
    return (
        <div className=" p-5 ml-6 mb-8 bg-gray-100 shadow-xl">
             <p>Credit Hour Remaining: {remainingHour} hr</p>
            <h3>Course Name</h3>
            {
            // eslint-disable-next-line react/prop-types
            selectedCourses.map( (Course) => (
                    // eslint-disable-next-line react/jsx-key
                    <li key={Course.id}>{Course.course_name}</li>
               
            ))}
            
            <p>Total Credit Hour :{totalCreditHour} hr</p>
            <p> Price: ${price}</p>
            
        </div>
    );
};

export default Cart;

 {/* <p>Credit Hour Remaining 0 hr</p>
            <h3>Course Name</h3>
            <p>Total Credit Hour : 0 </p>
            <p>Total Price : 48000 USD</p> */}