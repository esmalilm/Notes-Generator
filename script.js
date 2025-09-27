function generateDaily() {
  const form = document.getElementById('dailyForm');
  const output = `
Acc#: ${form.acc.value}
Case: ${form.case.value}
Affected Domain: ${form.domain.value}
Customer's Name: ${form.customer.value}
Authentication: ${form.auth.value}
Jarvis URL: ${form.url.value}
Issue: ${form.issue.value}
Steps Taken: ${form.steps.value}
  `;
  document.getElementById('dailyOutput').innerText = output.trim();
}

function generateEscalation() {
  const form = document.getElementById('escalationForm');
  const output = `
What needs fixing: ${form.fix.value}

Error Message: ${form.error.value}

When did the issue start occurring: ${form.when.value}

What was changed: ${form.changed.value}

Steps to replicate: ${form.steps.value}

Step 1 - ${form.s1.value}
Step 2 - ${form.s2.value}
Step 3 - ${form.s3.value}

Additional Notes: ${form.notes.value}
  `;
  document.getElementById('escalationOutput').innerText = output.trim();
}

function copyToClipboard(id) {
  const text = document.getElementById(id).innerText;
  navigator.clipboard.writeText(text).then(() => {
    alert("Copied to clipboard!");
  });
}