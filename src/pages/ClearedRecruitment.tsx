// Simple Icon Flip Card Component - NO SCROLL
const IconFlipCard = ({ 
  icon: Icon, 
  title, 
  description,
  backContent,
  gradient = "from-accent to-secondary"
}: { 
  icon: any;
  title: string;
  description?: string;
  backContent?: string;
  gradient?: string;
}) => {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div 
      className="relative h-[200px] perspective-1000"
      onMouseEnter={() => setIsFlipped(true)}
      onMouseLeave={() => setIsFlipped(false)}
    >
      <div 
        className={`relative w-full h-full transition-transform duration-700 transform-style-3d ${
          isFlipped ? 'rotate-y-180' : ''
        }`}
      >
        {/* Front Side */}
        <div className="absolute inset-0 backface-hidden">
          <div className="h-full w-full p-6 rounded-2xl border border-glass-border bg-glass/50 backdrop-blur-sm shadow-lg text-center flex flex-col items-center justify-center">
            <Icon className="w-12 h-12 mb-4 text-accent flex-shrink-0" />
            <h3 className="text-lg font-bold">{title}</h3>
          </div>
        </div>

        {/* Back Side */}
        <div className="absolute inset-0 backface-hidden rotate-y-180">
          <div className={`h-full w-full p-5 rounded-2xl bg-gradient-to-br ${gradient} shadow-lg flex flex-col justify-center items-center text-center overflow-hidden`}>
            <Icon className="w-10 h-10 mb-2 text-background flex-shrink-0" />
            <h3 className="text-sm font-bold mb-2 text-background flex-shrink-0">{title}</h3>
            <p className="text-background/90 text-xs leading-tight line-clamp-4">
              {backContent || description || "Learn more about our services"}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

// Process Step Flip Card - NO SCROLL
const ProcessFlipCard = ({ 
  icon: Icon, 
  title, 
  description,
  backContent,
  iconColor = "text-accent"
}: { 
  icon: any;
  title: string;
  description: string;
  backContent?: string;
  iconColor?: string;
}) => {
  const [isFlipped, setIsFlipped] = useState(false);

  // Map icon color to gradient
  const getGradient = () => {
    if (iconColor.includes('accent')) return 'from-accent to-accent-glow';
    if (iconColor.includes('secondary')) return 'from-secondary to-coral';
    if (iconColor.includes('coral')) return 'from-coral to-accent';
    return 'from-accent-glow to-secondary';
  };

  return (
    <div 
      className="relative h-[280px] perspective-1000"
      onMouseEnter={() => setIsFlipped(true)}
      onMouseLeave={() => setIsFlipped(false)}
    >
      <div 
        className={`relative w-full h-full transition-transform duration-700 transform-style-3d ${
          isFlipped ? 'rotate-y-180' : ''
        }`}
      >
        {/* Front Side */}
        <div className="absolute inset-0 backface-hidden">
          <div className="h-full w-full p-8 rounded-2xl border border-glass-border bg-glass/50 backdrop-blur-sm shadow-lg flex flex-col">
            <Icon className={`w-16 h-16 mb-6 flex-shrink-0 ${iconColor}`} />
            <h3 className="text-xl font-bold mb-3 flex-shrink-0">{title}</h3>
            <p className="text-sm text-muted-foreground line-clamp-3">{description}</p>
          </div>
        </div>

        {/* Back Side */}
        <div className="absolute inset-0 backface-hidden rotate-y-180">
          <div className={`h-full w-full p-6 rounded-2xl bg-gradient-to-br ${getGradient()} shadow-lg flex flex-col justify-center items-center text-center overflow-hidden`}>
            <Icon className="w-12 h-12 mb-3 text-background flex-shrink-0" />
            <h3 className="text-base font-bold mb-3 text-background flex-shrink-0">{title}</h3>
            <p className="text-background/90 text-xs leading-tight line-clamp-6">
              {backContent || description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

// Role Flip Card - NO SCROLL
const RoleFlipCard = ({ 
  role,
  backContent
}: { 
  role: string;
  backContent?: string;
}) => {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div 
      className="relative h-[100px] perspective-1000"
      onMouseEnter={() => setIsFlipped(true)}
      onMouseLeave={() => setIsFlipped(false)}
    >
      <div 
        className={`relative w-full h-full transition-transform duration-700 transform-style-3d ${
          isFlipped ? 'rotate-y-180' : ''
        }`}
      >
        {/* Front Side */}
        <div className="absolute inset-0 backface-hidden">
          <div className="h-full w-full p-6 rounded-2xl border border-glass-border bg-glass/50 backdrop-blur-sm shadow-lg flex items-center space-x-4">
            <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-accent to-accent-glow flex items-center justify-center flex-shrink-0">
              <CheckCircle size={24} className="text-background" />
            </div>
            <span className="text-lg font-semibold truncate">{role}</span>
          </div>
        </div>

        {/* Back Side */}
        <div className="absolute inset-0 backface-hidden rotate-y-180">
          <div className="h-full w-full p-5 rounded-2xl bg-gradient-to-br from-secondary to-coral shadow-lg flex items-center justify-center text-center overflow-hidden">
            <p className="text-background font-medium text-sm line-clamp-3 px-2">
              {backContent || `Specialized ${role.toLowerCase()} recruitment`}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
