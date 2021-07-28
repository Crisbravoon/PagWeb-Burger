import React from "react";
import { Card, Button } from "react-bootstrap";
import "./CardBurger.css";

const CardBurger = () => {
	const CardInfo = [
		{
			image:
				"https://tofuu.getjusto.com/orioneat-prod-resized/r6AgkEHcKTpo3248o-350-350.webp",
			title: "The classic burger doble",
			text: "Ingredientes: Queso cheddar, cebolla.",
			value: "$7.800",
		},
		{
			image:
				"https://tofuu.getjusto.com/orioneat-prod-resized/CGGwHPukyqKRY6Dht-350-350.webp",
			title: "Bacon onion doble",
			text: "Ingredientes: Cebolla grillada, tocino.",
			value: "$8.000",
		},
		{
			image:
				"https://tofuu.getjusto.com/orioneat-prod-resized/rxKLZRuRj8WJfWKfw-350-350.webp",
			title: "Jalapeño cheddar doble",
			text: "Ingredientes: Cheddar, jalapeño.",
			value: "$8.500",
		},
		{
			image:
				"https://tofuu.getjusto.com/orioneat-prod-resized/Qn94nBp7rDwz25xEa-350-350.webp",
			title: "Cheese burger doble",
			text: "Ingredientes: Queso cheddar, pepinillos.",
			value: "$6.500",
		},
		{
			image:
				"https://tofuu.getjusto.com/orioneat-prod-resized/LWDxJJS7jKEt8Ledg-350-350.webp",
			title: "Blue cheese doble",
			text: "Ingredientes: Queso azul, rúcula.",
			value: "$7.200",
		},
		{
			image:
				"https://tofuu.getjusto.com/orioneat-prod-resized/zkuobpSChbnZnZ6yd-350-350.webp",
			title: "American style doble",
			text: "Ingredientes: aros de cebolla.",
			value: "$6.800",
		},
		{
			image:
				"https://tofuu.getjusto.com/orioneat-prod-resized/HzDwN2yECFBmoobFd-350-350.webp",
			title: "Crispy Onion Doble",
			text: "Ingredientes: Cheddar, mayonesa.",
			value: "$8.200",
		},
		{
			image:
				"https://tofuu.getjusto.com/orioneat-prod-resized/t9BrScJuMaFnzMQqg-350-350.webp",
			title: "Oklahoma Burger Doble",
			text: "Nuestra hamburguesa presionada sobre una.",
			value: "$7.500",
		},
		{
			image:
				"https://tofuu.getjusto.com/orioneat-prod-resized/BAtARpLRMCHGRG6Tb-350-350.webp",
			title: "Fried chicken burger",
			text: "Ingredientes: Empanizado de la casa, coleslaw, cebolla morada.",
			value: "$7.900",
		},
	];
	const RenderCard = (card, index) => {
		return (
			<div className=" row col-sm-5  col-md-5 mt-5 mb-4 ml-4" key={index}>
				<Card className="CardBurger" xs={12} sm={12} xl={12}>
					<Card.Body className="CardBody">
						<Card.Img className="CardImg m-0" src={card.image} />
						<div className="details">
							<Card.Title className="CardText m-0">{card.title}</Card.Title>
							<Card.Text className="CardText m-0">{card.text}</Card.Text>
							<Card.Text className="mt-2">{card.value}</Card.Text>
							<Button className="BtnCarrito col-sm-5">Agregar</Button>
						</div>
					</Card.Body>
				</Card>
			</div>
		);
	};
	return <div className="row col-8">{CardInfo.map(RenderCard)}</div>;
};

export default CardBurger;
