import { memo, VFC, ReactNode } from "react";
import { Button } from "@chakra-ui/react";

type Props = {
  children: ReactNode;
  disabled?: boolean;
  loading?: boolean;
  onClick: () => void;
};

export const PrimaryButton: VFC<Props> = memo((props) => {
  const { children, disabled = false, loading = false, onClick } = props;
  return (
    <Button
      bg="gray"
      color="white"
      _hover={{ opacity: 0.8 }}
      disabled={disabled}
      isLoading={loading}
      onClick={onClick}
    >
      {children}
    </Button>
  );
});
