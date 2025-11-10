# Overview
- "Always review my #codebase before making changes."
- "Always ask for clarification before you try to implement a change."

## Error Handling 
"When fetching data, distinguish between different errors:
- Network errors: 'Connection failed'
- 404 errors: 'Resource not found'
- 500 errors: 'Server error, please try again later'
"
- "When an error occurs, provide user-friendly messages instead of technical errors.
Don't show users: 'TypeError: Cannot read property of undefined'
Instead show: 'Something went wrong. Please try again or contact support.'"

# File Organization And Placement 
- "Step 1: Identify the Issue
When you notice a file appears to be in the wrong location or misplaced, clearly describe the problem:

- What file is misplaced?
Where is it currently located?
Why does it belong elsewhere?

- Step 2: Suggest the Fix (ASK FOR PERMISSION)
Present your suggestion in this format:
SUGGESTED ACTION:
File: [filename]
Current Location: [current path]
Proposed Location: [new path]
Reason: [explanation of why this is better]

Would you like me to proceed with this change? (yes/no)
- Step 3: Wait for Approval
Do NOT move, rename, or reorganize any files until the user explicitly approves. Always ask for permission first, even if the fix seems obvious.
Step 4: Execute After Approval
Only after receiving approval, provide:

The exact commands or steps to make the change
A confirmation of what was moved/renamed
Verification that the new location is correct"
