import React, { useEffect } from 'react';
import ServiceLayout from '../../components/ServiceLayout';
import { Link } from '../../components/ui/Link';
import { Target, TrendingUp, DollarSign, PieChart } from 'lucide-react';

const PPCPage: React.FC = () => {
  useEffect(() => {
    document.title = 'PPC Services | Creative Click Media';
  }, []);

  return (
    <ServiceLayout>
      <div>PPC Service Page Content</div>
    </ServiceLayout>
  );
};

export default PPCPage;