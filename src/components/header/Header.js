import React, { Component } from "react";
import { View } from 'react-native';
import {
    Container,
    Header,
    Title,
    Content,
    Text,
    Button,
    Icon,
    Footer,
    FooterTab,
    Left,
    Right,
    Body
} from "native-base";
import styles from "./styles";

class HeaderComponent extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Header
                   
                    androidStatusBarColor="#dc2015"
                    iosBarStyle="light-content"
                >
                    {
                        this.props.menu ? (
                            <Left>
                                <Button
                                    transparent
                                    onPress={() => this.props.navigation.navigate("DrawerOpen")}
                                >
                                    <Icon name="ios-menu" />
                                </Button>
                            </Left>
                        ) : (
                            <Left>
                                <Button
                                    transparent
                                    onPress={() => {this.props.navigation.goBack()}}
                                >
                                    <Icon name="arrow-back" />
                                </Button>
                            </Left>
                        )
                    }
                    <Body>
                        <Title>{this.props.title}</Title>
                    </Body>
                    <Right>
                        {
                            // Show search button?
                            this.props.search ? (
                                <Button
                                    transparent
                                    onPress={() => this.props.navigation.navigate('Search')}
                                >
                                    <Icon name="search" />
                                </Button>
                            ) : null
                        }
                        {
                            this.props.share ? (
                                <Button
                                    transparent
                                    onPress={() => this.props.navigation.navigate('DrawerOpen')}
                                >
                                    <Icon name="share" />
                                </Button>
                            ) : null
                        }
                        {
                            this.props.notification ? (
                                <Button
                                    transparent
                                    onPress={() => { this.popupDialog.show() }}
                                >
                                    <Icon name="notifications" />
                                </Button>
                            ) : null
                        }
                    </Right>

                </Header>
            </View>
        )
    }
};
export default HeaderComponent;
