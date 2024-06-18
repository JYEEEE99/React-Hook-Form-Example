import React from "react";
import { useForm } from "react-hook-form";
import "../App.css";

const SignupForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm();
  const password = watch("password", "");

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
      <div className="form-group">
        <label>비밀번호 확인:</label>
        <input
          type="password"
          {...register("confirmPassword", {
            required: true,
            validate: (value) =>
              value === password || "비밀번호가 일치하지 않습니다.",
          })}
        />
        {errors.confirmPassword && <p>비밀번호가 일치하지 않습니다.</p>}
      </div>
      <div className="form-group">
        <label>닉네임:</label>
        <input {...register("nickname", { required: true })} />
        {errors.nickname && <p>닉네임은 필수 입력 항목입니다.</p>}
      </div>
      <button type="submit">회원가입</button>
    </form>
  );
};

export default SignupForm;
