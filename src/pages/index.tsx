import React from 'react';
import Link from 'next/link';
import { Box } from 'tamia';
import { App } from '../components/App';
import { Header } from '../components/Header';
import { IconButton } from '../components/IconButton';
import { Icon } from '../components/Icon';
import { MainScreen } from '../screens/MainScreen';

export const IndexPage = () => {
	return (
		<App>
			<Box mb="m">
				<Header
					title="Coffee timer"
					right={
						<Link href="/settings" passHref>
							<IconButton as="a" aria-label="About coffee timer">
								<Icon icon="menu" size={28} />
							</IconButton>
						</Link>
					}
				/>
			</Box>
			<MainScreen />
		</App>
	);
};

export default IndexPage;
