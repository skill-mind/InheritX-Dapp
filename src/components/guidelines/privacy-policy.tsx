import React from 'react'
import GlassmorphicContainer from '../ui/GlassmorphicContainer'

interface DataGroupProps {
  title: string;
  subtitle?: string;
  items: string[];
}

const DataGroup = ({ title, subtitle, items }) => (
  <div>
    <h3 className="text-white font-bold text-lg sm:text-xl md:text-2xl lg:text-3xl mb-2 transition-all duration-300">
      {title}
    </h3>
    {subtitle && <p className="text-white font-normal text-sm sm:text-base md:text-lg lg:text-xl mb-2">{subtitle}</p>}
    <ul className="space-y-1">
      {items.map((item, index) => (
        <li key={index} className="text-white font-normal text-sm sm:text-base md:text-lg lg:text-xl flex items-center">
          <span className="mr-2">•</span>
          {item}
        </li>
      ))}
    </ul>
  </div>
);

function PrivacyPolicy() {
  return (
    <section className='w-full px-4 sm:px-6 md:px-10 lg:px-16'>
      <p className='font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-center'>Privacy Policy</p>
      
      <GlassmorphicContainer className='w-full rounded-3xl mt-4 py-8 sm:py-10 md:py-12 px-4 sm:px-6 md:px-10 lg:px-16'>
        <h2 className='text-lg sm:text-xl md:text-2xl lg:text-3xl text-white font-bold mb-2'>
          1. Data Collection and Usage
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mb-4">
          <DataGroup title="Personal Information" subtitle="We collect:" items={[
            'Legal name and contact information',
            'Government-issued identification',
            'Blockchain wallet addresses',
            'Authentication credentials',
            'Communication preferences']}/>
          
          <DataGroup title="Usage Data" subtitle="We monitor:" items={[
            'Platform interaction patterns',
            'Security event logs',
            'Transaction history', 
            'Access locations and times',
            'Feature utilization metrics']}/>
          
          <DataGroup title="Technical Data" subtitle="We record:" items={[
            'Device information',
            'IP addresses',
            'Browser type and version',
            'Network information',
            'System logs']}/>
        </div>

        <div className='w-full border-t border-[#413F54] my-4' />
        
        <h2 className='text-lg sm:text-xl md:text-2xl lg:text-3xl text-white font-bold mb-2'>
          2. Data Protection
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mb-4">
          <DataGroup title="Security Measures" items={[
            'End-to-end encryption for all sensitive data',
            'Regular security audits and penetration testing',
            'Zero-knowledge proof implementation',
            'Secure key management systems',
            'Regular backup and recovery testing']}/>
          
          <DataGroup title="Storage and Retention" items={[
            'Encrypted storage on distributed systems',
            'Regular data minimization reviews',
            'Compliance with retention regulations', 
            'Secure data destruction protocols',
            'Backup maintenance procedures']}/>
        </div>

        <div className='w-full border-t border-[#413F54] my-4' />
        
        <h2 className='text-lg sm:text-xl md:text-2xl lg:text-3xl text-white font-bold'>
          3. User Rights and Controls
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mb-4">
          <DataGroup title="Access Rights" subtitle="Users can:" items={[
            'Request data copies',
            'Correct personal information',
            'Delete account data',
            'Export transaction history',
            'Review security logs']}/>
          
          <DataGroup title="Privacy Control" subtitle="Users manage:" items={[
            'Visibility settings',
            'Security event logs',
            'Communication preferences', 
            'Data sharing options',
            'Authentication methods',
            'Activity notifications']}/>
        </div>

        <div className='w-full border-t border-[#413F54] my-4' />
        
        <h2 className='text-lg sm:text-xl md:text-2xl lg:text-3xl text-white font-bold'>
          4. Third-Party Sharing
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mb-4">
          <DataGroup title="Service Providers" subtitle="Limited sharing with:" items={[
            'Identity verification services',
            'Security audit firms',
            'Legal compliance partners',
            'Technical infrastructure providers',
            'Customer support systems']}/>
          
          <DataGroup title="Legal Requirements" subtitle="Data shared for:" items={[
            'Regulatory compliance',
            'Legal proceedings',
            'Law enforcement requests', 
            'Court orders',
            'Fraud prevention']}/>
        </div>
      </GlassmorphicContainer>
    </section>
  );
}

export default PrivacyPolicy;