import { useContext, useState } from "react";
import { useNavigate, Navigate, Link } from "react-router-dom";

// Context and adapter imports
import CurrentUserContext from "../contexts/current-user-context";
import { registerUser } from "../adapters/auth-adapter";

// UI component imports
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Label } from "../components/ui/label";

// Icon imports
import { CreditCard, Github } from "lucide-react";

// Constants
const BENEFITS = [
  { text: 'Save $500+ annually on fees', color: 'bg-green-400' },
  { text: 'Earn 2-5% cashback on everything', color: 'bg-green-400' },
  { text: 'Get approved in under 2 minutes', color: 'bg-green-400' },
  { text: 'No hidden fees, ever', color: 'bg-green-400' },
];

const TESTIMONIAL = {
  quote: "CardFinder helped me find a card that gives me 3% back on dining and groceries. I'm earning over $800 a year in rewards!",
  author: "Sarah Chen",
  role: "Verified User"
};

// Component for benefit item with colored dot
const BenefitItem = ({ text, color }) => (
  <div className="flex items-center space-x-3">
    <div className={`w-2 h-2 ${color} rounded-full`} />
    <span className="text-white">{text}</span>
  </div>
);

// Component for testimonial section
const TestimonialSection = ({ quote, author, role }) => (
  <div className="pt-4 border-t border-gray-700">
    <blockquote className="text-lg leading-relaxed text-gray-300">
      "{quote}"
    </blockquote>
    <div className="mt-3 text-sm">
      <p className="font-semibold text-white">{author}</p>
      <p className="text-gray-400">{role}</p>
    </div>
  </div>
);

export default function SignUpPage() {
  const navigate = useNavigate();
  const { currentUser, setCurrentUser } = useContext(CurrentUserContext);
  
  // Form state
  const [errorText, setErrorText] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // Redirect if user is already logged in
  if (currentUser) {
    return <Navigate to={`/users/${currentUser.id}`} />;
  }

  // Handle form submission
  const handleSubmit = async (event) => {
    event.preventDefault();
    setErrorText('');
    
    if (!email || !password) {
      return setErrorText('Missing email or password');
    }

    // Convert email to username for the existing API
    const username = email.split('@')[0];
    const [user, error] = await registerUser({ username, password });
    
    if (error) {
      return setErrorText(error.message);
    }

    setCurrentUser(user);
    navigate('/');
  };

  // Handle form input changes
  const handleChange = (event) => {
    const { name, value } = event.target;
    if (name === 'email') setEmail(value);
    if (name === 'password') setPassword(value);
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

        {/* Call to Action Section */}
        <div className="space-y-6">
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-white">
              Find Your Perfect Credit Card Match
            </h2>
            <p className="text-lg leading-relaxed text-gray-200">
              Join thousands of users who've discovered credit cards that actually work for their lifestyle.
            </p>
          </div>
          
          {/* Benefits List */}
          <div className="space-y-4">
            {BENEFITS.map((benefit, index) => (
              <BenefitItem key={index} {...benefit} />
            ))}
          </div>
          
          {/* Testimonial */}
          <TestimonialSection {...TESTIMONIAL} />
        </div>
      </div>

      {/* Right Column - Form */}
      <div className="flex-1 flex items-center justify-center p-4 sm:p-6 lg:p-8 bg-background overflow-y-auto">
        <div className="w-full max-w-sm sm:max-w-md space-y-4 sm:space-y-6">
          {/* Login Link */}
          <div className="text-right">
            <Link 
              to="/login" 
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Login
            </Link>
          </div>

          {/* Form Card */}
          <Card className="border-0 shadow-none rounded-2xl">
            <CardHeader className="space-y-2 text-center px-6 sm:px-8">
              <CardTitle className="text-xl sm:text-2xl font-bold">Start Your Journey</CardTitle>
              <CardDescription className="text-sm">
                Join CardFinder and discover credit cards that actually work for you
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4 px-6 sm:px-8 pb-6 sm:pb-8">
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="name@example.com"
                    value={email}
                    onChange={handleChange}
                    required
                    className="rounded-lg"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="password">Password</Label>
                  <Input
                    id="password"
                    name="password"
                    type="password"
                    value={password}
                    onChange={handleChange}
                    required
                    className="rounded-lg"
                  />
                </div>

                <Button type="submit" className="w-full bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white font-semibold">
                  🚀 Start Finding My Perfect Card
                </Button>
              </form>

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

              {/* GitHub Button */}
              <Button variant="outline" className="w-full rounded-lg">
                <Github className="mr-2 h-4 w-4" />
                GitHub
              </Button>

              {/* Error Message */}
              {errorText && (
                <p className="text-sm text-destructive text-center">{errorText}</p>
              )}

              {/* Terms */}
              <p className="text-xs text-muted-foreground text-center">
                By clicking continue, you agree to our{" "}
                <Link to="/terms" className="underline underline-offset-4 hover:text-foreground">
                  Terms of Service
                </Link>{" "}
                and{" "}
                <Link to="/privacy" className="underline underline-offset-4 hover:text-foreground">
                  Privacy Policy
                </Link>
                . Join 50,000+ happy users! 🎉
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
