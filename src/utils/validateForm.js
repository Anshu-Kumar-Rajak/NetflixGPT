const validateForm = (formData, isLogin) => {
  const { name, email, password } = formData;

  const errors = {};

  if (!isLogin && !name.trim()) {
    errors.name = "Name is Required";
  }

  if (!email.trim()) {
    errors.email = "Email is required";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    errors.email = "Please enter a valid email";
  }

  if (!password) {
    errors.password = "Password is required";
  } else if (!isLogin) {
    const passwordRules = [
      {
        test: password.length >= 5,
        message: "Password must be at least 5 characters",
      },
      {
        test: /[A-Z]/.test(password),
        message: "Password must contain at least one uppercase letter",
      },
      {
        test: /[0-9]/.test(password),
        message: "Password must contain at least one number",
      },
      {
        test: /[^A-Za-z0-9]/.test(password),
        message: "Password must contain at least one special character",
      },
    ];

    const failedRules = passwordRules
      .filter((rule) => !rule.test)
      .map((rule) => rule.message);

    if (failedRules.length > 0) {
      errors.password = failedRules;
    }
  }

  return errors;
};

export default validateForm;
