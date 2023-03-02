import { Builder } from "@builder.io/react";

export const Button = (props) => {
	return <>
	<button style={{ color: props.color }}>{props.title}</button>;
	</>
}
