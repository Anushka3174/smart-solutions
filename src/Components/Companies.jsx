import React, { Component } from 'react';
import {List, message, Avatar, Spin, Input, Card} from 'antd';
import InfiniteScroll from 'react-infinite-scroller';
import {Link} from "react-router-dom";
const data = [
    {
        id:'honda',
        title: 'Honda',

    },
    {
        id:'yamaha',
        title: 'Yamaha',
    },
    {
        id:'bajaj',
        title: 'Bajaj',
    },
    {
        id:'hero',
        title: 'Hero',
    },
];
class Companies extends Component {
constructor(props){
    super(props);
    console.log("props",props.location.state.userDetail)

}
    render() {
        return (
            <div>
                <Card style={{marginTop:"100px"}}>
                <List
                    itemLayout="horizontal"
                    dataSource={data}
                    renderItem={item => (
                        <List.Item>
                            <List.Item.Meta
                               avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
                               title={<Link to={{pathname: "/" + item.id }}>{item.title}</Link>}
                            />
                        </List.Item>
                    )}
                />
                </Card>

            </div>
     );
    }
}
export default Companies;