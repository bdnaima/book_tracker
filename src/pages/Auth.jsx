import { useState } from "react";
import { supabase } from "../lib/supabase";
import "./Auth.css";

const Auth = () => {
  const [isLogin, setIsLogin] = useState(true);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const email = e.target.email.value;
    const password = e.target.password.value;

    if (isLogin) {
      const { error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });

      if (error) {
        console.error("Login error:", error);
        return;
      }

      console.log("Logged in successfully!");
    } else {
      const { error } = await supabase.auth.signUp({
        email,
        password,
      });

      if (error) {
        console.error("Sign up error:", error);
        return;
      }

      console.log("Account created successfully!");
    }
  };

  return (
    <main className="auth-page">
      <div className="auth-card">
        <div className="auth-header">
          <span className="auth-icon">{isLogin ? "📚" : "🌱"}</span>

          <h1>{isLogin ? "Welcome Back" : "Create an Account"}</h1>

          <p>
            {isLogin
              ? "Log in to continue your reading journey."
              : "Create an account and start building your personal library."}
          </p>
        </div>

        <form className="auth-form" onSubmit={handleSubmit}>
          <input type="email" name="email" placeholder="Email" required />

          <input
            type="password"
            name="password"
            placeholder="Password"
            required
          />
          {!isLogin && (
            <p className="password-hint">
              Choose a secure password that you will remember.
            </p>
          )}
          <button type="submit" className="auth-button">
            {isLogin ? "Log In" : "Sign Up"}
          </button>
        </form>

        <div className="auth-footer">
          <p>
            {isLogin ? "Don't have an account?" : "Already have an account?"}{" "}
            <button onClick={() => setIsLogin(!isLogin)}>
              {isLogin ? "Create one" : "Log in"}
            </button>
          </p>
        </div>
      </div>
    </main>
  );
};

export default Auth;
