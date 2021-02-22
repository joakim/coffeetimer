import { BrewRecipe } from '../types/BrewRecipe';

// Based on https://www.youtube.com/watch?v=AI4ynXzkSQo&t=484s

// Non-breaking space
const nbsp = ' ';

const round = (value: number) => Math.ceil(value / 10) * 10;

const ml = (value: number) => `${round(value)}${nbsp}ml`;

export const recipe: BrewRecipe = {
	waterFrom: 250,
	waterTo: 1000,
	waterDefault: 500,
	ratioDefault: 1000 / 60, // 16.6666666666
	brew: ({ waterAmount, ratio }) => {
		//const timer = 45;
		const coffeeAmount = Math.round(waterAmount / ratio);
		const bloom = round(coffeeAmount * 2);
    const main = round(waterAmount * 0.6) - bloom;
    const remaining = round(waterAmount - main);
		return {
			timer,
			coffeeAmount,
			steps: [
				[45, `Pour ${ml(bloom)} of water, swirl`, ml(bloom)],
				[30, `Pour ${ml(main)} of water`, ml(main)],
				[30, `Pour ${ml(remaining)} of the water`, ml(remaining)],
				[30, `Stir 1 x clockwise and 1 x anticlockwise with a spoon`],
        [30, `Give the V60 a gentle swirl`],
        [45, `Wait`],
				[0, `Enjoy your coffee!`, `☕️`],
			],
		};
	},
};
