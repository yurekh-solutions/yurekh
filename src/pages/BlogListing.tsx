import { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Calendar, ArrowRight, Search, ChevronDown } from "lucide-react";
import { blogPosts } from "../components/BlogSection";
import heroBg from "../assets/hero-bg.jpg";

const categories = [
  "All",
  "App Development",
  "Artificial Intelligence",
  "Software Development",
];

const POSTS_PER_PAGE = 6;

const BlogListing = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");
  const [currentPage, setCurrentPage] = useState(1);
  const [showCategoryDropdown, setShowCategoryDropdown] = useState(false);

  const filteredPosts = useMemo(() => {
    return blogPosts.filter((post) => {
      const matchesSearch =
        searchQuery === "" ||
        post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.description.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesCategory =
        activeCategory === "All" || post.category === activeCategory;
      return matchesSearch && matchesCategory;
    });
  }, [searchQuery, activeCategory]);

  const totalPages = Math.ceil(filteredPosts.length / POSTS_PER_PAGE);
  const paginatedPosts = filteredPosts.slice(
    (currentPage - 1) * POSTS_PER_PAGE,
    currentPage * POSTS_PER_PAGE
  );

  const handleCategoryChange = (cat: string) => {
    setActiveCategory(cat);
    setCurrentPage(1);
    setShowCategoryDropdown(false);
  };

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
    setCurrentPage(1);
  };

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div
      className="min-h-screen"
      style={{
        background: "linear-gradient(135deg, #000000 0%, #0a1a1a 40%, #0b1f1f 70%, #000000 100%)",
      }}
    >
      {/* Hero Section */}
      <div className="relative h-[350px] sm:h-[400px] md:h-[450px] overflow-hidden">
        <img
          src={heroBg}
          alt="Blogs Hero"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/70" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/80" />

        <div className="relative z-10 h-full flex items-center px-4 sm:px-6 md:px-8">
          <div className="max-w-7xl mx-auto w-full">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-[32px] sm:text-[40px] md:text-[48px] font-bold text-white leading-[1.15] mb-3 sm:mb-5">
                Blogs
              </h1>
              <p className="text-[13px] sm:text-[14px] md:text-[15px] text-white/70 max-w-2xl leading-[1.7] mb-5 sm:mb-7">
                Explore Yurekh Solutions insights on software, cloud, cybersecurity, and digital transformation. Get practical guidance, trends, and research to help your business grow.
              </p>
              <Link
                to="/bookingform"
                className="inline-flex items-center gap-2 px-6 sm:px-8 py-3 sm:py-3.5 rounded-full text-[14px] sm:text-[16px] font-semibold transition-all duration-300 bg-white text-black hover:bg-[#1BE1D3] hover:shadow-[0_0_30px_rgba(27,225,211,0.4)]"
              >
                Consult Our Experts
              </Link>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Filters Section */}
      <div className="px-4 sm:px-6 md:px-8 py-8 sm:py-10">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mb-8 sm:mb-10">
            {/* Search */}
            <div className="relative w-full sm:w-auto sm:flex-1 max-w-sm">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-500" />
              <input
                type="text"
                placeholder="Search by Name"
                value={searchQuery}
                onChange={handleSearchChange}
                className="w-full pl-10 pr-4 py-2.5 sm:py-3 rounded-full bg-white/5 border border-white/10 text-white text-[14px] placeholder:text-gray-500 focus:outline-none focus:border-[#1BE1D3]/50 transition-colors"
              />
            </div>

            {/* Category Tabs */}
            <div className="flex flex-wrap items-center gap-2 sm:gap-3">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => handleCategoryChange(cat)}
                  className={`px-4 sm:px-5 py-2 sm:py-2.5 rounded-full text-[13px] sm:text-[14px] font-medium transition-all duration-300 whitespace-nowrap ${
                    activeCategory === cat
                      ? "bg-[#1BE1D3] text-black shadow-[0_0_20px_rgba(27,225,211,0.3)]"
                      : "bg-white/5 text-white/80 border border-white/10 hover:border-[#1BE1D3]/30 hover:text-white"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Category Dropdown (mobile) */}
            <div className="relative sm:hidden">
              <button
                onClick={() => setShowCategoryDropdown(!showCategoryDropdown)}
                className="flex items-center gap-2 px-4 py-2.5 rounded-full bg-white/5 border border-white/10 text-white text-[14px]"
              >
                Category
                <ChevronDown className="h-4 w-4" />
              </button>
              {showCategoryDropdown && (
                <div className="absolute top-full mt-2 left-0 w-48 rounded-xl bg-[#0a1a1a] border border-white/10 shadow-xl z-50 overflow-hidden">
                  {categories.map((cat) => (
                    <button
                      key={cat}
                      onClick={() => handleCategoryChange(cat)}
                      className={`w-full text-left px-4 py-3 text-[14px] transition-colors ${
                        activeCategory === cat
                          ? "bg-[#1BE1D3]/20 text-[#1BE1D3]"
                          : "text-white/80 hover:bg-white/5"
                      }`}
                    >
                      {cat}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Recent Blogs Heading */}
          <h2 className="text-[20px] sm:text-[24px] md:text-[28px] font-semibold text-white mb-5 sm:mb-7">
            Recent Blogs
          </h2>

          {/* Blog Grid */}
          {paginatedPosts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {paginatedPosts.map((post, idx) => (
                <motion.article
                  key={post.slug}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: idx * 0.05 }}
                  className="group rounded-[20px] sm:rounded-[24px] overflow-hidden bg-gradient-to-b from-white/[0.08] to-white/[0.02] border border-white/10 hover:border-[#1BE1D3]/30 transition-all duration-300 hover:shadow-[0_20px_50px_rgba(27,225,211,0.15)]"
                >
                  <Link to={`/blogs/${post.slug}`}>
                    {/* Image */}
                    <div className="relative w-full h-[200px] sm:h-[220px] md:h-[240px] overflow-hidden">
                      <img
                        src={post.image}
                        alt={post.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                    </div>

                    {/* Content */}
                    <div className="p-4 sm:p-5 md:p-6 flex flex-col gap-3">
                      <div className="flex items-center gap-2 text-gray-500 text-[12px] sm:text-[13px]">
                        <Calendar className="h-3.5 w-3.5 text-[#1BE1D3]" />
                        <span>{post.date}</span>
                      </div>
                      <h3 className="text-[15px] sm:text-[16px] md:text-[17px] font-medium text-white leading-[1.45] group-hover:text-[#1BE1D3] transition-colors duration-300 line-clamp-2">
                        {post.title}
                      </h3>
                      <p className="text-[12px] sm:text-[13px] font-normal text-gray-400 leading-[1.7] line-clamp-3">
                        {post.description}
                      </p>
                      <div className="flex items-center gap-1.5 mt-1">
                        <span className="text-[13px] sm:text-[14px] font-medium text-[#1BE1D3] group-hover:text-white transition-colors duration-300 flex items-center gap-1.5">
                          Read More{" "}
                          <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
                        </span>
                      </div>
                    </div>
                  </Link>
                </motion.article>
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <p className="text-white/60 text-[16px]">
                No blogs found matching your criteria.
              </p>
            </div>
          )}

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="flex items-center justify-center gap-2 mt-12">
              {currentPage > 1 && (
                <button
                  onClick={() => handlePageChange(currentPage - 1)}
                  className="px-4 py-2 rounded-lg text-[14px] font-medium text-white/80 bg-white/5 border border-white/10 hover:border-[#1BE1D3]/30 transition-colors"
                >
                  Previous
                </button>
              )}

              {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => {
                // Show first, last, current, and pages around current
                if (
                  page === 1 ||
                  page === totalPages ||
                  (page >= currentPage - 1 && page <= currentPage + 1)
                ) {
                  return (
                    <button
                      key={page}
                      onClick={() => handlePageChange(page)}
                      className={`w-10 h-10 rounded-lg text-[14px] font-medium transition-all duration-300 ${
                        page === currentPage
                          ? "bg-[#1BE1D3] text-black shadow-[0_0_15px_rgba(27,225,211,0.3)]"
                          : "text-white/80 bg-white/5 border border-white/10 hover:border-[#1BE1D3]/30"
                      }`}
                    >
                      {page}
                    </button>
                  );
                } else if (
                  page === currentPage - 2 ||
                  page === currentPage + 2
                ) {
                  return (
                    <span
                      key={page}
                      className="w-10 h-10 flex items-center justify-center text-white/40 text-[14px]"
                    >
                      ...
                    </span>
                  );
                }
                return null;
              })}

              {currentPage < totalPages && (
                <button
                  onClick={() => handlePageChange(currentPage + 1)}
                  className="px-4 py-2 rounded-lg text-[14px] font-medium text-white/80 bg-white/5 border border-white/10 hover:border-[#1BE1D3]/30 transition-colors"
                >
                  Next
                </button>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default BlogListing;
