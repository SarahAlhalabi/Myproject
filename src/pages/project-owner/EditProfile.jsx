"use client"

import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { useAuth } from "../../contexts/AuthContext"
import Header from "../../components/common/Header"
import toast, { Toaster } from "react-hot-toast" 
import axios from "axios"

const EditProfile = () => {
  const { user } = useAuth()
  const navigate = useNavigate()

  const [formData, setFormData] = useState({
    full_name: user?.full_name || "",
    username: user?.username || "",
    email: user?.email || "",
    phone: user?.phone || "",
    bio: user?.bio || "",
    profile_picture: null,
  })

  const handleChange = (e) => {
    const { name, value, files } = e.target
    if (name === "profile_picture") {
      setFormData({ ...formData, profile_picture: files[0] })
    } else {
      setFormData({ ...formData, [name]: value })
    }
  }

 const handleSubmit = async (e) => {
  e.preventDefault()

  const token = localStorage.getItem("accessToken")
  const form = new FormData()

  form.append("full_name", formData.full_name)
  form.append("email", formData.email)
  form.append("phone_number", formData.phone)
  form.append("bio", formData.bio)

  if (formData.profile_picture) {
    form.append("profile_picture", formData.profile_picture)
  }

  try {
    const response = await axios.patch(
      "http://127.0.0.1:8000/projectowner/project-owner/update-profile/",
      form,
      {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "multipart/form-data",
        },
      }
    )

    toast.success("Profile updated successfully!")
    setTimeout(() => navigate("/profile"), 1500)
  } catch (error) {
    console.error(error.response?.data || error.message)
    toast.error("Failed to update profile.")
  }
}


  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <Toaster position="top-right" /> {/* ✅ Toast Container */}
      <Header />
      <div className="max-w-3xl mx-auto px-4 py-12">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Edit Profile</h1>

        <form onSubmit={handleSubmit} className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6 space-y-6">
          <div className="flex items-center space-x-6">
            <div className="shrink-0">
              <img
                className="h-16 w-16 object-cover rounded-full"
                src={
                  formData.profile_picture
                    ? URL.createObjectURL(formData.profile_picture)
                    : user?.profile_picture || "/placeholder.svg"
                }
                alt="Current profile"
              />
            </div>
            <label className="block">
              <span className="text-sm text-gray-700 dark:text-gray-300">Upload New Picture</span>
              <input
                type="file"
                name="profile_picture"
                accept="image/*"
                onChange={handleChange}
                className="block w-full text-sm mt-1 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:bg-emerald-50 file:text-emerald-700 hover:file:bg-emerald-100"
              />
            </label>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Full Name</label>
              <input
                type="text"
                name="full_name"
                value={formData.full_name}
                onChange={handleChange}
                className="mt-1 w-full rounded-md border-gray-300 dark:border-gray-700 shadow-sm focus:ring-emerald-500 focus:border-emerald-500 dark:bg-gray-900 dark:text-white"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Username</label>
              <input
                type="text"
                name="username"
                value={formData.username}
                onChange={handleChange}
                className="mt-1 w-full rounded-md border-gray-300 dark:border-gray-700 shadow-sm focus:ring-emerald-500 focus:border-emerald-500 dark:bg-gray-900 dark:text-white"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="mt-1 w-full rounded-md border-gray-300 dark:border-gray-700 shadow-sm focus:ring-emerald-500 focus:border-emerald-500 dark:bg-gray-900 dark:text-white"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Phone</label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="mt-1 w-full rounded-md border-gray-300 dark:border-gray-700 shadow-sm focus:ring-emerald-500 focus:border-emerald-500 dark:bg-gray-900 dark:text-white"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Bio</label>
            <textarea
              name="bio"
              value={formData.bio}
              onChange={handleChange}
              rows={4}
              className="mt-1 w-full rounded-md border-gray-300 dark:border-gray-700 shadow-sm focus:ring-emerald-500 focus:border-emerald-500 dark:bg-gray-900 dark:text-white"
            />
          </div>

          <div className="text-right">
            <button
              type="submit"
              className="inline-flex items-center px-6 py-2 bg-emerald-600 text-white text-sm font-medium rounded-md shadow hover:bg-emerald-700 transition"
            >
              Save Changes
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default EditProfile
