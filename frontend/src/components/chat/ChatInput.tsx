import React from "react";
import { Input, Button } from "antd";

const { TextArea } = Input;

interface ChatInputProps {
  question: string;
  setQuestion: React.Dispatch<React.SetStateAction<string>>;
  handleAskQuestion: () => void;
  loading: boolean;
}

const ChatInput: React.FC<ChatInputProps> = ({ question, setQuestion, handleAskQuestion, loading }) => {
  return (
    <div style={{ marginTop: "auto", display: "flex", flexDirection: "column", width: "100%" }}>
      <TextArea
        value={question}
        onChange={(e) => setQuestion(e.target.value)}
        placeholder="Tanya sesuatu..."
        size="large"
        rows={4}
        style={{ marginBottom: "10px" }}
        disabled={loading}
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
  );
};

export default ChatInput;
