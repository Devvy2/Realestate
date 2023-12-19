import { useSelector } from "react-redux";
import "./Profile.css";
import { useRef, useState, useEffect } from "react";
import {
  getDownloadURL,
  getStorage,
  ref,
  uploadBytesResumable,
} from "firebase/storage";
import { app } from "../../Firebase";

function Profile() {
  const { currentUser } = useSelector((state) => state.user);
  const fileRef = useRef(null);
  const [file, setFile] = useState(undefined);
  const [filePerc, setFilePerc] = useState(0);
  const [fileUploadError, setFileUploadError] = useState(false);
  const [formData, setFormData] = useState({});

  useEffect(() => {
    if (file) {
      handleFileUpload(file);
    }
  }, [file]);

  const handleFileUpload = (file) => {
    const storage = getStorage(app);
    const fileName = new Date().getTime() + file.name;
    const storageRef = ref(storage, fileName);
    const uploadTask = uploadBytesResumable(storageRef, file);

    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const progress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        setFilePerc(Math.round(progress));
      },
      (error) => {
        setFileUploadError(true);
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) =>
          setFormData({ ...formData, avatar: downloadURL })
        );
      }
    );
  };
  return (
    <div className="Profile-page">
      <div>
        <h1>Profile</h1>
        <form className="Profile-info">
          <input
            onChange={(e) => setFile(e.target.files[0])}
            type="file"
            ref={fileRef}
            hidden
            accept="image/*"
          />
          <img
            onClick={() => fileRef.current.click()}
            className="Profile-img"
            src={formData.avatar || currentUser.avatar}
            alt="profile"
          />
          <p>
            {fileUploadError ? (
              <span className="img-upload-err">
                Error Image Upload (Image must be less than 2 mb)
              </span>
            ) : filePerc > 0 && filePerc < 100 ? (
              <span className="img-uploading-progress">{`Uploading ${filePerc}%`}</span>
            ) : filePerc === 100 ? (
              <span className="img-upload-success">
                Image sucessfully Uploaded
              </span>
            ) : (
              ""
            )}
          </p>
          <input type="text" placeholder="Username" />
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Password" />
          <button className="Update-btn">UPDATE</button>
        </form>
        <div className="account-actions">
          <span>Delete account</span>
          <span>Sign out</span>
        </div>
      </div>
    </div>
  );
}

export default Profile;
