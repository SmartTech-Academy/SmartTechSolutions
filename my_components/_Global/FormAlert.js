// Minimal, dependency-free success/error banner shared by the public forms (appointment,
// contact, newsletter). Uses Bootstrap's alert classes, which are already loaded site-wide.
const FormAlert = ({ status, message }) => {
  if (!status || !message) return null;

  return (
    <div
      className={`alert ${status === "success" ? "alert-success" : "alert-danger"} mt--20 mb--0`}
      role="alert"
    >
      {message}
    </div>
  );
};

export default FormAlert;
