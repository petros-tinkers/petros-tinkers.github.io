// email.js

document.addEventListener("DOMContentLoaded", () => {
  // Find the email link by ID
  const emailLink = document.getElementById("email-link");

  if (emailLink) {
    // Retrieve the user and domain from data attributes
    const user = emailLink.getAttribute("data-user");
    const domain = emailLink.getAttribute("data-domain");

    if (user && domain) {
      // Construct the email address
      const email = `${user}@${domain}`;

      // Update the href attribute with the mailto link
      emailLink.href = `mailto:${email}`;
    }
  }
});
