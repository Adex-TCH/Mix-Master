import axios from "axios";
import { Form, redirect, useNavigation } from "react-router-dom";
import { toast } from "react-toastify";

type NewsletterActionData = {
  msg?: string;
};

const newsletterUrl = "https://www.course-api.com/cocktails-newsletter";

export const action = async ({ request }: { request: Request }) => {
  try {
    const formData = await request.formData();
    const data = Object.fromEntries(formData);
    const response = await axios.post<NewsletterActionData>(newsletterUrl, data);
    toast.success(response.data.msg || "Thanks!");
    return redirect("/");
  } catch (error: any) {
    toast.error(error?.response?.data?.msg || "Something went wrong");
    return error;
  }
};

const NewsLetter = () => {
  const navigation = useNavigation();
  const isSubmitting = navigation.state === "submitting";

  return (
    <Form className="form" method="POST">
      <h4 style={{ textAlign: "center", marginBottom: "2rem" }}>our newsletter</h4>

      <div className="form-row">
        <label htmlFor="name" className="form-label">
          name
        </label>
        <input
          type="text"
          className="form-input"
          name="name"
          id="name"
          required
        />
      </div>

      <div className="form-row">
        <label htmlFor="lastName" className="form-label">
          last name
        </label>
        <input
          type="text"
          className="form-input"
          name="lastName"
          id="lastName"
          required
        />
      </div>

      <div className="form-row">
        <label htmlFor="email" className="form-label">
          email
        </label>
        <input
          type="text"
          className="form-input"
          name="email"
          id="email"
          defaultValue="test@test.com"
          required
        />
      </div>

      <button
        type="submit"
        className="btn btn-block"
        style={{ marginTop: "0.5rem" }}
        disabled={isSubmitting}
      >
        {isSubmitting ? "submitting" : "submit"}
      </button>
    </Form>
  );
};

export default NewsLetter;

