import React, { createElement } from 'react';
import { View, TouchableWithoutFeedback } from 'react-native';

import Styles from './bottom-tab.style';

const BottomTab = ({
	activeTintColor,
	descriptors,
	inactiveTintColor,
	navigation,
	state,
}) => {
	return (
		<View style={Styles.container}>
			{state.routes.map((route, index) => {
				const { options } = descriptors[route.key];

				const isFocused = state.index === index;

				const color = isFocused ? activeTintColor : inactiveTintColor;

				const onPress = () => {
					const event = navigation.emit({
						type: 'tabPress',
						target: route.key,
						canPreventDefault: true,
					});

					if (!isFocused && !event.defaultPrevented) {
						navigation.navigate(route.name);
					}
				};

				const onLongPress = () => {
					navigation.emit({
						type: 'tabLongPress',
						target: route.key,
					});
				};

				return (
					<TouchableWithoutFeedback
						onPress={onPress}
						onLongPress={onLongPress}
						key={route.name}>
						<View style={Styles.button}>
							{createElement(options.tabBarIcon, {
								color,
								focused: isFocused,
								size: 30,
							})}
						</View>
					</TouchableWithoutFeedback>
				);
			})}
		</View>
	);
};

export { BottomTab };