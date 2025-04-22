import React, { useEffect } from 'react';
import ServiceLayout from '../../components/ServiceLayout';
import { Link } from '../../components/ui/Link';
import { LineChart, PieChart, BarChart, TrendingUp } from 'lucide-react';

const AnalyticsPage: React.FC = () => {
  useEffect(() => {
    document.title = 'Analytics Services | Creative Click Media';
  }, []);

  return (
    <ServiceLayout>
      <div>Analytics Service Page Content</div>
    </ServiceLayout>
  );
};

export default AnalyticsPage;