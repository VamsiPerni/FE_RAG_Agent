import { useState } from "react";
import { HeaderUser } from "../components/HeaderUser";
import { Footer } from "../components/Footer";

const AddUser = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    riskAppetite: "Low",
    investmentPreferences: [],
    relationshipManager: "",
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    if (type === "checkbox") {
      const updatedPrefs = checked
        ? [...formData.investmentPreferences, value]
        : formData.investmentPreferences.filter((pref) => pref !== value);

      setFormData({ ...formData, investmentPreferences: updatedPrefs });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email) {
      alert("Name and Email are required!");
      return;
    }

    try {
      const resp = await fetch(`${import.meta.env.VITE_BACKEND_URL}/user`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (resp.status === 201) {
        alert("User added successfully!");
        setFormData({
          name: "",
          email: "",
          phone: "",
          address: "",
          riskAppetite: "Low",
          investmentPreferences: [],
          relationshipManager: "",
        });
      } else {
        const result = await resp.json();
        alert(`Error: ${result.message}`);
      }
    } catch (err) {
      alert(`Server error: ${err.message}`);
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-100">
      <HeaderUser />
      <div className="flex-grow px-4 py-8">
        <div className="max-w-3xl mx-auto bg-white p-6 rounded-xl shadow-md">
          <h2 className="text-2xl font-bold mb-6 text-center">Add New User</h2>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block font-medium mb-1">Name*</label>
              <input
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full border border-gray-300 px-3 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>

            <div>
              <label className="block font-medium mb-1">Email*</label>
              <input
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full border border-gray-300 px-3 py-2 rounded-md"
              />
            </div>

            <div>
              <label className="block font-medium mb-1">Phone</label>
              <input
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full border border-gray-300 px-3 py-2 rounded-md"
              />
            </div>

            <div>
              <label className="block font-medium mb-1">Address</label>
              <input
                name="address"
                value={formData.address}
                onChange={handleChange}
                className="w-full border border-gray-300 px-3 py-2 rounded-md"
              />
            </div>

            <div>
              <label className="block font-medium mb-1">Risk Appetite</label>
              <select
                name="riskAppetite"
                value={formData.riskAppetite}
                onChange={handleChange}
                className="w-full border border-gray-300 px-3 py-2 rounded-md"
              >
                <option value="Low">Low</option>
                <option value="Medium">Medium</option>
                <option value="High">High</option>
              </select>
            </div>

            <div>
              <label className="block font-medium mb-1">
                Investment Preferences
              </label>
              <div className="flex gap-4 flex-wrap">
                {["stocks", "mutual funds", "gold", "real estate"].map(
                  (item) => (
                    <label key={item} className="flex items-center gap-2">
                      <input
                        type="checkbox"
                        name="investmentPreferences"
                        value={item}
                        checked={formData.investmentPreferences.includes(item)}
                        onChange={handleChange}
                      />
                      {item}
                    </label>
                  )
                )}
              </div>
            </div>

            <div>
              <label className="block font-medium mb-1">
                Relationship Manager
              </label>
              <input
                name="relationshipManager"
                value={formData.relationshipManager}
                onChange={handleChange}
                className="w-full border border-gray-300 px-3 py-2 rounded-md"
              />
            </div>

            <button
              type="submit"
              className="w-full py-2 px-4 bg-indigo-600 text-white font-semibold rounded-md hover:bg-indigo-700 transition"
            >
              Add User
            </button>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export { AddUser };
