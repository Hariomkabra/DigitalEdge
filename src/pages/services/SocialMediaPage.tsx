import React, { useEffect } from 'react';
import ServiceLayout from '../../components/ServiceLayout';
import { Link } from '../../components/ui/Link';
import { Instagram, Facebook, Twitter, Linkedin } from 'lucide-react';

const SocialMediaPage: React.FC = () => {
  useEffect(() => {
    document.title = 'Social Media Services | Creative Click Media';
  }, []);

  return (
    <ServiceLayout>
      <div>Social Media Service Page Content</div>
    </ServiceLayout>
  );
};

export default SocialMediaPage;