import { useEffect } from 'react';
import Script from 'next/script';

declare global {
  interface Window {
    datepicker: any;
  }
}

const DatePickerComponent: React.FC = () => {
  useEffect(() => {
    const initializeDatePicker = () => {
      const datepickerInput = document.getElementById('card-expiration-input') as HTMLInputElement;
      if (window.datepicker && datepickerInput) {
        new window.datepicker(datepickerInput, {
          format: 'mm/yy', // Example of setting the format, adjust as needed
        });
      }
    };

    if (window.datepicker) {
      initializeDatePicker();
    } else {
      window.addEventListener('load', initializeDatePicker);
    }

    return () => {
      window.removeEventListener('load', initializeDatePicker);
    };
  }, []);

  return (
    <>
      <input
        data-datepicker
        data-datepicker-format="mm/yy"
        id="card-expiration-input"
        type="text"
        className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 ps-9 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
        placeholder="12/23"
        required
      />
      <Script
        src="https://cdnjs.cloudflare.com/ajax/libs/flowbite/2.3.0/datepicker.min.js"
        strategy="afterInteractive"
        onLoad={() => {
          const datepickerInput = document.getElementById('card-expiration-input') as HTMLInputElement;
          if (window.datepicker && datepickerInput) {
            new window.datepicker(datepickerInput, {
              format: 'mm/yy',
            });
          }
        }}
      />
    </>
  );
}

export default DatePickerComponent;
