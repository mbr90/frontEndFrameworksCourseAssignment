import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const schema = yup
  .object({
    name: yup
      .string()
      .min(3, "Your full name should be at least 3 characters.")
      .required("Please enter your full name"),
    subject: yup
      .string()
      .min(3, "Your subject should be at least 3 characters.")
      .required("Please enter the subject of your message"),
    email: yup
      .string()
      .email("Your email should be a valid email address: example@mail.com")
      .required("Please enter a valid email address"),
    body: yup
      .string()
      .min(3, "Your message should be at least 3 characters.")
      .required("Please enter your message"),
  })
  .required();

function ContactForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  function onSubmit(data) {
    console.log(data);
  }

  return (
    <>
      <h1 className="w-40 mx-auto my-10 text-xl">Contact us:</h1>
      <div className="bg-sky-900 p-4  w-full  mx-auto md:max-w-[650px] shadow-xl">
        <form
          className="flex flex-col w-full  md:max-w-[600px] mx-auto mt-10 gap-2"
          onSubmit={handleSubmit(onSubmit)}
        >
          <label className="text-white">Full Name:</label>
          <input
            placeholder="Your Name"
            className="pl-2 border-solid border-2"
            {...register("name")}
          />
          <p className="text-red-500 text-l font-bold">
            {errors.name?.message}
          </p>
          <label className="text-white">Subject:</label>
          <input
            placeholder="Subject of your message"
            className="pl-2 border-solid border-2"
            {...register("subject")}
          />
          <p className="text-red-500 text-l font-bold">
            {errors.subject?.message}
          </p>
          <label className="text-white">Email:</label>
          <input
            placeholder="Your email address"
            className="pl-2 border-solid border-2"
            {...register("email")}
          />
          <p className="text-red-500 text-l font-bold">
            {errors.email?.message}
          </p>
          <label className="text-white">Message:</label>
          <textarea
            placeholder="Your message"
            className="pl-2 border-solid border-2 h-24"
            {...register("body")}
          />
          <p className="text-red-500 text-l font-bold">
            {errors.body?.message}
          </p>
          <div className="mx-auto h-16">
            <input
              className="hover:cursor-pointer w-24 mx-auto hover:border-solid hover:border-2 p-2 mb-2 bg-[#DA9F53] font-bold hover:border-white text-white"
              type="submit"
            />
          </div>
        </form>
      </div>
    </>
  );
}

export default ContactForm;
