// SearchIconButton.tsx
import { Icon } from "@iconify/react";
import { useRef } from "react";

interface Props {
  onClick: (rect: DOMRect) => void;
}

const SearchIconButton = ({ onClick }: Props) => {
  const buttonRef = useRef<HTMLButtonElement>(null);

  const handleClick = () => {
    if (buttonRef.current) {
      const rect = buttonRef.current.getBoundingClientRect();
      onClick(rect);
    }
  };

  return (
    <button
      ref={buttonRef}
      onClick={handleClick}
      className="p-2 rounded-full hover:bg-gray-100 transition"
    >
      <Icon icon="solar:magnifer-outline" width="22" />
    </button>
  );
};

export default SearchIconButton;
