// Base URL of the SmartTech Solutions Laravel backend API (see SmartTechSolutionsBackend/routes/api/v1/user.php).
// NEXT_PUBLIC_API_BASE_URL overrides this (set in .env.local for dev, already gitignored, pointing at
// http://localhost:8000/api/v1/user; set it in the host's dashboard for a staging API instead). Since that
// env file never reaches the deployed build, the fallback below targets the live SiteGround-hosted API at
// https://www.apis.smarttech.ng so production works even if the hosting provider's env var isn't configured.
export const API_BASE_URL =
  process.env.NEXT_PUBLIC_API_BASE_URL || "https://www.apis.smarttech.ng/api/v1/user";

// Generic POST helper for the public forms (appointment booking, contact, newsletter).
// Normalizes Laravel's success/validation-error response shapes into one predictable object,
// { ok, message, data }, so form components don't each need to know the API's response format.
export async function postToBackend(endpoint, payload) {
  try {
    const response = await fetch(`${API_BASE_URL}${endpoint}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(payload),
    });

    const body = await response.json().catch(() => null);

    if (!response.ok || !body || body.status === "failed") {
      const validationErrors = body?.message;
      const firstError =
        validationErrors && typeof validationErrors === "object"
          ? Object.values(validationErrors)[0]?.[0]
          : null;

      return {
        ok: false,
        message:
          firstError ||
          (typeof validationErrors === "string" ? validationErrors : null) ||
          "Something went wrong. Please try again in a moment.",
        data: null,
      };
    }

    return {
      ok: true,
      message: body.message,
      data: body.data,
    };
  } catch (error) {
    return {
      ok: false,
      message:
        "We couldn't reach the server. Please check your connection and try again.",
      data: null,
    };
  }
}

// Captures a render timestamp (ms) and exposes a honeypot field name, used together by every
// public form as a lightweight, no-dependency bot check the backend also validates.
export const HONEYPOT_FIELD_NAME = "website";

export function getFormRenderedAt() {
  return Date.now();
}
