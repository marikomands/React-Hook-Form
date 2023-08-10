import "./App.css";
import { useForm } from "react-hook-form";

function App() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ mode: "onChange" });

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className="form-container">
      <h1>Login Form</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label>Name</label>
        <input
          id="name"
          type="text"
          {...register("name", {
            required: "This Field is Required",
            minLength: { value: 5, message: "at least 5 letters are required" },
          })}
        />
        <p>{errors.name?.message}</p>
        <label>e-mail Address</label>
        <input
          id="email"
          type="email"
          {...register("email", { required: "email address is required" })}
        />
        <p>{errors.email?.message}</p>

        <label>Password</label>
        <input
          id="password"
          type="password"
          {...register("password", {
            required: "Password is required",
            minLength: { value: 6, message: "at least 6 letters are required" },
          })}
        />
        <p>{errors.password?.message}</p>

        <button type="submit">Send</button>
      </form>
    </div>
  );
}

export default App;
