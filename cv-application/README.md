# CV Application

This project is a CV application that allows users to fill in their personal details, education, and work experience. Users can create, edit, cancel, and save forms for each section, with the results displayed on the right side of the page while the forms are on the left.

## Features

- **Personal Details**: Users can enter their name, email, and phone number.
- **Education**: Users can input their educational background, including degree, institution, and dates attended.
- **Experience**: Users can add their work experience, including job title, company, and duration.
- **Form Management**: Users can create, edit, and cancel entries for each section.
- **Responsive Layout**: The application is designed to display forms on the left and results on the right.

## Project Structure

```
cv-application
├── src
│   ├── components
│   │   ├── PersonalDetails
│   │   │   ├── index.jsx
│   │   │   └── form.jsx
│   │   ├── Education
│   │   │   ├── index.jsx
│   │   │   └── form.jsx
│   │   ├── Experience
│   │   │   ├── index.jsx
│   │   │   └── form.jsx
│   │   ├── option
│   │   │   └── option.jsx
│   │   └── Display
│   │       └── index.jsx
│   ├── App.jsx
│   ├── index.js
│   └── styles
│       └── main.css
├── package.json
├── README.md
└── .gitignore
```

## Installation

1. Clone the repository:
   ```
   git clone <repository-url>
   ```
2. Navigate to the project directory:
   ```
   cd cv-application
   ```
3. Install the dependencies:
   ```
   npm install
   ```

## Usage

To start the application, run:
```
npm start
```
This will launch the application in your default web browser.

## Contributing

Contributions are welcome! Please feel free to submit a pull request or open an issue for any enhancements or bug fixes.

## License

This project is licensed under the MIT License.