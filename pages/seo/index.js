import { useState } from 'react';
import useSWR from 'swr';

// export async function getStaticProps() {
// 	const res = await fetch(
// 		'https://api.seoreviewtools.com/keyword-suggestions/?keyword=marketing&google=us&key=as-sdf-fvhgffdgjkh87349hlm768'
// 	);
// 	const json = await res.json();

// 	return {
// 		props: {
// 			data: json.data,
// 		},
// 	};
// }

// function Seo({ data }) {
// 	return (
// 		<>
// 			<div>
// 				<h2>SEO Suggestions</h2>
// 				<h2>Keyword: {data.keyword}</h2>
// 				<h2>Competition: {data.competition}</h2>
// 				<h2>Cost Per Click: {data.cpc}</h2>
// 				<h2>Search Volume: {data.search_volume}</h2>
// 			</div>
// 		</>
// 	);
// }

const fetcher = async () => {
	const baseUrl = 'https://api.seoreviewtools.com/keyword-suggestions/';

	const apiKey = 'as-sdf-fvhgffdgjkh87349hlm768';
	const keywordInput = 'Marketing';
	const language = 'English';
	const location = 'United States';

	let data = await fetch(
		'https://api.seoreviewtools.com/keyword-suggestions/?keyword=marketing&google=us&key=as-sdf-fvhgffdgjkh87349hlm768',
		{ mode: 'no-cors' }
	)
		.then((res) => {
			return res.json();
		})
		.catch((err) => {
			console.log('Error: ', err);
		});
	return data;
};

// 	let data = await (fetch(
// 		'https://api.seoreviewtools.com/keyword-suggestions-fast/?keyword=marketing&google=us&key=as-sdf-fvhgffdgjkh87349hlm768'
// 	)
// 		.then((res) => {
// 			return res.json();
// 		})
// 		.catch((err) => {
// 			console.log('Error: ', err);
// 		});
// 	))
// 	return data;
// };

fetcher();

function SeoPageSWR({ fetcher }) {
	const { data, error } = useSWR('seoSuggest', fetcher);

	console.log(data);

	if (error) return 'An error has occurred';
	if (!data) return 'Loading';

	return (
		<div>
			<h2>Title</h2>
			<h2>Keyword: {data.keyword}</h2>
			<h2>Competition: {data.competition}</h2>
			<h2>Cost Per Click: {data.cpc}</h2>
			<h2>Search Volume: {data.search_volume}</h2>
		</div>
	);
}

// function SeoPage() {
// 	let baseUrl =
// 		'https://api.seoreviewtools.com/documentation/keyword-apis/keyword-suggestions-api/';

// 	let apiKey = 'as-sdf-fvhgffdgjkh87349hlm768';
// 	let keywordInput = 'INSERT KEYWORDS';
// 	let language = 'English';
// 	let location = 'United States';

// 	// const [seo, setSeo] = useState([]);

// 	const fetchSeo = async () => {
// 		const response = await fetch(
// 			`${baseUrl}?keyword=${keywordInput}&hl=${language}&location=${location}&key=${apiKey}`,
// 			{ mode: 'no-cors' }
// 		);
// 		const data = await response.json();
// 		setSeo(data);
// 	};
// 	return (
// 		<>
// 			<button onClick={fetchSeo}>Load SEO</button>
// 			{seo.map((seo) => {
// 				return (
// 					<div key={seo.keyword}>
// 						{seo.keyword} {seo.competition}
// 					</div>
// 				);
// 			})}
// 		</>
// 	);
// }

// export default SeoPage;
export default SeoPageSWR;
// export default Seo;
