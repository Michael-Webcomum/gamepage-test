import { Builder } from "@builder.io/react";
import { SeoButton } from "./seobutton";

export const SeoButton1 = (props) => {
	<SeoButton props={props} />;
};

Builder.registerComponent(SeoButton1, {
	name: "SEO Suggestions",
	inputs: [
		{
			name: "text",
			type: "SEO Suggestions",
			defaultValue: "<p>Hello?</p>",
		},
	],
});
