import * as Yup from "yup";

const EditSchema = Yup.object().shape({
  email: Yup.string().email("Email address required").required("Email address required"),
  userName: Yup.string().required("user name required")
});

export default EditSchema