import CarouselItem from "./carouselItem"

export default function Carousel() {
    return (
        <div className="carousel bg-none rounded-box w-full space-x-8 p-4 pl-8 overflow-auto">

            <CarouselItem title="Student Major Predictor" date="Sept 12. 2024" image="/images/major-predictor-cover.png"/>
            <CarouselItem title="Student Major Predictor" date="Sept 12. 2024" image="/images/major-predictor-cover.png"/>
            <CarouselItem title="Student Major Predictor" date="Sept 12. 2024" image="/images/major-predictor-cover.png"/>
            <CarouselItem title="Student Major Predictor" date="Sept 12. 2024" image="/images/major-predictor-cover.png"/>
            <CarouselItem title="Student Major Predictor" date="Sept 12. 2024" image="/images/major-predictor-cover.png"/>
            <CarouselItem title="Student Major Predictor" date="Sept 12. 2024" image="/images/major-predictor-cover.png"/>
            <CarouselItem title="Student Major Predictor" date="Sept 12. 2024" image="/images/major-predictor-cover.png"/>
            
            {/* <div className="carousel-item">
                <img
                src="https://img.daisyui.com/images/stock/photo-1572635148818-ef6fd45eb394.webp"
                className="rounded-box" />
            </div> */}
        </div> );
}