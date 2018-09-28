import React, {Component} from 'react';
import {Button, Calendar, message, Modal, Popconfirm} from 'antd';


function onPanelChange(value, mode) {
    console.log(value, mode);

}

const text = 'Are you sure to book for this time?';



class Honda extends Component {
    constructor(props) {
        super(props);
        console.log("props",props.match)
        this.state = ({
            client:"honda",
            visible: false,
            morningTimings: ['6:00-7:00','7:00-8:00', '8:00-9:00', '9:00-10:00'],
            afternoonTiming: ['10:00-11:00','11:00-12:00', '12:00-13:00', '13:00-14:00','14:00-15:00', '15:00-16:00', '16:00-17:00'],
            eveningTiming: ['17:00-18:00','18:00-19:00', '19:00-20:00', '20:00-21:00', '21:00-22:00'],
            bookedTiming:""
        })
    }

    disabledDate = (current) => {
        let today = new Date();
        let yesterday = new Date(today.setDate(today.getDate() - 1))
        // Can not select days before today
        return current < yesterday;
    };
    showModal = () => {
        this.setState({
            visible: true
        })
    };
   confirm=(e)=> {

       console.log(this.state.bookedTiming);
       // console.log(e.target)
        message.info('Booking Confirmed' );
    };
   onClick(e,id){
       e.preventDefault();
       this.setState({
           bookedTiming: id
       });
   }
    handleCancel = (e) => {
        console.log(e);
        this.setState({
            visible: false,
        });
    };

    render() {
        return (
            <div>
                <Calendar onPanelChange={onPanelChange} onSelect={this.showModal} disabledDate={this.disabledDate}/>
                <Modal
                    title="Book time"
                    visible={this.state.visible}
                    onOk={this.handleOk}
                    onCancel={this.handleCancel}
                >
                    <span>Morning:</span>
                    <div style={{marginLeft: 90, whiteSpace: 'nowrap'}}>

                        <Popconfirm placement="topLeft" title={text}  onConfirm={this.confirm} okText="Book" cancelText="No">
                            <Button onClick={(e)=>this.onClick(e,"sixToSeven")} style={{margin: "3px"}}>6:00-7:00</Button>
                        </Popconfirm>
                        <Popconfirm placement="top" title={text} onConfirm={this.confirm} okText="Yes" cancelText="No">
                            <Button onClick={(e)=>this.onClick(e,"sevenToEight")} style={{margin: "3px"}}>7:00-8:00</Button>
                        </Popconfirm>
                        <Popconfirm placement="topRight" title={text} onConfirm={this.confirm} okText="Yes" cancelText="No">
                            <Button onClick={(e)=>this.onClick(e,"eightToNine")} style={{margin: "3px"}}>8:00-9:00</Button>
                        </Popconfirm>
                    </div>
                    <div style={{marginLeft: 90, whiteSpace: 'nowrap'}}>
                        <Popconfirm placement="topRight" title={text} onConfirm={this.confirm} okText="Yes" cancelText="No">
                            <Button onClick={(e)=>this.onClick(e,"nineToTen")} style={{margin: "3px"}}>9:00-10:00</Button>
                        </Popconfirm>
                    </div>
                    <span style={{marginLeft: "3px", marginTop: "20px"}}>Afternoon:</span>
                    <div style={{marginLeft: 90, whiteSpace: 'nowrap'}}>

                        <Popconfirm placement="topLeft" title={text} onConfirm={this.confirm} okText="Yes" cancelText="No">
                            <Button onClick={(e)=>this.onClick(e,"tenToEleven")} style={{margin: "3px"}}>10:00-11:00</Button>
                        </Popconfirm>
                        <Popconfirm placement="top" title={text} onConfirm={this.confirm} okText="Yes" cancelText="No">
                            <Button onClick={(e)=>this.onClick(e,"elevenToTwelve")} style={{margin: "3px"}}>11:00-12:00</Button>
                        </Popconfirm>
                        <Popconfirm placement="topRight" title={text} onConfirm={this.confirm} okText="Yes" cancelText="No">
                            <Button onClick={(e)=>this.onClick(e,"twelveToThirteen")} style={{margin: "3px"}}>12:00-13:00</Button>
                        </Popconfirm>


                    </div>
                    <div style={{marginLeft: 90, whiteSpace: 'nowrap'}}>
                        <Popconfirm placement="topRight" title={text} onConfirm={this.confirm} okText="Yes" cancelText="No">
                            <Button onClick={(e)=>this.onClick(e,"thirteenToFourteen")} style={{margin: "3px"}}>13:00-14:00</Button>
                        </Popconfirm>
                        <Popconfirm placement="topRight" title={text} onConfirm={this.confirm} okText="Yes" cancelText="No">
                            <Button onClick={(e)=>this.onClick(e,"fourteenToFifteen")} style={{margin: "3px"}}>14:00-15:00</Button>
                        </Popconfirm>
                        <Popconfirm placement="topRight" title={text} onConfirm={this.confirm} okText="Yes" cancelText="No">
                            <Button onClick={(e)=>this.onClick(e,"fifteenToSixteen")} style={{margin: "3px"}}>15:00-16:00</Button>
                        </Popconfirm>
                    </div>
                    <div style={{marginLeft: 90, whiteSpace: 'nowrap'}}>
                        <Popconfirm placement="topRight" title={text} onConfirm={this.confirm} okText="Yes" cancelText="No">
                            <Button onClick={(e)=>this.onClick(e,"sixteenToSeventeen")}style={{margin: "3px"}}>16:00-17:00</Button>
                        </Popconfirm>
                    </div>

                    <span style={{marginLeft: "3px", marginTop: "20px"}}>Evening:</span>
                    <div style={{marginLeft: 90, whiteSpace: 'nowrap'}}>

                        <Popconfirm placement="topLeft" title={text} onConfirm={this.confirm} okText="Yes" cancelText="No">
                            <Button onClick={(e)=>this.onClick(e,"seventeenToEighteen")} style={{margin: "3px"}}>17:00-18:00</Button>
                        </Popconfirm>
                        <Popconfirm placement="top" title={text} onConfirm={this.confirm} okText="Yes" cancelText="No">
                            <Button onClick={(e)=>this.onClick(e,"eighteenToNineteen")} style={{margin: "3px"}}>18:00-19:00</Button>
                        </Popconfirm>
                        <Popconfirm placement="topRight" title={text} onConfirm={this.confirm} okText="Yes" cancelText="No">
                            <Button onClick={(e)=>this.onClick(e,"nineteenToTwenty")}  style={{margin: "3px"}}>19:00-20:00</Button>
                        </Popconfirm>


                    </div>
                    <div style={{marginLeft: 90, whiteSpace: 'nowrap'}}>

                        <Popconfirm placement="topRight" title={text} onConfirm={this.confirm} okText="Yes" cancelText="No">
                            <Button onClick={(e)=>this.onClick(e,"twentyToTwentyOne")} style={{margin: "3px"}}>20:00-21:00</Button>
                        </Popconfirm>
                        <Popconfirm placement="topRight" title={text} onConfirm={this.confirm} okText="Yes" cancelText="No">
                            <Button onClick={(e)=>this.onClick(e,"twentyOneToTwenty")} style={{margin: "3px"}}>21:00-22:00</Button>
                        </Popconfirm>
                    </div>
                </Modal>
            </div>
        );
    }
}

export default Honda;