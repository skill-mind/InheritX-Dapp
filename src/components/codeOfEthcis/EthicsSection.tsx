 // components/CodeOfEthics/EthicsSection.tsx
  import React from 'react';
  
  interface EthicsItem {
    title: string;
    points: string[];
    sub:string;
  }

  interface EthicsSection {
    id: number;
    title: string;
    subsections: {
      left: EthicsItem;
      right: EthicsItem;
      left2: EthicsItem;
      right2: EthicsItem;
    };
  }

  interface EthicsSectionProps {
    section: EthicsSection;
  }
  
  const EthicsSection: React.FC<EthicsSectionProps> = ({ section }) => {
    return (
      <div className="mb-12">
        <h2 className="text-3xl font-semibold mb-6 text-white">
          {section.id}. {section.title}
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
            {/* first */}
          <div>
          <h2 className="text-2xl font-semibold mb-4 text-white">{section.subsections.left.title}</h2>
          <h4 className='text-base font-medium mb-3 text-white'>{section.subsections.left.sub}</h4>
            <ul className="space-y-2">
              {section.subsections.left.points.map((point, index) => (
                <li key={index} className="text-gray-300 text-sm">
                  • {point}
                </li>
              ))}
            </ul>
          </div>
          {/* second  */}
          <div>
            <h2 className="text-2xl font-semibold mb-4 text-white">{section.subsections.right.title}</h2>
            <h4 className='text-base font-medium mb-3 text-white'>{section.subsections.right.sub}</h4>
            <ul className="space-y-2">
              {section.subsections.right.points.map((point, index) => (
                <li key={index} className="text-gray-300 text-sm">
                  • {point}
                </li>
              ))}
            </ul>
          </div>

          {/* third */}
          <div>
          <h2 className="text-2xl font-semibold mb-4 text-white">{section.subsections.left2.title}</h2>
          <h4 className='text-base font-medium mb-3 text-white'>{section.subsections.left2.sub}</h4>
            <ul className="space-y-2">
              {section.subsections.left2.points.map((point, index) => (
                <li key={index} className="text-gray-300 text-sm">
                  • {point}
                </li>
              ))}
            </ul>
          </div>

            {/* Four */}
            <div>
            <h2 className="text-2xl font-semibold mb-4 text-white">{section.subsections.right2.title}</h2>
            <h4 className='text-base font-medium mb-3 text-white'>{section.subsections.right2.sub}</h4>
            <ul className="space-y-2">
              {section.subsections.right2.points.map((point, index) => (
                <li key={index} className="text-gray-300 text-sm">
                  • {point}
                </li>
              ))}
            </ul>
          </div>
          
        </div>
      </div>
    );
  };


  export default EthicsSection;