import { Builder } from "@builder.io/sdk";

import "./button.builder";
import "./slider.builder";
import "./sliderItem.builder";
import "./card.builder";
import "./seobutton.builder";

Builder.set({ insertMenu: true });
// Builder.register("editor.settings", { insertMenu: true });

Builder.register("insertMenu", {
	name: "My Custom Components",
	items: [
		{ name: "Button1" },
		{ name: "Slider1" },
		{ name: "SliderItem1" },
		{ name: "Card1" },
		{ name: "SeoButton1" },
	],
});
