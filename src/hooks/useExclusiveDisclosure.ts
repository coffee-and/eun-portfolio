import { useCallback, useState } from "react";

export type DisclosureToggleHandler = (
  id: string,
  isOpen: boolean,
) => void;

const useExclusiveDisclosure = () => {
  const [openId, setOpenId] = useState<string | null>(null);

  const handleToggle = useCallback<DisclosureToggleHandler>((id, isOpen) => {
    setOpenId((currentId) => {
      if (isOpen) {
        return id;
      }

      return currentId === id ? null : currentId;
    });
  }, []);

  return {
    openId,
    handleToggle,
  };
};

export default useExclusiveDisclosure;
