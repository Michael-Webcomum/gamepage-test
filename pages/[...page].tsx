import React, { useState } from "react";
import { useRouter } from "next/router";
import {
	BuilderComponent,
	builder,
	Builder,
	useIsPreviewing,
} from "@builder.io/react";
import DefaultErrorPage from "next/error";
import Head from "next/head";
import "../components/heading";
import "../components/button";
import "../components/slider";
import "../components/card";
import "./seo/index";
import "../plugins/seoPlugin";
import SeoPageSWR from "./seo/index";
// import Seo from './seo/index';

// Replace with your Public API Key
builder.init("6c0d4021155d4cd3b77463a8a938bea8"); // Currently personal API Key

export async function getStaticProps({ params }) {
	// Fetch the builder content

	const page = await builder
		.get("page", {
			userAttributes: {
				urlPath: "/" + (params?.page?.join("/") || ""),
			},
		})
		.toPromise();

	return {
		props: {
			page: page || null,
		},
		revalidate: 5,
	};
}

export async function getStaticPaths() {
	// Get a list of all pages in builder
	const pages = await builder.getAll("page", {
		// We only need the URL field
		fields: "data.url",
		options: { noTargeting: true },
	});

	return {
		paths: pages.map((page) => `${page.data?.url}`),
		fallback: true,
	};
}

export default function Page({ page, data }) {
	const router = useRouter();
	const isPreviewing = useIsPreviewing();

	if (router.isFallback) {
		return <h1>Loading...</h1>;
	}

	if (!page && !isPreviewing) {
		// @ts-ignore
		return <DefaultErrorPage statusCode={404} />;
	}

	// Testing NextSEO Plugin and seeing if it works for SEO Review Tools API below - did not work as intended
	return (
		<div>
			<Head>
				<meta name="viewport" content="width=device-width, initial-scale=1" />
			</Head>

			<div>
				{/* Raw text to test whether or not the API can retrieve the content */}
				<head>
					<title>The Ultimate Guide to Content Marketing</title>
					<meta
						name="description"
						content="Discover how to create a successful content marketing strategy that will help you reach your audience and increase conversions"
					/>
				</head>
				<body>
					<h1>Content Marketing</h1>
					<p>
						Today, outbound marketing strategies (or anything that interrupts
						your audience members) aren’t as effective at resonating with and
						converting audience members as they once were. Content marketing is
						the process of planning, creating, distributing, sharing, and
						publishing content via channels such as social media, blogs,
						websites, podcasts, apps, press releases, print publications, and
						more. The goal is to reach your target audience and increase brand
						awareness, sales, engagement, and loyalty.{" "}
					</p>
				</body>

				{/* <h1>SEO Content Analysis URL</h1>
				<label htmlFor="endpoints">
					Choose an Endpoint
					<select name="endpoints" id="endpoints">
						<option value="contentAnalysis">Content Analysis</option>
						<option value="readabilityScore">Readability</option>
					</select>
				</label> */}
				{/* <form>
					<label className="title-url">Enter a URL</label>
					<input
						type="url"
						id="content-analysis-url"
						required
						placeholder="URL to analyze"
						className="input-url"
					/>
					<label className="title-url">Enter 3 Keywords</label>
					<input
						type="text"
						id="keyword1"
						required
						placeholder="Enter a keyword"
						className="input-url"
					/>
					{/* <input
						type="text"
						id="keyword2"
						required
						placeholder="Enter a keyword"
						className="input-url"
					/>
					<input
						type="text"
						id="keyword3"
						required
						placeholder="Enter a keyword"
						className="input-url"
					/> */}
				{/* <button type="submit" className="btn-url">
						Fetch Your Data
					</button>
				</form> */}

				<BuilderComponent model="page" content={page} /*data={user}*/ />
			</div>
		</div>
	);
}
