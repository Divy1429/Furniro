import React from 'react'
import blog1 from '../../assets/blog1.png'
import blog2 from '../../assets/blog2.png'
import blog3 from '../../assets/blog3.png'
import b1 from '../../assets/b1.png'
import b2 from '../../assets/b2.png'
import b3 from '../../assets/b3.png'
import b4 from '../../assets/b4.png'
import b5 from '../../assets/b5.png'

const BlogDetails = () => {
  // Blog posts data
  const blogPosts = [
    {
      id: 1,
      title: "Going all-in with millennial design",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mus mauris vitae ultricies leo integer malesuada nunc. In nulla posuere sollicitudin aliquam ultrices. Morbi blandit cursus risus at ultrices mi tempus imperdiet. Libero enim sed faucibus turpis in. Cursus mattis molestie a iaculis at erat. Nibh cras pulvinar mattis nunc sed blandit libero. Pellentesque elit ullamcorper dignissim cras tincidunt. Pharetra et ultrices neque ornare aenean euismod elementum.",
      image: blog1,
      author: "Admin",
      date: "14 oct 2022",
      category: "Wood"
    },
    {
      id: 2,
      title: "Exploring new ways of decorating",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mus mauris vitae ultricies leo integer malesuada nunc. In nulla posuere sollicitudin aliquam ultrices. Morbi blandit cursus risus at ultrices mi tempus imperdiet. Libero enim sed faucibus turpis in. Cursus mattis molestie a iaculis at erat. Nibh cras pulvinar mattis nunc sed blandit libero. Pellentesque elit ullamcorper dignissim cras tincidunt. Pharetra et ultrices neque ornare aenean euismod elementum.",
      image: blog2,
      author: "Admin",
      date: "14 oct 2022",
      category: "Handmade"
    },
    {
      id: 3,
      title: "Handmade pieces that took time to make",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mus mauris vitae ultricies leo integer malesuada nunc. In nulla posuere sollicitudin aliquam ultrices. Morbi blandit cursus risus at ultrices mi tempus imperdiet. Libero enim sed faucibus turpis in. Cursus mattis molestie a iaculis at erat. Nibh cras pulvinar mattis nunc sed blandit libero. Pellentesque elit ullamcorper dignissim cras tincidunt. Pharetra et ultrices neque ornare aenean euismod elementum.",
      image: blog3,
      author: "Admin",
      date: "14 oct 2022",
      category: "Wood"
    }
  ];

  // Categories data
  const categories = [
    { name: "Crafts", count: 2 },
    { name: "Design", count: 8 },
    { name: "Handmade", count: 7 },
    { name: "Interior", count: 1 },
    { name: "Wood", count: 4 }
  ];

  // Recent posts data
  const recentPosts = [
    { title: "Going all-in with millennial design", date: "03 Aug 2022", image: b1 },
    { title: "Exploring new ways of decorating", date: "03 Aug 2022", image: b2 },
    { title: "Handmade pieces that took time to make", date: "03 Aug 2022", image: b3 },
    { title: "Modern home in Milan", date: "03 Aug 2022", image: b4 },
    { title: "Colorful office redesign", date: "03 Aug 2022", image: b5 }
  ];

  return (
    <div className="min-h-screen w-full overflow-x-hidden">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row justify-center gap-[30px] lg:gap-[50px] mt-[106px] lg:mt-[80px] w-full">
          
          {/* Main Content Area */}
          <main className="flex flex-col gap-[54px] w-full lg:max-w-[820px]">
            {blogPosts.map((post) => (
              <article key={post.id} className="flex flex-col w-full">
                {/* Blog Image */}
                <div className="w-full rounded-[10px] overflow-hidden mb-[17px]">
                  <img 
                    src={post.image} 
                    alt={post.title} 
                    className="w-full h-[300px] sm:h-[400px] lg:h-[500px] object-cover" 
                  />
                </div>

                {/* Post Meta Info */}
                <div className="flex flex-wrap items-center gap-[20px] sm:gap-[35px] mb-[20px]">
                  <div className="flex items-center gap-2">
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M9.99977 9.25C7.72977 9.25 7.26977 5.81 7.26977 5.81C6.99977 4.02 7.81977 2 9.96977 2C12.1298 2 12.9498 4.02 12.6798 5.81C12.6798 5.81 12.2698 9.25 9.99977 9.25ZM9.99977 11.82L12.7198 10C15.1098 10 17.2398 12.33 17.2398 14.53V17.02C17.2398 17.02 13.5898 18.15 9.99977 18.15C6.34977 18.15 2.75977 17.02 2.75977 17.02V14.53C2.75977 12.28 4.69977 10.05 7.22977 10.05L9.99977 11.82Z" fill="#9F9F9F"/>
                    </svg>
                    <span className="text-[16px] font-normal text-[#9F9F9F]">{post.author}</span>
                  </div>
                  
                  <div className="flex items-center gap-2">
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M1.66699 15.8333C1.66699 17.25 2.75033 18.3333 4.16699 18.3333H15.8337C17.2503 18.3333 18.3337 17.25 18.3337 15.8333V9.16663H1.66699V15.8333ZM15.8337 3.33329H14.167V2.49996C14.167 1.99996 13.8337 1.66663 13.3337 1.66663C12.8337 1.66663 12.5003 1.99996 12.5003 2.49996V3.33329H7.50033V2.49996C7.50033 1.99996 7.16699 1.66663 6.66699 1.66663C6.16699 1.66663 5.83366 1.99996 5.83366 2.49996V3.33329H4.16699C2.75033 3.33329 1.66699 4.41663 1.66699 5.83329V7.49996H18.3337V5.83329C18.3337 4.41663 17.2503 3.33329 15.8337 3.33329Z" fill="#9F9F9F"/>
                    </svg>
                    <span className="text-[16px] font-normal text-[#9F9F9F]">{post.date}</span>
                  </div>
                  
                  <div className="flex items-center gap-2">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12.8966 21.968C12.3666 21.97 11.8566 21.758 11.4826 21.382L3.64564 13.547C3.44131 13.3434 3.28363 13.0978 3.18349 12.8272C3.08335 12.5567 3.04314 12.2676 3.06564 11.98L3.56564 5.41401C3.60018 4.93599 3.80617 4.48652 4.1457 4.14827C4.48524 3.81002 4.93549 3.60574 5.41364 3.57301L11.9796 3.07301C12.0316 3.06201 12.0826 3.06201 12.1346 3.06201C12.6646 3.06201 13.1716 3.27201 13.5446 3.64801L21.3826 11.482C21.5684 11.6677 21.7158 11.8883 21.8164 12.131C21.917 12.3737 21.9687 12.6338 21.9687 12.8965C21.9687 13.1592 21.917 13.4194 21.8164 13.6621C21.7158 13.9048 21.5684 14.1253 21.3826 14.311L14.3106 21.382C14.1254 21.5683 13.905 21.716 13.6623 21.8166C13.4196 21.9172 13.1594 21.9687 12.8966 21.968ZM8.65364 6.65401C8.32475 6.65411 8.00096 6.73531 7.71094 6.89042C7.42093 7.04554 7.17364 7.26978 6.99099 7.54329C6.80834 7.8168 6.69596 8.13113 6.6638 8.45845C6.63164 8.78576 6.68069 9.11595 6.80662 9.41978C6.93255 9.72361 7.13146 9.99169 7.38574 10.2003C7.64002 10.4089 7.94181 10.5516 8.26439 10.6157C8.58698 10.6798 8.92039 10.6633 9.2351 10.5678C9.54982 10.4723 9.83611 10.3006 10.0686 10.068L10.0756 10.062L10.0826 10.055L10.0746 10.062C10.3526 9.78158 10.5414 9.42513 10.6171 9.03759C10.6928 8.65006 10.6522 8.24877 10.5002 7.88432C10.3482 7.51986 10.0918 7.20855 9.76318 6.98961C9.43457 6.77066 9.04851 6.65389 8.65364 6.65401Z" fill="#9F9F9F"/>
                    </svg>
                    <span className="text-[16px] font-normal text-[#9F9F9F]">{post.category}</span>
                  </div>
                </div>
                
                {/* Post Content */}
                <div className="flex flex-col gap-[12px] mb-[30px]">
                  <h2 className="text-[24px] sm:text-[28px] lg:text-[30px] font-medium leading-tight">
                    {post.title}
                  </h2>
                  <p className="text-[15px] font-normal text-[#9F9F9F] leading-relaxed">
                    {post.content}
                  </p>
                </div>
                
                {/* Read More Button */}
                <div>
                  <button className="text-[16px] font-normal underline cursor-pointer hover:no-underline transition-all">
                    Read more
                  </button>
                </div>
              </article>
            ))}
          </main>

          {/* Sidebar */}
          <aside className="flex flex-col w-full lg:max-w-[393px] lg:min-w-[350px]">
            
            {/* Search Section */}
            <div className="w-full flex flex-col items-center mb-[40px]">
              {/* Search Box - Made Responsive */}
              <div className="w-full max-w-[311px] h-[58px] relative mb-[40px]">
                <div className="w-full h-full border border-[#9F9F9F] rounded-[10px] bg-white flex items-center px-4">
                  <input 
                    type="text" 
                    placeholder="Search..." 
                    className="flex-1 outline-none text-[16px]"
                  />
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" className="cursor-pointer">
                    <path d="M18 18L13.514 13.506M16 8.5C16 12.0899 13.0899 15 9.5 15C5.91015 15 3 12.0899 3 8.5C3 4.91015 5.91015 2 9.5 2C13.0899 2 16 4.91015 16 8.5V8.5Z" stroke="black" strokeWidth="2" strokeLinecap="round"/>
                  </svg>
                </div>
              </div>
              
              {/* Categories Section */}
              <div className="w-full max-w-[311px]">
                <h3 className="text-[24px] font-medium mb-[33px]">Categories</h3>
                <div className="flex flex-col gap-[20px]">
                  {categories.map((category, index) => (
                    <div key={index} className="flex justify-between items-center cursor-pointer hover:text-gray-600 transition-colors py-2">
                      <span className="text-[16px] font-normal text-[#9F9F9F]">{category.name}</span>
                      <span className="text-[16px] font-normal text-[#9F9F9F]">{category.count}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            
            {/* Recent Posts Section */}
            <div className="w-full max-w-[311px] mx-auto">
              <h3 className="text-[24px] font-medium mb-[26px]">Recent Posts</h3>
              <div className="flex flex-col gap-[20px]">
                {recentPosts.map((post, index) => (
                  <div key={index} className="flex gap-[12px] cursor-pointer hover:opacity-80 transition-opacity">
                    <div className="w-[80px] h-[80px] rounded-[10px] overflow-hidden flex-shrink-0">
                      <img 
                        src={post.image} 
                        className="w-full h-full object-cover" 
                        alt={post.title} 
                      />
                    </div>
                    <div className="flex flex-col justify-center flex-1 min-w-0">
                      <h4 className="text-[14px] font-normal leading-tight mb-1 line-clamp-2">
                        {post.title}
                      </h4>
                      <span className="text-[12px] font-normal text-[#9F9F9F]">
                        {post.date}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </aside>
        </div>

        {/* Pagination */}
        <div className="flex flex-wrap gap-[20px] sm:gap-[38px] items-center justify-center w-full mt-[54px] mb-[58px] px-4">
          <button className="bg-[#B88E2F] text-white py-[15px] px-[27px] rounded-[10px] hover:bg-[#A17A28] transition-colors">
            1
          </button>
          <button className="bg-[#F9F1E7] text-black py-[15px] px-[27px] rounded-[10px] hover:bg-[#F0E8D6] transition-colors">
            2
          </button>
          <button className="bg-[#F9F1E7] text-black py-[15px] px-[27px] rounded-[10px] hover:bg-[#F0E8D6] transition-colors">
            3
          </button>
          <button className="bg-[#F9F1E7] text-black py-[15px] px-[27px] rounded-[10px] hover:bg-[#F0E8D6] transition-colors">
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default BlogDetails;