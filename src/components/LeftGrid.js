import React from 'react';
import { DatePicker, Row, Col, Typography, Select } from 'antd';

export default function LeftGrid() {
    const { Title } = Typography;
    const { Option } = Select;
    const { RangePicker } = DatePicker;
    function handleChange(value) {
        console.log(`selected ${value}`);
    }

    return (

        <Col span={12} className='left-grid' >
            <Row><Title>Booking- per employee</Title></Row>
            <Row gutter={[50, 50]}>
                <Col>    <Select className='employee-input' defaultValue="lucy" onChange={handleChange}>
                    <Option value="jack">Jack</Option>
                    <Option value="lucy">Lucy</Option>
                    <Option value="disabled" disabled>
                        Disabled
      </Option>
                    <Option value="Yiminghe">yiminghe</Option>
                </Select></Col>
                <Col>  <Select className='employee-input' defaultValue="lucy" onChange={handleChange}>
                    <Option value="jack">Jack</Option>
                    <Option value="lucy">Lucy</Option>
                    <Option value="disabled" disabled>
                        Disabled
      </Option>
                    <Option value="Yiminghe">yiminghe</Option>
                </Select></Col>

            </Row>
            <Row gutter={[50, 50]} >
                <Col>    <Select className='employee-input' defaultValue="lucy" onChange={handleChange}>
                    <Option value="jack">Jack</Option>
                    <Option value="lucy">Lucy</Option>
                    <Option value="disabled" disabled>
                        Disabled
      </Option>
                    <Option value="Yiminghe">yiminghe</Option>
                </Select></Col>
                <Col>  <Select className='employee-input' defaultValue="lucy" onChange={handleChange}>
                    <Option value="jack">Jack</Option>
                    <Option value="lucy">Lucy</Option>
                    <Option value="disabled" disabled>
                        Disabled
      </Option>
                    <Option value="Yiminghe">yiminghe</Option>
                </Select></Col>

            </Row>
            <Row className='employee-info' align='middle'>
                <Col span={18} className="employee-info-title" >Employee:NAME</Col>
                <Col  >    <DatePicker picker="month" />
                </Col>
            </Row>
            <Row className="employee-info">
                <Col className='employee-info-left' span={12}>
                    <Row className="employee-info-heading">Total no of bookings</Row>
                    <Row className="green-border">
                        <Col>Workstation</Col>
                        <Col>Meeting Room</Col>
                    </Row>
                    <Row className="employee-info-heading">Total no of Cancelations</Row>
                    <Row className="green-border" >                        <Col>Workstation</Col>
                        <Col>Meeting Room</Col></Row>
                </Col>
                <Col className='employee-info-right' span={12}>
                    <Row className="employee-info-heading">Employee Department</Row>
                    <Row className="green-border">asdfasdf</Row>
                    <Row className="employee-info-heading">Employee Agility Level</Row>
                    <Row className="green-border">asdfasdf</Row> </Col>
            </Row>
        </Col>

    );
};
