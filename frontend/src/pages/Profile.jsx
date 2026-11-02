import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  FaUser,
  FaEnvelope,
  FaBirthdayCake,
  FaVenusMars,
  FaRulerVertical,
  FaWeight,
  FaBullseye,
  FaRunning,
  FaEdit,
  FaSave,
  FaTimes,
  FaArrowLeft,
} from "react-icons/fa";

import API from "../api/axios";

const Profile = () => {
  const navigate = useNavigate();

  const [user, setUser] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    age: "",
    gender: "",
    height: "",
    weight: "",
    goal: "",
    activityLevel: "",
  });

  const [isEditing, setIsEditing] = useState(false);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const token = localStorage.getItem("token");

  // =========================
  // GET PROFILE
  // =========================
  useEffect(() => {
    const fetchProfile = async () => {
      if (!token) {
        navigate("/login");
        return;
      }

      try {
        setLoading(true);
        setError("");

        const response = await API.get("/auth/profile", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        const userData = response.data.user;

        setUser(userData);

        setFormData({
          name: userData.name || "",
          age: userData.age || "",
          gender: userData.gender || "",
          height: userData.height || "",
          weight: userData.weight || "",
          goal: userData.goal || "",
          activityLevel: userData.activityLevel || "",
        });
      } catch (err) {
        console.error("Profile fetch error:", err);

        if (err.response?.status === 401) {
          localStorage.removeItem("token");
          localStorage.removeItem("user");
          navigate("/login");
        } else {
          setError(
            err.response?.data?.message || "Failed to load profile"
          );
        }
      } finally {
        setLoading(false);
      }
    };

    fetchProfile();
  }, [navigate, token]);

  // =========================
  // INPUT CHANGE
  // =========================
  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // =========================
  // SAVE PROFILE
  // =========================
  const handleSave = async () => {
    try {
      setSaving(true);
      setError("");
      setSuccess("");

      const response = await API.put(
        "/auth/profile",
        formData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      const updatedUser = response.data.user;

      setUser(updatedUser);

      setFormData({
        name: updatedUser.name || "",
        age: updatedUser.age || "",
        gender: updatedUser.gender || "",
        height: updatedUser.height || "",
        weight: updatedUser.weight || "",
        goal: updatedUser.goal || "",
        activityLevel: updatedUser.activityLevel || "",
      });

      // Keep localStorage user data updated
      localStorage.setItem("user", JSON.stringify(updatedUser));

      setIsEditing(false);
      setSuccess("Profile updated successfully!");

      setTimeout(() => {
        setSuccess("");
      }, 3000);
    } catch (err) {
      console.error("Profile update error:", err);

      setError(
        err.response?.data?.message || "Failed to update profile"
      );
    } finally {
      setSaving(false);
    }
  };

  // =========================
  // CANCEL EDIT
  // =========================
  const handleCancel = () => {
    if (!user) return;

    setFormData({
      name: user.name || "",
      age: user.age || "",
      gender: user.gender || "",
      height: user.height || "",
      weight: user.weight || "",
      goal: user.goal || "",
      activityLevel: user.activityLevel || "",
    });

    setIsEditing(false);
    setError("");
  };

  // =========================
  // LOADING
  // =========================
  if (loading) {
    return (
      <div className="min-h-screen bg-[#050B18] flex items-center justify-center">
        <div className="text-center">
          <div className="w-12 h-12 border-4 border-[#00E5A8]/20 border-t-[#00E5A8] rounded-full animate-spin mx-auto mb-4"></div>

          <p className="text-gray-400">
            Loading your profile...
          </p>
        </div>
      </div>
    );
  }

  if (!user) {
    return null;
  }

  return (
    <div className="min-h-screen bg-[#050B18] text-white px-4 py-6 sm:px-6 lg:px-8">

      {/* ================= HEADER ================= */}
      <div className="max-w-5xl mx-auto mb-8">

        <button
          onClick={() => navigate("/dashboard")}
          className="flex items-center gap-2 text-gray-400 hover:text-[#00E5A8] transition mb-6 cursor-pointer"
        >
          <FaArrowLeft />
          Back to Dashboard
        </button>

        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">

          <div>
            <p className="text-[#00E5A8] text-sm font-medium mb-2">
              MY PROFILE
            </p>

            <h1 className="text-3xl sm:text-4xl font-bold">
              Profile Settings
            </h1>

            <p className="text-gray-400 mt-2">
              Manage your personal information and fitness preferences.
            </p>
          </div>

          {!isEditing ? (
            <button
              onClick={() => {
                setIsEditing(true);
                setError("");
                setSuccess("");
              }}
              className="flex items-center justify-center gap-2 bg-[#00E5A8] text-[#050B18] font-semibold px-5 py-3 rounded-xl hover:bg-[#00d99f] transition cursor-pointer"
            >
              <FaEdit />
              Edit Profile
            </button>
          ) : (
            <div className="flex gap-3">

              <button
                onClick={handleCancel}
                className="flex items-center gap-2 px-5 py-3 rounded-xl border border-white/10 text-gray-300 hover:bg-white/5 transition cursor-pointer"
              >
                <FaTimes />
                Cancel
              </button>

              <button
                onClick={handleSave}
                disabled={saving}
                className="flex items-center gap-2 bg-[#00E5A8] text-[#050B18] font-semibold px-5 py-3 rounded-xl hover:bg-[#00d99f] transition cursor-pointer disabled:opacity-50"
              >
                <FaSave />
                {saving ? "Saving..." : "Save Changes"}
              </button>

            </div>
          )}
        </div>
      </div>

      {/* ================= MESSAGES ================= */}
      <div className="max-w-5xl mx-auto">

        {success && (
          <div className="mb-5 px-4 py-3 rounded-xl bg-[#00E5A8]/10 border border-[#00E5A8]/20 text-[#00E5A8]">
            {success}
          </div>
        )}

        {error && (
          <div className="mb-5 px-4 py-3 rounded-xl bg-red-500/10 border border-red-500/20 text-red-400">
            {error}
          </div>
        )}

      </div>

      {/* ================= PROFILE CARD ================= */}
      <div className="max-w-5xl mx-auto">

        <div className="bg-[#0B0F19] border border-white/10 rounded-3xl overflow-hidden">

          {/* TOP PROFILE SECTION */}
          <div className="relative px-6 sm:px-10 py-8 border-b border-white/10">

            <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6">

              {/* PROFILE IMAGE */}
              <div className="relative">

                {user.profileImage ? (
                  <img
                    src={user.profileImage}
                    alt="Profile"
                    className="w-28 h-28 rounded-full object-cover border-4 border-[#00E5A8]/20"
                  />
                ) : (
                  <div className="w-28 h-28 rounded-full bg-[#00E5A8]/10 border-4 border-[#00E5A8]/20 flex items-center justify-center">
                    <FaUser className="text-[#00E5A8] text-4xl" />
                  </div>
                )}

                <div className="absolute bottom-1 right-1 w-6 h-6 bg-[#00E5A8] border-4 border-[#0B0F19] rounded-full"></div>

              </div>

              {/* USER INFO */}
              <div className="text-center sm:text-left pt-2">

                <h2 className="text-2xl font-bold">
                  {user.name || "User"}
                </h2>

                <div className="flex items-center justify-center sm:justify-start gap-2 text-gray-400 mt-2">
                  <FaEnvelope className="text-sm" />
                  <span>{user.email}</span>
                </div>

                <div className="mt-4 inline-flex items-center px-3 py-1.5 rounded-full bg-[#00E5A8]/10 text-[#00E5A8] text-sm">
                  {user.goal || "Fitness Journey"}
                </div>

              </div>

            </div>

          </div>

          {/* PERSONAL INFORMATION */}
          <div className="px-6 sm:px-10 py-8">

            <div className="mb-6">
              <h3 className="text-xl font-semibold">
                Personal Information
              </h3>

              <p className="text-gray-500 text-sm mt-1">
                Your basic personal details
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

              {/* NAME */}
              <ProfileField
                icon={<FaUser />}
                label="Full Name"
                name="name"
                value={formData.name}
                editable={isEditing}
                onChange={handleChange}
              />

              {/* EMAIL */}
              <div>
                <label className="block text-sm text-gray-400 mb-2">
                  Email
                </label>

                <div className="flex items-center gap-3 bg-[#050B18] border border-white/10 rounded-xl px-4 py-3.5">
                  <FaEnvelope className="text-gray-500" />

                  <span className="text-gray-400 truncate">
                    {user.email}
                  </span>
                </div>

                <p className="text-xs text-gray-600 mt-1.5">
                  Email cannot be changed
                </p>
              </div>

              {/* AGE */}
              <ProfileField
                icon={<FaBirthdayCake />}
                label="Age"
                name="age"
                type="number"
                value={formData.age}
                editable={isEditing}
                onChange={handleChange}
              />

              {/* GENDER */}
              <SelectField
                icon={<FaVenusMars />}
                label="Gender"
                name="gender"
                value={formData.gender}
                editable={isEditing}
                onChange={handleChange}
                options={[
                  "Male",
                  "Female",
                  "Other",
                ]}
              />

              {/* HEIGHT */}
              <ProfileField
                icon={<FaRulerVertical />}
                label="Height (cm)"
                name="height"
                type="number"
                value={formData.height}
                editable={isEditing}
                onChange={handleChange}
              />

              {/* WEIGHT */}
              <ProfileField
                icon={<FaWeight />}
                label="Weight (kg)"
                name="weight"
                type="number"
                value={formData.weight}
                editable={isEditing}
                onChange={handleChange}
              />

              {/* GOAL */}
              <SelectField
                icon={<FaBullseye />}
                label="Fitness Goal"
                name="goal"
                value={formData.goal}
                editable={isEditing}
                onChange={handleChange}
                options={[
                  "Weight Loss",
                  "Muscle Gain",
                  "Maintain Fitness",
                ]}
              />

              {/* ACTIVITY LEVEL */}
              <SelectField
                icon={<FaRunning />}
                label="Activity Level"
                name="activityLevel"
                value={formData.activityLevel}
                editable={isEditing}
                onChange={handleChange}
                options={[
                  "Beginner",
                  "Intermediate",
                  "Advanced",
                ]}
              />

            </div>

          </div>

          {/* FITNESS SUMMARY */}
          <div className="px-6 sm:px-10 pb-10">

            <div className="bg-[#050B18] border border-white/10 rounded-2xl p-5 sm:p-6">

              <h3 className="text-lg font-semibold mb-5">
                Fitness Summary
              </h3>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">

                <SummaryCard
                  label="Height"
                  value={user.height ? `${user.height} cm` : "--"}
                />

                <SummaryCard
                  label="Weight"
                  value={user.weight ? `${user.weight} kg` : "--"}
                />

                <SummaryCard
                  label="Goal"
                  value={user.goal || "--"}
                />

                <SummaryCard
                  label="Activity"
                  value={user.activityLevel || "--"}
                />

              </div>

            </div>

          </div>

        </div>

      </div>

    </div>
  );
};


// =========================
// INPUT COMPONENT
// =========================
const ProfileField = ({
  icon,
  label,
  name,
  type = "text",
  value,
  editable,
  onChange,
}) => {
  return (
    <div>
      <label className="block text-sm text-gray-400 mb-2">
        {label}
      </label>

      <div
        className={`flex items-center gap-3 bg-[#050B18] border rounded-xl px-4 transition ${
          editable
            ? "border-white/10 focus-within:border-[#00E5A8]/50"
            : "border-white/10"
        }`}
      >
        <span className="text-gray-500 shrink-0">
          {icon}
        </span>

        {editable ? (
          <input
            type={type}
            name={name}
            value={value}
            onChange={onChange}
            className="w-full bg-transparent outline-none py-3.5 text-white"
          />
        ) : (
          <span className="py-3.5 text-gray-300">
            {value || "--"}
          </span>
        )}
      </div>
    </div>
  );
};


// =========================
// SELECT COMPONENT
// =========================
const SelectField = ({
  icon,
  label,
  name,
  value,
  editable,
  onChange,
  options,
}) => {
  return (
    <div>
      <label className="block text-sm text-gray-400 mb-2">
        {label}
      </label>

      <div className="flex items-center gap-3 bg-[#050B18] border border-white/10 rounded-xl px-4">

        <span className="text-gray-500 shrink-0">
          {icon}
        </span>

        {editable ? (
          <select
            name={name}
            value={value}
            onChange={onChange}
            className="w-full bg-[#050B18] outline-none py-3.5 text-white cursor-pointer"
          >
            <option value="" className="bg-[#0B0F19]">
              Select {label}
            </option>

            {options.map((option) => (
              <option
                key={option}
                value={option}
                className="bg-[#0B0F19]"
              >
                {option}
              </option>
            ))}
          </select>
        ) : (
          <span className="py-3.5 text-gray-300">
            {value || "--"}
          </span>
        )}

      </div>
    </div>
  );
};


// =========================
// SUMMARY CARD
// =========================
const SummaryCard = ({ label, value }) => {
  return (
    <div className="bg-[#0B0F19] border border-white/5 rounded-xl p-4">

      <p className="text-xs text-gray-500 mb-2">
        {label}
      </p>

      <p className="text-sm sm:text-base font-semibold text-white truncate">
        {value}
      </p>

    </div>
  );
};

export default Profile;