import React from "react";
import { useForm } from "react-hook-form";
import "../App.css";

const LoginForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <form className="form-container" onSubmit={handleSubmit(onSubmit)}>
      <div className="form-group">
        <label>이메일:</label>
        <input
          {...register("email", { required: true, pattern: /^\S+@\S+$/i })}
        />
        {errors.email && <p>유효한 이메일을 입력해 주세요.</p>}
      </div>
      <div className="form-group">
        <label>비밀번호:</label>
        <input
          type="password"
          {...register("password", { required: true, minLength: 6 })}
        />
        {errors.password && <p>비밀번호는 최소 6자 이상이어야 합니다.</p>}
      </div>
      <button type="submit">로그인</button>
    </form>
  );
};

export default LoginForm;
