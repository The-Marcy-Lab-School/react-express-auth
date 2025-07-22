import { CreditCard, Info } from 'lucide-react';
import { useState } from 'react';

// Component imports
import { Modal } from '../components/ui/modal';
import { Button } from '../components/ui/button';

// Constants
const FEATURE_ITEMS = [
  { text: 'Smart Matching', dotColor: 'bg-black' },
  { text: 'Secure & Private', dotColor: 'bg-black' },
];

const MODAL_CONTENT = {
  title: 'About CardFinder',
  description: 'CardFinder is your trusted partner in finding the perfect credit card that matches your lifestyle and financial goals.',
  features: [
    {
      title: 'Smart Matching',
      description: 'Our advanced algorithm analyzes your spending patterns, credit score, and preferences to recommend cards that offer the best rewards and benefits for your specific needs.'
    },
    {
      title: 'Secure & Private',
      description: 'Your financial information is protected with bank-level encryption. We never store sensitive data and always prioritize your privacy and security.'
    },
    {
      title: 'No Hidden Fees',
      description: 'We believe in complete transparency. All fees, rates, and terms are clearly displayed upfront, so you know exactly what you\'re getting.'
    },
    {
      title: 'Expert Support',
      description: 'Our team of financial experts is here to help you make informed decisions about your credit card choices.'
    }
  ]
};

// Component for feature item with dot
const FeatureItem = ({ text, dotColor }) => (
  <div className="flex items-center space-x-2">
    <div className={`w-2 h-2 ${dotColor} rounded-full`} />
    <span className="text-sm underline">{text}</span>
  </div>
);

// Component for modal feature section
const ModalFeature = ({ title, description }) => (
  <div>
    <h3 className="font-semibold text-sm">{title}</h3>
    <p className="text-sm text-muted-foreground">{description}</p>
  </div>
);

export default function HomePage() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);

  return (
    <div className="h-full flex items-center justify-center bg-background p-4 sm:p-6 lg:p-8">
      <div className="relative w-full max-w-6xl mx-auto">
        {/* Background Text Elements */}
        <div className="absolute left-0 top-1/2 transform -translate-y-1/2">
          <h1 className="text-8xl md:text-9xl font-black text-black leading-none tracking-tight">
            CREDIT
          </h1>
        </div>

        <div className="absolute right-0 top-1/2 transform -translate-y-1/2">
          <div className="writing-mode-vertical-rl transform rotate-180">
            <span className="text-8xl md:text-9xl font-black text-black leading-none tracking-tight">
              CARDS
            </span>
          </div>
        </div>

        {/* Main Content */}
        <div className="relative z-10 text-center max-w-2xl mx-auto flex flex-col items-center">
          {/* Hero Icon */}
          <div className="mb-8">
            <div className="w-32 h-32 mx-auto bg-black rounded-full flex items-center justify-center">
              <CreditCard className="w-16 h-16 text-background" />
            </div>
          </div>

          {/* Description Card */}
          <div className="mb-8 w-full">
            <div className="bg-white/30 backdrop-blur-sm rounded-lg p-4 shadow-sm">
              <p className="text-lg text-gray-800 leading-relaxed">
                Find the perfect credit card that suits your life.<br />
                No hidden fees. No complicated terms.
              </p>
            </div>
          </div>

          {/* Feature List */}
          <div className="text-left max-w-xs mx-auto space-y-2">
            {FEATURE_ITEMS.map((item, index) => (
              <FeatureItem key={index} {...item} />
            ))}
          </div>
          
          {/* Call to Action */}
          <div className="mt-6">
            <Button 
              variant="outline" 
              size="sm"
              onClick={handleOpenModal}
              className="flex items-center space-x-2"
            >
              <Info className="w-4 h-4" />
              <span>Learn More</span>
            </Button>
          </div>
        </div>
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
