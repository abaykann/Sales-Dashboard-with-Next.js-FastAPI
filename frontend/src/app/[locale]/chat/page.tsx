"use client";

import React, { useState, useEffect, useRef } from "react";
import { Spin, Alert } from "antd";
import LayoutDashboard from "@/components/Layouts/Dashboard";
import ChatHistory from "@/components/chat/ChatHistory";
import ChatInput from "@/components/chat/ChatInput";

import { fetchAnswer } from "@/services/api";

const IndexPage: React.FC = () => {
  const [question, setQuestion] = useState<string>("");
  const [answer, setAnswer] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [history, setHistory] = useState<{ question: string; answer: string | null }[]>([]);
  const chatContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const storedHistory = JSON.parse(localStorage.getItem("chatHistory") || "[]");
    if (storedHistory.length > 0) {
      setHistory(storedHistory);
    }
  }, []);

  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
    }
  }, [history]);

  const handleAskQuestion = async () => {
    if (question.trim() === "") return;

    setLoading(true);
    setError(null);

    // Menampilkan pertanyaan baru terlebih dahulu
    const newQuestion = question;
    setHistory([...history, { question: newQuestion, answer: null }]);

    try {
      const data = await fetchAnswer(question);

      const newAnswer = data.answer;

      setAnswer(newAnswer);
      setHistory((prevHistory) => {
        const updatedHistory = [...prevHistory];
        updatedHistory[updatedHistory.length - 1].answer = newAnswer;
        return updatedHistory;
      });

      localStorage.setItem("chatHistory", JSON.stringify([...history, { question: newQuestion, answer: newAnswer }]));

      setQuestion("");
    } catch (error: any) {
      setError(error.message || "Failed to fetch answer");
    } finally {
      setLoading(false);
    }
  };

  return (
    <LayoutDashboard>
      <div style={{ padding: "20px", display: "flex", flexDirection: "column", height: "70vh" }}>
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
          <ChatHistory history={history} />
        </div>

        <ChatInput
          question={question}
          setQuestion={setQuestion}
          handleAskQuestion={handleAskQuestion}
          loading={loading}
        />
      </div>
    </LayoutDashboard>
  );
};

export default IndexPage;
