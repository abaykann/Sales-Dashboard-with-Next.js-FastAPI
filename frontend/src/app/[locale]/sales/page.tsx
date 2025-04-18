// 'use client'

// import React, { useEffect, useState } from "react";
// import { theme, Modal, Spin, Row, Col, Space, Typography, Tag } from "antd";
// import { useDispatch, useSelector } from '@/services/redux';
// import { fetchSalesReps } from "@/services/redux/slices/salesSlice";
// import { selectSalesReps, selectSalesLoading, selectSalesError } from "@/services/redux/slices/salesSlice/selectors";
// import LayoutDashboard from "@/components/Layouts/Dashboard";
// import SalesRepCard from "@/components/card/SalesRepCard";
// import { LoadingOutlined } from '@ant-design/icons';
// import { Deal } from "@/types/types"; 


// const { Text } = Typography;

// const DashboardPage: React.FC = () => {
//   const { token } = theme.useToken();
//   const dispatch = useDispatch();
//   const pageme = 'Sales Representatives'

//   const salesReps = useSelector(selectSalesReps);
//   const loading = useSelector(selectSalesLoading);
//   const error = useSelector(selectSalesError);

//   const [isModalVisible, setIsModalVisible] = useState(false);
//   const [selectedRep, setSelectedRep] = useState<any>(null);

//   useEffect(() => {
//     dispatch(fetchSalesReps());
//   }, [dispatch]);

//   const handleCardClick = (rep: any) => {
//     setSelectedRep(rep);
//     setIsModalVisible(true);
//   };

//   const handleModalClose = () => {
//     setIsModalVisible(false);
//     setSelectedRep(null);
//   };

//   const renderDealStatus = (status: string) => {
//     switch (status) {
//       case 'Closed Won':
//         return <Tag color="success">{status}</Tag>;
//       case 'In Progress':
//         return <Tag color="warning">{status}</Tag>;
//       case 'Closed Lost':
//         return <Tag color="error">{status}</Tag>;
//       default:
//         return <Tag>{status}</Tag>;
//     }
//   };

//   return (
//     <LayoutDashboard>
//       <div>
//         <h2>{pageme}</h2>

//         {loading === 'loading' && <Spin indicator={<LoadingOutlined />} />}

//         {error && <Text type="danger">{`Error: ${error}`}</Text>}

//         {salesReps.length === 0 ? (
//           <Text>No sales representatives found.</Text>
//         ) : (
//           <Row gutter={[16, 16]} justify="start" style={{ marginBottom: '24px' }}>
//             {salesReps.map((rep) => (
//               <Col xs={24} sm={12} md={8} key={rep.id}>
//                 <SalesRepCard
//                   title={rep.name}
//                   extra={<Text>{rep.role}</Text>}
//                   content={
//                     <>
//                       <Text type="secondary">Region: {rep.region}</Text>
//                       <div>
//                         <p>Deals:</p>
//                         <Space direction="vertical">
//                           {rep.deals.map((deal, index: number) => (
//                             <Space key={index} style={{ display: 'flex', alignItems: 'center' }}>
//                               {renderDealStatus((deal as Deal).status)}
//                               <Text>Client: {(deal as Deal).client}</Text>
//                               <Text>Value: ${(deal as Deal).value}</Text>
//                             </Space>
//                           ))}
//                         </Space>
//                       </div>
//                     </>
//                   }
//                   footer={<Text strong>Detail</Text>}
//                   footerPosition="right"
//                   pointer={true}
//                   onClick={() => handleCardClick(rep)} 
//                 />
//               </Col>
//             ))}
//           </Row>
//         )}

//         <Modal
//           title={`${pageme} Details`} 
//           visible={isModalVisible}
//           onCancel={handleModalClose}
//           footer={null}
//           width={600}
//         >
//           {selectedRep && (
//             <SalesRepCard
//               title={selectedRep.name}
//               extra={<Text>{selectedRep.role}</Text>}
//               content={
//                 <>
//                   <h2>{selectedRep.name}</h2>
//                   <Text type="secondary">Region: {selectedRep.region}</Text>
//                   <br />
//                   <Text><strong>Clients:</strong></Text>
//                   <Space direction="vertical" style={{ width: '100%' }}>
//                     {selectedRep.clients.map((client: any, index: number) => (
//                       <Space key={index}>
//                         <Text>{client.name} ({client.industry})</Text>
//                         <Text>{client.contact}</Text>
//                       </Space>
//                     ))}
//                   </Space>
//                   <br />
//                   <Space direction="vertical" style={{ width: '100%' }}>
//                     {selectedRep.deals.map((deal: Deal, index: number) => (
//                       <Space key={index} style={{ display: 'flex', alignItems: 'center' }}>
//                         {renderDealStatus(deal.status)}
//                         <Text>Client: {deal.client}</Text>
//                         <Text>Value: ${deal.value}</Text>
//                       </Space>
//                     ))}
//                   </Space>
//                   <br />
//                   <strong>Skills:</strong> {selectedRep.skills.join(', ')}
//                 </>
//               }
//               useCard={false}
//             />
//           )}
//         </Modal>
//       </div>
//     </LayoutDashboard>
//   );
// };

// export default DashboardPage;


"use client";

import React, { useEffect, useState } from "react";
import { theme, Modal, Spin, Row, Col, Space, Typography, Tag } from "antd";
import { useDispatch, useSelector } from '@/services/redux';
import { fetchSalesReps } from "@/services/redux/slices/salesSlice";
import { selectSalesReps, selectSalesLoading, selectSalesError } from "@/services/redux/slices/salesSlice/selectors";
import LayoutDashboard from "@/components/Layouts/Dashboard";
import SalesRepCard from "@/components/card/SalesRepCard";
import { LoadingOutlined } from '@ant-design/icons';
import { Deal } from "@/types/types"; 
import { motion } from "framer-motion"; // Impor motion dari framer-motion

const { Text } = Typography;

const DashboardPage: React.FC = () => {
  const { token } = theme.useToken();
  const dispatch = useDispatch();
  const pageme = 'Sales Representatives'

  const salesReps = useSelector(selectSalesReps);
  const loading = useSelector(selectSalesLoading);
  const error = useSelector(selectSalesError);

  const [isModalVisible, setIsModalVisible] = useState(false);
  const [selectedRep, setSelectedRep] = useState<any>(null);

  useEffect(() => {
    dispatch(fetchSalesReps());
  }, [dispatch]);

  const handleCardClick = (rep: any) => {
    setSelectedRep(rep);
    setIsModalVisible(true);
  };

  const handleModalClose = () => {
    setIsModalVisible(false);
    setSelectedRep(null);
  };

  const renderDealStatus = (status: string) => {
    switch (status) {
      case 'Closed Won':
        return <Tag color="success">{status}</Tag>;
      case 'In Progress':
        return <Tag color="warning">{status}</Tag>;
      case 'Closed Lost':
        return <Tag color="error">{status}</Tag>;
      default:
        return <Tag>{status}</Tag>;
    }
  };

  return (
    <LayoutDashboard>
      <div>
        <h2>{pageme}</h2>

        {loading === 'loading' && <Spin indicator={<LoadingOutlined />} />}

        {error && <Text type="danger">{`Error: ${error}`}</Text>}

        {salesReps.length === 0 ? (
          <Text>No sales representatives found.</Text>
        ) : (
          <Row gutter={[16, 16]} justify="start" style={{ marginBottom: '24px' }}>
            {salesReps.map((rep) => (
              <Col xs={24} sm={12} md={8} key={rep.id}>
                <motion.div 
                  initial={{ opacity: 0, y: 20 }} 
                  animate={{ opacity: 1, y: 0 }} 
                  transition={{ duration: 0.5, delay: 0.1 * salesReps.indexOf(rep) }} // Delay sedikit untuk setiap kartu
                >
                  <SalesRepCard
                    title={rep.name}
                    extra={<Text>{rep.role}</Text>}
                    content={
                      <>
                        <Text type="secondary">Region: {rep.region}</Text>
                        <div>
                          <p>Deals:</p>
                          <Space direction="vertical">
                            {rep.deals.map((deal, index: number) => (
                              <Space key={index} style={{ display: 'flex', alignItems: 'center' }}>
                                {renderDealStatus((deal as Deal).status)}
                                <Text>Client: {(deal as Deal).client}</Text>
                                <Text>Value: ${(deal as Deal).value}</Text>
                              </Space>
                            ))}
                          </Space>
                        </div>
                      </>
                    }
                    footer={<Text strong>Detail</Text>}
                    footerPosition="right"
                    pointer={true}
                    onClick={() => handleCardClick(rep)} 
                  />
                </motion.div>
              </Col>
            ))}
          </Row>
        )}

        <Modal
          title={`${pageme} Details`} 
          visible={isModalVisible}
          onCancel={handleModalClose}
          footer={null}
          width={600}
        >
          {selectedRep && (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3 }}
            >
              <SalesRepCard
                title={selectedRep.name}
                extra={<Text>{selectedRep.role}</Text>}
                content={
                  <>
                    <h2>{selectedRep.name}</h2>
                    <Text type="secondary">Region: {selectedRep.region}</Text>
                    <br />
                    <Text><strong>Clients:</strong></Text>
                    <Space direction="vertical" style={{ width: '100%' }}>
                      {selectedRep.clients.map((client: any, index: number) => (
                        <Space key={index}>
                          <Text>{client.name} ({client.industry})</Text>
                          <Text>{client.contact}</Text>
                        </Space>
                      ))}
                    </Space>
                    <br />
                    <Space direction="vertical" style={{ width: '100%' }}>
                      {selectedRep.deals.map((deal: Deal, index: number) => (
                        <Space key={index} style={{ display: 'flex', alignItems: 'center' }}>
                          {renderDealStatus(deal.status)}
                          <Text>Client: {deal.client}</Text>
                          <Text>Value: ${deal.value}</Text>
                        </Space>
                      ))}
                    </Space>
                    <br />
                    <strong>Skills:</strong> {selectedRep.skills.join(', ')}
                  </>
                }
                useCard={false}
              />
            </motion.div>
          )}
        </Modal>
      </div>
    </LayoutDashboard>
  );
};

export default DashboardPage;

