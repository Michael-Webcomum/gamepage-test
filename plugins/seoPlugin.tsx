import { registerCommercePlugin as registerPlugin } from "@builder.io/commerce-plugin-tools";
import { Builder } from "@builder.io/sdk";
import pkg from "../package.json";
import appState from "@builder.io/app-context";
import {
	getSEOReviewModel,
	getSEOReviewModelTemplate,
	registerContentAction,
	getIframeHTMLContent,
	showReviewNotifications,
	fastClone,
} from "./utils";
import { configure } from "mobx";
import { useState } from "react";

interface seoAPIdata {
	Overview?: {
		keyword?: any;
		URL?: any;
		overallSEOScore?: number;
		availableSEOPoints?: number;
		earnedSEOPoints?: number;
		summary?: {
			errors?: number;
			warnings?: number;
			optimized?: number;
		};
	};
	Input?: {
		URL?: any;
		statusCode?: number;
		readabilityUrl?: any;
		focusKeywordFound?: number;
		keyword?: any;
		inputType?: any;
		feedbackDetails?: {
			0?: any;
			statusCode?: any;
		};
		maxSEOScoreAvailable?: number;
		SEOScore?: number;
	};
	titleTag?: {
		Result?: number;
		titleFound?: any;
		inputUrl?: any;
		titleTag?: any;
		titleLength?: number;
		titleTagNumber?: number;
		focusKeywordsPosition?: number;
		focusKeywordsFound?: number;
		keyword?: any;
		feedbackDetails?: {
			found?: any;
			length?: any;
			focusKeyword?: any;
			focusKeywordsPosition?: any;
		};
		maxSEOScoreAvailable?: number;
		SEOScore?: number;
	};
	metaDescription?: {
		result?: number;
		metaDescriptionFound?: any;
		inputUrl?: any;
		metaDescription?: any;
		metaDescriptionNumber?: number;
		focusKeywordsFound?: any;
		keyword?: any;
		feedbackDetails?: {
			found?: any;
			length?: any;
			focusKeyword?: any;
		};
		maxSEOScoreAvailable?: number;
		SEOScore?: number;
	};
	pageHeadingsSummary?: {
		h1?: number;
		h2?: number;
		h3?: number;
		h4?: number;
		h5?: number;
		h6?: number;
		h1Count?: number;
		h1Content?: any;
		focusKeywordsFoound?: number;
		keyword?: any;
		feedbackDetails?: {
			notFound?: any;
			focusKeyword?: any;
		};
		maxSEOScoreAvailable?: number;
		SEOScore?: number;
	};
	wordCount?: {
		inputUrl?: any;
		wordCountTotal?: any;
		correctedWordCount?: any;
		anchorTextWords?: any;
		anchorPercentage?: any;
		feedbackDetails?: {
			found?: any;
		};
		maxSEOScoreAvailable?: number;
		SEOScore?: number;
	};
	onPageLinksSummary?: {
		totalLinks?: number;
		externalLinks?: number;
		internalLinks?: number;
		noFollowCount?: number;
		duplicateLinks?: number;
		noAltTag?: number;
		feedbackDetails?: {
			found?: any;
		};
		maxSEOScoreAvailable?: number;
		SEOScore?: number;
	};
	imageAnalysis?: {
		numberOfImages?: number;
		imageNameContainsKeyword?: number;
		imageAltContainsKeyword?: number;
		keyword?: any;
		feedbackDetails?: {
			found?: any;
		};
		maxSEOScoreAvailable?: number;
		SEOScore?: number;
	};
	keywordDensity?: {
		keyword?: any;
		keywordDensity?: number;
		feedbackDetails?: {
			found?: any;
		};
		maxSEOScoreAvailable?: number;
		SEOScore?: number;
	};
}

configure({ isolateGlobalState: true });

/*
 * Instruct builder to require few settings before running the plugin code, for example when an apiKey for the service is required
 */
registerPlugin(
	{
		name: "SEOReview",
		id: pkg.name,
		settings: [
			{
				name: "apiKey",
				type: "string",
				helperText: "get the api key from your builder.io account settings",
				required: true,
			},
		],
		// Builder will notify plugin user to configure the settings above, and call this function when it's filled
		onSave: async (actions) => {
			// adds a new model, only once when the user has added their api key
			if (!getSEOReviewModel()) {
				actions.addModel(getSEOReviewModelTemplate());
			}
		},
		ctaText: `Connect using your API key`,
	},
	// settings is a map of the settings fields above
	async (settings) => {
		// press the vertical dots in the content editor to see this in action
		registerContentAction({
			label: "Request SEO Review",
			showIf(content, model) {
				console.log(
					"plugin: in Request SEO Review content action showIf",
					content,
					model
				);
				// content is the current content object in editor
				// model is the current model in editor
				return model.kind === "page";
			},
			async onClick(content) {
				const seoReviewModel = getSEOReviewModel();
				const seoReviewsApiKey = settings.get("apiKey");

				console.log(
					"plugin: clicked action, the user entered api key is ",
					seoReviewsApiKey
				);

				// get the whole html content, for example to send it for review
				const iframeHTMLContent = await getIframeHTMLContent();

				console.log("plugin: iframeHTMLContent", iframeHTMLContent);

				// fake seo review result
				const seoReviewResult = {
					title: "Foo bar",
					description: "paulo likes chocolate",
					keywords: ["hello", "world"],
				};

				// adds the result to the latest draft
				await appState.updateLatestDraft({
					id: content.id,
					modelId: content.modelId,
					data: {
						...fastClone(content.data),
						...seoReviewResult,
					},
				});

				// example for saving the result of seo review in a builder data model, for easier retrieval
				const seoReviewEntry = await appState.createContent(
					seoReviewModel.name,
					{
						name: `Data entry for seo review on content ${content.id}`,
						meta: {
							createdBy: pkg.name,
						},
						data: {
							description: seoReviewResult.description,
						},
					}
				);

				showReviewNotifications(seoReviewEntry.id);
			},
		});

		return {};
	}
);
