import { useState } from "react";
import { supabase } from "../lib/supabase";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "./Auth.css";

const Auth = () => {
  const [isLogin, setIsLogin] = useState(true);
  const navigate = useNavigate();

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
        toast.error("Invalid email or password.");
        console.error("Login error:", error);
        return;
      }

      navigate("/library");
    } else {
      const { error } = await supabase.auth.signUp({
        email,
        password,
      });

      if (error) {
        toast.error(
          "Could not create your account. Please use valid email account.",
        );
        console.error("Sign up error:", error);
        return;
      }
      toast.success("Account created successfully! You can now log in.");
      setIsLogin(true);
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
            minLength={6}
            autoComplete={isLogin ? "current-password" : "new-password"}
            required
          />
          {!isLogin && (
            <p className="password-hint">
              Use a password with at least 6 characters.
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
