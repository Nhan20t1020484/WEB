import { useEffect, useState, useContext } from "react";
import axios from "axios";
import { InfoContext } from "../../context/InfoContext";
import "../profile/Profile.css"; // You may want to create this file for styling

export function Profile() {
    const { user } = useContext(InfoContext);
    const [profileData, setProfileData] = useState(null);
    const [editData, setEditData] = useState({});
    const [isEditing, setIsEditing] = useState(false);
    const [message, setMessage] = useState("");

    // Fetch profile data when component mounts
    useEffect(() => {
        axios.get("/users/get-profile")
            .then((response) => {
                if (response.data.success) {
                    setProfileData(response.data);
                    setEditData(response.data); // Set initial edit data
                }
            })
            .catch((error) => {
                console.error("Error fetching profile data:", error);
            });
    }, []);

    // Toggle edit mode
    const handleEditToggle = () => {
        setIsEditing(!isEditing);
        setMessage("");
    };

    // Handle form submission for updating profile
    const handleFormSubmit = (e) => {
        e.preventDefault();
        axios.put("/users/update-profile", editData)
            .then((response) => {
                if (response.data.success) {
                    setProfileData(response.data);
                    setIsEditing(false);
                    setMessage("Profile updated successfully!");
                } else {
                    setMessage("Error updating profile.");
                }
            })
            .catch((error) => {
                console.error("Error updating profile:", error);
                setMessage("Update failed.");
            });
    };

    // Update editData state as user types
    const handleChange = (e) => {
        const { name, value } = e.target;
        setEditData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    return (
        <div className="profile">
            <h2>Your Profile</h2>
            {profileData ? (
                <>
                    {!isEditing ? (
                        <div className="profile-details">
                            <p><strong>Username:</strong> {profileData.username}</p>
                            <p><strong>Email:</strong> {profileData.email}</p>
                            <p><strong>Phone:</strong> {profileData.phone}</p>
                            <p><strong>Address:</strong> {profileData.address}</p>
                            <button onClick={handleEditToggle}>Edit Profile</button>
                        </div>
                    ) : (
                        <form onSubmit={handleFormSubmit} className="profile-edit-form">
                            <label>
                                Email:
                                <input type="email" name="email" value={editData.email} onChange={handleChange} />
                            </label>
                            <label>
                                Phone:
                                <input type="text" name="phone" value={editData.phone} onChange={handleChange} />
                            </label>
                            <label>
                                Address:
                                <input type="text" name="address" value={editData.address} onChange={handleChange} />
                            </label>
                            <button type="submit">Save Changes</button>
                            <button type="button" onClick={handleEditToggle}>Cancel</button>
                        </form>
                    )}
                    {message && <p className="message">{message}</p>}
                </>
            ) : (
                <p>Loading profile data...</p>
            )}
        </div>
    );
}