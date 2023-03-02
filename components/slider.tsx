import { Builder } from "@builder.io/react"
// import Swiper core and required modules
import { Navigation, Autoplay, Pagination, Parallax, Lazy } from "swiper"
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react"

interface SliderProps {
	title?: any
	sliders?: any
}

export const Slider1 = ({ ...props }: SliderProps) => {
	let SwiperSettings = {}
	SwiperSettings = {
		autoplay: {
			delay: 5000,
			disableOnInteraction: false,
		},
		speed: 2000,
		navigation: true,
		pagination: {
			clickable: true,
		},
		loop: true,
		parallax: true,
		preloadImages: false,
		lazy: true,
		slidesPerGroup: 1,
		slidesPerView: 1,
	}

	return (
		<Swiper
			// install Swiper modules
			modules={[Navigation, Autoplay, Pagination, Parallax, Lazy]}
			{...SwiperSettings}
		>
			{console.log(props.sliders)}
			{props.sliders &&
				props.sliders.length &&
				props.sliders.map((slider?: any) => (
					<SwiperSlide>
						<div className="swiper-content">
							<img src={slider.image} alt="" />
							<div className="swiper-content-info">
								<p>{slider.title}</p>
							</div>
						</div>
					</SwiperSlide>
				))}
		</Swiper>
	)
}
