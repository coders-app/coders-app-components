import Typography, { TypographyProps } from "@mui/material/Typography";

type TypographyBaseProps = Pick<
  TypographyProps,
  "variant" | "align" | "children" | "className"
>;

export interface TypographyCodersProps extends TypographyBaseProps {}

const TypographyCoders = ({ ...props }: TypographyCodersProps): JSX.Element => {
  return <Typography {...props} />;
};

export default TypographyCoders;
