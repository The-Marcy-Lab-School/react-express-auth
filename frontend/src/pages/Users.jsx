import { useEffect, useState } from "react";

// Adapter imports
import { getAllUsers } from "../adapters/user-adapter";

// Component imports
import UserLink from "../components/UserLink";
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { Modal } from "../components/ui/modal";

// Icon imports
import { Users, Info } from "lucide-react";

// Constants
const MODAL_CONTENT = {
  title: "About User Profiles",
  description: "Our user community helps us provide better credit card recommendations and insights.",
  features: [
    {
      title: "Community Insights",
      description: "See how other users are finding their perfect credit cards and learn from their experiences."
    },
    {
      title: "Profile Privacy",
      description: "User profiles only show public information. Personal financial data is never shared."
    },
    {
      title: "Connect & Share",
      description: "Join discussions about credit cards, share tips, and help others make informed decisions."
    }
  ]
};

// Component for user card
const UserCard = ({ user }) => (
  <div className="p-3 border rounded-lg hover:bg-muted/50 transition-colors">
    <UserLink user={user} />
  </div>
);

// Component for modal feature section
const ModalFeature = ({ title, description }) => (
  <div>
    <h3 className="font-semibold text-sm">{title}</h3>
    <p className="text-sm text-muted-foreground">{description}</p>
  </div>
);

// Component for error state
const ErrorState = () => (
  <div className="h-full flex items-center justify-center p-4 sm:p-6 lg:p-8">
    <Card className="max-w-md">
      <CardContent className="p-6 text-center">
        <p className="text-muted-foreground">
          Sorry, there was a problem loading users. Please try again later.
        </p>
      </CardContent>
    </Card>
  </div>
);

export default function UsersPage() {
  // State management
  const [users, setUsers] = useState([]);
  const [error, setError] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Load users on component mount
  useEffect(() => {
    const loadUsers = async () => {
      try {
        const [data, error] = await getAllUsers();
        if (error) {
          setError(error);
        } else if (data) {
          setUsers(data);
        }
      } catch (err) {
        setError(err);
      }
    };
    
    loadUsers();
  }, []);

  // Modal handlers
  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);

  // Show error state if there's an error
  if (error) {
    return <ErrorState />;
  }

  return (
    <div className="h-full flex items-center justify-center p-4 sm:p-6 lg:p-8">
      <div className="w-full max-w-4xl">
        <Card>
          <CardHeader className="text-center">
            <CardTitle className="flex items-center justify-center space-x-2">
              <Users className="w-6 h-6" />
              <span>All Users</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="p-6">
            {/* Users Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-h-[60vh] overflow-y-auto">
              {users.map((user) => (
                <UserCard key={user.id} user={user} />
              ))}
            </div>
            
            {/* Call to Action */}
            <div className="mt-6 text-center">
              <Button 
                variant="outline" 
                size="sm"
                onClick={handleOpenModal}
                className="flex items-center space-x-2 mx-auto"
              >
                <Info className="w-4 h-4" />
                <span>About User Profiles</span>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
      
      {/* Information Modal */}
      <Modal 
        isOpen={isModalOpen} 
        onClose={handleCloseModal}
        title={MODAL_CONTENT.title}
      >
        <div className="space-y-4">
          <p className="text-sm text-muted-foreground leading-relaxed">
            {MODAL_CONTENT.description}
          </p>
          
          <div className="space-y-3">
            {MODAL_CONTENT.features.map((feature, index) => (
              <ModalFeature key={index} {...feature} />
            ))}
          </div>
        </div>
      </Modal>
    </div>
  );
}
