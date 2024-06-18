import React from "react";
import "./App.css";
import SignupForm from "./components/SignupForm";
import LoginForm from "./components/LoginForm";
import ProfileForm from "./components/ProfileForm";
import ReviewForm from "./components/ReviewForm";
import BookForm from "./components/BookForm";

function App() {
  return (
    <div className="App">
      <h1>회원가입</h1>
      <SignupForm />
      <h1>로그인</h1>
      <LoginForm />
      <h1>프로필 수정</h1>
      <ProfileForm />
      <h1>리뷰 작성</h1>
      <ReviewForm />
      <h1>도서 추가</h1>
      <BookForm />
      <h1>도서 수정</h1>
      <BookForm isEditing={true} />
    </div>
  );
}

export default App;
