import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Link } from "react-router-dom";

const SignUp = () => {
  return (
    <div className="space-y-6 max-w-md mx-auto">
      <div>
        <h2 className="text-2xl font-bold text-teal-700">Create an Account</h2>
        <p className="text-gray-600">Start your shopping journey with us.</p>
      </div>

      <form className="space-y-4">
        <div className="flex gap-4">
          <Input type="text" placeholder="First Name" />
          <Input type="text" placeholder="Last Name" />
        </div>
        <Input type="text" placeholder="Mobile Number" />
        <Input type="email" placeholder="Email ID" />
        <Input type="password" placeholder="Password" />
        <Input type="password" placeholder="Confirm Password" />
        <Button className="w-full bg-teal-600 hover:bg-teal-700 text-white">
          Create Account
        </Button>

        <div className="text-sm text-center">
          <Link
            to="/login"
            className="text-teal-600 hover:underline hover:text-teal-700"
          >
            Already have an account? Login
          </Link>
        </div>
      </form>
    </div>
  );
};

export default SignUp;
