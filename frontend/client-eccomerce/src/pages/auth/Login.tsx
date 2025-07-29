import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Link } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [credentials, setCredentials] = useState({ email: "", password: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();

    const { email, password } = credentials;

    if (email === "admin@gmail.com" && password === "password") {
      navigate("/home");
    } else {
      alert("Invalid email or password");
    }
  };

  return (
    <div className="space-y-6 max-w-md mx-auto">
      <div>
        <h2 className="text-2xl font-bold text-teal-700">
          Login to Your Account
        </h2>
        <p className="text-teal-600">
          Welcome back! Please enter your credentials.
        </p>
      </div>

      <form className="space-y-4" onSubmit={handleLogin}>
        <Input
          type="text"
          name="email"
          value={credentials.email}
          onChange={handleChange}
          placeholder="Email"
        />
        <Input
          type="password"
          name="password"
          value={credentials.password}
          onChange={handleChange}
          placeholder="Password"
        />

        <div className="flex justify-between text-sm">
          <Link to="/forgot-password" className="text-teal-600 hover:underline">
            Forgot Password?
          </Link>
          <Link to="/signup" className="text-teal-600 hover:underline">
            Create Account?
          </Link>
        </div>

        <Button
          type="submit"
          className="w-full bg-teal-600 text-white uppercase tracking-wide hover:bg-teal-700 transition"
        >
          Login
        </Button>
      </form>
    </div>
  );
};

export default Login;
