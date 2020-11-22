import React from 'react';
import { Button, Calendar, Checkbox, Image, Row, Col, Typography, Select } from 'antd';

export default function RightGrid() {
    const { Option } = Select;
    function handleChange(value) {
        console.log(`selected ${value}`);
    }
    function onPanelChange(value, mode) {
        console.log(value, mode);
    }
    function onChange(e) {
        console.log(`checked = ${e.target.checked}`);
    }
    return (

        <Col span={12} className='left-grid' >
            <Row >
                <Col className='form-container' span={10}>
                    <Row ><Col span={24}> <Select className='form-input' defaultValue="Booking Date" onChange={handleChange}>
                    </Select></Col></Row>
                    <Row ><Col span={24}> <Select className='form-input' defaultValue="Site/Location" onChange={handleChange}>
                    </Select></Col></Row>
                    <Row><Col span={12}> <Select className='form-input' defaultValue="Start Time" onChange={handleChange}>
                    </Select></Col><Col span={12}> <Select className='form-input' defaultValue="End Time" onChange={handleChange}>
                    </Select></Col></Row>
                    <Row>
                        <Col span={8}> <Select className='form-input' defaultValue="Floor" onChange={handleChange}>
                        </Select></Col>
                        <Col span={8}><Checkbox className='form-checkbox' onChange={onChange}>Parking</Checkbox></Col>
                        <Col className='all-day' span={6}><Checkbox  onChange={onChange}>All Day</Checkbox></Col></Row>
                    <Row><Col span={12}> <Select className='form-input' defaultValue="Seat" onChange={handleChange}>
                    </Select></Col><Col span={12}>    <Button className='button'>Search</Button>
                        </Col></Row>

                </Col>
                <Col span={14}> <Image
                 className='map'
                    width={450}
                    src="./map.jpg"
                /></Col>

            </Row>
            <Row>
                <Calendar className='calendar' fullscreen={false} onPanelChange={onPanelChange} />


            </Row>
        </Col>

    );
};
