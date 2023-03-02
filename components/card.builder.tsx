import { Builder } from "@builder.io/react";
import { Card1 } from "../components/card";

export const Card = (props) => {
	<Card1 title={props.title} cards={props.cards} />;
};

Builder.registerComponent(Card1, {
	name: "Card1",

	inputs: [
		{
			name: "title",
			type: "text",
			defaultValue: "Title",
		},
		{
			name: "description",
			type: "text",
			defaultValue: "Description",
		},
		{
			name: "cards",
			type: "list",
			subFields: [
				{
					name: "Card title",
					type: "string",
					defaultValue: "Card Title",
				},
				{
					name: "image",
					type: "file",
					defaultValue: "https://images.punkapi.com/v2/keg.png",
					allowedFileTypes: [
						"jpeg",
						"png",
						"mp4",
						"gif",
						"pdf",
						"svg",
					],
				},
				{
					name: "Card Description",
					type: "text",
					defaultValue: "Card Description",
				},
			],
		},
	],
});
