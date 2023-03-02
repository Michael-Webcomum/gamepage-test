import { Builder } from '@builder.io/react';
import { Button } from '../components/button';

export const Button1 = (props) => {
	<Button props={props} />;
};

Builder.registerComponent(Button1, {
	name: 'Button1',
	inputs: [
		{
			name: 'title',
			type: 'text',
			defaultValue: 'Button!',
		},
		{
			name: 'color',
			type: 'color',
			defaultValue: 'black',
		},
	],
});
