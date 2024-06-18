import React from "react";
import { useForm } from "react-hook-form";
import "./../App.css";
const CommentForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label>이름:</label>
        <input {...register("name", { required: true })} />
        {errors.name && <p>이름은 필수 입력 항목입니다.</p>}
      </div>
      <div>
        <label>댓글:</label>
        <textarea {...register("comment", { required: true })}></textarea>
        {errors.comment && <p>댓글은 필수 입력 항목입니다.</p>}
      </div>
      <button type="submit">댓글 남기기</button>
    </form>
  );
};

export default CommentForm;
