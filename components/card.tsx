import { Builder } from "@builder.io/react";

interface CardProps {
	title?: any;
	cards?: any;
}

export const Card1 = ({ ...props }: CardProps) => {
	return (
		<div>
			{props.cards &&
				props.cards.length &&
				props.cards.map((card?: any) => (
					<div className="card">
						<div className="card-content">
							<h1>{card.name}</h1>
							<img src={card.image_url} alt="" />
							<div className="card-content-info">
								<p>{card.description}</p>
							</div>
						</div>
					</div>
				))}
		</div>
	);
};
