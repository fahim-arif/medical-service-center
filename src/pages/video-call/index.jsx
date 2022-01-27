import { useEffect } from "react";
import $ from "jquery"

export default () => {
  useEffect(() => {
    $(function () {
      $(document).on("click", ".join-meeting", function () {
        $(".enter-code").focus();
      });
      $(document).on("click", ".join-action", function () {
        var join_value = $(".enter-code").val();
        var meetingUrl = window.location.origin + "/video-call/meeting?id=" + join_value;
  
        window.location.replace(meetingUrl);
      });
      $(document).on("click", ".new-meeting", function () {
       var eight_digit_value = Math.floor(Math.random() * 100000000);
        var meetingUrl = window.location.origin + "/video-call/meeting?id=" + eight_digit_value;
  
        window.location.replace(meetingUrl);
      });
    });
  }, [])
 
  return (
   <div>
    <nav className="navbar navbar-expand-md fixed-top">
      {/* <img
        src="images/google-meet-icon.png"
        alt=""
        className="logo"
      /> */}
      <a href="/" style={{pointer:'cursor'}} className="navbar-brand text-dark">Emergency Medical Service</a>
      <div className="collapse navbar-collapse">
        {/* <ul className="navbar-nav mr-auto">
          <li className="nav-item">
            <a href="#" className="nav-link">At a glance</a>
          </li>
          <li className="nav-item">
            <a href="#" className="nav-link">How it work</a>
          </li>
          <li className="nav-item">
            <a href="#" className="nav-link">Plan and price</a>
          </li>
        </ul> */}
      </div>
    </nav>
    <main>
      <div className="jumbotron h-100 d-flex">
        <div className="container w-50">
          <h1 className="mt-4" style={{fontSize: "3rem"}}>
           Video call service available for everyone
          </h1>
          <p className="mt-4" style={{fontSize: "20px"}}>
            We're providing 24/7 doctor and medical service.
          </p>
          <ul className="display-center justify-content-start mt-5">
            <li style={{padding: "0"}}>
              <button
                className="
                  btn btn-lg
                  text-light
                  font-weight-bold
                  display-center
                  new-meeting
                "
                style={{backgroundColor: "#01796b"}}
              >
                <span className="material-icons mr-2 "> video_call </span>
                New Meeting
              </button>
            </li>
            <li className="pl-3">
              {/* <button
                className="
                  btn btn-lg btn-outline-secondary
                  text-dark
                  font-weight-bold
                  display-center
                "
                style={{backgroundColor: "#fff"}}
              >
                <span className="material-icons mr-2"> keyboard </span>
                <input
                  type="text"
                  placeholder="Enter a code"
                  style={{border:"none"}}
                  className="enter-code"
                />
              </button> */}
            </li>
            {/* <li
              className="text-dark font-weight-bold cursor-pointer pl-2 join-action"
            >
              Join
            </li> */}
          </ul>
        </div>
        <div className="container w-50">
          <img
            src="/images/post2.jpg"
            alt=""
            className="signin-image"
          />
        </div>
      </div>
    </main>
    <footer className="container">
      <h6>
        Learn more about <span className="learn-more text-info"> Emegency Medical Service System</span>
      </h6>
    </footer>

  
   
    </div>
  );
};
