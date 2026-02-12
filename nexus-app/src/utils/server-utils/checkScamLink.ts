import axiosInstance from "@/services/axiosConfig";

const GOOGLE_SAFE_BROWSING_URL = `https://safebrowsing.googleapis.com/v4/threatMatches:find?key=${process.env.GOOGLE_API_KEY}`;

export const checkScamLink = async (text: string) => {
  // 1. Extract URLs from text using Regex
  const urlRegex = /(https?:\/\/[^\s]+)/g;
  const urls = text.match(urlRegex);

  if (!urls) return { isSafe: true };

  // 2. Prepare request for Google Safe Browsing
  const body = {
    client: { clientId: "nexus-chat-app", clientVersion: "1.0.0" },
    threatInfo: {
      threatTypes: ["MALWARE", "SOCIAL_ENGINEERING", "UNWANTED_SOFTWARE"],
      platformTypes: ["ANY_PLATFORM"],
      threatEntryTypes: ["URL"],
      threatEntries: urls.map((url) => ({ url })),
    },
  };

  try {
    const response = await axiosInstance.post(GOOGLE_SAFE_BROWSING_URL, body);
    // If "matches" exists in response, it's a scam/malicious link
    if (response.data.matches) {
      return { isSafe: false, matches: response.data.matches };
    }
    return { isSafe: true };
  } catch (error) {
    console.error("Link Scan Error:", error);
    return { isSafe: true }; // Fallback to safe if API fails
  }
};
