import React, { useEffect } from 'react';
import { useMachine } from '@xstate/react';
import { Box, Flex } from 'tamia';
import { TheButton } from '../components/TheButton';
import { WaterSlider } from '../components/WaterSlider';
import { Ingredients } from '../components/Ingredients';
import { Steps, Step } from '../components/Steps';
import { timerMachine } from '../machines/timerMachine';
import { recipe } from '../recipes/chemex';

export const MainScreen = () => {
	const { waterFrom, waterTo, waterDefault, brew } = recipe;
	const [
		{
			context: { waterAmount, elapsed },
			value: status,
		},
		send,
	] = useMachine(timerMachine);
	const { timer, coffeeAmount, steps } = brew({ waterAmout: waterAmount });

	useEffect(() => {
		send('UPDATE_WATER_AMOUNT', { value: waterDefault });
	}, [waterDefault]);

	useEffect(() => {
		send('UPDATE_DURATION', { value: timer });
	}, [timer]);

	return (
		<Flex as="main" flexDirection="column" gap="l">
			<Box>
				<WaterSlider
					min={waterFrom}
					max={waterTo}
					value={waterAmount}
					step={10}
					disabled={status === 'running'}
					onChange={value => {
						send('UPDATE_WATER_AMOUNT', {
							value,
						});
					}}
				/>
			</Box>
			<Box>
				<Flex justifyContent="center">
					<TheButton
						status={status === 'running' ? 'running' : 'paused'}
						duration={timer}
						elapsed={elapsed}
						onStart={() => send('TOGGLE')}
						onReset={() => send('TOGGLE')}
					/>
				</Flex>
			</Box>
			<Box>
				<Ingredients waterAmount={waterAmount} coffeeAmount={coffeeAmount} />
			</Box>
			<Box>
				<Flex as={Steps} flexDirection="column" gap="s">
					{steps.map((step, index) => (
						<Step key={index}>
							{Array.isArray(step) ? (
								<Flex justifyContent="space-between">
									<Box>{step[0]}</Box>
									<Box ml="s">{step[1]}</Box>
								</Flex>
							) : (
								step
							)}
						</Step>
					))}
				</Flex>
			</Box>
		</Flex>
	);
};
