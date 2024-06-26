import { Button } from "@/components/ui/button";

interface BtnProps {
  title: string;
  className: string;
  handleClick: () => void;
  type: "submit" | "button";
}
export default function ReusableButton(props: BtnProps) {
  return (
    <Button
      variant={"destructive"}
      type={props.type}
      className={`${props.className} hover:scale-95 transition-all duration-300 ease-in-out`}
    >
      {props.title}
    </Button>
  );
}
