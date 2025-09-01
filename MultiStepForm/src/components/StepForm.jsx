import React, { useState, useEffect } from "react";

export default function StepForm() {
  // steps definition
  const steps = [
    { id: 0, title: "Personal" },
    { id: 1, title: "Address" },
    { id: 2, title: "Account" },
    { id: 3, title: "Review" },
  ];

  // form state
  const [step, setStep] = useState(0);
  const [submitting, setSubmitting] = useState(false);
  const [touched, setTouched] = useState({});

  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    postal: "",
    username: "",
    password: "",
    confirmPassword: "",
  });

  // persist to localStorage so refresh won't lose data (optional)
  useEffect(() => {
    const saved = localStorage.getItem("multiStepFormData");
    if (saved) setForm(JSON.parse(saved));
  }, []);

  useEffect(() => {
    localStorage.setItem("multiStepFormData", JSON.stringify(form));
  }, [form]);

  // change handler
  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((s) => ({ ...s, [name]: value }));
  };

  const handleBlur = (e) => {
    setTouched((t) => ({ ...t, [e.target.name]: true }));
  };

  // basic validators for each step
  const validators = [
    // Personal: firstName, lastName, email
    () => {
      const errs = {};
      if (!form.firstName.trim()) errs.firstName = "Required";
      if (!form.lastName.trim()) errs.lastName = "Required";
      if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(form.email)) errs.email = "Invalid email";
      return errs;
    },
    // Address: address, city, postal
    () => {
      const errs = {};
      if (!form.address.trim()) errs.address = "Required";
      if (!form.city.trim()) errs.city = "Required";
      if (!/^\d{4,10}$/.test(form.postal)) errs.postal = "Invalid postal";
      return errs;
    },
    // Account: username, password, confirmPassword
    () => {
      const errs = {};
      if (!/^[a-zA-Z0-9_]{3,}$/.test(form.username)) errs.username = "3+ chars, letters/numbers/_";
      if (form.password.length < 6) errs.password = "Min 6 chars";
      if (form.password !== form.confirmPassword) errs.confirmPassword = "Passwords do not match";
      return errs;
    },
    // Review: no extra validation
    () => ({ }),
  ];

  const currentErrors = validators[step]() || {};
  const isStepValid = Object.keys(currentErrors).length === 0;

  function next() {
    setTouched({});
    if (step < steps.length - 1) setStep((s) => s + 1);
  }
  function prev() {
    if (step > 0) setStep((s) => s - 1);
  }

  async function submit(e) {
    e.preventDefault();
    // final check
    const allErrs = validators.map((v) => v()).reduce((a, b) => ({ ...a, ...b }), {});
    if (Object.keys(allErrs).length) {
      // if errors, jump to the first invalid step
      const firstInvalid = validators.findIndex((v) => Object.keys(v()).length);
      if (firstInvalid !== -1) setStep(firstInvalid);
      setTouched(Object.keys(allErrs).reduce((acc, k) => ({ ...acc, [k]: true }), {}));
      return;
    }

    setSubmitting(true);
    // mock request
    await new Promise((r) => setTimeout(r, 1000));
    setSubmitting(false);
    localStorage.removeItem("multiStepFormData");
    alert("Form submitted — check console for payload");
    console.log("SUBMITTED: ", form);
    setStep(0);
    setForm({
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      address: "",
      city: "",
      postal: "",
      username: "",
      password: "",
      confirmPassword: "",
    });
  }

  // small helpers
  const showError = (name) => touched[name] && currentErrors[name];
  const percentComplete = Math.round(((step) / (steps.length - 1)) * 100);

  return (
    <div className="max-w-3xl mx-auto p-6">
      <div className="bg-white rounded-2xl shadow p-6">
        <header className="mb-6">
          <h2 className="text-2xl font-semibold">Multi-step Form</h2>
          <p className="text-sm text-gray-500">Step {step + 1} of {steps.length} — {steps[step].title}</p>

          <div className="mt-4 bg-gray-200 rounded-full h-2 overflow-hidden">
            <div className="h-full rounded-full transition-all duration-300" style={{ width: `${percentComplete}%` }} />
          </div>

          <nav className="flex gap-2 mt-4">
            {steps.map((s, i) => (
              <button
                key={s.id}
                onClick={() => setStep(i)}
                className={`text-xs px-2 py-1 rounded ${i === step ? 'bg-indigo-600 text-white' : 'bg-gray-100 text-gray-600'}`}>
                {s.title}
              </button>
            ))}
          </nav>
        </header>

        <form onSubmit={submit}>
          {/* Step panels */}
          <div className="min-h-[240px]">
            {step === 0 && (
              <section>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium">First name</label>
                    <input name="firstName" value={form.firstName} onBlur={handleBlur} onChange={handleChange}
                      className="mt-1 block w-full rounded-md border p-2" />
                    {showError('firstName') && <p className="text-red-500 text-sm mt-1">{currentErrors.firstName}</p>}
                  </div>
                  <div>
                    <label className="block text-sm font-medium">Last name</label>
                    <input name="lastName" value={form.lastName} onBlur={handleBlur} onChange={handleChange}
                      className="mt-1 block w-full rounded-md border p-2" />
                    {showError('lastName') && <p className="text-red-500 text-sm mt-1">{currentErrors.lastName}</p>}
                  </div>
                </div>

                <div className="mt-4">
                  <label className="block text-sm font-medium">Email</label>
                  <input name="email" value={form.email} onBlur={handleBlur} onChange={handleChange}
                    className="mt-1 block w-full rounded-md border p-2" />
                  {showError('email') && <p className="text-red-500 text-sm mt-1">{currentErrors.email}</p>}
                </div>

                <div className="mt-4">
                  <label className="block text-sm font-medium">Phone (optional)</label>
                  <input name="phone" value={form.phone} onChange={handleChange}
                    className="mt-1 block w-full rounded-md border p-2" />
                </div>
              </section>
            )}

            {step === 1 && (
              <section>
                <div>
                  <label className="block text-sm font-medium">Address</label>
                  <input name="address" value={form.address} onBlur={handleBlur} onChange={handleChange}
                    className="mt-1 block w-full rounded-md border p-2" />
                  {showError('address') && <p className="text-red-500 text-sm mt-1">{currentErrors.address}</p>}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                  <div>
                    <label className="block text-sm font-medium">City</label>
                    <input name="city" value={form.city} onBlur={handleBlur} onChange={handleChange}
                      className="mt-1 block w-full rounded-md border p-2" />
                    {showError('city') && <p className="text-red-500 text-sm mt-1">{currentErrors.city}</p>}
                  </div>
                  <div>
                    <label className="block text-sm font-medium">Postal code</label>
                    <input name="postal" value={form.postal} onBlur={handleBlur} onChange={handleChange}
                      className="mt-1 block w-full rounded-md border p-2" />
                    {showError('postal') && <p className="text-red-500 text-sm mt-1">{currentErrors.postal}</p>}
                  </div>
                </div>
              </section>
            )}

            {step === 2 && (
              <section>
                <div>
                  <label className="block text-sm font-medium">Username</label>
                  <input name="username" value={form.username} onBlur={handleBlur} onChange={handleChange}
                    className="mt-1 block w-full rounded-md border p-2" />
                  {showError('username') && <p className="text-red-500 text-sm mt-1">{currentErrors.username}</p>}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                  <div>
                    <label className="block text-sm font-medium">Password</label>
                    <input name="password" type="password" value={form.password} onBlur={handleBlur} onChange={handleChange}
                      className="mt-1 block w-full rounded-md border p-2" />
                    {showError('password') && <p className="text-red-500 text-sm mt-1">{currentErrors.password}</p>}
                  </div>
                  <div>
                    <label className="block text-sm font-medium">Confirm password</label>
                    <input name="confirmPassword" type="password" value={form.confirmPassword} onBlur={handleBlur} onChange={handleChange}
                      className="mt-1 block w-full rounded-md border p-2" />
                    {showError('confirmPassword') && <p className="text-red-500 text-sm mt-1">{currentErrors.confirmPassword}</p>}
                  </div>
                </div>
              </section>
            )}

            {step === 3 && (
              <section>
                <h3 className="text-lg font-medium">Review your data</h3>
                <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                  <div className="space-y-2">
                    <p><strong>First name:</strong> {form.firstName}</p>
                    <p><strong>Last name:</strong> {form.lastName}</p>
                    <p><strong>Email:</strong> {form.email}</p>
                    <p><strong>Phone:</strong> {form.phone || '-'} </p>
                  </div>
                  <div className="space-y-2">
                    <p><strong>Address:</strong> {form.address}</p>
                    <p><strong>City:</strong> {form.city}</p>
                    <p><strong>Postal:</strong> {form.postal}</p>
                    <p><strong>Username:</strong> {form.username}</p>
                  </div>
                </div>
              </section>
            )}
          </div>

          {/* footer actions */}
          <div className="mt-6 flex items-center justify-between">
            <div>
              <button type="button" onClick={prev} disabled={step === 0}
                className={`px-4 py-2 rounded-md mr-2 ${step === 0 ? 'bg-gray-200 text-gray-400' : 'bg-gray-100'}`}>
                Previous
              </button>

              {step < steps.length - 1 && (
                <button type="button" onClick={() => {
                  setTouched(Object.keys(currentErrors).reduce((acc, k) => ({ ...acc, [k]: true }), {}));
                  if (isStepValid) next();
                }}
                  className={`px-4 py-2 rounded-md ${isStepValid ? 'bg-indigo-600 text-white' : 'bg-gray-200 text-gray-500'}`}>
                  Next
                </button>
              )}

            </div>

            <div className="flex items-center gap-3">
              {step === steps.length - 1 ? (
                <button type="submit" disabled={submitting} className="px-4 py-2 rounded-md bg-green-600 text-white">
                  {submitting ? 'Submitting...' : 'Submit'}
                </button>
              ) : (
                <button type="button" onClick={() => { setStep(steps.length - 1); }} className="text-sm underline text-gray-600">Skip to Review</button>
              )}
            </div>
          </div>
        </form>

      </div>

      <footer className="mt-4 text-xs text-gray-500 text-center">
        Built with React + Tailwind — copy the file into your project (Tailwind required for styles).
      </footer>
    </div>
  );
}
