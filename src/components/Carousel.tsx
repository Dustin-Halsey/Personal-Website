import { useCallback, useEffect, useState, KeyboardEvent } from "react"


const carouselData = [
    {
      id: 1,
      image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff",
      alt: "Red sneakers",
      text: "Step into style with our latest sneakers",
      buttonText: "Buy Now"
    },
    {
      id: 2,
      image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30",
      alt: "Smart watch",
      text: "Stay connected with our smart watches",
      buttonText: "Buy Now"
    },
    {
      id: 3,
      image: "https://images.unsplash.com/photo-1585386959984-a4155224a1ad",
      alt: "Sunglasses",
      text: "Protect your eyes in style",
      buttonText: "Buy Now"
    },
    {
      id: 4,
      image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e",
      alt: "Headphones",
      text: "Immerse yourself in premium sound",
      buttonText: "Buy Now"
    }
  ];


export default function Carousel() {
    
        const [currentSlide, setCurrentSlide] = useState(0);
        const [isTextVisible, setIsTextVisible] = useState(true);
      
        const nextSlide = useCallback(() => {
          setIsTextVisible(false);
          setTimeout(() => {
            setCurrentSlide((prev) => (prev + 1) % carouselData.length);
            setIsTextVisible(true);
          }, 500);
        }, []);
      
        const prevSlide = useCallback(() => {
          setIsTextVisible(false);
          setTimeout(() => {
            setCurrentSlide((prev) => (prev - 1 + carouselData.length) % carouselData.length);
            setIsTextVisible(true);
          }, 500);
        }, []);
      
        useEffect(() => {
          const interval = setInterval(nextSlide, 5000);
          return () => clearInterval(interval);
        }, [nextSlide]);
      
        const handleKeyDown = (e: KeyboardEvent) => {
          if (e.key === "ArrowLeft") prevSlide();
          if (e.key === "ArrowRight") nextSlide();
        };
      
        return (
          <div className="relative w-full h-96 md:h-[70vh] overflow-hidden" onKeyDown={handleKeyDown} tabIndex={0}>
            {carouselData.map((slide, index) => (
              <div
                key={slide.id}
                className={`absolute top-0 left-0 w-full h-full transition-opacity duration-500 ease-in-out ${index === currentSlide ? "opacity-100" : "opacity-0"}`}
              >
                <img
                  src={slide.image}
                  alt={slide.alt}
                  className="object-cover w-full h-full"
                />
                <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col justify-center items-center text-white p-4">
                  <h2 className={`text-3xl md:text-4xl font-bold mb-4 text-center transition-opacity duration-500 ease-in-out ${isTextVisible ? "opacity-100" : "opacity-0"}`}>
                    {slide.text}
                  </h2>
                  <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full transition duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-300">
                    {slide.buttonText}
                  </button>
                </div>
              </div>
            ))}
            <button
              onClick={prevSlide}
              className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white bg-opacity-50 hover:bg-opacity-75 rounded-full p-2 focus:outline-none focus:ring-2 focus:ring-blue-300"
              aria-label="Previous slide"
            >
              <span className="text-black text-2xl">‹</span>
            </button>
            <button
              onClick={nextSlide}
              className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white bg-opacity-50 hover:bg-opacity-75 rounded-full p-2 focus:outline-none focus:ring-2 focus:ring-blue-300"
              aria-label="Next slide"
            >
              <span className="text-black text-2xl">›</span>
            </button>
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
              {carouselData.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-3 h-3 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-300 ${index === currentSlide ? "bg-white" : "bg-gray-400"}`}
                  aria-label={`Go to slide ${index + 1}`}
                ></button>
              ))}
            </div>
          </div>
        );
    

    // return (
    //     <div style={carouselStyle}>
    //            <ol class="carousel-indicators">
    //                 <li data-target="#carouselExampleIndicators" data-slide-to="0" class=""></li>
    //                 <li data-target="#carouselExampleIndicators" data-slide-to="1" class=""></li>
    //                 <li data-target="#carouselExampleIndicators" data-slide-to="2" class="active"></li>
    //                 <li data-target="#carouselExampleIndicators" data-slide-to="3" class=""></li>
    //                 <li data-target="#carouselExampleIndicators" data-slide-to="4" class=""></li>
    //             </ol>
    //     </div>
    // )
}