import React, { Component } from 'react';
import { Image } from "react-native";

import {
	Content,
	Text,
	List,
	ListItem,
	Icon,
	Container,
	Left,
	Right,
	Badge,
	Button,
	View,
	StyleProvider,
	getTheme,
	variables,
} from "native-base";
import styles from './styles';
import drawerCover from  '../../../img/logoMenu.png';
import logoCompany from '../../../img/koolsoft.png';
import drawerImage from "../../../img/hs1.jpg";

const datas = [
	{
		name: "Home",
		route: "Home",
		icon: "home"
	},
	{
		name: "Login",
		route: "Login",
		icon: "log-in",
	},
	{
		name: "Profile",
		route: "Profile",
		icon: "contact",
		bg: "#477EEA",
		
	},
	{
		name: "Feedback",
		route: "Feedback",
		icon: "checkmark-circle",
		bg: "#DA4437",
		types: "4",
	},
	{
		name: "AboutUs",
		route: "AboutUs",
		icon: "information-circle",
		bg: "#4DCAE0",
	},
	{
		name: "Support",
		route: "Support",
		icon: "call",
		bg: "#B89EF5",
		types: "5",
	},
	{
		name: "Setting",
		route: "Setting",
		icon: "settings",
		
	},
	
	{
		name: "Contact",
		route: "Contact",
		icon: "navigate",
	}
];

class Menu extends Component {
	constructor(props) {
		super(props);
		this.state = {
			shadowOffsetWidth: 1,
			shadowRadius: 4,
		};
	}

	render() {
		return (
			<Container>
				<Content bounces={false} style={{ flex: 1, backgroundColor: "#fff", top: -1 }}>
					<Image source={drawerCover} style={styles.drawerCover}>
						<Text> E-Learning Mobile</Text>
						<Image square style={styles.drawerImage} source={drawerImage} />
					</Image>
					<List
						dataArray={datas}
						renderRow={data =>
							<ListItem button noBorder onPress={() => this.props.navigation.navigate(data.route)}>
								<Left>
									<Icon active name={data.icon} style={{ color: "#777", fontSize: 26, width: 30 }} />
									<Text style={styles.text}>
										{data.name}
									</Text>
								</Left>
								{data.types &&
									<Right style={{ flex: 1 }}>
										<Badge
											style={{
												borderRadius: 3,
												height: 25,
												width: 72,
												backgroundColor: data.bg,
											}}
										>
											<Text style={styles.badgeText}>{`${data.types} New`}</Text>
										</Badge>
									</Right>}
							</ListItem>}
					/>
						<Text >KoolSoft Company 2017</Text>
						<Text>Version: 1.0.0</Text>
					<Image source={logoCompany} style={styles.drawerCover}>
					
					</Image>
				</Content>
			</Container>
		);
	}
}

export default Menu;
