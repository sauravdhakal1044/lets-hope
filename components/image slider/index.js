import React from 'react'
import { Carousel } from 'react-responsive-carousel'
import "react-responsive-carousel/lib/styles/carousel.min.css";

function Images() {
    return (
        <>
            <div className=' w-[80%]'>
                <Carousel
                    autoPlay={true}
                    interval={3000}
                    infiniteLoop={true}
                    swipeable={true}
                    showArrows={false}
                    showStatus={false}
                    emulateTouch={true}
                    stopOnHover={true}
                    useKeyboardArrows={true}
                    preventMovementUntilSwipeScrollTolerance={true}
                    showThumbs={false}
                >
                    <div>
                        <img src="/assets/images/IMG_1479.webp" />
                    </div>
                    <div>
                        <img src="/assets/images/IMG_774.webp" />
                    </div>
                    <div>
                        <img src="/assets/images/IMG_821.webp" />

                    </div>
                    <div>
                        <img src="/assets/images/IMG_7146.webp" />
                    </div>
                </Carousel>
            </div>
        </>
    )
}

export default Images