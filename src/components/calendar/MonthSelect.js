import React from 'react';
import {Button, Typography} from 'antd';
import { MonthNames } from "../../utils";
import { connect } from 'react-redux'
import { StepBackwardOutlined, StepForwardOutlined } from "@ant-design/icons"
import { plusMonth, minusMonth } from '../redux/actions/selectedMonth'

const MonthSelect = ({plusMonth,minusMonth, selectedMonth}) => {

    const {Text} = Typography; 

    let currentMonthName = MonthNames[selectedMonth.getMonth()];
    let currentYear = selectedMonth.getFullYear();


    return <div className="month-changer">
        <Button size = "small" onClick={minusMonth} ><StepBackwardOutlined /></Button>
        <Text strong className="month-changer_title">{currentMonthName + ", " + currentYear}</Text>
        <Button size = "small" onClick={plusMonth} ><StepForwardOutlined /></Button>
    </div>;
}

export default connect((store) => ({
    selectedMonth: store.selectedMonth
}),{plusMonth,minusMonth})(MonthSelect);
