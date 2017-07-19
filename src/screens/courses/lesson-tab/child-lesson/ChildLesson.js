import React from 'react';
import { View } from 'react-native';
import {
    Button,
    Text,
    Container,
    Card,
    CardItem,
    Body,
    Content,
    Header,
    Title,
    Left,
    Icon,
    Right,
    Tab,
    Tabs
} from 'native-base';
import Description from './child-lesson-description-tab';
import Lesson from './child-lesson-list';
import Discussion from './child-lesson-disscussion-tab';



export default class ChildLesson extends React.Component {


    render() {
        //console.log('ChildLesson', this.props.navigation.state.params)
        return (
            <Container >
                <Header hasTabs>
                    <Left>
                        <Button
                            transparent
                            onPress={() => this.props.navigation.goBack()}
                        >
                            <Icon name="md-arrow-round-back" />
                        </Button>
                    </Left>
                    <Body style={{maxWidth: 100}}>
                        <Title>{this.props.navigation.state.params.title}</Title>
                    </Body>
                    <Right>
                        <Button
                            transparent
                            onPress={() => this.props.navigation.navigate('DrawerOpen')}
                        >
                            <Icon name="notifications" />
                        </Button>
                    </Right>

                </Header>
                <Tabs >
                    <Tab heading="Description" textStyle={{ fontSize: 10 }} activeTextStyle={{ fontSize: 12 }} >
                        <Description 
                            navigation={this.props.navigation}
                            description={this.props.navigation.state.params.description} 
                        />
                    </Tab>
                    <Tab heading="Lesson" textStyle={{ fontSize: 10 }} activeTextStyle={{ fontSize: 12 }}>
                        <Lesson navigation={this.props.navigation} />
                    </Tab>
                     <Tab heading="Discussion" textStyle={{ fontSize: 10 }} activeTextStyle={{ fontSize: 12 }}>
                        <Discussion navigation={this.props.navigation} />
                    </Tab>


                </Tabs>


            </Container>
        );
    }
}