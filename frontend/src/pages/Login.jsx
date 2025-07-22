import { useContext, useState } from "react";
import { useNavigate, Navigate, Link } from "react-router-dom";
import { logUserIn } from "../adapters/auth-adapter";
import CurrentUserContext from "../contexts/current-user-context";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Label } from "../components/ui/label";
import { CreditCard, LogIn, Shield, Zap, Users } from "lucide-react";

export default function LoginPage() {
  const navigate = useNavigate();
  const [errorText, setErrorText] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const { currentUser, setCurrentUser } = useContext(CurrentUserContext);

  if (currentUser) return <Navigate to={`/users/${currentUser.id}`} />;

  const handleSubmit = async (event) => {
    event.preventDefault();
    setErrorText('');

    const [user, error] = await logUserIn({ username, password });
    if (error) return setErrorText(error.message);

    setCurrentUser(user);
    navigate(`/users/${user.id}`);
  };

  return (
    <div className="h-full flex overflow-hidden">
      {/* Left Column - Dark Background */}
      <div className="hidden lg:flex lg:w-2/5 bg-black text-white p-6 lg:p-8 flex-col justify-between rounded-r-3xl">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
            <CreditCard className="w-5 h-5 text-black" />
          </div>
          <span className="text-xl font-bold">CardFinder</span>
        </div>

        {/* Welcome Back Section */}
        <div className="space-y-6">
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-white">
              Welcome Back!
            </h2>
            <p className="text-lg leading-relaxed text-gray-200">
              Continue your journey to finding the perfect credit card that matches your lifestyle.
            </p>
          </div>
          
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
              <span className="text-white">Access your personalized recommendations</span>
            </div>
            <div className="flex items-center space-x-3">
              <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
              <span className="text-white">Track your rewards and savings</span>
            </div>
            <div className="flex items-center space-x-3">
              <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
              <span className="text-white">Compare your current cards</span>
            </div>
            <div className="flex items-center space-x-3">
              <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
              <span className="text-white">Get notified about better offers</span>
            </div>
          </div>
          
          <div className="pt-4 border-t border-gray-700">
            <blockquote className="text-lg leading-relaxed text-gray-300">
              "I've been using CardFinder for 6 months and I'm already earning $200 more in rewards each year. The personalized recommendations are spot on!"
            </blockquote>
            <div className="mt-3 text-sm">
              <p className="font-semibold text-white">Michael Rodriguez</p>
              <p className="text-gray-400">Verified User</p>
            </div>
          </div>
        </div>
      </div>

      {/* Right Column - Form */}
      <div className="flex-1 flex items-center justify-center p-4 sm:p-6 lg:p-8 bg-background overflow-y-auto">
        <div className="w-full max-w-sm sm:max-w-md space-y-4 sm:space-y-6">
          {/* Sign Up Link */}
          <div className="text-right">
            <Link 
              to="/sign-up" 
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Sign up
            </Link>
          </div>

          {/* Form Card */}
          <Card className="border-0 shadow-none rounded-2xl">
            <CardHeader className="space-y-2 text-center px-6 sm:px-8">
              <CardTitle className="text-xl sm:text-2xl font-bold flex items-center justify-center space-x-2">
                <LogIn className="w-6 h-6" />
                <span>Welcome back</span>
              </CardTitle>
              <CardDescription className="text-sm">
                Sign in to your CardFinder account
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4 px-6 sm:px-8 pb-6 sm:pb-8">
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="username">Username</Label>
                  <Input
                    id="username"
                    name="username"
                    type="text"
                    autoComplete="username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="password">Password</Label>
                  <Input
                    id="password"
                    name="password"
                    type="password"
                    autoComplete="current-password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                </div>

                <Button type="submit" className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold">
                  🔐 Sign In to My Account
                </Button>
              </form>

              {errorText && (
                <p className="text-sm text-destructive text-center">{errorText}</p>
              )}

              {/* Divider */}
              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <span className="w-full border-t" />
                </div>
                <div className="relative flex justify-center text-xs uppercase">
                  <span className="bg-background px-2 text-muted-foreground">
                    OR CONTINUE WITH
                  </span>
                </div>
              </div>

              {/* Social Login Button */}
              <Button variant="outline" className="w-full">
                <Users className="mr-2 h-4 w-4" />
                Continue as Guest
              </Button>

              {/* Terms */}
              <p className="text-xs text-muted-foreground text-center">
                By signing in, you agree to our{" "}
                <Link to="/terms" className="underline underline-offset-4 hover:text-foreground">
                  Terms of Service
                </Link>{" "}
                and{" "}
                <Link to="/privacy" className="underline underline-offset-4 hover:text-foreground">
                  Privacy Policy
                </Link>
                .
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
