interface GlassmorphicContainerProps {
    children: React.ReactNode;
    className?: string;
}
export default function GlassmorphicContainer({children, className}: GlassmorphicContainerProps) {
    return (
       <div className={`relative overflow-hidden border-[1px] border-[#413F54] ${className}`}
        style={{
          background: 'linear-gradient(169.44deg, rgba(58, 58, 58, 0.4) 1.85%, rgba(33, 33, 33, 0.26) 98.72%)',
          backdropFilter: 'blur(20px)',
          WebkitBackdropFilter: 'blur(20px)',
          boxShadow: '0 4px 24px -1px rgba(0, 0, 0, 0.25)',
        }}
      >
        <div 
          className="absolute inset-0 rounded-3xl"
          style={{
            background: 'linear-gradient(169.44deg, rgba(255, 255, 255, 0.05) -5.07%, rgba(255, 255, 255, 0) 108.35%)',
          }}
        />
        
        <div className="relative z-10">
          {children}
        </div>
      </div>
    )
  }