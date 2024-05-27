import React, { useState } from 'react';
import Select from 'react-select';

const LanguageSwitcher = () => {
  // Get the current path
const currentPath = window.location.pathname;

// Extract the language code from the path
const lang = currentPath.split('/')[1];
  const languageOptions = [
    { value: 'fr', label: 'Fr' },
    { value: 'es', label: 'Es' },
    { value: 'en', label: 'En' },
  ];

  const [selectedLanguage, setSelectedLanguage] = useState(languageOptions.find(option => option.value === 'en')); // Default to 'En'

  const handleLanguageChange = (selectedOption) => {
    const lang = selectedOption.value;
    const currentPath = window.location.pathname;
    const newPath = currentPath.replace(/^\/[a-z]{2}/, `/${lang}`);
    window.location.href = newPath;
    setSelectedLanguage(selectedOption); // Update selectedLanguage state
  };

  return (
    <div>
      <Select
        value='Language'
        onChange={handleLanguageChange}
        options={languageOptions}
        isSearchable={false}
        styles={{
          control: (provided) => ({
            ...provided,
            backgroundColor: 'transparent',
            border: 'none',
            boxShadow: 'none',
            color: 'white',
          }),
          singleValue: (provided) => ({
            ...provided,
            color: 'white',
          }),
        }}
      />
    </div>
  );
};

export default LanguageSwitcher;