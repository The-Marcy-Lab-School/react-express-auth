import { useNavigate } from "react-router-dom";
import { updateUsername } from "../adapters/user-adapter";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";

export default function UpdateUsernameForm({ currentUser, setCurrentUser }) {
  const navigate = useNavigate();
  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const [user, error] = await updateUsername(Object.fromEntries(formData));
    // If our user isn't who they say they are
    // (an auth error on update) log them out
    // We added the httpStatus as a custom cause in our error
    if (error?.cause > 400 && error?.cause < 500) {
      setCurrentUser(null);
      return navigate('/');
    }

    setCurrentUser(user);
    event.target.reset();
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="space-y-2">
        <Label htmlFor="username">New Username</Label>
        <Input type="text" id="username" name="username" required />
        <input type="hidden" name="id" value={currentUser.id} />
      </div>
      <Button type="submit" className="w-full">
        Update Username
      </Button>
    </form>
  );
}
