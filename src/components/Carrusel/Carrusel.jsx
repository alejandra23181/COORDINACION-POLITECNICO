import React, {useState} from 'react';
// import '../styles/Carrusel.scss';
import C1 from '../images/carrusel/c1.jpg';
// import C2 from '../images/carrusel/c2.jpg';
import C3 from '../images/carrusel/c3.png';
import C4 from '../images/carrusel/c4.png';
import { Carousel, CarouselItem, CarouselIndicators, CarouselControl } from 'reactstrap';

function Carrusel() {
    const arrayC = [
        {src:C1}, 
        //{src:C2}, 
        {src:C3}, 
        {src:C4},
    ]

    const [activeIndex, setActiveIndex] = useState(0);
    const [animating] = useState(false);

    const next = () => {
        if (animating) return;
        const nextIndex = activeIndex === arrayC.length - 1 ? 0 : activeIndex + 1;
        setActiveIndex(nextIndex);
    }

    const previous = () => {
        if (animating) return;
        const nextIndex = activeIndex === 0 ? arrayC.length - 1 : activeIndex - 1;
        setActiveIndex(nextIndex);
    }

    const goToIndex = (newIndex) => {
        if (animating) return;
        setActiveIndex(newIndex);
    }
    return (
        <Carousel
            activeIndex={activeIndex}
            next={next}
            previous={previous}
            autoPlay={true}
        >
            <CarouselIndicators items={arrayC} activeIndex={activeIndex} onClickHandler={goToIndex} />
            {arrayC.map((item, key) => (
                <CarouselItem
                    key={key}
                >
                    <img  
                        style={{
                            filter:'contrast(0.6)',
                            width:'100vw',
                        }} 
                        src={item.src} 
                        alt={'img' + key} />
                </CarouselItem>
            ))}
            <CarouselControl direction="prev" directionText="Previous" onClickHandler={previous} />
            <CarouselControl direction="next" directionText="Next" onClickHandler={next} />
        </Carousel>
    )
}

export default Carrusel;

