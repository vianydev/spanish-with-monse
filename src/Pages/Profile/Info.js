// All style are in Profile.css
const Info = () => {
  return (
    <section id="info">
      <div className="info-container">
        <h1 style={{ gridArea: "title" }}>Info</h1>
        <h3 style={{ gridArea: "subtitle" }}>Hello, thank you for choosing me to go with you on your adventure to learn Spanish. </h3>
        <h3>This document will help you to understand the process details, payment policy, and other important information.</h3>
        
        <div className="divisor"></div>

          <div>
            <ul className="content-table">
             <li><a href="#before-start"><strong>1. Before to start</strong></a>
                <ul>
                  <li><a href="#acceptance-of-terms">Acceptance of the terms</a></li>
                  <li><a href="#choose-goal">Choose your goal</a></li>
                  <li><a href="#choose-plan">Choose your plan</a></li>
                </ul>
              </li>
              <div className="divisor-content-table"></div>
              <li><a href="#payments"><strong>2. Payments</strong></a>
                <ul>
                  <li><a href="#free-trial-lesson">Free trial lesson</a></li>
                </ul>
              </li>
              <div className="divisor-content-table"></div>
              <li><a href="#book-class"><strong>3. Booking your class</strong></a>
                <ul>
                  <li><a href="#book-lesson">Book your lessons</a></li>
                  <li><a href="#modify-schedule">Modify your schedule</a></li>
                  <li><a href="#delays">Delays</a></li>
                </ul>
              </li>
              <div className="divisor-content-table"></div>
              <li><a href="#cancellations"><strong>4. Cancellations</strong></a></li>
            </ul>
          </div>

        <div id="before-start" className="divisor"></div>
        <div id="acceptance-of-terms"></div>
        <div id="choose-goal"></div>

        <section className="before-start">
          <h2>1. Before to Start</h2>
          
          <h3>Acceptance of the Terms</h3>
          <p>By paying for your first lesson plan, you agree to be bound by this agreement and the terms. Please review all of the terms carefully before making your payment.</p>
          
          <div className="choose-your-goal">
            <h3>Choose your goal</h3>
            <p>In order to give you the best learning experience and prepare the class material, choose your goal path.</p>

            <div className="goals-list">
              <h4>Principiante <i>(Beginners)</i></h4>
              <ul>
                <li>This is my first attempt at learning Spanish.</li>
                <li>You have a basic understanding of and ability to communicate in Spanish, but you are weak in grammar.</li>
              </ul>
              
              <h4>Conversación <i>(Conversation)</i></h4>
              <ul>
                <li>You understand the fundamentals, yet it's difficult for you to communicate.</li>
                <li>You are unable to clearly communicate your thoughts.</li>
                <li>You want to discuss specialist or technical subjects.</li>
              </ul>
              <div id="choose-plan"></div>
              <h4>Siguiente nivel <i>(Next Level)</i></h4>
              <ul>
                <li>You've previously taken Spanish classes and wish to continue.</li>
                <li>You're seeking for a specific level (A1, A2, B1, B2).</li>
                <li>You'd like to improve your Spanish as a whole.</li>
              </ul>
              
            </div>
          </div>

         

          <div className="choose-your-plan">
            <h3>Choose your lesson plan</h3>
            <p>Select the lesson plan that you want.</p>

            <div className="price-table">
              <div className="price-box">
                <h4>Basic</h4>
                <h5>$88 USD</h5>
                <ul>
                  <li>50 minutes class</li>
                  <li>4 lessons</li>
                </ul>
              </div>
              <div className="price-box">
                <h4>Plus</h4>
                <h5>$88 USD</h5>
                <ul>
                  <li>50 minutes class</li>
                  <li>8 lessons</li>
                </ul>
              </div>
              <div className="price-box">
                <h4>Intensive</h4>
                <h5>$88 USD</h5>
                <ul>
                  <li>50 minutes class</li>
                  <li>12 lessons</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <div id="payments" className="divisor"></div>
        <section id="free-trial-lesson">
          <h2>2. Payments</h2>
          <p>Payments will be made in advance through PayPal. I will send you a payment request by email. Once purchased, they are <strong>non-refundable.</strong></p>

          <h3>Free Trial Lesson</h3>
          <p>The trial lesson has a 30-minutes duration. It is only available to first-time students.</p>
        </section>
       
        <div id="book-class" className="divisor"></div>
          <div id="book-lesson"></div>
          <div id="modify-schedule"></div>
          <div id="delays"></div>

        <section>
          <h2>3. Booking your class</h2>
          <p>Every lesson has a 50-minute duration.</p>

          <h3>Book your lessons</h3>
          <p>Class bookings will be made monthly.You may choose the date and time available of all your future lessons <strong>before starting your class plan.</strong></p>

          <h3>Modify your schedule</h3>
          <p>Changes of date and time are subject to the teacher's availability, <strong>7 days in advance.</strong></p>
          
          <h3>Delays</h3>
          <p>All classes are 50 minutes long. If the student arrives late, the lesson will be given for the remaining time of the agreed hour.</p>
        </section>

        <div id="cancellations" className="divisor"></div>
        <section>
          <h2>4. Cancellations</h2>
          <p>You can cancel and reschedule <strong>1 lesson per month</strong> for health or emergency reasons, as long as you notify <strong>up to 24 hours before the lesson</strong> is due to start and rescheduled thereafter. Otherwise, the class will be counted as received.</p>

          <p>There will be <strong>15 days to agree on a new date</strong> that adjusts to the teacher's availability to make use of the postponed class. After this time, the class will be counted as received.</p>

          <p>If the student does not attend a class, it will be counted as received.</p>
        </section>

        <div className="divisor"></div>

        <h5>If you have any questions, please contact me.</h5>
      </div>
    </section>
  )
}

export default Info;