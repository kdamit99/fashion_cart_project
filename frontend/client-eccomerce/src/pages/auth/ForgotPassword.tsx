import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Link } from "react-router-dom";

const ForgotPassword = () => {
  const [step, setStep] = useState<1 | 2 | 3>(1);
  const [mobileOrEmail, setMobileOrEmail] = useState("");
  const [otp, setOtp] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSendOTP = () => {
    // validate & send OTP logic here
    setStep(2);
  };

  const handleVerifyOTP = () => {
    // verify OTP logic here
    setStep(3);
  };

  const handleChangePassword = () => {
    // change password logic here
    console.log("Password Changed:", password);
  };

  return (
    <div className="space-y-6 max-w-md mx-auto">
      <div>
        <h2 className="text-2xl font-bold text-teal-700">Forgot Password</h2>
        <p className="text-gray-600">
          Reset your password with OTP verification.
        </p>
      </div>

      <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
        {step === 1 && (
          <>
            <Input
              type="text"
              placeholder="Email or Mobile Number"
              value={mobileOrEmail}
              onChange={(e) => setMobileOrEmail(e.target.value)}
            />
            <Button
              className="w-full bg-teal-600 text-white hover:bg-teal-700"
              onClick={handleSendOTP}
            >
              Send OTP
            </Button>
          </>
        )}

        {step === 2 && (
          <>
            <Input
              type="text"
              placeholder="Enter OTP"
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
            />
            <Button
              className="w-full bg-teal-600 text-white hover:bg-teal-700"
              onClick={handleVerifyOTP}
            >
              Verify OTP
            </Button>
          </>
        )}

        {step === 3 && (
          <>
            <Input
              type="password"
              placeholder="New Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <Input
              type="password"
              placeholder="Confirm New Password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
            <Button
              className="w-full bg-teal-600 text-white hover:bg-teal-700"
              onClick={handleChangePassword}
            >
              Change Password
            </Button>
          </>
        )}

        <div className="flex justify-between text-sm pt-4">
          <Link to="/login" className="text-teal-600 hover:underline">
            Login?
          </Link>
          <Link to="/signup" className="text-teal-600 hover:underline">
            Create Account?
          </Link>
        </div>
      </form>
    </div>
  );
};

export default ForgotPassword;
