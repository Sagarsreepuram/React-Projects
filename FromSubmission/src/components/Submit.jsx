import React, { useState } from 'react'

const Submit = () => {
    const [formData, setFormData] = useState({ name: "", email: "" });
    const [loading, setLoading] = useState(false);
    const [submitted, setSubmitted] = useState(false);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setLoading(true);
        setSubmitted(false);

        setTimeout((e) => {
            setLoading(false);
            setSubmitted(true);
        }, 2000)
    }


    return (
        <div className='flex flex-col items-center justify-center min-h-screen bg-gray-100'>
            <form
                onSubmit={handleSubmit}
                className='bg-white shadow-lg rounded-2xl p-6 w-96'>
                <h2 className='text-xl font-bold mb-4'> Submit Your Details</h2>
                <input
                    type="text"
                    name='name'
                    placeholder='Enter Your Name'
                    value={formData.name}
                    onChange={handleChange}
                    className='border p-2 rounded w-full mb-3'
                    required />
                <input
                    type="email"
                    name="email"
                    placeholder="Enter your email"
                    value={formData.email}
                    onChange={handleChange}
                    className="border p-2 rounded w-full mb-3"
                    required
                />

                <button
                type='submit'
                className='bg-blue-600 text-white p-2 rounded w-full hover:bg-blue-700 transition'
                disabled={loading}>
                    {loading ? "Submitting...." : "Submit"}
                </button>
                {submitted && (
                    <p className='mt-4 text-green-600 font-semibold'>
                        ✅ Form submitted successfully!
                    </p>
                )}
            </form>
        </div>
    )
}

export default Submit
