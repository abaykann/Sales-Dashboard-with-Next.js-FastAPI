'use client';

import React from "react";
import {Layout} from "antd";

const { Footer} = Layout;

const DashboardFooter : React.FC = () => {
    return(
        <Footer style={{ textAlign: 'center' }}>©2025 Created with <span style={{color: "red"}}>♥</span></Footer>
    )
}

export default DashboardFooter