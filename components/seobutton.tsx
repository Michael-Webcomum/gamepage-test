import { Builder } from "@builder.io/sdk";
import { NextPage } from "next";

interface Props {
	userAgent?: string;
}

const Page: NextPage<Props> = ({ userAgent }) => (
	<main>SEO Suggestion: {userAgent}</main>
);

Page.getInitialProps = async ({ req }) => {
	const userAgent = req ? req.headers["keyword"] : navigator.userAgent;
	return { userAgent };
};

// export const SeoButton = (props) => {
// 	return <main>Hello I'm {props}</main>;
// };
