import { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import CurrentUserContext from "../contexts/current-user-context";
import { getUser } from "../adapters/user-adapter";
import { logUserOut } from "../adapters/auth-adapter";
import UpdateUsernameForm from "../components/UpdateUsernameForm";
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { Modal } from "../components/ui/modal";
import { User, LogOut, Info } from "lucide-react";

export default function UserPage() {
  const navigate = useNavigate();
  const { currentUser, setCurrentUser } = useContext(CurrentUserContext);
  const [userProfile, setUserProfile] = useState(null);
  const [error, setError] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { id } = useParams();
  const isCurrentUserProfile = currentUser && currentUser.id === Number(id);

  useEffect(() => {
    const loadUser = async () => {
      const [user, error] = await getUser(id);
      if (error) return setError(error);
      setUserProfile(user);
    };

    loadUser();
  }, [id]);

  const handleLogout = async () => {
    logUserOut();
    setCurrentUser(null);
    navigate('/');
  };

  if (error) return (
    <div className="h-full flex items-center justify-center p-4 sm:p-6 lg:p-8">
      <Card className="max-w-md">
        <CardContent className="p-6 text-center">
          <p className="text-muted-foreground">Sorry, there was a problem loading user. Please try again later.</p>
        </CardContent>
      </Card>
    </div>
  );

  if (!userProfile) return null;

  const profileUsername = isCurrentUserProfile ? currentUser.username : userProfile.username;

  return (
    <div className="h-full flex items-center justify-center p-4 sm:p-6 lg:p-8">
      <div className="w-full max-w-md">
        <Card>
          <CardHeader className="text-center">
            <CardTitle className="flex items-center justify-center space-x-2">
              <User className="w-6 h-6" />
              <span>{profileUsername}</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="text-center space-y-2">
              <p className="text-muted-foreground">Credit Card Enthusiast</p>
              <p className="text-sm text-muted-foreground">
                Helping others find the perfect credit card for their lifestyle and financial goals.
              </p>
            </div>

            {isCurrentUserProfile ? (
              <div className="space-y-4">
                <UpdateUsernameForm currentUser={currentUser} setCurrentUser={setCurrentUser} />
                <Button 
                  variant="outline" 
                  onClick={handleLogout}
                  className="w-full flex items-center space-x-2"
                >
                  <LogOut className="w-4 h-4" />
                  <span>Log Out</span>
                </Button>
              </div>
            ) : (
              <div className="text-center">
                <Button 
                  variant="outline" 
                  size="sm"
                  onClick={() => setIsModalOpen(true)}
                  className="flex items-center space-x-2 mx-auto"
                >
                  <Info className="w-4 h-4" />
                  <span>View Profile Details</span>
                </Button>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
      
      {/* Modal for additional content */}
      <Modal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)}
        title={`${profileUsername}'s Profile`}
      >
        <div className="space-y-4">
          <div className="space-y-3">
            <h3 className="font-semibold text-sm">About</h3>
            <p className="text-sm text-muted-foreground">
              This user is passionate about helping others make informed decisions about credit cards and financial products.
            </p>
            
            <h3 className="font-semibold text-sm">Activity</h3>
            <p className="text-sm text-muted-foreground">
              Active member of the CardFinder community, sharing insights and recommendations.
            </p>
            
            <h3 className="font-semibold text-sm">Preferences</h3>
            <p className="text-sm text-muted-foreground">
              Focuses on cards with good rewards programs and low annual fees.
            </p>
          </div>
        </div>
      </Modal>
    </div>
  );
}
