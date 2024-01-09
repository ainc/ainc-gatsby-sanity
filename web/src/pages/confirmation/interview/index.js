
// const InterviewPage = props => {
//     const [isTimerComplete, setIsTimerComplete] = useState(false);
//     // const [type] = useSearchParams();
//     // const [queryParameters] = useSearchParams()

//     // const location = useLocation()
//     // const type = location.search



//     const handleTimerComplete = () => {
//       setIsTimerComplete(true);

//     };
//     return (
//       <Layout>
//         <Container>
            

//             <Col lg={{span:12, offset: 0}}  className='' >
//                 <Row>
//                     <h1 className=" my-1">Bootcamp Interview Schedule</h1>
//                 </Row>
//                 <Row>
//                     <p  className='ms-3' style={{fontSize: "1.5 rem"}}>  Thank you for scheduling a call with us {}. Please check your inbox and confirm that you can make the scheduled time. </p>
//                 </Row>
//                 <Row className='justify-content-center'> 
//                     {!isTimerComplete ? (
//                         <CountdownCircleTimer 
//                             isPlaying
//                             duration={290} // 4 minutes 50 seconds 
//                             onComplete={handleTimerComplete}
//                             colors={[['#ff0000']]}
//                             strokeLinecap = {'square'}
//                             strokeWidth= {'5'}
//                             size={60}
//                             >
//                             {({ remainingTime}) => (
//                                 <div>
//                                 <h1 style={{ fontSize: 16, marginLeft: "25px", marginTop: "5px", fontWeight: "bold"}}>{`${Math.floor(remainingTime / 60).toString().padStart(2, '0')}:${(remainingTime % 60).toString().padStart(2, '0')}`}</h1>
//                                 </div>
//                             )}
//                         </CountdownCircleTimer>
//                     ) : (
//                         null
//                     )}


//         </Row>
//                 <Row>
//                     <ul className='ms-5'>
//                         <li>
//                             <p>
//                                 <a  className = {styles.link} style={{fontSize: "1.5 rem"}} href="https://forms.zohopublic.com/virtualoffice9155/form/BootcampApplicationBasicChallengesF20/formperma/eyRW9Evft9ta2yt2rE4dpWtevNxIo_W804G-905H9d4">
//                                     Before your scheduled Call, please complete these basic challenges.
//                                 </a>
//                             </p>
                           
//                         </li>
//                         <li>
//                             <p>
//                             <a  className = {styles.link} style={{fontSize: "1.5 rem"}} href="https://www.awesomeinc.org/blog/what-we-look-for-bootcamp-student">
//                                Want to know what we'll talk about on our call? Check out our blog here!
//                             </a>
//                             </p>
//                         </li>
//                     </ul>
//                 </Row>
//                 <Row>
//                     <p className='ms-4'>
//                         Didn't receive an email? You can call or text 859.960.4600 directly to confirm your interview.
//                     </p>
//                 </Row>
               
//             </Col>
          
//         </Container>
//       </Layout>
  
//     )
//   }



// import { BrowserRouter, Route, Routes } from 'react-router-dom';

// const test = () => {
//   return (
//     <BrowserRouter>
//       <Routes>
//         <Route path='/interview' element={<InterviewPage />} />
//       </Routes>
//     </BrowserRouter>
//   );
// }

// const InterviewPage = () => {
//   return (
//     <div>Hello World</div>
//   );
// }

// export default test;

// import React from "react"
// import {
//   Routes,
//   Route,
//   useSearchParams,
//   BrowserRouter
// } from "react-router-dom"

// import React from 'react';
// import { Router } from '@reach/router';

// const App = () => {
//   return (
//     <Router basepath='/confirmation'>
//       <InterviewPage path="/interview" />
//     </Router>
//   );
// }

// const InterviewPage = () => {
//   return (
//     <div>Hello World</div>
//   );
// }

// export default App;


// import React from "react";
// import { render } from "react-dom";
// import { Router, Link, Redirect, Location } from "@reach/router";
// import { TransitionGroup, CSSTransition } from "react-transition-group";

// const App = () => (
//   <div className="app">
//     <nav className="nav">
//       {/* <Link to="/confirmation/interview">Page 1</Link>{" "} */}
//       <Link to="confirmation/interview">Schedule now</Link>{" "}
     
//     </nav>

//     <FadeTransitionRouter>
//       {/* <Page path="/confirmation/interview"/> */}
//       <InterviewPage path="confirmation/interview/:/page" page="?assigned_to"/>
//     </FadeTransitionRouter>
//   </div>
// );

// const FadeTransitionRouter = props => (
//   <Location>
//     {({ location }) => (
//       <TransitionGroup className="transition-group">
//         <CSSTransition key={location.key} classNames="fade" timeout={500}>
//           {/* the only difference between a router animation and
//               any other animation is that you have to pass the
//               location to the router so the old screen renders
//               the "old location" */}
//           <Router location={location} className="router">
//             {props.children}
//           </Router>
//         </CSSTransition>
//       </TransitionGroup>
//     )}
//   </Location>
// );

// const InterviewPage = props => {
//     const [isTimerComplete, setIsTimerComplete] = useState(false);
//     // const [type] = useSearchParams();
//     // const [queryParameters] = useSearchParams()

//     // const location = useLocation()
//     // const type = location.search


//     const handleTimerComplete = () => {
//       setIsTimerComplete(true);

//     };
//     return (
//       <Layout>
//         <Container>
//             <Col lg={{span:12, offset: 0}}  className='' >
//                 <Row>
//                     <h1 className=" my-1">Bootcamp Interview Schedule</h1>
//                 </Row>
//                 <Row>
//                     <p  className='ms-3' style={{fontSize: "1.5 rem"}}>  Thank you for scheduling a call with us {props.page}. Please check your inbox and confirm that you can make the scheduled time. </p>
//                 </Row>
//                 <Row className='justify-content-center'> 
//                     {!isTimerComplete ? (
//                         <CountdownCircleTimer 
//                             isPlaying
//                             duration={290} // 4 minutes 50 seconds 
//                             onComplete={handleTimerComplete}
//                             colors={[['#ff0000']]}
//                             strokeLinecap = {'square'}
//                             strokeWidth= {'5'}
//                             size={60}
//                             >
//                             {({ remainingTime}) => (
//                                 <div>
//                                 <h1 style={{ fontSize: 16, marginLeft: "25px", marginTop: "5px", fontWeight: "bold"}}>{`${Math.floor(remainingTime / 60).toString().padStart(2, '0')}:${(remainingTime % 60).toString().padStart(2, '0')}`}</h1>
//                                 </div>
//                             )}
//                         </CountdownCircleTimer>
//                     ) : (
//                         null
//                     )}


//         </Row>
//                 <Row>
//                     <ul className='ms-5'>
//                         <li>
//                             <p>
//                                 <a  className = {styles.link} style={{fontSize: "1.5 rem"}} href="https://forms.zohopublic.com/virtualoffice9155/form/BootcampApplicationBasicChallengesF20/formperma/eyRW9Evft9ta2yt2rE4dpWtevNxIo_W804G-905H9d4">
//                                     Before your scheduled Call, please complete these basic challenges.
//                                 </a>
//                             </p>
                           
//                         </li>
//                         <li>
//                             <p>
//                             <a  className = {styles.link} style={{fontSize: "1.5 rem"}} href="https://www.awesomeinc.org/blog/what-we-look-for-bootcamp-student">
//                                Want to know what we'll talk about on our call? Check out our blog here!
//                             </a>
//                             </p>
//                         </li>
//                     </ul>
//                 </Row>
//                 <Row>
//                     <p className='ms-4'>
//                         Didn't receive an email? You can call or text 859.960.4600 directly to confirm your interview.
//                     </p>
//                 </Row>
               
//             </Col>
          
//         </Container>
//       </Layout>
  
//     )
//   }


// export default App;


// import React from "react";
// import { Router, useLocation, useParams  } from "@reach/router";

// const App = () => {
//     const [searchParams, setSearchParams] = useParams()
//     const results = searchParams.get("filter")
//   return (
    
//     <div>
//         <nav>
//             <button onClick={() => setSearchParams({filter: 'active'})}>Active</button>
//             <button onClick={()=> setSearchParams({})}> Reset</button>
//             {results}
//         </nav>

//         <Router basepath="/confirmation">
//         <InterviewPage path="/interview" />
//       </Router>
//     </div>
       
      
    
//   );
// };

// const InterviewPage = () => {
//     const location = useLocation()
//     const searchParams = new URLSearchParams(location.search)
//     const assigned = searchParams.get("assigned_to")
    
//   return (
//     <div>
//         Thank you for scheduling {assigned}
      
//     </div>
//     )
// };

// export default App;


// import React from "react";

// import { Router, Link } from "@reach/router";

// const App = ({ children }) => (
//   <div>
    
//     <nav>
//       <Link to="/confirmation/interview">Home</Link>{" "}
//       <Link to="confirmation/interview/1">Bob</Link>{" "}
//     </nav>
//     {children}
//   </div>
// );

// const User = props => <h2>{props.userId}</h2>;

// const Home = () => (
//   <div>
//     <h2>Welcome!</h2>
//     <p>
//       Select a user, their ID will be parsed from the URL and passed to the User
//       component
//     </p>
//   </div>
// );

// export default App;



// import React from "react";
// import { Router, Link, Redirect, Location } from "@reach/router";
// import { TransitionGroup, CSSTransition } from "react-transition-group";

// const App = () => (
//   <div className="app">
//     <nav className="nav">
//       {/* <Link to="/confirmation/interview">Page 1</Link>{" "} */}
//       <Link to="confirmation/interview/'/?2'">Schedule now</Link>{" "}
//       {/* <Link to="page/3">Page 3</Link>{" "}
//       <Link to="page/4">Page 4</Link> */}
//     </nav>

//     <FadeTransitionRouter>
//       {/* <Page path="/confirmation/interview" page="1" /> */}
//       <Page path="confirmation/interview/:page" />
//     </FadeTransitionRouter>
//   </div>
// );

// const FadeTransitionRouter = props => (
//   <Location>
//     {({ location }) => (
//       <TransitionGroup className="transition-group">
//         <CSSTransition key={location.key} classNames="fade" timeout={500}>
//           <Router location={location} className="router">
//             {props.children}
//           </Router>
//         </CSSTransition>
//       </TransitionGroup>
//     )}
//   </Location>
// );

// const Page = props => (
//   <div
//     className="page"
//     style={{ background: `hsl(${props.page * 75}, 60%, 60%)` }}
//   >
//     {props.page}
//   </div>
// );

// export default App;



import React from "react"
import { Router, Link, Location } from "@reach/router"
import { TransitionGroup, CSSTransition } from "react-transition-group"


const App = () => (
  <div className="app">
    <nav className="nav">
      <Link to="confirmation/interview/">Page 1</Link> 
      <Link to="confirmation/interview/?assigned_to=Stephen">Page 2</Link>
      {` `}

    </nav>

    <FadeTransitionRouter>
      {/* <Page path="confirmation/interview" page="1" /> */}
      <Page path="confirmation/interview/:/page" />
    </FadeTransitionRouter>
  </div>
)

const FadeTransitionRouter = props => (
  <Location>
    {({ location }) => (
      <TransitionGroup className="transition-group">
        <CSSTransition key={location.key} classNames="fade" timeout={500}>
          <Router location={location} className="router">
            {props.children}
          </Router>
        </CSSTransition>
      </TransitionGroup>
    )}
  </Location>
)

const Page = props => (
  <div
    className="page"
    style={{ background: `hsl(${props.page * 75}, 60%, 60%)` }}
  >
    {props.page}
  </div>
)

export default App


