import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Link } from "react-router-dom";

const Login = () => {
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

      <form className="space-y-4">
        <Input type="text" placeholder="Email or Mobile Number" />
        <Input type="password" placeholder="Password" />

        <div className="flex justify-between text-sm">
          <Link to="/forgot-password" className="text-teal-600 hover:underline">
            Forgot Password?
          </Link>
          <Link to="/signup" className="text-teal-600 hover:underline">
            Create Account?
          </Link>
        </div>

        <Button className="w-full bg-teal-600 text-white uppercase tracking-wide hover:bg-teal-700 transition">
          Login
        </Button>
      </form>
    </div>
  );
};

export default Login;
