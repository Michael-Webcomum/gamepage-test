import { Builder } from "@builder.io/react";
import { Card1 } from "../components/card";

interface CardItemProps {
	title?: any;
	cards: any;
}

export const CardItem = ({ ...props }: CardItemProps) => {
	return <Card1 title={props.title} cards={props.cards} />;
};
