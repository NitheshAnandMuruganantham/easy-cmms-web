import { generateSubdomain } from "./url";

// Function to redirect if the subdomain is the specified domain
function redirectToSelectOrg(domain: string) {
  var currentURL = window.location.hostname;
  var subdomains = currentURL.split(".");
  if (subdomains[0] === "www") {
    subdomains.shift();
  }

  if (subdomains[0] === "localhost" && subdomains.length <= 1) {
    return false;
  }

  if (
    subdomains.length === domain.split(".").length &&
    subdomains.slice(1).join(".") === domain.slice(1)
  ) {
    window.location.href = generateSubdomain("select-tenant");
    return true; // Indicate that redirection occurred
  }
  return false; // Indicate that no redirection occurred
}

// Main function to be called on page load
export function processSubdomain() {
  const domain = import.meta.env["VITE_BASE_URL"];
  // Redirect if subdomain matches the specified domain
  if (redirectToSelectOrg(domain)) {
    return; // Stop further processing if redirection occurred
  }

  // Get the current hostname
  var currentURL = window.location.hostname;

  // Extract subdomain from the hostname
  var subdomains = currentURL.split(".");
  // Get the tenantId from the subdomain
  var tenantId = subdomains[0];
  if (tenantId === String("www").toLowerCase()) {
    tenantId = undefined as any;
  }

  if (tenantId === "localhost") {
    tenantId = undefined as any;
  }

  if (tenantId) {
    localStorage.setItem("tenantId", tenantId);
  }
  console.log("Tenant ID:", tenantId);
  return tenantId;
}
