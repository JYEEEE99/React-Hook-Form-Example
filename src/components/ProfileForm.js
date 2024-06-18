import React from "react";
import { useForm } from "react-hook-form";
import "../App.css";

const ProfileForm = () => {
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
        <label>닉네임:</label>
        <input {...register("nickname", { required: true })} />
        {errors.nickname && <p>닉네임은 필수 입력 항목입니다.</p>}
      </div>
      <div className="form-group">
        <label>프로필 사진:</label>
        <input type="file" {...register("profileImage", { required: true })} />
        {errors.profileImage && <p>프로필 사진을 업로드해 주세요.</p>}
      </div>
      <button type="submit">수정</button>
    </form>
  );
};

export default ProfileForm;
