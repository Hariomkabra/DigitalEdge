import React from 'react';
import { Link } from './ui/Link';
import { Calendar, Clock, ChevronRight } from 'lucide-react';

const Blog: React.FC = () => {
  const blogPosts = [
    {
      id: 1,
      title: "5 SEO Trends to Watch in 2025",
      excerpt: "Discover the latest SEO strategies that will dominate the digital landscape in 2025 and how to implement them for your business.",
      image: "https://images.pexels.com/photos/7688336/pexels-photo-7688336.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      date: "May 15, 2025",
      readTime: "5 min read",
      category: "SEO",
      link: "/insights/seo-trends-2025",
    },
    {
      id: 2,
      title: "How AI is Revolutionizing Digital Marketing",
      excerpt: "Explore how artificial intelligence is transforming digital marketing strategies and creating new opportunities for businesses.",
      image: "https://images.pexels.com/photos/8386434/pexels-photo-8386434.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      date: "May 8, 2025",
      readTime: "7 min read",
      category: "Technology",
      link: "/insights/ai-digital-marketing",
    },
    {
      id: 3,
      title: "The Ultimate Guide to Social Media Marketing in 2025",
      excerpt: "Master the art of social media marketing with our comprehensive guide to the latest platforms, algorithms, and engagement strategies.",
      image: "https://images.pexels.com/photos/3850213/pexels-photo-3850213.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      date: "April 29, 2025",
      readTime: "8 min read",
      category: "Social Media",
      link: "/insights/social-media-guide-2025",
    },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">Insights & Strategy Tips</h2>
            <p className="text-lg text-gray-600 max-w-2xl">
              Expert insights, industry trends, and actionable advice to elevate your digital marketing.
            </p>
          </div>
          <Link
            href="/insights"
            className="mt-4 md:mt-0 inline-flex items-center text-blue-600 font-medium hover:text-blue-800 transition-colors"
          >
            View All Articles
            <ChevronRight size={16} className="ml-1" />
          </Link>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <article 
              key={post.id}
              className="bg-white rounded-lg overflow-hidden shadow-md transition-all hover:shadow-lg hover:-translate-y-1"
            >
              <Link href={post.link} className="block">
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={post.image} 
                    alt={post.title} 
                    className="w-full h-full object-cover transition-transform hover:scale-105"
                  />
                  <div className="absolute top-4 left-4 bg-blue-600 text-white text-xs font-medium py-1 px-2 rounded">
                    {post.category}
                  </div>
                </div>
              </Link>
              
              <div className="p-6">
                <div className="flex text-gray-500 text-sm mb-3">
                  <span className="flex items-center mr-4">
                    <Calendar size={14} className="mr-1" />
                    {post.date}
                  </span>
                  <span className="flex items-center">
                    <Clock size={14} className="mr-1" />
                    {post.readTime}
                  </span>
                </div>
                
                <Link href={post.link}>
                  <h3 className="text-xl font-bold text-gray-900 mb-3 hover:text-blue-600 transition-colors">
                    {post.title}
                  </h3>
                </Link>
                
                <p className="text-gray-600 mb-4 line-clamp-3">
                  {post.excerpt}
                </p>
                
                <Link
                  href={post.link}
                  className="inline-flex items-center text-blue-600 font-medium hover:text-blue-800 transition-colors"
                >
                  Read More
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                  </svg>
                </Link>
              </div>
            </article>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <Link
            href="/subscribe"
            className="bg-gray-800 hover:bg-gray-900 text-white font-medium px-6 py-3 rounded-md inline-block transition-colors"
          >
            Subscribe to Our Newsletter
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Blog;