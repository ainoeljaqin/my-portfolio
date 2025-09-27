import React from 'react';
import { Calendar, Tag } from 'lucide-react';
import { blogPosts } from '../data/mockData';

const BlogCard = ({ post }) => {
  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  return (
    <article className="group bg-dark-grey/10 rounded-lg overflow-hidden border border-dark-grey/30 hover:border-teal-accent/50 transition-all duration-300 hover:transform hover:scale-105">
      <div className="p-6">
        <div className="flex items-center gap-2 text-grey text-sm font-mono mb-4">
          <Calendar size={16} />
          <time dateTime={post.date}>{formatDate(post.date)}</time>
        </div>
        
        <h2 className="text-xl font-semibold text-white mb-3 group-hover:text-teal-accent transition-colors cursor-pointer">
          {post.title}
        </h2>
        
        <p className="text-grey text-sm leading-relaxed mb-6">
          {post.summary}
        </p>
        
        <div className="flex items-center justify-between">
          <div className="flex flex-wrap gap-2">
            {post.tags.map((tag, index) => (
              <span 
                key={index}
                className="flex items-center gap-1 px-3 py-1 text-xs font-mono uppercase tracking-wider bg-teal-accent/10 text-teal-accent border border-teal-accent/30 rounded-full"
              >
                <Tag size={12} />
                {tag}
              </span>
            ))}
          </div>
        </div>
        
        <button className="mt-6 text-teal-accent font-mono text-sm uppercase tracking-wider hover:text-white transition-colors">
          Read More →
        </button>
      </div>
    </article>
  );
};

const Blog = () => {
  return (
    <div className="min-h-screen bg-black text-white pt-24">
      <div className="container mx-auto px-6 py-12">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="font-display font-bold text-4xl md:text-6xl mb-6 bg-gradient-to-r from-white via-teal-accent to-white bg-clip-text text-transparent">
            Blog & Publications
          </h1>
          <p className="text-grey text-lg max-w-2xl mx-auto">
            Sharing insights on backend development, game programming, research findings, and personal reflections.
          </p>
        </div>
        
        {/* Blog Posts Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-1 gap-8 max-w-4xl mx-auto">
          {blogPosts.map((post) => (
            <BlogCard key={post.id} post={post} />
          ))}
        </div>
        
        {/* Coming Soon Section */}
        <div className="text-center mt-16 py-12 border-t border-dark-grey/30">
          <h2 className="text-2xl font-semibold text-white mb-4">More Articles Coming Soon</h2>
          <p className="text-grey">
            I regularly write about technical challenges, research findings, and development insights. 
            Stay tuned for more in-depth articles!
          </p>
        </div>
      </div>
    </div>
  );
};

export default Blog;