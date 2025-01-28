import React, { useState, useEffect, useRef } from 'react';
    import { ChevronLeft, ChevronRight } from 'lucide-react';

    interface CarouselItem {
      id: number;
      title: string;
      imageUrl: string;
    }

    interface TopItem {
      id: number;
      title: string;
      artist: string;
      imageUrl: string;
    }

    export function HomePage() {
      const [currentSlide, setCurrentSlide] = useState(0);
      const items: CarouselItem[] = [
        {
          id: 1,
          title: 'Item 1',
          imageUrl: 'https://placehold.co/600x400/000000/FFFFFF?text=Item+1',
        },
        {
          id: 2,
          title: 'Item 2',
          imageUrl: 'https://placehold.co/600x400/111111/FFFFFF?text=Item+2',
        },
        {
          id: 3,
          title: 'Item 3',
          imageUrl: 'https://placehold.co/600x400/222222/FFFFFF?text=Item+3',
        },
        {
          id: 4,
          title: 'Item 4',
          imageUrl: 'https://placehold.co/600x400/333333/FFFFFF?text=Item+4',
        },
        {
          id: 5,
          title: 'Item 5',
          imageUrl: 'https://placehold.co/600x400/444444/FFFFFF?text=Item+5',
        },
      ];
      const topItems: TopItem[] = [
        {
          id: 1,
          title: 'Song 1',
          artist: 'Artist 1',
          imageUrl: 'https://placehold.co/150x150/000000/FFFFFF?text=Song+1',
        },
        {
          id: 2,
          title: 'Song 2',
          artist: 'Artist 2',
          imageUrl: 'https://placehold.co/150x150/111111/FFFFFF?text=Song+2',
        },
        {
          id: 3,
          title: 'Song 3',
          artist: 'Artist 3',
          imageUrl: 'https://placehold.co/150x150/222222/FFFFFF?text=Song+3',
        },
        {
          id: 4,
          title: 'Song 4',
          artist: 'Artist 4',
          imageUrl: 'https://placehold.co/150x150/333333/FFFFFF?text=Song+4',
        },
        {
          id: 5,
          title: 'Song 5',
          artist: 'Artist 5',
          imageUrl: 'https://placehold.co/150x150/444444/FFFFFF?text=Song+5',
        },
        {
          id: 6,
          title: 'Song 6',
          artist: 'Artist 6',
          imageUrl: 'https://placehold.co/150x150/555555/FFFFFF?text=Song+6',
        },
        {
          id: 7,
          title: 'Song 7',
          artist: 'Artist 7',
          imageUrl: 'https://placehold.co/150x150/666666/FFFFFF?text=Song+7',
        },
        {
          id: 8,
          title: 'Song 8',
          artist: 'Artist 8',
          imageUrl: 'https://placehold.co/150x150/777777/FFFFFF?text=Song+8',
        },
        {
          id: 9,
          title: 'Song 9',
          artist: 'Artist 9',
          imageUrl: 'https://placehold.co/150x150/888888/FFFFFF?text=Song+9',
        },
        {
          id: 10,
          title: 'Song 10',
          artist: 'Artist 10',
          imageUrl: 'https://placehold.co/150x150/999999/FFFFFF?text=Song+10',
        },
      ];
      const timeoutRef = useRef<number | null>(null);

      const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % items.length);
      };

      const prevSlide = () => {
        setCurrentSlide((prev) => (prev - 1 + items.length) % items.length);
      };

      useEffect(() => {
        if (timeoutRef.current) {
          clearTimeout(timeoutRef.current);
        }

        timeoutRef.current = setTimeout(() => {
          nextSlide();
        }, 5000) as unknown as number;

        return () => {
          if (timeoutRef.current) {
            clearTimeout(timeoutRef.current);
          }
        };
      }, [currentSlide, items.length]);

      return (
        <>
          {/* Hero Section */}
          <div className="relative h-screen bg-navy-900">
            <div
              className="absolute inset-0 z-0"
              style={{
                backgroundImage:
                  'url("https://images.unsplash.com/photo-1614607242094-b1b2cf769ff3?ixlib=rb-1.2.1&auto=format&fit=crop&w=2400&q=80")',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
            >
              <div className="absolute inset-0 bg-gray-900/70"></div>
            </div>

            <div className="relative z-10 h-full">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32">
                <div className="bg-white/90 backdrop-blur-sm rounded-lg p-8 max-w-xl">
                  <h1 className="text-4xl font-bold text-gray-900 mb-4">
                    Unlocking The World For Everyone To Explore
                  </h1>
                  <p className="text-lg text-gray-600 mb-2">
                    "เปิดประตูสู่โลกกว้างให้ทุกคนได้สัมผัส"
                  </p>
                  <p className="text-gray-600 mb-6">
                    Welcome to Premium Content Audio. Your daily dose of news, insights, and entertainment is just a click away.
                  </p>
                  <button className="bg-gray-900 text-white px-8 py-3 rounded-lg hover:bg-gray-800 transition-colors">
                    Get Started
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Carousel Section */}
          <div className="bg-gray-100 py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="relative">
                <div className="flex overflow-hidden rounded-xl">
                  <div
                    className="flex transition-transform duration-500 ease-in-out"
                    style={{ transform: `translateX(-${currentSlide * 100}%)` }}
                  >
                    {items.map((item) => (
                      <div key={item.id} className="min-w-full px-4">
                        <div className="bg-gray-800 rounded-lg shadow-lg overflow-hidden">
                          <img
                            src={item.imageUrl}
                            alt={item.title}
                            className="w-full h-64 object-cover"
                          />
                          <div className="p-4">
                            <h3 className="text-xl font-semibold text-white">{item.title}</h3>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Navigation Buttons */}
                <button
                  onClick={prevSlide}
                  className="absolute left-0 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full shadow-lg transition-colors"
                >
                  <ChevronLeft className="h-6 w-6" />
                </button>
                <button
                  onClick={nextSlide}
                  className="absolute right-0 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full shadow-lg transition-colors"
                >
                  <ChevronRight className="h-6 w-6" />
                </button>

                {/* Dots */}
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
                  {items.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentSlide(index)}
                      className={`w-2 h-2 rounded-full transition-colors ${
                        currentSlide === index ? 'bg-blue-600' : 'bg-gray-300'
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Top 10 Section */}
          <div className="bg-gray-50 py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
                Top 10
              </h2>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6">
                {topItems.map((item) => (
                  <div
                    key={item.id}
                    className="bg-white rounded-lg shadow-md overflow-hidden"
                  >
                    <img
                      src={item.imageUrl}
                      alt={item.title}
                      className="w-full h-32 object-cover"
                    />
                    <div className="p-4">
                      <h3 className="text-lg font-semibold text-gray-900">
                        {item.title}
                      </h3>
                      <p className="text-gray-600 text-sm">{item.artist}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </>
      );
    }
