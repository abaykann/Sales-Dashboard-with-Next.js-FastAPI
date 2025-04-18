'use client';
import React from "react";
import {theme} from "antd";
import LayoutDashboard from "@/components/Layouts/Dashboard";
import IconNotificationRing from "@/icons/notification-ring";

const DashboardPage : React.FC = () => {
    const {token} = theme.useToken();
    return (
        <LayoutDashboard>
            <h1>Dashboard</h1>
        </LayoutDashboard>
    )
}

export default DashboardPage;