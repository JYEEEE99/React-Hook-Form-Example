import React from "react";
import { useForm } from "react-hook-form";
import "../App.css";

const ReviewForm = () => {
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
        <label>평점:</label>
        <select {...register("rating", { required: true })}>
          <option value="">선택...</option>
          {[1, 2, 3, 4, 5].map((rating) => (
            <option key={rating} value={rating}>
              {rating}
            </option>
          ))}
        </select>
        {errors.rating && <p>평점을 선택해 주세요.</p>}
      </div>
      <div className="form-group">
        <label>내용:</label>
        <textarea {...register("content", { required: true })}></textarea>
        {errors.content && <p>내용을 입력해 주세요.</p>}
      </div>
      <button type="submit">리뷰 작성</button>
    </form>
  );
};

export default ReviewForm;
