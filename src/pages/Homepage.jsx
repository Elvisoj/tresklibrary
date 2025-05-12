import { useEffect } from "react";
import HomeSlide from "../components/HomeSlide";
import { supabase } from "../config/supabaseClient";
import { UseAccountContext } from "../config/AccountContext";
import fetchCourses from "../config/fetchCourses";

function Homepage() {
  const { session, setSession, courses, setCourses } = UseAccountContext();

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
    });

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
    });

    return () => subscription.unsubscribe();
  }, []);

  useEffect(() => {
    fetchCourses(setCourses);
  }, []);

  const signUpFxn = async () => {
    const { user, error } = await supabase.auth.signInWithOAuth({
      provider: "google",
    });
    if (error) {
      console.error("Error signing in:", error.message);
    } else {
      console.log("User signed in:", user);
    }
  };

  if (!session) {
    return (
      <div className="account">
        <div className="sign-in">
          <h2 className="overlay">Welcome to Tresk Digital Library</h2>
          <div className="info">
            <p>
              Tresk library is a library accredited solely for University
              student. This is a way of providing unlimited resources for
              fooster growth in our educational life.
              <br />
              Moi Aboi Dantina Akalyl
            </p>
          </div>
          <h3 className="overlay">Login to your account</h3>
          <button onClick={signUpFxn} className="signup-btn">
            SignIn With Google
          </button>
        </div>
      </div>
    );
  } else {
    return (
      <div className="main">
        <div className="main-wrapper">
          <HomeSlide />
        </div>
      </div>
    );
  }
}

export default Homepage;
