import { Builder } from "@builder.io/react";
import { Slider1 } from "../components/slider";

interface SliderItemProps {
	title?: any;
	sliders?: any;
}

export const SliderItem = ({ ...props }: SliderItemProps) => {
	return <Slider1 title={props.title} sliders={props.sliders} />;
};
