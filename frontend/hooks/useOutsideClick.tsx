import { useEffect, useRef } from "react";

// Define a type for the callback function
type CallbackFunction = () => void;

const useOutsideClick = <T extends HTMLElement>(
  callback: CallbackFunction
): React.RefObject<T> => {
  // Create a ref to store a reference to the element that we need to check clicks outside of
  const ref = useRef<T>(null);

  useEffect(() => {
    // Add an event listener to the document that will handle outside click events
    const handleClick = (event: MouseEvent) => {
      // Check if the clicked element is outside of the target element
      if (ref.current && !ref.current.contains(event.target as Node)) {
        // If the clicked element is outside of the target element, call the provided callback function
        callback();
      }
    };

    // Attach the event listener to the document
    document.addEventListener("click", handleClick);

    // Clean up by removing the event listener when the component unmounts
    return () => {
      document.removeEventListener("click", handleClick);
    };
  });

  // Return the ref to the target element so that it can be used in the parent component
  return ref;
};

export default useOutsideClick;
