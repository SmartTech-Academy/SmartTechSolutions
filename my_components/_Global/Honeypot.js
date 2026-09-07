import { HONEYPOT_FIELD_NAME } from "@/helper/api";

// Anti-bot honeypot field: invisible to real visitors (and skipped by screen readers/tab order),
// but plain bots that auto-fill every input on a form will fill it in. The backend rejects any
// submission where this field is non-empty. Paired with a submission-speed check (see api.js).
const Honeypot = ({ value, onChange }) => {
  return (
    <div aria-hidden="true" style={{ position: "absolute", left: "-9999px", top: "-9999px", height: 0, width: 0, overflow: "hidden" }}>
      <label htmlFor={HONEYPOT_FIELD_NAME}>Leave this field empty</label>
      <input
        id={HONEYPOT_FIELD_NAME}
        name={HONEYPOT_FIELD_NAME}
        type="text"
        tabIndex={-1}
        autoComplete="off"
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

export default Honeypot;
