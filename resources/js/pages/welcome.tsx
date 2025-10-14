import { Head, usePage } from '@inertiajs/react';
import { useState, useEffect, useRef } from 'react';
import { NavFooter } from '@/components/nav-footer';
import { Carousel } from '@/components/Carousel';
import Navbar from '@/components/Navbar';

export default function Welcome() {
    // Carousel state
    const [currentIndex, setCurrentIndex] = useState(0);
    const images = [
        { src: 'banner1.jpg', alt: 'Banner 1' },
        { src: 'banner2.jpg', alt: 'Banner 2' },
        { src: 'banner3.jpg', alt: 'Banner 3' },
        { src: 'banner4.jpg', alt: 'Banner 4' },
        { src: 'banner5.jpg', alt: 'Banner 5' }
    ];

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    const prevSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
    };

    useEffect(() => {
        const interval = setInterval(nextSlide, 5000); // Auto-swipe every 5 seconds
        return () => clearInterval(interval);
    }, []);

    // Touch events for manual swipe
    const [touchStart, setTouchStart] = useState(0);
    const [touchEnd, setTouchEnd] = useState(0);

    const handleTouchStart = (e: React.TouchEvent) => {
        setTouchEnd(0);
        setTouchStart(e.targetTouches[0].clientX);
    };

    const handleTouchMove = (e: React.TouchEvent) => {
        setTouchEnd(e.targetTouches[0].clientX);
    };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;
    if (isLeftSwipe) {
      nextSlide();
    }
    if (isRightSwipe) {
      prevSlide();
    }
  };

  const [formData, setFormData] = useState({
      name: '',
      email: '',
      phoneNumber: '',
      vehicleModel: '',
      vehicleYear: '',
      message: ''
    });
  
    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      const { name, value } = e.target;
      setFormData(prev => ({
        ...prev,
        [name]: value
      }));
    };
  
    const handleSubmit = (e: React.FormEvent) => {
      e.preventDefault();
      // Handle form submission here
      console.log('Form submitted:', formData);
    };

  // New carousel state for purple container
  const [purpleCarouselIndex, setPurpleCarouselIndex] = useState(0);
  const purpleImages = [
    { src: 'app-screenshot1.png', alt: 'App Screenshot 1' },
    { src: 'app-screenshot2.png', alt: 'App Screenshot 2' },
    { src: 'app-screenshot3.png', alt: 'App Screenshot 3' },
    { src: 'app-screenshot4.png', alt: 'App Screenshot 4' },
  ];

  const nextPurpleSlide = () => {
    setPurpleCarouselIndex((prevIndex) => (prevIndex + 1) % purpleImages.length);
  };

  const prevPurpleSlide = () => {
    setPurpleCarouselIndex((prevIndex) => (prevIndex - 1 + purpleImages.length) % purpleImages.length);
  };

  // Touch events for purple container carousel
  const [purpleTouchStart, setPurpleTouchStart] = useState(0);
  const [purpleTouchEnd, setPurpleTouchEnd] = useState(0);

  // Container size state
  const imgRef = useRef<HTMLImageElement>(null);
  const [containerSize, setContainerSize] = useState<{width: number, height: number} | null>(null);

  const handlePurpleTouchStart = (e: React.TouchEvent) => {
    setPurpleTouchEnd(0);
    setPurpleTouchStart(e.targetTouches[0].clientX);
  };

  const handlePurpleTouchMove = (e: React.TouchEvent) => {
    setPurpleTouchEnd(e.targetTouches[0].clientX);
  };

  const handlePurpleTouchEnd = () => {
    if (!purpleTouchStart || !purpleTouchEnd) return;
    const distance = purpleTouchStart - purpleTouchEnd;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;
    if (isLeftSwipe) {
      nextPurpleSlide();
    }
    if (isRightSwipe) {
      prevPurpleSlide();
    }
  };

    return (
        <>
            <Head title="Welcome">
                <link rel="preconnect" href="https://fonts.bunny.net" />
                <link href="https://fonts.bunny.net/css?family=instrument-sans:400,500,600" rel="stylesheet" />
                <script async src="https://www.tiktok.com/embed.js"></script>
            </Head>
            <div className="min-h-screen bg-[#FDFDFC] text-[#1b1b18] dark:bg-[#0a0a0a]">
                <Navbar />
                {/* Image container under navbar */}
                <div className="flex w-full items-center justify-center opacity-100 transition-opacity duration-750 lg:grow starting:opacity-0 pt-16">
                    <main className="flex w-full flex-col-reverse lg:flex-row">
                        {/* Carousel Section */}
                        <div className="relative w-full aspect-[4/3] sm:aspect-video overflow-hidden rounded-lg bg-[#fff2f2] dark:bg-[#1D0002]">
                            {/* Carousel Images */}
                            {images.map((image, index) => (
                                <div
                                    key={index}
                                    className={`absolute inset-0 transition-opacity duration-500 ${
                                        index === currentIndex ? 'opacity-100' : 'opacity-0'
                                    }`}
                                >
                                    <img
                                        src={image.src}
                                        alt={image.alt}
                                        className="w-full h-full object-cover rounded-lg"
                                    />
                                </div>
                            ))}
                            {/* Navigation arrows */}
                            <button
                                onClick={prevSlide}
                                className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-75 transition-all z-10"
                            >
                                ‹
                            </button>
                            <button
                                onClick={nextSlide}
                                className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-75 transition-all z-10"
                            >
                                ›
                            </button>
                            {/* Dots indicator */}
                            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2 z-10">
                                {images.map((_, index) => (
                                    <button
                                        key={index}
                                        onClick={() => setCurrentIndex(index)}
                                        className={`w-3 h-3 rounded-full transition-all ${
                                            index === currentIndex ? 'bg-white' : 'bg-white bg-opacity-50'
                                        }`}
                                    />
                                ))}
                            </div>
                        </div>
                        {/* SVG Logo */}
                        <svg
                            className="absolute top-4 left-4 w-20 sm:w-32 h-auto z-10 translate-y-0 text-[#F53003] opacity-100 transition-all duration-750 dark:text-[#F61500] starting:translate-y-6 starting:opacity-0"
                            viewBox="0 0 438 104"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path d="M17.2036 -3H0V102.197H49.5189V86.7187H17.2036V-3Z" fill="currentColor" />
                            <path
                                d="M110.256 41.6337C108.061 38.1275 104.945 35.3731 100.905 33.3681C96.8667 31.3647 92.8016 30.3618 88.7131 30.3618C83.4247 30.3618 78.5885 31.3389 74.201 33.2923C69.8111 35.2456 66.0474 37.928 62.9059 41.3333C59.7643 44.7401 57.3198 48.6726 55.5754 53.1293C53.8287 57.589 52.9572 62.274 52.9572 67.1813C52.9572 72.1925 53.8287 76.8995 55.5754 81.3069C57.3191 85.7173 59.7636 89.6241 62.9059 93.0293C66.0474 96.4361 69.8119 99.1155 74.201 101.069C78.5885 103.022 83.4247 103.999 88.7131 103.999C92.8016 103.999 96.8667 102.997 100.905 100.994C104.945 98.9911 108.061 96.2359 110.256 92.7282V102.195H126.563V32.1642H110.256V41.6337ZM108.76 75.7472C107.762 78.4531 106.366 80.8078 104.572 82.8112C102.776 84.8161 100.606 86.4183 98.0637 87.6206C95.5202 88.823 92.7004 89.4238 89.6103 89.4238C86.5178 89.4238 83.7252 88.823 81.2324 87.6206C78.7388 86.4183 76.5949 84.8161 74.7998 82.8112C73.004 80.8078 71.6319 78.4531 70.6856 75.7472C69.7356 73.0421 69.2644 70.1868 69.2644 67.1821C69.2644 64.1758 69.7356 61.3205 70.6856 58.6154C71.6319 55.9102 73.004 53.5571 74.7998 51.5522C76.5949 49.5495 78.738 47.9451 81.2324 46.7427C83.7252 45.5404 86.5178 44.9396 89.6103 44.9396C92.7012 44.9396 95.5202 45.5404 98.0637 46.7427C100.606 47.9451 102.776 49.5487 104.572 51.5522C106.367 53.5571 107.762 55.9102 108.76 58.6154C109.756 61.3205 110.256 64.1758 110.256 67.1821C110.256 70.1868 109.756 73.0421 108.76 75.7472Z"
                                fill="currentColor"
                            />
                            <path
                                d="M242.805 41.6337C240.611 38.1275 237.494 35.3731 233.455 33.3681C229.416 31.3647 225.351 30.3618 221.262 30.3618C215.974 30.3618 211.138 31.3389 206.75 33.2923C202.36 35.2456 198.597 37.928 195.455 41.3333C192.314 44.7401 189.869 48.6726 188.125 53.1293C186.378 57.589 185.507 62.274 185.507 67.1813C185.507 72.1925 186.378 76.8995 188.125 81.3069C189.868 85.7173 192.313 89.6241 195.455 93.0293C198.597 96.4361 202.361 99.1155 206.75 101.069C211.138 103.022 215.974 103.999 221.262 103.999C225.351 103.999 229.416 102.997 233.455 100.994C237.494 98.9911 240.611 96.2359 242.805 92.7282V102.195H259.112V32.1642H242.805V41.6337ZM241.31 75.7472C240.312 78.4531 238.916 80.8078 237.122 82.8112C235.326 84.8161 233.156 86.4183 230.614 87.6206C228.07 88.823 225.251 89.4238 222.16 89.4238C219.068 89.4238 216.275 88.823 213.782 87.6206C211.289 86.4183 209.145 84.8161 207.35 82.8112C205.554 80.8078 204.182 78.4531 203.236 75.7472C202.286 73.0421 201.814 70.1868 201.814 67.1821C201.814 64.1758 202.286 61.3205 203.236 58.6154C204.182 55.9102 205.554 53.5571 207.35 51.5522C209.145 49.5495 211.288 47.9451 213.782 46.7427C216.275 45.5404 219.068 44.9396 222.16 44.9396C225.251 44.9396 228.07 45.5404 230.614 46.7427C233.156 47.9451 235.326 49.5487 237.122 51.5522C238.917 53.5571 240.312 55.9102 241.31 58.6154C242.306 61.3205 242.806 64.1758 242.806 67.1821C242.805 70.1868 242.305 73.0421 241.31 75.7472Z"
                                fill="currentColor"
                            />
                            <path d="M438 -3H421.694V102.197H438V-3Z" fill="currentColor" />
                            <path d="M139.43 102.197H155.735V48.2834H183.712V32.1665H139.43V102.197Z" fill="currentColor" />
                            <path
                                d="M324.49 32.1665L303.995 85.794L283.498 32.1665H266.983L293.748 102.197H314.242L341.006 32.1665H324.49Z"
                                fill="currentColor"
                            />
                            <path
                                d="M376.571 30.3656C356.603 30.3656 340.797 46.8497 340.797 67.1828C340.797 89.6597 356.094 104 378.661 104C391.29 104 399.354 99.1488 409.206 88.5848L398.189 80.0226C398.183 80.031 389.874 90.9895 377.468 90.9895C363.048 90.9895 356.977 79.3111 356.977 73.269H411.075C413.917 50.1328 398.775 30.3656 376.571 30.3656ZM357.02 61.0967C357.145 59.7487 359.023 43.3761 376.442 43.3761C393.861 43.3761 395.978 59.7464 396.099 61.0967H357.02Z"
                                fill="currentColor"
                            />
                        </svg>
                        <div className="absolute inset-0 rounded-t-lg lg:rounded-t-none lg:rounded-r-lg" />
                    </main>
                </div>
                {/* Quote Form placed directly under the banner */}
                <div className="flex w-full justify-center mt-8">
                  <div className="bg-[#4C1D95] backdrop-blur-sm rounded-lg p-6 w-full max-w-2xl">
                    <h2 className="text-2xl font-bold text-center mb-6 text-white">GET YOUR FREE QUOTE</h2>
                    <form onSubmit={handleSubmit}>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {/* Left column */}
                        <div className="flex flex-col gap-4">
                          {/* Name Field */}
                          <div>
                            <label className="block text-sm font-medium text-white mb-1">Name<span className="text-red-500">*</span></label>
                            <input
                              type="text"
                              name="name"
                              value={formData.name}
                              onChange={handleInputChange}
                              placeholder="Value"
                              className="w-full px-3 py-2 bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-white/50 text-gray-900 placeholder-gray-500"
                              required
                            />
                          </div>
                          {/* Email Field */}
                          <div>
                            <label className="block text-sm font-medium text-white mb-1">Email<span className="text-red-500">*</span></label>
                            <input
                              type="email"
                              name="email"
                              value={formData.email}
                              onChange={handleInputChange}
                              placeholder="Value"
                              className="w-full px-3 py-2 bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-white/50 text-gray-900 placeholder-gray-500"
                              required
                            />
                          </div>
                          {/* Phone Number Field */}
                          <div>
                            <label className="block text-sm font-medium text-white mb-1">Phone Number<span className="text-red-500">*</span></label>
                            <input
                              type="tel"
                              name="phoneNumber"
                              value={formData.phoneNumber}
                              onChange={handleInputChange}
                              placeholder="Value"
                              className="w-full px-3 py-2 bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-white/50 text-gray-900 placeholder-gray-500"
                              required
                            />
                          </div>
                        </div>
                        {/* Right column */}
                        <div className="flex flex-col gap-4">
                          {/* Vehicle Model Field */}
                          <div>
                            <label className="block text-sm font-medium text-white mb-1">Vehicle Model<span className="text-red-500">*</span></label>
                            <input
                              type="text"
                              name="vehicleModel"
                              value={formData.vehicleModel}
                              onChange={handleInputChange}
                              placeholder="Value"
                              className="w-full px-3 py-2 bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-white/50 text-gray-900 placeholder-gray-500"
                              required
                            />
                          </div>
                          {/* Vehicle Year Field */}
                          <div>
                            <label className="block text-sm font-medium text-white mb-1">Vehicle Year<span className="text-red-500">*</span></label>
                            <input
                              type="text"
                              name="vehicleYear"
                              value={formData.vehicleYear}
                              onChange={handleInputChange}
                              placeholder="Value"
                              className="w-full px-3 py-2 bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-white/50 text-gray-900 placeholder-gray-500"
                              required
                            />
                          </div>
                          {/* Message Field */}
                          <div>
                            <label className="block text-sm font-medium text-white mb-1">Message<span className="text-red-500">*</span></label>
                            <textarea
                              name="message"
                              value={formData.message}
                              onChange={handleInputChange}
                              placeholder="Value"
                              rows={4}
                              className="w-full px-3 py-2 bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-white/50 text-gray-900 placeholder-gray-500 resize-none"
                              required
                            />
                          </div>
                        </div>
                      </div>
                      {/* Submit Button (full width under fields) */}
                      <div className="mt-6">
                        <button
                          type="submit"
                          className="w-full bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded-md transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 focus:ring-offset-purple-600"
                        >
                          GET QUOTE
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
                {/* Wording */}
            <div className="mt-6 text-right text-sm">
              <p>No Limits. Just Coverage.</p>
              <p>Drive anywhere, fix anywhere. Ezcare’s open workshop concept puts you in control.</p>
            </div>
                {/* Purple container with 4-image carousel and text */}
                <div className="mt-12 max-w-8xl mx-auto rounded-lg bg-[#4C1D95] p-8 flex justify-center items-center">
                  <div className="flex flex-col lg:flex-row items-center justify-center gap-10 w-full max-w-4xl mx-auto text-center">
                    {/* Left carousel */}
                    <div
                      className="relative max-w-[250px] w-full flex-shrink-0 flex justify-center items-center"
                      style={containerSize ? { aspectRatio: containerSize.width / containerSize.height } : {}}
                      onTouchStart={handlePurpleTouchStart}
                      onTouchMove={handlePurpleTouchMove}
                      onTouchEnd={handlePurpleTouchEnd}
                    >
                      {purpleImages.map((image, index) => (
                        <div
                          key={index}
                          className={`absolute inset-0 transition-opacity duration-500 flex justify-center items-center ${
                            index === purpleCarouselIndex ? 'opacity-100' : 'opacity-0'
                          }`}
                        >
                          <img
                            ref={index === 0 ? imgRef : undefined}
                            src={image.src}
                            alt={image.alt}
                            className="w-full h-full object-cover rounded-3xl"
                            onLoad={index === 0 ? () => {
                              if (imgRef.current && !containerSize) {
                                const img = imgRef.current!;
                                setContainerSize({ width: img.naturalWidth, height: img.naturalHeight });
                              }
                            } : undefined}
                          />
                        </div>
                      ))}
                      {/* Navigation arrows */}
                      <button
                        onClick={prevPurpleSlide}
                        className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-30 text-white p-2 rounded-full hover:bg-opacity-50 transition-all"
                      >
                        ‹
                      </button>
                      <button
                        onClick={nextPurpleSlide}
                        className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-30 text-white p-2 rounded-full hover:bg-opacity-50 transition-all"
                      >
                        ›
                      </button>
                      {/* Dots indicator */}
                      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                        {purpleImages.map((_, index) => (
                          <button
                            key={index}
                            onClick={() => setPurpleCarouselIndex(index)}
                            className={`w-3 h-3 rounded-full transition-all ${
                              index === purpleCarouselIndex ? 'bg-white' : 'bg-white bg-opacity-50'
                            }`}
                          />
                        ))}
                      </div>
                    </div>
                    {/* Right text content */}
                    <div className="flex flex-col items-center justify-center text-center w-full">
                      <h2 className="mb-4 font-semibold text-white text-xl sm:text-2xl md:text-3xl lg:text-4xl leading-tight">
                        Now with Ezcare Warranty SuperApp - Warranty at Your Fingertips!
                      </h2>
                      <p className="mb-6 text-white/90 text-sm sm:text-base md:text-lg lg:text-xl leading-snug max-w-lg">
                        Say goodbye to bulky booklets. As a warranty holder, you can easily access your policy, track claims, and get support anytime, anywhere - all through the Ezcare SuperApp.
                      </p>
                      <div className="flex space-x-4 justify-center">
                        <a href="https://play.google.com/store/apps/details?id=com.ezcare.ezcaresuperapp" aria-label="Google Play Store">
                          <img src="/google-play-badge.jpg" alt="Google Play" className="h-12 rounded-lg" />
                        </a>
                        <a href="https://apps.apple.com/my/app/ezcare-warranty-superapp/id6473253868" aria-label="Apple App Store">
                          <img src="/app-store-badge.jpg" alt="App Store" className="h-12 rounded-lg" />
                        </a>
                        <a href="https://appgallery.huawei.com/app/C109957695" aria-label="Huawei AppGallery">
                          <img src="/appgallery-badge.jpg" alt="AppGallery" className="h-12 rounded-lg" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                {/* TikTok videos container */}
                <div className="mt-12 max-w-4xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                  <div className="rounded-lg overflow-hidden shadow-lg aspect-[9/16]">
                    <div dangerouslySetInnerHTML={{__html: `<blockquote class="tiktok-embed" cite="https://www.tiktok.com/@ezcarewarranty/video/7547546516831997191" data-video-id="7547546516831997191" > <section> <a target="_blank" title="@ezcarewarranty" href="https://www.tiktok.com/@ezcarewarranty?refer=embed">@ezcarewarranty</a> <a target="_blank" title="♬ original sound  - Ezcare Warranty" href="https://www.tiktok.com/music/original-sound-Ezcare-Warranty-7547546595957508880?refer=embed">♬ original sound  - Ezcare Warranty</a> </section> </blockquote>`}} />
                  </div>
                  <div className="rounded-lg overflow-hidden shadow-lg aspect-[9/16]">
                    <iframe
                      src="https://www.tiktok.com/embed/7012345678901234568"
                      width="100%"
                      allowFullScreen
                      className="w-full h-full"
                      frameBorder="0"
                      scrolling="no"
                      title="TikTok Video 2"
                    />
                  </div>
                  <div className="rounded-lg overflow-hidden shadow-lg aspect-[9/16]">
                    <iframe
                      src="https://www.tiktok.com/embed/7012345678901234569"
                      width="100%"
                      allowFullScreen
                      className="w-full h-full"
                      frameBorder="0"
                      scrolling="no"
                      title="TikTok Video 3"
                    />
                  </div>
                </div>
                {/* Why Choose Ezcare Warranty Section */}
                <section className="mt-16 bg-[#4C1D95] py-12">
                    <div className="max-w-7xl mx-auto px-6 text-white">
                        <h2 className="text-center text-3xl font-semibold mb-10">Why Choose Ezcare Warranty?</h2>
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
                            {/* Card 1 */}
                            <div className="bg-white text-purple-700 rounded-lg shadow-md p-4 sm:p-6 flex flex-col items-center text-center relative">
                                <div className="absolute -top-4 left-4 bg-purple-600 rounded-full w-8 h-8 flex items-center justify-center text-white font-bold">1</div>
                                <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 24 24"><path fill="currentColor" d="M6 20V4zm9.925 3q-.65 0-1.225-.262t-1-.738l-4.475-5.35q-.25-.3-.225-.687t.3-.663l.475-.5q.45-.45 1.1-.562t1.225.187l2.9 1.45V7h2q1.65 0 2.825 1.175T21 11v8q0 1.65-1.175 2.825T17 23zM6 22q-.825 0-1.412-.587T4 20V4q0-.825.588-1.412T6 2h9q.825 0 1.413.588T17 4v3h-2V4H6v16h6.025l1.675 2zm4.5-15q.425 0 .713-.288T11.5 6t-.288-.712T10.5 5t-.712.288T9.5 6t.288.713T10.5 7m5.425 14H17q.825 0 1.413-.575T19 19v-8q0-.825-.587-1.412T17 9v8.5q0 .575-.475.863t-.975.037l-3.875-1.925l3.475 4.175q.15.175.35.263t.425.087"/></svg>
                                <h3 className="font-semibold mb-1">Easy Policy Access</h3>
                                <p className="text-sm">Access your policy anytime, anywhere with ease with our SuperApp.</p>
                              </div>
                              {/* Card 2 */}
                              <div className="bg-white text-purple-700 rounded-lg shadow-md p-4 sm:p-6 flex flex-col items-center text-center relative">
                                <div className="absolute -top-4 left-4 bg-purple-600 rounded-full w-8 h-8 flex items-center justify-center text-white font-bold">2</div>
                                <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 24 24"><path fill="currentColor" d="M22.385 8.609A5.47 5.47 0 0 0 18.5 7a5.57 5.57 0 0 0-3.928 1.609L12 11.092L9.428 8.61a5.5 5.5 0 1 0 0 7.782L12 13.83l2.572 2.562a5.514 5.514 0 1 0 7.813-7.782m-14.37 6.374a3.54 3.54 0 0 1-4.986 0a3.518 3.518 0 0 1 4.985-4.965l2.486 2.474Zm12.956 0a3.54 3.54 0 0 1-4.985 0l-2.486-2.49l2.486-2.476a3.54 3.54 0 0 1 4.985 0a3.506 3.506 0 0 1 0 4.965"/></svg>
                                <h3 className="font-semibold mb-1">Unlimited Claim</h3>
                                <p className="text-sm">Make unlimited claims without hassle.</p>
                              </div>
                              {/* Card 3 */}
                              <div className="bg-white text-purple-700 rounded-lg shadow-md p-4 sm:p-6 flex flex-col items-center text-center relative">
                                <div className="absolute -top-4 left-4 bg-purple-600 rounded-full w-8 h-8 flex items-center justify-center text-white font-bold">3</div>
                                <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 24 24"><path fill="currentColor" d="M16.36 14c.08-.66.14-1.32.14-2s-.06-1.34-.14-2h3.38c.16.64.26 1.31.26 2s-.1 1.36-.26 2m-5.15 5.56c.6-1.11 1.06-2.31 1.38-3.56h2.95a8.03 8.03 0 0 1-4.33 3.56M14.34 14H9.66c-.1-.66-.16-1.32-.16-2s.06-1.35.16-2h4.68c.09.65.16 1.32.16 2s-.07 1.34-.16 2M12 19.96c-.83-1.2-1.5-2.53-1.91-3.96h3.82c-.41 1.43-1.08 2.76-1.91 3.96M8 8H5.08A7.92 7.92 0 0 1 9.4 4.44C8.8 5.55 8.35 6.75 8 8m-2.92 8H8c.35 1.25.8 2.45 1.4 3.56A8 8 0 0 1 5.08 16m-.82-2C4.1 13.36 4 12.69 4 12s.1-1.36.26-2h3.38c-.08.66-.14 1.32-.14 2s.06 1.34.14 2M12 4.03c.83 1.2 1.5 2.54 1.91 3.97h-3.82c.41-1.43 1.08-2.77 1.91-3.97M18.92 8h-2.95a15.7 15.7 0 0 0-1.38-3.56c1.84.63 3.37 1.9 4.33 3.56M12 2C6.47 2 2 6.5 2 12a10 10 0 0 0 10 10a10 10 0 0 0 10-10A10 10 0 0 0 12 2"/></svg>
                                <h3 className="font-semibold mb-1">Nationwide Coverage</h3>
                                <p className="text-sm">Coverage available across Malaysia.</p>
                              </div>
                              {/* Card 4 */}
                              <div className="bg-white text-purple-700 rounded-lg shadow-md p-4 sm:p-6 flex flex-col items-center text-center relative">
                                <div className="absolute -top-4 left-4 bg-purple-600 rounded-full w-8 h-8 flex items-center justify-center text-white font-bold">4</div>
                                <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M10.125 2.25h-4.5c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125v-9M10.125 2.25h.375a9 9 0 0 1 9 9v.375M10.125 2.25A3.375 3.375 0 0 1 13.5 5.625v1.5c0 .621.504 1.125 1.125 1.125h1.5a3.375 3.375 0 0 1 3.375 3.375M9 15l2.25 2.25L15 12"/></svg>
                                <h3 className="font-semibold mb-1">Backed by International Insurance</h3>
                                <p className="text-xs">Backed & Underwritten by Pacific Insurance</p>
                              </div>
                              {/* Card 5 */}
                              <div className="bg-white text-purple-700 rounded-lg shadow-md p-4 sm:p-6 flex flex-col items-center text-center relative">
                                <div className="absolute -top-4 left-4 bg-purple-600 rounded-full w-8 h-8 flex items-center justify-center text-white font-bold">5</div>
                                <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 24 24"><path fill="currentColor" d="M18.72 14.76c.35-.85.54-1.76.54-2.76c0-.72-.11-1.41-.3-2.05c-.65.15-1.33.23-2.04.23A9.07 9.07 0 0 1 9.5 6.34a9.2 9.2 0 0 1-4.73 4.88c-.04.25-.04.52-.04.78A7.27 7.27 0 0 0 12 19.27c1.05 0 2.06-.23 2.97-.64c.57 1.09.83 1.63.81 1.63c-1.64.55-2.91.82-3.78.82c-2.42 0-4.73-.95-6.43-2.66a9 9 0 0 1-2.24-3.69H2v-4.55h1.09a9.09 9.09 0 0 1 15.33-4.6a9 9 0 0 1 2.47 4.6H22v4.55h-.06L18.38 18l-5.3-.6v-1.67h4.83zm-9.45-2.99c.3 0 .59.12.8.34a1.136 1.136 0 0 1 0 1.6c-.21.21-.5.33-.8.33c-.63 0-1.14-.5-1.14-1.13s.51-1.14 1.14-1.14m5.45 0c.63 0 1.13.51 1.13 1.14s-.5 1.13-1.13 1.13s-1.14-.5-1.14-1.13a1.14 1.14 0 0 1 1.14-1.14"/></svg>
                                <h3 className="font-semibold mb-1">Customer Support Anytime</h3>
                                <p className="text-sm">24/7 customer support for all your needs.</p>
                              </div>
                              {/* Card 6 */}
                              <div className="bg-white text-purple-700 rounded-lg shadow-md p-4 sm:p-6 flex flex-col items-center text-center relative">
                                <div className="absolute -top-4 left-4 bg-purple-600 rounded-full w-8 h-8 flex items-center justify-center text-white font-bold">6</div>
                                <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 512 512"><path fill="currentColor" d="M256 54.28c-124.603 0-226 101.398-226 226c0 47.864 14.975 92.293 40.465 128.876l29.79-19.86a188.96 188.96 0 0 1-32.696-84.577H96v-18H66.115c-.07-2.14-.115-4.284-.115-6.44c0-45.378 15.816-86.97 42.236-119.598l17.4 17.4l12.727-12.727l-18.133-18.132C152.735 114.057 197.335 92.8 247 90.498v29.22h18V90.5c49.665 2.302 94.265 23.56 126.77 56.725l-18.133 18.132l12.726 12.727l17.4-17.4c26.42 32.63 42.237 74.22 42.237 119.6c0 2.154-.044 4.3-.115 6.437H416v18h28.44a188.96 188.96 0 0 1-32.694 84.575l29.79 19.86C467.025 372.574 482 328.146 482 280.282c0-124.602-101.397-226-226-226zm15.83 66.23a144 160 0 0 1 74.608 100.062l49.966-17.568a160 160 0 0 0-4.3-7.012l-5.135 5.153l-30.368-30.29l-5.76-5.746l7.85-7.874a160 160 0 0 0-86.862-36.726zm156.15 89.844l-175.332 60.6C240.505 272.618 231 283.155 231 295.72c0 13.7 11.3 25 25 25c6.77 0 12.95-2.764 17.473-7.208zm-16.513 32.322l-60.713 40.72a144 160 0 0 1-56.6 108.323h76.057a160 160 0 0 0 39.763-68.572H398.48v-52.515h17.022a160 160 0 0 0-4.035-27.957zM128 421.72v36h256v-36z"/></svg>
                                <h3 className="font-semibold mb-1">Unlimited Mileage</h3>
                                <p className="text-sm">Drive without limits with unlimited mileage coverage.</p>
                              </div>
                              {/* Card 7 */}
                              <div className="bg-white text-purple-700 rounded-lg shadow-md p-4 sm:p-6 flex flex-col items-center text-center relative">
                                <div className="absolute -top-4 left-4 bg-purple-600 rounded-full w-8 h-8 flex items-center justify-center text-white font-bold">7</div>
                                <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 24 24"><path fill="currentColor" d="m11.998 2l.032.002l.086.005a1 1 0 0 1 .342.104l.105.062l.097.076l.016.015l.247.21a11 11 0 0 0 7.189 2.537l.342-.01a1 1 0 0 1 1.005.717a13 13 0 0 1-9.208 16.25a1 1 0 0 1-.502 0A13 13 0 0 1 2.54 5.718a1 1 0 0 1 1.005-.717a11 11 0 0 0 7.791-2.75l.046-.036l.053-.041a1 1 0 0 1 .217-.112l.075-.023l.036-.01a1 1 0 0 1 .12-.022l.086-.005zM12 4.296l-.176.135a13 13 0 0 1-7.288 2.572l-.264.006l-.064.31a11 11 0 0 0 1.064 7.175l.17.314a11 11 0 0 0 6.49 5.136l.068.019z"/></svg>
                                <h3 className="font-semibold mb-1">Highest Warranty Coverage</h3>
                                <p className="text-sm">Comprehensive warranty coverage up to RM50,000.00</p>
                              </div>
                              {/* Card 8 */}
                              <div className="bg-white text-purple-700 rounded-lg shadow-md p-4 sm:p-6 flex flex-col items-center text-center relative">
                                <div className="absolute -top-4 left-4 bg-purple-600 rounded-full w-8 h-8 flex items-center justify-center text-white font-bold">8</div>
                                <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 24 24"><path fill="currentColor" d="M1 17v-4h8.2L3 8.1V11H1V5h1l11 6.05V4h5l5 6v7h-2.5q0 1.25-.875 2.125T17.5 20t-2.125-.875T14.5 17H9q0 1.25-.875 2.125T6 20t-2.125-.875T3 17zm5 1.5q.65 0 1.075-.425T7.5 17t-.425-1.075T6 15.5t-1.075.425T4.5 17t.425 1.075T6 18.5m11.5 0q.65 0 1.075-.425T19 17t-.425-1.075T17.5 15.5t-1.075.425T16 17t.425 1.075t1.075.425M15 10h5.4l-3.35-4H15z"/></svg>
                                <h3 className="font-semibold mb-1">24/7 Towing Assistance</h3>
                                <p className="text-sm">Reliable towing assistance anytime, anywhere.</p>
                              </div>
                        </div>
                    </div>
                </section>
                {/* New cards section under Why Choose Ezcare Warranty */}
                <section className="max-w-7xl mx-auto px-6 py-12 space-y-8">
                  <Carousel />
                </section>
                {/* Add some bottom padding to avoid clipping */}
                <div className="pb-2" />
                {/* Statements of Satisfaction section */}
                <section className="mt-12 w-full px-4 rounded-lg bg-[#4C1D95] p-8 text-white flex flex-col items-center gap-8 text-center">
                  <h2 className="text-3xl font-semibold mb-8">Statements of Satisfaction</h2>
                  <div className="flex flex-col sm:flex-row gap-8 w-full max-w-4xl">
                    {/* Card 1 */}
                    <div className="bg-white text-gray-900 rounded-lg shadow-md p-6 flex flex-col">
                      <div className="flex items-center mb-4">
                        <img src="/thumbs-up-icon.png" alt="Thumbs up" className="w-10 h-10 mr-4" />
                      </div>
                      <p className="text-sm">Customer satisfaction is our top priority.</p>
                    </div>
                    {/* Card 1 */}
                    <div className="bg-white text-gray-900 rounded-lg shadow-md p-6 flex flex-col">
                      <div className="flex items-center mb-4">
                        <img src="/thumbs-up-icon.png" alt="Thumbs up" className="w-10 h-10 mr-4" />
                      </div>
                      <p className="text-sm">Customer satisfaction is our top priority.</p>
                    </div>
                    {/* Card 1 */}
                    <div className="bg-white text-gray-900 rounded-lg shadow-md p-6 flex flex-col">
                      <div className="flex items-center mb-4">
                        <img src="/thumbs-up-icon.png" alt="Thumbs up" className="w-10 h-10 mr-4" />
                      </div>
                      <p className="text-sm">Customer satisfaction is our top priority.</p>
                    </div>
                  </div>
                </section>
                {/* Dashed divider between sections */}
                <div className="w-full flex justify-center my-8">
                  <hr className="w-full border-t-2 border-dashed border-purple-900" />
                </div>
                {/* New coverage section above NavFooter */}
                <div className="mt-12 w-full px-4 rounded-lg bg-[#4C1D95] p-8 text-white flex flex-col items-center gap-4 text-center">
                  <h2 className="text-2xl font-semibold">
                    Coverage That Moves With You.<br />Choose Ezcare.
                  </h2>
                  <div className="flex flex-col sm:flex-row gap-4 sm:gap-0 sm:space-x-4">
                    <a
                      href="/plans"
                      className="bg-purple-500 hover:bg-purple-600 text-white px-4 py-2 rounded-md transition-colors text-center"
                    >
                      Pricing
                    </a>
                    <a
                      href="https://wa.me/60132880177"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-white text-purple-700 px-4 py-2 rounded-md transition-colors text-center"
                    >
                      Get Free Quote
                    </a>
                  </div>
                </div>
                <NavFooter />
                {/* Floating WhatsApp Icon */}
                <a
                    href="https://wa.me/60132880177"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="fixed bottom-4 right-4 z-50 bg-green-500 hover:bg-green-600 text-white rounded-full p-3 shadow-lg transition-colors"
                    aria-label="Contact us on WhatsApp"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                    >
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967c-.273-.099-.471-.148-.67.15c-.197.297-.767.966-.94 1.164c-.173.199-.347.223-.644.075c-.297-.15-1.255-.463-2.39-1.475c-.883-.788-1.48-1.761-1.653-2.059c-.173-.297-.018-.458.13-.606c.134-.133.298-.347.446-.52c.149-.174.198-.298.298-.497c.099-.198.05-.371-.025-.52c-.075-.149-.669-1.612-.916-2.207c-.242-.579-.487-.5-.669-.51c-.173-.008-.371-.01-.57-.01c-.198 0-.52.074-.792.372c-.272.297-1.04 1.016-1.04 2.479c0 1.462 1.065 2.875 1.213 3.074c.149.198 2.096 3.2 5.077 4.487c.709.306 1.262.489 1.694.625c.712.227 1.36.195 1.871.118c.571-.085 1.758-.719 2.006-1.413c.248-.694.248-1.289.173-1.413c-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214l-3.741.982l.998-3.648l-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884c2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488" />
                    </svg>
                </a>
            </div>
        </>
    );
}
