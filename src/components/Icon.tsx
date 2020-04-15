import React from 'react';
import { Icon as IconBase } from 'tamia';

type IconInfo = {
	width?: number;
	height?: number;
	path?: string;
	children?: React.ReactElement;
};

const SIZE = 32;
const ICONS: { [key: string]: IconInfo } = {
	// Closed Eye by Adrien Coquet from the Noun Project
	// https://thenounproject.com/coquet_adrien/collection/eye/?i=1159225
	eyeClosed: {
		width: 100,
		height: 60,
		path:
			'M96 45.7l-4.4-6.2c1.2-1 2.2-1.9 2.8-2.6 1.2-1.2 1.2-3.1 0-4.2-1.2-1.2-3.1-1.2-4.2 0-3.7 3.7-17.5 15.6-40.1 15.6S13.7 36.3 10 32.7c-1.2-1.2-3.1-1.2-4.2 0-1.2 1.2-1.2 3.1 0 4.2.6.6 1.5 1.5 2.7 2.5L4 45.7c-1 1.4-.6 3.2.7 4.2.5.4 1.1.6 1.7.6.9 0 1.9-.4 2.5-1.3l4.4-6.1c2 1.4 4.4 2.9 7.2 4.3l-4.2 8.1c-.8 1.5-.2 3.3 1.3 4 .4.2.9.3 1.4.3 1.1 0 2.1-.6 2.7-1.6l4.3-8.4c2.4 1 5 1.8 7.9 2.5l-2.6 9.6c-.4 1.6.5 3.2 2.1 3.7.3.1.5.1.8.1 1.3 0 2.5-.9 2.9-2.2l2.7-10c2.3.4 4.8.6 7.3.7v11c0 1.6 1.3 3 3 3s3-1.4 3-3v-11c2.5-.1 5-.4 7.3-.7l2.7 10c.4 1.3 1.6 2.2 2.9 2.2.3 0 .5 0 .8-.1 1.6-.4 2.5-2.1 2.1-3.7l-2.6-9.6c2.8-.7 5.5-1.6 7.9-2.5l4.2 8.3c.5 1 1.6 1.6 2.7 1.6.5 0 .9-.1 1.4-.3 1.5-.8 2.1-2.6 1.3-4l-4.1-8c2.8-1.4 5.2-2.8 7.2-4.2l4.3 6c.6.8 1.5 1.3 2.4 1.3.6 0 1.2-.2 1.7-.6 1.3-1 1.6-2.9.7-4.2z',
	},
	// Eye by Adrien Coquet from the Noun Project
	// https://thenounproject.com/search/?q=eye&creator=1145943&i=1159227
	eyeOpen: {
		width: 100,
		height: 100,
		children: (
			<>
				<path d="M95.7 52.2c-.9-1.1-2.3-2.8-4.1-4.7l3.5-6.4c.8-1.4.2-3.2-1.2-4-1.4-.8-3.2-.2-4 1.2l-2.7 5c-2.2-1.9-4.7-3.8-7.6-5.7l3.4-8.8c.6-1.5-.2-3.2-1.7-3.8-1.5-.6-3.2.2-3.8 1.7l-3.1 8c-2.5-1.3-5.3-2.4-8.2-3.3l2.2-10.6c.3-1.6-.7-3.1-2.3-3.5-1.6-.3-3.1.7-3.5 2.3L60.4 30c-2.4-.5-4.9-.8-7.6-1V16.9c0-1.6-1.3-2.9-2.9-2.9S47 15.3 47 16.9V29c-2.6.1-5.2.5-7.6.9l-2.1-10.3c-.3-1.6-1.9-2.6-3.4-2.3-1.6.3-2.6 1.9-2.3 3.5l2.2 10.6c-2.9.9-5.7 2-8.2 3.3l-3.1-7.9c-.6-1.5-2.3-2.2-3.8-1.7-1.5.6-2.2 2.3-1.7 3.8l3.4 8.7c-2.9 1.8-5.4 3.8-7.6 5.6l-2.6-4.9c-.8-1.4-2.5-1.9-4-1.2-1.4.8-1.9 2.5-1.2 4l3.4 6.2c-1.9 2-3.4 3.7-4.3 4.9-2.4 3.1-2.4 7.4 0 10.5 4.2 5.4 19.7 23 45 23.3h1.4c25.3-.3 40.8-17.9 45-23.3 2.6-3.1 2.6-7.4.2-10.5zM8.9 59.1c-.8-1-.8-2.4 0-3.3 2.4-3.2 8.6-10.2 18.1-15.3-3.5 4.7-5.6 10.6-5.6 16.9 0 6.3 2.1 12.2 5.6 16.9-9.5-5-15.6-12-18.1-15.2zm41.8 21.1h-1.4c-12.2-.4-22-10.4-22-22.7 0-12.3 9.7-22.3 21.9-22.7h1.6c12.2.4 21.9 10.4 21.9 22.7 0 12.3-9.8 22.3-22 22.7zm40.4-21.1c-2.4 3.2-8.6 10.2-18.1 15.3 3.5-4.7 5.6-10.6 5.6-16.9 0-6.3-2.1-12.2-5.6-16.9 9.5 5.1 15.7 12.1 18.1 15.3.7.9.7 2.2 0 3.2z" />
				<path d="M50 43.4c-1.9 0-3.7.4-5.4 1.1 1.7.9 2.8 2.8 2.8 4.8 0 3.1-2.5 5.5-5.5 5.5-2.1 0-3.9-1.1-4.8-2.8-.7 1.7-1.1 3.5-1.1 5.4 0 7.7 6.3 14 14 14s14-6.3 14-14-6.3-14-14-14z" />
			</>
		),
	},
	// https://ionicons.com/
	play: {
		path:
			'M133,440a35.37,35.37,0,0,1-17.5-4.67c-12-6.8-19.46-20-19.46-34.33V111c0-14.37,7.46-27.53,19.46-34.33a35.13,35.13,0,0,1,35.77.45L399.12,225.48a36,36,0,0,1,0,61L151.23,434.88A35.5,35.5,0,0,1,133,440Z',
	},
	// https://ionicons.com/
	reset: {
		children: (
			<>
				<path
					d="M320,146s24.36-12-64-12A160,160,0,1,0,416,294"
					style={{
						fill: 'none',
						stroke: 'currentColor',
						strokeLinecap: 'round',
						strokeMiterlimit: 10,
						strokeWidth: 32,
					}}
				/>
				<polyline
					points="256 58 336 138 256 218"
					style={{
						fill: 'none',
						stroke: 'currentColor',
						strokeLinecap: 'round',
						strokeLinejoin: 'round',
						strokeWidth: 32,
					}}
				/>
			</>
		),
	},
	// https://ionicons.com/
	menu: {
		children: (
			<>
				<line
					x1="88"
					y1="152"
					x2="424"
					y2="152"
					style={{
						fill: 'none',
						stroke: 'currentColor',
						strokeLinecap: 'round',
						strokeMiterlimit: 10,
						strokeWidth: 48,
					}}
				/>
				<line
					x1="88"
					y1="256"
					x2="424"
					y2="256"
					style={{
						fill: 'none',
						stroke: 'currentColor',
						strokeLinecap: 'round',
						strokeMiterlimit: 10,
						strokeWidth: 48,
					}}
				/>
				<line
					x1="88"
					y1="360"
					x2="424"
					y2="360"
					style={{
						fill: 'none',
						stroke: 'currentColor',
						strokeLinecap: 'round',
						strokeMiterlimit: 10,
						strokeWidth: 48,
					}}
				/>
			</>
		),
	},
	// https://ionicons.com/
	close: {
		path:
			'M289.94,256l95-95A24,24,0,0,0,351,127l-95,95-95-95A24,24,0,0,0,127,161l95,95-95,95A24,24,0,1,0,161,385l95-95,95,95A24,24,0,0,0,385,351Z',
	},
};

export type IconName = keyof typeof ICONS;

type Props = {
	icon: IconName;
	size?: number;
};

export function Icon({ icon, size = SIZE }: Props) {
	const { path, children, width, height } = ICONS[icon];
	return (
		<IconBase
			viewBox={{
				width: width || 512,
				height: height || 512,
			}}
			width={size}
			height={size}
		>
			{children}
			{path && <path d={path} />}
		</IconBase>
	);
}
