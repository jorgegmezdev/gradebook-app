document.getElementById("check-btn").addEventListener("click", (e) => {
  e.preventDefault(); // Prevent form submission
  const input = document.getElementById("text-input").value;
  const result = document.getElementById("result");

  if (!input.trim()) {
    alert("Please input a value");
    return;
  }

  const cleanInput = input.toLowerCase().replace(/[^a-z0-9]/gi, ""); // Remove non-alphanumerics

  const reversed = cleanInput.split("").reverse().join("");

  const isPalindrome = cleanInput === reversed;

  result.textContent = `${input} is${isPalindrome ? "" : " not"} a palindrome.`;
});
