# Password-Generator [visit-site](https://priyaganga-password-generator.netlify.app/)
This React app serves as a password generator, providing users the ability to generate a secure password based on specific criteria they choose:

# Password Criteria Selection:
Users can determine the length of the password through a slider.
They can include numbers by toggling the "Number" checkbox.
They can include special characters by toggling the "Character" checkbox.

# Password Generation:
The app dynamically generates passwords based on the selected criteria.
Whenever there's a change in the password criteria (length, inclusion of numbers or characters), the password is updated accordingly.

# Copy to Clipboard:
Generated passwords can be easily copied to the clipboard by clicking the "COPY" button.
The app uses React's useRef hook to select the password text and the navigator.clipboard.writeText method to copy it.

# Responsive Design:
The app is responsive, adapting its layout for different screen sizes, offering an optimal experience across devices.
Different layout styles are applied for larger screens and smaller mobile screens (sm and xxs).

# Visual Feedback:
There's a visual change in the "COPY" button color on hover (onMouseEnter and onMouseLeave events) to indicate interactivity.
Overall, this application provides an intuitive interface for users to customize and generate passwords meeting specific length and content criteria while allowing easy copying for use.
