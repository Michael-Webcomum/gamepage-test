import { Builder } from '@builder.io/react';
import { Slider1 } from '../components/slider';

export const Slider = (props) => {
	<Slider1 data={{ image: props.image }} />;
};

Builder.registerComponent(Slider1, {
	name: 'Slider1',

	inputs: [
		{
			name: 'title',
			type: 'text',
			defaultValue: 'Slider Item 1',
		},
		{
			name: 'sliders',
			type: 'list',
			subFields: [
				{
					name: 'first',
					type: 'string',
					defaultValue: 'text',
				},
				{
					name: 'last',
					type: 'string',
					defaultValue: 'text',
				},
				{
					name: 'image',
					type: 'file',
					defaultValue:
						'https://cdn.builder.io/api/v1/image/assets%2FYJIGb4i01jvw0SRdL5Bt%2F349738e6805b481ab6c50bda7e24445e',
					allowedFileTypes: [
						'jpeg',
						'png',
						'mp4',
						'gif',
						'pdf',
						'svg',
					],
				},
			],
		},
	],
});
