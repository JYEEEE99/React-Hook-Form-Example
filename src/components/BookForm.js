import React from "react";
import { useForm } from "react-hook-form";
import "../App.css";

const BookForm = ({ isEditing = false }) => {
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
        <label>제목:</label>
        <input {...register("title", { required: true })} />
        {errors.title && <p>제목은 필수 입력 항목입니다.</p>}
      </div>
      <div className="form-group">
        <label>저자:</label>
        <input {...register("author", { required: true })} />
        {errors.author && <p>저자는 필수 입력 항목입니다.</p>}
      </div>
      <div className="form-group">
        <label>설명:</label>
        <textarea {...register("description", { required: true })}></textarea>
        {errors.description && <p>설명은 필수 입력 항목입니다.</p>}
      </div>
      <button type="submit">{isEditing ? "도서 수정" : "도서 추가"}</button>
    </form>
  );
};

export default BookForm;
