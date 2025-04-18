"use client";
import React, { useState, useEffect, useRef } from "react";
import { Input, Button, Spin, Typography, Alert, Card } from "antd";
import LayoutDashboard from "@/components/Layouts/Dashboard";
import { motion } from "framer-motion";
import { fetchAnswer } from "@/services/api";

const { TextArea } = Input;
const { Text } = Typography;

const IndexPage: React.FC = () => {
  const [question, setQuestion] = useState<string>("");
  const [answer, setAnswer] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [history, setHistory] = useState<
    { question: string; answer: string | null }[]
  >([]);

  const chatContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const storedHistory = JSON.parse(
      localStorage.getItem("chatHistory") || "[]"
    );
    if (storedHistory.length > 0) {
      setHistory(storedHistory);
    }
  }, []);

  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop =
        chatContainerRef.current.scrollHeight;
    }
  }, [history]);

  const handleAskQuestion = async () => {
    if (question.trim() === "") return;

    setLoading(true);
    setError(null);

    const newQuestion = question;
    const newAnswer = null;

    setHistory([...history, { question: newQuestion, answer: newAnswer }]);

    try {
      const data = await fetchAnswer(question);

      if (data.statusCode !== 200) {
        throw new Error("API error");
      }

      const newAnswer = data.data.answer;

      setAnswer(newAnswer);
      setHistory((prevHistory) => {
        const updatedHistory = [...prevHistory];
        updatedHistory[updatedHistory.length - 1].answer = newAnswer;
        return updatedHistory;
      });

      localStorage.setItem(
        "chatHistory",
        JSON.stringify([
          ...history,
          { question: newQuestion, answer: newAnswer },
        ])
      );

      setQuestion("");
    } catch (error: any) {
      setError(error.message || "Failed to fetch answer");
    } finally {
      setLoading(false);
    }
  };

  return (
    <LayoutDashboard>
      <div
        style={{
          padding: "20px",
          display: "flex",
          flexDirection: "column",
          height: "70vh",
        }}
      >
        <h2>Tanya AI</h2>

        {loading && <Spin style={{ display: "block", margin: "0 auto" }} />}
        {error && <Alert message={error} type="error" showIcon />}
        <div
          style={{
            flex: 1,
            overflowY: "auto",
            marginBottom: "20px",
            paddingBottom: "20px",
          }}
          ref={chatContainerRef}
        >
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

        <div
          style={{
            marginTop: "auto",
            display: "flex",
            flexDirection: "column",
            width: "100%",
          }}
        >
          <TextArea
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
            placeholder="Tanya sesuatu..."
            size="large"
            rows={4}
            style={{ marginBottom: "10px" }}
            disabled={loading}
            count={undefined}
            onClear={undefined}
          />
          <Button
            type="primary"
            onClick={handleAskQuestion}
            disabled={loading || question.trim() === ""}
            style={{ alignSelf: "flex-end" }}
          >
            Kirim
          </Button>
        </div>
      </div>
    </LayoutDashboard>
  );
};

export default IndexPage;
