import React from 'react';
import { Card, Space, Tag, Typography } from 'antd';
import { Deal } from "@/types/types";



const renderDealStatus = (status: string) => {
  const statusColors: Record<string, string> = {
    'Closed Won': 'success',
    'In Progress': 'warning',
    'Closed Lost': 'error',
  };
  
  return <Tag color={statusColors[status] || 'default'}>{status}</Tag>;
};

interface SalesRepCardProps {
  title: string;
  extra?: React.ReactNode;
  content: React.ReactNode;
  footer?: React.ReactNode;
  footerPosition?: 'left' | 'right';
  pointer?: boolean;
  useCard?: boolean;
  bordered?: boolean;
  hoverable?: boolean;
  style?: React.CSSProperties;
  onClick?: () => void;
}

const SalesRepCard: React.FC<SalesRepCardProps> = ({
  title,
  extra,
  content,
  footer,
  footerPosition = 'right',
  pointer = false,
  useCard = true,
  bordered = true,
  hoverable = false,
  style = {},
  onClick
}) => {
  const cardStyle = {
    width: '100%',
    marginBottom: '16px',
    borderRadius: '10px',
    boxShadow: useCard ? '0 4px 8px rgba(0, 0, 0, 0.1)' : 'none',
    cursor: pointer ? 'pointer' : 'default',
    ...style,
  };

  const footerStyle = {
    display: 'flex',
    justifyContent: footerPosition === 'right' ? 'flex-end' : 'flex-start',
    paddingTop: '12px',
    cursor: pointer ? 'pointer' : 'default',
  };

  const ContentWrapper = (
    <Space direction="vertical" size={12} style={{ width: '100%' }}>
      {content}
    </Space>
  );

  if (useCard) {
    return (
      <Card
        title={title}
        extra={extra}
        bordered={bordered}
        hoverable={hoverable}
        style={cardStyle}
        onClick={onClick}
      >
        {ContentWrapper}
        {footer && <div style={footerStyle}>{footer}</div>}
      </Card>
    );
  }

  return (
    <div style={cardStyle} onClick={onClick}>
      {ContentWrapper}
      {footer && <div style={footerStyle}>{footer}</div>}
    </div>
  );
};

export default SalesRepCard;
