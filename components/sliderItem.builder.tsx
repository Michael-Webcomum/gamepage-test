import { Builder } from "@builder.io/react";
import { SliderItem } from "../components/sliderItem";

export const SliderItem1 = ({ title, sliders }) => {
	<SliderItem title={title} sliders={sliders} />;
};

Builder.registerComponent(SliderItem1, {
	name: "SliderItem1",
	defaultStyles: {},
	inputs: [
		{
			name: "title",
			type: "text",
			defaultValue: "Slider Item 1",
		},
		{
			name: "sliders",
			type: "list",
			subFields: [
				{
					name: "title",
					type: "string",
					defaultValue: "text",
				},
				{
					name: "image",
					type: "file",
					defaultValue:
						"https://cdn.builder.io/api/v1/image/assets%2FYJIGb4i01jvw0SRdL5Bt%2F349738e6805b481ab6c50bda7e24445e",
					allowedFileTypes: [
						"jpeg",
						"png",
						"mp4",
						"gif",
						"pdf",
						"svg",
					],
				},
			],
		},
	],
});
