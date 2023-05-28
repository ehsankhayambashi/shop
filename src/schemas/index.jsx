import * as yup from "yup";

const mobileRules = /^(\+98|0)?9\d{9}$/;

export const loginSchema = yup.object().shape({
  mobile: yup
    .string()
    .required("لطفا این قسمت را خالی نگذارید")
    .matches(mobileRules, { message: "شماره موبایل نادرست است" }),
});

export const verifySchema = yup.object().shape({
  verifyNumber: yup
    .string()
    .required("")
    .matches(/^[0-9]+$/, "مقدار وارد شده باید فقط شامل عدد باشد."),
});

const commonErrorAddress = "اینجا را خالی نگذارید";
// const length = yup
//   .number()
//   .test("exact-length", "Number must have exact length of 4", (value) => {
//     if (value === undefined || value === null) {
//       return true; // Allow empty values, you can modify this behavior as per your requirements
//     }

//     const stringValue = String(value);
//     return stringValue.length === 4;
//   });
export const addressSchema = yup.object().shape({
  address: yup.string().required(commonErrorAddress),
  state: yup.string().required(commonErrorAddress),
  city: yup.string().required(commonErrorAddress),
  unit: yup
    .number()
    .typeError("شماره پلاک باید فقط شامل عدد انگلیسی باشد")
    .required(commonErrorAddress),
  postalCode: yup
    .number()
    .min(1000000000, "کد‌پستی باید ۱۰ رقم و بدون خط تیره باشد")
    .max(9999999999, "کد‌پستی باید ۱۰ رقم و بدون خط تیره باشد")
    .typeError("کد‌پستی باید ۱۰ رقم و بدون خط تیره و انگلیسی باشد")
    .required(commonErrorAddress),
});
