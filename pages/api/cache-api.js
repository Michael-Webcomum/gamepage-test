import useSWR from "swr";

baseUrl = "https://api.seoreviewtools.com/";

function getKeywords() {
	const { data, error } = useSWR(`https://api.seoreviewtools.com/`, fetcher);

	if (error) return <div>failed to load</div>;
	if (!data) return <div>loading...</div>;

	return <div></div>;
}
