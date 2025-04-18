import React from "react";
import { Card, Typography } from "antd";
import { motion } from "framer-motion"; 

const { Text } = Typography;

interface ChatHistoryProps {
  history: { question: string; answer: string | null }[];
}

const ChatHistory: React.FC<ChatHistoryProps> = ({ history }) => {
  return (
    <div>
      {history.map((chat, index) => (
        <div key={index} style={{ marginTop: "20px" }}>
          <motion.div
            initial={{ opacity: 0, y: 20 }} 
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Card
              title="Pertanyaan Anda"
              style={{
                width: "100%",
                margin: "0 auto",
                backgroundColor: "#f7f7f7",
                padding: "20px",
                marginBottom: "10px",
              }}
            >
              <Text strong>{chat.question}</Text>
            </Card>
          </motion.div>

          {chat.answer && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Card
                title={<div style={{ textAlign: "right" }}>Jawaban AI</div>}
                style={{
                  width: "100%",
                  margin: "0 auto",
                  backgroundColor: "#e8f4f8",
                  padding: "20px",
                  marginBottom: "10px",
                }}
              >
                <Text
                  strong
                  style={{
                    textAlign: "right",
                    display: "block",
                  }}
                >
                  {chat.answer}
                </Text>
              </Card>
            </motion.div>
          )}
        </div>
      ))}
    </div>
  );
};

export default ChatHistory;
